import { u as useRouter$1, S as useCookie, T as useNuxtApp } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './AppSideDrawer-6f452c96.mjs';
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
import '../../nitro/firebase.mjs';
import 'node-fetch-native/polyfill';
import 'firebase-functions';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';

const _sfc_main = {
  __name: "DashboardNav",
  __ssrInlineRender: true,
  props: ["currentWidth"],
  setup(__props) {
    const props = __props;
    const router = useRouter$1();
    const { $event } = useNuxtApp();
    const openDrawer = () => {
      $event("openDashboardDrawer");
    };
    const logout = () => {
      useCookie("logger").value = void 0;
      setTimeout(() => {
      }, router.push({ name: "signin" }));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "res_nav" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        currentWidth: props.currentWidth
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_app_bar, {
        elevation: "1",
        color: "grey-darken-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, { fluid: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, {
                    class: "align-center",
                    dir: "rtl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "3",
                          class: "d-flex align-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_app_bar_nav_icon, { onClick: openDrawer }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_app_bar_nav_icon, { onClick: openDrawer })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_spacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "6",
                          class: "text-center img_container text-end"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, {
                                color: "white",
                                size: "25",
                                class: "me-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-bell`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-bell")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                id: "profile_menu_activator_responsive",
                                style: { "cursor": "pointer" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, {
                                      color: "white",
                                      size: "30"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-account-circle`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-account-circle")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, {
                                        color: "white",
                                        size: "30"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account-circle")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_menu, {
                                activator: "#profile_menu_activator_responsive",
                                transition: "slide-y-transition",
                                location: "bottom right",
                                offset: "12",
                                class: "profile_menu text-start",
                                width: "200"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, {
                                      "base-color": "green",
                                      style: { "box-shadow": "0 0 20px 0 rgba(62, 28, 131, 0.1)" },
                                      class: "text-end",
                                      id: "profile_menu"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_item, { class: "top_bar" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` \u0645\u0631\u062D\u0628\u0627, \u0627\u062D\u0645\u062F `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" \u0645\u0631\u062D\u0628\u0627, \u0627\u062D\u0645\u062F ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0645\u0631\u062D\u0628\u0627, \u0627\u062D\u0645\u062F ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 `);
                                                      _push9(ssrRenderComponent(_component_v_icon, { class: "me-2" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`mdi-card-account-details-outline`);
                                                          } else {
                                                            return [
                                                              createTextVNode("mdi-card-account-details-outline")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createTextVNode(" \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 "),
                                                        createVNode(_component_v_icon, { class: "me-2" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-card-account-details-outline")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 "),
                                                      createVNode(_component_v_icon, { class: "me-2" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-card-account-details-outline")
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, { onClick: logout }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` \u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C `);
                                                      _push9(ssrRenderComponent(_component_v_icon, { class: "me-2" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`mdi-logout-variant`);
                                                          } else {
                                                            return [
                                                              createTextVNode("mdi-logout-variant")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createTextVNode(" \u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C "),
                                                        createVNode(_component_v_icon, { class: "me-2" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-logout-variant")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C "),
                                                      createVNode(_component_v_icon, { class: "me-2" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-logout-variant")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_list_item, { class: "top_bar" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u0645\u0631\u062D\u0628\u0627, \u0627\u062D\u0645\u062F ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 "),
                                                    createVNode(_component_v_icon, { class: "me-2" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-card-account-details-outline")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, { onClick: logout }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C "),
                                                    createVNode(_component_v_icon, { class: "me-2" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-logout-variant")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, {
                                        "base-color": "green",
                                        style: { "box-shadow": "0 0 20px 0 rgba(62, 28, 131, 0.1)" },
                                        class: "text-end",
                                        id: "profile_menu"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, { class: "top_bar" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0645\u0631\u062D\u0628\u0627, \u0627\u062D\u0645\u062F ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 "),
                                                  createVNode(_component_v_icon, { class: "me-2" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-card-account-details-outline")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, { onClick: logout }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C "),
                                                  createVNode(_component_v_icon, { class: "me-2" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-logout-variant")
                                                    ]),
                                                    _: 1
                                                  })
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, {
                                  color: "white",
                                  size: "25",
                                  class: "me-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-bell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_avatar, {
                                  id: "profile_menu_activator_responsive",
                                  style: { "cursor": "pointer" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      color: "white",
                                      size: "30"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-account-circle")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_menu, {
                                  activator: "#profile_menu_activator_responsive",
                                  transition: "slide-y-transition",
                                  location: "bottom right",
                                  offset: "12",
                                  class: "profile_menu text-start",
                                  width: "200"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, {
                                      "base-color": "green",
                                      style: { "box-shadow": "0 0 20px 0 rgba(62, 28, 131, 0.1)" },
                                      class: "text-end",
                                      id: "profile_menu"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, { class: "top_bar" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0645\u0631\u062D\u0628\u0627, \u0627\u062D\u0645\u062F ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 "),
                                                createVNode(_component_v_icon, { class: "me-2" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-card-account-details-outline")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, { onClick: logout }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C "),
                                                createVNode(_component_v_icon, { class: "me-2" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-logout-variant")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "3",
                            class: "d-flex align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_app_bar_nav_icon, { onClick: openDrawer })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_col, {
                            cols: "6",
                            class: "text-center img_container text-end"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                color: "white",
                                size: "25",
                                class: "me-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-bell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_avatar, {
                                id: "profile_menu_activator_responsive",
                                style: { "cursor": "pointer" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    color: "white",
                                    size: "30"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-account-circle")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_menu, {
                                activator: "#profile_menu_activator_responsive",
                                transition: "slide-y-transition",
                                location: "bottom right",
                                offset: "12",
                                class: "profile_menu text-start",
                                width: "200"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, {
                                    "base-color": "green",
                                    style: { "box-shadow": "0 0 20px 0 rgba(62, 28, 131, 0.1)" },
                                    class: "text-end",
                                    id: "profile_menu"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, { class: "top_bar" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0645\u0631\u062D\u0628\u0627, \u0627\u062D\u0645\u062F ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 "),
                                              createVNode(_component_v_icon, { class: "me-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-card-account-details-outline")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, { onClick: logout }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C "),
                                              createVNode(_component_v_icon, { class: "me-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-logout-variant")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, {
                      class: "align-center",
                      dir: "rtl"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "3",
                          class: "d-flex align-center"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_app_bar_nav_icon, { onClick: openDrawer })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_col, {
                          cols: "6",
                          class: "text-center img_container text-end"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              color: "white",
                              size: "25",
                              class: "me-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-bell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_avatar, {
                              id: "profile_menu_activator_responsive",
                              style: { "cursor": "pointer" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  color: "white",
                                  size: "30"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account-circle")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_menu, {
                              activator: "#profile_menu_activator_responsive",
                              transition: "slide-y-transition",
                              location: "bottom right",
                              offset: "12",
                              class: "profile_menu text-start",
                              width: "200"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, {
                                  "base-color": "green",
                                  style: { "box-shadow": "0 0 20px 0 rgba(62, 28, 131, 0.1)" },
                                  class: "text-end",
                                  id: "profile_menu"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, { class: "top_bar" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0645\u0631\u062D\u0628\u0627, \u0627\u062D\u0645\u062F ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 "),
                                            createVNode(_component_v_icon, { class: "me-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-card-account-details-outline")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, { onClick: logout }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C "),
                                            createVNode(_component_v_icon, { class: "me-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-logout-variant")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_container, { fluid: "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, {
                    class: "align-center",
                    dir: "rtl"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "3",
                        class: "d-flex align-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_app_bar_nav_icon, { onClick: openDrawer })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_col, {
                        cols: "6",
                        class: "text-center img_container text-end"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            color: "white",
                            size: "25",
                            class: "me-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-bell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_avatar, {
                            id: "profile_menu_activator_responsive",
                            style: { "cursor": "pointer" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                color: "white",
                                size: "30"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account-circle")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_menu, {
                            activator: "#profile_menu_activator_responsive",
                            transition: "slide-y-transition",
                            location: "bottom right",
                            offset: "12",
                            class: "profile_menu text-start",
                            width: "200"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, {
                                "base-color": "green",
                                style: { "box-shadow": "0 0 20px 0 rgba(62, 28, 131, 0.1)" },
                                class: "text-end",
                                id: "profile_menu"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, { class: "top_bar" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0645\u0631\u062D\u0628\u0627, \u0627\u062D\u0645\u062F ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 "),
                                          createVNode(_component_v_icon, { class: "me-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-card-account-details-outline")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, { onClick: logout }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C "),
                                          createVNode(_component_v_icon, { class: "me-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-logout-variant")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/DashboardNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DashboardNav-2e3a9449.mjs.map
