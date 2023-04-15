"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[2929],{8570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(5675),a=(n(79),n(8570));const r={slug:"2022-tsc-esm-fix",title:"Fixing TypeScript code for ESM with `tsc-esm-fix`",authors:["unional"],tags:["typescript","ESM"]},i="Migrating TypeScript code for type: module",s={permalink:"/typescript-blackbook/blog/2022-tsc-esm-fix",editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/blog/2022-06-05-tsc-esm-fix.mdx",source:"@site/blog/2022-06-05-tsc-esm-fix.mdx",title:"Fixing TypeScript code for ESM with `tsc-esm-fix`",description:"TypeScript 4.7 is released \ud83c\udf89!",date:"2022-06-05T00:00:00.000Z",formattedDate:"June 5, 2022",tags:[{label:"typescript",permalink:"/typescript-blackbook/blog/tags/typescript"},{label:"ESM",permalink:"/typescript-blackbook/blog/tags/esm"}],readingTime:2.97,hasTruncateMarker:!1,authors:[{name:"Homa Wong (unional)",title:"Clean Architect",url:"https://github.com/unional",imageURL:"https://github.com/unional.png",key:"unional"}],frontMatter:{slug:"2022-tsc-esm-fix",title:"Fixing TypeScript code for ESM with `tsc-esm-fix`",authors:["unional"],tags:["typescript","ESM"]},prevItem:{title:"equality-is-hard",permalink:"/typescript-blackbook/blog/2023/04/13/equality-is-hard"},nextItem:{title:"Migrating to ESM",permalink:"/typescript-blackbook/blog/2022-migrate-to-esm"}},l={authorsImageUrls:[void 0]},p=[{value:"The <code>.js</code> extension debate",id:"the-js-extension-debate",level:2},{value:"broken source map",id:"broken-source-map",level:2},{value:"ts-loader workaround",id:"ts-loader-workaround",level:2},{value:"jest ESM workaround",id:"jest-esm-workaround",level:2},{value:"<code>tsc-esm-fix</code>",id:"tsc-esm-fix",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TypeScript 4.7 is released \ud83c\udf89!"),(0,a.kt)("p",null,"The wait is finally over.\nYou are excited to start your migration."),(0,a.kt)("p",null,"So you update your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),",\nupdate your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),",\nand volia, you are greeted with a boat load of errors."),(0,a.kt)("p",null,"What you need to do is to update your ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add ",(0,a.kt)("inlineCode",{parentName:"li"},".js")," extension for files, or"),(0,a.kt)("li",{parentName:"ul"},"add ",(0,a.kt)("inlineCode",{parentName:"li"},"/index.js")," for folders.")),(0,a.kt)("p",null,"You can do that manually,\nor you can use a tool to help you on that."),(0,a.kt)("p",null,"The tool (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/antongolub/tsc-esm-fix"},(0,a.kt)("inlineCode",{parentName:"a"},"tsc-esm-fix")),") is the focus of the topic today.\nBut before that,\nlet me highlight a few things about the current state of the ",(0,a.kt)("inlineCode",{parentName:"p"},"type: module")," support in TypeScript 4.7,\nso that you can decide should you take the jump right now,\nor should you wait a little bit longer."),(0,a.kt)("p",null,"There are four issues that I'm aware of related to ",(0,a.kt)("inlineCode",{parentName:"p"},"type: module"),"."),(0,a.kt)("h2",{id:"the-js-extension-debate"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},".js")," extension debate"),(0,a.kt)("p",null,"The first one is a debate around the ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," extension."),(0,a.kt)("p",null,"The take aways are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".js")," is artifical, pointing to a non-existing file"),(0,a.kt)("li",{parentName:"ul"},"TypeScript team do not want to rewrite JS code"),(0,a.kt)("li",{parentName:"ul"},"NodeJS needs extra tricks to detect the source type")),(0,a.kt)("p",null,"You can read about the detail here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/TypeScript/issues/49083"},"https://github.com/microsoft/TypeScript/issues/49083")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/TypeScript/issues/16577#issuecomment-754941937"},"https://github.com/microsoft/TypeScript/issues/16577#issuecomment-754941937"))),(0,a.kt)("h2",{id:"broken-source-map"},"broken source map"),(0,a.kt)("p",null,"The second one is that source map is currently broken."),(0,a.kt)("p",null,"If your code will be used in the browser,\nyou need to weight that in."),(0,a.kt)("p",null,"You can read about the detail here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/49335"},"https://github.com/microsoft/TypeScript/issues/49335")),(0,a.kt)("h2",{id:"ts-loader-workaround"},"ts-loader workaround"),(0,a.kt)("p",null,"The third one is that currently ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},(0,a.kt)("inlineCode",{parentName:"a"},"ts-loader"))," does not support ESM module out of the box."),(0,a.kt)("p",null,"You have to do two things."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"use the ",(0,a.kt)("inlineCode",{parentName:"li"},"NormalModuleReplacmentPlugin"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  plugins: [\n    new NormalModuleReplacementPlugin(/.js$/, (resource) => {\n      if (/node_modules/.test(resource.context)) return\n      resource.request = resource.request.replace(/.js$/, '')\n    })\n  ]\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Do not use ",(0,a.kt)("inlineCode",{parentName:"li"},"transpileOnly: true"),". It does not work.")),(0,a.kt)("p",null,"If I have time, I might dig in to help ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},(0,a.kt)("inlineCode",{parentName:"a"},"ts-loader"))," about this,\nbut not sure when I'll be able to do that."),(0,a.kt)("p",null,"You can read about the detail heere: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/issues/1463"},"https://github.com/TypeStrong/ts-loader/issues/1463")),(0,a.kt)("h2",{id:"jest-esm-workaround"},"jest ESM workaround"),(0,a.kt)("p",null,"The last one is an outstanding one,\nthat ",(0,a.kt)("a",{parentName:"p",href:"http://facebook.github.io/jest/"},(0,a.kt)("inlineCode",{parentName:"a"},"jest"))," does not have native support of ESM."),(0,a.kt)("p",null,"Meaning when you use ",(0,a.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/"},(0,a.kt)("inlineCode",{parentName:"a"},"ts-jest")),", you also need to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest#using-babel"},(0,a.kt)("inlineCode",{parentName:"a"},"babel-jest"))," to transpile dependencies within ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,a.kt)("p",null,"Here is a nutshell of what you need to do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.mjs\nexport default {\n  preset: 'ts-jest/presets/default-esm',\n  globals: {\n    'ts-jest': {\n      useESM: true\n    }\n  },\n  moduleNameMapper: {\n    // remove the phantom `.js` extension\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n    // If dependency doing `import ... from '#<pkg>'.\n    // e.g. `chalk` has this: `import ... form '#ansi-styles'`\n    '#(.*)': '<rootDir>/node_modules/$1'\n  },\n  transformIgnorePatterns: [\n    // Need to MANUALLY identify each ESM package, one by one\n    'node_modules/(?!(@unional\\\\fixture|chalk)/)'\n  ],\n  transform: {\n    '^.+\\\\.(js|jsx|mjs)$': 'babel-jest',\n  }\n}\n")),(0,a.kt)("p",null,"You can find related information here: ",(0,a.kt)("a",{parentName:"p",href:"https://dev.to/steveruizok/jest-and-esm-cannot-use-import-statement-outside-a-module-4mmj"},"https://dev.to/steveruizok/jest-and-esm-cannot-use-import-statement-outside-a-module-4mmj")),(0,a.kt)("h2",{id:"tsc-esm-fix"},(0,a.kt)("inlineCode",{parentName:"h2"},"tsc-esm-fix")),(0,a.kt)("p",null,"Now, if you decide to move ahead,\nthen you can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/antongolub/tsc-esm-fix"},(0,a.kt)("inlineCode",{parentName:"a"},"tsc-esm-fix"))," to help you."),(0,a.kt)("p",null,"I used it to help me migrating ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/unional/type-plus"},(0,a.kt)("inlineCode",{parentName:"a"},"type-plus")),", which has 140+ files.\nI'm using it for other packages as I'm writing this blog."),(0,a.kt)("p",null,"I have discovered a few bugs and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/antongolub"},"@antongolub")," is very quick to fix them.\nGo to the repo and give it a star \u2b50!"),(0,a.kt)("p",null,"The easiest way to use it is through ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn dlx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx tsc-esm-fix --src=<src> --ext='.js'\n\n# or\nyarn dlx tsc-esm-fix --src=<src> --ext='.js'\n")),(0,a.kt)("p",null,"For ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/unional/type-plus"},(0,a.kt)("inlineCode",{parentName:"a"},"type-plus")),", since I put the source code under the ",(0,a.kt)("inlineCode",{parentName:"p"},"ts")," folder,\nso the command is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx tsc-esm-fix --src=ts --ext='.js'\n")),(0,a.kt)("p",null,"If you put your source code under the typical ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder,\nthen the command is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx tsc-esm-fix --src=src --ext='.js'\n")),(0,a.kt)("p",null,"Happy Coding, \ud83e\uddd1\u200d\ud83d\udcbb"))}m.isMDXComponent=!0}}]);