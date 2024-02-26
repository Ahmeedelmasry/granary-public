import { ref, mergeProps, unref, useSSRContext, watch, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, isRef, openBlock, createBlock, createCommentVNode, withDirectives, vModelText, Fragment, renderList, vModelSelect, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { g as granaryStore } from './granary-ab731415.mjs';
import { c as clientStore } from './clients-4c03e405.mjs';
import { s as storeToRefs } from '../server.mjs';
import useVuelidator from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import { V as VDataTableServer, a as VSkeletonLoader } from './VSkeletonLoader-cab11d2b.mjs';
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

const _sfc_main$2 = {
  __name: "Update",
  __ssrInlineRender: true,
  props: ["openPopup", "toUpdate"],
  emits: ["closePopup", "regetData"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const granaryModule = granaryStore();
    const clientsModule = clientStore();
    const { clients } = storeToRefs(clientsModule);
    const data = ref({
      name: null,
      governorate: null,
      city: null,
      region: null,
      client: null
    });
    const dialog = ref(false);
    const btnLoading = ref(false);
    const roles = ref({
      name: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      governorate: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      city: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      region: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      client: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) }
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
    let $v = useVuelidator(roles, data);
    const submitData = async () => {
      if (props.toUpdate) {
        roles.value.image = {};
        $v = useVuelidator(roles, data);
      }
      const res = await $v.value.$validate();
      if (res) {
        btnLoading.value = true;
        if (props.toUpdate) {
          const result = await granaryModule.doUpdateGranary({
            id: props.toUpdate.selectable.id,
            name: data.value.name,
            governorate: data.value.governorate,
            city: data.value.city,
            region: data.value.region,
            client: {
              id: data.value.client
            }
          });
          if (result) {
            emits("regetData");
            dialog.value = false;
          }
        } else {
          const result = await granaryModule.doAddGranary({
            name: data.value.name,
            governorate: data.value.governorate,
            city: data.value.city,
            region: data.value.region,
            client: {
              id: data.value.client
            }
          });
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
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, {
                    class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                    style: { "font-size": "22px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0635\u0648\u0645\u0639\u0629" : "\u0627\u0636\u0627\u0641\u0629 \u0635\u0648\u0645\u0639\u0629 \u062C\u062F\u064A\u062F\u0629")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0635\u0648\u0645\u0639\u0629" : "\u0627\u0636\u0627\u0641\u0629 \u0635\u0648\u0645\u0639\u0629 \u062C\u062F\u064A\u062F\u0629"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_form, {
                    class: "pa-5",
                    onSubmit: submitData
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
                                          _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629</label><div class="input_parent position-relative"${_scopeId6}><input type="text"${ssrRenderAttr("value", unref(data).name)} placeholder="\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629" name="typeName" id="typeName" class="${ssrRenderClass(
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
                                              createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                withDirectives(createVNode("input", {
                                                  type: "text",
                                                  "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                                  placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
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
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629</label><div class="input_parent position-relative"${_scopeId6}><input type="text"${ssrRenderAttr("value", unref(data).governorate)} placeholder="\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629" name="typeName" id="typeName" class="${ssrRenderClass(
                                            unref($v).$errors.find((el) => el.$property == "governorate") ? "err_field" : ""
                                          )}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-city-variant-outline `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-city-variant-outline ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "governorate")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "governorate").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                withDirectives(createVNode("input", {
                                                  type: "text",
                                                  "onUpdate:modelValue": ($event) => unref(data).governorate = $event,
                                                  placeholder: "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629",
                                                  name: "typeName",
                                                  id: "typeName",
                                                  class: unref($v).$errors.find((el) => el.$property == "governorate") ? "err_field" : ""
                                                }, null, 10, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(data).governorate]
                                                ]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-city-variant-outline ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "governorate") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "governorate").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0627\u0644\u0645\u062F\u064A\u0646\u0629</label><div class="input_parent position-relative"${_scopeId6}><input type="text"${ssrRenderAttr("value", unref(data).city)} placeholder="\u0627\u0644\u0645\u062F\u064A\u0646\u0629" name="typeName" id="typeName" class="${ssrRenderClass(
                                            unref($v).$errors.find((el) => el.$property == "city") ? "err_field" : ""
                                          )}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-city-variant-outline `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-city-variant-outline ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "city")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "city").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                withDirectives(createVNode("input", {
                                                  type: "text",
                                                  "onUpdate:modelValue": ($event) => unref(data).city = $event,
                                                  placeholder: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629",
                                                  name: "typeName",
                                                  id: "typeName",
                                                  class: unref($v).$errors.find((el) => el.$property == "city") ? "err_field" : ""
                                                }, null, 10, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(data).city]
                                                ]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-city-variant-outline ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "city") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "city").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A</label><div class="input_parent position-relative"${_scopeId6}><input type="text"${ssrRenderAttr("value", unref(data).region)} placeholder="\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A" name="typeName" id="typeName" class="${ssrRenderClass(
                                            unref($v).$errors.find((el) => el.$property == "region") ? "err_field" : ""
                                          )}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-city-variant-outline `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-city-variant-outline ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "region")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "region").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                withDirectives(createVNode("input", {
                                                  type: "text",
                                                  "onUpdate:modelValue": ($event) => unref(data).region = $event,
                                                  placeholder: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A",
                                                  name: "typeName",
                                                  id: "typeName",
                                                  class: unref($v).$errors.find((el) => el.$property == "region") ? "err_field" : ""
                                                }, null, 10, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(data).region]
                                                ]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-city-variant-outline ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "region") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "region").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    if (unref(clients).content) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644</label><div class="input_parent position-relative"${_scopeId6}><select name="" id="" class="${ssrRenderClass([
                                              unref($v).$errors.find((el) => el.$property == "client") ? "err_field" : "",
                                              "w-100"
                                            ])}"${_scopeId6}><option value=""${_scopeId6}>\u0642\u0645 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u064A\u0644</option><!--[-->`);
                                            ssrRenderList(unref(clients).content, (item) => {
                                              _push7(`<option${ssrRenderAttr("value", item.id)}${_scopeId6}>${ssrInterpolate(item.name)}</option>`);
                                            });
                                            _push7(`<!--]--></select>`);
                                            _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-account-cowboy-hat-outline `);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-account-cowboy-hat-outline ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                            if (unref($v).$errors.find((el) => el.$property == "client")) {
                                              _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "client").$message)}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode("div", { class: "field_container" }, [
                                                createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                                createVNode("div", { class: "input_parent position-relative" }, [
                                                  withDirectives(createVNode("select", {
                                                    name: "",
                                                    id: "",
                                                    class: [
                                                      "w-100",
                                                      unref($v).$errors.find((el) => el.$property == "client") ? "err_field" : ""
                                                    ],
                                                    "onUpdate:modelValue": ($event) => unref(data).client = $event
                                                  }, [
                                                    createVNode("option", { value: "" }, "\u0642\u0645 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(clients).content, (item) => {
                                                      return openBlock(), createBlock("option", {
                                                        value: item.id,
                                                        key: item.id
                                                      }, toDisplayString(item.name), 9, ["value"]);
                                                    }), 128))
                                                  ], 10, ["onUpdate:modelValue"]), [
                                                    [vModelSelect, unref(data).client]
                                                  ]),
                                                  createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-account-cowboy-hat-outline ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              unref($v).$errors.find((el) => el.$property == "client") ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "err_msg"
                                              }, toDisplayString(unref($v).$errors.find((el) => el.$property == "client").$message), 1)) : createCommentVNode("", true)
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
                                            createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                                placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
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
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                "onUpdate:modelValue": ($event) => unref(data).governorate = $event,
                                                placeholder: "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629",
                                                name: "typeName",
                                                id: "typeName",
                                                class: unref($v).$errors.find((el) => el.$property == "governorate") ? "err_field" : ""
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).governorate]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-city-variant-outline ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "governorate") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "governorate").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                "onUpdate:modelValue": ($event) => unref(data).city = $event,
                                                placeholder: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629",
                                                name: "typeName",
                                                id: "typeName",
                                                class: unref($v).$errors.find((el) => el.$property == "city") ? "err_field" : ""
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).city]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-city-variant-outline ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "city") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "city").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                "onUpdate:modelValue": ($event) => unref(data).region = $event,
                                                placeholder: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A",
                                                name: "typeName",
                                                id: "typeName",
                                                class: unref($v).$errors.find((el) => el.$property == "region") ? "err_field" : ""
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).region]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-city-variant-outline ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "region") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "region").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                        key: 0,
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("select", {
                                                name: "",
                                                id: "",
                                                class: [
                                                  "w-100",
                                                  unref($v).$errors.find((el) => el.$property == "client") ? "err_field" : ""
                                                ],
                                                "onUpdate:modelValue": ($event) => unref(data).client = $event
                                              }, [
                                                createVNode("option", { value: "" }, "\u0642\u0645 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(clients).content, (item) => {
                                                  return openBlock(), createBlock("option", {
                                                    value: item.id,
                                                    key: item.id
                                                  }, toDisplayString(item.name), 9, ["value"]);
                                                }), 128))
                                              ], 10, ["onUpdate:modelValue"]), [
                                                [vModelSelect, unref(data).client]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-account-cowboy-hat-outline ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "client") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "client").$message), 1)) : createCommentVNode("", true)
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
                                          createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                              placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
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
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              "onUpdate:modelValue": ($event) => unref(data).governorate = $event,
                                              placeholder: "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629",
                                              name: "typeName",
                                              id: "typeName",
                                              class: unref($v).$errors.find((el) => el.$property == "governorate") ? "err_field" : ""
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).governorate]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-city-variant-outline ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "governorate") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "governorate").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              "onUpdate:modelValue": ($event) => unref(data).city = $event,
                                              placeholder: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629",
                                              name: "typeName",
                                              id: "typeName",
                                              class: unref($v).$errors.find((el) => el.$property == "city") ? "err_field" : ""
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).city]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-city-variant-outline ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "city") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "city").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              "onUpdate:modelValue": ($event) => unref(data).region = $event,
                                              placeholder: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A",
                                              name: "typeName",
                                              id: "typeName",
                                              class: unref($v).$errors.find((el) => el.$property == "region") ? "err_field" : ""
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).region]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-city-variant-outline ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "region") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "region").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                      key: 0,
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("select", {
                                              name: "",
                                              id: "",
                                              class: [
                                                "w-100",
                                                unref($v).$errors.find((el) => el.$property == "client") ? "err_field" : ""
                                              ],
                                              "onUpdate:modelValue": ($event) => unref(data).client = $event
                                            }, [
                                              createVNode("option", { value: "" }, "\u0642\u0645 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(clients).content, (item) => {
                                                return openBlock(), createBlock("option", {
                                                  value: item.id,
                                                  key: item.id
                                                }, toDisplayString(item.name), 9, ["value"]);
                                              }), 128))
                                            ], 10, ["onUpdate:modelValue"]), [
                                              [vModelSelect, unref(data).client]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-account-cowboy-hat-outline ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "client") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "client").$message), 1)) : createCommentVNode("", true)
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
                        _push4(`<div class="actions text-center mt-5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "red",
                          class: "mr-3",
                          onClick: ($event) => dialog.value = false,
                          disabled: unref(btnLoading)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0627\u0644\u063A\u0627\u0621`);
                            } else {
                              return [
                                createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "green",
                          type: "submit",
                          loading: unref(btnLoading)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u062D\u0641\u0638`);
                            } else {
                              return [
                                createTextVNode("\u062D\u0641\u0638")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
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
                                        createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                            placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
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
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            "onUpdate:modelValue": ($event) => unref(data).governorate = $event,
                                            placeholder: "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629",
                                            name: "typeName",
                                            id: "typeName",
                                            class: unref($v).$errors.find((el) => el.$property == "governorate") ? "err_field" : ""
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).governorate]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-city-variant-outline ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "governorate") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "governorate").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            "onUpdate:modelValue": ($event) => unref(data).city = $event,
                                            placeholder: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629",
                                            name: "typeName",
                                            id: "typeName",
                                            class: unref($v).$errors.find((el) => el.$property == "city") ? "err_field" : ""
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).city]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-city-variant-outline ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "city") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "city").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            "onUpdate:modelValue": ($event) => unref(data).region = $event,
                                            placeholder: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A",
                                            name: "typeName",
                                            id: "typeName",
                                            class: unref($v).$errors.find((el) => el.$property == "region") ? "err_field" : ""
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).region]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-city-variant-outline ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "region") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "region").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                    key: 0,
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("select", {
                                            name: "",
                                            id: "",
                                            class: [
                                              "w-100",
                                              unref($v).$errors.find((el) => el.$property == "client") ? "err_field" : ""
                                            ],
                                            "onUpdate:modelValue": ($event) => unref(data).client = $event
                                          }, [
                                            createVNode("option", { value: "" }, "\u0642\u0645 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(clients).content, (item) => {
                                              return openBlock(), createBlock("option", {
                                                value: item.id,
                                                key: item.id
                                              }, toDisplayString(item.name), 9, ["value"]);
                                            }), 128))
                                          ], 10, ["onUpdate:modelValue"]), [
                                            [vModelSelect, unref(data).client]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-account-cowboy-hat-outline ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "client") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "client").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card_title, {
                      class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                      style: { "font-size": "22px" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0635\u0648\u0645\u0639\u0629" : "\u0627\u0636\u0627\u0641\u0629 \u0635\u0648\u0645\u0639\u0629 \u062C\u062F\u064A\u062F\u0629"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_form, {
                      class: "pa-5",
                      onSubmit: withModifiers(submitData, ["prevent"])
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
                                      createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                          placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
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
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => unref(data).governorate = $event,
                                          placeholder: "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629",
                                          name: "typeName",
                                          id: "typeName",
                                          class: unref($v).$errors.find((el) => el.$property == "governorate") ? "err_field" : ""
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).governorate]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-city-variant-outline ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "governorate") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "governorate").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => unref(data).city = $event,
                                          placeholder: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629",
                                          name: "typeName",
                                          id: "typeName",
                                          class: unref($v).$errors.find((el) => el.$property == "city") ? "err_field" : ""
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).city]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-city-variant-outline ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "city") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "city").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => unref(data).region = $event,
                                          placeholder: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A",
                                          name: "typeName",
                                          id: "typeName",
                                          class: unref($v).$errors.find((el) => el.$property == "region") ? "err_field" : ""
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).region]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-city-variant-outline ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "region") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "region").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                  key: 0,
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("select", {
                                          name: "",
                                          id: "",
                                          class: [
                                            "w-100",
                                            unref($v).$errors.find((el) => el.$property == "client") ? "err_field" : ""
                                          ],
                                          "onUpdate:modelValue": ($event) => unref(data).client = $event
                                        }, [
                                          createVNode("option", { value: "" }, "\u0642\u0645 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(clients).content, (item) => {
                                            return openBlock(), createBlock("option", {
                                              value: item.id,
                                              key: item.id
                                            }, toDisplayString(item.name), 9, ["value"]);
                                          }), 128))
                                        ], 10, ["onUpdate:modelValue"]), [
                                          [vModelSelect, unref(data).client]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-account-cowboy-hat-outline ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "client") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "client").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
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
                    }, 8, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, {
                    class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                    style: { "font-size": "22px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0635\u0648\u0645\u0639\u0629" : "\u0627\u0636\u0627\u0641\u0629 \u0635\u0648\u0645\u0639\u0629 \u062C\u062F\u064A\u062F\u0629"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_form, {
                    class: "pa-5",
                    onSubmit: withModifiers(submitData, ["prevent"])
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
                                    createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                        placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
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
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => unref(data).governorate = $event,
                                        placeholder: "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629",
                                        name: "typeName",
                                        id: "typeName",
                                        class: unref($v).$errors.find((el) => el.$property == "governorate") ? "err_field" : ""
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).governorate]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-city-variant-outline ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "governorate") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "governorate").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => unref(data).city = $event,
                                        placeholder: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629",
                                        name: "typeName",
                                        id: "typeName",
                                        class: unref($v).$errors.find((el) => el.$property == "city") ? "err_field" : ""
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).city]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-city-variant-outline ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "city") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "city").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => unref(data).region = $event,
                                        placeholder: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A",
                                        name: "typeName",
                                        id: "typeName",
                                        class: unref($v).$errors.find((el) => el.$property == "region") ? "err_field" : ""
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).region]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-city-variant-outline ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "region") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "region").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                key: 0,
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("select", {
                                        name: "",
                                        id: "",
                                        class: [
                                          "w-100",
                                          unref($v).$errors.find((el) => el.$property == "client") ? "err_field" : ""
                                        ],
                                        "onUpdate:modelValue": ($event) => unref(data).client = $event
                                      }, [
                                        createVNode("option", { value: "" }, "\u0642\u0645 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u064A\u0644"),
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(clients).content, (item) => {
                                          return openBlock(), createBlock("option", {
                                            value: item.id,
                                            key: item.id
                                          }, toDisplayString(item.name), 9, ["value"]);
                                        }), 128))
                                      ], 10, ["onUpdate:modelValue"]), [
                                        [vModelSelect, unref(data).client]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account-cowboy-hat-outline ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "client") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "client").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
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
                  }, 8, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/granary/Update.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Listing",
  __ssrInlineRender: true,
  props: ["granaries", "loading"],
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
      { title: "\u0631\u0642\u0645", key: "index" },
      { title: "\u0627\u0633\u0645 \u0627\u0644\u0635\u0648\u0645\u0639\u0629", key: "name" },
      { title: "\u0627\u0644\u0639\u0645\u064A\u0644", key: "client.name" },
      { title: "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629", key: "governorate" },
      { title: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629", key: "city" },
      { title: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 / \u0627\u0644\u062D\u064A", key: "region" },
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
        title: "\u0627\u0644\u0635\u0648\u0627\u0645\u0639",
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
      const _component_granary_update = __nuxt_component_0$1;
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
            if (__props.granaries) {
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
                            items: __props.granaries.content,
                            loading: __props.loading,
                            "items-per-page": unref(perPage),
                            "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                            page: unref(page),
                            "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                            "items-length": __props.granaries.totalElements ? __props.granaries.totalElements : 0,
                            "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                            "show-current-page": ""
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
                              items: __props.granaries.content,
                              loading: __props.loading,
                              "items-per-page": unref(perPage),
                              "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                              page: unref(page),
                              "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                              "items-length": __props.granaries.totalElements ? __props.granaries.totalElements : 0,
                              "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                              "show-current-page": ""
                            }, {
                              loading: withCtx(() => [
                                createVNode(unref(VSkeletonLoader), { type: "table-row@4" })
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
                            items: __props.granaries.content,
                            loading: __props.loading,
                            "items-per-page": unref(perPage),
                            "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                            page: unref(page),
                            "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                            "items-length": __props.granaries.totalElements ? __props.granaries.totalElements : 0,
                            "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                            "show-current-page": ""
                          }, {
                            loading: withCtx(() => [
                              createVNode(unref(VSkeletonLoader), { type: "table-row@4" })
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
              __props.granaries ? (openBlock(), createBlock(_component_v_row, {
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
                        items: __props.granaries.content,
                        loading: __props.loading,
                        "items-per-page": unref(perPage),
                        "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                        page: unref(page),
                        "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                        "items-length": __props.granaries.totalElements ? __props.granaries.totalElements : 0,
                        "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                        "show-current-page": ""
                      }, {
                        loading: withCtx(() => [
                          createVNode(unref(VSkeletonLoader), { type: "table-row@4" })
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
        _push(ssrRenderComponent(_component_granary_update, {
          openPopup: unref(openUpdate),
          onClosePopup: ($event) => (openUpdate.value = false, toUpdate.value = null),
          toUpdate: unref(toUpdate),
          onRegetData: ($event) => (page.value = 1, emits("regetItems", {
            page: 1,
            limit: unref(perPage)
          }))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(openAdd)) {
        _push(ssrRenderComponent(_component_granary_update, {
          openPopup: unref(openAdd),
          onClosePopup: ($event) => openAdd.value = false,
          onRegetData: ($event) => emits("regetItems", {
            page: 1,
            limit: unref(perPage)
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/granary/Listing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const granaryModule = granaryStore();
    const { granaries } = storeToRefs(granaryModule);
    const loading = ref(true);
    const getData = async (page, limit) => {
      loading.value = true;
      await granaryModule.doGetGranaries(page - 1, limit);
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GranaryListing = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard_tests_page mb-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_GranaryListing, {
        granaries: unref(granaries),
        loading: unref(loading),
        onRegetItems: ($event) => getData($event.page, $event.limit)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/granary/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-79c9c3a4.mjs.map
