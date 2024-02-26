import { ref, mergeProps, unref, useSSRContext, watch, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, isRef, openBlock, createBlock, createCommentVNode, computed, withDirectives, vModelText, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { s as storeToRefs } from '../server.mjs';
import moment from 'moment';
import { c as clientStore } from './clients-4c03e405.mjs';
import useVuelidator from '@vuelidate/core';
import { helpers, required, numeric, between } from '@vuelidate/validators';
import { V as VDataTableServer, a as VSkeletonLoader } from './VSkeletonLoader-cab11d2b.mjs';
import { g as granaryStore } from './granary-ab731415.mjs';
import { s as supplierStore } from './supplier-7324b6de.mjs';
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
import 'axios';
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
  __name: "Filter",
  __ssrInlineRender: true,
  props: ["loading", "reFilter"],
  emits: ["filterData", "refiltered"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const clientModule = clientStore();
    const { clientLockup } = storeToRefs(clientModule);
    const data = ref({
      clientID: null,
      granaryId: null,
      FromDate: null,
      ToDate: null
    });
    const roles = ref({
      clientID: {
        required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required)
      },
      granaryId: {
        required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required)
      }
    });
    let $v = useVuelidator(roles, data);
    const getRelatedGranaries = computed(() => {
      if (data.value.clientID)
        return clientLockup.value.find((el) => el.client.id == data.value.clientID).granaryList;
      return [];
    });
    watch(
      () => props.reFilter,
      (newVal) => {
        if (newVal) {
          submitFilter();
          emits("refiltered");
        }
      }
    );
    const submitFilter = async () => {
      const res = await $v.value.$validate();
      if (res) {
        const obj = {
          clientID: data.value.clientID,
          granaryId: data.value.granaryId,
          FromDate: data.value.FromDate ? moment(data.value.FromDate).format("DD/MM/YYYY") : null,
          ToDate: data.value.ToDate ? moment(data.value.ToDate).format("DD/MM/YYYY") : null
        };
        emits("filterData", obj);
      }
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
                  _push3(`<div class="field_container"${_scopeId2}><label for="supplierId"${_scopeId2}>\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u064A\u0644</label><div class="input_parent position-relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_autocomplete, {
                    "item-title": "client.name",
                    "item-value": "client.id",
                    items: unref(clientLockup),
                    transition: "slide-y-transition",
                    variant: "outlined",
                    "hide-details": "",
                    modelValue: unref(data).clientID,
                    "onUpdate:modelValue": ($event) => unref(data).clientID = $event,
                    placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u064A\u0644",
                    disabled: __props.loading,
                    class: unref($v).$errors.find((el) => el.$property == "clientID") ? "err_field" : ""
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
                  _push3(`</div>`);
                  if (unref($v).$errors.find((el) => el.$property == "clientID")) {
                    _push3(`<span class="err_msg"${_scopeId2}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "clientID").$message)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "field_container" }, [
                      createVNode("label", { for: "supplierId" }, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u064A\u0644"),
                      createVNode("div", { class: "input_parent position-relative" }, [
                        createVNode(_component_v_autocomplete, {
                          "item-title": "client.name",
                          "item-value": "client.id",
                          items: unref(clientLockup),
                          transition: "slide-y-transition",
                          variant: "outlined",
                          "hide-details": "",
                          modelValue: unref(data).clientID,
                          "onUpdate:modelValue": ($event) => unref(data).clientID = $event,
                          placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u064A\u0644",
                          disabled: __props.loading,
                          class: unref($v).$errors.find((el) => el.$property == "clientID") ? "err_field" : ""
                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled", "class"]),
                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-account-cowboy-hat")
                          ]),
                          _: 1
                        })
                      ]),
                      unref($v).$errors.find((el) => el.$property == "clientID") ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "err_msg"
                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "clientID").$message), 1)) : createCommentVNode("", true)
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
                    items: unref(getRelatedGranaries),
                    transition: "slide-y-transition",
                    variant: "outlined",
                    disabled: __props.loading,
                    placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
                    "hide-details": "",
                    modelValue: unref(data).granaryId,
                    "onUpdate:modelValue": ($event) => unref(data).granaryId = $event,
                    class: unref($v).$errors.find((el) => el.$property == "granaryId") ? "err_field" : ""
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
                  _push3(`</div>`);
                  if (unref($v).$errors.find((el) => el.$property == "clientID")) {
                    _push3(`<span class="err_msg"${_scopeId2}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "clientID").$message)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "field_container" }, [
                      createVNode("label", { for: "granaryId" }, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                      createVNode("div", { class: "input_parent position-relative" }, [
                        createVNode(_component_v_autocomplete, {
                          "item-title": "name",
                          "item-value": "id",
                          items: unref(getRelatedGranaries),
                          transition: "slide-y-transition",
                          variant: "outlined",
                          disabled: __props.loading,
                          placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
                          "hide-details": "",
                          modelValue: unref(data).granaryId,
                          "onUpdate:modelValue": ($event) => unref(data).granaryId = $event,
                          class: unref($v).$errors.find((el) => el.$property == "granaryId") ? "err_field" : ""
                        }, null, 8, ["items", "disabled", "modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-store-24-hour")
                          ]),
                          _: 1
                        })
                      ]),
                      unref($v).$errors.find((el) => el.$property == "clientID") ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "err_msg"
                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "clientID").$message), 1)) : createCommentVNode("", true)
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
                  _push3(`<div class="field_container" dir="rtl"${_scopeId2}><label for="FromDate"${_scopeId2}>\u0645\u0646</label><div class="input_parent position-relative"${_scopeId2}><input type="datetime-local" name="FromDate" id="FromDate"${ssrIncludeBooleanAttr(__props.loading) ? " disabled" : ""}${ssrRenderAttr("value", unref(data).FromDate)} style="${ssrRenderStyle({ "padding-right": "0 !important" })}"${_scopeId2}>`);
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
                      createVNode("label", { for: "FromDate" }, "\u0645\u0646"),
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
                  _push3(`<div class="field_container" dir="rtl"${_scopeId2}><label for="ToDate"${_scopeId2}>\u0627\u0644\u064A</label><div class="input_parent position-relative"${_scopeId2}><input type="datetime-local" name="ToDate"${ssrRenderAttr("value", unref(data).ToDate)}${ssrIncludeBooleanAttr(__props.loading) ? " disabled" : ""} id="ToDate" style="${ssrRenderStyle({ "padding-right": "0 !important" })}"${_scopeId2}>`);
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
                      createVNode("label", { for: "ToDate" }, "\u0627\u0644\u064A"),
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
              style: { "display": "flex", "align-items": "flex-end" },
              class: "pt-0"
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
                    style: { "margin-bottom": "2px" },
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
                      style: { "margin-bottom": "2px" },
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
                    createVNode("label", { for: "supplierId" }, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u064A\u0644"),
                    createVNode("div", { class: "input_parent position-relative" }, [
                      createVNode(_component_v_autocomplete, {
                        "item-title": "client.name",
                        "item-value": "client.id",
                        items: unref(clientLockup),
                        transition: "slide-y-transition",
                        variant: "outlined",
                        "hide-details": "",
                        modelValue: unref(data).clientID,
                        "onUpdate:modelValue": ($event) => unref(data).clientID = $event,
                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u064A\u0644",
                        disabled: __props.loading,
                        class: unref($v).$errors.find((el) => el.$property == "clientID") ? "err_field" : ""
                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled", "class"]),
                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-account-cowboy-hat")
                        ]),
                        _: 1
                      })
                    ]),
                    unref($v).$errors.find((el) => el.$property == "clientID") ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "err_msg"
                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "clientID").$message), 1)) : createCommentVNode("", true)
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
                        items: unref(getRelatedGranaries),
                        transition: "slide-y-transition",
                        variant: "outlined",
                        disabled: __props.loading,
                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
                        "hide-details": "",
                        modelValue: unref(data).granaryId,
                        "onUpdate:modelValue": ($event) => unref(data).granaryId = $event,
                        class: unref($v).$errors.find((el) => el.$property == "granaryId") ? "err_field" : ""
                      }, null, 8, ["items", "disabled", "modelValue", "onUpdate:modelValue", "class"]),
                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-store-24-hour")
                        ]),
                        _: 1
                      })
                    ]),
                    unref($v).$errors.find((el) => el.$property == "clientID") ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "err_msg"
                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "clientID").$message), 1)) : createCommentVNode("", true)
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
                    createVNode("label", { for: "FromDate" }, "\u0645\u0646"),
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
                    createVNode("label", { for: "ToDate" }, "\u0627\u0644\u064A"),
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
                style: { "display": "flex", "align-items": "flex-end" },
                class: "pt-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    color: "blue",
                    width: "100",
                    height: "40",
                    elevation: "0",
                    onClick: submitFilter,
                    class: "font-weight-bold",
                    style: { "margin-bottom": "2px" },
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/clients/payments/Filter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "PayNow",
  __ssrInlineRender: true,
  props: ["openPopup", "selected", "selectedGranary"],
  emits: ["closePopup", "regetData"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const clientModule = clientStore();
    const data = ref({
      paymentAmount: null
    });
    const dialog = ref(false);
    const btnLoading = ref(false);
    const totalDues = computed(() => {
      let totals = 0;
      if (props.selected && props.selected.length) {
        props.selected.forEach((el) => totals += el.remaining);
      }
      return totals;
    });
    const roles = computed(() => {
      return {
        paymentAmount: {
          required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required),
          numeric: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637", numeric),
          between: helpers.withMessage(
            `\u0642\u0645 \u0628\u0627\u062F\u062E\u0627\u0644 \u0631\u0642\u0645 \u0628\u064A\u0646 1 \u0648 ${totalDues.value}`,
            between(1, totalDues.value)
          )
        }
      };
    });
    const $v = useVuelidator(roles, data);
    const submitData = async () => {
      const res = await $v.value.$validate();
      if (res) {
        const obj = {
          amountToPay: data.value.paymentAmount,
          duesDTOList: props.selected,
          granary: {
            id: props.selectedGranary
          }
        };
        btnLoading.value = true;
        const result = await clientModule.doPayClients(obj);
        btnLoading.value = false;
        if (result) {
          emits("regetData");
          dialog.value = false;
        }
      }
    };
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pay_client_due" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        width: "800",
        persistent: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              class: "pb-5",
              "max-height": "90vh"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, {
                    class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                    style: { "font-size": "22px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0627\u0636\u0627\u0641\u0629 \u0645\u062F\u0641\u0648\u0639\u0627\u062A \u062C\u062F\u064A\u062F\u0629 `);
                      } else {
                        return [
                          createTextVNode(" \u0627\u0636\u0627\u0641\u0629 \u0645\u062F\u0641\u0648\u0639\u0627\u062A \u062C\u062F\u064A\u062F\u0629 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (__props.selected && __props.selected.length) {
                    _push3(ssrRenderComponent(_component_v_table, { class: "text-center w-100" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<thead${_scopeId3}><tr${_scopeId3}><th style="${ssrRenderStyle({ "background-color": "#f3f3f3 !important" })}" class="text-center font-weight-bold"${_scopeId3}> \u062A\u0627\u0631\u064A\u062E </th><th style="${ssrRenderStyle({ "background-color": "#f3f3f3 !important" })}" class="text-center font-weight-bold"${_scopeId3}> \u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629 </th><th style="${ssrRenderStyle({ "background-color": "#f3f3f3 !important" })}" class="text-center font-weight-bold"${_scopeId3}> \u062D\u0627\u0644\u0629 \u0627\u0644\u062F\u0641\u0639 </th></tr></thead><!--[-->`);
                          ssrRenderList(__props.selected, (item, i) => {
                            _push4(`<tbody${_scopeId3}><tr${_scopeId3}><td style="${ssrRenderStyle({ "font-size": "15px" })}"${_scopeId3}>${ssrInterpolate(item.date)}</td><td style="${ssrRenderStyle({ "font-size": "15px" })}"${_scopeId3}>${ssrInterpolate(item.remaining)}</td><td style="${ssrRenderStyle({ "font-size": "15px" })}"${_scopeId3}>`);
                            if (item.isFullPayed) {
                              _push4(ssrRenderComponent(_component_v_chip, { color: "green" }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`\u0645\u0643\u062A\u0645\u0644`);
                                  } else {
                                    return [
                                      createTextVNode("\u0645\u0643\u062A\u0645\u0644")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            if (!item.isFullPayed) {
                              _push4(ssrRenderComponent(_component_v_chip, { color: "red" }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644`);
                                  } else {
                                    return [
                                      createTextVNode("\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</td></tr></tbody>`);
                          });
                          _push4(`<!--]--><tfoot${_scopeId3}><tr class="pt-5"${_scopeId3}><td style="${ssrRenderStyle({ "font-weight": "bold", "font-size": "18px" })}"${_scopeId3}>\u0627\u0644\u0627\u062C\u0645\u0627\u0644\u064A</td><td style="${ssrRenderStyle({ "font-weight": "bold", "font-size": "18px" })}"${_scopeId3}>${ssrInterpolate(unref(totalDues))}</td><td${_scopeId3}></td></tr><tr style="${ssrRenderStyle({ "background-color": "white !important" })}"${_scopeId3}><td${_scopeId3}></td><td${_scopeId3}><div class="field_container pt-5"${_scopeId3}><div class="input_parent"${_scopeId3}><input style="${ssrRenderStyle({ "width": "100%" })}" placeholder="\u0642\u0645 \u0628\u0627\u062F\u062E\u0627\u0644 \u0645\u0628\u0644\u063A \u0627\u0644\u0633\u062F\u0627\u062F" type="text"${ssrRenderAttr("value", unref(data).paymentAmount)} class="${ssrRenderClass([
                            unref($v).$errors.find((el) => el.$property == "paymentAmount") ? "err_field" : "",
                            "px-0 text-center"
                          ])}"${_scopeId3}></div>`);
                          if (unref($v).$errors.find((el) => el.$property == "paymentAmount")) {
                            _push4(`<span class="err_msg pt-2 d-block mb-0 pb-0"${_scopeId3}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "paymentAmount").$message)}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div></td><td${_scopeId3}></td></tr></tfoot>`);
                        } else {
                          return [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  style: { "background-color": "#f3f3f3 !important" },
                                  class: "text-center font-weight-bold"
                                }, " \u062A\u0627\u0631\u064A\u062E "),
                                createVNode("th", {
                                  style: { "background-color": "#f3f3f3 !important" },
                                  class: "text-center font-weight-bold"
                                }, " \u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629 "),
                                createVNode("th", {
                                  style: { "background-color": "#f3f3f3 !important" },
                                  class: "text-center font-weight-bold"
                                }, " \u062D\u0627\u0644\u0629 \u0627\u0644\u062F\u0641\u0639 ")
                              ])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.selected, (item, i) => {
                              return openBlock(), createBlock("tbody", {
                                key: item.id
                              }, [
                                createVNode("tr", null, [
                                  createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.date), 1),
                                  createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.remaining), 1),
                                  createVNode("td", { style: { "font-size": "15px" } }, [
                                    item.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                      key: 0,
                                      color: "green"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0645\u0643\u062A\u0645\u0644")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    !item.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                      key: 1,
                                      color: "red"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ])
                                ])
                              ]);
                            }), 128)),
                            createVNode("tfoot", null, [
                              createVNode("tr", { class: "pt-5" }, [
                                createVNode("td", { style: { "font-weight": "bold", "font-size": "18px" } }, "\u0627\u0644\u0627\u062C\u0645\u0627\u0644\u064A"),
                                createVNode("td", { style: { "font-weight": "bold", "font-size": "18px" } }, toDisplayString(unref(totalDues)), 1),
                                createVNode("td")
                              ]),
                              createVNode("tr", { style: { "background-color": "white !important" } }, [
                                createVNode("td"),
                                createVNode("td", null, [
                                  createVNode("div", { class: "field_container pt-5" }, [
                                    createVNode("div", { class: "input_parent" }, [
                                      withDirectives(createVNode("input", {
                                        class: [
                                          "px-0 text-center",
                                          unref($v).$errors.find((el) => el.$property == "paymentAmount") ? "err_field" : ""
                                        ],
                                        style: { "width": "100%" },
                                        placeholder: "\u0642\u0645 \u0628\u0627\u062F\u062E\u0627\u0644 \u0645\u0628\u0644\u063A \u0627\u0644\u0633\u062F\u0627\u062F",
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => unref(data).paymentAmount = $event
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).paymentAmount]
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "paymentAmount") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg pt-2 d-block mb-0 pb-0"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "paymentAmount").$message), 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode("td")
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="actions text-center mt-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "red",
                    class: "mr-3",
                    onClick: ($event) => dialog.value = false,
                    width: "100",
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
                    onClick: submitData,
                    loading: unref(btnLoading),
                    width: "100"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u062F\u0641\u0639`);
                      } else {
                        return [
                          createTextVNode("\u062F\u0641\u0639")
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
                        createTextVNode(" \u0627\u0636\u0627\u0641\u0629 \u0645\u062F\u0641\u0648\u0639\u0627\u062A \u062C\u062F\u064A\u062F\u0629 ")
                      ]),
                      _: 1
                    }),
                    __props.selected && __props.selected.length ? (openBlock(), createBlock(_component_v_table, {
                      key: 0,
                      class: "text-center w-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", {
                              style: { "background-color": "#f3f3f3 !important" },
                              class: "text-center font-weight-bold"
                            }, " \u062A\u0627\u0631\u064A\u062E "),
                            createVNode("th", {
                              style: { "background-color": "#f3f3f3 !important" },
                              class: "text-center font-weight-bold"
                            }, " \u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629 "),
                            createVNode("th", {
                              style: { "background-color": "#f3f3f3 !important" },
                              class: "text-center font-weight-bold"
                            }, " \u062D\u0627\u0644\u0629 \u0627\u0644\u062F\u0641\u0639 ")
                          ])
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.selected, (item, i) => {
                          return openBlock(), createBlock("tbody", {
                            key: item.id
                          }, [
                            createVNode("tr", null, [
                              createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.date), 1),
                              createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.remaining), 1),
                              createVNode("td", { style: { "font-size": "15px" } }, [
                                item.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                  key: 0,
                                  color: "green"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0645\u0643\u062A\u0645\u0644")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                !item.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                  key: 1,
                                  color: "red"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ])
                            ])
                          ]);
                        }), 128)),
                        createVNode("tfoot", null, [
                          createVNode("tr", { class: "pt-5" }, [
                            createVNode("td", { style: { "font-weight": "bold", "font-size": "18px" } }, "\u0627\u0644\u0627\u062C\u0645\u0627\u0644\u064A"),
                            createVNode("td", { style: { "font-weight": "bold", "font-size": "18px" } }, toDisplayString(unref(totalDues)), 1),
                            createVNode("td")
                          ]),
                          createVNode("tr", { style: { "background-color": "white !important" } }, [
                            createVNode("td"),
                            createVNode("td", null, [
                              createVNode("div", { class: "field_container pt-5" }, [
                                createVNode("div", { class: "input_parent" }, [
                                  withDirectives(createVNode("input", {
                                    class: [
                                      "px-0 text-center",
                                      unref($v).$errors.find((el) => el.$property == "paymentAmount") ? "err_field" : ""
                                    ],
                                    style: { "width": "100%" },
                                    placeholder: "\u0642\u0645 \u0628\u0627\u062F\u062E\u0627\u0644 \u0645\u0628\u0644\u063A \u0627\u0644\u0633\u062F\u0627\u062F",
                                    type: "text",
                                    "onUpdate:modelValue": ($event) => unref(data).paymentAmount = $event
                                  }, null, 10, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(data).paymentAmount]
                                  ])
                                ]),
                                unref($v).$errors.find((el) => el.$property == "paymentAmount") ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "err_msg pt-2 d-block mb-0 pb-0"
                                }, toDisplayString(unref($v).$errors.find((el) => el.$property == "paymentAmount").$message), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("td")
                          ])
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode("div", { class: "actions text-center mt-5" }, [
                      createVNode(_component_v_btn, {
                        color: "red",
                        class: "mr-3",
                        onClick: ($event) => dialog.value = false,
                        width: "100",
                        disabled: unref(btnLoading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"]),
                      createVNode(_component_v_btn, {
                        color: "green",
                        onClick: submitData,
                        loading: unref(btnLoading),
                        width: "100"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u062F\u0641\u0639")
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
              createVNode(_component_v_card, {
                class: "pb-5",
                "max-height": "90vh"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, {
                    class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                    style: { "font-size": "22px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0627\u0636\u0627\u0641\u0629 \u0645\u062F\u0641\u0648\u0639\u0627\u062A \u062C\u062F\u064A\u062F\u0629 ")
                    ]),
                    _: 1
                  }),
                  __props.selected && __props.selected.length ? (openBlock(), createBlock(_component_v_table, {
                    key: 0,
                    class: "text-center w-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", {
                            style: { "background-color": "#f3f3f3 !important" },
                            class: "text-center font-weight-bold"
                          }, " \u062A\u0627\u0631\u064A\u062E "),
                          createVNode("th", {
                            style: { "background-color": "#f3f3f3 !important" },
                            class: "text-center font-weight-bold"
                          }, " \u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629 "),
                          createVNode("th", {
                            style: { "background-color": "#f3f3f3 !important" },
                            class: "text-center font-weight-bold"
                          }, " \u062D\u0627\u0644\u0629 \u0627\u0644\u062F\u0641\u0639 ")
                        ])
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.selected, (item, i) => {
                        return openBlock(), createBlock("tbody", {
                          key: item.id
                        }, [
                          createVNode("tr", null, [
                            createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.date), 1),
                            createVNode("td", { style: { "font-size": "15px" } }, toDisplayString(item.remaining), 1),
                            createVNode("td", { style: { "font-size": "15px" } }, [
                              item.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                key: 0,
                                color: "green"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0645\u0643\u062A\u0645\u0644")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              !item.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                key: 1,
                                color: "red"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ])
                          ])
                        ]);
                      }), 128)),
                      createVNode("tfoot", null, [
                        createVNode("tr", { class: "pt-5" }, [
                          createVNode("td", { style: { "font-weight": "bold", "font-size": "18px" } }, "\u0627\u0644\u0627\u062C\u0645\u0627\u0644\u064A"),
                          createVNode("td", { style: { "font-weight": "bold", "font-size": "18px" } }, toDisplayString(unref(totalDues)), 1),
                          createVNode("td")
                        ]),
                        createVNode("tr", { style: { "background-color": "white !important" } }, [
                          createVNode("td"),
                          createVNode("td", null, [
                            createVNode("div", { class: "field_container pt-5" }, [
                              createVNode("div", { class: "input_parent" }, [
                                withDirectives(createVNode("input", {
                                  class: [
                                    "px-0 text-center",
                                    unref($v).$errors.find((el) => el.$property == "paymentAmount") ? "err_field" : ""
                                  ],
                                  style: { "width": "100%" },
                                  placeholder: "\u0642\u0645 \u0628\u0627\u062F\u062E\u0627\u0644 \u0645\u0628\u0644\u063A \u0627\u0644\u0633\u062F\u0627\u062F",
                                  type: "text",
                                  "onUpdate:modelValue": ($event) => unref(data).paymentAmount = $event
                                }, null, 10, ["onUpdate:modelValue"]), [
                                  [vModelText, unref(data).paymentAmount]
                                ])
                              ]),
                              unref($v).$errors.find((el) => el.$property == "paymentAmount") ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "err_msg pt-2 d-block mb-0 pb-0"
                              }, toDisplayString(unref($v).$errors.find((el) => el.$property == "paymentAmount").$message), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("td")
                        ])
                      ])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode("div", { class: "actions text-center mt-5" }, [
                    createVNode(_component_v_btn, {
                      color: "red",
                      class: "mr-3",
                      onClick: ($event) => dialog.value = false,
                      width: "100",
                      disabled: unref(btnLoading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"]),
                    createVNode(_component_v_btn, {
                      color: "green",
                      onClick: submitData,
                      loading: unref(btnLoading),
                      width: "100"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u062F\u0641\u0639")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/clients/payments/PayNow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Invoices",
  __ssrInlineRender: true,
  props: ["invoices", "loading", "suppliers", "granaries"],
  emits: ["regetItems", "filterData"],
  setup(__props, { emit: emits }) {
    const page = ref(1);
    const perPage = ref(10);
    const headers = ref([
      { title: "\u0631\u0642\u0645", key: "index" },
      { title: "\u0627\u0644\u062A\u0627\u0631\u064A\u062E", key: "date" },
      { title: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0643\u0645\u064A\u0629", key: "totalQuantitySupplied" },
      { title: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0642\u064A\u0645\u0629", key: "totalCompanyDues" },
      { title: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0629", key: "paied" },
      { title: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629", key: "remaining" },
      { title: "\u062D\u0627\u0644\u0629 \u0627\u0644\u062F\u0641\u0639", key: "isFullPayed" }
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
        title: "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0629",
        disabled: true
      }
    ];
    const selected = ref([]);
    const openPopup = ref(false);
    const reFilter = ref(false);
    const selectedGranary = ref("");
    const selectedClient = ref("");
    const fromDate = ref("");
    const toDate = ref("");
    const getData = (event) => {
      selectedGranary.value = event.granaryId;
      selectedClient.value = event.clientID;
      fromDate.value = event.FromDate;
      toDate.value = event.ToDate;
      selected.value = [];
      emits("filterData", {
        ...event,
        limit: perPage.value,
        page: page.value
      });
    };
    watch(
      () => page.value,
      (newVal) => {
        emits("filterData", {
          FromDate: fromDate.value,
          ToDate: toDate.value,
          clientID: selectedClient.value,
          granaryId: selectedGranary.value,
          page: newVal,
          limit: perPage.value
        });
      }
    );
    watch(
      () => perPage.value,
      (newVal) => {
        emits("filterData", {
          FromDate: fromDate.value,
          ToDate: toDate.value,
          clientID: selectedClient.value,
          granaryId: selectedGranary.value,
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
      const _component_ClientsPaymentsFilter = __nuxt_component_0$1;
      const _component_v_chip = resolveComponent("v-chip");
      const _component_ClientsPaymentsPayNow = __nuxt_component_1;
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
                          _push4(ssrRenderComponent(_component_ClientsPaymentsFilter, {
                            class: "mb-7",
                            loading: __props.loading,
                            onFilterData: getData,
                            reFilter: unref(reFilter),
                            onRefiltered: ($event) => (reFilter.value = false, selected.value = [])
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ClientsPaymentsFilter, {
                              class: "mb-7",
                              loading: __props.loading,
                              onFilterData: getData,
                              reFilter: unref(reFilter),
                              onRefiltered: ($event) => (reFilter.value = false, selected.value = [])
                            }, null, 8, ["loading", "reFilter", "onRefiltered"])
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
                            modelValue: unref(selected),
                            "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                            page: unref(page),
                            "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                            "items-length": __props.invoices.totalElements ? __props.invoices.totalElements : 0,
                            "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                            "show-current-page": "",
                            id: "clients_payments",
                            "return-object": "",
                            "show-select": __props.invoices.content && __props.invoices.content.length ? true : false
                          }, {
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
                            "item.totalCompanyDues": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p${_scopeId4}>${ssrInterpolate(Number(item.selectable.totalCompanyDues).toFixed(2))}</p>`);
                              } else {
                                return [
                                  createVNode("p", null, toDisplayString(Number(item.selectable.totalCompanyDues).toFixed(2)), 1)
                                ];
                              }
                            }),
                            "item.paied": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p${_scopeId4}>${ssrInterpolate(Number(item.selectable.paied).toFixed(2))}</p>`);
                              } else {
                                return [
                                  createVNode("p", null, toDisplayString(Number(item.selectable.paied).toFixed(2)), 1)
                                ];
                              }
                            }),
                            "item.remaining": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p${_scopeId4}>${ssrInterpolate(Number(item.selectable.remaining).toFixed(2))}</p>`);
                              } else {
                                return [
                                  createVNode("p", null, toDisplayString(Number(item.selectable.remaining).toFixed(2)), 1)
                                ];
                              }
                            }),
                            "item.isFullPayed": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (item.selectable.isFullPayed) {
                                  _push5(ssrRenderComponent(_component_v_chip, {
                                    color: "green",
                                    label: ""
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`\u0645\u0643\u062A\u0645\u0644`);
                                      } else {
                                        return [
                                          createTextVNode("\u0645\u0643\u062A\u0645\u0644")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (!item.selectable.isFullPayed) {
                                  _push5(ssrRenderComponent(_component_v_chip, {
                                    color: "red",
                                    label: ""
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644`);
                                      } else {
                                        return [
                                          createTextVNode("\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  item.selectable.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                    key: 0,
                                    color: "green",
                                    label: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0645\u0643\u062A\u0645\u0644")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  !item.selectable.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                    key: 1,
                                    color: "red",
                                    label: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
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
                          if (unref(selected).length) {
                            _push4(`<div class="text-end my-5 me-5"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_btn, {
                              color: "green",
                              onClick: ($event) => openPopup.value = true
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`\u062F\u0641\u0639`);
                                } else {
                                  return [
                                    createTextVNode("\u062F\u0641\u0639")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode(unref(VDataTableServer), {
                              headers: unref(headers),
                              items: __props.invoices.content,
                              loading: __props.loading,
                              "items-per-page": unref(perPage),
                              "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                              modelValue: unref(selected),
                              "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                              page: unref(page),
                              "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                              "items-length": __props.invoices.totalElements ? __props.invoices.totalElements : 0,
                              "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                              "show-current-page": "",
                              id: "clients_payments",
                              "return-object": "",
                              "show-select": __props.invoices.content && __props.invoices.content.length ? true : false
                            }, {
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
                              "item.totalCompanyDues": withCtx(({ item }) => [
                                createVNode("p", null, toDisplayString(Number(item.selectable.totalCompanyDues).toFixed(2)), 1)
                              ]),
                              "item.paied": withCtx(({ item }) => [
                                createVNode("p", null, toDisplayString(Number(item.selectable.paied).toFixed(2)), 1)
                              ]),
                              "item.remaining": withCtx(({ item }) => [
                                createVNode("p", null, toDisplayString(Number(item.selectable.remaining).toFixed(2)), 1)
                              ]),
                              "item.isFullPayed": withCtx(({ item }) => [
                                item.selectable.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                  key: 0,
                                  color: "green",
                                  label: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0645\u0643\u062A\u0645\u0644")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                !item.selectable.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                  key: 1,
                                  color: "red",
                                  label: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              "no-data": withCtx(() => [
                                createVNode("div", null, "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")
                              ]),
                              _: 1
                            }, 8, ["headers", "items", "loading", "items-per-page", "onUpdate:itemsPerPage", "modelValue", "onUpdate:modelValue", "page", "onUpdate:page", "items-length", "show-select"]),
                            unref(selected).length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-end my-5 me-5"
                            }, [
                              createVNode(_component_v_btn, {
                                color: "green",
                                onClick: ($event) => openPopup.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u062F\u0641\u0639")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])) : createCommentVNode("", true)
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
                          createVNode(_component_ClientsPaymentsFilter, {
                            class: "mb-7",
                            loading: __props.loading,
                            onFilterData: getData,
                            reFilter: unref(reFilter),
                            onRefiltered: ($event) => (reFilter.value = false, selected.value = [])
                          }, null, 8, ["loading", "reFilter", "onRefiltered"])
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
                            modelValue: unref(selected),
                            "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                            page: unref(page),
                            "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                            "items-length": __props.invoices.totalElements ? __props.invoices.totalElements : 0,
                            "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                            "show-current-page": "",
                            id: "clients_payments",
                            "return-object": "",
                            "show-select": __props.invoices.content && __props.invoices.content.length ? true : false
                          }, {
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
                            "item.totalCompanyDues": withCtx(({ item }) => [
                              createVNode("p", null, toDisplayString(Number(item.selectable.totalCompanyDues).toFixed(2)), 1)
                            ]),
                            "item.paied": withCtx(({ item }) => [
                              createVNode("p", null, toDisplayString(Number(item.selectable.paied).toFixed(2)), 1)
                            ]),
                            "item.remaining": withCtx(({ item }) => [
                              createVNode("p", null, toDisplayString(Number(item.selectable.remaining).toFixed(2)), 1)
                            ]),
                            "item.isFullPayed": withCtx(({ item }) => [
                              item.selectable.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                key: 0,
                                color: "green",
                                label: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0645\u0643\u062A\u0645\u0644")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              !item.selectable.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                                key: 1,
                                color: "red",
                                label: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            "no-data": withCtx(() => [
                              createVNode("div", null, "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")
                            ]),
                            _: 1
                          }, 8, ["headers", "items", "loading", "items-per-page", "onUpdate:itemsPerPage", "modelValue", "onUpdate:modelValue", "page", "onUpdate:page", "items-length", "show-select"]),
                          unref(selected).length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-end my-5 me-5"
                          }, [
                            createVNode(_component_v_btn, {
                              color: "green",
                              onClick: ($event) => openPopup.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u062F\u0641\u0639")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])) : createCommentVNode("", true)
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
                      createVNode(_component_ClientsPaymentsFilter, {
                        class: "mb-7",
                        loading: __props.loading,
                        onFilterData: getData,
                        reFilter: unref(reFilter),
                        onRefiltered: ($event) => (reFilter.value = false, selected.value = [])
                      }, null, 8, ["loading", "reFilter", "onRefiltered"])
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
                        modelValue: unref(selected),
                        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                        page: unref(page),
                        "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                        "items-length": __props.invoices.totalElements ? __props.invoices.totalElements : 0,
                        "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                        "show-current-page": "",
                        id: "clients_payments",
                        "return-object": "",
                        "show-select": __props.invoices.content && __props.invoices.content.length ? true : false
                      }, {
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
                        "item.totalCompanyDues": withCtx(({ item }) => [
                          createVNode("p", null, toDisplayString(Number(item.selectable.totalCompanyDues).toFixed(2)), 1)
                        ]),
                        "item.paied": withCtx(({ item }) => [
                          createVNode("p", null, toDisplayString(Number(item.selectable.paied).toFixed(2)), 1)
                        ]),
                        "item.remaining": withCtx(({ item }) => [
                          createVNode("p", null, toDisplayString(Number(item.selectable.remaining).toFixed(2)), 1)
                        ]),
                        "item.isFullPayed": withCtx(({ item }) => [
                          item.selectable.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                            key: 0,
                            color: "green",
                            label: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0645\u0643\u062A\u0645\u0644")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !item.selectable.isFullPayed ? (openBlock(), createBlock(_component_v_chip, {
                            key: 1,
                            color: "red",
                            label: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        "no-data": withCtx(() => [
                          createVNode("div", null, "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")
                        ]),
                        _: 1
                      }, 8, ["headers", "items", "loading", "items-per-page", "onUpdate:itemsPerPage", "modelValue", "onUpdate:modelValue", "page", "onUpdate:page", "items-length", "show-select"]),
                      unref(selected).length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-end my-5 me-5"
                      }, [
                        createVNode(_component_v_btn, {
                          color: "green",
                          onClick: ($event) => openPopup.value = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u062F\u0641\u0639")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])) : createCommentVNode("", true)
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
      if (unref(openPopup)) {
        _push(ssrRenderComponent(_component_ClientsPaymentsPayNow, {
          openPopup: unref(openPopup),
          onClosePopup: ($event) => openPopup.value = false,
          selected: unref(selected),
          onRegetData: ($event) => reFilter.value = true,
          selectedGranary: unref(selectedGranary)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/clients/payments/Invoices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const clientModule = clientStore();
    const supplierModule = supplierStore();
    const granaryModule = granaryStore();
    const { clientInvoices } = storeToRefs(clientModule);
    const { granaries } = storeToRefs(granaryModule);
    const { suppliers } = storeToRefs(supplierModule);
    const loading = ref(false);
    const filtersData = ref({
      clientID: null,
      granaryId: null,
      FromDate: null,
      ToDate: null
    });
    const getData = async (filters) => {
      loading.value = true;
      filtersData.value = filters ? filters : {
        clientID: null,
        granaryId: null,
        FromDate: null,
        ToDate: null
      };
      await clientModule.doGetClientInvoices(
        filters.page - 1,
        filters.limit,
        filtersData.value
      );
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientsPaymentsInvoices = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard_clients_payments mb-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientsPaymentsInvoices, {
        invoices: unref(clientInvoices),
        loading: unref(loading),
        granaries: unref(granaries).content,
        suppliers: unref(suppliers).content,
        onRegetItems: ($event) => getData($event.page, $event.limit),
        onFilterData: ($event) => getData($event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clients_dues/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0da3411a.mjs.map
