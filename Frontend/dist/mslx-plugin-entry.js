(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("@keyframes t-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.t-icon{display:inline-block;vertical-align:middle;width:1em;height:1em}.t-icon:before{font-family:unset}.t-icon-loading{animation:t-spin 1s linear infinite}.t-icon.t-size-s,i.t-size-s{font-size:14px}.t-icon.t-size-m,i.t-size-m{font-size:16px}.t-icon.t-size-l,i.t-size-l{font-size:18px}.visible[data-v-a3002477]{visibility:visible}.m-0[data-v-a3002477]{margin:0}.\\[\\&_\\.t-form__item\\]\\:\\!mb-\\[22px\\] .t-form _item[data-v-a3002477]{margin-bottom:22px!important}.max-h-\\[300px\\][data-v-a3002477]{max-height:300px}.w-full[data-v-a3002477]{width:100%}.flex[data-v-a3002477]{display:flex}.flex-col[data-v-a3002477]{flex-direction:column}.items-center[data-v-a3002477]{align-items:center}.justify-between[data-v-a3002477]{justify-content:space-between}.gap-2\\.5[data-v-a3002477]{gap:.625rem}.overflow-x-hidden[data-v-a3002477]{overflow-x:hidden}.truncate[data-v-a3002477]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre-wrap[data-v-a3002477]{white-space:pre-wrap}.break-all[data-v-a3002477]{word-break:break-all}.border[data-v-a3002477]{border-width:1px}.border-\\[var\\(--td-component-border\\)\\][data-v-a3002477]{border-color:var(--td-component-border)}.rounded-\\[var\\(--td-radius-medium\\)\\][data-v-a3002477]{border-radius:var(--td-radius-medium)}.border-dashed[data-v-a3002477]{border-style:dashed}.bg-\\[var\\(--td-bg-color-secondarycontainer\\)\\][data-v-a3002477]{background-color:var(--td-bg-color-secondarycontainer)}.p-3[data-v-a3002477]{padding:.75rem}.pt-2\\.5[data-v-a3002477]{padding-top:.625rem}.text-\\[13px\\][data-v-a3002477]{font-size:13px}.text-\\[var\\(--td-text-color-primary\\)\\][data-v-a3002477]{color:var(--td-text-color-primary)}.leading-\\[1\\.6\\][data-v-a3002477]{line-height:1.6}.list-item-anim[data-v-d7f7e20e]{animation:slideUp-d7f7e20e .4s cubic-bezier(.2,.8,.2,1) backwards}@keyframes slideUp-d7f7e20e{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes smoothLoadingGlass-d7f7e20e{0%{backdrop-filter:blur(.01px)!important;-webkit-backdrop-filter:blur(.01px)!important}to{backdrop-filter:blur(4px)!important;-webkit-backdrop-filter:blur(4px)!important}}.custom-scrollbar[data-v-d7f7e20e]{overflow-y:auto}.custom-scrollbar[data-v-d7f7e20e]::-webkit-scrollbar{width:6px}.custom-scrollbar[data-v-d7f7e20e]::-webkit-scrollbar-thumb{background:var(--td-scrollbar-color);border-radius:4px}[data-v-d7f7e20e] .t-loading__overlay{border-radius:1rem!important;background-color:#ffffff80!important;animation:smoothLoadingGlass-d7f7e20e .3s cubic-bezier(.2,.8,.2,1) forwards!important}html[theme=dark][data-v-d7f7e20e] .t-loading__overlay{background-color:#18181b80!important}.pointer-events-none[data-v-d7f7e20e]{pointer-events:none}.absolute[data-v-d7f7e20e]{position:absolute}.relative[data-v-d7f7e20e]{position:relative}.-bottom-10[data-v-d7f7e20e]{bottom:-2.5rem}.-left-10[data-v-d7f7e20e]{left:-2.5rem}.-right-20[data-v-d7f7e20e]{right:-5rem}.-top-20[data-v-d7f7e20e]{top:-5rem}.z-10[data-v-d7f7e20e]{z-index:10}.grid[data-v-d7f7e20e]{display:grid}.grid-cols-1[data-v-d7f7e20e]{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2[data-v-d7f7e20e]{grid-template-columns:repeat(2,minmax(0,1fr))}.m-0[data-v-d7f7e20e]{margin:0}.mx-1[data-v-d7f7e20e]{margin-left:.25rem;margin-right:.25rem}.mx-auto[data-v-d7f7e20e]{margin-left:auto;margin-right:auto}.\\!mb-2[data-v-d7f7e20e]{margin-bottom:.5rem!important}.\\!mb-6[data-v-d7f7e20e]{margin-bottom:1.5rem!important}.\\!mb-8[data-v-d7f7e20e]{margin-bottom:2rem!important}.\\!ml-1[data-v-d7f7e20e]{margin-left:.25rem!important}.mb-1[data-v-d7f7e20e]{margin-bottom:.25rem}.mb-1\\.5[data-v-d7f7e20e]{margin-bottom:.375rem}.mb-2[data-v-d7f7e20e]{margin-bottom:.5rem}.mb-4[data-v-d7f7e20e]{margin-bottom:1rem}.mb-6[data-v-d7f7e20e]{margin-bottom:1.5rem}.mr-3[data-v-d7f7e20e]{margin-right:.75rem}.mt-0\\.5[data-v-d7f7e20e]{margin-top:.125rem}.mt-1[data-v-d7f7e20e]{margin-top:.25rem}.mt-8[data-v-d7f7e20e]{margin-top:2rem}.block[data-v-d7f7e20e]{display:block}.\\!h-12[data-v-d7f7e20e]{height:3rem!important}.h-\\[580px\\][data-v-d7f7e20e]{height:580px}.h-10[data-v-d7f7e20e]{height:2.5rem}.h-2[data-v-d7f7e20e]{height:.5rem}.h-20[data-v-d7f7e20e]{height:5rem}.h-24[data-v-d7f7e20e]{height:6rem}.h-4[data-v-d7f7e20e]{height:1rem}.h-40[data-v-d7f7e20e]{height:10rem}.h-60[data-v-d7f7e20e]{height:15rem}.h-full[data-v-d7f7e20e]{height:100%}.max-w-md[data-v-d7f7e20e]{max-width:28rem}.min-h-\\[70vh\\][data-v-d7f7e20e]{min-height:70vh}.min-w-0[data-v-d7f7e20e]{min-width:0}.w-10[data-v-d7f7e20e]{width:2.5rem}.w-2[data-v-d7f7e20e]{width:.5rem}.w-20[data-v-d7f7e20e]{width:5rem}.w-24[data-v-d7f7e20e]{width:6rem}.w-40[data-v-d7f7e20e]{width:10rem}.w-60[data-v-d7f7e20e]{width:15rem}.w-full[data-v-d7f7e20e]{width:100%}.w-max[data-v-d7f7e20e]{width:max-content}.w-px[data-v-d7f7e20e]{width:1px}.flex[data-v-d7f7e20e]{display:flex}.flex-1[data-v-d7f7e20e]{flex:1 1 0%}.shrink-0[data-v-d7f7e20e]{flex-shrink:0}.flex-col[data-v-d7f7e20e]{flex-direction:column}.transform[data-v-d7f7e20e]{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}@keyframes pulse-d7f7e20e{0%,to{opacity:1}50%{opacity:.5}}.animate-pulse[data-v-d7f7e20e]{animation:pulse-d7f7e20e 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-pointer[data-v-d7f7e20e]{cursor:pointer}.items-start[data-v-d7f7e20e]{align-items:flex-start}.items-center[data-v-d7f7e20e]{align-items:center}.justify-center[data-v-d7f7e20e]{justify-content:center}.justify-between[data-v-d7f7e20e]{justify-content:space-between}.gap-1[data-v-d7f7e20e]{gap:.25rem}.gap-2[data-v-d7f7e20e]{gap:.5rem}.gap-4[data-v-d7f7e20e]{gap:1rem}.gap-6[data-v-d7f7e20e]{gap:1.5rem}.overflow-hidden[data-v-d7f7e20e]{overflow:hidden}.overflow-y-auto[data-v-d7f7e20e]{overflow-y:auto}.truncate[data-v-d7f7e20e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.border[data-v-d7f7e20e]{border-width:1px}.border-b[data-v-d7f7e20e]{border-bottom-width:1px}.border-t[data-v-d7f7e20e]{border-top-width:1px}.border-\\[var\\(--td-component-border\\)\\][data-v-d7f7e20e]{border-color:var(--td-component-border)}.border-emerald-200\\/50[data-v-d7f7e20e]{border-color:#a7f3d080}.border-transparent[data-v-d7f7e20e]{border-color:transparent}.border-zinc-100[data-v-d7f7e20e]{--un-border-opacity:1;border-color:rgb(244 244 245 / var(--un-border-opacity))}.border-zinc-200\\/70[data-v-d7f7e20e]{border-color:#e4e4e7b3}.dark .dark\\:border-emerald-800\\/30[data-v-d7f7e20e]{border-color:#065f464d}.dark .dark\\:border-zinc-700\\/60[data-v-d7f7e20e]{border-color:#3f3f4699}.dark .dark\\:border-zinc-800[data-v-d7f7e20e]{--un-border-opacity:1;border-color:rgb(39 39 42 / var(--un-border-opacity))}.dark .dark\\:hover\\:border-zinc-600\\/80[data-v-d7f7e20e]:hover{border-color:#52525bcc}.hover\\:border-zinc-200\\/80[data-v-d7f7e20e]:hover{border-color:#e4e4e7cc}.\\!rounded[data-v-d7f7e20e]{border-radius:.25rem!important}.\\!rounded-lg[data-v-d7f7e20e]{border-radius:.5rem!important}.\\!rounded-md[data-v-d7f7e20e]{border-radius:.375rem!important}.\\!rounded-xl[data-v-d7f7e20e]{border-radius:.75rem!important}.rounded[data-v-d7f7e20e]{border-radius:.25rem}.rounded-2xl[data-v-d7f7e20e]{border-radius:1rem}.rounded-3xl[data-v-d7f7e20e]{border-radius:1.5rem}.rounded-full[data-v-d7f7e20e]{border-radius:9999px}.rounded-lg[data-v-d7f7e20e]{border-radius:.5rem}.rounded-xl[data-v-d7f7e20e]{border-radius:.75rem}.border-dashed[data-v-d7f7e20e]{border-style:dashed}.bg-\\[var\\(--color-primary\\)\\][data-v-d7f7e20e]{background-color:var(--color-primary)}.bg-\\[var\\(--color-success\\)\\][data-v-d7f7e20e]{background-color:var(--color-success)}.bg-emerald-50\\/50[data-v-d7f7e20e]{background-color:#ecfdf580}.bg-transparent[data-v-d7f7e20e]{background-color:transparent}.bg-zinc-100[data-v-d7f7e20e]{--un-bg-opacity:1;background-color:rgb(244 244 245 / var(--un-bg-opacity))}.bg-zinc-100\\/80[data-v-d7f7e20e]{background-color:#f4f4f5cc}.bg-zinc-200[data-v-d7f7e20e]{--un-bg-opacity:1;background-color:rgb(228 228 231 / var(--un-bg-opacity))}.bg-zinc-50\\/80[data-v-d7f7e20e]{background-color:#fafafacc}.dark .dark\\:bg-emerald-900\\/10[data-v-d7f7e20e]{background-color:#064e3b1a}.dark .dark\\:bg-emerald-900\\/20[data-v-d7f7e20e]{background-color:#064e3b33}.dark .dark\\:bg-zinc-700[data-v-d7f7e20e]{--un-bg-opacity:1;background-color:rgb(63 63 70 / var(--un-bg-opacity))}.dark .dark\\:bg-zinc-800[data-v-d7f7e20e]{--un-bg-opacity:1;background-color:rgb(39 39 42 / var(--un-bg-opacity))}.dark .dark\\:bg-zinc-800\\/50[data-v-d7f7e20e]{background-color:#27272a80}.dark .dark\\:bg-zinc-900[data-v-d7f7e20e]{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity))}.dark .dark\\:bg-zinc-900\\/50[data-v-d7f7e20e]{background-color:#18181b80}.dark .dark\\:hover\\:bg-zinc-700\\/50[data-v-d7f7e20e]:hover{background-color:#3f3f4680}.dark .dark\\:hover\\:bg-zinc-800[data-v-d7f7e20e]:hover{--un-bg-opacity:1;background-color:rgb(39 39 42 / var(--un-bg-opacity))}.hover\\:\\!bg-red-500[data-v-d7f7e20e]:hover{--un-bg-opacity:1 !important;background-color:rgb(239 68 68 / var(--un-bg-opacity))!important}.hover\\:bg-red-500\\/10[data-v-d7f7e20e]:hover{background-color:#ef44441a}.hover\\:bg-white[data-v-d7f7e20e]:hover{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.hover\\:bg-zinc-100[data-v-d7f7e20e]:hover{--un-bg-opacity:1;background-color:rgb(244 244 245 / var(--un-bg-opacity))}.hover\\:bg-zinc-50\\/80[data-v-d7f7e20e]:hover{background-color:#fafafacc}.p-10[data-v-d7f7e20e]{padding:2.5rem}.p-3[data-v-d7f7e20e]{padding:.75rem}.p-4[data-v-d7f7e20e]{padding:1rem}.p-5[data-v-d7f7e20e]{padding:1.25rem}.p-6[data-v-d7f7e20e]{padding:1.5rem}.\\!px-1\\.5[data-v-d7f7e20e]{padding-left:.375rem!important;padding-right:.375rem!important}.\\!px-2[data-v-d7f7e20e]{padding-left:.5rem!important;padding-right:.5rem!important}.\\!px-3[data-v-d7f7e20e]{padding-left:.75rem!important;padding-right:.75rem!important}.px-2[data-v-d7f7e20e]{padding-left:.5rem;padding-right:.5rem}.py-0\\.5[data-v-d7f7e20e]{padding-top:.125rem;padding-bottom:.125rem}.pb-4[data-v-d7f7e20e]{padding-bottom:1rem}.pb-6[data-v-d7f7e20e]{padding-bottom:1.5rem}.pt-4[data-v-d7f7e20e]{padding-top:1rem}.text-center[data-v-d7f7e20e]{text-align:center}.text-left[data-v-d7f7e20e]{text-align:left}.text-\\[11px\\][data-v-d7f7e20e]{font-size:11px}.text-\\[15px\\][data-v-d7f7e20e]{font-size:15px}.text-2xl[data-v-d7f7e20e]{font-size:1.5rem;line-height:2rem}.text-base[data-v-d7f7e20e]{font-size:1rem;line-height:1.5rem}.text-lg[data-v-d7f7e20e]{font-size:1.125rem;line-height:1.75rem}.text-sm[data-v-d7f7e20e]{font-size:.875rem;line-height:1.25rem}.text-xl[data-v-d7f7e20e]{font-size:1.25rem;line-height:1.75rem}.text-xs[data-v-d7f7e20e]{font-size:.75rem;line-height:1rem}.\\!text-zinc-500[data-v-d7f7e20e]{--un-text-opacity:1 !important;color:rgb(113 113 122 / var(--un-text-opacity))!important}.dark .dark\\:text-emerald-400[data-v-d7f7e20e]{--un-text-opacity:1;color:rgb(52 211 153 / var(--un-text-opacity))}.dark .dark\\:text-emerald-500\\/80[data-v-d7f7e20e]{color:#10b981cc}.dark .dark\\:text-zinc-300[data-v-d7f7e20e]{--un-text-opacity:1;color:rgb(212 212 216 / var(--un-text-opacity))}.text-\\[var\\(--color-primary\\)\\][data-v-d7f7e20e]{color:var(--color-primary)}.text-\\[var\\(--color-success\\)\\][data-v-d7f7e20e]{color:var(--color-success)}.text-\\[var\\(--td-text-color-primary\\)\\][data-v-d7f7e20e]{color:var(--td-text-color-primary)}.text-\\[var\\(--td-text-color-secondary\\)\\][data-v-d7f7e20e]{color:var(--td-text-color-secondary)}.text-emerald-600[data-v-d7f7e20e]{--un-text-opacity:1;color:rgb(5 150 105 / var(--un-text-opacity))}.text-emerald-600\\/80[data-v-d7f7e20e]{color:#059669cc}.text-white[data-v-d7f7e20e]{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.text-zinc-400[data-v-d7f7e20e]{--un-text-opacity:1;color:rgb(161 161 170 / var(--un-text-opacity))}.text-zinc-500[data-v-d7f7e20e]{--un-text-opacity:1;color:rgb(113 113 122 / var(--un-text-opacity))}.text-zinc-700[data-v-d7f7e20e]{--un-text-opacity:1;color:rgb(63 63 70 / var(--un-text-opacity))}.dark .group:hover .dark\\:group-hover\\:text-zinc-200[data-v-d7f7e20e]{--un-text-opacity:1;color:rgb(228 228 231 / var(--un-text-opacity))}.group:hover .group-hover\\:text-zinc-800[data-v-d7f7e20e]{--un-text-opacity:1;color:rgb(39 39 42 / var(--un-text-opacity))}.hover\\:\\!text-white[data-v-d7f7e20e]:hover{--un-text-opacity:1 !important;color:rgb(255 255 255 / var(--un-text-opacity))!important}.hover\\:text-\\[var\\(--color-primary\\)\\][data-v-d7f7e20e]:hover{color:var(--color-primary)}.\\!font-bold[data-v-d7f7e20e]{font-weight:700!important}.font-bold[data-v-d7f7e20e]{font-weight:700}.font-extrabold[data-v-d7f7e20e]{font-weight:800}.font-medium[data-v-d7f7e20e]{font-weight:500}.leading-none[data-v-d7f7e20e]{line-height:1}.tracking-tight[data-v-d7f7e20e]{letter-spacing:-.025em}.tracking-widest[data-v-d7f7e20e]{letter-spacing:.1em}.font-mono[data-v-d7f7e20e]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.uppercase[data-v-d7f7e20e]{text-transform:uppercase}.opacity-10[data-v-d7f7e20e]{opacity:.1}.opacity-50[data-v-d7f7e20e]{opacity:.5}.opacity-60[data-v-d7f7e20e]{opacity:.6}.shadow-md[data-v-d7f7e20e]{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-sm[data-v-d7f7e20e]{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / .05));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-xl[data-v-d7f7e20e]{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.light .light-outline[data-v-d7f7e20e]{outline-style:solid}.blur-3xl[data-v-d7f7e20e]{--un-blur:blur(64px);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.backdrop-filter[data-v-d7f7e20e]{-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.transition-all[data-v-d7f7e20e]{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors[data-v-d7f7e20e]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300[data-v-d7f7e20e]{transition-duration:.3s}@media(min-width:640px){.sm\\:grid-cols-2[data-v-d7f7e20e]{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row[data-v-d7f7e20e]{flex-direction:row}.sm\\:items-center[data-v-d7f7e20e]{align-items:center}.sm\\:p-5[data-v-d7f7e20e]{padding:1.25rem}.sm\\:p-6[data-v-d7f7e20e]{padding:1.5rem}}@media(min-width:1024px){.lg\\:col-span-5[data-v-d7f7e20e]{grid-column:span 5/span 5}.lg\\:col-span-7[data-v-d7f7e20e]{grid-column:span 7/span 7}.lg\\:grid-cols-12[data-v-d7f7e20e]{grid-template-columns:repeat(12,minmax(0,1fr))}.lg\\:grid-cols-2[data-v-d7f7e20e]{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-4[data-v-d7f7e20e]{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:1280px){.xl\\:col-span-4[data-v-d7f7e20e]{grid-column:span 4/span 4}.xl\\:col-span-8[data-v-d7f7e20e]{grid-column:span 8/span 8}}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var D, R;
function ie() {
  return R || (R = 1, D = Vue), D;
}
var e = ie();
function M(t) {
  "@babel/helpers - typeof";
  return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, M(t);
}
function se(t, r) {
  if (M(t) != "object" || !t) return t;
  var l = t[Symbol.toPrimitive];
  if (l !== void 0) {
    var o = l.call(t, r);
    if (M(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function ce(t) {
  var r = se(t, "string");
  return M(r) == "symbol" ? r : r + "";
}
function A(t, r, l) {
  return (r = ce(r)) in t ? Object.defineProperty(t, r, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = l, t;
}
var F = (t) => {
  var r = ["strokeLinecap", "fillRule", "clipRule", "strokeWidth"];
  return r.includes(t) ? t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase() : t;
}, z = (t, r) => {
  var l = {};
  if (t.attrs)
    for (var [o, s] of Object.entries(t.attrs))
      if (typeof s == "string" && s.startsWith("props.")) {
        var f = s.split(".")[1];
        l[F(o)] = r[f];
      } else
        l[F(o)] = s;
  t.tag === "svg" && (l.class = r.class, l.style = r.style, l.onClick = r.onClick);
  var g = t.children ? t.children.map((d) => z(d, r)) : [];
  return e.h(t.tag, l, g);
}, de = "t", ue = {
  classPrefix: de
};
function me() {
  var {
    classPrefix: t
  } = ue;
  return {
    SIZE: {
      default: "",
      xs: "".concat(t, "-size-xs"),
      small: "".concat(t, "-size-s"),
      medium: "".concat(t, "-size-m"),
      large: "".concat(t, "-size-l"),
      xl: "".concat(t, "-size-xl"),
      block: "".concat(t, "-size-full-width")
    },
    STATUS: {
      loading: "".concat(t, "-is-loading"),
      disabled: "".concat(t, "-is-disabled"),
      focused: "".concat(t, "-is-focused"),
      success: "".concat(t, "-is-success"),
      error: "".concat(t, "-is-error"),
      warning: "".concat(t, "-is-warning"),
      selected: "".concat(t, "-is-selected"),
      active: "".concat(t, "-is-active"),
      checked: "".concat(t, "-is-checked"),
      current: "".concat(t, "-is-current"),
      hidden: "".concat(t, "-is-hidden"),
      visible: "".concat(t, "-is-visible"),
      expanded: "".concat(t, "-is-expanded"),
      indeterminate: "".concat(t, "-is-indeterminate")
    }
  };
}
function P(t) {
  var r = me().SIZE, l = e.computed(() => t.value in r ? r[t.value] : ""), o = e.computed(() => t.value === void 0 || t.value in r ? {} : {
    fontSize: t.value
  });
  return {
    style: o,
    className: l
  };
}
function U(t, r) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    r && (o = o.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function Z(t) {
  for (var r = 1; r < arguments.length; r++) {
    var l = arguments[r] != null ? arguments[r] : {};
    r % 2 ? U(Object(l), !0).forEach(function(o) {
      A(t, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : U(Object(l)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return t;
}
var fe = {
  tag: "svg",
  attrs: {
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "g",
    attrs: {
      id: "add"
    },
    children: [{
      tag: "path",
      attrs: {
        id: "stroke1",
        stroke: "props.strokeColor1",
        d: "M12 5L12 19M19 12L5 12",
        strokeLinecap: "square",
        strokeWidth: "props.strokeWidth"
      }
    }]
  }]
}, ve = e.defineComponent({
  name: "AddIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(t, r) {
    var {
      attrs: l
    } = r, o = e.computed(() => t.size), s = e.computed(() => t.strokeColor ? Array.isArray(t.strokeColor) ? t.strokeColor[0] : t.strokeColor : "currentColor"), f = e.computed(() => {
      var a;
      return t.strokeColor ? Array.isArray(t.strokeColor) ? (a = t.strokeColor[1]) !== null && a !== void 0 ? a : t.strokeColor[0] : t.strokeColor : "currentColor";
    }), g = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "transparent"), d = e.computed(() => {
      var a;
      return t.fillColor ? Array.isArray(t.fillColor) ? (a = t.fillColor[1]) !== null && a !== void 0 ? a : t.fillColor[0] : t.fillColor : "transparent";
    }), n = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "currentColor"), {
      className: v,
      style: b
    } = P(o), x = e.computed(() => ["t-icon", "t-icon-add", v.value]), C = e.computed(() => Z(Z({
      fill: "none"
    }, b.value), l.style)), y = e.computed(() => ({
      class: x.value,
      style: C.value,
      onClick: (a) => {
        var i;
        return (i = t.onClick) === null || i === void 0 ? void 0 : i.call(t, {
          e: a
        });
      },
      strokeColor1: s.value,
      strokeColor2: f.value,
      fillColor1: g.value,
      fillColor2: d.value,
      strokeWidth: t.strokeWidth || 2,
      filledColor: n.value
    }));
    return () => z(fe, y.value);
  }
});
function q(t, r) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    r && (o = o.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function H(t) {
  for (var r = 1; r < arguments.length; r++) {
    var l = arguments[r] != null ? arguments[r] : {};
    r % 2 ? q(Object(l), !0).forEach(function(o) {
      A(t, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : q(Object(l)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return t;
}
var pe = {
  tag: "svg",
  attrs: {
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "g",
    attrs: {
      id: "cloud"
    },
    children: [{
      tag: "path",
      attrs: {
        id: "fill1",
        fill: "props.fillColor1",
        d: "M2 15C2 17.2091 3.79086 19 6 19H17C19.7614 19 22 16.7614 22 14C22 11.2386 19.7614 9 17 9C16.9723 9 16.9447 9.00023 16.9172 9.00067C16.4414 6.16263 13.9732 4 11 4C7.68629 4 5 6.68629 5 10C5 10.3762 5.03463 10.7444 5.10088 11.1015C3.3247 11.5094 2 13.1 2 15Z"
      }
    }, {
      tag: "path",
      attrs: {
        id: "stroke1",
        stroke: "props.strokeColor1",
        d: "M2 15C2 17.2091 3.79086 19 6 19H17C19.7614 19 22 16.7614 22 14C22 11.2386 19.7614 9 17 9C16.9723 9 16.9447 9.00023 16.9172 9.00067C16.4414 6.16263 13.9732 4 11 4C7.68629 4 5 6.68629 5 10C5 10.3762 5.03463 10.7444 5.10088 11.1015C3.3247 11.5094 2 13.1 2 15Z",
        strokeWidth: "props.strokeWidth"
      }
    }]
  }]
}, ge = e.defineComponent({
  name: "CloudIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(t, r) {
    var {
      attrs: l
    } = r, o = e.computed(() => t.size), s = e.computed(() => t.strokeColor ? Array.isArray(t.strokeColor) ? t.strokeColor[0] : t.strokeColor : "currentColor"), f = e.computed(() => {
      var a;
      return t.strokeColor ? Array.isArray(t.strokeColor) ? (a = t.strokeColor[1]) !== null && a !== void 0 ? a : t.strokeColor[0] : t.strokeColor : "currentColor";
    }), g = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "transparent"), d = e.computed(() => {
      var a;
      return t.fillColor ? Array.isArray(t.fillColor) ? (a = t.fillColor[1]) !== null && a !== void 0 ? a : t.fillColor[0] : t.fillColor : "transparent";
    }), n = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "currentColor"), {
      className: v,
      style: b
    } = P(o), x = e.computed(() => ["t-icon", "t-icon-cloud", v.value]), C = e.computed(() => H(H({
      fill: "none"
    }, b.value), l.style)), y = e.computed(() => ({
      class: x.value,
      style: C.value,
      onClick: (a) => {
        var i;
        return (i = t.onClick) === null || i === void 0 ? void 0 : i.call(t, {
          e: a
        });
      },
      strokeColor1: s.value,
      strokeColor2: f.value,
      fillColor1: g.value,
      fillColor2: d.value,
      strokeWidth: t.strokeWidth || 2,
      filledColor: n.value
    }));
    return () => z(pe, y.value);
  }
});
function K(t, r) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    r && (o = o.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function X(t) {
  for (var r = 1; r < arguments.length; r++) {
    var l = arguments[r] != null ? arguments[r] : {};
    r % 2 ? K(Object(l), !0).forEach(function(o) {
      A(t, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : K(Object(l)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return t;
}
var Ce = {
  tag: "svg",
  attrs: {
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "g",
    attrs: {
      id: "key"
    },
    children: [{
      tag: "path",
      attrs: {
        id: "fill1",
        fill: "props.fillColor1",
        d: "M11.5355 15.5355C9.58291 17.4882 6.41709 17.4882 4.46447 15.5355C2.51184 13.5829 2.51184 10.4171 4.46447 8.46447C6.41709 6.51184 9.58291 6.51184 11.5355 8.46447C13.4882 10.4171 13.4882 13.5829 11.5355 15.5355Z"
      }
    }, {
      tag: "path",
      attrs: {
        id: "stroke1",
        stroke: "props.strokeColor1",
        d: "M14 12H21M16.5 14.9985V12M19.5 14V12M11.5355 15.5355C9.58291 17.4882 6.41709 17.4882 4.46447 15.5355C2.51184 13.5829 2.51184 10.4171 4.46447 8.46447C6.41709 6.51184 9.58291 6.51184 11.5355 8.46447C13.4882 10.4171 13.4882 13.5829 11.5355 15.5355Z",
        strokeLinecap: "square",
        strokeWidth: "props.strokeWidth"
      }
    }]
  }]
}, be = e.defineComponent({
  name: "KeyIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(t, r) {
    var {
      attrs: l
    } = r, o = e.computed(() => t.size), s = e.computed(() => t.strokeColor ? Array.isArray(t.strokeColor) ? t.strokeColor[0] : t.strokeColor : "currentColor"), f = e.computed(() => {
      var a;
      return t.strokeColor ? Array.isArray(t.strokeColor) ? (a = t.strokeColor[1]) !== null && a !== void 0 ? a : t.strokeColor[0] : t.strokeColor : "currentColor";
    }), g = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "transparent"), d = e.computed(() => {
      var a;
      return t.fillColor ? Array.isArray(t.fillColor) ? (a = t.fillColor[1]) !== null && a !== void 0 ? a : t.fillColor[0] : t.fillColor : "transparent";
    }), n = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "currentColor"), {
      className: v,
      style: b
    } = P(o), x = e.computed(() => ["t-icon", "t-icon-key", v.value]), C = e.computed(() => X(X({
      fill: "none"
    }, b.value), l.style)), y = e.computed(() => ({
      class: x.value,
      style: C.value,
      onClick: (a) => {
        var i;
        return (i = t.onClick) === null || i === void 0 ? void 0 : i.call(t, {
          e: a
        });
      },
      strokeColor1: s.value,
      strokeColor2: f.value,
      fillColor1: g.value,
      fillColor2: d.value,
      strokeWidth: t.strokeWidth || 2,
      filledColor: n.value
    }));
    return () => z(Ce, y.value);
  }
});
function G(t, r) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    r && (o = o.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function J(t) {
  for (var r = 1; r < arguments.length; r++) {
    var l = arguments[r] != null ? arguments[r] : {};
    r % 2 ? G(Object(l), !0).forEach(function(o) {
      A(t, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : G(Object(l)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return t;
}
var ye = {
  tag: "svg",
  attrs: {
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "g",
    attrs: {
      id: "play-circle"
    },
    children: [{
      tag: "path",
      attrs: {
        fill: "props.filledColor",
        d: "M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
      }
    }, {
      tag: "path",
      attrs: {
        fill: "props.filledColor",
        d: "M18.25 12L8.5 17.6292L8.5 6.37085L18.25 12Z"
      }
    }]
  }]
}, ke = e.defineComponent({
  name: "PlayCircleIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(t, r) {
    var {
      attrs: l
    } = r, o = e.computed(() => t.size), s = e.computed(() => t.strokeColor ? Array.isArray(t.strokeColor) ? t.strokeColor[0] : t.strokeColor : "currentColor"), f = e.computed(() => {
      var a;
      return t.strokeColor ? Array.isArray(t.strokeColor) ? (a = t.strokeColor[1]) !== null && a !== void 0 ? a : t.strokeColor[0] : t.strokeColor : "currentColor";
    }), g = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "transparent"), d = e.computed(() => {
      var a;
      return t.fillColor ? Array.isArray(t.fillColor) ? (a = t.fillColor[1]) !== null && a !== void 0 ? a : t.fillColor[0] : t.fillColor : "transparent";
    }), n = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "currentColor"), {
      className: v,
      style: b
    } = P(o), x = e.computed(() => ["t-icon", "t-icon-play-circle", v.value]), C = e.computed(() => J(J({
      fill: "none"
    }, b.value), l.style)), y = e.computed(() => ({
      class: x.value,
      style: C.value,
      onClick: (a) => {
        var i;
        return (i = t.onClick) === null || i === void 0 ? void 0 : i.call(t, {
          e: a
        });
      },
      strokeColor1: s.value,
      strokeColor2: f.value,
      fillColor1: g.value,
      fillColor2: d.value,
      strokeWidth: t.strokeWidth || 2,
      filledColor: n.value
    }));
    return () => z(ye, y.value);
  }
});
function Q(t, r) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    r && (o = o.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function Y(t) {
  for (var r = 1; r < arguments.length; r++) {
    var l = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Q(Object(l), !0).forEach(function(o) {
      A(t, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : Q(Object(l)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return t;
}
var xe = {
  tag: "svg",
  attrs: {
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "g",
    attrs: {
      id: "refresh"
    },
    children: [{
      tag: "path",
      attrs: {
        id: "stroke1",
        stroke: "props.strokeColor1",
        d: "M21.448 13C20.9483 17.7767 16.909 21.5 12 21.5C8.18227 21.5 4.89052 19.248 3.38065 16M2.5 20.5V15.5H5.5M2.55176 11C3.05145 6.22334 7.09079 2.5 11.9998 2.5C15.8175 2.5 19.1092 4.75197 20.6191 8M21.4998 3.5V8.5H18.4998",
        strokeLinecap: "square",
        strokeWidth: "props.strokeWidth"
      }
    }]
  }]
}, he = e.defineComponent({
  name: "RefreshIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(t, r) {
    var {
      attrs: l
    } = r, o = e.computed(() => t.size), s = e.computed(() => t.strokeColor ? Array.isArray(t.strokeColor) ? t.strokeColor[0] : t.strokeColor : "currentColor"), f = e.computed(() => {
      var a;
      return t.strokeColor ? Array.isArray(t.strokeColor) ? (a = t.strokeColor[1]) !== null && a !== void 0 ? a : t.strokeColor[0] : t.strokeColor : "currentColor";
    }), g = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "transparent"), d = e.computed(() => {
      var a;
      return t.fillColor ? Array.isArray(t.fillColor) ? (a = t.fillColor[1]) !== null && a !== void 0 ? a : t.fillColor[0] : t.fillColor : "transparent";
    }), n = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "currentColor"), {
      className: v,
      style: b
    } = P(o), x = e.computed(() => ["t-icon", "t-icon-refresh", v.value]), C = e.computed(() => Y(Y({
      fill: "none"
    }, b.value), l.style)), y = e.computed(() => ({
      class: x.value,
      style: C.value,
      onClick: (a) => {
        var i;
        return (i = t.onClick) === null || i === void 0 ? void 0 : i.call(t, {
          e: a
        });
      },
      strokeColor1: s.value,
      strokeColor2: f.value,
      fillColor1: g.value,
      fillColor2: d.value,
      strokeWidth: t.strokeWidth || 2,
      filledColor: n.value
    }));
    return () => z(xe, y.value);
  }
});
function ee(t, r) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    r && (o = o.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function te(t) {
  for (var r = 1; r < arguments.length; r++) {
    var l = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ee(Object(l), !0).forEach(function(o) {
      A(t, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : ee(Object(l)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return t;
}
var we = {
  tag: "svg",
  attrs: {
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "g",
    attrs: {
      id: "server"
    },
    children: [{
      tag: "g",
      attrs: {
        id: "fill1"
      },
      children: [{
        tag: "path",
        attrs: {
          fill: "props.fillColor1",
          d: "M21 14V21H3L3 14L21 14Z"
        }
      }, {
        tag: "path",
        attrs: {
          fill: "props.fillColor1",
          d: "M21 3V10L3 10L3 3L21 3Z"
        }
      }]
    }, {
      tag: "g",
      attrs: {
        id: "stroke1"
      },
      children: [{
        tag: "path",
        attrs: {
          stroke: "props.strokeColor1",
          d: "M21 14V21H3L3 14L21 14Z",
          strokeLinecap: "square",
          strokeWidth: "props.strokeWidth"
        }
      }, {
        tag: "path",
        attrs: {
          stroke: "props.strokeColor1",
          d: "M21 3V10L3 10L3 3L21 3Z",
          strokeLinecap: "square",
          strokeWidth: "props.strokeWidth"
        }
      }, {
        tag: "path",
        attrs: {
          stroke: "props.strokeColor1",
          d: "M6.5 6.5H6.50391V6.50391H6.5V6.5Z",
          strokeLinecap: "square",
          strokeWidth: "props.strokeWidth"
        }
      }, {
        tag: "path",
        attrs: {
          stroke: "props.strokeColor1",
          d: "M6.5 17.5H6.50391V17.5039H6.5V17.5Z",
          strokeLinecap: "square",
          strokeWidth: "props.strokeWidth"
        }
      }]
    }]
  }]
}, re = e.defineComponent({
  name: "ServerIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(t, r) {
    var {
      attrs: l
    } = r, o = e.computed(() => t.size), s = e.computed(() => t.strokeColor ? Array.isArray(t.strokeColor) ? t.strokeColor[0] : t.strokeColor : "currentColor"), f = e.computed(() => {
      var a;
      return t.strokeColor ? Array.isArray(t.strokeColor) ? (a = t.strokeColor[1]) !== null && a !== void 0 ? a : t.strokeColor[0] : t.strokeColor : "currentColor";
    }), g = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "transparent"), d = e.computed(() => {
      var a;
      return t.fillColor ? Array.isArray(t.fillColor) ? (a = t.fillColor[1]) !== null && a !== void 0 ? a : t.fillColor[0] : t.fillColor : "transparent";
    }), n = e.computed(() => t.fillColor ? Array.isArray(t.fillColor) ? t.fillColor[0] : t.fillColor : "currentColor"), {
      className: v,
      style: b
    } = P(o), x = e.computed(() => ["t-icon", "t-icon-server", v.value]), C = e.computed(() => te(te({
      fill: "none"
    }, b.value), l.style)), y = e.computed(() => ({
      class: x.value,
      style: C.value,
      onClick: (a) => {
        var i;
        return (i = t.onClick) === null || i === void 0 ? void 0 : i.call(t, {
          e: a
        });
      },
      strokeColor1: s.value,
      strokeColor2: f.value,
      fillColor1: g.value,
      fillColor2: d.value,
      strokeWidth: t.strokeWidth || 2,
      filledColor: n.value
    }));
    return () => z(we, y.value);
  }
}), I, oe;
function Ve() {
  return oe || (oe = 1, I = TDesign), I;
}
var w = Ve();
const Ne = /* @__PURE__ */ e.defineComponent({
  __name: "CreateTunnelDialog",
  props: {
    visible: { type: Boolean },
    token: {},
    userLevel: {}
  },
  emits: ["update:visible", "success"],
  setup(t, { emit: r }) {
    const l = window.mslxRequest, o = t, s = r, f = e.ref(!1), g = e.ref(!1), d = e.ref([]), n = e.reactive({
      nodeId: null,
      type: "tcp",
      name: "",
      local_ip: "127.0.0.1",
      local_port: "25565",
      remote: ""
    }), v = e.computed(() => d.value.find((i) => i.id === n.nodeId) || null), b = e.computed(() => {
      const i = /* @__PURE__ */ new Map();
      return d.value.forEach((m) => {
        const k = m.vipName || "默认节点";
        i.has(k) || i.set(k, { label: k, value: k, children: [] }), i.get(k).children.push(m);
      }), Array.from(i.values());
    }), x = (i) => {
      const m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let k = "";
      for (let N = 0; N < i; N++)
        k += m.charAt(Math.floor(Math.random() * m.length));
      return k;
    }, C = () => {
      n.name = "MSL_" + x(6), n.remote = (Math.floor(Math.random() * 55536) + 1e4).toString();
    }, y = async () => {
      f.value = !0;
      try {
        const i = await l.get(
          {
            url: `/nodes?token=${o.token}`,
            baseURL: "https://api.natfrp.com/v4"
          },
          { withToken: !1 }
        );
        if (i) {
          const m = [];
          Object.entries(i).forEach(([k, N]) => {
            o.userLevel >= N.vip && m.push({
              id: parseInt(k),
              name: N.name,
              host: N.host,
              description: N.description,
              vip: N.vip,
              vipName: N.vip === 0 ? "普通节点" : N.vip === 3 ? "青铜节点" : "白银节点"
            });
          }), d.value = m, o.visible && d.value.length > 0 && !n.nodeId && (n.nodeId = d.value[0].id, C());
        }
      } catch (i) {
        w.MessagePlugin.error("加载节点失败: " + i.message);
      } finally {
        f.value = !1;
      }
    };
    e.watch(
      () => o.visible,
      (i) => {
        i && (d.value.length > 0 ? (n.nodeId || (n.nodeId = d.value[0].id), C()) : y());
      }
    );
    const a = async () => {
      if (!n.nodeId) {
        w.MessagePlugin.warning("请选择一个节点");
        return;
      }
      if (!n.name || !n.local_ip || !n.local_port) {
        w.MessagePlugin.warning("请填写完整的映射配置");
        return;
      }
      g.value = !0;
      try {
        await l.post(
          {
            url: "/tunnels",
            baseURL: "https://api.natfrp.com/v4",
            headers: { Authorization: `Bearer ${o.token}`, "Content-Type": "application/x-www-form-urlencoded" },
            data: new URLSearchParams({
              node: n.nodeId.toString(),
              name: n.name,
              type: n.type,
              note: "Create By MSLX Plugin",
              extra: "",
              local_ip: n.local_ip,
              local_port: n.local_port,
              remote: n.remote
            }).toString()
          },
          { withToken: !1 }
        ), w.MessagePlugin.success(`隧道 ${n.name} 创建成功！`), s("success"), s("update:visible", !1);
      } catch (i) {
        const m = i.response?.data?.msg || i.msg || "请尝试更换隧道名称/节点！";
        w.MessagePlugin.error(`创建失败: ${m}`);
      } finally {
        g.value = !1;
      }
    };
    return e.onMounted(() => {
      o.token && y();
    }), (i, m) => {
      const k = e.resolveComponent("t-option"), N = e.resolveComponent("t-option-group"), S = e.resolveComponent("t-select"), E = e.resolveComponent("t-form-item"), j = e.resolveComponent("t-input"), O = e.resolveComponent("t-col"), T = e.resolveComponent("t-button"), B = e.resolveComponent("t-row"), c = e.resolveComponent("t-form"), u = e.resolveComponent("t-loading"), _ = e.resolveComponent("t-dialog");
      return e.openBlock(), e.createBlock(_, {
        attach: "body",
        visible: t.visible,
        header: "新建 SakuraFrp 隧道",
        width: "580px",
        "confirm-btn": { content: "提交创建", loading: g.value },
        onConfirm: a,
        onClose: m[6] || (m[6] = (p) => s("update:visible", !1))
      }, {
        default: e.withCtx(() => [
          e.createVNode(u, { loading: f.value }, {
            default: e.withCtx(() => [
              e.createVNode(c, {
                data: n,
                "label-align": "right",
                "label-width": 100,
                class: "pt-2.5 overflow-x-hidden [&_.t-form__item]:!mb-[22px]"
              }, {
                default: e.withCtx(() => [
                  e.createVNode(E, {
                    label: "选择节点",
                    name: "nodeId"
                  }, {
                    default: e.withCtx(() => [
                      e.createVNode(S, {
                        modelValue: n.nodeId,
                        "onUpdate:modelValue": m[0] || (m[0] = (p) => n.nodeId = p),
                        placeholder: "请选择节点",
                        onChange: C,
                        "popup-props": { overlayClassName: "max-h-[300px]" }
                      }, {
                        default: e.withCtx(() => [
                          (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(b.value, (p) => (e.openBlock(), e.createBlock(N, {
                            key: p.value,
                            label: p.label
                          }, {
                            default: e.withCtx(() => [
                              (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(p.children, (h) => (e.openBlock(), e.createBlock(k, {
                                key: h.id,
                                value: h.id,
                                label: h.name
                              }, {
                                default: e.withCtx(() => [
                                  e.createElementVNode("div", { class: "flex justify-between items-center w-full" }, [
                                    e.createElementVNode("span", { class: "truncate" }, e.toDisplayString(h.name), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["value", "label"]))), 128))
                            ]),
                            _: 2
                          }, 1032, ["label"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  v.value ? (e.openBlock(), e.createBlock(E, {
                    key: 0,
                    label: "节点详情"
                  }, {
                    default: e.withCtx(() => [
                      e.createElementVNode("div", { class: "w-full flex flex-col gap-2.5" }, [
                        e.createElementVNode("div", { class: "bg-[var(--td-bg-color-secondarycontainer)] rounded-[var(--td-radius-medium)] p-3 border border-dashed border-[var(--td-component-border)]" }, [
                          e.createElementVNode("pre", { class: "m-0 whitespace-pre-wrap break-all text-[13px] text-[var(--td-text-color-primary)] leading-[1.6]" }, e.toDisplayString(v.value.description || "此节点暂无备注"), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  })) : e.createCommentVNode("", !0),
                  e.createVNode(E, { label: "隧道类型" }, {
                    default: e.withCtx(() => [
                      e.createVNode(S, {
                        modelValue: n.type,
                        "onUpdate:modelValue": m[1] || (m[1] = (p) => n.type = p)
                      }, {
                        default: e.withCtx(() => [
                          e.createVNode(k, {
                            label: "TCP",
                            value: "tcp"
                          }),
                          e.createVNode(k, {
                            label: "UDP",
                            value: "udp"
                          }),
                          e.createVNode(k, {
                            label: "HTTP",
                            value: "http"
                          }),
                          e.createVNode(k, {
                            label: "HTTPS",
                            value: "https"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e.createVNode(B, { gutter: [16, 20] }, {
                    default: e.withCtx(() => [
                      e.createVNode(O, {
                        xs: 12,
                        sm: 6
                      }, {
                        default: e.withCtx(() => [
                          e.createVNode(E, { label: "隧道名称" }, {
                            default: e.withCtx(() => [
                              e.createVNode(j, {
                                modelValue: n.name,
                                "onUpdate:modelValue": m[2] || (m[2] = (p) => n.name = p)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      e.createVNode(O, {
                        xs: 12,
                        sm: 6
                      }, {
                        default: e.withCtx(() => [
                          e.createVNode(E, { label: "远程端口" }, {
                            default: e.withCtx(() => [
                              e.createVNode(j, {
                                modelValue: n.remote,
                                "onUpdate:modelValue": m[3] || (m[3] = (p) => n.remote = p),
                                placeholder: "留空由服务端分配"
                              }, {
                                suffix: e.withCtx(() => [
                                  e.createVNode(T, {
                                    variant: "text",
                                    size: "small",
                                    onClick: C
                                  }, {
                                    default: e.withCtx(() => [
                                      e.createTextVNode("随机")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      e.createVNode(O, {
                        xs: 12,
                        sm: 6
                      }, {
                        default: e.withCtx(() => [
                          e.createVNode(E, { label: "本地IP" }, {
                            default: e.withCtx(() => [
                              e.createVNode(j, {
                                modelValue: n.local_ip,
                                "onUpdate:modelValue": m[4] || (m[4] = (p) => n.local_ip = p)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      e.createVNode(O, {
                        xs: 12,
                        sm: 6
                      }, {
                        default: e.withCtx(() => [
                          e.createVNode(E, { label: "本地端口" }, {
                            default: e.withCtx(() => [
                              e.createVNode(j, {
                                modelValue: n.local_port,
                                "onUpdate:modelValue": m[5] || (m[5] = (p) => n.local_port = p)
                              }, null, 8, ["modelValue"])
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
              }, 8, ["data"])
            ]),
            _: 1
          }, 8, ["loading"])
        ]),
        _: 1
      }, 8, ["visible", "confirm-btn"]);
    };
  }
}), le = (t, r) => {
  const l = t.__vccOpts || t;
  for (const [o, s] of r)
    l[o] = s;
  return l;
}, _e = /* @__PURE__ */ le(Ne, [["__scopeId", "data-v-a3002477"]]), Ee = /* @__PURE__ */ e.defineComponent({
  __name: "index",
  setup(t) {
    const r = window.mslxRequest, l = e.ref(!1), o = e.ref(""), s = e.ref(!1), f = e.ref(null), g = e.ref(0), d = e.ref([]), n = e.ref({}), v = e.ref(null), b = e.ref({
      token: ""
    }), x = e.ref(!1), C = e.ref(!1), y = e.ref(!1), a = e.computed(() => d.value.find((c) => c.id === v.value) || null), i = e.computed(() => a.value ? n.value[a.value.node] || `节点 (${a.value.node})` : ""), m = (c) => {
      if (c.startsWith("http")) {
        window.open(c, "_blank");
        return;
      }
      const u = window.VueRouter?.useRouter?.();
      u ? u.push(c) : window.location.hash = c;
    }, k = () => {
      S();
    };
    e.onMounted(() => {
      const c = localStorage.getItem("sakurafrp-user-token");
      c && (o.value = c, S());
    });
    async function N(c) {
      const u = b.value.token;
      if (!u) {
        w.MessagePlugin.warning("请输入 Token");
        return;
      }
      x.value = !0;
      try {
        const _ = await r.get(
          {
            url: `/user/info?token=${u}`,
            baseURL: "https://api.natfrp.com/v4"
          },
          { withToken: !1 }
        );
        _ && _.name ? (w.MessagePlugin.success("Token验证成功"), o.value = u, localStorage.setItem("sakurafrp-user-token", u), f.value = _, g.value = parseInt(_.group?.level || "0"), await S()) : w.MessagePlugin.error("登录失败：未获取到有效的用户信息");
      } catch (_) {
        w.MessagePlugin.error("验证失败: " + _.message);
      } finally {
        x.value = !1;
      }
    }
    async function S() {
      s.value = !0;
      try {
        const c = await r.get(
          {
            url: `/user/info?token=${o.value}`,
            baseURL: "https://api.natfrp.com/v4"
          },
          { withToken: !1 }
        );
        if (c && c.name)
          f.value = c, g.value = parseInt(c.group?.level || "0");
        else {
          O();
          return;
        }
        const u = await r.get(
          {
            url: `/nodes?token=${o.value}`,
            baseURL: "https://api.natfrp.com/v4"
          },
          { withToken: !1 }
        );
        if (u) {
          const p = {};
          Object.entries(u).forEach(([h, $]) => {
            p[parseInt(h)] = $.name;
          }), n.value = p;
        }
        const _ = await r.get(
          {
            url: `/tunnels?token=${o.value}`,
            baseURL: "https://api.natfrp.com/v4"
          },
          { withToken: !1 }
        );
        Array.isArray(_) && (d.value = _ || [], d.value.length > 0 && !v.value && (v.value = d.value[0].id));
      } catch (c) {
        const u = c.response?.data?.msg || c.msg || c.message || "Token失效或网络异常";
        w.MessagePlugin.error(`数据加载失败，已自动退出Sakura Frp: ${u}`), O();
      } finally {
        s.value = !1;
      }
    }
    async function E() {
      if (a.value) {
        C.value = !0;
        try {
          const c = await r.post(
            {
              url: "/tunnel/config",
              baseURL: "https://api.natfrp.com/v4",
              headers: {
                Authorization: `Bearer ${o.value}`,
                "Content-Type": "application/x-www-form-urlencoded"
              },
              data: `query=${a.value.id}&frpc=0.51.0-sakura-6`
            },
            { withToken: !1 }
          );
          if (!c || typeof c != "string")
            throw new Error("获取配置失败：内容为空或格式异常");
          const u = await r.post({
            url: "/api/plugins/mslx-plugin-sakura-frp/frp/config",
            data: { config: c }
          }), p = (u.code === 200 ? u.data : u)?.startCommand;
          if (!p)
            throw new Error("未能从插件接口成功提取启动指令，请检查后端运行状态");
          const h = await r.post({
            url: "/api/instance/createServer",
            data: {
              name: `${a.value.name} | ${i.value}`,
              path: null,
              java: "none",
              core: "none",
              coreUrl: "",
              coreSha256: "",
              coreFileKey: "",
              packageFileKey: "",
              minM: 1027,
              maxM: 1027,
              args: p,
              ignoreEula: !0
            }
          }), $ = h?.serverId || h?.data?.serverId || "";
          w.MessagePlugin.success(`SakuraFrp 隧道实例 (ID: ${$}) 已成功创建`), m("/instance/list");
        } catch (c) {
          const u = c.response?.data?.msg || c.msg || c.message || "未知错误";
          w.MessagePlugin.error(`创建实例失败: ${u}`);
        } finally {
          C.value = !1;
        }
      }
    }
    const j = () => {
      l.value = !0;
    };
    function O() {
      o.value = "", f.value = null, d.value = [], v.value = null, localStorage.removeItem("sakurafrp-user-token"), w.MessagePlugin.success("已退出登录");
    }
    async function T() {
      await S(), w.MessagePlugin.success("数据已更新");
    }
    async function B() {
      if (a.value) {
        y.value = !0;
        try {
          await r.post(
            {
              url: "/tunnel/delete",
              baseURL: "https://api.natfrp.com/v4",
              headers: { Authorization: `Bearer ${o.value}`, "Content-Type": "application/x-www-form-urlencoded" },
              data: `ids=${a.value.id}`
            },
            { withToken: !1 }
          ), w.MessagePlugin.success("隧道删除成功"), v.value = null, await S();
        } catch (c) {
          w.MessagePlugin.error("删除失败: " + c.message);
        } finally {
          y.value = !1;
        }
      }
    }
    return (c, u) => {
      const _ = e.resolveComponent("t-input"), p = e.resolveComponent("t-form-item"), h = e.resolveComponent("t-button"), $ = e.resolveComponent("t-form"), ae = e.resolveComponent("t-loading"), L = e.resolveComponent("t-tag"), W = e.resolveComponent("t-popconfirm"), ne = e.resolveComponent("t-icon");
      return e.openBlock(), e.createElementBlock("div", { class: "mx-auto pb-6 text-[var(--td-text-color-primary)]" }, [
        o.value === "" ? (e.openBlock(), e.createElementBlock("div", {
          key: 0,
          class: "flex items-center justify-center min-h-[70vh] list-item-anim"
        }, [
          e.createElementVNode("div", {
            class: "design-card relative w-full max-w-md rounded-3xl border border-[var(--td-component-border)] shadow-xl p-10 text-center overflow-hidden",
            style: { "background-color": "color-mix(in srgb, var(--td-bg-color-container) 80%, transparent)", "backdrop-filter": "blur(12px)" }
          }, [
            e.createElementVNode("div", { class: "absolute -top-20 -right-20 w-60 h-60 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl pointer-events-none" }),
            e.createElementVNode("div", { class: "absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl pointer-events-none" }),
            e.createElementVNode("div", { class: "relative z-10 flex flex-col items-center" }, [
              e.createElementVNode("div", {
                class: "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm border",
                style: { "background-color": "color-mix(in srgb, var(--color-primary) 10%, transparent)", "border-color": "color-mix(in srgb, var(--color-primary) 20%, transparent)" }
              }, [
                e.createElementVNode("img", {
                  src: "https://www.natfrp.com/favicon.ico",
                  alt: "logo",
                  class: "text-[var(--color-primary)]"
                })
              ]),
              e.createElementVNode("h2", { class: "text-2xl font-extrabold text-[var(--td-text-color-primary)] !mb-2 tracking-tight" }, "登录 SakuraFrp"),
              e.createElementVNode("p", { class: "text-sm text-[var(--td-text-color-secondary)] !mb-8 font-medium" }, "使用您的访问令牌 (Token) 连接服务"),
              e.createVNode($, {
                data: b.value,
                "label-width": "0",
                onSubmit: u[1] || (u[1] = () => N()),
                class: "w-full text-left"
              }, {
                default: e.withCtx(() => [
                  e.createVNode(p, {
                    name: "token",
                    class: "!mb-6"
                  }, {
                    default: e.withCtx(() => [
                      e.createVNode(_, {
                        modelValue: b.value.token,
                        "onUpdate:modelValue": u[0] || (u[0] = (V) => b.value.token = V),
                        size: "large",
                        type: "password",
                        placeholder: "请输入 SakuraFrp 访问 Token",
                        clearable: "",
                        class: "!rounded-xl"
                      }, {
                        "prefix-icon": e.withCtx(() => [
                          e.createVNode(e.unref(be), { class: "opacity-60" })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e.createVNode(h, {
                    block: "",
                    theme: "primary",
                    type: "submit",
                    size: "large",
                    loading: x.value,
                    class: "!rounded-xl !h-12 !font-bold shadow-md"
                  }, {
                    default: e.withCtx(() => [
                      e.createTextVNode("立即验证 Token")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["data"]),
              e.createElementVNode("div", { class: "mt-8 pt-4 border-t border-dashed border-zinc-200/70 dark:border-zinc-700/60 w-full" }, [
                e.createVNode(h, {
                  variant: "text",
                  size: "small",
                  class: "text-zinc-500 hover:text-[var(--color-primary)]",
                  onClick: u[2] || (u[2] = (V) => m("https://www.natfrp.com/user/"))
                }, {
                  default: e.withCtx(() => [
                    e.createTextVNode("获取 SakuraFrp 账号Token")
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ])) : (e.openBlock(), e.createElementBlock("div", {
          key: 1,
          id: "app-space",
          class: "relative flex flex-col gap-6"
        }, [
          e.createVNode(ae, {
            attach: "#app-space",
            loading: s.value,
            text: "加载数据中..."
          }, null, 8, ["loading"]),
          f.value ? (e.openBlock(), e.createElementBlock("div", {
            key: 0,
            class: "design-card list-item-anim rounded-2xl border border-[var(--td-component-border)] shadow-sm p-5 sm:p-6",
            style: { "background-color": "color-mix(in srgb, var(--td-bg-color-container) 80%, transparent)", "backdrop-filter": "blur(12px)", "animation-delay": "0s" }
          }, [
            e.createElementVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-dashed border-zinc-200/70 dark:border-zinc-700/60" }, [
              e.createElementVNode("div", { class: "flex flex-col" }, [
                e.createElementVNode("h3", { class: "text-lg font-bold text-[var(--td-text-color-primary)] m-0 leading-none" }, "SakuraFrp 账户信息")
              ]),
              e.createElementVNode("div", { class: "flex items-center gap-2" }, [
                e.createVNode(L, {
                  theme: "primary",
                  variant: "light-outline",
                  class: "!rounded-md !font-bold"
                }, {
                  default: e.withCtx(() => [
                    e.createTextVNode(e.toDisplayString(f.value.group?.name || "未知分组"), 1)
                  ]),
                  _: 1
                }),
                e.createElementVNode("div", { class: "w-px h-4 bg-zinc-200 dark:bg-zinc-700 mx-1" }),
                e.createVNode(W, {
                  content: "确认断开 SakuraFrp 的连接吗？",
                  onConfirm: O
                }, {
                  default: e.withCtx(() => [
                    e.createVNode(h, {
                      variant: "text",
                      theme: "danger",
                      size: "small",
                      class: "!rounded-lg hover:bg-red-500/10"
                    }, {
                      default: e.withCtx(() => [
                        e.createTextVNode("退出登录")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            e.createElementVNode("div", { class: "grid grid-cols-2 lg:grid-cols-4 gap-4" }, [
              e.createElementVNode("div", { class: "p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 transition-colors hover:bg-white dark:hover:bg-zinc-800" }, [
                e.createElementVNode("div", { class: "text-[11px] font-extrabold text-[var(--td-text-color-secondary)] uppercase tracking-widest mb-1" }, "用户名称"),
                e.createElementVNode("div", { class: "text-lg font-bold text-[var(--td-text-color-primary)] truncate" }, e.toDisplayString(f.value.name), 1)
              ]),
              e.createElementVNode("div", { class: "p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 transition-colors hover:bg-white dark:hover:bg-zinc-800" }, [
                e.createElementVNode("div", { class: "text-[11px] font-extrabold text-[var(--td-text-color-secondary)] uppercase tracking-widest mb-1" }, "当前隧道数"),
                e.createElementVNode("div", { class: "text-lg font-bold text-[var(--td-text-color-primary)] font-mono" }, [
                  e.createElementVNode("span", { class: "text-[var(--color-primary)]" }, e.toDisplayString(d.value.length), 1),
                  e.createTextVNode(),
                  e.createElementVNode("span", { class: "text-sm font-medium text-zinc-500" }, "条")
                ])
              ]),
              e.createElementVNode("div", { class: "p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 transition-colors hover:bg-white dark:hover:bg-zinc-800" }, [
                e.createElementVNode("div", { class: "text-[11px] font-extrabold text-[var(--td-text-color-secondary)] uppercase tracking-widest mb-1" }, "限速"),
                e.createElementVNode("div", { class: "text-lg font-bold text-[var(--td-text-color-primary)] font-mono" }, e.toDisplayString(f.value.speed || "无限制"), 1)
              ]),
              e.createElementVNode("div", { class: "p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 transition-colors hover:bg-white dark:hover:bg-zinc-800" }, [
                e.createElementVNode("div", { class: "text-[11px] font-extrabold text-[var(--td-text-color-secondary)] uppercase tracking-widest mb-1" }, "VIP 等级"),
                e.createElementVNode("div", { class: "text-[15px] font-bold text-[var(--color-success)] font-mono mt-0.5" }, "Level " + e.toDisplayString(g.value), 1)
              ])
            ])
          ])) : e.createCommentVNode("", !0),
          e.createElementVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" }, [
            e.createElementVNode("div", {
              class: "lg:col-span-5 xl:col-span-4 design-card list-item-anim flex flex-col rounded-2xl border border-[var(--td-component-border)] shadow-sm h-[580px]",
              style: { "background-color": "color-mix(in srgb, var(--td-bg-color-container) 80%, transparent)", "backdrop-filter": "blur(12px)", "animation-delay": "0.1s" }
            }, [
              e.createElementVNode("div", { class: "flex items-center justify-between p-4 sm:p-5 border-b border-dashed border-zinc-200/70 dark:border-zinc-700/60 shrink-0" }, [
                e.createElementVNode("h3", { class: "text-base font-bold text-[var(--td-text-color-primary)] m-0" }, "我的隧道"),
                e.createElementVNode("div", { class: "flex items-center gap-1" }, [
                  e.createVNode(h, {
                    size: "small",
                    variant: "text",
                    class: "!px-2 hover:bg-zinc-100 dark:hover:bg-zinc-700/50",
                    loading: s.value,
                    onClick: T
                  }, {
                    icon: e.withCtx(() => [
                      e.createVNode(e.unref(he))
                    ]),
                    default: e.withCtx(() => [
                      e.createTextVNode("刷新 ")
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  e.createVNode(h, {
                    size: "small",
                    theme: "primary",
                    class: "!px-3 !ml-1 !rounded-lg",
                    onClick: j
                  }, {
                    icon: e.withCtx(() => [
                      e.createVNode(e.unref(ve))
                    ]),
                    default: e.withCtx(() => [
                      e.createTextVNode("新建 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              e.createElementVNode("div", { class: "flex-1 overflow-y-auto custom-scrollbar p-3" }, [
                d.value.length > 0 ? (e.openBlock(), e.createElementBlock("div", {
                  key: 0,
                  class: "flex flex-col gap-2"
                }, [
                  (e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(d.value, (V) => (e.openBlock(), e.createElementBlock("div", {
                    key: V.id,
                    class: e.normalizeClass(["group flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300 border", v.value === V.id ? "shadow-sm" : "bg-transparent border-transparent hover:bg-zinc-50/80 dark:hover:bg-zinc-700/50 hover:border-zinc-200/80 dark:hover:border-zinc-600/80"]),
                    style: e.normalizeStyle(v.value === V.id ? "background-color: color-mix(in srgb, var(--color-primary) 10%, transparent); border-color: color-mix(in srgb, var(--color-primary) 30%, transparent);" : ""),
                    onClick: (Oe) => v.value = V.id
                  }, [
                    e.createElementVNode("div", {
                      class: e.normalizeClass(["w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mr-3 transition-colors", v.value === V.id ? "bg-[var(--color-primary)] text-white shadow-md" : "bg-zinc-100 dark:bg-zinc-900 text-[var(--td-text-color-secondary)] group-hover:text-zinc-800 dark:group-hover:text-zinc-200"])
                    }, [
                      e.createVNode(e.unref(re), { size: "20px" })
                    ], 2),
                    e.createElementVNode("div", { class: "flex-1 min-w-0 mr-3" }, [
                      e.createElementVNode("div", {
                        class: e.normalizeClass(["font-bold text-sm truncate transition-colors", v.value === V.id ? "text-[var(--color-primary)]" : "text-[var(--td-text-color-primary)]"])
                      }, e.toDisplayString(V.name), 3),
                      e.createElementVNode("div", { class: "text-[11px] text-[var(--td-text-color-secondary)] truncate mt-0.5" }, e.toDisplayString(n.value[V.node] || `Node ${V.node}`), 1)
                    ]),
                    e.createElementVNode("div", { class: "shrink-0" }, [
                      V.online ? (e.openBlock(), e.createBlock(L, {
                        key: 0,
                        theme: "success",
                        variant: "light",
                        size: "small",
                        class: "!rounded !font-bold !px-1.5"
                      }, {
                        default: e.withCtx(() => [
                          e.createTextVNode("在线")
                        ]),
                        _: 1
                      })) : (e.openBlock(), e.createBlock(L, {
                        key: 1,
                        theme: "default",
                        variant: "light",
                        size: "small",
                        class: "!rounded !font-bold !px-1.5 !text-zinc-500"
                      }, {
                        default: e.withCtx(() => [
                          e.createTextVNode("离线")
                        ]),
                        _: 1
                      }))
                    ])
                  ], 14, ["onClick"]))), 128))
                ])) : (e.openBlock(), e.createElementBlock("div", {
                  key: 1,
                  class: "h-full flex flex-col items-center justify-center opacity-60"
                }, [
                  e.createVNode(e.unref(re), {
                    size: "32px",
                    class: "text-zinc-400 mb-2"
                  }),
                  e.createElementVNode("span", { class: "text-sm text-zinc-500 font-medium" }, "暂无隧道，请先新建")
                ]))
              ])
            ]),
            e.createElementVNode("div", {
              class: "lg:col-span-7 xl:col-span-8 design-card list-item-anim flex flex-col rounded-2xl border border-[var(--td-component-border)] shadow-sm h-[580px]",
              style: { "background-color": "color-mix(in srgb, var(--td-bg-color-container) 80%, transparent)", "backdrop-filter": "blur(12px)", "animation-delay": "0.2s" }
            }, [
              a.value ? (e.openBlock(), e.createElementBlock(e.Fragment, { key: 0 }, [
                e.createElementVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 border-b border-dashed border-zinc-200/70 dark:border-zinc-700/60 shrink-0" }, [
                  e.createElementVNode("div", { class: "flex flex-col min-w-0" }, [
                    e.createElementVNode("h3", { class: "text-xl font-extrabold text-[var(--td-text-color-primary)] m-0 truncate" }, e.toDisplayString(a.value.name), 1),
                    e.createElementVNode("p", { class: "text-xs text-[var(--td-text-color-secondary)] mt-1 truncate font-mono bg-zinc-100/80 dark:bg-zinc-800/50 w-max px-2 py-0.5 rounded" }, "ID: " + e.toDisplayString(a.value.id), 1)
                  ]),
                  e.createElementVNode("div", { class: "shrink-0" }, [
                    e.createVNode(W, {
                      content: "确认删除此隧道吗？将无法恢复！",
                      theme: "danger",
                      placement: "bottom-right",
                      onConfirm: B
                    }, {
                      default: e.withCtx(() => [
                        e.createVNode(h, {
                          theme: "danger",
                          class: "!rounded-lg hover:!bg-red-500 hover:!text-white transition-colors",
                          loading: y.value
                        }, {
                          icon: e.withCtx(() => [
                            e.createVNode(ne, { name: "delete" })
                          ]),
                          default: e.withCtx(() => [
                            e.createTextVNode(" 删除隧道 ")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                e.createElementVNode("div", { class: "flex-1 overflow-y-auto custom-scrollbar p-5 sm:p-6" }, [
                  e.createElementVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4" }, [
                    e.createElementVNode("div", { class: "p-4 bg-zinc-50/80 dark:bg-zinc-900/50 rounded-xl border border-[var(--td-component-border)] flex flex-col justify-center" }, [
                      e.createElementVNode("span", { class: "text-[11px] font-extrabold text-[var(--td-text-color-secondary)] uppercase tracking-widest mb-1.5" }, "所在节点"),
                      e.createElementVNode("span", {
                        class: "text-sm font-bold text-[var(--td-text-color-primary)] truncate",
                        title: i.value
                      }, e.toDisplayString(i.value), 9, ["title"])
                    ]),
                    e.createElementVNode("div", { class: "p-4 bg-zinc-50/80 dark:bg-zinc-900/50 rounded-xl border border-[var(--td-component-border)] flex flex-col justify-center" }, [
                      e.createElementVNode("span", { class: "text-[11px] font-extrabold text-[var(--td-text-color-secondary)] uppercase tracking-widest mb-1.5" }, "本地地址"),
                      e.createElementVNode("span", { class: "text-sm font-mono font-bold text-[var(--td-text-color-primary)]" }, e.toDisplayString(a.value.local_ip) + ":" + e.toDisplayString(a.value.local_port), 1)
                    ]),
                    e.createElementVNode("div", { class: "p-4 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 flex flex-col justify-center" }, [
                      e.createElementVNode("span", { class: "text-[11px] font-extrabold text-emerald-600/80 dark:text-emerald-500/80 uppercase tracking-widest mb-1.5" }, "远程信息 (端口/域名)"),
                      e.createElementVNode("span", { class: "text-lg font-mono font-extrabold text-emerald-600 dark:text-emerald-400" }, e.toDisplayString(a.value.remote), 1)
                    ]),
                    e.createElementVNode("div", {
                      class: e.normalizeClass(["p-4 rounded-xl flex flex-col justify-center border transition-colors", a.value.online ? "bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-200/50 dark:border-emerald-800/30" : "bg-zinc-50/80 dark:bg-zinc-900/50 border-[var(--td-component-border)]"])
                    }, [
                      e.createElementVNode("span", {
                        class: e.normalizeClass(["text-[11px] font-extrabold uppercase tracking-widest mb-1.5", a.value.online ? "text-emerald-600/80 dark:text-emerald-500/80" : "text-[var(--td-text-color-secondary)]"])
                      }, "当前状态", 2),
                      e.createElementVNode("div", { class: "flex items-center gap-2" }, [
                        a.value.online ? (e.openBlock(), e.createElementBlock("span", {
                          key: 0,
                          class: "w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse"
                        })) : e.createCommentVNode("", !0),
                        e.createElementVNode("span", {
                          class: e.normalizeClass(["text-sm font-bold", a.value.online ? "text-[var(--color-success)]" : "text-zinc-500"])
                        }, e.toDisplayString(a.value.online ? "节点在线" : "离线"), 3)
                      ])
                    ], 2)
                  ]),
                  e.createElementVNode("div", { class: "mt-8" }, [
                    e.createVNode(h, {
                      theme: "primary",
                      size: "large",
                      loading: C.value,
                      block: "",
                      class: "!rounded-xl !h-12 !font-bold shadow-md",
                      onClick: E
                    }, {
                      icon: e.withCtx(() => [
                        e.createVNode(e.unref(ke))
                      ]),
                      default: e.withCtx(() => [
                        e.createTextVNode(" 一键创建映射实例 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ])
              ], 64)) : (e.openBlock(), e.createElementBlock("div", {
                key: 1,
                class: "flex-1 flex flex-col items-center justify-center opacity-50 p-6 text-center"
              }, [
                e.createElementVNode("div", { class: "w-24 h-24 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4" }, [
                  e.createVNode(e.unref(ge), {
                    size: "40px",
                    class: "text-zinc-400"
                  })
                ]),
                e.createElementVNode("h3", { class: "text-base font-bold text-zinc-700 dark:text-zinc-300 mb-1" }, "未选择隧道"),
                e.createElementVNode("p", { class: "text-sm text-zinc-500" }, "请在左侧列表中选择一个隧道以查看详细信息")
              ]))
            ])
          ])
        ])),
        l.value ? (e.openBlock(), e.createBlock(_e, {
          key: 2,
          visible: l.value,
          "onUpdate:visible": u[3] || (u[3] = (V) => l.value = V),
          token: o.value,
          userLevel: g.value,
          onSuccess: k
        }, null, 8, ["visible", "token", "userLevel"])) : e.createCommentVNode("", !0)
      ]);
    };
  }
}), Se = /* @__PURE__ */ le(Ee, [["__scopeId", "data-v-d7f7e20e"]]), ze = {
  name: "mslx-plugin-sakura-frp",
  version: "1.0.0",
  routes: [],
  extensions: [
    {
      slot: "frp-create-provider",
      component: Se,
      label: "SakuraFrp 官版Frpc"
    }
  ]
};
export {
  ze as pluginConfig
};
