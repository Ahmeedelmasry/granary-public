import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useRouter$1, R as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import 'cookie-es';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'mitt';
import 'axios';

const _imports_0 = "" + publicAssetsURL("shortcuts/money-bag.png");
const _imports_1 = "" + publicAssetsURL("shortcuts/money.png");
const _imports_2 = "" + publicAssetsURL("shortcuts/invoice.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter$1();
    useRoute();
    const localRoutes = ref([]);
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
        disabled: true
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_breadcrumbs = resolveComponent("v-breadcrumbs");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "reports_shortcuts" }, _attrs))}><div class="page_toolbar d-flex align-center justify-space-between"><div class="toolbar_btns">`);
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
        class: "pa-0"
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
      _push(ssrRenderComponent(_component_v_container, { fluid: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "px-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(localRoutes), (route) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "3",
                      key: route.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, {
                            bordered: "",
                            style: { "box-shadow": "rgb(74, 74, 74) 0px 0px 25px -18px !important", "border-radius": "25px", "border": "1px solid rgb(231, 231, 231)" },
                            elevation: "0",
                            class: "text-center py-7",
                            onClick: ($event) => unref(router).push({ name: route.name })
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (route.name.includes("dues")) {
                                  _push5(`<img${ssrRenderAttr("src", _imports_0)} alt="" width="70"${_scopeId4}>`);
                                } else if (route.name.includes("payments")) {
                                  _push5(`<img${ssrRenderAttr("src", _imports_1)} alt="" width="70"${_scopeId4}>`);
                                } else {
                                  _push5(`<img${ssrRenderAttr("src", _imports_2)} alt="" width="70"${_scopeId4}>`);
                                }
                                _push5(ssrRenderComponent(_component_v_card_title, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(route.name.includes("supplier_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : route.name.includes("clients_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621" : route.name.includes("suppliers_payments") ? "\u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : "\u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A")}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(route.name.includes("supplier_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : route.name.includes("clients_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621" : route.name.includes("suppliers_payments") ? "\u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : "\u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A"), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  route.name.includes("dues") ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: _imports_0,
                                    alt: "",
                                    width: "70"
                                  })) : route.name.includes("payments") ? (openBlock(), createBlock("img", {
                                    key: 1,
                                    src: _imports_1,
                                    alt: "",
                                    width: "70"
                                  })) : (openBlock(), createBlock("img", {
                                    key: 2,
                                    src: _imports_2,
                                    alt: "",
                                    width: "70"
                                  })),
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(route.name.includes("supplier_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : route.name.includes("clients_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621" : route.name.includes("suppliers_payments") ? "\u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : "\u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card, {
                              bordered: "",
                              style: { "box-shadow": "rgb(74, 74, 74) 0px 0px 25px -18px !important", "border-radius": "25px", "border": "1px solid rgb(231, 231, 231)" },
                              elevation: "0",
                              class: "text-center py-7",
                              onClick: ($event) => unref(router).push({ name: route.name })
                            }, {
                              default: withCtx(() => [
                                route.name.includes("dues") ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: _imports_0,
                                  alt: "",
                                  width: "70"
                                })) : route.name.includes("payments") ? (openBlock(), createBlock("img", {
                                  key: 1,
                                  src: _imports_1,
                                  alt: "",
                                  width: "70"
                                })) : (openBlock(), createBlock("img", {
                                  key: 2,
                                  src: _imports_2,
                                  alt: "",
                                  width: "70"
                                })),
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(route.name.includes("supplier_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : route.name.includes("clients_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621" : route.name.includes("suppliers_payments") ? "\u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : "\u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A"), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(localRoutes), (route) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "3",
                        key: route.name
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            bordered: "",
                            style: { "box-shadow": "rgb(74, 74, 74) 0px 0px 25px -18px !important", "border-radius": "25px", "border": "1px solid rgb(231, 231, 231)" },
                            elevation: "0",
                            class: "text-center py-7",
                            onClick: ($event) => unref(router).push({ name: route.name })
                          }, {
                            default: withCtx(() => [
                              route.name.includes("dues") ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: _imports_0,
                                alt: "",
                                width: "70"
                              })) : route.name.includes("payments") ? (openBlock(), createBlock("img", {
                                key: 1,
                                src: _imports_1,
                                alt: "",
                                width: "70"
                              })) : (openBlock(), createBlock("img", {
                                key: 2,
                                src: _imports_2,
                                alt: "",
                                width: "70"
                              })),
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(route.name.includes("supplier_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : route.name.includes("clients_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621" : route.name.includes("suppliers_payments") ? "\u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : "\u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A"), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { class: "px-4" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localRoutes), (route) => {
                    return openBlock(), createBlock(_component_v_col, {
                      cols: "3",
                      key: route.name
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          bordered: "",
                          style: { "box-shadow": "rgb(74, 74, 74) 0px 0px 25px -18px !important", "border-radius": "25px", "border": "1px solid rgb(231, 231, 231)" },
                          elevation: "0",
                          class: "text-center py-7",
                          onClick: ($event) => unref(router).push({ name: route.name })
                        }, {
                          default: withCtx(() => [
                            route.name.includes("dues") ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: _imports_0,
                              alt: "",
                              width: "70"
                            })) : route.name.includes("payments") ? (openBlock(), createBlock("img", {
                              key: 1,
                              src: _imports_1,
                              alt: "",
                              width: "70"
                            })) : (openBlock(), createBlock("img", {
                              key: 2,
                              src: _imports_2,
                              alt: "",
                              width: "70"
                            })),
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(route.name.includes("supplier_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : route.name.includes("clients_dues") ? "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621" : route.name.includes("suppliers_payments") ? "\u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646" : "\u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A"), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-373a4f00.mjs.map
