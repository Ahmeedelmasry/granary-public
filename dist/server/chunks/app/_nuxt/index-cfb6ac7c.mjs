import { ref, mergeProps, unref, useSSRContext, watch, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, isRef, openBlock, createBlock, createCommentVNode, computed, withDirectives, vModelText } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { g as granaryStore } from './granary-ab731415.mjs';
import { s as supplierStore } from './supplier-7324b6de.mjs';
import { p as productStore } from './products-e8bf862c.mjs';
import { s as storeToRefs } from '../server.mjs';
import moment from 'moment';
import { V as VDataTableServer, a as VSkeletonLoader } from './VSkeletonLoader-cab11d2b.mjs';
import { i as invoiceModule } from './invoices-2e29d56e.mjs';
import 'axios';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import 'cookie-es';
import 'destr';
import 'ohash';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'mitt';
import 'defu';
import '../../nitro/firebase.mjs';
import 'node-fetch-native/polyfill';
import 'firebase-functions';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';

const _sfc_main$2 = {
  __name: "Filter",
  __ssrInlineRender: true,
  props: ["loading"],
  emits: ["filterData"],
  setup(__props, { emit: emits }) {
    const granaryModule = granaryStore();
    const supplierModule = supplierStore();
    const productsModule = productStore();
    const { granaries } = storeToRefs(granaryModule);
    const { suppliers } = storeToRefs(supplierModule);
    const { products } = storeToRefs(productsModule);
    const data = ref({
      supplierId: null,
      granaryId: null,
      creationFromDate: null,
      creationToDate: null,
      FromDate: null,
      productId: null,
      productTypeId: null,
      ToDate: null
    });
    const productTypes = computed(() => {
      if (data.value.productId)
        return data.value.productId.typePriceList;
      return [];
    });
    const submitFilter = () => {
      const obj = {
        supplierId: data.value.supplierId,
        granaryId: data.value.granaryId,
        productId: data.value.productId ? data.value.productId.id : null,
        productTypeId: data.value.productTypeId ? data.value.productTypeId.id : null,
        creationFromDate: data.value.creationFromDate ? moment(data.value.creationFromDate).format("DD/MM/YYYY") : null,
        creationToDate: data.value.creationToDate ? moment(data.value.creationToDate).format("DD/MM/YYYY") : null,
        FromDate: data.value.FromDate ? moment(data.value.FromDate).format("DD/MM/YYYY") : null,
        ToDate: data.value.ToDate ? moment(data.value.ToDate).format("DD/MM/YYYY") : null
      };
      emits("filterData", obj);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supplierPaymentReportFilter" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_row, {
        dir: "rtl",
        class: "pt-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "3",
              class: "pt-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="field_container"${_scopeId2}><label for="supplierId"${_scopeId2}>\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F</label><div class="input_parent position-relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_autocomplete, {
                    "item-title": "name",
                    "item-value": "id",
                    items: unref(suppliers).content,
                    transition: "slide-y-transition",
                    variant: "outlined",
                    "hide-details": "",
                    modelValue: unref(data).supplierId,
                    "onUpdate:modelValue": ($event) => unref(data).supplierId = $event,
                    disabled: __props.loading,
                    placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-account-cowboy-hat`);
                      } else {
                        return [
                          createTextVNode("mdi-account-cowboy-hat")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "field_container" }, [
                      createVNode("label", { for: "supplierId" }, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F"),
                      createVNode("div", { class: "input_parent position-relative" }, [
                        createVNode(_component_v_autocomplete, {
                          "item-title": "name",
                          "item-value": "id",
                          items: unref(suppliers).content,
                          transition: "slide-y-transition",
                          variant: "outlined",
                          "hide-details": "",
                          modelValue: unref(data).supplierId,
                          "onUpdate:modelValue": ($event) => unref(data).supplierId = $event,
                          disabled: __props.loading,
                          placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F"
                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled"]),
                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-account-cowboy-hat")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "3",
              class: "py-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="field_container"${_scopeId2}><label for="granaryId"${_scopeId2}>\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629</label><div class="input_parent position-relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_autocomplete, {
                    "item-title": "name",
                    "item-value": "id",
                    items: unref(granaries).content,
                    transition: "slide-y-transition",
                    variant: "outlined",
                    disabled: __props.loading,
                    "hide-details": "",
                    modelValue: unref(data).granaryId,
                    "onUpdate:modelValue": ($event) => unref(data).granaryId = $event,
                    placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-store-24-hour`);
                      } else {
                        return [
                          createTextVNode("mdi-store-24-hour")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "field_container" }, [
                      createVNode("label", { for: "granaryId" }, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                      createVNode("div", { class: "input_parent position-relative" }, [
                        createVNode(_component_v_autocomplete, {
                          "item-title": "name",
                          "item-value": "id",
                          items: unref(granaries).content,
                          transition: "slide-y-transition",
                          variant: "outlined",
                          disabled: __props.loading,
                          "hide-details": "",
                          modelValue: unref(data).granaryId,
                          "onUpdate:modelValue": ($event) => unref(data).granaryId = $event,
                          placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"
                        }, null, 8, ["items", "disabled", "modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-store-24-hour")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "3",
              class: "py-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="field_container"${_scopeId2}><label for="productId"${_scopeId2}>\u0627\u0644\u0645\u0646\u062A\u062C</label><div class="input_parent position-relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_autocomplete, {
                    "return-object": "",
                    items: unref(products).content,
                    "item-title": "name",
                    "item-value": "id",
                    name: "productId",
                    id: "productId",
                    modelValue: unref(data).productId,
                    "onUpdate:modelValue": [($event) => unref(data).productId = $event, ($event) => unref(data).productTypeId = null],
                    variant: "outlined",
                    placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-basket`);
                      } else {
                        return [
                          createTextVNode("mdi-basket")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "field_container" }, [
                      createVNode("label", { for: "productId" }, "\u0627\u0644\u0645\u0646\u062A\u062C"),
                      createVNode("div", { class: "input_parent position-relative" }, [
                        createVNode(_component_v_autocomplete, {
                          "return-object": "",
                          items: unref(products).content,
                          "item-title": "name",
                          "item-value": "id",
                          name: "productId",
                          id: "productId",
                          modelValue: unref(data).productId,
                          "onUpdate:modelValue": [($event) => unref(data).productId = $event, ($event) => unref(data).productTypeId = null],
                          variant: "outlined",
                          placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C",
                          "hide-details": ""
                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-basket")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "3",
              class: "py-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="field_container"${_scopeId2}><label for="productTypeId"${_scopeId2}>\u0627\u0644\u0641\u0631\u0632</label><div class="input_parent position-relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_autocomplete, {
                    "return-object": "",
                    items: unref(productTypes),
                    "item-title": "productType.name",
                    "item-value": "id",
                    variant: "outlined",
                    name: "productTypeId",
                    id: "productTypeId",
                    "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                    modelValue: unref(data).productTypeId,
                    "onUpdate:modelValue": ($event) => unref(data).productTypeId = $event,
                    "hide-details": "",
                    placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0632"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-sitemap `);
                      } else {
                        return [
                          createTextVNode("mdi-sitemap ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "field_container" }, [
                      createVNode("label", { for: "productTypeId" }, "\u0627\u0644\u0641\u0631\u0632"),
                      createVNode("div", { class: "input_parent position-relative" }, [
                        createVNode(_component_v_autocomplete, {
                          "return-object": "",
                          items: unref(productTypes),
                          "item-title": "productType.name",
                          "item-value": "id",
                          variant: "outlined",
                          name: "productTypeId",
                          id: "productTypeId",
                          "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                          modelValue: unref(data).productTypeId,
                          "onUpdate:modelValue": ($event) => unref(data).productTypeId = $event,
                          "hide-details": "",
                          placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0632"
                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-sitemap ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "3",
              class: "py-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="field_container"${_scopeId2}><label for="creationFromDate"${_scopeId2}>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621 (\u0645\u0646)</label><div class="input_parent position-relative"${_scopeId2}><input type="datetime-local" name="creationFromDate"${ssrIncludeBooleanAttr(__props.loading) ? " disabled" : ""} id="creationFromDate"${ssrRenderAttr("value", unref(data).creationFromDate)} style="${ssrRenderStyle({ "padding-right": "0 !important" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-calendar`);
                      } else {
                        return [
                          createTextVNode("mdi-calendar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "field_container" }, [
                      createVNode("label", { for: "creationFromDate" }, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621 (\u0645\u0646)"),
                      createVNode("div", { class: "input_parent position-relative" }, [
                        withDirectives(createVNode("input", {
                          type: "datetime-local",
                          name: "creationFromDate",
                          disabled: __props.loading,
                          id: "creationFromDate",
                          "onUpdate:modelValue": ($event) => unref(data).creationFromDate = $event,
                          style: { "padding-right": "0 !important" }
                        }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                          [vModelText, unref(data).creationFromDate]
                        ]),
                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-calendar")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "3",
              class: "py-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="field_container"${_scopeId2}><label for="creationToDate"${_scopeId2}>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621 (\u0627\u0644\u064A)</label><div class="input_parent position-relative"${_scopeId2}><input type="datetime-local" name="creationToDate" id="creationToDate"${ssrIncludeBooleanAttr(__props.loading) ? " disabled" : ""}${ssrRenderAttr("value", unref(data).creationToDate)} style="${ssrRenderStyle({ "padding-right": "0 !important" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-calendar`);
                      } else {
                        return [
                          createTextVNode("mdi-calendar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "field_container" }, [
                      createVNode("label", { for: "creationToDate" }, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621 (\u0627\u0644\u064A)"),
                      createVNode("div", { class: "input_parent position-relative" }, [
                        withDirectives(createVNode("input", {
                          type: "datetime-local",
                          name: "creationToDate",
                          id: "creationToDate",
                          disabled: __props.loading,
                          "onUpdate:modelValue": ($event) => unref(data).creationToDate = $event,
                          style: { "padding-right": "0 !important" }
                        }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                          [vModelText, unref(data).creationToDate]
                        ]),
                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-calendar")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "3",
              class: "py-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="field_container" dir="rtl"${_scopeId2}><label for="FromDate"${_scopeId2}>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0648\u0631\u064A\u062F (\u0645\u0646)</label><div class="input_parent position-relative"${_scopeId2}><input type="datetime-local" name="FromDate" id="FromDate"${ssrIncludeBooleanAttr(__props.loading) ? " disabled" : ""}${ssrRenderAttr("value", unref(data).FromDate)} style="${ssrRenderStyle({ "padding-right": "0 !important" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-calendar`);
                      } else {
                        return [
                          createTextVNode("mdi-calendar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "field_container",
                      dir: "rtl"
                    }, [
                      createVNode("label", { for: "FromDate" }, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0648\u0631\u064A\u062F (\u0645\u0646)"),
                      createVNode("div", { class: "input_parent position-relative" }, [
                        withDirectives(createVNode("input", {
                          type: "datetime-local",
                          name: "FromDate",
                          id: "FromDate",
                          disabled: __props.loading,
                          "onUpdate:modelValue": ($event) => unref(data).FromDate = $event,
                          style: { "padding-right": "0 !important" }
                        }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                          [vModelText, unref(data).FromDate]
                        ]),
                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-calendar")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "3",
              class: "py-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="field_container" dir="rtl"${_scopeId2}><label for="ToDate"${_scopeId2}>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0648\u0631\u064A\u062F (\u0627\u0644\u064A)</label><div class="input_parent position-relative"${_scopeId2}><input type="datetime-local" name="ToDate"${ssrRenderAttr("value", unref(data).ToDate)}${ssrIncludeBooleanAttr(__props.loading) ? " disabled" : ""} id="ToDate" style="${ssrRenderStyle({ "padding-right": "0 !important" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-calendar`);
                      } else {
                        return [
                          createTextVNode("mdi-calendar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "field_container",
                      dir: "rtl"
                    }, [
                      createVNode("label", { for: "ToDate" }, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0648\u0631\u064A\u062F (\u0627\u0644\u064A)"),
                      createVNode("div", { class: "input_parent position-relative" }, [
                        withDirectives(createVNode("input", {
                          type: "datetime-local",
                          name: "ToDate",
                          "onUpdate:modelValue": ($event) => unref(data).ToDate = $event,
                          disabled: __props.loading,
                          id: "ToDate",
                          style: { "padding-right": "0 !important" }
                        }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                          [vModelText, unref(data).ToDate]
                        ]),
                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-calendar")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "6",
              md: "4",
              lg: "3",
              class: "pb-1",
              style: { "display": "flex", "align-items": "flex-end" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "blue",
                    width: "100",
                    height: "40",
                    elevation: "0",
                    onClick: submitFilter,
                    class: "font-weight-bold",
                    disabled: __props.loading
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0628\u062D\u062B`);
                      } else {
                        return [
                          createTextVNode("\u0628\u062D\u062B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      color: "blue",
                      width: "100",
                      height: "40",
                      elevation: "0",
                      onClick: submitFilter,
                      class: "font-weight-bold",
                      disabled: __props.loading
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0628\u062D\u062B")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "3",
                class: "pt-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "field_container" }, [
                    createVNode("label", { for: "supplierId" }, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F"),
                    createVNode("div", { class: "input_parent position-relative" }, [
                      createVNode(_component_v_autocomplete, {
                        "item-title": "name",
                        "item-value": "id",
                        items: unref(suppliers).content,
                        transition: "slide-y-transition",
                        variant: "outlined",
                        "hide-details": "",
                        modelValue: unref(data).supplierId,
                        "onUpdate:modelValue": ($event) => unref(data).supplierId = $event,
                        disabled: __props.loading,
                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F"
                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-account-cowboy-hat")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "3",
                class: "py-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "field_container" }, [
                    createVNode("label", { for: "granaryId" }, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                    createVNode("div", { class: "input_parent position-relative" }, [
                      createVNode(_component_v_autocomplete, {
                        "item-title": "name",
                        "item-value": "id",
                        items: unref(granaries).content,
                        transition: "slide-y-transition",
                        variant: "outlined",
                        disabled: __props.loading,
                        "hide-details": "",
                        modelValue: unref(data).granaryId,
                        "onUpdate:modelValue": ($event) => unref(data).granaryId = $event,
                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"
                      }, null, 8, ["items", "disabled", "modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-store-24-hour")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "3",
                class: "py-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "field_container" }, [
                    createVNode("label", { for: "productId" }, "\u0627\u0644\u0645\u0646\u062A\u062C"),
                    createVNode("div", { class: "input_parent position-relative" }, [
                      createVNode(_component_v_autocomplete, {
                        "return-object": "",
                        items: unref(products).content,
                        "item-title": "name",
                        "item-value": "id",
                        name: "productId",
                        id: "productId",
                        modelValue: unref(data).productId,
                        "onUpdate:modelValue": [($event) => unref(data).productId = $event, ($event) => unref(data).productTypeId = null],
                        variant: "outlined",
                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C",
                        "hide-details": ""
                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-basket")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "3",
                class: "py-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "field_container" }, [
                    createVNode("label", { for: "productTypeId" }, "\u0627\u0644\u0641\u0631\u0632"),
                    createVNode("div", { class: "input_parent position-relative" }, [
                      createVNode(_component_v_autocomplete, {
                        "return-object": "",
                        items: unref(productTypes),
                        "item-title": "productType.name",
                        "item-value": "id",
                        variant: "outlined",
                        name: "productTypeId",
                        id: "productTypeId",
                        "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                        modelValue: unref(data).productTypeId,
                        "onUpdate:modelValue": ($event) => unref(data).productTypeId = $event,
                        "hide-details": "",
                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0632"
                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-sitemap ")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "3",
                class: "py-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "field_container" }, [
                    createVNode("label", { for: "creationFromDate" }, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621 (\u0645\u0646)"),
                    createVNode("div", { class: "input_parent position-relative" }, [
                      withDirectives(createVNode("input", {
                        type: "datetime-local",
                        name: "creationFromDate",
                        disabled: __props.loading,
                        id: "creationFromDate",
                        "onUpdate:modelValue": ($event) => unref(data).creationFromDate = $event,
                        style: { "padding-right": "0 !important" }
                      }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                        [vModelText, unref(data).creationFromDate]
                      ]),
                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-calendar")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "3",
                class: "py-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "field_container" }, [
                    createVNode("label", { for: "creationToDate" }, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621 (\u0627\u0644\u064A)"),
                    createVNode("div", { class: "input_parent position-relative" }, [
                      withDirectives(createVNode("input", {
                        type: "datetime-local",
                        name: "creationToDate",
                        id: "creationToDate",
                        disabled: __props.loading,
                        "onUpdate:modelValue": ($event) => unref(data).creationToDate = $event,
                        style: { "padding-right": "0 !important" }
                      }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                        [vModelText, unref(data).creationToDate]
                      ]),
                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-calendar")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "3",
                class: "py-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "field_container",
                    dir: "rtl"
                  }, [
                    createVNode("label", { for: "FromDate" }, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0648\u0631\u064A\u062F (\u0645\u0646)"),
                    createVNode("div", { class: "input_parent position-relative" }, [
                      withDirectives(createVNode("input", {
                        type: "datetime-local",
                        name: "FromDate",
                        id: "FromDate",
                        disabled: __props.loading,
                        "onUpdate:modelValue": ($event) => unref(data).FromDate = $event,
                        style: { "padding-right": "0 !important" }
                      }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                        [vModelText, unref(data).FromDate]
                      ]),
                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-calendar")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "3",
                class: "py-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "field_container",
                    dir: "rtl"
                  }, [
                    createVNode("label", { for: "ToDate" }, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0648\u0631\u064A\u062F (\u0627\u0644\u064A)"),
                    createVNode("div", { class: "input_parent position-relative" }, [
                      withDirectives(createVNode("input", {
                        type: "datetime-local",
                        name: "ToDate",
                        "onUpdate:modelValue": ($event) => unref(data).ToDate = $event,
                        disabled: __props.loading,
                        id: "ToDate",
                        style: { "padding-right": "0 !important" }
                      }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                        [vModelText, unref(data).ToDate]
                      ]),
                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-calendar")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "3",
                class: "pb-1",
                style: { "display": "flex", "align-items": "flex-end" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    color: "blue",
                    width: "100",
                    height: "40",
                    elevation: "0",
                    onClick: submitFilter,
                    class: "font-weight-bold",
                    disabled: __props.loading
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u0628\u062D\u062B")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reports/invoices/Filter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Invoices",
  __ssrInlineRender: true,
  props: ["invoices", "loading", "suppliers", "granaries"],
  emits: ["regetItems", "filterData"],
  setup(__props, { emit: emits }) {
    const page = ref(1);
    const perPage = ref(1e4);
    const headers = ref([
      { title: "\u0631\u0642\u0645", key: "index" },
      { title: "\u0627\u0644\u062A\u0627\u0631\u064A\u062E", key: "invoiceDate" },
      { title: "\u0627\u0644\u0635\u0648\u0645\u0639\u0629", key: "granary.name" },
      { title: "\u0627\u0644\u0645\u0648\u0631\u062F", key: "supplier.name" },
      { title: "\u0627\u0644\u0645\u0633\u062A\u0646\u062F", key: "documentNumber" },
      { title: "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629", key: "carNumber" },
      { title: "\u0645\u0646\u062A\u062C / \u0641\u0631\u0632", key: "productDetails" },
      { title: "\u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645", key: "totalInvoicePrice" },
      { title: "\u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645", key: "totalInvoicePriceAfterDiscount" }
    ]);
    const items = [
      {
        title: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
        disabled: false,
        to: {
          name: "index"
        }
      },
      {
        title: "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631",
        to: {
          name: "reports"
        }
      },
      {
        title: "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A",
        disabled: true
      }
    ];
    watch(
      () => page.value,
      (newVal) => {
        emits("regetItems", {
          page: newVal,
          limit: perPage.value
        });
      }
    );
    watch(
      () => perPage.value,
      (newVal) => {
        emits("regetItems", {
          page: page.value,
          limit: newVal
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_breadcrumbs = resolveComponent("v-breadcrumbs");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_ReportsInvoicesFilter = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard_banners_listing" }, _attrs))}><div class="page_toolbar d-flex align-center justify-space-between"><div class="toolbar_btns">`);
      _push(ssrRenderComponent(_component_v_btn, {
        width: "20",
        size: "sm",
        elevation: "0",
        color: "transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_icon, {
              color: "white",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-printer`);
                } else {
                  return [
                    createTextVNode("mdi-printer")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_icon, {
                color: "white",
                size: "25"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-printer")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_breadcrumbs, {
        items,
        dir: "rtl",
        class: "pa-0 mb"
      }, {
        title: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(item.title.toUpperCase())}`);
          } else {
            return [
              createTextVNode(toDisplayString(item.title.toUpperCase()), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_container, {
        class: "page_container",
        fluid: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.invoices) {
              _push2(ssrRenderComponent(_component_v_row, { class: "px-4 mt-1" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      class: "px-0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ReportsInvoicesFilter, {
                            class: "mb-7",
                            loading: __props.loading,
                            onFilterData: ($event) => emits("filterData", $event)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ReportsInvoicesFilter, {
                              class: "mb-7",
                              loading: __props.loading,
                              onFilterData: ($event) => emits("filterData", $event)
                            }, null, 8, ["loading", "onFilterData"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      class: "section_container dashboard_table pa-0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(VDataTableServer), {
                            headers: unref(headers),
                            items: __props.invoices.content,
                            loading: __props.loading,
                            "items-per-page": unref(perPage),
                            "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                            page: unref(page),
                            "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                            "items-length": __props.invoices.totalElements ? __props.invoices.totalElements : 0,
                            "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                            "show-current-page": "",
                            id: "invoices_report_table"
                          }, {
                            bottom: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="d-none"${_scopeId4}></span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "d-none" })
                                ];
                              }
                            }),
                            loading: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(VSkeletonLoader), { type: "table-row@4" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(VSkeletonLoader), { type: "table-row@4" })
                                ];
                              }
                            }),
                            "item.index": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.index + 1)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.index + 1), 1)
                                ];
                              }
                            }),
                            "item.invoiceDate": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p${_scopeId4}>${ssrInterpolate(unref(moment)(item.selectable.date).format("DD/MM/YYYY"))} <br${_scopeId4}> ${ssrInterpolate(unref(moment)(item.selectable.date).format("hh:mm"))}</p>`);
                              } else {
                                return [
                                  createVNode("p", null, [
                                    createTextVNode(toDisplayString(unref(moment)(item.selectable.date).format("DD/MM/YYYY")) + " ", 1),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString(unref(moment)(item.selectable.date).format("hh:mm")), 1)
                                  ])
                                ];
                              }
                            }),
                            "item.productDetails": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.selectable.product.name)} / ${ssrInterpolate(item.selectable.productType.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.selectable.product.name) + " / " + toDisplayString(item.selectable.productType.name), 1)
                                ];
                              }
                            }),
                            "item.totalInvoicePrice": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.selectable.totalPrice.toLocaleString())}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.selectable.totalPrice.toLocaleString()), 1)
                                ];
                              }
                            }),
                            "item.totalInvoicePriceAfterDiscount": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.selectable.totalAfterDiscount.toLocaleString())}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.selectable.totalAfterDiscount.toLocaleString()), 1)
                                ];
                              }
                            }),
                            "no-data": withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}>\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A</div>`);
                              } else {
                                return [
                                  createVNode("div", null, "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(VDataTableServer), {
                              headers: unref(headers),
                              items: __props.invoices.content,
                              loading: __props.loading,
                              "items-per-page": unref(perPage),
                              "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                              page: unref(page),
                              "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                              "items-length": __props.invoices.totalElements ? __props.invoices.totalElements : 0,
                              "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                              "show-current-page": "",
                              id: "invoices_report_table"
                            }, {
                              bottom: withCtx(() => [
                                createVNode("span", { class: "d-none" })
                              ]),
                              loading: withCtx(() => [
                                createVNode(unref(VSkeletonLoader), { type: "table-row@4" })
                              ]),
                              "item.index": withCtx(({ item }) => [
                                createTextVNode(toDisplayString(item.index + 1), 1)
                              ]),
                              "item.invoiceDate": withCtx(({ item }) => [
                                createVNode("p", null, [
                                  createTextVNode(toDisplayString(unref(moment)(item.selectable.date).format("DD/MM/YYYY")) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" " + toDisplayString(unref(moment)(item.selectable.date).format("hh:mm")), 1)
                                ])
                              ]),
                              "item.productDetails": withCtx(({ item }) => [
                                createTextVNode(toDisplayString(item.selectable.product.name) + " / " + toDisplayString(item.selectable.productType.name), 1)
                              ]),
                              "item.totalInvoicePrice": withCtx(({ item }) => [
                                createTextVNode(toDisplayString(item.selectable.totalPrice.toLocaleString()), 1)
                              ]),
                              "item.totalInvoicePriceAfterDiscount": withCtx(({ item }) => [
                                createTextVNode(toDisplayString(item.selectable.totalAfterDiscount.toLocaleString()), 1)
                              ]),
                              "no-data": withCtx(() => [
                                createVNode("div", null, "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")
                              ]),
                              _: 2
                            }, 1032, ["headers", "items", "loading", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items-length"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        cols: "12",
                        class: "px-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ReportsInvoicesFilter, {
                            class: "mb-7",
                            loading: __props.loading,
                            onFilterData: ($event) => emits("filterData", $event)
                          }, null, 8, ["loading", "onFilterData"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        class: "section_container dashboard_table pa-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(VDataTableServer), {
                            headers: unref(headers),
                            items: __props.invoices.content,
                            loading: __props.loading,
                            "items-per-page": unref(perPage),
                            "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                            page: unref(page),
                            "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                            "items-length": __props.invoices.totalElements ? __props.invoices.totalElements : 0,
                            "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                            "show-current-page": "",
                            id: "invoices_report_table"
                          }, {
                            bottom: withCtx(() => [
                              createVNode("span", { class: "d-none" })
                            ]),
                            loading: withCtx(() => [
                              createVNode(unref(VSkeletonLoader), { type: "table-row@4" })
                            ]),
                            "item.index": withCtx(({ item }) => [
                              createTextVNode(toDisplayString(item.index + 1), 1)
                            ]),
                            "item.invoiceDate": withCtx(({ item }) => [
                              createVNode("p", null, [
                                createTextVNode(toDisplayString(unref(moment)(item.selectable.date).format("DD/MM/YYYY")) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" " + toDisplayString(unref(moment)(item.selectable.date).format("hh:mm")), 1)
                              ])
                            ]),
                            "item.productDetails": withCtx(({ item }) => [
                              createTextVNode(toDisplayString(item.selectable.product.name) + " / " + toDisplayString(item.selectable.productType.name), 1)
                            ]),
                            "item.totalInvoicePrice": withCtx(({ item }) => [
                              createTextVNode(toDisplayString(item.selectable.totalPrice.toLocaleString()), 1)
                            ]),
                            "item.totalInvoicePriceAfterDiscount": withCtx(({ item }) => [
                              createTextVNode(toDisplayString(item.selectable.totalAfterDiscount.toLocaleString()), 1)
                            ]),
                            "no-data": withCtx(() => [
                              createVNode("div", null, "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")
                            ]),
                            _: 2
                          }, 1032, ["headers", "items", "loading", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items-length"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.invoices ? (openBlock(), createBlock(_component_v_row, {
                key: 0,
                class: "px-4 mt-1"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "px-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ReportsInvoicesFilter, {
                        class: "mb-7",
                        loading: __props.loading,
                        onFilterData: ($event) => emits("filterData", $event)
                      }, null, 8, ["loading", "onFilterData"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "section_container dashboard_table pa-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(VDataTableServer), {
                        headers: unref(headers),
                        items: __props.invoices.content,
                        loading: __props.loading,
                        "items-per-page": unref(perPage),
                        "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                        page: unref(page),
                        "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                        "items-length": __props.invoices.totalElements ? __props.invoices.totalElements : 0,
                        "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                        "show-current-page": "",
                        id: "invoices_report_table"
                      }, {
                        bottom: withCtx(() => [
                          createVNode("span", { class: "d-none" })
                        ]),
                        loading: withCtx(() => [
                          createVNode(unref(VSkeletonLoader), { type: "table-row@4" })
                        ]),
                        "item.index": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(item.index + 1), 1)
                        ]),
                        "item.invoiceDate": withCtx(({ item }) => [
                          createVNode("p", null, [
                            createTextVNode(toDisplayString(unref(moment)(item.selectable.date).format("DD/MM/YYYY")) + " ", 1),
                            createVNode("br"),
                            createTextVNode(" " + toDisplayString(unref(moment)(item.selectable.date).format("hh:mm")), 1)
                          ])
                        ]),
                        "item.productDetails": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(item.selectable.product.name) + " / " + toDisplayString(item.selectable.productType.name), 1)
                        ]),
                        "item.totalInvoicePrice": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(item.selectable.totalPrice.toLocaleString()), 1)
                        ]),
                        "item.totalInvoicePriceAfterDiscount": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(item.selectable.totalAfterDiscount.toLocaleString()), 1)
                        ]),
                        "no-data": withCtx(() => [
                          createVNode("div", null, "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")
                        ]),
                        _: 2
                      }, 1032, ["headers", "items", "loading", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items-length"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reports/invoices/Invoices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const invoicesModule = invoiceModule();
    const supplierModule = supplierStore();
    const granaryModule = granaryStore();
    const { invoices } = storeToRefs(invoicesModule);
    const { granaries } = storeToRefs(granaryModule);
    const { suppliers } = storeToRefs(supplierModule);
    const loading = ref(false);
    const filtersData = ref({
      supplierId: null,
      granaryId: null,
      creationFromDate: null,
      creationToDate: null,
      FromDate: null,
      ToDate: null
    });
    const getData = async (page, limit, filters) => {
      loading.value = true;
      filtersData.value = filters ? filters : {
        supplierId: null,
        granaryId: null,
        creationFromDate: null,
        creationToDate: null,
        FromDate: null,
        ToDate: null
      };
      await invoicesModule.doGetInvoices(
        page - 1,
        limit,
        filtersData.value
      );
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ReportsInvoices = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard_tests_page mb-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ReportsInvoices, {
        invoices: unref(invoices),
        loading: unref(loading),
        granaries: unref(granaries).content,
        suppliers: unref(suppliers).content,
        onRegetItems: ($event) => getData($event.page, $event.limit),
        onFilterData: ($event) => getData(1, 1e3, $event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/invoices/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-cfb6ac7c.mjs.map
