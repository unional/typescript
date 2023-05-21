"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[5026],{8570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=n(9675),r=(n(79),n(8570));const a={slug:"2022-migrate-to-esm",title:"Migrating to ESM",authors:["unional"],tags:["typescript","ESM"]},i="The future is here",p={permalink:"/typescript-blackbook/blog/2022-migrate-to-esm",editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/blog/2022-05-17-migrate-to-esm.mdx",source:"@site/blog/2022-05-17-migrate-to-esm.mdx",title:"Migrating to ESM",description:"ESM, or ECMAScript Module, was original part of the ES6/ES2015 specification.",date:"2022-05-17T00:00:00.000Z",formattedDate:"May 17, 2022",tags:[{label:"typescript",permalink:"/typescript-blackbook/blog/tags/typescript"},{label:"ESM",permalink:"/typescript-blackbook/blog/tags/esm"}],readingTime:2.365,hasTruncateMarker:!1,authors:[{name:"Homa Wong (unional)",title:"Clean Architect",url:"https://github.com/unional",imageURL:"https://github.com/unional.png",key:"unional"}],frontMatter:{slug:"2022-migrate-to-esm",title:"Migrating to ESM",authors:["unional"],tags:["typescript","ESM"]},prevItem:{title:"Fixing TypeScript code for ESM with `tsc-esm-fix`",permalink:"/typescript-blackbook/blog/2022-tsc-esm-fix"},nextItem:{title:"@typescript-eslint/eslint-plugin should be a peer dependency",permalink:"/typescript-blackbook/blog/2022-eslint-plugin-peer-deps"}},l={authorsImageUrls:[void 0]},s=[{value:"The big migration",id:"the-big-migration",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ESM, or ECMAScript Module, was original part of the ES6/ES2015 specification.\nIt turned out to be difficult to implement and was pulled from the core specification at the last minute."),(0,r.kt)("p",null,"There were many discussions and argument about it.\nAt one point, it almost falls apart because NodeJS couldn't get to a good design to get CommonJS and ESM to co-exist."),(0,r.kt)("p",null,"Fast-forward a few years, ESM is mature enough to be used on both NodeJS and browsers."),(0,r.kt)("p",null,"By now, I'm pretty sure you have heard of it already."),(0,r.kt)("p",null,"But for people who write code in TypeScript, while we use ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," for a very long time,\nwe were not able to publish the code as ESM."),(0,r.kt)("p",null,"What's worse is that, some JavaScript code moved on to ESM and the new module package in NodeJS,\nand TypeScript code cannot consume them."),(0,r.kt)("p",null,"So the TypeScript code is being left behind."),(0,r.kt)("p",null,"TypeScript 4.5 planned to support the new module system,\nbut the support was pulled due to some cases were not resolved."),(0,r.kt)("p",null,"While it was heartbreaking when the announcement was made,\nI completely understand and support the rationale behind it."),(0,r.kt)("p",null,"It would be much worse if the solution is half-baked and released to the world.\nThe damage it causes could be devastating."),(0,r.kt)("p",null,"TypeScript 4.7 is trying to provide the support again,\nand hopefully it's here to stay."),(0,r.kt)("h2",{id:"the-big-migration"},"The big migration"),(0,r.kt)("p",null,"So how to migrate your code to ESM?"),(0,r.kt)("p",null,"Upgrade TypeScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --dev typescript@rc\n\nyarn add -D typescript@rc\n")),(0,r.kt)("p",null,"(or ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript")," without ",(0,r.kt)("inlineCode",{parentName:"p"},"@rc")," when 4.7 is released)."),(0,r.kt)("p",null,"Update your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "module",\n  "exports": {\n    ".": {\n      "import": {\n        "default": "<path to main>",\n        "types": "<path to d.ts>"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-rc/"},"TypeScript 4.7")," announcement and other places mentioned you can provide fallback for CommonJS,\nbut in general it could cause problems as that will increase the chance of having multiple copies of your library exist in runtime."),(0,r.kt)("p",null,"Update your ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements to add ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," extension.\ne.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// import { foo } from './foo'\nimport { foo } from './foo.js'\n")),(0,r.kt)("p",null,"Update your project files from ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," to either ",(0,r.kt)("inlineCode",{parentName:"p"},".cjs")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".mjs"),"."),(0,r.kt)("p",null,"When you set the package to use ",(0,r.kt)("inlineCode",{parentName:"p"},'"type": "module"'),",\nYour project files such as ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js")," becomes ambiguous,\nand you have to update the file extension to reflect if the file is a CommonJS or ESM file."),(0,r.kt)("p",null,"Some tools might not work with the new module format.\nYou have to disable them for now."),(0,r.kt)("p",null,"To me, I found that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ai/size-limit"},(0,r.kt)("inlineCode",{parentName:"a"},"size-limit"))," does not support it yet."),(0,r.kt)("p",null,"Also, I found that I can't import the default export from TypeScript package transpiled to CommonJS."),(0,r.kt)("p",null,"Don't know if that is by design or it is a bug yet."),(0,r.kt)("p",null,"You can take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/unional/global-store/tree/esm"},(0,r.kt)("inlineCode",{parentName:"a"},"global-store")," PR")," as an example."),(0,r.kt)("p",null,"Happy Coding, \ud83e\uddd1\u200d\ud83d\udcbb"))}c.isMDXComponent=!0}}]);