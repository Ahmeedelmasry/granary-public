import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, ref, unref, createTextVNode, withDirectives, vModelText } from 'vue';
import { S as useCookie, u as useRouter$1 } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/firebase.mjs';
import 'node-fetch-native/polyfill';
import 'firebase-functions';
import 'ofetch';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'unctx';
import 'vue-router';
import 'cookie-es';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'mitt';
import 'axios';

const _sfc_main$2 = {
  __name: "Fields",
  __ssrInlineRender: true,
  setup(__props) {
    const logger = useCookie("logger");
    const formData = ref({
      userName: "ahmedelmasry",
      password: "123456"
    });
    const signIn = () => {
      if (formData.value.userName == "ahmedelmasry" && formData.value.password == "123456") {
        logger.value = { name: "Ahmed Elmasry" };
        setTimeout(() => {
          useRouter$1().push({ name: "index" });
        }, 200);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "login_fields w-100",
        style: { "display": "flex", "align-items": "center", "height": "100%" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_form, { class: "w-100" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { dir: "rtl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "ps-7 pe-10"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 style="${ssrRenderStyle({ "font-weight": "900" })}"${_scopeId3}>\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</h2>`);
                      } else {
                        return [
                          createVNode("h2", { style: { "font-weight": "900" } }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "ps-7 pe-10"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="field_container"${_scopeId3}><label for="userName"${_scopeId3}>\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645</label><div class="input_parent position-relative"${_scopeId3}><input type="text" placeholder="\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" name="userName" id="userName"${ssrRenderAttr("value", unref(formData).userName)} class="w-100" style="${ssrRenderStyle({ "padding-top": "12px", "padding-bottom": "12px" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-rename-outline`);
                            } else {
                              return [
                                createTextVNode("mdi-rename-outline")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "field_container" }, [
                            createVNode("label", { for: "userName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"),
                            createVNode("div", { class: "input_parent position-relative" }, [
                              withDirectives(createVNode("input", {
                                type: "text",
                                placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
                                name: "userName",
                                id: "userName",
                                "onUpdate:modelValue": ($event) => unref(formData).userName = $event,
                                class: "w-100",
                                style: { "padding-top": "12px", "padding-bottom": "12px" }
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(formData).userName]
                              ]),
                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-rename-outline")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "ps-7 pe-10"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="field_container"${_scopeId3}><label for="userPass"${_scopeId3}>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</label><div class="input_parent position-relative"${_scopeId3}><input placeholder="\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" name="userPass" id="userPass" class="w-100" type="password"${ssrRenderAttr("value", unref(formData).password)} style="${ssrRenderStyle({ "padding-top": "12px", "padding-bottom": "12px" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-lock-outline`);
                            } else {
                              return [
                                createTextVNode("mdi-lock-outline")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "field_container" }, [
                            createVNode("label", { for: "userPass" }, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"),
                            createVNode("div", { class: "input_parent position-relative" }, [
                              withDirectives(createVNode("input", {
                                placeholder: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
                                name: "userPass",
                                id: "userPass",
                                class: "w-100",
                                type: "password",
                                "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                style: { "padding-top": "12px", "padding-bottom": "12px" }
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(formData).password]
                              ]),
                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-lock-outline")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "ps-7 pe-10"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          width: "100%",
                          color: "orange-darken-3",
                          height: "45",
                          onClick: signIn
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644`);
                            } else {
                              return [
                                createTextVNode("\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            width: "100%",
                            color: "orange-darken-3",
                            height: "45",
                            onClick: signIn
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      class: "ps-7 pe-10"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { style: { "font-weight": "900" } }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      class: "ps-7 pe-10"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "field_container" }, [
                          createVNode("label", { for: "userName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"),
                          createVNode("div", { class: "input_parent position-relative" }, [
                            withDirectives(createVNode("input", {
                              type: "text",
                              placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
                              name: "userName",
                              id: "userName",
                              "onUpdate:modelValue": ($event) => unref(formData).userName = $event,
                              class: "w-100",
                              style: { "padding-top": "12px", "padding-bottom": "12px" }
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(formData).userName]
                            ]),
                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-rename-outline")
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
                      class: "ps-7 pe-10"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "field_container" }, [
                          createVNode("label", { for: "userPass" }, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"),
                          createVNode("div", { class: "input_parent position-relative" }, [
                            withDirectives(createVNode("input", {
                              placeholder: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
                              name: "userPass",
                              id: "userPass",
                              class: "w-100",
                              type: "password",
                              "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                              style: { "padding-top": "12px", "padding-bottom": "12px" }
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(formData).password]
                            ]),
                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-lock-outline")
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
                      class: "ps-7 pe-10"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          width: "100%",
                          color: "orange-darken-3",
                          height: "45",
                          onClick: signIn
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { dir: "rtl" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "ps-7 pe-10"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { style: { "font-weight": "900" } }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "ps-7 pe-10"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "field_container" }, [
                        createVNode("label", { for: "userName" }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"),
                        createVNode("div", { class: "input_parent position-relative" }, [
                          withDirectives(createVNode("input", {
                            type: "text",
                            placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
                            name: "userName",
                            id: "userName",
                            "onUpdate:modelValue": ($event) => unref(formData).userName = $event,
                            class: "w-100",
                            style: { "padding-top": "12px", "padding-bottom": "12px" }
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(formData).userName]
                          ]),
                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-rename-outline")
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
                    class: "ps-7 pe-10"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "field_container" }, [
                        createVNode("label", { for: "userPass" }, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"),
                        createVNode("div", { class: "input_parent position-relative" }, [
                          withDirectives(createVNode("input", {
                            placeholder: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
                            name: "userPass",
                            id: "userPass",
                            class: "w-100",
                            type: "password",
                            "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                            style: { "padding-top": "12px", "padding-bottom": "12px" }
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(formData).password]
                          ]),
                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-lock-outline")
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
                    class: "ps-7 pe-10"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        width: "100%",
                        color: "orange-darken-3",
                        height: "45",
                        onClick: signIn
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644")
                        ]),
                        _: 1
                      })
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
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/signin/Fields.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _imports_0 = "" + buildAssetsURL("company-img.593acc50.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sign_in" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} class="w-100" alt="" style="${ssrRenderStyle({ "max-height": "90vh" })}"></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/signin/img.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_SigninFields = __nuxt_component_0;
  const _component_SigninImg = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sign_in_page pa-0 my-5 pt-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_container, {
    style: { "box-shadow": "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem", "border-radius": "10px", "overflow": "hidden" },
    class: "py-0"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, { class: "pa-0" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_SigninFields, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_SigninFields)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "6",
                class: "pa-0 pe-0 pb-0 d-none d-md-block"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_SigninImg, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_SigninImg)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_SigninFields)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "6",
                  class: "pa-0 pe-0 pb-0 d-none d-md-block"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_SigninImg)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, { class: "pa-0" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_SigninFields)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "6",
                class: "pa-0 pe-0 pb-0 d-none d-md-block"
              }, {
                default: withCtx(() => [
                  createVNode(_component_SigninImg)
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
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-fed15f04.mjs.map
