"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[1526],{8570:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},p=Object.keys(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),o=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||p;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,a=new Array(p);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var o=2;o<p;o++)a[o]=n[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var i=n(9675),r=(n(79),n(8570));const p={slug:"2022-eslint-plugin-peer-deps",title:"@typescript-eslint/eslint-plugin should be a peer dependency",authors:["unional"],tags:["typescript","eslint","@typescript-eslint"]},a="The Problem",l={permalink:"/typescript-blackbook/blog/2022-eslint-plugin-peer-deps",editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/blog/2022-05-15-eslint-plugin-peer-deps.mdx",source:"@site/blog/2022-05-15-eslint-plugin-peer-deps.mdx",title:"@typescript-eslint/eslint-plugin should be a peer dependency",description:"Recently I run into this problem:",date:"2022-05-15T00:00:00.000Z",formattedDate:"May 15, 2022",tags:[{label:"typescript",permalink:"/typescript-blackbook/blog/tags/typescript"},{label:"eslint",permalink:"/typescript-blackbook/blog/tags/eslint"},{label:"@typescript-eslint",permalink:"/typescript-blackbook/blog/tags/typescript-eslint"}],readingTime:.975,hasTruncateMarker:!1,authors:[{name:"Homa Wong (unional)",title:"Clean Architect",url:"https://github.com/unional",imageURL:"https://github.com/unional.png",key:"unional"}],frontMatter:{slug:"2022-eslint-plugin-peer-deps",title:"@typescript-eslint/eslint-plugin should be a peer dependency",authors:["unional"],tags:["typescript","eslint","@typescript-eslint"]},prevItem:{title:"Migrating to ESM",permalink:"/typescript-blackbook/blog/2022-migrate-to-esm"},nextItem:{title:"TypeScript is ... an abstraction",permalink:"/typescript-blackbook/blog/2022-typescript-is-abstraction"}},s={authorsImageUrls:[void 0]},o=[{value:"Plugin and dependency",id:"plugin-and-dependency",level:2}],c={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Recently I run into this problem:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ESLint couldn\'t determine the plugin "@typescript-eslint" uniquely.\n\n- ...\\node_modules\\@typescript-eslint\\eslint-plugin\\dist\\index.js (loaded in ".eslintrc.json")\n- ...\\node_modules\\eslint-config-react-app\\node_modules\\@typescript-eslint\\eslint-plugin\\dist\\index.js (loaded in ".eslintrc.json \xbb eslint-config-react-app#overrides[0]")\n')),(0,r.kt)("p",null,"It is caused by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app"},"eslint-config-react-app")," using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin"},"@typescript-eslint/eslint-plugin")," as a ",(0,r.kt)("inlineCode",{parentName:"p"},"dependency")," instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"peer dependency"),"."),(0,r.kt)("p",null,"Here is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/12400"},"GitHub issue")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app"},"eslint-config-react-app")," (also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/11828"},"here"),")."),(0,r.kt)("h2",{id:"plugin-and-dependency"},"Plugin and dependency"),(0,r.kt)("p",null,"The problem is when one plugin uses another plugin,\nit should always declare the dependency as a ",(0,r.kt)("inlineCode",{parentName:"p"},"peer dependency"),"."),(0,r.kt)("p",null,"The reason is simple."),(0,r.kt)("p",null,"The host application (ESLint in this case) controls and loads its plugins.\nIf the host application is not designed to support loading multiple versions of the same plugin at the same time,\nwhich most of them don't, then the result is an undefined behavior."),(0,r.kt)("p",null,"That's why ESLint plainly detects and disallows it."),(0,r.kt)("p",null,"It also mentioned it in ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config"},"its doc"),"."),(0,r.kt)("p",null,"Yes, that means the consuming repository needs to add the dependency themselves.\nAny version incompatibility in the dependency graph would lead to the ",(0,r.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/advanced/npm_doppelgangers/"},"doppelg\xe4ngers")," problem."),(0,r.kt)("p",null,"That is an inherited problem of NodeJS resolution algorithm, and is a topic for another day."),(0,r.kt)("p",null,"Happy coding, \ud83e\uddd1\u200d\ud83d\udcbb"))}u.isMDXComponent=!0}}]);