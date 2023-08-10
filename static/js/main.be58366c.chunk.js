(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),s=(c(18),c(19),c(5)),a=c(2),r=(c(20),c(6)),j=c.n(r),i=c(0),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(s.b,{className:l,to:"/",children:"Home"}),Object(i.jsx)(s.b,{className:l,to:"/people",children:"People"})]})})})},b=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})},d=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},h=c(4),x=c(1);function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(22);var u=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},p=function(){return Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})},m=function(){return Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})},f=function(e){var t=e.person;return Object(i.jsx)(s.b,{to:"/people/".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},v=function(e){var t,c=e.person,n=e.people,s=Object(a.i)().slug,r=(t=c,n.find((function(e){return e.name===t.motherName}))),l=function(e,t){return e.find((function(e){return e.name===t.fatherName}))}(n,c);return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c.slug===s}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(f,{person:c})}),Object(i.jsx)("td",{children:c.sex}),Object(i.jsx)("td",{children:c.born}),Object(i.jsx)("td",{children:c.died}),Object(i.jsx)("td",{children:r?Object(i.jsx)(f,{person:r}):c.motherName||"-"}),Object(i.jsx)("td",{children:l?Object(i.jsx)(f,{person:l}):c.fatherName||"-"})]})},g=function(e){var t=e.people;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(v,{person:e,people:t},e.slug)}))})]})},N=function(){var e=Object(x.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(x.useState)(!1),a=Object(h.a)(s,2),r=a[0],j=a[1],l=Object(x.useState)(!1),o=Object(h.a)(l,2),b=o[0],d=o[1];return Object(x.useEffect)((function(){j(!0),O().then((function(e){n(e)})).catch((function(){d(!0)})).finally((function(){j(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[r?Object(i.jsx)(u,{}):Object(i.jsx)(g,{people:c}),b&&Object(i.jsx)(p,{}),!r&&0===c.length&&Object(i.jsx)(m,{})]})})]})},y=function(){return Object(i.jsx)(a.a,{to:"/",replace:!0})},w=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},P=function(){return Object(i.jsx)(s.a,{children:Object(i.jsx)(a.e,{children:Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(b,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(d,{})}),Object(i.jsx)(a.c,{path:"/home",element:Object(i.jsx)(y,{})}),Object(i.jsxs)(a.c,{path:"/people",children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(N,{})}),Object(i.jsx)(a.c,{path:":slug",element:Object(i.jsx)(N,{})})]}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(w,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(P,{}))}},[[23,1,2]]]);
//# sourceMappingURL=main.be58366c.chunk.js.map