import { ref, resolveComponent, mergeProps, withCtx, unref, renderSlot, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { R as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import _sfc_main$1 from './DashboardNav-2e3a9449.mjs';
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
import './AppSideDrawer-6f452c96.mjs';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const currentWidth = ref(1200);
    const currentHeight = ref(800);
    ref(0);
    ref(true);
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_layout = resolveComponent("v-layout");
      const _component_v_main = resolveComponent("v-main");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout_page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_layout, { class: "position-relative" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(route).name != "signin") {
              _push2(ssrRenderComponent(_sfc_main$1, { currentWidth: unref(currentWidth) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_v_main, {
              style: `background: rgb(239 239 239 / 43%) !important;
         min-height: ${unref(currentHeight)}px`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              unref(route).name != "signin" ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                currentWidth: unref(currentWidth)
              }, null, 8, ["currentWidth"])) : createCommentVNode("", true),
              createVNode(_component_v_main, {
                style: `background: rgb(239 239 239 / 43%) !important;
         min-height: ${unref(currentHeight)}px`
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["style"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-ff75537f.mjs.map
