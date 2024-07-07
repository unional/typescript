"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[2850],{369:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),y=r,m=s["".concat(c,".").concat(y)]||s[y]||g[y]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(211),r=(n(7378),n(369));const o={slug:"package_name",title:"Naming your package",authors:["unional"],tags:["project"]},i=void 0,p={unversionedId:"guidelines/project/package_name",id:"guidelines/project/package_name",title:"Naming your package",description:"When you create a package,",source:"@site/docs/guidelines/project/package_name.mdx",sourceDirName:"guidelines/project",slug:"/guidelines/project/package_name",permalink:"/typescript-blackbook/docs/guidelines/project/package_name",draft:!1,editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/docs/guidelines/project/package_name.mdx",tags:[{label:"project",permalink:"/typescript-blackbook/docs/tags/project"}],version:"current",frontMatter:{slug:"package_name",title:"Naming your package",authors:["unional"],tags:["project"]},sidebar:"tutorialSidebar",previous:{title:"package.json",permalink:"/typescript-blackbook/docs/guidelines/project/package-json"},next:{title:"Declaration Map",permalink:"/typescript-blackbook/docs/tsconfig/declaration_map"}},c={},l=[],u={toc:l},s="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"When you create a package,\nyou always have to go through the painfull process of naming your package."),(0,r.yg)("p",null,"While it is not specific to TypeScript,\nit is still beneficial to follow certain guidelines to make your life a bit easier."),(0,r.yg)("hr",null),(0,r.yg)("p",null,"You ",(0,r.yg)("strong",{parentName:"p"},"should")," use ",(0,r.yg)("inlineCode",{parentName:"p"},"snake_case")," for your package name."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Why?")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://nodejs.org/"},"NodeJS")," is not opinionated about package names, but\n",(0,r.yg)("a",{parentName:"p",href:"https://deno.land/x?page=2#Q&A"},"Deno")," prohibits using ",(0,r.yg)("inlineCode",{parentName:"p"},"kebab-case")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"PascalCase")," as module name."),(0,r.yg)("p",null,"Since ",(0,r.yg)("a",{parentName:"p",href:"https://deno.land/x?page=2#Q&A"},"Deno")," is likely to stay, you should use ",(0,r.yg)("inlineCode",{parentName:"p"},"snake_case")," so that they are consistent."),(0,r.yg)("hr",null),(0,r.yg)("p",null,"You ",(0,r.yg)("strong",{parentName:"p"},"should")," name your package with nouns."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Why?")),(0,r.yg)("p",null,"Naming your package with verbs typically means your package is doing just one thing."),(0,r.yg)("p",null,"Of course, if that is what you want, that's fine."),(0,r.yg)("p",null,"But naming your package with nouns allows you to add similar features to your package, without causing confusion."))}g.isMDXComponent=!0}}]);