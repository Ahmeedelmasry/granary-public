import { computed, createVNode, mergeProps, Fragment, createTextVNode, withModifiers, toRef, provide, inject, ref, watch, watchEffect } from 'vue';
import { k as genericComponent, i as useLocale, V as VSelect, l as VBtn, o as defineFunctionalComponent, q as convertToUnit, p as propsFactory, I as IconValue, v as makeLoaderProps, x as useLoader, y as useBackgroundColor, z as useRender, L as LoaderSlot, A as VCheckboxBtn, C as defineComponent, D as getPropertyFromItem, E as makeVTableProps, F as makeFilterProps, G as useFilter, H as provideDefaults, J as VTable, K as makeDimensionProps, M as makeElevationProps, N as makeThemeProps, O as useDimension, P as useElevation, Q as provideTheme, w as wrapInArray, b as useProxiedModel, e as getCurrentInstance, f as deepEqual, g as getObjectValueByPath, j as isEmpty, r as createRange, t as consoleWarn, B as VIcon, h as clamp } from '../server.mjs';

const makeDataTableExpandProps = propsFactory({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand");
const VDataTableExpandedKey = Symbol.for("vuetify:datatable:expanded");
function provideExpanded(props) {
  const expandOnClick = toRef(props, "expandOnClick");
  const expanded = useProxiedModel(props, "expanded", props.expanded, (v) => {
    return new Set(v);
  }, (v) => {
    return [...v.values()];
  });
  function expand(item, value) {
    const newExpanded = new Set(expanded.value);
    if (!value) {
      newExpanded.delete(item.value);
    } else {
      newExpanded.add(item.value);
    }
    expanded.value = newExpanded;
  }
  function isExpanded(item) {
    return expanded.value.has(item.value);
  }
  function toggleExpand(item) {
    expand(item, !isExpanded(item));
  }
  const data = {
    expand,
    expanded,
    expandOnClick,
    isExpanded,
    toggleExpand
  };
  provide(VDataTableExpandedKey, data);
  return data;
}
function useExpanded() {
  const data = inject(VDataTableExpandedKey);
  if (!data)
    throw new Error("foo");
  return data;
}
const makeDataTableGroupProps = propsFactory({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group");
const VDataTableGroupSymbol = Symbol.for("vuetify:data-table-group");
function createGroupBy(props) {
  const groupBy = useProxiedModel(props, "groupBy");
  return {
    groupBy
  };
}
function provideGroupBy(options) {
  const {
    groupBy,
    sortBy
  } = options;
  const opened = ref(/* @__PURE__ */ new Set());
  const sortByWithGroups = computed(() => {
    return groupBy.value.map((val) => {
      var _a;
      return {
        ...val,
        order: (_a = val.order) != null ? _a : false
      };
    }).concat(sortBy.value);
  });
  function isGroupOpen(group) {
    return opened.value.has(group.id);
  }
  function toggleGroup(group) {
    const newOpened = new Set(opened.value);
    if (!isGroupOpen(group))
      newOpened.add(group.id);
    else
      newOpened.delete(group.id);
    opened.value = newOpened;
  }
  function extractRows(items) {
    function dive(group) {
      const arr = [];
      for (const item of group.items) {
        if ("type" in item && item.type === "group") {
          arr.push(...dive(item));
        } else {
          arr.push(item);
        }
      }
      return arr;
    }
    return dive({
      type: "group",
      items,
      id: "dummy",
      key: "dummy",
      value: "dummy",
      depth: 0
    });
  }
  const data = {
    sortByWithGroups,
    toggleGroup,
    opened,
    groupBy,
    extractRows,
    isGroupOpen
  };
  provide(VDataTableGroupSymbol, data);
  return data;
}
function useGroupBy() {
  const data = inject(VDataTableGroupSymbol);
  if (!data)
    throw new Error("Missing group!");
  return data;
}
function groupItemsByProperty(items, groupBy) {
  if (!items.length)
    return [];
  const groups = /* @__PURE__ */ new Map();
  for (const item of items) {
    const value = getObjectValueByPath(item.raw, groupBy);
    if (!groups.has(value)) {
      groups.set(value, []);
    }
    groups.get(value).push(item);
  }
  return groups;
}
function groupItems(items, groupBy) {
  let depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  let prefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!groupBy.length)
    return [];
  const groupedItems = groupItemsByProperty(items, groupBy[0]);
  const groups = [];
  const rest = groupBy.slice(1);
  groupedItems.forEach((items2, value) => {
    const key = groupBy[0];
    const id = `${prefix}_${key}_${value}`;
    groups.push({
      depth,
      id,
      key,
      value,
      items: rest.length ? groupItems(items2, rest, depth + 1, id) : items2,
      type: "group"
    });
  });
  return groups;
}
function flattenItems(items, opened) {
  const flatItems = [];
  for (const item of items) {
    if ("type" in item && item.type === "group") {
      if (item.value != null) {
        flatItems.push(item);
      }
      if (opened.has(item.id) || item.value == null) {
        flatItems.push(...flattenItems(item.items, opened));
      }
    } else {
      flatItems.push(item);
    }
  }
  return flatItems;
}
function useGroupedItems(items, groupBy, opened) {
  const flatItems = computed(() => {
    if (!groupBy.value.length)
      return items.value;
    const groupedItems = groupItems(items.value, groupBy.value.map((item) => item.key));
    return flattenItems(groupedItems, opened.value);
  });
  return {
    flatItems
  };
}
function useOptions(_ref) {
  let {
    page,
    itemsPerPage,
    sortBy,
    groupBy,
    search
  } = _ref;
  const vm = getCurrentInstance("VDataTable");
  const options = computed(() => ({
    page: page.value,
    itemsPerPage: itemsPerPage.value,
    sortBy: sortBy.value,
    groupBy: groupBy.value,
    search: search.value
  }));
  watch(() => search == null ? void 0 : search.value, () => {
    page.value = 1;
  });
  let oldOptions = null;
  watch(options, () => {
    if (deepEqual(oldOptions, options.value))
      return;
    vm.emit("update:options", options.value);
    oldOptions = options.value;
  }, {
    deep: true,
    immediate: true
  });
}
const makeDataTablePaginateProps = propsFactory({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate");
const VDataTablePaginationSymbol = Symbol.for("vuetify:data-table-pagination");
function createPagination(props) {
  const page = useProxiedModel(props, "page", void 0, (value) => +(value != null ? value : 1));
  const itemsPerPage = useProxiedModel(props, "itemsPerPage", void 0, (value) => +(value != null ? value : 10));
  return {
    page,
    itemsPerPage
  };
}
function providePagination(options) {
  const {
    page,
    itemsPerPage,
    itemsLength
  } = options;
  const startIndex = computed(() => {
    if (itemsPerPage.value === -1)
      return 0;
    return itemsPerPage.value * (page.value - 1);
  });
  const stopIndex = computed(() => {
    if (itemsPerPage.value === -1)
      return itemsLength.value;
    return Math.min(itemsLength.value, startIndex.value + itemsPerPage.value);
  });
  const pageCount = computed(() => {
    if (itemsPerPage.value === -1 || itemsLength.value === 0)
      return 1;
    return Math.ceil(itemsLength.value / itemsPerPage.value);
  });
  watchEffect(() => {
    if (page.value > pageCount.value) {
      page.value = pageCount.value;
    }
  });
  function setItemsPerPage(value) {
    itemsPerPage.value = value;
    page.value = 1;
  }
  function nextPage() {
    page.value = clamp(page.value + 1, 1, pageCount.value);
  }
  function prevPage() {
    page.value = clamp(page.value - 1, 1, pageCount.value);
  }
  function setPage(value) {
    page.value = clamp(value, 1, pageCount.value);
  }
  const data = {
    page,
    itemsPerPage,
    startIndex,
    stopIndex,
    pageCount,
    itemsLength,
    nextPage,
    prevPage,
    setPage,
    setItemsPerPage
  };
  provide(VDataTablePaginationSymbol, data);
  return data;
}
function usePagination() {
  const data = inject(VDataTablePaginationSymbol);
  if (!data)
    throw new Error("Missing pagination!");
  return data;
}
function usePaginatedItems(options) {
  const {
    items,
    startIndex,
    stopIndex,
    itemsPerPage
  } = options;
  const paginatedItems = computed(() => {
    if (itemsPerPage.value <= 0)
      return items.value;
    return items.value.slice(startIndex.value, stopIndex.value);
  });
  return {
    paginatedItems
  };
}
const singleSelectStrategy = {
  showSelectAll: false,
  allSelected: () => [],
  select: (_ref) => {
    var _a;
    let {
      items,
      value
    } = _ref;
    return new Set(value ? [(_a = items[0]) == null ? void 0 : _a.value] : []);
  },
  selectAll: (_ref2) => {
    let {
      selected
    } = _ref2;
    return selected;
  }
};
const pageSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref3) => {
    let {
      currentPage
    } = _ref3;
    return currentPage;
  },
  select: (_ref4) => {
    let {
      items,
      value,
      selected
    } = _ref4;
    for (const item of items) {
      if (value)
        selected.add(item.value);
      else
        selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref5) => {
    let {
      value,
      currentPage,
      selected
    } = _ref5;
    return pageSelectStrategy.select({
      items: currentPage,
      value,
      selected
    });
  }
};
const allSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref6) => {
    let {
      allItems
    } = _ref6;
    return allItems;
  },
  select: (_ref7) => {
    let {
      items,
      value,
      selected
    } = _ref7;
    for (const item of items) {
      if (value)
        selected.add(item.value);
      else
        selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref8) => {
    let {
      value,
      allItems,
      selected
    } = _ref8;
    return allSelectStrategy.select({
      items: allItems,
      value,
      selected
    });
  }
};
const makeDataTableSelectProps = propsFactory({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  }
}, "DataTable-select");
const VDataTableSelectionSymbol = Symbol.for("vuetify:data-table-selection");
function provideSelection(props, _ref9) {
  let {
    allItems,
    currentPage
  } = _ref9;
  const selected = useProxiedModel(props, "modelValue", props.modelValue, (v) => {
    return new Set(v);
  }, (v) => {
    return [...v.values()];
  });
  const allSelectable = computed(() => allItems.value.filter((item) => item.selectable));
  const currentPageSelectable = computed(() => currentPage.value.filter((item) => item.selectable));
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === "object")
      return props.selectStrategy;
    switch (props.selectStrategy) {
      case "single":
        return singleSelectStrategy;
      case "all":
        return allSelectStrategy;
      case "page":
      default:
        return pageSelectStrategy;
    }
  });
  function isSelected(items) {
    return wrapInArray(items).every((item) => selected.value.has(item.value));
  }
  function isSomeSelected(items) {
    return wrapInArray(items).some((item) => selected.value.has(item.value));
  }
  function select(items, value) {
    const newSelected = selectStrategy.value.select({
      items,
      value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  function toggleSelect(item) {
    select([item], !isSelected([item]));
  }
  function selectAll(value) {
    const newSelected = selectStrategy.value.selectAll({
      value,
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  const someSelected = computed(() => selected.value.size > 0);
  const allSelected = computed(() => {
    const items = selectStrategy.value.allSelected({
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value
    });
    return isSelected(items);
  });
  const data = {
    toggleSelect,
    select,
    selectAll,
    isSelected,
    isSomeSelected,
    someSelected,
    allSelected,
    showSelectAll: selectStrategy.value.showSelectAll
  };
  provide(VDataTableSelectionSymbol, data);
  return data;
}
function useSelection() {
  const data = inject(VDataTableSelectionSymbol);
  if (!data)
    throw new Error("Missing selection!");
  return data;
}
const makeDataTableSortProps = propsFactory({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort");
const VDataTableSortSymbol = Symbol.for("vuetify:data-table-sort");
function createSort(props) {
  const sortBy = useProxiedModel(props, "sortBy");
  const mustSort = toRef(props, "mustSort");
  const multiSort = toRef(props, "multiSort");
  return {
    sortBy,
    mustSort,
    multiSort
  };
}
function provideSort(options) {
  const {
    sortBy,
    mustSort,
    multiSort,
    page
  } = options;
  const toggleSort = (column) => {
    var _a;
    let newSortBy = (_a = sortBy.value.map((x) => ({
      ...x
    }))) != null ? _a : [];
    const item = newSortBy.find((x) => x.key === column.key);
    if (!item) {
      if (multiSort.value)
        newSortBy = [...newSortBy, {
          key: column.key,
          order: "asc"
        }];
      else
        newSortBy = [{
          key: column.key,
          order: "asc"
        }];
    } else if (item.order === "desc") {
      if (mustSort.value) {
        item.order = "asc";
      } else {
        newSortBy = newSortBy.filter((x) => x.key !== column.key);
      }
    } else {
      item.order = "desc";
    }
    sortBy.value = newSortBy;
    if (page)
      page.value = 1;
  };
  function isSorted(column) {
    return !!sortBy.value.find((item) => item.key === column.key);
  }
  const data = {
    sortBy,
    toggleSort,
    isSorted
  };
  provide(VDataTableSortSymbol, data);
  return data;
}
function useSort() {
  const data = inject(VDataTableSortSymbol);
  if (!data)
    throw new Error("Missing sort!");
  return data;
}
function useSortedItems(props, items, sortBy) {
  const locale = useLocale();
  const sortedItems = computed(() => {
    if (!sortBy.value.length)
      return items.value;
    return sortItems(items.value, sortBy.value, locale.current.value, props.customKeySort);
  });
  return {
    sortedItems
  };
}
function sortItems(items, sortByItems, locale, customSorters) {
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: "accent",
    usage: "sort"
  });
  return [...items].sort((a, b) => {
    var _a;
    for (let i = 0; i < sortByItems.length; i++) {
      const sortKey = sortByItems[i].key;
      const sortOrder = (_a = sortByItems[i].order) != null ? _a : "asc";
      if (sortOrder === false)
        continue;
      let sortA = getObjectValueByPath(a.raw, sortKey);
      let sortB = getObjectValueByPath(b.raw, sortKey);
      if (sortOrder === "desc") {
        [sortA, sortB] = [sortB, sortA];
      }
      if (customSorters == null ? void 0 : customSorters[sortKey]) {
        const customResult = customSorters[sortKey](sortA, sortB);
        if (!customResult)
          continue;
        return customResult;
      }
      if (sortA instanceof Date && sortB instanceof Date) {
        return sortA.getTime() - sortB.getTime();
      }
      [sortA, sortB] = [sortA, sortB].map((s) => s != null ? s.toString().toLocaleLowerCase() : s);
      if (sortA !== sortB) {
        if (isEmpty(sortA) && isEmpty(sortB))
          return 0;
        if (isEmpty(sortA))
          return -1;
        if (isEmpty(sortB))
          return 1;
        if (!isNaN(sortA) && !isNaN(sortB))
          return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }
    return 0;
  });
}
const makeVDataTableFooterProps = propsFactory({
  prevIcon: {
    type: String,
    default: "$prev"
  },
  nextIcon: {
    type: String,
    default: "$next"
  },
  firstIcon: {
    type: String,
    default: "$first"
  },
  lastIcon: {
    type: String,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter");
const VDataTableFooter = genericComponent()({
  name: "VDataTableFooter",
  props: makeVDataTableFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      page,
      pageCount,
      startIndex,
      stopIndex,
      itemsLength,
      itemsPerPage,
      setItemsPerPage
    } = usePagination();
    const itemsPerPageOptions = computed(() => props.itemsPerPageOptions.map((option) => ({
      ...option,
      title: t(option.title)
    })));
    return () => {
      var _a;
      return createVNode("div", {
        "class": "v-data-table-footer"
      }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots), createVNode("div", {
        "class": "v-data-table-footer__items-per-page"
      }, [createVNode("span", null, [t(props.itemsPerPageText)]), createVNode(VSelect, {
        "items": itemsPerPageOptions.value,
        "modelValue": itemsPerPage.value,
        "onUpdate:modelValue": (v) => setItemsPerPage(Number(v)),
        "density": "compact",
        "variant": "outlined",
        "hide-details": true
      }, null)]), createVNode("div", {
        "class": "v-data-table-footer__info"
      }, [createVNode("div", null, [t(props.pageText, !itemsLength.value ? 0 : startIndex.value + 1, stopIndex.value, itemsLength.value)])]), createVNode("div", {
        "class": "v-data-table-footer__pagination"
      }, [createVNode(VBtn, {
        "icon": props.firstIcon,
        "variant": "plain",
        "onClick": () => page.value = 1,
        "disabled": page.value === 1,
        "aria-label": t(props.firstPageLabel)
      }, null), createVNode(VBtn, {
        "icon": props.prevIcon,
        "variant": "plain",
        "onClick": () => page.value = Math.max(1, page.value - 1),
        "disabled": page.value === 1,
        "aria-label": t(props.prevPageLabel)
      }, null), props.showCurrentPage && createVNode("span", {
        "key": "page",
        "class": "v-data-table-footer__page"
      }, [page.value]), createVNode(VBtn, {
        "icon": props.nextIcon,
        "variant": "plain",
        "onClick": () => page.value = Math.min(pageCount.value, page.value + 1),
        "disabled": page.value === pageCount.value,
        "aria-label": t(props.nextPageLabel)
      }, null), createVNode(VBtn, {
        "icon": props.lastIcon,
        "variant": "plain",
        "onClick": () => page.value = pageCount.value,
        "disabled": page.value === pageCount.value,
        "aria-label": t(props.lastPageLabel)
      }, null)])]);
    };
  }
});
const VDataTableColumn = defineFunctionalComponent({
  align: {
    type: String,
    default: "start"
  },
  fixed: Boolean,
  fixedOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String]
}, (props, _ref) => {
  var _a;
  let {
    slots,
    attrs
  } = _ref;
  const Tag = (_a = props.tag) != null ? _a : "td";
  return createVNode(Tag, mergeProps({
    "class": ["v-data-table__td", {
      "v-data-table-column--fixed": props.fixed,
      "v-data-table-column--last-fixed": props.lastFixed,
      "v-data-table-column--no-padding": props.noPadding
    }, `v-data-table-column--align-${props.align}`],
    "style": {
      height: convertToUnit(props.height),
      width: convertToUnit(props.width),
      left: convertToUnit(props.fixedOffset || null)
    }
  }, attrs), {
    default: () => {
      var _a2;
      return [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)];
    }
  });
});
const makeDataTableHeaderProps = propsFactory({
  headers: {
    type: Array,
    default: () => []
  }
}, "DataTable-header");
const VDataTableHeadersSymbol = Symbol.for("vuetify:data-table-headers");
function createHeaders(props, options) {
  const headers = ref([]);
  const columns = ref([]);
  watchEffect(() => {
    var _a2;
    var _a, _b, _c;
    const wrapped = !props.headers.length ? [] : Array.isArray(props.headers[0]) ? props.headers : [props.headers];
    const flat = wrapped.flatMap((row, index) => row.map((column) => ({
      column,
      row: index
    })));
    const rowCount = wrapped.length;
    const defaultHeader = {
      title: "",
      sortable: false
    };
    const defaultActionHeader = {
      ...defaultHeader,
      width: 48
    };
    if ((_a = options == null ? void 0 : options.groupBy) == null ? void 0 : _a.value.length) {
      const index = flat.findIndex((_ref) => {
        let {
          column
        } = _ref;
        return column.key === "data-table-group";
      });
      if (index < 0)
        flat.unshift({
          column: {
            ...defaultHeader,
            key: "data-table-group",
            title: "Group",
            rowspan: rowCount
          },
          row: 0
        });
      else
        flat.splice(index, 1, {
          column: {
            ...defaultHeader,
            ...flat[index].column
          },
          row: flat[index].row
        });
    }
    if ((_b = options == null ? void 0 : options.showSelect) == null ? void 0 : _b.value) {
      const index = flat.findIndex((_ref2) => {
        let {
          column
        } = _ref2;
        return column.key === "data-table-select";
      });
      if (index < 0)
        flat.unshift({
          column: {
            ...defaultActionHeader,
            key: "data-table-select",
            rowspan: rowCount
          },
          row: 0
        });
      else
        flat.splice(index, 1, {
          column: {
            ...defaultActionHeader,
            ...flat[index].column
          },
          row: flat[index].row
        });
    }
    if ((_c = options == null ? void 0 : options.showExpand) == null ? void 0 : _c.value) {
      const index = flat.findIndex((_ref3) => {
        let {
          column
        } = _ref3;
        return column.key === "data-table-expand";
      });
      if (index < 0)
        flat.push({
          column: {
            ...defaultActionHeader,
            key: "data-table-expand",
            rowspan: rowCount
          },
          row: 0
        });
      else
        flat.splice(index, 1, {
          column: {
            ...defaultActionHeader,
            ...flat[index].column
          },
          row: flat[index].row
        });
    }
    const fixedRows = createRange(rowCount).map(() => []);
    const fixedOffsets = createRange(rowCount).fill(0);
    flat.forEach((_ref4) => {
      var _a3, _b2, _c2;
      let {
        column,
        row
      } = _ref4;
      let key = column.key;
      if (key == null) {
        consoleWarn("The header key value must not be null or undefined");
        key = "";
      }
      for (let i = row; i <= row + ((_a3 = column.rowspan) != null ? _a3 : 1) - 1; i++) {
        fixedRows[i].push({
          ...column,
          key,
          fixedOffset: fixedOffsets[i],
          sortable: (_b2 = column.sortable) != null ? _b2 : !!column.key
        });
        fixedOffsets[i] += Number((_c2 = column.width) != null ? _c2 : 0);
      }
    });
    fixedRows.forEach((row) => {
      for (let i = row.length; i--; i >= 0) {
        if (row[i].fixed) {
          row[i].lastFixed = true;
          return;
        }
      }
    });
    const seen = /* @__PURE__ */ new Set();
    headers.value = fixedRows.map((row) => {
      const filtered = [];
      for (const column of row) {
        if (!seen.has(column.key)) {
          seen.add(column.key);
          filtered.push(column);
        }
      }
      return filtered;
    });
    columns.value = (_a2 = fixedRows.at(-1)) != null ? _a2 : [];
  });
  const data = {
    headers,
    columns
  };
  provide(VDataTableHeadersSymbol, data);
  return data;
}
function useHeaders() {
  const data = inject(VDataTableHeadersSymbol);
  if (!data)
    throw new Error("Missing headers!");
  return data;
}
const makeVDataTableHeadersProps = propsFactory({
  color: String,
  sticky: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: IconValue,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: IconValue,
    default: "$sortDesc"
  },
  ...makeLoaderProps()
}, "VDataTableHeaders");
const VDataTableHeaders = genericComponent()({
  name: "VDataTableHeaders",
  props: makeVDataTableHeadersProps(),
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const {
      toggleSort,
      sortBy,
      isSorted
    } = useSort();
    const {
      someSelected,
      allSelected,
      selectAll,
      showSelectAll
    } = useSelection();
    const {
      columns,
      headers
    } = useHeaders();
    const {
      loaderClasses
    } = useLoader(props);
    const getFixedStyles = (column, y) => {
      if (!props.sticky && !column.fixed)
        return void 0;
      return {
        position: "sticky",
        zIndex: column.fixed ? 4 : props.sticky ? 3 : void 0,
        // TODO: This needs to account for possible previous fixed columns.
        left: column.fixed ? convertToUnit(column.fixedOffset) : void 0,
        // TODO: This needs to account for possible row/colspan of previous columns
        top: props.sticky ? `calc(var(--v-table-header-height) * ${y})` : void 0
      };
    };
    function getSortIcon(column) {
      const item = sortBy.value.find((item2) => item2.key === column.key);
      if (!item)
        return props.sortAscIcon;
      return item.order === "asc" ? props.sortAscIcon : props.sortDescIcon;
    }
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "color");
    const slotProps = computed(() => ({
      headers: headers.value,
      columns: columns.value,
      toggleSort,
      isSorted,
      sortBy: sortBy.value,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      selectAll,
      getSortIcon,
      getFixedStyles
    }));
    const VDataTableHeaderCell = (_ref2) => {
      let {
        column,
        x,
        y
      } = _ref2;
      const noPadding = column.key === "data-table-select" || column.key === "data-table-expand";
      return createVNode(VDataTableColumn, {
        "tag": "th",
        "align": column.align,
        "class": ["v-data-table__th", {
          "v-data-table__th--sortable": column.sortable,
          "v-data-table__th--sorted": isSorted(column)
        }, loaderClasses.value],
        "style": {
          width: convertToUnit(column.width),
          minWidth: convertToUnit(column.width),
          ...getFixedStyles(column, y)
        },
        "colspan": column.colspan,
        "rowspan": column.rowspan,
        "onClick": column.sortable ? () => toggleSort(column) : void 0,
        "lastFixed": column.lastFixed,
        "noPadding": noPadding
      }, {
        default: () => {
          var _a2;
          var _a;
          const columnSlotName = `column.${column.key}`;
          const columnSlotProps = {
            column,
            selectAll,
            isSorted,
            toggleSort,
            sortBy: sortBy.value,
            someSelected: someSelected.value,
            allSelected: allSelected.value,
            getSortIcon
          };
          if (slots[columnSlotName])
            return slots[columnSlotName](columnSlotProps);
          if (column.key === "data-table-select") {
            return (_a2 = (_a = slots["column.data-table-select"]) == null ? void 0 : _a.call(slots, columnSlotProps)) != null ? _a2 : showSelectAll && createVNode(VCheckboxBtn, {
              "modelValue": allSelected.value,
              "indeterminate": someSelected.value && !allSelected.value,
              "onUpdate:modelValue": selectAll
            }, null);
          }
          return createVNode("div", {
            "class": "v-data-table-header__content"
          }, [createVNode("span", null, [column.title]), column.sortable && createVNode(VIcon, {
            "key": "icon",
            "class": "v-data-table-header__sort-icon",
            "icon": getSortIcon(column)
          }, null), props.multiSort && isSorted(column) && createVNode("div", {
            "key": "badge",
            "class": ["v-data-table-header__sort-badge", ...backgroundColorClasses.value],
            "style": backgroundColorStyles.value
          }, [sortBy.value.findIndex((x2) => x2.key === column.key) + 1])]);
        }
      });
    };
    useRender(() => {
      return createVNode(Fragment, null, [slots.headers ? slots.headers(slotProps.value) : headers.value.map((row, y) => createVNode("tr", null, [row.map((column, x) => createVNode(VDataTableHeaderCell, {
        "column": column,
        "x": x,
        "y": y
      }, null))])), props.loading && createVNode("tr", {
        "class": "v-data-table-progress"
      }, [createVNode("th", {
        "colspan": columns.value.length
      }, [createVNode(LoaderSlot, {
        "name": "v-data-table-progress",
        "active": true,
        "color": typeof props.loading === "boolean" ? void 0 : props.loading,
        "indeterminate": true
      }, {
        default: slots.loader
      })])])]);
    });
  }
});
const makeVDataTableGroupHeaderRowProps = propsFactory({
  item: {
    type: Object,
    required: true
  }
}, "VDataTableGroupHeaderRow");
const VDataTableGroupHeaderRow = genericComponent()({
  name: "VDataTableGroupHeaderRow",
  props: makeVDataTableGroupHeaderRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isGroupOpen,
      toggleGroup,
      extractRows
    } = useGroupBy();
    const {
      isSelected,
      isSomeSelected,
      select
    } = useSelection();
    const {
      columns
    } = useHeaders();
    const rows = computed(() => {
      return extractRows([props.item]);
    });
    return () => createVNode("tr", {
      "class": "v-data-table-group-header-row",
      "style": {
        "--v-data-table-group-header-row-depth": props.item.depth
      }
    }, [columns.value.map((column) => {
      var _a2, _b2;
      var _a, _b;
      if (column.key === "data-table-group") {
        const icon = isGroupOpen(props.item) ? "$expand" : "$next";
        const onClick = () => toggleGroup(props.item);
        return (_a2 = (_a = slots["data-table-group"]) == null ? void 0 : _a.call(slots, {
          item: props.item,
          count: rows.value.length,
          props: {
            icon,
            onClick
          }
        })) != null ? _a2 : createVNode(VDataTableColumn, {
          "class": "v-data-table-group-header-row__column"
        }, {
          default: () => [createVNode(VBtn, {
            "size": "small",
            "variant": "text",
            "icon": icon,
            "onClick": onClick
          }, null), createVNode("span", null, [props.item.value]), createVNode("span", null, [createTextVNode("("), rows.value.length, createTextVNode(")")])]
        });
      }
      if (column.key === "data-table-select") {
        const modelValue = isSelected(rows.value);
        const indeterminate = isSomeSelected(rows.value) && !modelValue;
        const selectGroup = (v) => select(rows.value, v);
        return (_b2 = (_b = slots["data-table-select"]) == null ? void 0 : _b.call(slots, {
          props: {
            modelValue,
            indeterminate,
            "onUpdate:modelValue": selectGroup
          }
        })) != null ? _b2 : createVNode("td", null, [createVNode(VCheckboxBtn, {
          "modelValue": modelValue,
          "indeterminate": indeterminate,
          "onUpdate:modelValue": selectGroup
        }, null)]);
      }
      return createVNode("td", null, null);
    })]);
  }
});
const makeVDataTableRowProps = propsFactory({
  index: Number,
  item: Object,
  onClick: Function
}, "VDataTableRow");
const VDataTableRow = /* @__PURE__ */ defineComponent({
  name: "VDataTableRow",
  props: makeVDataTableRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isSelected,
      toggleSelect
    } = useSelection();
    const {
      isExpanded,
      toggleExpand
    } = useExpanded();
    const {
      columns
    } = useHeaders();
    useRender(() => createVNode("tr", {
      "class": ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!props.onClick
      }],
      "onClick": props.onClick
    }, [props.item && columns.value.map((column, i) => createVNode(VDataTableColumn, {
      "align": column.align,
      "fixed": column.fixed,
      "fixedOffset": column.fixedOffset,
      "lastFixed": column.lastFixed,
      "noPadding": column.key === "data-table-select" || column.key === "data-table-expand",
      "width": column.width
    }, {
      default: () => {
        var _a2, _b2;
        var _a, _b;
        const item = props.item;
        const slotName = `item.${column.key}`;
        const slotProps = {
          index: props.index,
          item: props.item,
          columns: columns.value,
          isSelected,
          toggleSelect,
          isExpanded,
          toggleExpand
        };
        if (slots[slotName])
          return slots[slotName](slotProps);
        if (column.key === "data-table-select") {
          return (_a2 = (_a = slots["item.data-table-select"]) == null ? void 0 : _a.call(slots, slotProps)) != null ? _a2 : createVNode(VCheckboxBtn, {
            "disabled": !item.selectable,
            "modelValue": isSelected([item]),
            "onClick": withModifiers(() => toggleSelect(item), ["stop"])
          }, null);
        }
        if (column.key === "data-table-expand") {
          return (_b2 = (_b = slots["item.data-table-expand"]) == null ? void 0 : _b.call(slots, slotProps)) != null ? _b2 : createVNode(VBtn, {
            "icon": isExpanded(item) ? "$collapse" : "$expand",
            "size": "small",
            "variant": "text",
            "onClick": withModifiers(() => toggleExpand(item), ["stop"])
          }, null);
        }
        return getPropertyFromItem(item.columns, column.key);
      }
    }))]));
  }
});
const makeVDataTableRowsProps = propsFactory({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowHeight: Number,
  "onClick:row": Function
}, "VDataTableRows");
const VDataTableRows = genericComponent()({
  name: "VDataTableRows",
  props: makeVDataTableRowsProps(),
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      columns
    } = useHeaders();
    const {
      expandOnClick,
      toggleExpand,
      isExpanded
    } = useExpanded();
    const {
      isSelected,
      toggleSelect
    } = useSelection();
    const {
      toggleGroup,
      isGroupOpen
    } = useGroupBy();
    const {
      t
    } = useLocale();
    useRender(() => {
      var _a2;
      var _a;
      if (props.loading && slots.loading) {
        return createVNode("tr", {
          "class": "v-data-table-rows-loading",
          "key": "loading"
        }, [createVNode("td", {
          "colspan": columns.value.length
        }, [slots.loading()])]);
      }
      if (!props.loading && !props.items.length && !props.hideNoData) {
        return createVNode("tr", {
          "class": "v-data-table-rows-no-data",
          "key": "no-data"
        }, [createVNode("td", {
          "colspan": columns.value.length
        }, [(_a2 = (_a = slots["no-data"]) == null ? void 0 : _a.call(slots)) != null ? _a2 : t(props.noDataText)])]);
      }
      return createVNode(Fragment, null, [props.items.map((item, index) => {
        var _a3;
        var _a22;
        if (item.type === "group") {
          return slots["group-header"] ? slots["group-header"]({
            index,
            item,
            columns: columns.value,
            isExpanded,
            toggleExpand,
            isSelected,
            toggleSelect,
            toggleGroup,
            isGroupOpen
          }) : createVNode(VDataTableGroupHeaderRow, {
            "key": `group-header_${item.id}`,
            "item": item
          }, slots);
        }
        const slotProps = {
          index,
          item,
          columns: columns.value,
          isExpanded,
          toggleExpand,
          isSelected,
          toggleSelect
        };
        const itemSlotProps = {
          ...slotProps,
          props: {
            key: `item_${(_a3 = item.key) != null ? _a3 : item.index}`,
            onClick: expandOnClick.value || props["onClick:row"] ? (event) => {
              var _a32;
              if (expandOnClick.value) {
                toggleExpand(item);
              }
              (_a32 = props["onClick:row"]) == null ? void 0 : _a32.call(props, event, {
                item
              });
            } : void 0,
            index,
            item
          }
        };
        return createVNode(Fragment, null, [slots.item ? slots.item(itemSlotProps) : createVNode(VDataTableRow, itemSlotProps.props, slots), isExpanded(item) && ((_a22 = slots["expanded-row"]) == null ? void 0 : _a22.call(slots, slotProps))]);
      })]);
    });
    return {};
  }
});
const makeDataTableItemsProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  returnObject: Boolean
}, "DataTable-items");
function transformItem(props, item, index, columns) {
  const value = props.returnObject ? item : getPropertyFromItem(item, props.itemValue);
  const selectable = getPropertyFromItem(item, props.itemSelectable, true);
  const itemColumns = columns.reduce((obj, column) => {
    var _a;
    obj[column.key] = getPropertyFromItem(item, (_a = column.value) != null ? _a : column.key);
    return obj;
  }, {});
  return {
    type: "item",
    key: props.returnObject ? getPropertyFromItem(item, props.itemValue) : value,
    index,
    value,
    selectable,
    columns: itemColumns,
    raw: item
  };
}
function transformItems(props, items, columns) {
  return items.map((item, index) => transformItem(props, item, index, columns));
}
function useDataTableItems(props, columns) {
  const items = computed(() => transformItems(props, props.items, columns.value));
  return {
    items
  };
}
const makeDataTableProps = propsFactory({
  ...makeVDataTableRowsProps(),
  width: [String, Number],
  search: String,
  ...makeDataTableExpandProps(),
  ...makeDataTableGroupProps(),
  ...makeDataTableHeaderProps(),
  ...makeDataTableItemsProps(),
  ...makeDataTableSelectProps(),
  ...makeDataTableSortProps(),
  ...makeVDataTableHeadersProps(),
  ...makeVTableProps()
}, "DataTable");
const makeVDataTableProps = propsFactory({
  ...makeDataTablePaginateProps(),
  ...makeDataTableProps(),
  ...makeFilterProps(),
  ...makeVDataTableFooterProps()
}, "VDataTable");
genericComponent()({
  name: "VDataTable",
  props: makeVDataTableProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:page": (value) => true,
    "update:itemsPerPage": (value) => true,
    "update:sortBy": (value) => true,
    "update:options": (value) => true,
    "update:groupBy": (value) => true,
    "update:expanded": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const {
      columns,
      headers
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, "showSelect"),
      showExpand: toRef(props, "showExpand")
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const search = toRef(props, "search");
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: (item) => item.columns
    });
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups);
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const itemsLength = computed(() => flatItems.value.length);
    const {
      startIndex,
      stopIndex,
      pageCount,
      setItemsPerPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      paginatedItems
    } = usePaginatedItems({
      items: flatItems,
      startIndex,
      stopIndex,
      itemsPerPage
    });
    const paginatedItemsWithoutGroups = computed(() => extractRows(paginatedItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems: items,
      currentPage: paginatedItemsWithoutGroups
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, "hideNoData"),
        noDataText: toRef(props, "noDataText"),
        loading: toRef(props, "loading"),
        loadingText: toRef(props, "loadingText")
      }
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      setItemsPerPage,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: paginatedItemsWithoutGroups.value,
      groupedItems: paginatedItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const [dataTableFooterProps] = VDataTableFooter.filterProps(props);
      const [dataTableHeadersProps] = VDataTableHeaders.filterProps(props);
      const [dataTableRowsProps] = VDataTableRows.filterProps(props);
      const [tableProps] = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--show-select": props.showSelect,
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps), {
        top: () => {
          var _a;
          return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
        },
        default: () => {
          var _a, _b, _c, _d;
          return slots.default ? slots.default(slotProps.value) : createVNode(Fragment, null, [(_a = slots.colgroup) == null ? void 0 : _a.call(slots, slotProps.value), createVNode("thead", null, [createVNode(VDataTableHeaders, dataTableHeadersProps, slots)]), (_b = slots.thead) == null ? void 0 : _b.call(slots, slotProps.value), createVNode("tbody", null, [slots.body ? slots.body(slotProps.value) : createVNode(VDataTableRows, mergeProps(dataTableRowsProps, {
            "items": paginatedItems.value
          }), slots)]), (_c = slots.tbody) == null ? void 0 : _c.call(slots, slotProps.value), (_d = slots.tfoot) == null ? void 0 : _d.call(slots, slotProps.value)]);
        },
        bottom: () => slots.bottom ? slots.bottom(slotProps.value) : createVNode(Fragment, null, [createVNode(VDataTableFooter, dataTableFooterProps, {
          prepend: slots["footer.prepend"]
        })])
      });
    });
    return {};
  }
});
const makeVDataTableServerProps = propsFactory({
  itemsLength: {
    type: [Number, String],
    required: true
  },
  ...makeDataTablePaginateProps(),
  ...makeDataTableProps(),
  ...makeVDataTableFooterProps()
}, "VDataTableServer");
const VDataTableServer = genericComponent()({
  name: "VDataTableServer",
  props: makeVDataTableServerProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:page": (page) => true,
    "update:itemsPerPage": (page) => true,
    "update:sortBy": (sortBy) => true,
    "update:options": (options) => true,
    "update:expanded": (options) => true,
    "update:groupBy": (value) => true,
    "click:row": (e, value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const itemsLength = computed(() => parseInt(props.itemsLength, 10));
    const {
      columns,
      headers
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, "showSelect"),
      showExpand: toRef(props, "showExpand")
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      opened,
      isGroupOpen,
      toggleGroup,
      extractRows
    } = provideGroupBy({
      groupBy,
      sortBy
    });
    const {
      pageCount,
      setItemsPerPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      flatItems
    } = useGroupedItems(items, groupBy, opened);
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems: items,
      currentPage: items
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    const itemsWithoutGroups = computed(() => extractRows(items.value));
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search: toRef(props, "search")
    });
    provide("v-data-table", {
      toggleSort,
      sortBy
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, "hideNoData"),
        noDataText: toRef(props, "noDataText"),
        loading: toRef(props, "loading"),
        loadingText: toRef(props, "loadingText")
      }
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      setItemsPerPage,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: itemsWithoutGroups.value,
      groupedItems: flatItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const [dataTableFooterProps] = VDataTableFooter.filterProps(props);
      const [dataTableHeadersProps] = VDataTableHeaders.filterProps(props);
      const [dataTableRowsProps] = VDataTableRows.filterProps(props);
      const [tableProps] = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps), {
        top: () => {
          var _a;
          return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
        },
        default: () => {
          var _a, _b, _c, _d;
          return slots.default ? slots.default(slotProps.value) : createVNode(Fragment, null, [(_a = slots.colgroup) == null ? void 0 : _a.call(slots, slotProps.value), createVNode("thead", {
            "class": "v-data-table__thead",
            "role": "rowgroup"
          }, [createVNode(VDataTableHeaders, mergeProps(dataTableHeadersProps, {
            "sticky": props.fixedHeader
          }), slots)]), (_b = slots.thead) == null ? void 0 : _b.call(slots, slotProps.value), createVNode("tbody", {
            "class": "v-data-table__tbody",
            "role": "rowgroup"
          }, [slots.body ? slots.body(slotProps.value) : createVNode(VDataTableRows, mergeProps(dataTableRowsProps, {
            "items": flatItems.value
          }), slots)]), (_c = slots.tbody) == null ? void 0 : _c.call(slots, slotProps.value), (_d = slots.tfoot) == null ? void 0 : _d.call(slots, slotProps.value)]);
        },
        bottom: () => slots.bottom ? slots.bottom(slotProps.value) : createVNode(VDataTableFooter, dataTableFooterProps, {
          prepend: slots["footer.prepend"]
        })
      });
    });
  }
});
const rootTypes = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function genBone(type) {
  let children = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return createVNode("div", {
    "class": ["v-skeleton-loader__bone", `v-skeleton-loader__${type}`]
  }, [children]);
}
function genBones(bone) {
  const [type, length] = bone.split("@");
  return Array.from({
    length
  }).map(() => genStructure(type));
}
function genStructure(type) {
  let children = [];
  if (!type)
    return children;
  const bone = rootTypes[type];
  if (type === bone)
    ;
  else if (type.includes(","))
    return mapBones(type);
  else if (type.includes("@"))
    return genBones(type);
  else if (bone.includes(","))
    children = mapBones(bone);
  else if (bone.includes("@"))
    children = genBones(bone);
  else if (bone)
    children.push(genStructure(bone));
  return [genBone(type, children)];
}
function mapBones(bones) {
  return bones.replace(/\s/g, "").split(",").map(genStructure);
}
const makeVSkeletonLoaderProps = propsFactory({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "image"
  },
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeThemeProps()
}, "VSkeletonLoader");
const VSkeletonLoader = genericComponent()({
  name: "VSkeletonLoader",
  props: makeVSkeletonLoaderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      t
    } = useLocale();
    const items = computed(() => genStructure(wrapInArray(props.type).join(",")));
    useRender(() => {
      var _a;
      const isLoading = !slots.default || props.loading;
      return createVNode("div", {
        "class": ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": props.boilerplate
        }, themeClasses.value, backgroundColorClasses.value, elevationClasses.value],
        "style": [backgroundColorStyles.value, isLoading ? dimensionStyles.value : {}],
        "aria-busy": !props.boilerplate ? isLoading : void 0,
        "aria-live": !props.boilerplate ? "polite" : void 0,
        "aria-label": !props.boilerplate ? t(props.loadingText) : void 0,
        "role": !props.boilerplate ? "alert" : void 0
      }, [isLoading ? items.value : (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});

export { VDataTableServer as V, VSkeletonLoader as a };
//# sourceMappingURL=VSkeletonLoader-cab11d2b.mjs.map
