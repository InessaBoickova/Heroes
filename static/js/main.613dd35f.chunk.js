(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),s=n.n(c),i=n(3),l=n(2),o=n(16),u=n(11),d=n.n(u),b=n(12),j=function(){return{request:Object(r.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r,a,c,s,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:r,headers:a});case 6:if((c=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(c.status));case 9:return e.next=11,c.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[])}},h=n(1),O=function(e){var t,n=e.name,r=e.description,a=e.element,c=e.geleteHero;switch(a){case"\u041e\u0433\u043e\u043d\u044c":t="bg-danger bg-gradient";break;case"\u0412\u043e\u0434\u0430":t="bg-primary bg-gradient";break;case"\u0412\u0435\u0442\u0435\u0440":t="bg-success bg-gradient";break;case"\u0417\u0435\u043c\u043b\u044f":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(h.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(h.jsx)("img",{src:"http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h3",{className:"card-title",children:n}),Object(h.jsx)("p",{className:"card-text",children:r})]}),Object(h.jsx)("span",{onClick:c,className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(h.jsx)("button",{type:"button",className:"btn-close btn-close","aria-label":"Close"})})]})},f=function(){return Object(h.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(h.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},m=function(){var e=Object(i.c)((function(e){return e})),t=e.filteredHeroes,n=e.heroesLoadingStatus,a=Object(i.b)(),c=j().request,s=Object(r.useCallback)((function(e){c("http://localhost:3001/heroes/".concat(e),"DELETE").then((function(e){return e})).then(a(function(e){return{type:"HERO_DELETED",payload:e}}(e))).catch((function(e){return console.log(e)}))}),[c]);if(Object(r.useEffect)((function(){a({type:"HEROES_FETCHING"}),c("http://localhost:3001/heroes").then((function(e){return a({type:"HEROES_FETCHED",payload:e})})).catch((function(){return a({type:"HEROES_FETCHING_ERROR"})}))}),[]),"loading"===n)return Object(h.jsx)(f,{});if("error"===n)return Object(h.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var u,d=0===(u=t).length?Object(h.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"}):u.map((function(e){var t=e.id,n=Object(o.a)(e,["id"]);return Object(h.jsx)(O,Object(l.a)({geleteHero:function(){return s(t)}},n),t)}));return Object(h.jsx)("ul",{children:d})},p=n(7),E=n(31),g=function(){var e=Object(i.c)((function(e){return e})),t=e.filters,n=e.filtersLoadingStatus,a=Object(r.useState)(""),c=Object(p.a)(a,2),s=c[0],l=c[1],o=Object(r.useState)(""),u=Object(p.a)(o,2),d=u[0],b=u[1],O=Object(r.useState)(""),f=Object(p.a)(O,2),m=f[0],g=f[1],x=Object(i.b)(),v=j().request;return Object(h.jsxs)("form",{className:"border p-4 shadow-lg rounded",onSubmit:function(e){return function(e){e.preventDefault();var t,n={id:Object(E.a)(),name:s,description:d,element:m};v("http://localhost:3001/heroes","POST",JSON.stringify(n)).then((function(e){return e})).then(x((t=n,{type:"HERO_CREATED",payload:t}))).catch((function(e){return console.log(e)})),l(""),b("")}(e)},children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(h.jsx)("input",{onChange:function(e){return l(e.target.value)},required:!0,value:s,type:"text",name:"name",className:"form-control",id:"name",placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(h.jsx)("textarea",{onChange:function(e){return b(e.target.value)},required:!0,name:"text",className:"form-control",id:"text",value:d,placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",style:{height:"130px"}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(h.jsx)("select",{onChange:function(e){return g(e.target.value)},required:!0,className:"form-select",id:"element",name:"element",children:function(e,t){return"error"===t?Object(h.jsx)("option",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}):e&&e.length>0?e.map((function(e){var t=e.name;if("\u0412\u0441\u0435"!==t)return Object(h.jsx)("option",{value:t,children:t},t)})):void 0}(t,n)})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},x=n(13),v=n.n(x),N=function(){var e=Object(i.c)((function(e){return e})),t=e.filters,n=e.filtersLoadingStatus,a=e.activeFilter,c=Object(i.b)(),s=j().request;if(Object(r.useEffect)((function(){s("http://localhost:3001/filters").then((function(e){return c(function(e){return{type:"FILTERS_FETCHED",payload:e}}(e))})).catch((function(){return c({type:"FILTERS_FETCHING_ERROR"})}))}),[]),"error"===n)return Object(h.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var l,o=0===(l=t).length?Object(h.jsx)("h5",{className:"text-center mt-5",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}):l.map((function(e){var t=e.name,n=e.className,r=v()("btn",n,{active:t===a});return Object(h.jsx)("button",{id:t,className:r,onClick:function(){return c({type:"ACTIVE_FILTER_CHANGED",payload:t})},children:t},t)}));return Object(h.jsx)("div",{className:"card shadow-lg mt-4",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(h.jsx)("div",{className:"btn-group",children:o})]})})},_=(n(27),function(){return Object(h.jsx)("main",{className:"app",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(m,{}),Object(h.jsxs)("div",{className:"content__interactive",children:[Object(h.jsx)(g,{}),Object(h.jsx)(N,{})]})]})})}),y=n(15),R=n(14),S={heroes:[],heroesLoadingStatus:"idle",filters:[],filtersLoadingStatus:"idle",activeFilter:"\u0412\u0441\u0435",filteredHeroes:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEROES_FETCHING":return Object(l.a)(Object(l.a)({},e),{},{heroesLoadingStatus:"loading"});case"HEROES_FETCHED":return Object(l.a)(Object(l.a)({},e),{},{heroes:t.payload,filteredHeroes:"\u0412\u0441\u0435"===e.activeFilter?t.payload:t.payload.filter((function(t){return t.element===e.activeFilter})),heroesLoadingStatus:"idle"});case"HEROES_FETCHING_ERROR":return Object(l.a)(Object(l.a)({},e),{},{heroesLoadingStatus:"error"});case"FILTERS_FETCHED":return Object(l.a)(Object(l.a)({},e),{},{filters:t.payload,filtersLoadingStatus:"idle"});case"FILTERS_FETCHING_ERROR":return Object(l.a)(Object(l.a)({},e),{},{filtersLoadingStatus:"error"});case"ACTIVE_FILTER_CHANGED":return Object(l.a)(Object(l.a)({},e),{},{activeFilter:t.payload,filteredHeroes:"\u0412\u0441\u0435"===t.payload?e.heroes:e.heroes.filter((function(e){return e.element===t.payload}))});case"HERO_CREATED":var n=[].concat(Object(R.a)(e.heroes),[t.payload]);return Object(l.a)(Object(l.a)({},e),{},{heroes:n,filteredHeroes:"\u0412\u0441\u0435"===e.activeFilter?n:n.filter((function(t){return t.element===e.activeFilter}))});case"HERO_DELETED":var r=e.heroes.filter((function(e){return e.id!==t.payload}));return Object(l.a)(Object(l.a)({},e),{},{heroes:r,filteredHeroes:"\u0412\u0441\u0435"===e.activeFilter?r:r.filter((function(t){return t.element===e.activeFilter}))});default:return e}},T=Object(y.a)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(28);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(i.a,{store:T,children:Object(h.jsx)(_,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.613dd35f.chunk.js.map