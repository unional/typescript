"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[8091],{369:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,h=u["".concat(p,".").concat(g)]||u[g]||y[g]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(211),o=(n(7378),n(369));const r={slug:"2022-typescript-is-abstraction",title:"TypeScript is ... an abstraction",authors:["unional"],tags:["typescript"]},i=void 0,s={permalink:"/typescript-blackbook/blog/2022-typescript-is-abstraction",editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/blog/2022-05-14-typescript-is-abstraction.mdx",source:"@site/blog/2022-05-14-typescript-is-abstraction.mdx",title:"TypeScript is ... an abstraction",description:"[TypeScript 4.7] is just around the corner.",date:"2022-05-14T00:00:00.000Z",formattedDate:"May 14, 2022",tags:[{label:"typescript",permalink:"/typescript-blackbook/blog/tags/typescript"}],readingTime:3.395,hasTruncateMarker:!1,authors:[{name:"Homa Wong (unional)",title:"Clean Architect",url:"https://github.com/unional",imageURL:"https://github.com/unional.png",key:"unional"}],frontMatter:{slug:"2022-typescript-is-abstraction",title:"TypeScript is ... an abstraction",authors:["unional"],tags:["typescript"]},prevItem:{title:"@typescript-eslint/eslint-plugin should be a peer dependency",permalink:"/typescript-blackbook/blog/2022-eslint-plugin-peer-deps"}},p={authorsImageUrls:[void 0]},l=[{value:"TypeScript is an abstraction",id:"typescript-is-an-abstraction",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:l},u="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-rc/"},"TypeScript 4.7")," is just around the corner."),(0,o.yg)("p",null,"I feel like it is a good time for me to update this TypeScript guidelines\nwith what I have learn over the years and how am I using it nowadays."),(0,o.yg)("p",null,"As you can see,\nI've reorganized the repository and added this GitHub page\nto make it easier to share the knowledge."),(0,o.yg)("p",null,"In these blog posts,\nI'm going to share the bits and tips that I learned every day.\nEventually this information will be incorporated into the guidelines."),(0,o.yg)("p",null,"To kick things off, I'm going to talk about what TypeScript is in 2022?"),(0,o.yg)("p",null,"No no, not about the history of TypeScript."),(0,o.yg)("p",null,"It's about how I look at TypeScript and how I use it."),(0,o.yg)("p",null,"It's about when I follow the rules and when I break them."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"I know all the rules, and then I know how to break 'em")),(0,o.yg)("h2",{id:"typescript-is-an-abstraction"},"TypeScript is an abstraction"),(0,o.yg)("p",null,"Programming language is an abstraction."),(0,o.yg)("p",null,"The abstraction I'm talking about is not the abstraction of defining an interface or class or inheritance."),(0,o.yg)("p",null,"It's about the code you wrote, the text you typed in the ",(0,o.yg)("inlineCode",{parentName:"p"},".ts")," or ",(0,o.yg)("inlineCode",{parentName:"p"},".tsx")," file."),(0,o.yg)("p",null,"It is an abstraction over the actual binary code executed by the JavaScript engine."),(0,o.yg)("p",null,"A good abstraction emphasizes the important but sometimes has a cost of skipping over some details."),(0,o.yg)("p",null,"For example, the digital zeros and ones are an abstraction over the analog electrical currents."),(0,o.yg)("p",null,"Most of the time, at least in the sense of modern computing,\nmissing the details on the different levels of electrical currents is a good thing.\nAnd we as a programmer don't ever need to think about it."),(0,o.yg)("p",null,"But to the eye of hardware engineer,\nit is not something they can ignore because there are physical rules they have to follow,\nand there are actual consequences when putting two wires too close to each other."),(0,o.yg)("p",null,"The abstraction of programming language is the same.\nIt is good for most cases, but at some point it will start to breakdown."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"rust")," is a good example of this.\nIts ownership model guarantee memory-safety and thread-safety.\nBut there are rare cases you need to break the rules thus there is a ",(0,o.yg)("inlineCode",{parentName:"p"},"unsafe")," keyword for it."),(0,o.yg)("p",null,"For ",(0,o.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),', it is not designed to be a 100% sounded language.\nThat means you will run into those "rare" cases a lot more often.'),(0,o.yg)("p",null,"You can learn more about soundness ",(0,o.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/type-compatibility.html#a-note-on-soundness"},"here")," and ",(0,o.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?strictFunctionTypes=false#example/soundness"},"here"),"."),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"So what should you do? Embrace it."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"unsafe")," keyword in ",(0,o.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"any"),".\nWhile you should avoid using ",(0,o.yg)("inlineCode",{parentName:"p"},"any")," in most cases,\nit is often enough that your tool chain should not prevent or punish you from using it."),(0,o.yg)("p",null,"You might think,"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\"hey, I'm working in a team and I don't want my team members who are less familiar with TypeScript to abuse the usage of ",(0,o.yg)("inlineCode",{parentName:"p"},"any"),'."')),(0,o.yg)("p",null,"Yes, that is a legit concern,\nand you can make your own judgement for your circumstances."),(0,o.yg)("p",null,"My personal experience is that the number of times I have to break the rules are common enough that making exceptions for the tools (e.g. adding ",(0,o.yg)("inlineCode",{parentName:"p"},"// eslint ignore")," comments) clutter the code and make the code harder to read."),(0,o.yg)("p",null,"My approach is to rely on unit tests and code reviews to make sure the usage of ",(0,o.yg)("inlineCode",{parentName:"p"},"any")," are in check."),(0,o.yg)("p",null,"Also, defining the correct type is not always easy and can take significant amount of time.\nIf you are working under a schedule, you might not have time to do that."),(0,o.yg)("p",null,"Another point to make is that since ",(0,o.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is constantly improving,\nif you build some complex types, it might work in one version and break in another version."),(0,o.yg)("p",null,"ASK ME HOW I KNOW IT."),(0,o.yg)("p",null,"Of course, I'm not saying allowing your code litters with ",(0,o.yg)("inlineCode",{parentName:"p"},"any")," and call it a day.\nYou should keep track on those usages and clean it up when you get a chance to."),(0,o.yg)("p",null,"Converting ",(0,o.yg)("inlineCode",{parentName:"p"},"any")," back to a proper type improves efficiency.\nAs that is why we use ",(0,o.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),"."),(0,o.yg)("p",null,"And you may discover some bugs along the way."))}y.isMDXComponent=!0}}]);