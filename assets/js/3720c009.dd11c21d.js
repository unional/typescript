"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[3751],{8163:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(79),n=a(9841),r=a(1213),c=a(3384),s=a(6755),g=a(2324),m=a(6766),o=a(6693);function u(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(o.Z,{tag:"doc_tags_list"}),l.createElement(g.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(m.Z,{tags:t}))))))}},279:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(79),n=a(9841),r=a(3402);const c={tag:"tag_hnqH",tagRegular:"tagRegular_cJRw",tagWithCount:"tagWithCount_SUJa"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(c.tag,s?c.tagWithCount:c.tagRegular)},a,s&&l.createElement("span",null,s))}},6766:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(79),n=a(1213),r=a(279);const c={tag:"tag_D8P8"};function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c.tag},l.createElement(r.Z,e))))),l.createElement("hr",null))}function g(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},1213:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(2728);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);