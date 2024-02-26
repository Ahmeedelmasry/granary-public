import { ref, watch, resolveComponent, mergeProps, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = {
  __name: "AppSideDrawer",
  __ssrInlineRender: true,
  props: ["currentWidth"],
  setup(__props) {
    const props = __props;
    const drawer = ref(false);
    ref(null);
    watch(
      () => props.currentWidth,
      (newVal) => {
        if (newVal < 1200) {
          drawer.value = false;
        } else {
          drawer.value = true;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_group = resolveComponent("v-list-group");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu_drawer_dashboard" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_navigation_drawer, {
        modelValue: unref(drawer),
        "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
        elevation: "1",
        touchless: true,
        width: 320,
        class: "pt-0 cart-drawer",
        location: "right",
        theme: "dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              class: "px-0",
              elevation: "0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, {
                    class: "d-flex justify-space-between w-100 pl-4 pl-2",
                    dir: "rtl",
                    style: { "font-size": "20px", "font-weight": "bold" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="lang_switch d-flex align-center pt-2" style="${ssrRenderStyle({ "gap": "15px" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          size: "36px",
                          style: { "border": "2px solid rgb(109, 109, 109)" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, {
                                color: "blue",
                                icon: "mdi-account"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, {
                                  color: "blue",
                                  icon: "mdi-account"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p style="${ssrRenderStyle({ "font-size": "18px", "font-weight": "900" })}"${_scopeId3}>\u0627\u062D\u0645\u062F \u0627\u0644\u0645\u0635\u0631\u064A</p></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "lang_switch d-flex align-center pt-2",
                            style: { "gap": "15px" }
                          }, [
                            createVNode(_component_v_avatar, {
                              size: "36px",
                              style: { "border": "2px solid rgb(109, 109, 109)" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  color: "blue",
                                  icon: "mdi-account"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("p", { style: { "font-size": "18px", "font-weight": "900" } }, "\u0627\u062D\u0645\u062F \u0627\u0644\u0645\u0635\u0631\u064A")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, { class: "mt-2" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_list, {
                    density: "compact",
                    nav: "",
                    class: "pa-0 mt-5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, {
                          style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                          "append-icon": "mdi-receipt-text",
                          title: "\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F",
                          value: "export_invoices",
                          to: { name: "export_invoices" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_item, {
                          style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                          "append-icon": "mdi-currency-usd",
                          title: "\u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                          value: "suppliers_payments",
                          to: { name: "suppliers_payments" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_item, {
                          style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                          "append-icon": "mdi-currency-usd",
                          class: "text-white",
                          title: "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0629",
                          value: "clients_dues",
                          to: { name: "clients_dues" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_group, { value: "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631" }, {
                          activator: withCtx(({ props: props2 }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item, mergeProps({ style: { "gap": "0px !important", "padding": "10px 14px", "display": "flex", "justify-content": "flex-end" } }, props2, {
                                "append-icon": "mdi-file-chart",
                                "prepend-icon": "mdi-chevron-down",
                                title: "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631"
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item, mergeProps({ style: { "gap": "0px !important", "padding": "10px 14px", "display": "flex", "justify-content": "flex-end" } }, props2, {
                                  "append-icon": "mdi-file-chart",
                                  "prepend-icon": "mdi-chevron-down",
                                  title: "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631"
                                }), null, 16)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                class: "text-white",
                                title: "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A",
                                value: "reports-invoices",
                                to: { name: "reports-invoices" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                class: "text-white",
                                title: "\u062A\u0642\u0631\u064A\u0631 \u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                                value: "reports-suppliers_dues",
                                to: { name: "reports-supplier_dues" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                class: "text-white",
                                title: "\u062A\u0642\u0631\u064A\u0631 \u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                                value: "reports-suppliers_payments",
                                to: { name: "reports-suppliers_payments" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item, {
                                  style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                  "append-icon": "mdi-circle-medium",
                                  class: "text-white",
                                  title: "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A",
                                  value: "reports-invoices",
                                  to: { name: "reports-invoices" }
                                }),
                                createVNode(_component_v_list_item, {
                                  style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                  "append-icon": "mdi-circle-medium",
                                  class: "text-white",
                                  title: "\u062A\u0642\u0631\u064A\u0631 \u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                                  value: "reports-suppliers_dues",
                                  to: { name: "reports-supplier_dues" }
                                }),
                                createVNode(_component_v_list_item, {
                                  style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                  "append-icon": "mdi-circle-medium",
                                  class: "text-white",
                                  title: "\u062A\u0642\u0631\u064A\u0631 \u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                                  value: "reports-suppliers_payments",
                                  to: { name: "reports-suppliers_payments" }
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_group, { value: "\u0645\u062F\u062E\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C" }, {
                          activator: withCtx(({ props: props2 }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item, mergeProps({ style: { "gap": "0px !important", "padding": "10px 14px", "display": "flex", "justify-content": "flex-end" } }, props2, {
                                "append-icon": "mdi-cog-transfer",
                                "prepend-icon": "mdi-chevron-down",
                                title: "\u0645\u062F\u062E\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C"
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item, mergeProps({ style: { "gap": "0px !important", "padding": "10px 14px", "display": "flex", "justify-content": "flex-end" } }, props2, {
                                  "append-icon": "mdi-cog-transfer",
                                  "prepend-icon": "mdi-chevron-down",
                                  title: "\u0645\u062F\u062E\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C"
                                }), null, 16)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0646\u062A\u062C",
                                value: "suppliers",
                                to: { name: "product_types" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
                                value: "products",
                                to: { name: "products" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0644\u0635\u0648\u0627\u0645\u0639",
                                value: "granary",
                                to: { name: "granary" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0644\u0639\u0645\u0644\u0627\u0621",
                                value: "clients",
                                to: { name: "clients" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                                value: "product_types",
                                to: { name: "suppliers" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u0648\u0632\u0646",
                                value: "measuring_units",
                                to: { name: "measuring_units" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                                value: "product_units",
                                to: { name: "product_units" }
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0636\u0631\u0627\u064A\u0628",
                                value: "taxes",
                                to: { name: "taxes" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item, {
                                  style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                  "append-icon": "mdi-circle-medium",
                                  title: "\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0646\u062A\u062C",
                                  value: "suppliers",
                                  to: { name: "product_types" }
                                }),
                                createVNode(_component_v_list_item, {
                                  style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                  "append-icon": "mdi-circle-medium",
                                  title: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
                                  value: "products",
                                  to: { name: "products" }
                                }),
                                createVNode(_component_v_list_item, {
                                  style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                  "append-icon": "mdi-circle-medium",
                                  title: "\u0627\u0644\u0635\u0648\u0627\u0645\u0639",
                                  value: "granary",
                                  to: { name: "granary" }
                                }),
                                createVNode(_component_v_list_item, {
                                  style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                  "append-icon": "mdi-circle-medium",
                                  title: "\u0627\u0644\u0639\u0645\u0644\u0627\u0621",
                                  value: "clients",
                                  to: { name: "clients" }
                                }),
                                createVNode(_component_v_list_item, {
                                  style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                  "append-icon": "mdi-circle-medium",
                                  title: "\u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                                  value: "product_types",
                                  to: { name: "suppliers" }
                                }),
                                createVNode(_component_v_list_item, {
                                  style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                  "append-icon": "mdi-circle-medium",
                                  title: "\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u0648\u0632\u0646",
                                  value: "measuring_units",
                                  to: { name: "measuring_units" }
                                }),
                                createVNode(_component_v_list_item, {
                                  style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                  "append-icon": "mdi-circle-medium",
                                  title: "\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                                  value: "product_units",
                                  to: { name: "product_units" }
                                }),
                                createVNode(_component_v_list_item, {
                                  style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                  "append-icon": "mdi-circle-medium",
                                  title: "\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0636\u0631\u0627\u064A\u0628",
                                  value: "taxes",
                                  to: { name: "taxes" }
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-receipt-text",
                            title: "\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F",
                            value: "export_invoices",
                            to: { name: "export_invoices" }
                          }),
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-currency-usd",
                            title: "\u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                            value: "suppliers_payments",
                            to: { name: "suppliers_payments" }
                          }),
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-currency-usd",
                            class: "text-white",
                            title: "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0629",
                            value: "clients_dues",
                            to: { name: "clients_dues" }
                          }),
                          createVNode(_component_v_list_group, { value: "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631" }, {
                            activator: withCtx(({ props: props2 }) => [
                              createVNode(_component_v_list_item, mergeProps({ style: { "gap": "0px !important", "padding": "10px 14px", "display": "flex", "justify-content": "flex-end" } }, props2, {
                                "append-icon": "mdi-file-chart",
                                "prepend-icon": "mdi-chevron-down",
                                title: "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631"
                              }), null, 16)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                class: "text-white",
                                title: "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A",
                                value: "reports-invoices",
                                to: { name: "reports-invoices" }
                              }),
                              createVNode(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                class: "text-white",
                                title: "\u062A\u0642\u0631\u064A\u0631 \u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                                value: "reports-suppliers_dues",
                                to: { name: "reports-supplier_dues" }
                              }),
                              createVNode(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                class: "text-white",
                                title: "\u062A\u0642\u0631\u064A\u0631 \u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                                value: "reports-suppliers_payments",
                                to: { name: "reports-suppliers_payments" }
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_group, { value: "\u0645\u062F\u062E\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C" }, {
                            activator: withCtx(({ props: props2 }) => [
                              createVNode(_component_v_list_item, mergeProps({ style: { "gap": "0px !important", "padding": "10px 14px", "display": "flex", "justify-content": "flex-end" } }, props2, {
                                "append-icon": "mdi-cog-transfer",
                                "prepend-icon": "mdi-chevron-down",
                                title: "\u0645\u062F\u062E\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C"
                              }), null, 16)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0646\u062A\u062C",
                                value: "suppliers",
                                to: { name: "product_types" }
                              }),
                              createVNode(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
                                value: "products",
                                to: { name: "products" }
                              }),
                              createVNode(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0644\u0635\u0648\u0627\u0645\u0639",
                                value: "granary",
                                to: { name: "granary" }
                              }),
                              createVNode(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0644\u0639\u0645\u0644\u0627\u0621",
                                value: "clients",
                                to: { name: "clients" }
                              }),
                              createVNode(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                                value: "product_types",
                                to: { name: "suppliers" }
                              }),
                              createVNode(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u0648\u0632\u0646",
                                value: "measuring_units",
                                to: { name: "measuring_units" }
                              }),
                              createVNode(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                                value: "product_units",
                                to: { name: "product_units" }
                              }),
                              createVNode(_component_v_list_item, {
                                style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                                "append-icon": "mdi-circle-medium",
                                title: "\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0636\u0631\u0627\u064A\u0628",
                                value: "taxes",
                                to: { name: "taxes" }
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
                    createVNode(_component_v_card_title, {
                      class: "d-flex justify-space-between w-100 pl-4 pl-2",
                      dir: "rtl",
                      style: { "font-size": "20px", "font-weight": "bold" }
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "lang_switch d-flex align-center pt-2",
                          style: { "gap": "15px" }
                        }, [
                          createVNode(_component_v_avatar, {
                            size: "36px",
                            style: { "border": "2px solid rgb(109, 109, 109)" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                color: "blue",
                                icon: "mdi-account"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("p", { style: { "font-size": "18px", "font-weight": "900" } }, "\u0627\u062D\u0645\u062F \u0627\u0644\u0645\u0635\u0631\u064A")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider, { class: "mt-2" }),
                    createVNode(_component_v_divider),
                    createVNode(_component_v_list, {
                      density: "compact",
                      nav: "",
                      class: "pa-0 mt-5"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, {
                          style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                          "append-icon": "mdi-receipt-text",
                          title: "\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F",
                          value: "export_invoices",
                          to: { name: "export_invoices" }
                        }),
                        createVNode(_component_v_list_item, {
                          style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                          "append-icon": "mdi-currency-usd",
                          title: "\u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                          value: "suppliers_payments",
                          to: { name: "suppliers_payments" }
                        }),
                        createVNode(_component_v_list_item, {
                          style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                          "append-icon": "mdi-currency-usd",
                          class: "text-white",
                          title: "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0629",
                          value: "clients_dues",
                          to: { name: "clients_dues" }
                        }),
                        createVNode(_component_v_list_group, { value: "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631" }, {
                          activator: withCtx(({ props: props2 }) => [
                            createVNode(_component_v_list_item, mergeProps({ style: { "gap": "0px !important", "padding": "10px 14px", "display": "flex", "justify-content": "flex-end" } }, props2, {
                              "append-icon": "mdi-file-chart",
                              "prepend-icon": "mdi-chevron-down",
                              title: "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631"
                            }), null, 16)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list_item, {
                              style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                              "append-icon": "mdi-circle-medium",
                              class: "text-white",
                              title: "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A",
                              value: "reports-invoices",
                              to: { name: "reports-invoices" }
                            }),
                            createVNode(_component_v_list_item, {
                              style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                              "append-icon": "mdi-circle-medium",
                              class: "text-white",
                              title: "\u062A\u0642\u0631\u064A\u0631 \u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                              value: "reports-suppliers_dues",
                              to: { name: "reports-supplier_dues" }
                            }),
                            createVNode(_component_v_list_item, {
                              style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                              "append-icon": "mdi-circle-medium",
                              class: "text-white",
                              title: "\u062A\u0642\u0631\u064A\u0631 \u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                              value: "reports-suppliers_payments",
                              to: { name: "reports-suppliers_payments" }
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_group, { value: "\u0645\u062F\u062E\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C" }, {
                          activator: withCtx(({ props: props2 }) => [
                            createVNode(_component_v_list_item, mergeProps({ style: { "gap": "0px !important", "padding": "10px 14px", "display": "flex", "justify-content": "flex-end" } }, props2, {
                              "append-icon": "mdi-cog-transfer",
                              "prepend-icon": "mdi-chevron-down",
                              title: "\u0645\u062F\u062E\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C"
                            }), null, 16)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list_item, {
                              style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                              "append-icon": "mdi-circle-medium",
                              title: "\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0646\u062A\u062C",
                              value: "suppliers",
                              to: { name: "product_types" }
                            }),
                            createVNode(_component_v_list_item, {
                              style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                              "append-icon": "mdi-circle-medium",
                              title: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
                              value: "products",
                              to: { name: "products" }
                            }),
                            createVNode(_component_v_list_item, {
                              style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                              "append-icon": "mdi-circle-medium",
                              title: "\u0627\u0644\u0635\u0648\u0627\u0645\u0639",
                              value: "granary",
                              to: { name: "granary" }
                            }),
                            createVNode(_component_v_list_item, {
                              style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                              "append-icon": "mdi-circle-medium",
                              title: "\u0627\u0644\u0639\u0645\u0644\u0627\u0621",
                              value: "clients",
                              to: { name: "clients" }
                            }),
                            createVNode(_component_v_list_item, {
                              style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                              "append-icon": "mdi-circle-medium",
                              title: "\u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                              value: "product_types",
                              to: { name: "suppliers" }
                            }),
                            createVNode(_component_v_list_item, {
                              style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                              "append-icon": "mdi-circle-medium",
                              title: "\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u0648\u0632\u0646",
                              value: "measuring_units",
                              to: { name: "measuring_units" }
                            }),
                            createVNode(_component_v_list_item, {
                              style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                              "append-icon": "mdi-circle-medium",
                              title: "\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                              value: "product_units",
                              to: { name: "product_units" }
                            }),
                            createVNode(_component_v_list_item, {
                              style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                              "append-icon": "mdi-circle-medium",
                              title: "\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0636\u0631\u0627\u064A\u0628",
                              value: "taxes",
                              to: { name: "taxes" }
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
              createVNode(_component_v_card, {
                class: "px-0",
                elevation: "0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, {
                    class: "d-flex justify-space-between w-100 pl-4 pl-2",
                    dir: "rtl",
                    style: { "font-size": "20px", "font-weight": "bold" }
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "lang_switch d-flex align-center pt-2",
                        style: { "gap": "15px" }
                      }, [
                        createVNode(_component_v_avatar, {
                          size: "36px",
                          style: { "border": "2px solid rgb(109, 109, 109)" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              color: "blue",
                              icon: "mdi-account"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("p", { style: { "font-size": "18px", "font-weight": "900" } }, "\u0627\u062D\u0645\u062F \u0627\u0644\u0645\u0635\u0631\u064A")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider, { class: "mt-2" }),
                  createVNode(_component_v_divider),
                  createVNode(_component_v_list, {
                    density: "compact",
                    nav: "",
                    class: "pa-0 mt-5"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, {
                        style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                        "append-icon": "mdi-receipt-text",
                        title: "\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F",
                        value: "export_invoices",
                        to: { name: "export_invoices" }
                      }),
                      createVNode(_component_v_list_item, {
                        style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                        "append-icon": "mdi-currency-usd",
                        title: "\u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                        value: "suppliers_payments",
                        to: { name: "suppliers_payments" }
                      }),
                      createVNode(_component_v_list_item, {
                        style: { "gap": "0px !important", "padding": "10px 12px", "display": "flex", "justify-content": "flex-end" },
                        "append-icon": "mdi-currency-usd",
                        class: "text-white",
                        title: "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0629",
                        value: "clients_dues",
                        to: { name: "clients_dues" }
                      }),
                      createVNode(_component_v_list_group, { value: "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631" }, {
                        activator: withCtx(({ props: props2 }) => [
                          createVNode(_component_v_list_item, mergeProps({ style: { "gap": "0px !important", "padding": "10px 14px", "display": "flex", "justify-content": "flex-end" } }, props2, {
                            "append-icon": "mdi-file-chart",
                            "prepend-icon": "mdi-chevron-down",
                            title: "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631"
                          }), null, 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-circle-medium",
                            class: "text-white",
                            title: "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F\u0627\u062A",
                            value: "reports-invoices",
                            to: { name: "reports-invoices" }
                          }),
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-circle-medium",
                            class: "text-white",
                            title: "\u062A\u0642\u0631\u064A\u0631 \u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                            value: "reports-suppliers_dues",
                            to: { name: "reports-supplier_dues" }
                          }),
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-circle-medium",
                            class: "text-white",
                            title: "\u062A\u0642\u0631\u064A\u0631 \u0633\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                            value: "reports-suppliers_payments",
                            to: { name: "reports-suppliers_payments" }
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_group, { value: "\u0645\u062F\u062E\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C" }, {
                        activator: withCtx(({ props: props2 }) => [
                          createVNode(_component_v_list_item, mergeProps({ style: { "gap": "0px !important", "padding": "10px 14px", "display": "flex", "justify-content": "flex-end" } }, props2, {
                            "append-icon": "mdi-cog-transfer",
                            "prepend-icon": "mdi-chevron-down",
                            title: "\u0645\u062F\u062E\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C"
                          }), null, 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-circle-medium",
                            title: "\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0646\u062A\u062C",
                            value: "suppliers",
                            to: { name: "product_types" }
                          }),
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-circle-medium",
                            title: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
                            value: "products",
                            to: { name: "products" }
                          }),
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-circle-medium",
                            title: "\u0627\u0644\u0635\u0648\u0627\u0645\u0639",
                            value: "granary",
                            to: { name: "granary" }
                          }),
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-circle-medium",
                            title: "\u0627\u0644\u0639\u0645\u0644\u0627\u0621",
                            value: "clients",
                            to: { name: "clients" }
                          }),
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-circle-medium",
                            title: "\u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                            value: "product_types",
                            to: { name: "suppliers" }
                          }),
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-circle-medium",
                            title: "\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u0648\u0632\u0646",
                            value: "measuring_units",
                            to: { name: "measuring_units" }
                          }),
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-circle-medium",
                            title: "\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                            value: "product_units",
                            to: { name: "product_units" }
                          }),
                          createVNode(_component_v_list_item, {
                            style: { "gap": "0px !important", "padding": "10px 40px 10px 0", "display": "flex", "justify-content": "flex-end" },
                            "append-icon": "mdi-circle-medium",
                            title: "\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0636\u0631\u0627\u064A\u0628",
                            value: "taxes",
                            to: { name: "taxes" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/AppSideDrawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AppSideDrawer-6f452c96.mjs.map
