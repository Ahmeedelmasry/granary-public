import { ref, mergeProps, unref, useSSRContext, watch, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, isRef, openBlock, createBlock, createCommentVNode, computed, withDirectives, vModelText, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { g as granaryStore } from './granary-ab731415.mjs';
import { c as clientStore } from './clients-4c03e405.mjs';
import { p as productStore } from './products-e8bf862c.mjs';
import { s as supplierStore } from './supplier-7324b6de.mjs';
import { p as productUnitsStore } from './units-805046be.mjs';
import { t as taxStore } from './taxes-a2292611.mjs';
import { i as invoiceModule } from './invoices-2e29d56e.mjs';
import { s as storeToRefs } from '../server.mjs';
import moment from 'moment';
import useVuelidator from '@vuelidate/core';
import { helpers, required, minLength, numeric, between } from '@vuelidate/validators';
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
import '../../nitro/firebase.mjs';
import 'node-fetch-native/polyfill';
import 'firebase-functions';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';

const _sfc_main$2 = {
  __name: "Update",
  __ssrInlineRender: true,
  props: ["openPopup", "toUpdate"],
  emits: ["closePopup", "regetData"],
  setup(__props, { emit: emits }) {
    const granaryModule = granaryStore();
    const clientsModule = clientStore();
    const suppliersModule = supplierStore();
    const productsModule = productStore();
    const productUnitsModule = productUnitsStore();
    const taxedModule = taxStore();
    const invoicesModule = invoiceModule();
    const { granaries } = storeToRefs(granaryModule);
    const { clients } = storeToRefs(clientsModule);
    const { suppliers } = storeToRefs(suppliersModule);
    const { products } = storeToRefs(productsModule);
    const { productUnits } = storeToRefs(productUnitsModule);
    const { taxes } = storeToRefs(taxedModule);
    const data = ref({
      granary: null,
      documentNumber: null,
      carNumber: null,
      supplier: null,
      date: null,
      product: null,
      productType: null,
      productMeasuringUnit: null,
      carWeightWith: null,
      carWeightWithOut: null,
      productUnit: null,
      totalPackingWeight: null,
      agingPricePerTon: null
    });
    const dialog = ref(false);
    const btnLoading = ref(false);
    const roles = ref({
      granary: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      documentNumber: {
        required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required),
        minLength: helpers.withMessage("\u064A\u062C\u0628 \u0627\u062F\u062E\u0627\u0644 \u0627\u0643\u062B\u0631 \u0645\u0646 3 \u0645\u062F\u062E\u0644\u0627\u062A", minLength(3))
      },
      carNumber: {
        required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required),
        minLength: helpers.withMessage("\u064A\u062C\u0628 \u0627\u062F\u062E\u0627\u0644 \u0627\u0643\u062B\u0631 \u0645\u0646 3 \u0645\u062F\u062E\u0644\u0627\u062A", minLength(3))
      },
      supplier: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      date: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      product: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      productType: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      carWeightWith: {
        required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required),
        numeric: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637", numeric),
        between: helpers.withMessage(
          "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0",
          between(1, 1e7)
        )
      },
      carWeightWithOut: {
        required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required),
        numeric: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637", numeric),
        between: helpers.withMessage(
          "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0",
          between(1, 1e7)
        )
      },
      productUnit: { required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required) },
      totalPackingWeight: {
        required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required),
        numeric: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637", numeric),
        between: helpers.withMessage(
          "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0",
          between(1, 1e7)
        )
      },
      agingPricePerTon: {
        required: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", required),
        numeric: helpers.withMessage("\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u0642\u0628\u0644 \u0627\u0631\u0642\u0627\u0645 \u0641\u0642\u0637", numeric),
        between: helpers.withMessage(
          "\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 0",
          between(1, 1e7)
        )
      }
    });
    const productTypes = computed(() => {
      if (data.value.product)
        return data.value.product.typePriceList;
      return [];
    });
    const totalWeightFromCar = computed(() => {
      if (Number(data.value.carWeightWith) && Number(data.value.carWeightWithOut)) {
        return parseFloat(data.value.carWeightWith) - parseFloat(data.value.carWeightWithOut);
      }
      return 0;
    });
    const totalClearWeight = computed(() => {
      if (totalWeightFromCar.value > 0 && Number(data.value.totalPackingWeight)) {
        return parseFloat(totalWeightFromCar.value) - parseFloat(data.value.totalPackingWeight);
      }
      return 0;
    });
    const agingTotalPrice = computed(() => {
      if (Number(data.value.agingPricePerTon) && Number(totalClearWeight.value)) {
        return Math.ceil(
          parseFloat(totalClearWeight.value) / 1e3 * parseFloat(data.value.agingPricePerTon)
        );
      }
      return 0;
    });
    const getTaxes = computed(() => {
      const obj = {
        docTax: 0,
        agroTax: 0
      };
      if (taxes.value.content && taxes.value.content.length) {
        obj.docTax = taxes.value.content.find((el) => el.name == "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629");
        obj.agroTax = taxes.value.content.find(
          (el) => el.name == "\u0642\u064A\u0645\u0629 \u0627\u0644\u062E\u0635\u0645 \u0644\u0643\u0644 \u0627\u0631\u062F\u0628"
        );
      }
      return obj;
    });
    const totalInvoiceArdabs = computed(() => {
      if (Number(agingTotalPrice.value)) {
        const totalArdabs = Number(totalClearWeight.value) / data.value.productType.weightPerArdab;
        return Math.ceil(totalArdabs);
      }
      return 0;
    });
    const invoicTotalTaxesCut = computed(() => {
      if (Number(agingTotalPrice.value)) {
        const ardabTaxTotal = totalInvoiceArdabs.value * getTaxes.value.agroTax.value;
        const subTotal = agingTotalPrice.value + ardabTaxTotal + getTaxes.value.docTax.value;
        return Math.ceil(subTotal);
      }
      return 0;
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
      const res = await $v.value.$validate();
      if (res) {
        btnLoading.value = true;
        const obj = {
          granary: {
            id: data.value.granary.id
          },
          supplier: {
            id: data.value.supplier.id
          },
          documentNumber: data.value.documentNumber,
          carNumber: data.value.carNumber,
          product: {
            id: data.value.product.id
          },
          productType: {
            id: data.value.productType.productType.id
          },
          productPricePerKilo: parseFloat(data.value.productType.pricePerKilo),
          carWeightWith: parseFloat(data.value.carWeightWith),
          carWeightWithOut: parseFloat(data.value.carWeightWithOut),
          totalWeightFromCar: totalWeightFromCar.value,
          packageUnit: {
            id: data.value.productUnit.id
          },
          totalPackingWeight: parseFloat(data.value.totalPackingWeight),
          totalClearWeight: totalClearWeight.value,
          agingPricePerTon: parseFloat(data.value.agingPricePerTon),
          totalAgingPrice: agingTotalPrice.value,
          formPrice: getTaxes.value.docTax.value,
          pricePerArdab: getTaxes.value.agroTax.value,
          totalArdab: totalInvoiceArdabs.value,
          totalPrice: totalClearWeight.value * parseFloat(data.value.productType.pricePerKilo),
          totalDiscount: invoicTotalTaxesCut.value,
          totalAfterDiscount: totalClearWeight.value * parseFloat(data.value.productType.pricePerKilo) - invoicTotalTaxesCut.value,
          date: moment(new Date(data.value.date)).format("DD-MM-YYYY hh:mm:ss")
        };
        const result = await invoicesModule.doAddInvoice(obj);
        if (result) {
          emits("regetData");
          dialog.value = false;
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
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "update_banner" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        fullscreen: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { style: { "border-radius": "unset !important" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, {
                    class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                    style: { "font-size": "22px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0641\u0627\u062A\u0648\u0631\u0629 \u062A\u0648\u0631\u064A\u062F" : "\u0627\u0636\u0627\u0641\u0629 \u0641\u0627\u062A\u0648\u0631\u0629 \u062A\u0648\u0631\u064A\u062F")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0641\u0627\u062A\u0648\u0631\u0629 \u062A\u0648\u0631\u064A\u062F" : "\u0627\u0636\u0627\u0641\u0629 \u0641\u0627\u062A\u0648\u0631\u0629 \u062A\u0648\u0631\u064A\u062F"), 1)
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
                        _push4(ssrRenderComponent(_component_v_container, { fluid: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, { dir: "rtl" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h3 style="${ssrRenderStyle({ "font-size": "23px", "font-weight": "700" })}"${_scopeId6}>\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0633\u0627\u0633\u064A\u0629</h3>`);
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0633\u0627\u0633\u064A\u0629"),
                                            createVNode(_component_v_divider),
                                            createVNode(_component_v_divider)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="granary"${_scopeId6}>\u0627\u0644\u0635\u0648\u0645\u0639\u0629</label><div class="input_parent position-relative"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_autocomplete, {
                                            "return-object": "",
                                            items: unref(granaries).content,
                                            "item-title": "name",
                                            "item-value": "id",
                                            variant: "outlined",
                                            placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
                                            id: "granary",
                                            modelValue: unref(data).granary,
                                            "onUpdate:modelValue": ($event) => unref(data).granary = $event,
                                            "hide-details": "",
                                            class: [
                                              unref($v).$errors.find((el) => el.$property == "granary") ? "err_field" : ""
                                            ]
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-store-24-hour`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-store-24-hour")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "granary")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "granary").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "granary" }, "\u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode(_component_v_autocomplete, {
                                                  "return-object": "",
                                                  items: unref(granaries).content,
                                                  "item-title": "name",
                                                  "item-value": "id",
                                                  variant: "outlined",
                                                  placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
                                                  id: "granary",
                                                  modelValue: unref(data).granary,
                                                  "onUpdate:modelValue": ($event) => unref(data).granary = $event,
                                                  "hide-details": "",
                                                  class: [
                                                    unref($v).$errors.find((el) => el.$property == "granary") ? "err_field" : ""
                                                  ]
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-store-24-hour")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "granary") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "granary").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="supplier"${_scopeId6}>\u0627\u0644\u0645\u0648\u0631\u062F</label><div class="input_parent position-relative"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_autocomplete, {
                                            "return-object": "",
                                            items: unref(suppliers).content,
                                            "item-title": "name",
                                            "item-value": "id",
                                            variant: "outlined",
                                            placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F",
                                            name: "supplier",
                                            id: "supplier",
                                            modelValue: unref(data).supplier,
                                            "onUpdate:modelValue": ($event) => unref(data).supplier = $event,
                                            "hide-details": "",
                                            class: [
                                              unref($v).$errors.find((el) => el.$property == "supplier") ? "err_field" : ""
                                            ]
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-account-cowboy-hat `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-account-cowboy-hat ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "supplier")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "supplier").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "supplier" }, "\u0627\u0644\u0645\u0648\u0631\u062F"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode(_component_v_autocomplete, {
                                                  "return-object": "",
                                                  items: unref(suppliers).content,
                                                  "item-title": "name",
                                                  "item-value": "id",
                                                  variant: "outlined",
                                                  placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F",
                                                  name: "supplier",
                                                  id: "supplier",
                                                  modelValue: unref(data).supplier,
                                                  "onUpdate:modelValue": ($event) => unref(data).supplier = $event,
                                                  "hide-details": "",
                                                  class: [
                                                    unref($v).$errors.find((el) => el.$property == "supplier") ? "err_field" : ""
                                                  ]
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-account-cowboy-hat ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "supplier") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "supplier").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="documentNumber"${_scopeId6}>\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F" name="documentNumber" id="documentNumber"${ssrRenderAttr("value", unref(data).documentNumber)} class="${ssrRenderClass(
                                            unref($v).$errors.find(
                                              (el) => el.$property == "documentNumber"
                                            ) ? "err_field" : ""
                                          )}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-file `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-file ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "documentNumber")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "documentNumber").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "documentNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                withDirectives(createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F",
                                                  name: "documentNumber",
                                                  id: "documentNumber",
                                                  "onUpdate:modelValue": ($event) => unref(data).documentNumber = $event,
                                                  class: unref($v).$errors.find(
                                                    (el) => el.$property == "documentNumber"
                                                  ) ? "err_field" : ""
                                                }, null, 10, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(data).documentNumber]
                                                ]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-file ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "documentNumber") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "documentNumber").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="carNumber"${_scopeId6}>\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629" name="carNumber" id="carNumber"${ssrRenderAttr("value", unref(data).carNumber)} class="${ssrRenderClass(
                                            unref($v).$errors.find((el) => el.$property == "carNumber") ? "err_field" : ""
                                          )}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-car `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-car ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "carNumber")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "carNumber").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "carNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                withDirectives(createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629",
                                                  name: "carNumber",
                                                  id: "carNumber",
                                                  "onUpdate:modelValue": ($event) => unref(data).carNumber = $event,
                                                  class: unref($v).$errors.find((el) => el.$property == "carNumber") ? "err_field" : ""
                                                }, null, 10, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(data).carNumber]
                                                ]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-car ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "carNumber") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carNumber").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    if (unref(clients).content) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="field_container"${_scopeId6}><label for="date"${_scopeId6}>\u0627\u0644\u062A\u0627\u0631\u064A\u062E</label><div class="input_parent position-relative"${_scopeId6}><input type="datetime-local" name="date" id="date"${ssrRenderAttr("value", unref(data).date)} class="${ssrRenderClass(
                                              unref($v).$errors.find((el) => el.$property == "date") ? "err_field" : ""
                                            )}" style="${ssrRenderStyle({ "padding-right": "0 !important" })}"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-calendar`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-calendar")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                            if (unref($v).$errors.find((el) => el.$property == "date")) {
                                              _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "date").$message)}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode("div", { class: "field_container" }, [
                                                createVNode("label", { for: "date" }, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"),
                                                createVNode("div", { class: "input_parent position-relative" }, [
                                                  withDirectives(createVNode("input", {
                                                    type: "datetime-local",
                                                    name: "date",
                                                    id: "date",
                                                    "onUpdate:modelValue": ($event) => unref(data).date = $event,
                                                    class: unref($v).$errors.find((el) => el.$property == "date") ? "err_field" : "",
                                                    style: { "padding-right": "0 !important" }
                                                  }, null, 10, ["onUpdate:modelValue"]), [
                                                    [vModelText, unref(data).date]
                                                  ]),
                                                  createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-calendar")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              unref($v).$errors.find((el) => el.$property == "date") ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "err_msg"
                                              }, toDisplayString(unref($v).$errors.find((el) => el.$property == "date").$message), 1)) : createCommentVNode("", true)
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
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0633\u0627\u0633\u064A\u0629"),
                                          createVNode(_component_v_divider),
                                          createVNode(_component_v_divider)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "granary" }, "\u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode(_component_v_autocomplete, {
                                                "return-object": "",
                                                items: unref(granaries).content,
                                                "item-title": "name",
                                                "item-value": "id",
                                                variant: "outlined",
                                                placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
                                                id: "granary",
                                                modelValue: unref(data).granary,
                                                "onUpdate:modelValue": ($event) => unref(data).granary = $event,
                                                "hide-details": "",
                                                class: [
                                                  unref($v).$errors.find((el) => el.$property == "granary") ? "err_field" : ""
                                                ]
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-store-24-hour")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "granary") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "granary").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "supplier" }, "\u0627\u0644\u0645\u0648\u0631\u062F"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode(_component_v_autocomplete, {
                                                "return-object": "",
                                                items: unref(suppliers).content,
                                                "item-title": "name",
                                                "item-value": "id",
                                                variant: "outlined",
                                                placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F",
                                                name: "supplier",
                                                id: "supplier",
                                                modelValue: unref(data).supplier,
                                                "onUpdate:modelValue": ($event) => unref(data).supplier = $event,
                                                "hide-details": "",
                                                class: [
                                                  unref($v).$errors.find((el) => el.$property == "supplier") ? "err_field" : ""
                                                ]
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-account-cowboy-hat ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "supplier") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "supplier").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "documentNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F",
                                                name: "documentNumber",
                                                id: "documentNumber",
                                                "onUpdate:modelValue": ($event) => unref(data).documentNumber = $event,
                                                class: unref($v).$errors.find(
                                                  (el) => el.$property == "documentNumber"
                                                ) ? "err_field" : ""
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).documentNumber]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-file ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "documentNumber") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "documentNumber").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "carNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629",
                                                name: "carNumber",
                                                id: "carNumber",
                                                "onUpdate:modelValue": ($event) => unref(data).carNumber = $event,
                                                class: unref($v).$errors.find((el) => el.$property == "carNumber") ? "err_field" : ""
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).carNumber]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-car ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "carNumber") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carNumber").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                        key: 0,
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "date" }, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "datetime-local",
                                                name: "date",
                                                id: "date",
                                                "onUpdate:modelValue": ($event) => unref(data).date = $event,
                                                class: unref($v).$errors.find((el) => el.$property == "date") ? "err_field" : "",
                                                style: { "padding-right": "0 !important" }
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).date]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-calendar")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "date") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "date").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, {
                                dir: "rtl",
                                class: "mt-5"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h3 style="${ssrRenderStyle({ "font-size": "23px", "font-weight": "700" })}"${_scopeId6}>\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C</h3>`);
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                            createVNode(_component_v_divider),
                                            createVNode(_component_v_divider)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="product"${_scopeId6}>\u0627\u0644\u0645\u0646\u062A\u062C</label><div class="input_parent position-relative"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_autocomplete, {
                                            "return-object": "",
                                            items: unref(products).content,
                                            "item-title": "name",
                                            "item-value": "id",
                                            name: "product",
                                            id: "product",
                                            modelValue: unref(data).product,
                                            "onUpdate:modelValue": [($event) => unref(data).product = $event, ($event) => (unref(data).productType = null, unref(data).productMeasuringUnit = null)],
                                            variant: "outlined",
                                            placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C",
                                            "hide-details": "",
                                            class: [
                                              unref($v).$errors.find((el) => el.$property == "product") ? "err_field" : ""
                                            ]
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-basket`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-basket")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "product")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "product").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "product" }, "\u0627\u0644\u0645\u0646\u062A\u062C"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode(_component_v_autocomplete, {
                                                  "return-object": "",
                                                  items: unref(products).content,
                                                  "item-title": "name",
                                                  "item-value": "id",
                                                  name: "product",
                                                  id: "product",
                                                  modelValue: unref(data).product,
                                                  "onUpdate:modelValue": [($event) => unref(data).product = $event, ($event) => (unref(data).productType = null, unref(data).productMeasuringUnit = null)],
                                                  variant: "outlined",
                                                  placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C",
                                                  "hide-details": "",
                                                  class: [
                                                    unref($v).$errors.find((el) => el.$property == "product") ? "err_field" : ""
                                                  ]
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-basket")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "product") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "product").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="productType"${_scopeId6}>\u0627\u0644\u0641\u0631\u0632</label><div class="input_parent position-relative"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_autocomplete, {
                                            "return-object": "",
                                            items: unref(productTypes),
                                            "item-title": "productType.name",
                                            "item-value": "id",
                                            variant: "outlined",
                                            placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0632",
                                            name: "productType",
                                            id: "productType",
                                            "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                                            modelValue: unref(data).productType,
                                            "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                            "hide-details": "",
                                            class: [
                                              unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                            ]
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-sitemap `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-sitemap ")
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
                                              createVNode("label", { for: "productType" }, "\u0627\u0644\u0641\u0631\u0632"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode(_component_v_autocomplete, {
                                                  "return-object": "",
                                                  items: unref(productTypes),
                                                  "item-title": "productType.name",
                                                  "item-value": "id",
                                                  variant: "outlined",
                                                  placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0632",
                                                  name: "productType",
                                                  id: "productType",
                                                  "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                                                  modelValue: unref(data).productType,
                                                  "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                                  "hide-details": "",
                                                  class: [
                                                    unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                                  ]
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-sitemap ")
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
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="carWeightWith"${_scopeId6}>\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645" name="carWeightWith"${ssrRenderAttr("value", unref(data).carWeightWith)} id="carWeightWith" class="${ssrRenderClass(
                                            unref($v).$errors.find((el) => el.$property == "carWeightWith") ? "err_field" : ""
                                          )}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-weight-kilogram `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-weight-kilogram ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "carWeightWith")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "carWeightWith").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "carWeightWith" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                withDirectives(createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645",
                                                  name: "carWeightWith",
                                                  "onUpdate:modelValue": ($event) => unref(data).carWeightWith = $event,
                                                  id: "carWeightWith",
                                                  class: unref($v).$errors.find((el) => el.$property == "carWeightWith") ? "err_field" : ""
                                                }, null, 10, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(data).carWeightWith]
                                                ]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-weight-kilogram ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "carWeightWith") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWith").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    if (unref(clients).content) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="field_container"${_scopeId6}><label for="carWeightWithOut"${_scopeId6}>\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A" name="carWeightWithOut"${ssrRenderAttr("value", unref(data).carWeightWithOut)} id="carWeightWithOut" class="${ssrRenderClass(
                                              unref($v).$errors.find(
                                                (el) => el.$property == "carWeightWithOut"
                                              ) ? "err_field" : ""
                                            )}"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-weight-kilogram `);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-weight-kilogram ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                            if (unref($v).$errors.find((el) => el.$property == "carWeightWithOut")) {
                                              _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "carWeightWithOut").$message)}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode("div", { class: "field_container" }, [
                                                createVNode("label", { for: "carWeightWithOut" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A"),
                                                createVNode("div", { class: "input_parent position-relative" }, [
                                                  withDirectives(createVNode("input", {
                                                    type: "text",
                                                    placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A",
                                                    name: "carWeightWithOut",
                                                    "onUpdate:modelValue": ($event) => unref(data).carWeightWithOut = $event,
                                                    id: "carWeightWithOut",
                                                    class: unref($v).$errors.find(
                                                      (el) => el.$property == "carWeightWithOut"
                                                    ) ? "err_field" : ""
                                                  }, null, 10, ["onUpdate:modelValue"]), [
                                                    [vModelText, unref(data).carWeightWithOut]
                                                  ]),
                                                  createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-weight-kilogram ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              unref($v).$errors.find((el) => el.$property == "carWeightWithOut") ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "err_msg"
                                              }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWithOut").$message), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if (unref(clients).content) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646" name="typeName" id="typeName" disabled${ssrRenderAttr("value", unref(totalWeightFromCar))}${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-weight-kilogram `);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-weight-kilogram ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "field_container" }, [
                                                createVNode("label", { for: "typeName" }, "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646"),
                                                createVNode("div", { class: "input_parent position-relative" }, [
                                                  createVNode("input", {
                                                    type: "text",
                                                    placeholder: "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646",
                                                    name: "typeName",
                                                    id: "typeName",
                                                    disabled: "",
                                                    value: unref(totalWeightFromCar)
                                                  }, null, 8, ["value"]),
                                                  createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-weight-kilogram ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ])
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
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                          createVNode(_component_v_divider),
                                          createVNode(_component_v_divider)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "product" }, "\u0627\u0644\u0645\u0646\u062A\u062C"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode(_component_v_autocomplete, {
                                                "return-object": "",
                                                items: unref(products).content,
                                                "item-title": "name",
                                                "item-value": "id",
                                                name: "product",
                                                id: "product",
                                                modelValue: unref(data).product,
                                                "onUpdate:modelValue": [($event) => unref(data).product = $event, ($event) => (unref(data).productType = null, unref(data).productMeasuringUnit = null)],
                                                variant: "outlined",
                                                placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C",
                                                "hide-details": "",
                                                class: [
                                                  unref($v).$errors.find((el) => el.$property == "product") ? "err_field" : ""
                                                ]
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-basket")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "product") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "product").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "productType" }, "\u0627\u0644\u0641\u0631\u0632"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode(_component_v_autocomplete, {
                                                "return-object": "",
                                                items: unref(productTypes),
                                                "item-title": "productType.name",
                                                "item-value": "id",
                                                variant: "outlined",
                                                placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0632",
                                                name: "productType",
                                                id: "productType",
                                                "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                                                modelValue: unref(data).productType,
                                                "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                                "hide-details": "",
                                                class: [
                                                  unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                                ]
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-sitemap ")
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
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "carWeightWith" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645",
                                                name: "carWeightWith",
                                                "onUpdate:modelValue": ($event) => unref(data).carWeightWith = $event,
                                                id: "carWeightWith",
                                                class: unref($v).$errors.find((el) => el.$property == "carWeightWith") ? "err_field" : ""
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).carWeightWith]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-weight-kilogram ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "carWeightWith") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWith").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                        key: 0,
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "carWeightWithOut" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A",
                                                name: "carWeightWithOut",
                                                "onUpdate:modelValue": ($event) => unref(data).carWeightWithOut = $event,
                                                id: "carWeightWithOut",
                                                class: unref($v).$errors.find(
                                                  (el) => el.$property == "carWeightWithOut"
                                                ) ? "err_field" : ""
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).carWeightWithOut]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-weight-kilogram ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "carWeightWithOut") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWithOut").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                        key: 1,
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646",
                                                name: "typeName",
                                                id: "typeName",
                                                disabled: "",
                                                value: unref(totalWeightFromCar)
                                              }, null, 8, ["value"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-weight-kilogram ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, {
                                dir: "rtl",
                                class: "mt-5"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h3 style="${ssrRenderStyle({ "font-size": "23px", "font-weight": "700" })}"${_scopeId6}> \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 </h3>`);
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 "),
                                            createVNode(_component_v_divider),
                                            createVNode(_component_v_divider)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="productUnit"${_scopeId6}>\u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629</label><div class="input_parent position-relative"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_autocomplete, {
                                            "item-title": "name",
                                            "item-value": "id",
                                            "return-object": "",
                                            items: unref(productUnits).content,
                                            name: "productUnit",
                                            id: "productUnit",
                                            modelValue: unref(data).productUnit,
                                            "onUpdate:modelValue": ($event) => unref(data).productUnit = $event,
                                            variant: "outlined",
                                            placeholder: "\u0627\u062E\u062A\u0631 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                                            "hide-details": "",
                                            disabled: !unref(productUnits).content || !unref(productUnits).content.length,
                                            class: [
                                              unref($v).$errors.find((el) => el.$property == "productUnit") ? "err_field" : ""
                                            ]
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-basket-fill `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-basket-fill ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "productUnit")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "productUnit").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "productUnit" }, "\u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode(_component_v_autocomplete, {
                                                  "item-title": "name",
                                                  "item-value": "id",
                                                  "return-object": "",
                                                  items: unref(productUnits).content,
                                                  name: "productUnit",
                                                  id: "productUnit",
                                                  modelValue: unref(data).productUnit,
                                                  "onUpdate:modelValue": ($event) => unref(data).productUnit = $event,
                                                  variant: "outlined",
                                                  placeholder: "\u0627\u062E\u062A\u0631 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                                                  "hide-details": "",
                                                  disabled: !unref(productUnits).content || !unref(productUnits).content.length,
                                                  class: [
                                                    unref($v).$errors.find((el) => el.$property == "productUnit") ? "err_field" : ""
                                                  ]
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled", "class"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-basket-fill ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "productUnit") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productUnit").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="totalPackingWeight"${_scopeId6}>\u0627\u062C\u0645\u0627\u0644\u064A \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0648\u0632\u0646 \u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0628\u0627\u0644\u0643\u064A\u0644\u0648" name="totalPackingWeight" id="totalPackingWeight"${ssrRenderAttr("value", unref(data).totalPackingWeight)} class="${ssrRenderClass(
                                            unref($v).$errors.find(
                                              (el) => el.$property == "totalPackingWeight"
                                            ) ? "err_field" : ""
                                          )}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-weight-kilogram `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-weight-kilogram ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find(
                                            (el) => el.$property == "totalPackingWeight"
                                          )) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find(
                                              (el) => el.$property == "totalPackingWeight"
                                            ).$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                withDirectives(createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0648\u0632\u0646 \u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0628\u0627\u0644\u0643\u064A\u0644\u0648",
                                                  name: "totalPackingWeight",
                                                  id: "totalPackingWeight",
                                                  "onUpdate:modelValue": ($event) => unref(data).totalPackingWeight = $event,
                                                  class: unref($v).$errors.find(
                                                    (el) => el.$property == "totalPackingWeight"
                                                  ) ? "err_field" : ""
                                                }, null, 10, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(data).totalPackingWeight]
                                                ]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-weight-kilogram ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find(
                                              (el) => el.$property == "totalPackingWeight"
                                            ) ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find(
                                              (el) => el.$property == "totalPackingWeight"
                                            ).$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="typeName"${_scopeId6}>\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A" name="typeName" id="typeName"${ssrRenderAttr("value", unref(totalClearWeight))} disabled${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-weight-kilogram `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-weight-kilogram ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "typeName" }, "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A",
                                                  name: "typeName",
                                                  id: "typeName",
                                                  value: unref(totalClearWeight),
                                                  disabled: ""
                                                }, null, 8, ["value"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-weight-kilogram ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 "),
                                          createVNode(_component_v_divider),
                                          createVNode(_component_v_divider)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "productUnit" }, "\u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode(_component_v_autocomplete, {
                                                "item-title": "name",
                                                "item-value": "id",
                                                "return-object": "",
                                                items: unref(productUnits).content,
                                                name: "productUnit",
                                                id: "productUnit",
                                                modelValue: unref(data).productUnit,
                                                "onUpdate:modelValue": ($event) => unref(data).productUnit = $event,
                                                variant: "outlined",
                                                placeholder: "\u0627\u062E\u062A\u0631 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                                                "hide-details": "",
                                                disabled: !unref(productUnits).content || !unref(productUnits).content.length,
                                                class: [
                                                  unref($v).$errors.find((el) => el.$property == "productUnit") ? "err_field" : ""
                                                ]
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled", "class"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-basket-fill ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "productUnit") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productUnit").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0648\u0632\u0646 \u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0628\u0627\u0644\u0643\u064A\u0644\u0648",
                                                name: "totalPackingWeight",
                                                id: "totalPackingWeight",
                                                "onUpdate:modelValue": ($event) => unref(data).totalPackingWeight = $event,
                                                class: unref($v).$errors.find(
                                                  (el) => el.$property == "totalPackingWeight"
                                                ) ? "err_field" : ""
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).totalPackingWeight]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-weight-kilogram ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find(
                                            (el) => el.$property == "totalPackingWeight"
                                          ) ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find(
                                            (el) => el.$property == "totalPackingWeight"
                                          ).$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "typeName" }, "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A",
                                                name: "typeName",
                                                id: "typeName",
                                                value: unref(totalClearWeight),
                                                disabled: ""
                                              }, null, 8, ["value"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-weight-kilogram ")
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
                                        md: "3",
                                        lg: ""
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, {
                                dir: "rtl",
                                class: "mt-5"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h3 style="${ssrRenderStyle({ "font-size": "23px", "font-weight": "700" })}"${_scopeId6}> \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A </h3>`);
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A "),
                                            createVNode(_component_v_divider),
                                            createVNode(_component_v_divider)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="agingPricePerTon"${_scopeId6}>\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642" name="agingPricePerTon" id="agingPricePerTon"${ssrRenderAttr("value", unref(data).agingPricePerTon)} class="${ssrRenderClass(
                                            unref($v).$errors.find(
                                              (el) => el.$property == "agingPricePerTon"
                                            ) ? "err_field" : ""
                                          )}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-currency-usd `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-currency-usd ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          if (unref($v).$errors.find((el) => el.$property == "agingPricePerTon")) {
                                            _push7(`<span class="err_msg"${_scopeId6}>${ssrInterpolate(unref($v).$errors.find((el) => el.$property == "agingPricePerTon").$message)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "agingPricePerTon" }, "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                withDirectives(createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                                  name: "agingPricePerTon",
                                                  id: "agingPricePerTon",
                                                  "onUpdate:modelValue": ($event) => unref(data).agingPricePerTon = $event,
                                                  class: unref($v).$errors.find(
                                                    (el) => el.$property == "agingPricePerTon"
                                                  ) ? "err_field" : ""
                                                }, null, 10, ["onUpdate:modelValue"]), [
                                                  [vModelText, unref(data).agingPricePerTon]
                                                ]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-currency-usd ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            unref($v).$errors.find((el) => el.$property == "agingPricePerTon") ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "err_msg"
                                            }, toDisplayString(unref($v).$errors.find((el) => el.$property == "agingPricePerTon").$message), 1)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="totalPackingWeight"${_scopeId6}>\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642" name="totalPackingWeight" id="totalPackingWeight"${ssrRenderAttr("value", unref(agingTotalPrice))} disabled${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-currency-usd `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-currency-usd ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                                  name: "totalPackingWeight",
                                                  id: "totalPackingWeight",
                                                  value: unref(agingTotalPrice),
                                                  disabled: ""
                                                }, null, 8, ["value"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-currency-usd ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="totalPackingWeight"${_scopeId6}>\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629" name="totalPackingWeight" id="totalPackingWeight"${ssrRenderAttr("value", unref(getTaxes).docTax.value)} disabled${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-currency-usd `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-currency-usd ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629",
                                                  name: "totalPackingWeight",
                                                  id: "totalPackingWeight",
                                                  value: unref(getTaxes).docTax.value,
                                                  disabled: ""
                                                }, null, 8, ["value"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-currency-usd ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="totalPackingWeight"${_scopeId6}>\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628" name="totalPackingWeight" id="totalPackingWeight"${ssrRenderAttr("value", unref(getTaxes).agroTax.value)} disabled${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-currency-usd `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-currency-usd ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628",
                                                  name: "totalPackingWeight",
                                                  id: "totalPackingWeight",
                                                  value: unref(getTaxes).agroTax.value,
                                                  disabled: ""
                                                }, null, 8, ["value"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-currency-usd ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="totalPackingWeight"${_scopeId6}>\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645" name="totalPackingWeight" id="totalPackingWeight" disabled${ssrRenderAttr("value", unref(invoicTotalTaxesCut))}${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-currency-usd `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-currency-usd ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645",
                                                  name: "totalPackingWeight",
                                                  id: "totalPackingWeight",
                                                  disabled: "",
                                                  value: unref(invoicTotalTaxesCut)
                                                }, null, 8, ["value"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-currency-usd ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A "),
                                          createVNode(_component_v_divider),
                                          createVNode(_component_v_divider)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "agingPricePerTon" }, "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              withDirectives(createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                                name: "agingPricePerTon",
                                                id: "agingPricePerTon",
                                                "onUpdate:modelValue": ($event) => unref(data).agingPricePerTon = $event,
                                                class: unref($v).$errors.find(
                                                  (el) => el.$property == "agingPricePerTon"
                                                ) ? "err_field" : ""
                                              }, null, 10, ["onUpdate:modelValue"]), [
                                                [vModelText, unref(data).agingPricePerTon]
                                              ]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-currency-usd ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          unref($v).$errors.find((el) => el.$property == "agingPricePerTon") ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "err_msg"
                                          }, toDisplayString(unref($v).$errors.find((el) => el.$property == "agingPricePerTon").$message), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                                name: "totalPackingWeight",
                                                id: "totalPackingWeight",
                                                value: unref(agingTotalPrice),
                                                disabled: ""
                                              }, null, 8, ["value"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-currency-usd ")
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
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629",
                                                name: "totalPackingWeight",
                                                id: "totalPackingWeight",
                                                value: unref(getTaxes).docTax.value,
                                                disabled: ""
                                              }, null, 8, ["value"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-currency-usd ")
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
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628",
                                                name: "totalPackingWeight",
                                                id: "totalPackingWeight",
                                                value: unref(getTaxes).agroTax.value,
                                                disabled: ""
                                              }, null, 8, ["value"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-currency-usd ")
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
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645",
                                                name: "totalPackingWeight",
                                                id: "totalPackingWeight",
                                                disabled: "",
                                                value: unref(invoicTotalTaxesCut)
                                              }, null, 8, ["value"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-currency-usd ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, {
                                dir: "rtl",
                                class: "mt-5"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h3 style="${ssrRenderStyle({ "font-size": "23px", "font-weight": "700" })}"${_scopeId6}> \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 </h3>`);
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 "),
                                            createVNode(_component_v_divider),
                                            createVNode(_component_v_divider)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="totalPackingWeight"${_scopeId6}>\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645" name="totalPackingWeight" id="totalPackingWeight"${ssrRenderAttr(
                                            "value",
                                            unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo : 0
                                          )} disabled${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-currency-usd `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-currency-usd ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645",
                                                  name: "totalPackingWeight",
                                                  id: "totalPackingWeight",
                                                  value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo : 0,
                                                  disabled: ""
                                                }, null, 8, ["value"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-currency-usd ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="field_container"${_scopeId6}><label for="totalPackingWeight"${_scopeId6}>\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645</label><div class="input_parent position-relative"${_scopeId6}><input type="text" placeholder="\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645" name="totalPackingWeight" id="totalPackingWeight" disabled${ssrRenderAttr(
                                            "value",
                                            unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo - unref(invoicTotalTaxesCut) : 0
                                          )}${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-currency-usd `);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-currency-usd ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "field_container" }, [
                                              createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645"),
                                              createVNode("div", { class: "input_parent position-relative" }, [
                                                createVNode("input", {
                                                  type: "text",
                                                  placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645",
                                                  name: "totalPackingWeight",
                                                  id: "totalPackingWeight",
                                                  disabled: "",
                                                  value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo - unref(invoicTotalTaxesCut) : 0
                                                }, null, 8, ["value"]),
                                                createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-currency-usd ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 "),
                                          createVNode(_component_v_divider),
                                          createVNode(_component_v_divider)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645",
                                                name: "totalPackingWeight",
                                                id: "totalPackingWeight",
                                                value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo : 0,
                                                disabled: ""
                                              }, null, 8, ["value"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-currency-usd ")
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
                                        md: "3",
                                        lg: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "field_container" }, [
                                            createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645"),
                                            createVNode("div", { class: "input_parent position-relative" }, [
                                              createVNode("input", {
                                                type: "text",
                                                placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645",
                                                name: "totalPackingWeight",
                                                id: "totalPackingWeight",
                                                disabled: "",
                                                value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo - unref(invoicTotalTaxesCut) : 0
                                              }, null, 8, ["value"]),
                                              createVNode(_component_v_icon, { class: "position-absolute" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-currency-usd ")
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
                                        md: "3",
                                        lg: ""
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        lg: ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, { dir: "rtl" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0633\u0627\u0633\u064A\u0629"),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_divider)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "granary" }, "\u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode(_component_v_autocomplete, {
                                              "return-object": "",
                                              items: unref(granaries).content,
                                              "item-title": "name",
                                              "item-value": "id",
                                              variant: "outlined",
                                              placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
                                              id: "granary",
                                              modelValue: unref(data).granary,
                                              "onUpdate:modelValue": ($event) => unref(data).granary = $event,
                                              "hide-details": "",
                                              class: [
                                                unref($v).$errors.find((el) => el.$property == "granary") ? "err_field" : ""
                                              ]
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-store-24-hour")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "granary") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "granary").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "supplier" }, "\u0627\u0644\u0645\u0648\u0631\u062F"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode(_component_v_autocomplete, {
                                              "return-object": "",
                                              items: unref(suppliers).content,
                                              "item-title": "name",
                                              "item-value": "id",
                                              variant: "outlined",
                                              placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F",
                                              name: "supplier",
                                              id: "supplier",
                                              modelValue: unref(data).supplier,
                                              "onUpdate:modelValue": ($event) => unref(data).supplier = $event,
                                              "hide-details": "",
                                              class: [
                                                unref($v).$errors.find((el) => el.$property == "supplier") ? "err_field" : ""
                                              ]
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-account-cowboy-hat ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "supplier") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "supplier").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "documentNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F",
                                              name: "documentNumber",
                                              id: "documentNumber",
                                              "onUpdate:modelValue": ($event) => unref(data).documentNumber = $event,
                                              class: unref($v).$errors.find(
                                                (el) => el.$property == "documentNumber"
                                              ) ? "err_field" : ""
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).documentNumber]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-file ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "documentNumber") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "documentNumber").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "carNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629",
                                              name: "carNumber",
                                              id: "carNumber",
                                              "onUpdate:modelValue": ($event) => unref(data).carNumber = $event,
                                              class: unref($v).$errors.find((el) => el.$property == "carNumber") ? "err_field" : ""
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).carNumber]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-car ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "carNumber") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carNumber").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                      key: 0,
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "date" }, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "datetime-local",
                                              name: "date",
                                              id: "date",
                                              "onUpdate:modelValue": ($event) => unref(data).date = $event,
                                              class: unref($v).$errors.find((el) => el.$property == "date") ? "err_field" : "",
                                              style: { "padding-right": "0 !important" }
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).date]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-calendar")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "date") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "date").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, {
                                  dir: "rtl",
                                  class: "mt-5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_divider)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "product" }, "\u0627\u0644\u0645\u0646\u062A\u062C"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode(_component_v_autocomplete, {
                                              "return-object": "",
                                              items: unref(products).content,
                                              "item-title": "name",
                                              "item-value": "id",
                                              name: "product",
                                              id: "product",
                                              modelValue: unref(data).product,
                                              "onUpdate:modelValue": [($event) => unref(data).product = $event, ($event) => (unref(data).productType = null, unref(data).productMeasuringUnit = null)],
                                              variant: "outlined",
                                              placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C",
                                              "hide-details": "",
                                              class: [
                                                unref($v).$errors.find((el) => el.$property == "product") ? "err_field" : ""
                                              ]
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-basket")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "product") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "product").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "productType" }, "\u0627\u0644\u0641\u0631\u0632"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode(_component_v_autocomplete, {
                                              "return-object": "",
                                              items: unref(productTypes),
                                              "item-title": "productType.name",
                                              "item-value": "id",
                                              variant: "outlined",
                                              placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0632",
                                              name: "productType",
                                              id: "productType",
                                              "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                                              modelValue: unref(data).productType,
                                              "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                              "hide-details": "",
                                              class: [
                                                unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                              ]
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-sitemap ")
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
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "carWeightWith" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645",
                                              name: "carWeightWith",
                                              "onUpdate:modelValue": ($event) => unref(data).carWeightWith = $event,
                                              id: "carWeightWith",
                                              class: unref($v).$errors.find((el) => el.$property == "carWeightWith") ? "err_field" : ""
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).carWeightWith]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-weight-kilogram ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "carWeightWith") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWith").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                      key: 0,
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "carWeightWithOut" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A",
                                              name: "carWeightWithOut",
                                              "onUpdate:modelValue": ($event) => unref(data).carWeightWithOut = $event,
                                              id: "carWeightWithOut",
                                              class: unref($v).$errors.find(
                                                (el) => el.$property == "carWeightWithOut"
                                              ) ? "err_field" : ""
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).carWeightWithOut]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-weight-kilogram ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "carWeightWithOut") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWithOut").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                      key: 1,
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646",
                                              name: "typeName",
                                              id: "typeName",
                                              disabled: "",
                                              value: unref(totalWeightFromCar)
                                            }, null, 8, ["value"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-weight-kilogram ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, {
                                  dir: "rtl",
                                  class: "mt-5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 "),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_divider)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "productUnit" }, "\u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode(_component_v_autocomplete, {
                                              "item-title": "name",
                                              "item-value": "id",
                                              "return-object": "",
                                              items: unref(productUnits).content,
                                              name: "productUnit",
                                              id: "productUnit",
                                              modelValue: unref(data).productUnit,
                                              "onUpdate:modelValue": ($event) => unref(data).productUnit = $event,
                                              variant: "outlined",
                                              placeholder: "\u0627\u062E\u062A\u0631 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                                              "hide-details": "",
                                              disabled: !unref(productUnits).content || !unref(productUnits).content.length,
                                              class: [
                                                unref($v).$errors.find((el) => el.$property == "productUnit") ? "err_field" : ""
                                              ]
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled", "class"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-basket-fill ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "productUnit") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productUnit").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0648\u0632\u0646 \u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0628\u0627\u0644\u0643\u064A\u0644\u0648",
                                              name: "totalPackingWeight",
                                              id: "totalPackingWeight",
                                              "onUpdate:modelValue": ($event) => unref(data).totalPackingWeight = $event,
                                              class: unref($v).$errors.find(
                                                (el) => el.$property == "totalPackingWeight"
                                              ) ? "err_field" : ""
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).totalPackingWeight]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-weight-kilogram ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find(
                                          (el) => el.$property == "totalPackingWeight"
                                        ) ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find(
                                          (el) => el.$property == "totalPackingWeight"
                                        ).$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "typeName" }, "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A",
                                              name: "typeName",
                                              id: "typeName",
                                              value: unref(totalClearWeight),
                                              disabled: ""
                                            }, null, 8, ["value"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-weight-kilogram ")
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
                                      md: "3",
                                      lg: ""
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, {
                                  dir: "rtl",
                                  class: "mt-5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A "),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_divider)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "agingPricePerTon" }, "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            withDirectives(createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                              name: "agingPricePerTon",
                                              id: "agingPricePerTon",
                                              "onUpdate:modelValue": ($event) => unref(data).agingPricePerTon = $event,
                                              class: unref($v).$errors.find(
                                                (el) => el.$property == "agingPricePerTon"
                                              ) ? "err_field" : ""
                                            }, null, 10, ["onUpdate:modelValue"]), [
                                              [vModelText, unref(data).agingPricePerTon]
                                            ]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-currency-usd ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        unref($v).$errors.find((el) => el.$property == "agingPricePerTon") ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "err_msg"
                                        }, toDisplayString(unref($v).$errors.find((el) => el.$property == "agingPricePerTon").$message), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                              name: "totalPackingWeight",
                                              id: "totalPackingWeight",
                                              value: unref(agingTotalPrice),
                                              disabled: ""
                                            }, null, 8, ["value"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-currency-usd ")
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
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629",
                                              name: "totalPackingWeight",
                                              id: "totalPackingWeight",
                                              value: unref(getTaxes).docTax.value,
                                              disabled: ""
                                            }, null, 8, ["value"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-currency-usd ")
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
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628",
                                              name: "totalPackingWeight",
                                              id: "totalPackingWeight",
                                              value: unref(getTaxes).agroTax.value,
                                              disabled: ""
                                            }, null, 8, ["value"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-currency-usd ")
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
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645",
                                              name: "totalPackingWeight",
                                              id: "totalPackingWeight",
                                              disabled: "",
                                              value: unref(invoicTotalTaxesCut)
                                            }, null, 8, ["value"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-currency-usd ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, {
                                  dir: "rtl",
                                  class: "mt-5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 "),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_divider)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645",
                                              name: "totalPackingWeight",
                                              id: "totalPackingWeight",
                                              value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo : 0,
                                              disabled: ""
                                            }, null, 8, ["value"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-currency-usd ")
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
                                      md: "3",
                                      lg: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "field_container" }, [
                                          createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645"),
                                          createVNode("div", { class: "input_parent position-relative" }, [
                                            createVNode("input", {
                                              type: "text",
                                              placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645",
                                              name: "totalPackingWeight",
                                              id: "totalPackingWeight",
                                              disabled: "",
                                              value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo - unref(invoicTotalTaxesCut) : 0
                                            }, null, 8, ["value"]),
                                            createVNode(_component_v_icon, { class: "position-absolute" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-currency-usd ")
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
                                      md: "3",
                                      lg: ""
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      lg: ""
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="actions text-center mt-7"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "red",
                          class: "mr-3",
                          onClick: ($event) => dialog.value = false,
                          disabled: unref(btnLoading),
                          width: "200",
                          height: "50",
                          rounded: "",
                          elevation: "0"
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
                          width: "200",
                          height: "50",
                          rounded: "",
                          elevation: "0",
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
                          createVNode(_component_v_container, { fluid: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { dir: "rtl" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0633\u0627\u0633\u064A\u0629"),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_divider)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "granary" }, "\u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode(_component_v_autocomplete, {
                                            "return-object": "",
                                            items: unref(granaries).content,
                                            "item-title": "name",
                                            "item-value": "id",
                                            variant: "outlined",
                                            placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
                                            id: "granary",
                                            modelValue: unref(data).granary,
                                            "onUpdate:modelValue": ($event) => unref(data).granary = $event,
                                            "hide-details": "",
                                            class: [
                                              unref($v).$errors.find((el) => el.$property == "granary") ? "err_field" : ""
                                            ]
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-store-24-hour")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "granary") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "granary").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "supplier" }, "\u0627\u0644\u0645\u0648\u0631\u062F"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode(_component_v_autocomplete, {
                                            "return-object": "",
                                            items: unref(suppliers).content,
                                            "item-title": "name",
                                            "item-value": "id",
                                            variant: "outlined",
                                            placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F",
                                            name: "supplier",
                                            id: "supplier",
                                            modelValue: unref(data).supplier,
                                            "onUpdate:modelValue": ($event) => unref(data).supplier = $event,
                                            "hide-details": "",
                                            class: [
                                              unref($v).$errors.find((el) => el.$property == "supplier") ? "err_field" : ""
                                            ]
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-account-cowboy-hat ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "supplier") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "supplier").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "documentNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F",
                                            name: "documentNumber",
                                            id: "documentNumber",
                                            "onUpdate:modelValue": ($event) => unref(data).documentNumber = $event,
                                            class: unref($v).$errors.find(
                                              (el) => el.$property == "documentNumber"
                                            ) ? "err_field" : ""
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).documentNumber]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-file ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "documentNumber") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "documentNumber").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "carNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629",
                                            name: "carNumber",
                                            id: "carNumber",
                                            "onUpdate:modelValue": ($event) => unref(data).carNumber = $event,
                                            class: unref($v).$errors.find((el) => el.$property == "carNumber") ? "err_field" : ""
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).carNumber]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-car ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "carNumber") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carNumber").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                    key: 0,
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "date" }, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "datetime-local",
                                            name: "date",
                                            id: "date",
                                            "onUpdate:modelValue": ($event) => unref(data).date = $event,
                                            class: unref($v).$errors.find((el) => el.$property == "date") ? "err_field" : "",
                                            style: { "padding-right": "0 !important" }
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).date]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-calendar")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "date") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "date").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, {
                                dir: "rtl",
                                class: "mt-5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_divider)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "product" }, "\u0627\u0644\u0645\u0646\u062A\u062C"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode(_component_v_autocomplete, {
                                            "return-object": "",
                                            items: unref(products).content,
                                            "item-title": "name",
                                            "item-value": "id",
                                            name: "product",
                                            id: "product",
                                            modelValue: unref(data).product,
                                            "onUpdate:modelValue": [($event) => unref(data).product = $event, ($event) => (unref(data).productType = null, unref(data).productMeasuringUnit = null)],
                                            variant: "outlined",
                                            placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C",
                                            "hide-details": "",
                                            class: [
                                              unref($v).$errors.find((el) => el.$property == "product") ? "err_field" : ""
                                            ]
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-basket")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "product") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "product").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "productType" }, "\u0627\u0644\u0641\u0631\u0632"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode(_component_v_autocomplete, {
                                            "return-object": "",
                                            items: unref(productTypes),
                                            "item-title": "productType.name",
                                            "item-value": "id",
                                            variant: "outlined",
                                            placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0632",
                                            name: "productType",
                                            id: "productType",
                                            "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                                            modelValue: unref(data).productType,
                                            "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                            "hide-details": "",
                                            class: [
                                              unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                            ]
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-sitemap ")
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
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "carWeightWith" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645",
                                            name: "carWeightWith",
                                            "onUpdate:modelValue": ($event) => unref(data).carWeightWith = $event,
                                            id: "carWeightWith",
                                            class: unref($v).$errors.find((el) => el.$property == "carWeightWith") ? "err_field" : ""
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).carWeightWith]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-weight-kilogram ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "carWeightWith") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWith").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                    key: 0,
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "carWeightWithOut" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A",
                                            name: "carWeightWithOut",
                                            "onUpdate:modelValue": ($event) => unref(data).carWeightWithOut = $event,
                                            id: "carWeightWithOut",
                                            class: unref($v).$errors.find(
                                              (el) => el.$property == "carWeightWithOut"
                                            ) ? "err_field" : ""
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).carWeightWithOut]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-weight-kilogram ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "carWeightWithOut") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWithOut").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                    key: 1,
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646",
                                            name: "typeName",
                                            id: "typeName",
                                            disabled: "",
                                            value: unref(totalWeightFromCar)
                                          }, null, 8, ["value"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-weight-kilogram ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, {
                                dir: "rtl",
                                class: "mt-5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 "),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_divider)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "productUnit" }, "\u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode(_component_v_autocomplete, {
                                            "item-title": "name",
                                            "item-value": "id",
                                            "return-object": "",
                                            items: unref(productUnits).content,
                                            name: "productUnit",
                                            id: "productUnit",
                                            modelValue: unref(data).productUnit,
                                            "onUpdate:modelValue": ($event) => unref(data).productUnit = $event,
                                            variant: "outlined",
                                            placeholder: "\u0627\u062E\u062A\u0631 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                                            "hide-details": "",
                                            disabled: !unref(productUnits).content || !unref(productUnits).content.length,
                                            class: [
                                              unref($v).$errors.find((el) => el.$property == "productUnit") ? "err_field" : ""
                                            ]
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled", "class"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-basket-fill ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "productUnit") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productUnit").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0648\u0632\u0646 \u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0628\u0627\u0644\u0643\u064A\u0644\u0648",
                                            name: "totalPackingWeight",
                                            id: "totalPackingWeight",
                                            "onUpdate:modelValue": ($event) => unref(data).totalPackingWeight = $event,
                                            class: unref($v).$errors.find(
                                              (el) => el.$property == "totalPackingWeight"
                                            ) ? "err_field" : ""
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).totalPackingWeight]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-weight-kilogram ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find(
                                        (el) => el.$property == "totalPackingWeight"
                                      ) ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find(
                                        (el) => el.$property == "totalPackingWeight"
                                      ).$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "typeName" }, "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A",
                                            name: "typeName",
                                            id: "typeName",
                                            value: unref(totalClearWeight),
                                            disabled: ""
                                          }, null, 8, ["value"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-weight-kilogram ")
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
                                    md: "3",
                                    lg: ""
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, {
                                dir: "rtl",
                                class: "mt-5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A "),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_divider)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "agingPricePerTon" }, "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          withDirectives(createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                            name: "agingPricePerTon",
                                            id: "agingPricePerTon",
                                            "onUpdate:modelValue": ($event) => unref(data).agingPricePerTon = $event,
                                            class: unref($v).$errors.find(
                                              (el) => el.$property == "agingPricePerTon"
                                            ) ? "err_field" : ""
                                          }, null, 10, ["onUpdate:modelValue"]), [
                                            [vModelText, unref(data).agingPricePerTon]
                                          ]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-currency-usd ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      unref($v).$errors.find((el) => el.$property == "agingPricePerTon") ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "err_msg"
                                      }, toDisplayString(unref($v).$errors.find((el) => el.$property == "agingPricePerTon").$message), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                            name: "totalPackingWeight",
                                            id: "totalPackingWeight",
                                            value: unref(agingTotalPrice),
                                            disabled: ""
                                          }, null, 8, ["value"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-currency-usd ")
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
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629",
                                            name: "totalPackingWeight",
                                            id: "totalPackingWeight",
                                            value: unref(getTaxes).docTax.value,
                                            disabled: ""
                                          }, null, 8, ["value"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-currency-usd ")
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
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628",
                                            name: "totalPackingWeight",
                                            id: "totalPackingWeight",
                                            value: unref(getTaxes).agroTax.value,
                                            disabled: ""
                                          }, null, 8, ["value"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-currency-usd ")
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
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645",
                                            name: "totalPackingWeight",
                                            id: "totalPackingWeight",
                                            disabled: "",
                                            value: unref(invoicTotalTaxesCut)
                                          }, null, 8, ["value"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-currency-usd ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, {
                                dir: "rtl",
                                class: "mt-5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 "),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_divider)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645",
                                            name: "totalPackingWeight",
                                            id: "totalPackingWeight",
                                            value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo : 0,
                                            disabled: ""
                                          }, null, 8, ["value"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-currency-usd ")
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
                                    md: "3",
                                    lg: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "field_container" }, [
                                        createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645"),
                                        createVNode("div", { class: "input_parent position-relative" }, [
                                          createVNode("input", {
                                            type: "text",
                                            placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645",
                                            name: "totalPackingWeight",
                                            id: "totalPackingWeight",
                                            disabled: "",
                                            value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo - unref(invoicTotalTaxesCut) : 0
                                          }, null, 8, ["value"]),
                                          createVNode(_component_v_icon, { class: "position-absolute" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-currency-usd ")
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
                                    md: "3",
                                    lg: ""
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    lg: ""
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "actions text-center mt-7" }, [
                            createVNode(_component_v_btn, {
                              color: "red",
                              class: "mr-3",
                              onClick: ($event) => dialog.value = false,
                              disabled: unref(btnLoading),
                              width: "200",
                              height: "50",
                              rounded: "",
                              elevation: "0"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"]),
                            createVNode(_component_v_btn, {
                              color: "green",
                              width: "200",
                              height: "50",
                              rounded: "",
                              elevation: "0",
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
                        createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0641\u0627\u062A\u0648\u0631\u0629 \u062A\u0648\u0631\u064A\u062F" : "\u0627\u0636\u0627\u0641\u0629 \u0641\u0627\u062A\u0648\u0631\u0629 \u062A\u0648\u0631\u064A\u062F"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_form, {
                      class: "pa-5",
                      onSubmit: withModifiers(submitData, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, { fluid: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, { dir: "rtl" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0633\u0627\u0633\u064A\u0629"),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_divider)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "granary" }, "\u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode(_component_v_autocomplete, {
                                          "return-object": "",
                                          items: unref(granaries).content,
                                          "item-title": "name",
                                          "item-value": "id",
                                          variant: "outlined",
                                          placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
                                          id: "granary",
                                          modelValue: unref(data).granary,
                                          "onUpdate:modelValue": ($event) => unref(data).granary = $event,
                                          "hide-details": "",
                                          class: [
                                            unref($v).$errors.find((el) => el.$property == "granary") ? "err_field" : ""
                                          ]
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-store-24-hour")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "granary") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "granary").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "supplier" }, "\u0627\u0644\u0645\u0648\u0631\u062F"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode(_component_v_autocomplete, {
                                          "return-object": "",
                                          items: unref(suppliers).content,
                                          "item-title": "name",
                                          "item-value": "id",
                                          variant: "outlined",
                                          placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F",
                                          name: "supplier",
                                          id: "supplier",
                                          modelValue: unref(data).supplier,
                                          "onUpdate:modelValue": ($event) => unref(data).supplier = $event,
                                          "hide-details": "",
                                          class: [
                                            unref($v).$errors.find((el) => el.$property == "supplier") ? "err_field" : ""
                                          ]
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-account-cowboy-hat ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "supplier") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "supplier").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "documentNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F",
                                          name: "documentNumber",
                                          id: "documentNumber",
                                          "onUpdate:modelValue": ($event) => unref(data).documentNumber = $event,
                                          class: unref($v).$errors.find(
                                            (el) => el.$property == "documentNumber"
                                          ) ? "err_field" : ""
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).documentNumber]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-file ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "documentNumber") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "documentNumber").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "carNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629",
                                          name: "carNumber",
                                          id: "carNumber",
                                          "onUpdate:modelValue": ($event) => unref(data).carNumber = $event,
                                          class: unref($v).$errors.find((el) => el.$property == "carNumber") ? "err_field" : ""
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).carNumber]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-car ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "carNumber") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carNumber").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                  key: 0,
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "date" }, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "datetime-local",
                                          name: "date",
                                          id: "date",
                                          "onUpdate:modelValue": ($event) => unref(data).date = $event,
                                          class: unref($v).$errors.find((el) => el.$property == "date") ? "err_field" : "",
                                          style: { "padding-right": "0 !important" }
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).date]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-calendar")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "date") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "date").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, {
                              dir: "rtl",
                              class: "mt-5"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_divider)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "product" }, "\u0627\u0644\u0645\u0646\u062A\u062C"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode(_component_v_autocomplete, {
                                          "return-object": "",
                                          items: unref(products).content,
                                          "item-title": "name",
                                          "item-value": "id",
                                          name: "product",
                                          id: "product",
                                          modelValue: unref(data).product,
                                          "onUpdate:modelValue": [($event) => unref(data).product = $event, ($event) => (unref(data).productType = null, unref(data).productMeasuringUnit = null)],
                                          variant: "outlined",
                                          placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C",
                                          "hide-details": "",
                                          class: [
                                            unref($v).$errors.find((el) => el.$property == "product") ? "err_field" : ""
                                          ]
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-basket")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "product") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "product").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "productType" }, "\u0627\u0644\u0641\u0631\u0632"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode(_component_v_autocomplete, {
                                          "return-object": "",
                                          items: unref(productTypes),
                                          "item-title": "productType.name",
                                          "item-value": "id",
                                          variant: "outlined",
                                          placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0632",
                                          name: "productType",
                                          id: "productType",
                                          "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                                          modelValue: unref(data).productType,
                                          "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                          "hide-details": "",
                                          class: [
                                            unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                          ]
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-sitemap ")
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
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "carWeightWith" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645",
                                          name: "carWeightWith",
                                          "onUpdate:modelValue": ($event) => unref(data).carWeightWith = $event,
                                          id: "carWeightWith",
                                          class: unref($v).$errors.find((el) => el.$property == "carWeightWith") ? "err_field" : ""
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).carWeightWith]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-weight-kilogram ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "carWeightWith") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWith").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                  key: 0,
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "carWeightWithOut" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A",
                                          name: "carWeightWithOut",
                                          "onUpdate:modelValue": ($event) => unref(data).carWeightWithOut = $event,
                                          id: "carWeightWithOut",
                                          class: unref($v).$errors.find(
                                            (el) => el.$property == "carWeightWithOut"
                                          ) ? "err_field" : ""
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).carWeightWithOut]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-weight-kilogram ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "carWeightWithOut") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWithOut").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                  key: 1,
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646",
                                          name: "typeName",
                                          id: "typeName",
                                          disabled: "",
                                          value: unref(totalWeightFromCar)
                                        }, null, 8, ["value"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-weight-kilogram ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, {
                              dir: "rtl",
                              class: "mt-5"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 "),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_divider)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "productUnit" }, "\u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode(_component_v_autocomplete, {
                                          "item-title": "name",
                                          "item-value": "id",
                                          "return-object": "",
                                          items: unref(productUnits).content,
                                          name: "productUnit",
                                          id: "productUnit",
                                          modelValue: unref(data).productUnit,
                                          "onUpdate:modelValue": ($event) => unref(data).productUnit = $event,
                                          variant: "outlined",
                                          placeholder: "\u0627\u062E\u062A\u0631 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                                          "hide-details": "",
                                          disabled: !unref(productUnits).content || !unref(productUnits).content.length,
                                          class: [
                                            unref($v).$errors.find((el) => el.$property == "productUnit") ? "err_field" : ""
                                          ]
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled", "class"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-basket-fill ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "productUnit") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productUnit").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0648\u0632\u0646 \u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0628\u0627\u0644\u0643\u064A\u0644\u0648",
                                          name: "totalPackingWeight",
                                          id: "totalPackingWeight",
                                          "onUpdate:modelValue": ($event) => unref(data).totalPackingWeight = $event,
                                          class: unref($v).$errors.find(
                                            (el) => el.$property == "totalPackingWeight"
                                          ) ? "err_field" : ""
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).totalPackingWeight]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-weight-kilogram ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find(
                                      (el) => el.$property == "totalPackingWeight"
                                    ) ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find(
                                      (el) => el.$property == "totalPackingWeight"
                                    ).$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "typeName" }, "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A",
                                          name: "typeName",
                                          id: "typeName",
                                          value: unref(totalClearWeight),
                                          disabled: ""
                                        }, null, 8, ["value"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-weight-kilogram ")
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
                                  md: "3",
                                  lg: ""
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, {
                              dir: "rtl",
                              class: "mt-5"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A "),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_divider)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "agingPricePerTon" }, "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                          name: "agingPricePerTon",
                                          id: "agingPricePerTon",
                                          "onUpdate:modelValue": ($event) => unref(data).agingPricePerTon = $event,
                                          class: unref($v).$errors.find(
                                            (el) => el.$property == "agingPricePerTon"
                                          ) ? "err_field" : ""
                                        }, null, 10, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(data).agingPricePerTon]
                                        ]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-currency-usd ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    unref($v).$errors.find((el) => el.$property == "agingPricePerTon") ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "err_msg"
                                    }, toDisplayString(unref($v).$errors.find((el) => el.$property == "agingPricePerTon").$message), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                          name: "totalPackingWeight",
                                          id: "totalPackingWeight",
                                          value: unref(agingTotalPrice),
                                          disabled: ""
                                        }, null, 8, ["value"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-currency-usd ")
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
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629",
                                          name: "totalPackingWeight",
                                          id: "totalPackingWeight",
                                          value: unref(getTaxes).docTax.value,
                                          disabled: ""
                                        }, null, 8, ["value"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-currency-usd ")
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
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628",
                                          name: "totalPackingWeight",
                                          id: "totalPackingWeight",
                                          value: unref(getTaxes).agroTax.value,
                                          disabled: ""
                                        }, null, 8, ["value"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-currency-usd ")
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
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645",
                                          name: "totalPackingWeight",
                                          id: "totalPackingWeight",
                                          disabled: "",
                                          value: unref(invoicTotalTaxesCut)
                                        }, null, 8, ["value"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-currency-usd ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, {
                              dir: "rtl",
                              class: "mt-5"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 "),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_divider)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645",
                                          name: "totalPackingWeight",
                                          id: "totalPackingWeight",
                                          value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo : 0,
                                          disabled: ""
                                        }, null, 8, ["value"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-currency-usd ")
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
                                  md: "3",
                                  lg: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "field_container" }, [
                                      createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645"),
                                      createVNode("div", { class: "input_parent position-relative" }, [
                                        createVNode("input", {
                                          type: "text",
                                          placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645",
                                          name: "totalPackingWeight",
                                          id: "totalPackingWeight",
                                          disabled: "",
                                          value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo - unref(invoicTotalTaxesCut) : 0
                                        }, null, 8, ["value"]),
                                        createVNode(_component_v_icon, { class: "position-absolute" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-currency-usd ")
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
                                  md: "3",
                                  lg: ""
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  lg: ""
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "actions text-center mt-7" }, [
                          createVNode(_component_v_btn, {
                            color: "red",
                            class: "mr-3",
                            onClick: ($event) => dialog.value = false,
                            disabled: unref(btnLoading),
                            width: "200",
                            height: "50",
                            rounded: "",
                            elevation: "0"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                            ]),
                            _: 1
                          }, 8, ["onClick", "disabled"]),
                          createVNode(_component_v_btn, {
                            color: "green",
                            width: "200",
                            height: "50",
                            rounded: "",
                            elevation: "0",
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
              createVNode(_component_v_card, { style: { "border-radius": "unset !important" } }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, {
                    class: "mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",
                    style: { "font-size": "22px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.toUpdate ? "\u062A\u0639\u062F\u064A\u0644 \u0641\u0627\u062A\u0648\u0631\u0629 \u062A\u0648\u0631\u064A\u062F" : "\u0627\u0636\u0627\u0641\u0629 \u0641\u0627\u062A\u0648\u0631\u0629 \u062A\u0648\u0631\u064A\u062F"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_form, {
                    class: "pa-5",
                    onSubmit: withModifiers(submitData, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, { fluid: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, { dir: "rtl" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0633\u0627\u0633\u064A\u0629"),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_divider)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "granary" }, "\u0627\u0644\u0635\u0648\u0645\u0639\u0629"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode(_component_v_autocomplete, {
                                        "return-object": "",
                                        items: unref(granaries).content,
                                        "item-title": "name",
                                        "item-value": "id",
                                        variant: "outlined",
                                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0648\u0645\u0639\u0629",
                                        id: "granary",
                                        modelValue: unref(data).granary,
                                        "onUpdate:modelValue": ($event) => unref(data).granary = $event,
                                        "hide-details": "",
                                        class: [
                                          unref($v).$errors.find((el) => el.$property == "granary") ? "err_field" : ""
                                        ]
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-store-24-hour")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "granary") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "granary").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "supplier" }, "\u0627\u0644\u0645\u0648\u0631\u062F"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode(_component_v_autocomplete, {
                                        "return-object": "",
                                        items: unref(suppliers).content,
                                        "item-title": "name",
                                        "item-value": "id",
                                        variant: "outlined",
                                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0631\u062F",
                                        name: "supplier",
                                        id: "supplier",
                                        modelValue: unref(data).supplier,
                                        "onUpdate:modelValue": ($event) => unref(data).supplier = $event,
                                        "hide-details": "",
                                        class: [
                                          unref($v).$errors.find((el) => el.$property == "supplier") ? "err_field" : ""
                                        ]
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account-cowboy-hat ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "supplier") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "supplier").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "documentNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u062F",
                                        name: "documentNumber",
                                        id: "documentNumber",
                                        "onUpdate:modelValue": ($event) => unref(data).documentNumber = $event,
                                        class: unref($v).$errors.find(
                                          (el) => el.$property == "documentNumber"
                                        ) ? "err_field" : ""
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).documentNumber]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-file ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "documentNumber") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "documentNumber").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "carNumber" }, "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629",
                                        name: "carNumber",
                                        id: "carNumber",
                                        "onUpdate:modelValue": ($event) => unref(data).carNumber = $event,
                                        class: unref($v).$errors.find((el) => el.$property == "carNumber") ? "err_field" : ""
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).carNumber]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-car ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "carNumber") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carNumber").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                key: 0,
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "date" }, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "datetime-local",
                                        name: "date",
                                        id: "date",
                                        "onUpdate:modelValue": ($event) => unref(data).date = $event,
                                        class: unref($v).$errors.find((el) => el.$property == "date") ? "err_field" : "",
                                        style: { "padding-right": "0 !important" }
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).date]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-calendar")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "date") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "date").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, {
                            dir: "rtl",
                            class: "mt-5"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C"),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_divider)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "product" }, "\u0627\u0644\u0645\u0646\u062A\u062C"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode(_component_v_autocomplete, {
                                        "return-object": "",
                                        items: unref(products).content,
                                        "item-title": "name",
                                        "item-value": "id",
                                        name: "product",
                                        id: "product",
                                        modelValue: unref(data).product,
                                        "onUpdate:modelValue": [($event) => unref(data).product = $event, ($event) => (unref(data).productType = null, unref(data).productMeasuringUnit = null)],
                                        variant: "outlined",
                                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C",
                                        "hide-details": "",
                                        class: [
                                          unref($v).$errors.find((el) => el.$property == "product") ? "err_field" : ""
                                        ]
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-basket")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "product") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "product").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "productType" }, "\u0627\u0644\u0641\u0631\u0632"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode(_component_v_autocomplete, {
                                        "return-object": "",
                                        items: unref(productTypes),
                                        "item-title": "productType.name",
                                        "item-value": "id",
                                        variant: "outlined",
                                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0632",
                                        name: "productType",
                                        id: "productType",
                                        "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                                        modelValue: unref(data).productType,
                                        "onUpdate:modelValue": ($event) => unref(data).productType = $event,
                                        "hide-details": "",
                                        class: [
                                          unref($v).$errors.find((el) => el.$property == "productType") ? "err_field" : ""
                                        ]
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "class"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-sitemap ")
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
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "carWeightWith" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0642\u0627\u0626\u0645",
                                        name: "carWeightWith",
                                        "onUpdate:modelValue": ($event) => unref(data).carWeightWith = $event,
                                        id: "carWeightWith",
                                        class: unref($v).$errors.find((el) => el.$property == "carWeightWith") ? "err_field" : ""
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).carWeightWith]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-weight-kilogram ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "carWeightWith") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWith").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                key: 0,
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "carWeightWithOut" }, "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0641\u0627\u0631\u063A",
                                        name: "carWeightWithOut",
                                        "onUpdate:modelValue": ($event) => unref(data).carWeightWithOut = $event,
                                        id: "carWeightWithOut",
                                        class: unref($v).$errors.find(
                                          (el) => el.$property == "carWeightWithOut"
                                        ) ? "err_field" : ""
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).carWeightWithOut]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-weight-kilogram ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "carWeightWithOut") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "carWeightWithOut").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              unref(clients).content ? (openBlock(), createBlock(_component_v_col, {
                                key: 1,
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0635\u0627\u0641\u064A \u0627\u0644\u0648\u0632\u0646",
                                        name: "typeName",
                                        id: "typeName",
                                        disabled: "",
                                        value: unref(totalWeightFromCar)
                                      }, null, 8, ["value"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-weight-kilogram ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, {
                            dir: "rtl",
                            class: "mt-5"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 "),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_divider)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "productUnit" }, "\u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode(_component_v_autocomplete, {
                                        "item-title": "name",
                                        "item-value": "id",
                                        "return-object": "",
                                        items: unref(productUnits).content,
                                        name: "productUnit",
                                        id: "productUnit",
                                        modelValue: unref(data).productUnit,
                                        "onUpdate:modelValue": ($event) => unref(data).productUnit = $event,
                                        variant: "outlined",
                                        placeholder: "\u0627\u062E\u062A\u0631 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",
                                        "hide-details": "",
                                        disabled: !unref(productUnits).content || !unref(productUnits).content.length,
                                        class: [
                                          unref($v).$errors.find((el) => el.$property == "productUnit") ? "err_field" : ""
                                        ]
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled", "class"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-basket-fill ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "productUnit") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "productUnit").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0648\u0632\u0646 \u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0628\u0627\u0644\u0643\u064A\u0644\u0648",
                                        name: "totalPackingWeight",
                                        id: "totalPackingWeight",
                                        "onUpdate:modelValue": ($event) => unref(data).totalPackingWeight = $event,
                                        class: unref($v).$errors.find(
                                          (el) => el.$property == "totalPackingWeight"
                                        ) ? "err_field" : ""
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).totalPackingWeight]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-weight-kilogram ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find(
                                    (el) => el.$property == "totalPackingWeight"
                                  ) ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find(
                                    (el) => el.$property == "totalPackingWeight"
                                  ).$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "typeName" }, "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0627\u0644\u0635\u0627\u0641\u064A \u0628\u0639\u062F \u062E\u0635\u0645 \u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0627\u062A",
                                        name: "typeName",
                                        id: "typeName",
                                        value: unref(totalClearWeight),
                                        disabled: ""
                                      }, null, 8, ["value"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-weight-kilogram ")
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
                                md: "3",
                                lg: ""
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, {
                            dir: "rtl",
                            class: "mt-5"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A "),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_divider)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "agingPricePerTon" }, "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0633\u0639\u0631 \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                        name: "agingPricePerTon",
                                        id: "agingPricePerTon",
                                        "onUpdate:modelValue": ($event) => unref(data).agingPricePerTon = $event,
                                        class: unref($v).$errors.find(
                                          (el) => el.$property == "agingPricePerTon"
                                        ) ? "err_field" : ""
                                      }, null, 10, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(data).agingPricePerTon]
                                      ]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-currency-usd ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  unref($v).$errors.find((el) => el.$property == "agingPricePerTon") ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "err_msg"
                                  }, toDisplayString(unref($v).$errors.find((el) => el.$property == "agingPricePerTon").$message), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u062A\u064A\u0642",
                                        name: "totalPackingWeight",
                                        id: "totalPackingWeight",
                                        value: unref(agingTotalPrice),
                                        disabled: ""
                                      }, null, 8, ["value"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-currency-usd ")
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
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629",
                                        name: "totalPackingWeight",
                                        id: "totalPackingWeight",
                                        value: unref(getTaxes).docTax.value,
                                        disabled: ""
                                      }, null, 8, ["value"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-currency-usd ")
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
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "totalPackingWeight" }, "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0642\u064A\u0645\u0629 \u062E\u0635\u0645 \u0627\u0644\u0627\u0631\u062F\u0628",
                                        name: "totalPackingWeight",
                                        id: "totalPackingWeight",
                                        value: unref(getTaxes).agroTax.value,
                                        disabled: ""
                                      }, null, 8, ["value"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-currency-usd ")
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
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "totalPackingWeight" }, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062E\u0635\u0645",
                                        name: "totalPackingWeight",
                                        id: "totalPackingWeight",
                                        disabled: "",
                                        value: unref(invoicTotalTaxesCut)
                                      }, null, 8, ["value"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-currency-usd ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, {
                            dir: "rtl",
                            class: "mt-5"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { style: { "font-size": "23px", "font-weight": "700" } }, " \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 "),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_divider)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645",
                                        name: "totalPackingWeight",
                                        id: "totalPackingWeight",
                                        value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo : 0,
                                        disabled: ""
                                      }, null, 8, ["value"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-currency-usd ")
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
                                md: "3",
                                lg: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "field_container" }, [
                                    createVNode("label", { for: "totalPackingWeight" }, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645"),
                                    createVNode("div", { class: "input_parent position-relative" }, [
                                      createVNode("input", {
                                        type: "text",
                                        placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645",
                                        name: "totalPackingWeight",
                                        id: "totalPackingWeight",
                                        disabled: "",
                                        value: unref(invoicTotalTaxesCut) ? unref(totalClearWeight) * unref(data).productType.pricePerKilo - unref(invoicTotalTaxesCut) : 0
                                      }, null, 8, ["value"]),
                                      createVNode(_component_v_icon, { class: "position-absolute" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-currency-usd ")
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
                                md: "3",
                                lg: ""
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "3",
                                lg: ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "actions text-center mt-7" }, [
                        createVNode(_component_v_btn, {
                          color: "red",
                          class: "mr-3",
                          onClick: ($event) => dialog.value = false,
                          disabled: unref(btnLoading),
                          width: "200",
                          height: "50",
                          rounded: "",
                          elevation: "0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0627\u0644\u063A\u0627\u0621")
                          ]),
                          _: 1
                        }, 8, ["onClick", "disabled"]),
                        createVNode(_component_v_btn, {
                          color: "green",
                          width: "200",
                          height: "50",
                          rounded: "",
                          elevation: "0",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/export_invoices/Update.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Listing",
  __ssrInlineRender: true,
  props: ["invoices", "loading"],
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
      { title: "\u0627\u0644\u062A\u0627\u0631\u064A\u062E", key: "invoiceDate" },
      { title: "\u0627\u0644\u0635\u0648\u0645\u0639\u0629", key: "granary.name" },
      { title: "\u0627\u0644\u0645\u0648\u0631\u062F", key: "supplier.name" },
      { title: "\u0627\u0644\u0645\u0633\u062A\u0646\u062F", key: "documentNumber" },
      { title: "\u0631\u0642\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629", key: "carNumber" },
      { title: "\u0645\u0646\u062A\u062C / \u0641\u0631\u0632", key: "productDetails" },
      { title: "\u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645", key: "totalInvoicePrice" },
      { title: "\u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645", key: "totalInvoicePriceAfterDiscount" }
      // { title: "اجراء", key: "actions" },
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
        title: "\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F",
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
      const _component_export_invoices_update = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard_invoices_listing" }, _attrs))}><div class="page_toolbar d-flex align-center justify-space-between"><div class="toolbar_btns">`);
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
            if (__props.invoices) {
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
                            items: __props.invoices.content,
                            loading: __props.loading,
                            "items-per-page": unref(perPage),
                            "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                            page: unref(page),
                            "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                            "items-length": __props.invoices.totalElements ? __props.invoices.totalElements : 0,
                            "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                            "show-current-page": "",
                            id: "invoices_table"
                          }, {
                            "item.index": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.index + 1)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.index + 1), 1)
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
                            "item.invoiceDate": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(moment)(item.selectable.date).format("DD/MM/YYYY"))} <br${_scopeId4}> ${ssrInterpolate(unref(moment)(item.selectable.date).format("hh:mm"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(moment)(item.selectable.date).format("DD/MM/YYYY")) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" " + toDisplayString(unref(moment)(item.selectable.date).format("hh:mm")), 1)
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
                              items: __props.invoices.content,
                              loading: __props.loading,
                              "items-per-page": unref(perPage),
                              "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                              page: unref(page),
                              "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                              "items-length": __props.invoices.totalElements ? __props.invoices.totalElements : 0,
                              "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                              "show-current-page": "",
                              id: "invoices_table"
                            }, {
                              "item.index": withCtx(({ item }) => [
                                createTextVNode(toDisplayString(item.index + 1), 1)
                              ]),
                              loading: withCtx(() => [
                                createVNode(unref(VSkeletonLoader), { type: "table-row@4" })
                              ]),
                              "item.invoiceDate": withCtx(({ item }) => [
                                createTextVNode(toDisplayString(unref(moment)(item.selectable.date).format("DD/MM/YYYY")) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" " + toDisplayString(unref(moment)(item.selectable.date).format("hh:mm")), 1)
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
                            id: "invoices_table"
                          }, {
                            "item.index": withCtx(({ item }) => [
                              createTextVNode(toDisplayString(item.index + 1), 1)
                            ]),
                            loading: withCtx(() => [
                              createVNode(unref(VSkeletonLoader), { type: "table-row@4" })
                            ]),
                            "item.invoiceDate": withCtx(({ item }) => [
                              createTextVNode(toDisplayString(unref(moment)(item.selectable.date).format("DD/MM/YYYY")) + " ", 1),
                              createVNode("br"),
                              createTextVNode(" " + toDisplayString(unref(moment)(item.selectable.date).format("hh:mm")), 1)
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
                        items: __props.invoices.content,
                        loading: __props.loading,
                        "items-per-page": unref(perPage),
                        "onUpdate:itemsPerPage": ($event) => isRef(perPage) ? perPage.value = $event : null,
                        page: unref(page),
                        "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                        "items-length": __props.invoices.totalElements ? __props.invoices.totalElements : 0,
                        "no-data-text": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
                        "show-current-page": "",
                        id: "invoices_table"
                      }, {
                        "item.index": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(item.index + 1), 1)
                        ]),
                        loading: withCtx(() => [
                          createVNode(unref(VSkeletonLoader), { type: "table-row@4" })
                        ]),
                        "item.invoiceDate": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(unref(moment)(item.selectable.date).format("DD/MM/YYYY")) + " ", 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(unref(moment)(item.selectable.date).format("hh:mm")), 1)
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
      if (unref(openUpdate)) {
        _push(ssrRenderComponent(_component_export_invoices_update, {
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
        _push(ssrRenderComponent(_component_export_invoices_update, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/export_invoices/Listing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const invoicesModule = invoiceModule();
    const { invoices } = storeToRefs(invoicesModule);
    const loading = ref(true);
    const getData = async (page, limit) => {
      loading.value = true;
      await invoicesModule.doGetInvoices(page - 1, limit);
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ExportInvoicesListing = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard_tests_page mb-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ExportInvoicesListing, {
        invoices: unref(invoices),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/export_invoices/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-867d59bb.mjs.map
