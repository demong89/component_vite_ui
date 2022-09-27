var vueUI = (function (e, t) {
  "use strict";
  const n = {
      size: { type: String, default: "medium" },
      color: { type: String, default: "blue" },
      round: { type: Boolean, default: !1 },
      plain: { type: Boolean, default: !1 },
      icon: { type: String, default: "" },
    },
    o = t.defineComponent({
      name: "SButton",
      props: n,
      setup(e, { slots: n }) {
        const o = {
          small: { x: "2", y: "1", text: "sm" },
          medium: { x: "3", y: "1.5", text: "base" },
          large: { x: "4", y: "2", text: "lg" },
        };
        return () =>
          t.createVNode(
            "button",
            {
              class: `\n          py-${o[e.size].y}\n          px-${
                o[e.size].x
              }\n          ${
                e.round ? "rounded-full" : "rounded-lg"
              }\n          bg-${e.color}-${
                e.plain ? "100" : "500"
              }\n          hover:bg-${e.color}-400\n          border-${
                e.color
              }-${
                (e.plain, "500")
              }\n          cursor-pointer\n          border-solid\n          text-${
                e.plain ? e.color + "-500" : "white"
              }\n          text-${
                o[e.size].text
              }\n          hover:text-white\n          transition duration-300 ease-in-out transform hover:scale-105\n          mx-1\n          `,
            },
            [
              "" !== e.icon
                ? t.createVNode(
                    "i",
                    { class: `i-ic-baseline-${e.icon} p-3` },
                    null
                  )
                : "",
              n.default ? n.default() : "",
            ]
          );
      },
    });
  const l = ((e, t) => {
      const n = e.__vccOpts || e;
      for (const [o, l] of t) n[o] = l;
      return n;
    })({ name: "SFCButton" }, [
      [
        "render",
        function (e, n, o, l, r, u) {
          return (
            t.openBlock(), t.createElementBlock("button", null, "SFC Button")
          );
        },
      ],
    ]),
    r = t.defineComponent({
      name: "JSXButton",
      render: () =>
        t.createVNode("button", null, [t.createTextVNode("JSX Button")]),
    }),
    u = {
      install(e) {
        console.log("install xxx", o),
          e.component(o.name, o),
          e.component(l.name, l),
          e.component(r.name, r);
      },
    };
  return (
    (e.JSXButton = r),
    (e.MyButton = o),
    (e.SFCButton = l),
    (e.default = u),
    Object.defineProperties(e, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: "Module" },
    }),
    e
  );
})({}, Vue);


// searchValue: /(\\?")?#--unocss--\s*{\s*layer\s*:\s*(.+?);?\s*}/g


function replacer(...arg){
  console.log(...arg);
  
}

const values = [];

String.prototype.replace.call('!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).vueUI={},e.Vue)}(this,(function(e,t){"use strict";const n={size:{type:String,default:"medium"},color:{type:String,default:"blue"},round:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},icon:{type:String,default:""}},o=t.defineComponent({name:"SButton",props:n,setup(e,{slots:n}){const o={small:{x:"2",y:"1",text:"sm"},medium:{x:"3",y:"1.5",text:"base"},large:{x:"4",y:"2",text:"lg"}};return()=>t.createVNode("button",{class:`\n          py-${o[e.size].y}\n          px-${o[e.size].x}\n          ${e.round?"rounded-full":"rounded-lg"}\n          bg-${e.color}-${e.plain?"100":"500"}\n          hover:bg-${e.color}-400\n          border-${e.color}-${e.plain,"500"}\n          cursor-pointer\n          border-solid\n          text-${e.plain?e.color+"-500":"white"}\n          text-${o[e.size].text}\n          hover:text-white\n          transition duration-300 ease-in-out transform hover:scale-105\n          mx-1\n          `},[""!==e.icon?t.createVNode("i",{class:`i-ic-baseline-${e.icon} p-3`},null):"",n.default?n.default():""])}});const l=((e,t)=>{const n=e.__vccOpts||e;for(const[o,l]of t)n[o]=l;return n})({name:"SFCButton"},[["render",function(e,n,o,l,u,r){return t.openBlock(),t.createElementBlock("button",null,"SFC Button")}]]),u=t.defineComponent({name:"JSXButton",render:()=>t.createVNode("button",null,[t.createTextVNode("JSX Button")])}),r={install(e){console.log("install xxx",o),e.component(o.name,o),e.component(l.name,l),e.component(u.name,u)}};e.JSXButton=u,e.MyButton=o,e.SFCButton=l,e.default=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));', /(\\?")?#--unocss--\s*{\s*layer\s*:\s*(.+?);?\s*}/g, (...args) => {
  // console.log('===========\n');
  // console.log('\n ...args:',...args);
  // // console.log('\n searchValue:',searchValue);
  // console.log('\n');
  values.push(replacer(...args));

  return "";
});

'!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).vueUI={},e.Vue)}(this,(function(e,t){"use strict";const n={size:{type:String,default:"medium"},color:{type:String,default:"blue"},round:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},icon:{type:String,default:""}},o=t.defineComponent({name:"SButton",props:n,setup(e,{slots:n}){const o={small:{x:"2",y:"1",text:"sm"},medium:{x:"3",y:"1.5",text:"base"},large:{x:"4",y:"2",text:"lg"}};return()=>t.createVNode("button",{class:`\n          py-${o[e.size].y}\n          px-${o[e.size].x}\n          ${e.round?"rounded-full":"rounded-lg"}\n          bg-${e.color}-${e.plain?"100":"500"}\n          hover:bg-${e.color}-400\n          border-${e.color}-${e.plain,"500"}\n          cursor-pointer\n          border-solid\n          text-${e.plain?e.color+"-500":"white"}\n          text-${o[e.size].text}\n          hover:text-white\n          transition duration-300 ease-in-out transform hover:scale-105\n          mx-1\n          `},[""!==e.icon?t.createVNode("i",{class:`i-ic-baseline-${e.icon} p-3`},null):"",n.default?n.default():""])}});const l=((e,t)=>{const n=e.__vccOpts||e;for(const[o,l]of t)n[o]=l;return n})({name:"SFCButton"},[["render",function(e,n,o,l,u,r){return t.openBlock(),t.createElementBlock("button",null,"SFC Button")}]]),u=t.defineComponent({name:"JSXButton",render:()=>t.createVNode("button",null,[t.createTextVNode("JSX Button")])}),r={install(e){console.log("install xxx",o),e.component(o.name,o),e.component(l.name,l),e.component(u.name,u)}};e.JSXButton=u,e.MyButton=o,e.SFCButton=l,e.default=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));'.replace(/(\\?")?#--unocss--\s*{\s*layer\s*:\s*(.+?);?\s*}/g,(...arg)=>{
console.log(...arg);

})
