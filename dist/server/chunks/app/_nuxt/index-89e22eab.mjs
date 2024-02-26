import { ref, mergeProps, unref, useSSRContext, watch, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, isRef, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vModelText, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { p as productStore } from './products-e8bf862c.mjs';
import { p as productTypeStore } from './types-f1e6cd94.mjs';
import { s as storeToRefs } from '../server.mjs';
import useVuelidator from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import { V as VDataTableServer, a as VSkeletonLoader } from './VSkeletonLoader-cab11d2b.mjs';
import { m as measuringUnitStore } from './measuringUnits-f261f864.mjs';
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
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main$3 = {
  __name: "Update",
  __ssrInlineRender: true,
  props: ["openPopup", "toUpdate", "units"],
  emits: ["closePopup", "regetData"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const productsModule = productStore();
    const productTypesModule = productTypeStore();
    const { productTypes } = storeToRefs(productTypesModule);
    const data = ref({
      name: null,
      productType: [],
      measuringUnits: []
    });
    const dialog = ref(false);
    const btnLoading = ref(false);
    const roles = ref({
      name: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      productType: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      measuringUnits: {
        required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required)
      }
    });
    watch(
      () => dialog.value,
      (newval) => {
        if (!newval) {
          setTimeout(() => {
            emits("closePopup");
          }, 200);
        }
      }
    );
    const validateSingleRowArdabPrice = (item) => {
      item.priceErr = "";
      if (!item.ardabPrice) {
        item.priceErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
        return;
      }
      if (isNaN(item.ardabPrice)) {
        item.priceErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637";
        return;
      }
      if (Number(item.ardabPrice) <= 0) {
        item.priceErr = "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0";
        return;
      }
    };
    const validateSingleRowArdabWeight = (item) => {
      item.weightErr = "";
      if (!item.weightPerArdab) {
        item.weightErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
        return;
      }
      if (isNaN(item.weightPerArdab)) {
        item.weightErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637";
        return;
      }
      if (Number(item.weightPerArdab) <= 0) {
        item.weightErr = "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0";
        return;
      }
    };
    let $v = useVuelidator(roles, data);
    const submitData = async () => {
      const res = await $v.value.$validate();
      if (res) {
        let isvalid = true;
        for (let i = 0; i < data.value.productType.length; i++) {
          if (!data.value.productType[i].ardabPrice) {
            data.value.productType[i].priceErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
            isvalid = false;
            break;
          }
          if (isNaN(data.value.productType[i].ardabPrice)) {
            data.value.productType[i].priceErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637";
            isvalid = false;
            break;
          }
          if (Number(data.value.productType[i].ardabPrice) <= 0) {
            data.value.productType[i].priceErr = "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0";
            isvalid = false;
            break;
          }
          if (!data.value.productType[i].weightPerArdab) {
            data.value.productType[i].weightErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
            isvalid = false;
            break;
          }
          if (isNaN(data.value.productType[i].weightPerArdab)) {
            data.value.productType[i].weightErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637";
            isvalid = false;
            break;
          }
          if (Number(data.value.productType[i].weightPerArdab) <= 0) {
            data.value.productType[i].weightErr = "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0";
            isvalid = false;
            break;
          }
        }
        if (isvalid) {
          const obj = {
            name: data.value.name,
            locked: props.toUpdate.selectable.locked,
            typePriceList: [],
            id: props.toUpdate.selectable.id,
            measuringUnitList: []
          };
          data.value.productType.forEach((el) => {
            el.priceErr = "";
            el.weightErr = "";
            obj.typePriceList.push({
              pricePerKilo: parseFloat(el.ardabPrice) / parseFloat(el.weightPerArdab),
              ardabPrice: el.ardabPrice,
              weightPerArdab: el.weightPerArdab,
              productType: {
                id: el.id
              }
            });
          });
          data.value.measuringUnits.forEach((el) => {
            obj.measuringUnitList.push({
              id: el.id
            });
          });
          btnLoading.value = true;
          const result = await productsModule.doUpdateProduct(obj);
          if (result) {
            emits("regetData");
            dialog.value = false;
          }
          btnLoading.value = false;
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "update_banner" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        width: "700",
        persistent: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { class: "pb-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, {
                    class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                    style: { "font-size": "22px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0645\u0646\u062A\u062C" : "\u0627\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u062C\u062F\u064A\u062F")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0645\u0646\u062A\u062C" : "\u0627\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u062C\u062F\u064A\u062F"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_form, {
                    class: "pa-5",
                    onSubmit: () => {
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_container, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, { dir: "rtl" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C</label><div class="input_parent position-relative"${_scopeId6}><input type="text"${ssrRenderAttr("value", unref(data).name)} placeholder="\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C" name="typeName" id="typeName" class="${ssrRenderClass(
                                            unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                          )}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-rename-outline`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-rename-outline")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "name")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "name").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                withDirectives(createVNode("input", {
                                                  type: "text",
                                                  "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                                  placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                                  name: "typeName",
                                                  id: "typeName",
                                                  class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                                }, null, 10, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(data).name]
                                                ]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-rename-outline")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    if (unref(productTypes).content) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "mt-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C</label><div class="input_parent position-relative"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_autocomplete, {
                                              items: __props.units.content,
                                              "item-title": "name",
                                              "item-value": "id",
                                              transition: "slide-y-transition",
                                              "return-object": "",
                                              variant: "outlined",
                                              chips: "",
                                              multiple: "",
                                              placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                              "hide-details": "",
                                              modelValue: unref(data).measuringUnits,
                                              "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                              class: unref($v).$errors.find(
                                                (el) => el.$property == "measuringUnits"
                                              ) ? "err_field" : ""
                                            }, {
                                              item: withCtx(({ props: props2, item }, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_list_item, mergeProps(props2, {
                                                    disabled: item.raw.disabled
                                                  }), null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_list_item, mergeProps(props2, {
                                                      disabled: item.raw.disabled
                                                    }), null, 16, ["disabled"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-shape-outline`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-shape-outline")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                            if (unref($v).$errors.find((el) => el.$property == "productType")) {
                                              _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "productType").$message)}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode("div", { class: "field_container" }, [
                                                createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                                createVNode("div", { class: "input_parent position-relative" }, [
                                                  createVNode(_component_v_autocomplete, {
                                                    items: __props.units.content,
                                                    "item-title": "name",
                                                    "item-value": "id",
                                                    transition: "slide-y-transition",
                                                    "return-object": "",
                                                    variant: "outlined",
                                                    chips: "",
                                                    multiple: "",
                                                    placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                                    "hide-details": "",
                                                    modelValue: unref(data).measuringUnits,
                                                    "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                                    class: unref($v).$errors.find(
                                                      (el) => el.$property == "measuringUnits"
                                                    ) ? "err_field" : ""
                                                  }, {
                                                    item: withCtx(({ props: props2, item }) => [
                                                      createVNode(_component_v_list_item, mergeProps(props2, {
                                                        disabled: item.raw.disabled
                                                      }), null, 16, ["disabled"])
                                                    ]),
                                                    _: 1
                                                  }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                                  createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-shape-outline")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "err_msg"
                                              }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if (unref(productTypes).content) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        class: "mt-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C</label><div class="input_parent position-relative"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_autocomplete, {
                                              items: unref(productTypes).content,
                                              "item-title": "name",
                                              "item-value": "selectedId",
                                              transition: "slide-y-transition",
                                              "return-object": "",
                                              variant: "outlined",
                                              chips: "",
                                              multiple: "",
                                              placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                              "hide-details": "",
                                              modelValue: unref(data).productType,
                                              "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                              class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                            }, {
                                              item: withCtx(({ props: props2, item }, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_list_item, mergeProps(props2, {
                                                    disabled: item.raw.disabled
                                                  }), null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_list_item, mergeProps(props2, {
                                                      disabled: item.raw.disabled
                                                    }), null, 16, ["disabled"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-shape-outline`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-shape-outline")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                            if (unref($v).$errors.find((el) => el.$property == "productType")) {
                                              _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "productType").$message)}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode("div", { class: "field_container" }, [
                                                createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                                createVNode("div", { class: "input_parent position-relative" }, [
                                                  createVNode(_component_v_autocomplete, {
                                                    items: unref(productTypes).content,
                                                    "item-title": "name",
                                                    "item-value": "selectedId",
                                                    transition: "slide-y-transition",
                                                    "return-object": "",
                                                    variant: "outlined",
                                                    chips: "",
                                                    multiple: "",
                                                    placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                                    "hide-details": "",
                                                    modelValue: unref(data).productType,
                                                    "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                                    class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                                  }, {
                                                    item: withCtx(({ props: props2, item }) => [
                                                      createVNode(_component_v_list_item, mergeProps(props2, {
                                                        disabled: item.raw.disabled
                                                      }), null, 16, ["disabled"])
                                                    ]),
                                                    _: 1
                                                  }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                                  createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-shape-outline")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "err_msg"
                                              }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                                placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                                name: "typeName",
                                                id: "typeName",
                                                class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).name]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-rename-outline")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                        key: 0,
                                        cols: "12",
                                        md: "6",
                                        class: "mt-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode(_component_v_autocomplete, {
                                                items: __props.units.content,
                                                "item-title": "name",
                                                "item-value": "id",
                                                transition: "slide-y-transition",
                                                "return-object": "",
                                                variant: "outlined",
                                                chips: "",
                                                multiple: "",
                                                placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                                "hide-details": "",
                                                modelValue: unref(data).measuringUnits,
                                                "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                                class: unref($v).$errors.find(
                                                  (el) => el.$property == "measuringUnits"
                                                ) ? "err_field" : ""
                                              }, {
                                                item: withCtx(({ props: props2, item }) => [
                                                  createVNode(_component_v_list_item, mergeProps(props2, {
                                                    disabled: item.raw.disabled
                                                  }), null, 16, ["disabled"])
                                                ]),
                                                _: 1
                                              }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-shape-outline")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                        key: 1,
                                        cols: "12",
                                        class: "mt-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode(_component_v_autocomplete, {
                                                items: unref(productTypes).content,
                                                "item-title": "name",
                                                "item-value": "selectedId",
                                                transition: "slide-y-transition",
                                                "return-object": "",
                                                variant: "outlined",
                                                chips: "",
                                                multiple: "",
                                                placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                                "hide-details": "",
                                                modelValue: unref(data).productType,
                                                "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                                class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                              }, {
                                                item: withCtx(({ props: props2, item }) => [
                                                  createVNode(_component_v_list_item, mergeProps(props2, {
                                                    disabled: item.raw.disabled
                                                  }), null, 16, ["disabled"])
                                                ]),
                                                _: 1
                                              }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-shape-outline")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, { dir: "rtl" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                              placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                              name: "typeName",
                                              id: "typeName",
                                              class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).name]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-rename-outline")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                      key: 0,
                                      cols: "12",
                                      md: "6",
                                      class: "mt-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode(_component_v_autocomplete, {
                                              items: __props.units.content,
                                              "item-title": "name",
                                              "item-value": "id",
                                              transition: "slide-y-transition",
                                              "return-object": "",
                                              variant: "outlined",
                                              chips: "",
                                              multiple: "",
                                              placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                              "hide-details": "",
                                              modelValue: unref(data).measuringUnits,
                                              "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                              class: unref($v).$errors.find(
                                                (el) => el.$property == "measuringUnits"
                                              ) ? "err_field" : ""
                                            }, {
                                              item: withCtx(({ props: props2, item }) => [
                                                createVNode(_component_v_list_item, mergeProps(props2, {
                                                  disabled: item.raw.disabled
                                                }), null, 16, ["disabled"])
                                              ]),
                                              _: 1
                                            }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-shape-outline")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                      key: 1,
                                      cols: "12",
                                      class: "mt-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode(_component_v_autocomplete, {
                                              items: unref(productTypes).content,
                                              "item-title": "name",
                                              "item-value": "selectedId",
                                              transition: "slide-y-transition",
                                              "return-object": "",
                                              variant: "outlined",
                                              chips: "",
                                              multiple: "",
                                              placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                              "hide-details": "",
                                              modelValue: unref(data).productType,
                                              "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                              class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                            }, {
                                              item: withCtx(({ props: props2, item }) => [
                                                createVNode(_component_v_list_item, mergeProps(props2, {
                                                  disabled: item.raw.disabled
                                                }), null, 16, ["disabled"])
                                              ]),
                                              _: 1
                                            }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-shape-outline")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_container, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { dir: "rtl" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                            placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                            name: "typeName",
                                            id: "typeName",
                                            class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).name]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-rename-outline")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                    key: 0,
                                    cols: "12",
                                    md: "6",
                                    class: "mt-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode(_component_v_autocomplete, {
                                            items: __props.units.content,
                                            "item-title": "name",
                                            "item-value": "id",
                                            transition: "slide-y-transition",
                                            "return-object": "",
                                            variant: "outlined",
                                            chips: "",
                                            multiple: "",
                                            placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                            "hide-details": "",
                                            modelValue: unref(data).measuringUnits,
                                            "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                            class: unref($v).$errors.find(
                                              (el) => el.$property == "measuringUnits"
                                            ) ? "err_field" : ""
                                          }, {
                                            item: withCtx(({ props: props2, item }) => [
                                              createVNode(_component_v_list_item, mergeProps(props2, {
                                                disabled: item.raw.disabled
                                              }), null, 16, ["disabled"])
                                            ]),
                                            _: 1
                                          }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-shape-outline")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                    key: 1,
                                    cols: "12",
                                    class: "mt-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode(_component_v_autocomplete, {
                                            items: unref(productTypes).content,
                                            "item-title": "name",
                                            "item-value": "selectedId",
                                            transition: "slide-y-transition",
                                            "return-object": "",
                                            variant: "outlined",
                                            chips: "",
                                            multiple: "",
                                            placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                            "hide-details": "",
                                            modelValue: unref(data).productType,
                                            "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                            class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                          }, {
                                            item: withCtx(({ props: props2, item }) => [
                                              createVNode(_component_v_list_item, mergeProps(props2, {
                                                disabled: item.raw.disabled
                                              }), null, 16, ["disabled"])
                                            ]),
                                            _: 1
                                          }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-shape-outline")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "max-height": "200px", "overflow-y": "auto" })}"${_scopeId2}>`);
                  if (unref(data).productType.length) {
                    _push3(ssrRenderComponent(_component_v_table, { class: "text-center w-100" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<thead${_scopeId3}><tr${_scopeId3}><th style="${ssrRenderStyle({ "background-color": "#f3f3f3 !important" })}" class="text-center font-weight-bold"${_scopeId3}> \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 </th><th style="${ssrRenderStyle({ "background-color": "#f3f3f3 !important" })}" class="text-center font-weight-bold"${_scopeId3}> \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 </th><th style="${ssrRenderStyle({ "background-color": "#f3f3f3 !important" })}" class="text-center font-weight-bold"${_scopeId3}> \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 </th></tr></thead><!--[-->`);
                          ssrRenderList(unref(data).productType, (item, i) => {
                            _push4(`<tbody${_scopeId3}><tr${_scopeId3}><td style="${ssrRenderStyle({ "font-size": "15px" })}"${_scopeId3}>${ssrInterpolate(item.selectedName)}</td><td class="text-center"${_scopeId3}><div class="field_container pt-5"${_scopeId3}><div class="input_parent"${_scopeId3}><input style="${ssrRenderStyle({ "width": "200px" })}" placeholder="\u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628" type="text"${ssrRenderAttr("value", item.ardabPrice)} class="${ssrRenderClass([item.priceErr ? "err_field" : "", "px-0 text-center"])}"${_scopeId3}></div><span class="err_msg d-inline-block mt-1" style="${ssrRenderStyle({ "font-size": "12px" })}"${_scopeId3}>${ssrInterpolate(item.priceErr)}</span></div></td><td class="text-center"${_scopeId3}><div class="field_container pt-5"${_scopeId3}><div class="input_parent"${_scopeId3}><input style="${ssrRenderStyle({ "width": "200px" })}" placeholder="\u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628" type="text"${ssrRenderAttr("value", item.weightPerArdab)} class="${ssrRenderClass([item.weightErr ? "err_field" : "", "px-0 text-center"])}"${_scopeId3}></div><span class="err_msg d-inline-block mt-1" style="${ssrRenderStyle({ "font-size": "12px" })}"${_scopeId3}>${ssrInterpolate(item.weightErr)}</span></div></td></tr></tbody>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  style: { "background-color": "#f3f3f3 !important" },
                                  class: "text-center font-weight-bold"
                                }, " \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 "),
                                createVNode("th", {
                                  style: { "background-color": "#f3f3f3 !important" },
                                  class: "text-center font-weight-bold"
                                }, " \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                                createVNode("th", {
                                  style: { "background-color": "#f3f3f3 !important" },
                                  class: "text-center font-weight-bold"
                                }, " \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 ")
                              ])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(data).productType, (item, i) => {
                              return openBlock(), createBlock("tbody", {
                                key: item.id
                              }, [
                                createVNode("tr", null, [
                                  createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.selectedName), 1),
                                  createVNode("td", { class: "text-center" }, [
                                    createVNode("div", { class: "field_container pt-5" }, [
                                      createVNode("div", { class: "input_parent" }, [
                                        withDirectives(createVNode("input", {
                                          class: ["px-0 text-center", item.priceErr ? "err_field" : ""],
                                          style: { "width": "200px" },
                                          placeholder: "\u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628",
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => item.ardabPrice = $event,
                                          onKeyup: ($event) => validateSingleRowArdabPrice(item)
                                        }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                          [vModelText, item.ardabPrice]
                                        ])
                                      ]),
                                      createVNode("span", {
                                        class: "err_msg d-inline-block mt-1",
                                        style: { "font-size": "12px" }
                                      }, toDisplayString(item.priceErr), 1)
                                    ])
                                  ]),
                                  createVNode("td", { class: "text-center" }, [
                                    createVNode("div", { class: "field_container pt-5" }, [
                                      createVNode("div", { class: "input_parent" }, [
                                        withDirectives(createVNode("input", {
                                          class: ["px-0 text-center", item.weightErr ? "err_field" : ""],
                                          style: { "width": "200px" },
                                          placeholder: "\u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628",
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => item.weightPerArdab = $event,
                                          onKeyup: ($event) => validateSingleRowArdabWeight(item)
                                        }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                          [vModelText, item.weightPerArdab]
                                        ])
                                      ]),
                                      createVNode("span", {
                                        class: "err_msg d-inline-block mt-1",
                                        style: { "font-size": "12px" }
                                      }, toDisplayString(item.weightErr), 1)
                                    ])
                                  ])
                                ])
                              ]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_divider, { class: "mt-5" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                  _push3(`<div class="actions text-center mt-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "red",
                    class: "mr-3",
                    onClick: ($event) => dialog.value = false,
                    disabled: unref(btnLoading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0627\u0644\u063A\u0627\u0621`);
                      } else {
                        return [
                          createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "green",
                    type: "submit",
                    onClick: submitData,
                    loading: unref(btnLoading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u062D\u0641\u0638`);
                      } else {
                        return [
                          createTextVNode("\u062D\u0641\u0638")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_v_card_title, {
                      class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                      style: { "font-size": "22px" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0645\u0646\u062A\u062C" : "\u0627\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u062C\u062F\u064A\u062F"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_form, {
                      class: "pa-5",
                      onSubmit: withModifiers(() => {
                      }, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, { dir: "rtl" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                          placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                          name: "typeName",
                                          id: "typeName",
                                          class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).name]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-rename-outline")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                  key: 0,
                                  cols: "12",
                                  md: "6",
                                  class: "mt-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode(_component_v_autocomplete, {
                                          items: __props.units.content,
                                          "item-title": "name",
                                          "item-value": "id",
                                          transition: "slide-y-transition",
                                          "return-object": "",
                                          variant: "outlined",
                                          chips: "",
                                          multiple: "",
                                          placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                          "hide-details": "",
                                          modelValue: unref(data).measuringUnits,
                                          "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                          class: unref($v).$errors.find(
                                            (el) => el.$property == "measuringUnits"
                                          ) ? "err_field" : ""
                                        }, {
                                          item: withCtx(({ props: props2, item }) => [
                                            createVNode(_component_v_list_item, mergeProps(props2, {
                                              disabled: item.raw.disabled
                                            }), null, 16, ["disabled"])
                                          ]),
                                          _: 1
                                        }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-shape-outline")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                  key: 1,
                                  cols: "12",
                                  class: "mt-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode(_component_v_autocomplete, {
                                          items: unref(productTypes).content,
                                          "item-title": "name",
                                          "item-value": "selectedId",
                                          transition: "slide-y-transition",
                                          "return-object": "",
                                          variant: "outlined",
                                          chips: "",
                                          multiple: "",
                                          placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                          "hide-details": "",
                                          modelValue: unref(data).productType,
                                          "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                          class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                        }, {
                                          item: withCtx(({ props: props2, item }) => [
                                            createVNode(_component_v_list_item, mergeProps(props2, {
                                              disabled: item.raw.disabled
                                            }), null, 16, ["disabled"])
                                          ]),
                                          _: 1
                                        }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-shape-outline")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onSubmit"]),
                    createVNode("div", { style: { "max-height": "200px", "overflow-y": "auto" } }, [
                      unref(data).productType.length ? (openBlock(), createBlock(_component_v_table, {
                        key: 0,
                        class: "text-center w-100"
                      }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", {
                                style: { "background-color": "#f3f3f3 !important" },
                                class: "text-center font-weight-bold"
                              }, " \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 "),
                              createVNode("th", {
                                style: { "background-color": "#f3f3f3 !important" },
                                class: "text-center font-weight-bold"
                              }, " \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                              createVNode("th", {
                                style: { "background-color": "#f3f3f3 !important" },
                                class: "text-center font-weight-bold"
                              }, " \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 ")
                            ])
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data).productType, (item, i) => {
                            return openBlock(), createBlock("tbody", {
                              key: item.id
                            }, [
                              createVNode("tr", null, [
                                createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.selectedName), 1),
                                createVNode("td", { class: "text-center" }, [
                                  createVNode("div", { class: "field_container pt-5" }, [
                                    createVNode("div", { class: "input_parent" }, [
                                      withDirectives(createVNode("input", {
                                        class: ["px-0 text-center", item.priceErr ? "err_field" : ""],
                                        style: { "width": "200px" },
                                        placeholder: "\u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628",
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => item.ardabPrice = $event,
                                        onKeyup: ($event) => validateSingleRowArdabPrice(item)
                                      }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                        [vModelText, item.ardabPrice]
                                      ])
                                    ]),
                                    createVNode("span", {
                                      class: "err_msg d-inline-block mt-1",
                                      style: { "font-size": "12px" }
                                    }, toDisplayString(item.priceErr), 1)
                                  ])
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  createVNode("div", { class: "field_container pt-5" }, [
                                    createVNode("div", { class: "input_parent" }, [
                                      withDirectives(createVNode("input", {
                                        class: ["px-0 text-center", item.weightErr ? "err_field" : ""],
                                        style: { "width": "200px" },
                                        placeholder: "\u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628",
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => item.weightPerArdab = $event,
                                        onKeyup: ($event) => validateSingleRowArdabWeight(item)
                                      }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                        [vModelText, item.weightPerArdab]
                                      ])
                                    ]),
                                    createVNode("span", {
                                      class: "err_msg d-inline-block mt-1",
                                      style: { "font-size": "12px" }
                                    }, toDisplayString(item.weightErr), 1)
                                  ])
                                ])
                              ])
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_v_divider, { class: "mt-5" }),
                    createVNode(_component_v_divider),
                    createVNode("div", { class: "actions text-center mt-5" }, [
                      createVNode(_component_v_btn, {
                        color: "red",
                        class: "mr-3",
                        onClick: ($event) => dialog.value = false,
                        disabled: unref(btnLoading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"]),
                      createVNode(_component_v_btn, {
                        color: "green",
                        type: "submit",
                        onClick: submitData,
                        loading: unref(btnLoading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u062D\u0641\u0638")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, { class: "pb-5" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, {
                    class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                    style: { "font-size": "22px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0645\u0646\u062A\u062C" : "\u0627\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u062C\u062F\u064A\u062F"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_form, {
                    class: "pa-5",
                    onSubmit: withModifiers(() => {
                    }, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, { dir: "rtl" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                        placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                        name: "typeName",
                                        id: "typeName",
                                        class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).name]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-rename-outline")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                key: 0,
                                cols: "12",
                                md: "6",
                                class: "mt-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode(_component_v_autocomplete, {
                                        items: __props.units.content,
                                        "item-title": "name",
                                        "item-value": "id",
                                        transition: "slide-y-transition",
                                        "return-object": "",
                                        variant: "outlined",
                                        chips: "",
                                        multiple: "",
                                        placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                        "hide-details": "",
                                        modelValue: unref(data).measuringUnits,
                                        "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                        class: unref($v).$errors.find(
                                          (el) => el.$property == "measuringUnits"
                                        ) ? "err_field" : ""
                                      }, {
                                        item: withCtx(({ props: props2, item }) => [
                                          createVNode(_component_v_list_item, mergeProps(props2, {
                                            disabled: item.raw.disabled
                                          }), null, 16, ["disabled"])
                                        ]),
                                        _: 1
                                      }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-shape-outline")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                key: 1,
                                cols: "12",
                                class: "mt-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode(_component_v_autocomplete, {
                                        items: unref(productTypes).content,
                                        "item-title": "name",
                                        "item-value": "selectedId",
                                        transition: "slide-y-transition",
                                        "return-object": "",
                                        variant: "outlined",
                                        chips: "",
                                        multiple: "",
                                        placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                        "hide-details": "",
                                        modelValue: unref(data).productType,
                                        "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                        class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                      }, {
                                        item: withCtx(({ props: props2, item }) => [
                                          createVNode(_component_v_list_item, mergeProps(props2, {
                                            disabled: item.raw.disabled
                                          }), null, 16, ["disabled"])
                                        ]),
                                        _: 1
                                      }, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-shape-outline")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onSubmit"]),
                  createVNode("div", { style: { "max-height": "200px", "overflow-y": "auto" } }, [
                    unref(data).productType.length ? (openBlock(), createBlock(_component_v_table, {
                      key: 0,
                      class: "text-center w-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", {
                              style: { "background-color": "#f3f3f3 !important" },
                              class: "text-center font-weight-bold"
                            }, " \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 "),
                            createVNode("th", {
                              style: { "background-color": "#f3f3f3 !important" },
                              class: "text-center font-weight-bold"
                            }, " \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                            createVNode("th", {
                              style: { "background-color": "#f3f3f3 !important" },
                              class: "text-center font-weight-bold"
                            }, " \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 ")
                          ])
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data).productType, (item, i) => {
                          return openBlock(), createBlock("tbody", {
                            key: item.id
                          }, [
                            createVNode("tr", null, [
                              createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.selectedName), 1),
                              createVNode("td", { class: "text-center" }, [
                                createVNode("div", { class: "field_container pt-5" }, [
                                  createVNode("div", { class: "input_parent" }, [
                                    withDirectives(createVNode("input", {
                                      class: ["px-0 text-center", item.priceErr ? "err_field" : ""],
                                      style: { "width": "200px" },
                                      placeholder: "\u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628",
                                      type: "text",
                                      "onUpdate:modelValue": ($event) => item.ardabPrice = $event,
                                      onKeyup: ($event) => validateSingleRowArdabPrice(item)
                                    }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                      [vModelText, item.ardabPrice]
                                    ])
                                  ]),
                                  createVNode("span", {
                                    class: "err_msg d-inline-block mt-1",
                                    style: { "font-size": "12px" }
                                  }, toDisplayString(item.priceErr), 1)
                                ])
                              ]),
                              createVNode("td", { class: "text-center" }, [
                                createVNode("div", { class: "field_container pt-5" }, [
                                  createVNode("div", { class: "input_parent" }, [
                                    withDirectives(createVNode("input", {
                                      class: ["px-0 text-center", item.weightErr ? "err_field" : ""],
                                      style: { "width": "200px" },
                                      placeholder: "\u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628",
                                      type: "text",
                                      "onUpdate:modelValue": ($event) => item.weightPerArdab = $event,
                                      onKeyup: ($event) => validateSingleRowArdabWeight(item)
                                    }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                      [vModelText, item.weightPerArdab]
                                    ])
                                  ]),
                                  createVNode("span", {
                                    class: "err_msg d-inline-block mt-1",
                                    style: { "font-size": "12px" }
                                  }, toDisplayString(item.weightErr), 1)
                                ])
                              ])
                            ])
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  createVNode(_component_v_divider, { class: "mt-5" }),
                  createVNode(_component_v_divider),
                  createVNode("div", { class: "actions text-center mt-5" }, [
                    createVNode(_component_v_btn, {
                      color: "red",
                      class: "mr-3",
                      onClick: ($event) => dialog.value = false,
                      disabled: unref(btnLoading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"]),
                    createVNode(_component_v_btn, {
                      color: "green",
                      type: "submit",
                      onClick: submitData,
                      loading: unref(btnLoading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u062D\u0641\u0638")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/Update.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Add",
  __ssrInlineRender: true,
  props: ["openPopup", "toUpdate", "units"],
  emits: ["closePopup", "regetData"],
  setup(__props, { emit: emits }) {
    const productsModule = productStore();
    const productTypesModule = productTypeStore();
    const { productTypes } = storeToRefs(productTypesModule);
    const data = ref({
      name: null,
      productType: [],
      measuringUnits: []
    });
    const dialog = ref(false);
    const btnLoading = ref(false);
    const roles = ref({
      name: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      productType: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      measuringUnits: {
        required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required)
      }
    });
    watch(
      () => dialog.value,
      (newval) => {
        if (!newval) {
          setTimeout(() => {
            emits("closePopup");
          }, 200);
        }
      }
    );
    const validateSingleRowArdabPrice = (item) => {
      item.priceErr = "";
      if (!item.ardabPrice) {
        item.priceErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
        return;
      }
      if (isNaN(item.ardabPrice)) {
        item.priceErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637";
        return;
      }
      if (Number(item.ardabPrice) <= 0) {
        item.priceErr = "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0";
        return;
      }
    };
    const validateSingleRowArdabWeight = (item) => {
      item.weightErr = "";
      if (!item.weightPerArdab) {
        item.weightErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
        return;
      }
      if (isNaN(item.weightPerArdab)) {
        item.weightErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637";
        return;
      }
      if (Number(item.weightPerArdab) <= 0) {
        item.weightErr = "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0";
        return;
      }
    };
    let $v = useVuelidator(roles, data);
    const submitData = async () => {
      const res = await $v.value.$validate();
      if (res) {
        btnLoading.value = true;
        let isvalid = true;
        for (let i = 0; i < data.value.productType.length; i++) {
          if (!data.value.productType[i].ardabPrice) {
            data.value.productType[i].priceErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
            isvalid = false;
            break;
          }
          if (isNaN(data.value.productType[i].ardabPrice)) {
            data.value.productType[i].priceErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637";
            isvalid = false;
            break;
          }
          if (Number(data.value.productType[i].ardabPrice) <= 0) {
            data.value.productType[i].priceErr = "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0";
            isvalid = false;
            break;
          }
          if (!data.value.productType[i].weightPerArdab) {
            data.value.productType[i].weightErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";
            isvalid = false;
            break;
          }
          if (isNaN(data.value.productType[i].weightPerArdab)) {
            data.value.productType[i].weightErr = "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637";
            isvalid = false;
            break;
          }
          if (Number(data.value.productType[i].weightPerArdab) <= 0) {
            data.value.productType[i].weightErr = "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0";
            isvalid = false;
            break;
          }
        }
        if (isvalid) {
          const obj = {
            name: data.value.name,
            locked: false,
            typePriceList: [],
            measuringUnitList: []
          };
          data.value.productType.forEach((el) => {
            el.priceErr = "";
            el.weightErr = "";
            obj.typePriceList.push({
              pricePerKilo: parseFloat(el.ardabPrice) / parseFloat(el.weightPerArdab),
              ardabPrice: el.ardabPrice,
              weightPerArdab: el.weightPerArdab,
              productType: {
                id: el.id
              }
            });
          });
          data.value.measuringUnits.forEach((el) => {
            obj.measuringUnitList.push({
              id: el.id
            });
          });
          const result = await productsModule.doAddProduct(obj);
          if (result) {
            emits("regetData");
            dialog.value = false;
          }
        }
        btnLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "update_banner" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        width: "800",
        persistent: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { class: "pb-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, {
                    class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                    style: { "font-size": "22px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0645\u0646\u062A\u062C" : "\u0627\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u062C\u062F\u064A\u062F")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0645\u0646\u062A\u062C" : "\u0627\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u062C\u062F\u064A\u062F"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_form, {
                    class: "pa-5",
                    onSubmit: () => {
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_container, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, { dir: "rtl" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C</label><div class="input_parent position-relative"${_scopeId6}><input type="text"${ssrRenderAttr("value", unref(data).name)} placeholder="\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C" name="typeName" id="typeName" class="${ssrRenderClass(
                                            unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                          )}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-rename-outline`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-rename-outline")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "name")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "name").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                withDirectives(createVNode("input", {
                                                  type: "text",
                                                  "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                                  placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                                  name: "typeName",
                                                  id: "typeName",
                                                  class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                                }, null, 10, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(data).name]
                                                ]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-rename-outline")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    if (unref(productTypes).content) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "mt-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C</label><div class="input_parent position-relative"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_autocomplete, {
                                              items: __props.units.content,
                                              "item-title": "name",
                                              "item-value": "id",
                                              transition: "slide-y-transition",
                                              "return-object": "",
                                              variant: "outlined",
                                              chips: "",
                                              multiple: "",
                                              placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                              "hide-details": "",
                                              modelValue: unref(data).measuringUnits,
                                              "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                              class: unref($v).$errors.find(
                                                (el) => el.$property == "measuringUnits"
                                              ) ? "err_field" : ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-shape-outline`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-shape-outline")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                            if (unref($v).$errors.find((el) => el.$property == "productType")) {
                                              _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "productType").$message)}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode("div", { class: "field_container" }, [
                                                createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                                createVNode("div", { class: "input_parent position-relative" }, [
                                                  createVNode(_component_v_autocomplete, {
                                                    items: __props.units.content,
                                                    "item-title": "name",
                                                    "item-value": "id",
                                                    transition: "slide-y-transition",
                                                    "return-object": "",
                                                    variant: "outlined",
                                                    chips: "",
                                                    multiple: "",
                                                    placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                                    "hide-details": "",
                                                    modelValue: unref(data).measuringUnits,
                                                    "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                                    class: unref($v).$errors.find(
                                                      (el) => el.$property == "measuringUnits"
                                                    ) ? "err_field" : ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                                  createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-shape-outline")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "err_msg"
                                              }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if (unref(productTypes).content) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        class: "mt-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C</label><div class="input_parent position-relative"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_autocomplete, {
                                              items: unref(productTypes).content,
                                              "item-title": "name",
                                              "item-value": "id",
                                              transition: "slide-y-transition",
                                              "return-object": "",
                                              variant: "outlined",
                                              chips: "",
                                              multiple: "",
                                              placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                              "hide-details": "",
                                              modelValue: unref(data).productType,
                                              "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                              class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-shape-outline`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-shape-outline")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                            if (unref($v).$errors.find((el) => el.$property == "productType")) {
                                              _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "productType").$message)}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode("div", { class: "field_container" }, [
                                                createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                                createVNode("div", { class: "input_parent position-relative" }, [
                                                  createVNode(_component_v_autocomplete, {
                                                    items: unref(productTypes).content,
                                                    "item-title": "name",
                                                    "item-value": "id",
                                                    transition: "slide-y-transition",
                                                    "return-object": "",
                                                    variant: "outlined",
                                                    chips: "",
                                                    multiple: "",
                                                    placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                                    "hide-details": "",
                                                    modelValue: unref(data).productType,
                                                    "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                                    class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                                  createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-shape-outline")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "err_msg"
                                              }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                                placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                                name: "typeName",
                                                id: "typeName",
                                                class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).name]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-rename-outline")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                        key: 0,
                                        cols: "12",
                                        md: "6",
                                        class: "mt-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode(_component_v_autocomplete, {
                                                items: __props.units.content,
                                                "item-title": "name",
                                                "item-value": "id",
                                                transition: "slide-y-transition",
                                                "return-object": "",
                                                variant: "outlined",
                                                chips: "",
                                                multiple: "",
                                                placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                                "hide-details": "",
                                                modelValue: unref(data).measuringUnits,
                                                "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                                class: unref($v).$errors.find(
                                                  (el) => el.$property == "measuringUnits"
                                                ) ? "err_field" : ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-shape-outline")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                        key: 1,
                                        cols: "12",
                                        class: "mt-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode(_component_v_autocomplete, {
                                                items: unref(productTypes).content,
                                                "item-title": "name",
                                                "item-value": "id",
                                                transition: "slide-y-transition",
                                                "return-object": "",
                                                variant: "outlined",
                                                chips: "",
                                                multiple: "",
                                                placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                                "hide-details": "",
                                                modelValue: unref(data).productType,
                                                "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                                class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-shape-outline")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, { dir: "rtl" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                              placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                              name: "typeName",
                                              id: "typeName",
                                              class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).name]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-rename-outline")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                      key: 0,
                                      cols: "12",
                                      md: "6",
                                      class: "mt-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode(_component_v_autocomplete, {
                                              items: __props.units.content,
                                              "item-title": "name",
                                              "item-value": "id",
                                              transition: "slide-y-transition",
                                              "return-object": "",
                                              variant: "outlined",
                                              chips: "",
                                              multiple: "",
                                              placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                              "hide-details": "",
                                              modelValue: unref(data).measuringUnits,
                                              "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                              class: unref($v).$errors.find(
                                                (el) => el.$property == "measuringUnits"
                                              ) ? "err_field" : ""
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-shape-outline")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                      key: 1,
                                      cols: "12",
                                      class: "mt-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode(_component_v_autocomplete, {
                                              items: unref(productTypes).content,
                                              "item-title": "name",
                                              "item-value": "id",
                                              transition: "slide-y-transition",
                                              "return-object": "",
                                              variant: "outlined",
                                              chips: "",
                                              multiple: "",
                                              placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                              "hide-details": "",
                                              modelValue: unref(data).productType,
                                              "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                              class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-shape-outline")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_container, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { dir: "rtl" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                            placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                            name: "typeName",
                                            id: "typeName",
                                            class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).name]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-rename-outline")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                    key: 0,
                                    cols: "12",
                                    md: "6",
                                    class: "mt-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode(_component_v_autocomplete, {
                                            items: __props.units.content,
                                            "item-title": "name",
                                            "item-value": "id",
                                            transition: "slide-y-transition",
                                            "return-object": "",
                                            variant: "outlined",
                                            chips: "",
                                            multiple: "",
                                            placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                            "hide-details": "",
                                            modelValue: unref(data).measuringUnits,
                                            "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                            class: unref($v).$errors.find(
                                              (el) => el.$property == "measuringUnits"
                                            ) ? "err_field" : ""
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-shape-outline")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                    key: 1,
                                    cols: "12",
                                    class: "mt-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode(_component_v_autocomplete, {
                                            items: unref(productTypes).content,
                                            "item-title": "name",
                                            "item-value": "id",
                                            transition: "slide-y-transition",
                                            "return-object": "",
                                            variant: "outlined",
                                            chips: "",
                                            multiple: "",
                                            placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                            "hide-details": "",
                                            modelValue: unref(data).productType,
                                            "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                            class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-shape-outline")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "max-height": "200px", "overflow-y": "auto" })}"${_scopeId2}>`);
                  if (unref(data).productType.length) {
                    _push3(ssrRenderComponent(_component_v_table, { class: "text-center w-100" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<thead${_scopeId3}><tr${_scopeId3}><th style="${ssrRenderStyle({ "background-color": "#f3f3f3 !important" })}" class="text-center font-weight-bold"${_scopeId3}> \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 </th><th style="${ssrRenderStyle({ "background-color": "#f3f3f3 !important" })}" class="text-center font-weight-bold"${_scopeId3}> \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 </th><th style="${ssrRenderStyle({ "background-color": "#f3f3f3 !important" })}" class="text-center font-weight-bold"${_scopeId3}> \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 </th><th style="${ssrRenderStyle({ "background-color": "#f3f3f3 !important" })}" class="text-center font-weight-bold"${_scopeId3}> \u062D\u0630\u0641 </th></tr></thead><!--[-->`);
                          ssrRenderList(unref(data).productType, (item, i) => {
                            _push4(`<tbody${_scopeId3}><tr${_scopeId3}><td style="${ssrRenderStyle({ "font-size": "15px" })}"${_scopeId3}>${ssrInterpolate(item.name)}</td><td class="text-center"${_scopeId3}><div class="field_container pt-5"${_scopeId3}><div class="input_parent"${_scopeId3}><input style="${ssrRenderStyle({ "width": "200px" })}" placeholder="\u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628" type="text"${ssrRenderAttr("value", item.ardabPrice)} class="${ssrRenderClass([item.priceErr ? "err_field" : "", "px-0 text-center"])}"${_scopeId3}></div><span class="err_msg d-inline-block mt-1" style="${ssrRenderStyle({ "font-size": "12px" })}"${_scopeId3}>${ssrInterpolate(item.priceErr)}</span></div></td><td class="text-center"${_scopeId3}><div class="field_container pt-5"${_scopeId3}><div class="input_parent"${_scopeId3}><input style="${ssrRenderStyle({ "width": "200px" })}" placeholder="\u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628" type="text"${ssrRenderAttr("value", item.weightPerArdab)} class="${ssrRenderClass([item.weightErr ? "err_field" : "", "px-0 text-center"])}"${_scopeId3}></div><span class="err_msg d-inline-block mt-1" style="${ssrRenderStyle({ "font-size": "12px" })}"${_scopeId3}>${ssrInterpolate(item.weightErr)}</span></div></td><td${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_icon, {
                              color: "red",
                              onClick: ($event) => unref(data).productType.splice(i, 1)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`mdi-lock`);
                                } else {
                                  return [
                                    createTextVNode("mdi-lock")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</td></tr></tbody>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  style: { "background-color": "#f3f3f3 !important" },
                                  class: "text-center font-weight-bold"
                                }, " \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 "),
                                createVNode("th", {
                                  style: { "background-color": "#f3f3f3 !important" },
                                  class: "text-center font-weight-bold"
                                }, " \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                                createVNode("th", {
                                  style: { "background-color": "#f3f3f3 !important" },
                                  class: "text-center font-weight-bold"
                                }, " \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                                createVNode("th", {
                                  style: { "background-color": "#f3f3f3 !important" },
                                  class: "text-center font-weight-bold"
                                }, " \u062D\u0630\u0641 ")
                              ])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(data).productType, (item, i) => {
                              return openBlock(), createBlock("tbody", {
                                key: item.id
                              }, [
                                createVNode("tr", null, [
                                  createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.name), 1),
                                  createVNode("td", { class: "text-center" }, [
                                    createVNode("div", { class: "field_container pt-5" }, [
                                      createVNode("div", { class: "input_parent" }, [
                                        withDirectives(createVNode("input", {
                                          class: ["px-0 text-center", item.priceErr ? "err_field" : ""],
                                          style: { "width": "200px" },
                                          placeholder: "\u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628",
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => item.ardabPrice = $event,
                                          onKeyup: ($event) => validateSingleRowArdabPrice(item)
                                        }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                          [vModelText, item.ardabPrice]
                                        ])
                                      ]),
                                      createVNode("span", {
                                        class: "err_msg d-inline-block mt-1",
                                        style: { "font-size": "12px" }
                                      }, toDisplayString(item.priceErr), 1)
                                    ])
                                  ]),
                                  createVNode("td", { class: "text-center" }, [
                                    createVNode("div", { class: "field_container pt-5" }, [
                                      createVNode("div", { class: "input_parent" }, [
                                        withDirectives(createVNode("input", {
                                          class: ["px-0 text-center", item.weightErr ? "err_field" : ""],
                                          style: { "width": "200px" },
                                          placeholder: "\u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628",
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => item.weightPerArdab = $event,
                                          onKeyup: ($event) => validateSingleRowArdabWeight(item)
                                        }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                          [vModelText, item.weightPerArdab]
                                        ])
                                      ]),
                                      createVNode("span", {
                                        class: "err_msg d-inline-block mt-1",
                                        style: { "font-size": "12px" }
                                      }, toDisplayString(item.weightErr), 1)
                                    ])
                                  ]),
                                  createVNode("td", null, [
                                    createVNode(_component_v_icon, {
                                      color: "red",
                                      onClick: ($event) => unref(data).productType.splice(i, 1)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-lock")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])
                                ])
                              ]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_divider, { class: "mt-5" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                  _push3(`<div class="actions text-center mt-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "red",
                    class: "mr-3",
                    onClick: ($event) => dialog.value = false,
                    disabled: unref(btnLoading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0627\u0644\u063A\u0627\u0621`);
                      } else {
                        return [
                          createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "green",
                    type: "submit",
                    onClick: submitData,
                    loading: unref(btnLoading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u062D\u0641\u0638`);
                      } else {
                        return [
                          createTextVNode("\u062D\u0641\u0638")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_v_card_title, {
                      class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                      style: { "font-size": "22px" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0645\u0646\u062A\u062C" : "\u0627\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u062C\u062F\u064A\u062F"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_form, {
                      class: "pa-5",
                      onSubmit: withModifiers(() => {
                      }, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, { dir: "rtl" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                          placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                          name: "typeName",
                                          id: "typeName",
                                          class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).name]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-rename-outline")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                  key: 0,
                                  cols: "12",
                                  md: "6",
                                  class: "mt-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode(_component_v_autocomplete, {
                                          items: __props.units.content,
                                          "item-title": "name",
                                          "item-value": "id",
                                          transition: "slide-y-transition",
                                          "return-object": "",
                                          variant: "outlined",
                                          chips: "",
                                          multiple: "",
                                          placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                          "hide-details": "",
                                          modelValue: unref(data).measuringUnits,
                                          "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                          class: unref($v).$errors.find(
                                            (el) => el.$property == "measuringUnits"
                                          ) ? "err_field" : ""
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-shape-outline")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                  key: 1,
                                  cols: "12",
                                  class: "mt-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode(_component_v_autocomplete, {
                                          items: unref(productTypes).content,
                                          "item-title": "name",
                                          "item-value": "id",
                                          transition: "slide-y-transition",
                                          "return-object": "",
                                          variant: "outlined",
                                          chips: "",
                                          multiple: "",
                                          placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                          "hide-details": "",
                                          modelValue: unref(data).productType,
                                          "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                          class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-shape-outline")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onSubmit"]),
                    createVNode("div", { style: { "max-height": "200px", "overflow-y": "auto" } }, [
                      unref(data).productType.length ? (openBlock(), createBlock(_component_v_table, {
                        key: 0,
                        class: "text-center w-100"
                      }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", {
                                style: { "background-color": "#f3f3f3 !important" },
                                class: "text-center font-weight-bold"
                              }, " \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 "),
                              createVNode("th", {
                                style: { "background-color": "#f3f3f3 !important" },
                                class: "text-center font-weight-bold"
                              }, " \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                              createVNode("th", {
                                style: { "background-color": "#f3f3f3 !important" },
                                class: "text-center font-weight-bold"
                              }, " \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                              createVNode("th", {
                                style: { "background-color": "#f3f3f3 !important" },
                                class: "text-center font-weight-bold"
                              }, " \u062D\u0630\u0641 ")
                            ])
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data).productType, (item, i) => {
                            return openBlock(), createBlock("tbody", {
                              key: item.id
                            }, [
                              createVNode("tr", null, [
                                createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.name), 1),
                                createVNode("td", { class: "text-center" }, [
                                  createVNode("div", { class: "field_container pt-5" }, [
                                    createVNode("div", { class: "input_parent" }, [
                                      withDirectives(createVNode("input", {
                                        class: ["px-0 text-center", item.priceErr ? "err_field" : ""],
                                        style: { "width": "200px" },
                                        placeholder: "\u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628",
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => item.ardabPrice = $event,
                                        onKeyup: ($event) => validateSingleRowArdabPrice(item)
                                      }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                        [vModelText, item.ardabPrice]
                                      ])
                                    ]),
                                    createVNode("span", {
                                      class: "err_msg d-inline-block mt-1",
                                      style: { "font-size": "12px" }
                                    }, toDisplayString(item.priceErr), 1)
                                  ])
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  createVNode("div", { class: "field_container pt-5" }, [
                                    createVNode("div", { class: "input_parent" }, [
                                      withDirectives(createVNode("input", {
                                        class: ["px-0 text-center", item.weightErr ? "err_field" : ""],
                                        style: { "width": "200px" },
                                        placeholder: "\u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628",
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => item.weightPerArdab = $event,
                                        onKeyup: ($event) => validateSingleRowArdabWeight(item)
                                      }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                        [vModelText, item.weightPerArdab]
                                      ])
                                    ]),
                                    createVNode("span", {
                                      class: "err_msg d-inline-block mt-1",
                                      style: { "font-size": "12px" }
                                    }, toDisplayString(item.weightErr), 1)
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode(_component_v_icon, {
                                    color: "red",
                                    onClick: ($event) => unref(data).productType.splice(i, 1)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-lock")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
                              ])
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_v_divider, { class: "mt-5" }),
                    createVNode(_component_v_divider),
                    createVNode("div", { class: "actions text-center mt-5" }, [
                      createVNode(_component_v_btn, {
                        color: "red",
                        class: "mr-3",
                        onClick: ($event) => dialog.value = false,
                        disabled: unref(btnLoading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"]),
                      createVNode(_component_v_btn, {
                        color: "green",
                        type: "submit",
                        onClick: submitData,
                        loading: unref(btnLoading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u062D\u0641\u0638")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, { class: "pb-5" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, {
                    class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                    style: { "font-size": "22px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0645\u0646\u062A\u062C" : "\u0627\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u062C\u062F\u064A\u062F"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_form, {
                    class: "pa-5",
                    onSubmit: withModifiers(() => {
                    }, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, { dir: "rtl" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                        placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C",
                                        name: "typeName",
                                        id: "typeName",
                                        class: unref($v).$errors.find((el) => el.$property == "name") ? "err_field" : ""
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).name]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-rename-outline")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "name") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "name").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                key: 0,
                                cols: "12",
                                md: "6",
                                class: "mt-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode(_component_v_autocomplete, {
                                        items: __props.units.content,
                                        "item-title": "name",
                                        "item-value": "id",
                                        transition: "slide-y-transition",
                                        "return-object": "",
                                        variant: "outlined",
                                        chips: "",
                                        multiple: "",
                                        placeholder: "\u0648\u062D\u062F\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u0645\u0646\u062A\u062C",
                                        "hide-details": "",
                                        modelValue: unref(data).measuringUnits,
                                        "onUpdate:modelValue": ($event) => unref(data).measuringUnits = $event,
                                        class: unref($v).$errors.find(
                                          (el) => el.$property == "measuringUnits"
                                        ) ? "err_field" : ""
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-shape-outline")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              unref(productTypes).content ? (openBlock(), createBlock(_component_v_col, {
                                key: 1,
                                cols: "12",
                                class: "mt-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode(_component_v_autocomplete, {
                                        items: unref(productTypes).content,
                                        "item-title": "name",
                                        "item-value": "id",
                                        transition: "slide-y-transition",
                                        "return-object": "",
                                        variant: "outlined",
                                        chips: "",
                                        multiple: "",
                                        placeholder: "\u0641\u0631\u0648\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C",
                                        "hide-details": "",
                                        modelValue: unref(data).productType,
                                        "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                        class: unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-shape-outline")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "productType") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productType").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onSubmit"]),
                  createVNode("div", { style: { "max-height": "200px", "overflow-y": "auto" } }, [
                    unref(data).productType.length ? (openBlock(), createBlock(_component_v_table, {
                      key: 0,
                      class: "text-center w-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", {
                              style: { "background-color": "#f3f3f3 !important" },
                              class: "text-center font-weight-bold"
                            }, " \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 "),
                            createVNode("th", {
                              style: { "background-color": "#f3f3f3 !important" },
                              class: "text-center font-weight-bold"
                            }, " \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                            createVNode("th", {
                              style: { "background-color": "#f3f3f3 !important" },
                              class: "text-center font-weight-bold"
                            }, " \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                            createVNode("th", {
                              style: { "background-color": "#f3f3f3 !important" },
                              class: "text-center font-weight-bold"
                            }, " \u062D\u0630\u0641 ")
                          ])
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data).productType, (item, i) => {
                          return openBlock(), createBlock("tbody", {
                            key: item.id
                          }, [
                            createVNode("tr", null, [
                              createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.name), 1),
                              createVNode("td", { class: "text-center" }, [
                                createVNode("div", { class: "field_container pt-5" }, [
                                  createVNode("div", { class: "input_parent" }, [
                                    withDirectives(createVNode("input", {
                                      class: ["px-0 text-center", item.priceErr ? "err_field" : ""],
                                      style: { "width": "200px" },
                                      placeholder: "\u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628",
                                      type: "text",
                                      "onUpdate:modelValue": ($event) => item.ardabPrice = $event,
                                      onKeyup: ($event) => validateSingleRowArdabPrice(item)
                                    }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                      [vModelText, item.ardabPrice]
                                    ])
                                  ]),
                                  createVNode("span", {
                                    class: "err_msg d-inline-block mt-1",
                                    style: { "font-size": "12px" }
                                  }, toDisplayString(item.priceErr), 1)
                                ])
                              ]),
                              createVNode("td", { class: "text-center" }, [
                                createVNode("div", { class: "field_container pt-5" }, [
                                  createVNode("div", { class: "input_parent" }, [
                                    withDirectives(createVNode("input", {
                                      class: ["px-0 text-center", item.weightErr ? "err_field" : ""],
                                      style: { "width": "200px" },
                                      placeholder: "\u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628",
                                      type: "text",
                                      "onUpdate:modelValue": ($event) => item.weightPerArdab = $event,
                                      onKeyup: ($event) => validateSingleRowArdabWeight(item)
                                    }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                      [vModelText, item.weightPerArdab]
                                    ])
                                  ]),
                                  createVNode("span", {
                                    class: "err_msg d-inline-block mt-1",
                                    style: { "font-size": "12px" }
                                  }, toDisplayString(item.weightErr), 1)
                                ])
                              ]),
                              createVNode("td", null, [
                                createVNode(_component_v_icon, {
                                  color: "red",
                                  onClick: ($event) => unref(data).productType.splice(i, 1)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-lock")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  createVNode(_component_v_divider, { class: "mt-5" }),
                  createVNode(_component_v_divider),
                  createVNode("div", { class: "actions text-center mt-5" }, [
                    createVNode(_component_v_btn, {
                      color: "red",
                      class: "mr-3",
                      onClick: ($event) => dialog.value = false,
                      disabled: unref(btnLoading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"]),
                    createVNode(_component_v_btn, {
                      color: "green",
                      type: "submit",
                      onClick: submitData,
                      loading: unref(btnLoading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u062D\u0641\u0638")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/Add.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Listing",
  __ssrInlineRender: true,
  props: ["products", "loading", "units"],
  emits: ["regetItems"],
  setup(__props, { emit: emits }) {
    const openAdd = ref(false);
    const openUpdate = ref(false);
    const openDelete = ref(false);
    const toUpdate = ref(null);
    const toDelete = ref(null);
    const page = ref(1);
    const perPage = ref(10);
    const headers = ref([
      { title: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C", key: "name", width: "70%" },
      { title: "\u0627\u062C\u0631\u0627\u0621", key: "actions" }
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
        title: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
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
      const _component_products_update = __nuxt_component_0$1;
      const _component_products_add = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard_banners_listing" }, _attrs))}><div class="page_toolbar d-flex align-center justify-space-between"><div class="toolbar_btns">`);
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: ($event) => openAdd.value = true,
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
                  _push3(`mdi-plus-circle`);
                } else {
                  return [
                    createTextVNode("mdi-plus-circle")
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
                  createTextVNode("mdi-plus-circle")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        width: "20",
        size: "sm",
        elevation: "0",
        color: "transparent",
        class: "ms-3"
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
            if (__props.products) {
              _push2(ssrRenderComponent(_component_v_row, { class: "px-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      class: "section_container dashboard_table pa-0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(VDataTableServer), {
                            headers: unref(headers),
                            items: __props.products.content,
                            loading: __props.loading,
                            "items-per-page": unref(perPage),
                            "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                            page: unref(page),
                            "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                            "items-length": __props.products.totalElements ? __props.products.totalElements : 0,
                            "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                            "show-current-page": "",
                            "show-expand": ""
                          }, {
                            "column.data-table-expand": withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<th style="${ssrRenderStyle({ "white-space": "nowrap" })}"${_scopeId4}>\u0639\u0631\u0636 \u0627\u0644\u0641\u0631\u0632</th>`);
                              } else {
                                return [
                                  createVNode("th", { style: { "white-space": "nowrap" } }, "\u0639\u0631\u0636 \u0627\u0644\u0641\u0631\u0632")
                                ];
                              }
                            }),
                            "expanded-row": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<table class="w-100" style="${ssrRenderStyle({ "border": "1px solid #cfcfcf !important", "border-radius": "7px" })}"${_scopeId4}><thead${_scopeId4}><tr${_scopeId4}><th class="text-center font-weight-bold" style="${ssrRenderStyle({ "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" })}"${_scopeId4}> \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 </th><th class="text-center font-weight-bold" style="${ssrRenderStyle({ "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" })}"${_scopeId4}> \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 </th><th class="text-center font-weight-bold" style="${ssrRenderStyle({ "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" })}"${_scopeId4}> \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 </th></tr></thead><tbody${_scopeId4}><!--[-->`);
                                ssrRenderList(item.selectable.typePriceList, (itemType) => {
                                  _push5(`<tr${_scopeId4}><td class="text-center" style="${ssrRenderStyle({ "padding": "10px 0 !important" })}"${_scopeId4}>${ssrInterpolate(itemType.productType.name)}</td><td class="text-center" style="${ssrRenderStyle({ "padding": "10px 0 !important" })}"${_scopeId4}>${ssrInterpolate(itemType.ardabPrice)}</td><td class="text-center" style="${ssrRenderStyle({ "padding": "10px 0 !important" })}"${_scopeId4}>${ssrInterpolate(itemType.weightPerArdab)}</td></tr>`);
                                });
                                _push5(`<!--]--></tbody></table>`);
                              } else {
                                return [
                                  createVNode("table", {
                                    class: "w-100",
                                    style: { "border": "1px solid #cfcfcf !important", "border-radius": "7px" }
                                  }, [
                                    createVNode("thead", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", {
                                          class: "text-center font-weight-bold",
                                          style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                        }, " \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 "),
                                        createVNode("th", {
                                          class: "text-center font-weight-bold",
                                          style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                        }, " \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                                        createVNode("th", {
                                          class: "text-center font-weight-bold",
                                          style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                        }, " \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 ")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.selectable.typePriceList, (itemType) => {
                                        return openBlock(), createBlock("tr", {
                                          key: itemType.id
                                        }, [
                                          createVNode("td", {
                                            class: "text-center",
                                            style: { "padding": "10px 0 !important" }
                                          }, toDisplayString(itemType.productType.name), 1),
                                          createVNode("td", {
                                            class: "text-center",
                                            style: { "padding": "10px 0 !important" }
                                          }, toDisplayString(itemType.ardabPrice), 1),
                                          createVNode("td", {
                                            class: "text-center",
                                            style: { "padding": "10px 0 !important" }
                                          }, toDisplayString(itemType.weightPerArdab), 1)
                                        ]);
                                      }), 128))
                                    ])
                                  ])
                                ];
                              }
                            }),
                            loading: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(VSkeletonLoader), { type: "table-row@3" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(VSkeletonLoader), { type: "table-row@3" })
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
                            "item.actions": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_icon, {
                                  color: "blue",
                                  style: { "cursor": "pointer" },
                                  onClick: ($event) => (toUpdate.value = item, openUpdate.value = true)
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`mdi-square-edit-outline`);
                                    } else {
                                      return [
                                        createTextVNode("mdi-square-edit-outline")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  elevation: "0",
                                  color: "transparent",
                                  loading: item.selectable.loading,
                                  ripple: false
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_icon, {
                                        color: "red",
                                        style: { "cursor": "pointer" },
                                        class: "ml-2",
                                        size: "23",
                                        onClick: ($event) => (toDelete.value = item.selectable, openDelete.value = true)
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`mdi-lock`);
                                          } else {
                                            return [
                                              createTextVNode("mdi-lock")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_icon, {
                                          color: "red",
                                          style: { "cursor": "pointer" },
                                          class: "ml-2",
                                          size: "23",
                                          onClick: ($event) => (toDelete.value = item.selectable, openDelete.value = true)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-lock")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_icon, {
                                    color: "blue",
                                    style: { "cursor": "pointer" },
                                    onClick: ($event) => (toUpdate.value = item, openUpdate.value = true)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-square-edit-outline")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(_component_v_btn, {
                                    elevation: "0",
                                    color: "transparent",
                                    loading: item.selectable.loading,
                                    ripple: false
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        color: "red",
                                        style: { "cursor": "pointer" },
                                        class: "ml-2",
                                        size: "23",
                                        onClick: ($event) => (toDelete.value = item.selectable, openDelete.value = true)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-lock")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1032, ["loading"])
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
                              items: __props.products.content,
                              loading: __props.loading,
                              "items-per-page": unref(perPage),
                              "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                              page: unref(page),
                              "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                              "items-length": __props.products.totalElements ? __props.products.totalElements : 0,
                              "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                              "show-current-page": "",
                              "show-expand": ""
                            }, {
                              "column.data-table-expand": withCtx(() => [
                                createVNode("th", { style: { "white-space": "nowrap" } }, "\u0639\u0631\u0636 \u0627\u0644\u0641\u0631\u0632")
                              ]),
                              "expanded-row": withCtx(({ item }) => [
                                createVNode("table", {
                                  class: "w-100",
                                  style: { "border": "1px solid #cfcfcf !important", "border-radius": "7px" }
                                }, [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", {
                                        class: "text-center font-weight-bold",
                                        style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                      }, " \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 "),
                                      createVNode("th", {
                                        class: "text-center font-weight-bold",
                                        style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                      }, " \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                                      createVNode("th", {
                                        class: "text-center font-weight-bold",
                                        style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                      }, " \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 ")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.selectable.typePriceList, (itemType) => {
                                      return openBlock(), createBlock("tr", {
                                        key: itemType.id
                                      }, [
                                        createVNode("td", {
                                          class: "text-center",
                                          style: { "padding": "10px 0 !important" }
                                        }, toDisplayString(itemType.productType.name), 1),
                                        createVNode("td", {
                                          class: "text-center",
                                          style: { "padding": "10px 0 !important" }
                                        }, toDisplayString(itemType.ardabPrice), 1),
                                        createVNode("td", {
                                          class: "text-center",
                                          style: { "padding": "10px 0 !important" }
                                        }, toDisplayString(itemType.weightPerArdab), 1)
                                      ]);
                                    }), 128))
                                  ])
                                ])
                              ]),
                              loading: withCtx(() => [
                                createVNode(unref(VSkeletonLoader), { type: "table-row@3" })
                              ]),
                              "item.index": withCtx(({ item }) => [
                                createTextVNode(toDisplayString(item.index + 1), 1)
                              ]),
                              "item.actions": withCtx(({ item }) => [
                                createVNode(_component_v_icon, {
                                  color: "blue",
                                  style: { "cursor": "pointer" },
                                  onClick: ($event) => (toUpdate.value = item, openUpdate.value = true)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-square-edit-outline")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  elevation: "0",
                                  color: "transparent",
                                  loading: item.selectable.loading,
                                  ripple: false
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      color: "red",
                                      style: { "cursor": "pointer" },
                                      class: "ml-2",
                                      size: "23",
                                      onClick: ($event) => (toDelete.value = item.selectable, openDelete.value = true)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-lock")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1032, ["loading"])
                              ]),
                              "no-data": withCtx(() => [
                                createVNode("div", null, "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")
                              ]),
                              _: 1
                            }, 8, ["headers", "items", "loading", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items-length"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        cols: "12",
                        class: "section_container dashboard_table pa-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(VDataTableServer), {
                            headers: unref(headers),
                            items: __props.products.content,
                            loading: __props.loading,
                            "items-per-page": unref(perPage),
                            "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                            page: unref(page),
                            "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                            "items-length": __props.products.totalElements ? __props.products.totalElements : 0,
                            "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                            "show-current-page": "",
                            "show-expand": ""
                          }, {
                            "column.data-table-expand": withCtx(() => [
                              createVNode("th", { style: { "white-space": "nowrap" } }, "\u0639\u0631\u0636 \u0627\u0644\u0641\u0631\u0632")
                            ]),
                            "expanded-row": withCtx(({ item }) => [
                              createVNode("table", {
                                class: "w-100",
                                style: { "border": "1px solid #cfcfcf !important", "border-radius": "7px" }
                              }, [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", {
                                      class: "text-center font-weight-bold",
                                      style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                    }, " \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 "),
                                    createVNode("th", {
                                      class: "text-center font-weight-bold",
                                      style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                    }, " \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                                    createVNode("th", {
                                      class: "text-center font-weight-bold",
                                      style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                    }, " \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 ")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.selectable.typePriceList, (itemType) => {
                                    return openBlock(), createBlock("tr", {
                                      key: itemType.id
                                    }, [
                                      createVNode("td", {
                                        class: "text-center",
                                        style: { "padding": "10px 0 !important" }
                                      }, toDisplayString(itemType.productType.name), 1),
                                      createVNode("td", {
                                        class: "text-center",
                                        style: { "padding": "10px 0 !important" }
                                      }, toDisplayString(itemType.ardabPrice), 1),
                                      createVNode("td", {
                                        class: "text-center",
                                        style: { "padding": "10px 0 !important" }
                                      }, toDisplayString(itemType.weightPerArdab), 1)
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ]),
                            loading: withCtx(() => [
                              createVNode(unref(VSkeletonLoader), { type: "table-row@3" })
                            ]),
                            "item.index": withCtx(({ item }) => [
                              createTextVNode(toDisplayString(item.index + 1), 1)
                            ]),
                            "item.actions": withCtx(({ item }) => [
                              createVNode(_component_v_icon, {
                                color: "blue",
                                style: { "cursor": "pointer" },
                                onClick: ($event) => (toUpdate.value = item, openUpdate.value = true)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-square-edit-outline")
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_component_v_btn, {
                                elevation: "0",
                                color: "transparent",
                                loading: item.selectable.loading,
                                ripple: false
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    color: "red",
                                    style: { "cursor": "pointer" },
                                    class: "ml-2",
                                    size: "23",
                                    onClick: ($event) => (toDelete.value = item.selectable, openDelete.value = true)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-lock")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1032, ["loading"])
                            ]),
                            "no-data": withCtx(() => [
                              createVNode("div", null, "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")
                            ]),
                            _: 1
                          }, 8, ["headers", "items", "loading", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items-length"])
                        ]),
                        _: 1
                      })
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
              __props.products ? (openBlock(), createBlock(_component_v_row, {
                key: 0,
                class: "px-4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "section_container dashboard_table pa-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(VDataTableServer), {
                        headers: unref(headers),
                        items: __props.products.content,
                        loading: __props.loading,
                        "items-per-page": unref(perPage),
                        "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                        page: unref(page),
                        "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                        "items-length": __props.products.totalElements ? __props.products.totalElements : 0,
                        "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                        "show-current-page": "",
                        "show-expand": ""
                      }, {
                        "column.data-table-expand": withCtx(() => [
                          createVNode("th", { style: { "white-space": "nowrap" } }, "\u0639\u0631\u0636 \u0627\u0644\u0641\u0631\u0632")
                        ]),
                        "expanded-row": withCtx(({ item }) => [
                          createVNode("table", {
                            class: "w-100",
                            style: { "border": "1px solid #cfcfcf !important", "border-radius": "7px" }
                          }, [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  class: "text-center font-weight-bold",
                                  style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                }, " \u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0632 "),
                                createVNode("th", {
                                  class: "text-center font-weight-bold",
                                  style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                }, " \u0633\u0639\u0631 \u0627\u0644\u0627\u0631\u062F\u0628 "),
                                createVNode("th", {
                                  class: "text-center font-weight-bold",
                                  style: { "padding": "10px 0 !important", "background-color": "#f1f1f1 !important" }
                                }, " \u0648\u0632\u0646 \u0627\u0644\u0627\u0631\u062F\u0628 ")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.selectable.typePriceList, (itemType) => {
                                return openBlock(), createBlock("tr", {
                                  key: itemType.id
                                }, [
                                  createVNode("td", {
                                    class: "text-center",
                                    style: { "padding": "10px 0 !important" }
                                  }, toDisplayString(itemType.productType.name), 1),
                                  createVNode("td", {
                                    class: "text-center",
                                    style: { "padding": "10px 0 !important" }
                                  }, toDisplayString(itemType.ardabPrice), 1),
                                  createVNode("td", {
                                    class: "text-center",
                                    style: { "padding": "10px 0 !important" }
                                  }, toDisplayString(itemType.weightPerArdab), 1)
                                ]);
                              }), 128))
                            ])
                          ])
                        ]),
                        loading: withCtx(() => [
                          createVNode(unref(VSkeletonLoader), { type: "table-row@3" })
                        ]),
                        "item.index": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(item.index + 1), 1)
                        ]),
                        "item.actions": withCtx(({ item }) => [
                          createVNode(_component_v_icon, {
                            color: "blue",
                            style: { "cursor": "pointer" },
                            onClick: ($event) => (toUpdate.value = item, openUpdate.value = true)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-square-edit-outline")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_v_btn, {
                            elevation: "0",
                            color: "transparent",
                            loading: item.selectable.loading,
                            ripple: false
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                color: "red",
                                style: { "cursor": "pointer" },
                                class: "ml-2",
                                size: "23",
                                onClick: ($event) => (toDelete.value = item.selectable, openDelete.value = true)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-lock")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1032, ["loading"])
                        ]),
                        "no-data": withCtx(() => [
                          createVNode("div", null, "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")
                        ]),
                        _: 1
                      }, 8, ["headers", "items", "loading", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items-length"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(openUpdate)) {
        _push(ssrRenderComponent(_component_products_update, {
          openPopup: unref(openUpdate),
          onClosePopup: ($event) => (openUpdate.value = false, toUpdate.value = null),
          toUpdate: unref(toUpdate),
          onRegetData: ($event) => (page.value = 1, emits("regetItems", {
            page: 1,
            limit: unref(perPage)
          })),
          units: __props.units
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(openAdd)) {
        _push(ssrRenderComponent(_component_products_add, {
          openPopup: unref(openAdd),
          onClosePopup: ($event) => openAdd.value = false,
          onRegetData: ($event) => emits("regetItems", {
            page: 1,
            limit: unref(perPage)
          }),
          units: __props.units
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/Listing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const productsModule = productStore();
    const measuringUnitsModule = measuringUnitStore();
    const { products } = storeToRefs(productsModule);
    const { units } = storeToRefs(measuringUnitsModule);
    const loading = ref(true);
    const getData = async (page, limit) => {
      loading.value = true;
      await Promise.all([
        measuringUnitsModule.doGetUnits(0, 1e4),
        productsModule.doGetProducts(page - 1, limit)
      ]);
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductsListing = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard_tests_page mb-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ProductsListing, {
        products: unref(products),
        loading: unref(loading),
        onRegetItems: ($event) => getData($event.page, $event.limit),
        units: unref(units)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-89e22eab.mjs.map
