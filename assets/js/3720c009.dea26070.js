"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[4787],{4945:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(7378),n=a(2767),r=a(6312),c=a(3192),s=a(8339),g=a(8678),m=a(7220),o=a(2702);function u(e){let{tags:t}=e;const a=(0,r.b)();return l.createElement(c.e3,{className:(0,n.A)(s.G.wrapper.docsPages,s.G.page.docsTagsListPage)},l.createElement(c.be,{title:a}),l.createElement(o.A,{tag:"doc_tags_list"}),l.createElement(g.A,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(m.A,{tags:t}))))))}},2938:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(7378),n=a(2767),r=a(1291);const c={tag:"tag_J4_R",tagRegular:"tagRegular_Hm2U",tagWithCount:"tagWithCount_OXkl"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(r.A,{href:t,className:(0,n.A)(c.tag,s?c.tagWithCount:c.tagRegular)},a,s&&l.createElement("span",null,s))}},7220:(e,t,a)=>{a.d(t,{A:()=>g});var l=a(7378),n=a(6312),r=a(2938);const c={tag:"tag_pAE_"};function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c.tag},l.createElement(r.A,e))))),l.createElement("hr",null))}function g(e){let{tags:t}=e;const a=(0,n.Q)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},6312:(e,t,a)=>{a.d(t,{Q:()=>r,b:()=>n});var l=a(8088);const n=()=>(0,l.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);