(this["webpackJsonppoke-app"]=this["webpackJsonppoke-app"]||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(18),r=n.n(a),s=n(5),i=n(10),o=n(2),l=n(3),u=n(9),j=n.n(u),b=n(12),d=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(0),Error("failed");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){var t=e.url;return fetch(t)})),e.prev=1,e.next=4,Promise.all(n);case 4:return c=e.sent,e.next=7,Promise.all(c.map((function(e){return e.json()})));case 7:return a=e.sent,e.next=10,a;case 10:return r=e.sent,e.abrupt("return",r);case 14:throw e.prev=14,e.t0=e.catch(1),e.t0;case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),f=n(0),m=function(e){var t=e.data,n=Object(c.useState)(t.sprites.front_default),a=Object(s.a)(n,2),r=a[0],i=a[1],o=Object.keys(t.sprites).map((function(e){return{sprite:[e],src:t.sprites[e]}}));return Object(f.jsxs)("div",{className:"imageContainer",children:[Object(f.jsx)("img",{style:{width:250},src:r,alt:t.pokemon.name}),Object(f.jsx)("div",{className:"imageSelector",children:Object(f.jsx)("ul",{children:o.map((function(e){return e.src?Object(f.jsx)("button",{onClick:function(){return i(e.src)},children:e.sprite},e.sprite):null}))})})]})},p=function(e){var t=e.item,n=e.values;return Object(f.jsxs)("div",{className:"rowStat",children:[Object(f.jsx)("div",{className:"columnItem",children:Object(f.jsx)("span",{children:t.replace("/_/g"," ")})}),Object(f.jsx)("div",{className:"columnValue",children:n.map((function(e){return Object(f.jsx)("span",{className:t,children:e.name},e.name)}))})]})},x=function(e){var t=e.damage,n=Object.entries(t);return Object(f.jsxs)("div",{className:"typeStacs",children:[Object(f.jsx)("div",{className:"statsTitle",children:Object(f.jsx)("h4",{children:"Damage Stacs"})}),n.map((function(e){return Object(f.jsx)(p,{item:e[0],values:e[1]},e[0])}))]})};function h(e,t){for(var n in e){if("effect"===n)return e[n];if(null!==e[n]&&"object"===typeof e[n]){if(Array.isArray(e[n]))for(var c=0;c<e[n].length;c++){return h(e[n][c],t)}if("object"!==typeof e[n])return e;h(e[n],t)}}}var v=function(e){var t=e.data,n=(e.description,Object(c.useState)("")),a=Object(s.a)(n,2),r=a[0],i=a[1],o=t.name,l=t.url;return Object(c.useEffect)((function(){d(l).then((function(e){var t=h(e);i(t)})).catch((function(e){return console.log(e)}))}),[l]),Object(f.jsxs)("div",{className:"descriptionBox",children:[Object(f.jsxs)("span",{className:"title",children:[" ",o," "]}),Object(f.jsx)("p",{"data-testid":"desc",className:"descriptionText",children:r})]})},g=function(e){var t=e.move_damage_class,n=e.moves,a=Object(c.useState)({name:n[0].name,url:n[0].url}),r=Object(s.a)(a,2),i=r[0],o=r[1];return Object(f.jsxs)("div",{className:"typeStacs",children:[Object(f.jsx)("div",{className:"statsTitle",children:Object(f.jsx)("h4",{children:"Moves"})}),Object(f.jsx)(p,{item:"Damage Class",values:[t]},t.name),Object(f.jsx)("div",{className:"movesBox",children:n.map((function(e){return Object(f.jsx)("button",{onClick:function(){return function(e){o((function(t){return Object(l.a)(Object(l.a)({},t),{},{name:e.name,url:e.url})}))}(e)},children:e.name},e.name)}))}),Object(f.jsx)(v,{data:i})]})},y=function(e){var t,n=e.src,a=Object(c.useState)({data:null,error:null}),r=Object(s.a)(a,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){if(""!==n)try{d(n).then((function(e){return o((function(t){return Object(l.a)(Object(l.a)({},t),{},{data:e})}))}))}catch(e){o((function(t){return Object(l.a)(Object(l.a)({},t),{},{error:e})}))}}),[n]),Object(f.jsxs)("div",{className:"typeStacs",children:[i.data?Object(f.jsx)(x,{damage:null===(t=i.data)||void 0===t?void 0:t.damage_relations}):null,i.data?Object(f.jsx)(g,Object(l.a)({},i.data)):null,i.error&&Object(f.jsx)("h2",{children:i.error})]})},N=(n(28),function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({type:"",src:""}),i=Object(s.a)(r,2),u=i[0],j=i[1],b=Object(o.g)().id;return Object(c.useEffect)((function(){try{d("https://pokeapi.co/api/v2/pokemon-form/".concat(b)).then((function(e){a(e);var t=e.types;j((function(e){var n,c;return Object(l.a)(Object(l.a)({},e),{},{type:null===(n=t[0])||void 0===n?void 0:n.type.name,src:null===(c=t[0])||void 0===c?void 0:c.type.url})}))}))}catch(e){a((function(e){return Object(l.a)({},e)})),j((function(e){return Object(l.a)({},e)}))}}),[b]),n&&Object(f.jsxs)("div",{className:"flexContainer",children:[Object(f.jsx)(m,{data:n}),Object(f.jsxs)("div",{className:"statsContainer",children:[Object(f.jsxs)("div",{className:"stats",children:[Object(f.jsx)("label",{children:"name : "}),Object(f.jsx)("p",{"data-testid":"name",children:n.name.toUpperCase()})]}),Object(f.jsxs)("div",{className:"stats",children:[Object(f.jsx)("label",{children:"Battle Only :"}),Object(f.jsxs)("p",{children:[" ",n.is_battle_only?"SI":"NO"]})]}),Object(f.jsxs)("div",{className:"stats",children:[Object(f.jsx)("label",{children:"  Types:"}),Object(f.jsx)("div",{children:n.types.map((function(e){return Object(f.jsx)("button",{className:u.type===e.type.name?"active":"",onClick:function(){return function(e){var t=e.name,n=e.url;j((function(e){return{type:t,src:n}}))}(e.type)},children:e.type.name},e.slot)}))})]}),Object(f.jsx)(y,{src:u.src})]})]})}),k=Object(c.createContext)(),S=function(e){var t=e.handleSetUrL,n=e.next,c=e.previous,a={container:{display:"flex",alignItems:"center",backgroundColor:"rgb(43,47,51)",justifyContent:"space-between",flexDirection:"row",marginTop:"1rem",marginBottom:"2rem"},button:{border:"2px solid grey",backgroundColor:"transparent",marginLeft:"10px",marginRight:"10px",color:"grey",width:"5rem",height:"2rem"}};return Object(f.jsxs)("div",{style:a.container,children:[Object(f.jsx)("button",{style:a.button,onClick:function(){return t(c)},children:"PREVIOS"}),Object(f.jsx)("button",{style:a.button,onClick:function(){return t(n)},children:"NEXT"})]})},C=(n(34),function(){return Object(f.jsx)("div",{className:"lds-dual-ring"})}),w=(n(35),n(36),function(e){var t=e.pokemon,n=e.sprites,c=e.id;return Object(f.jsxs)("div",{className:"card col-sm-6 mb-2 cardStyles animate__animated animate__fadeIn animate__delay-.5s",children:[Object(f.jsx)("div",{className:"col-md-6",children:Object(f.jsx)("div",{className:"cardCenter",children:Object(f.jsx)(i.b,{to:"/pokes/character/".concat(c),children:Object(f.jsx)("img",{className:"cardImg card-img",src:n.front_default,alt:t.name})})})}),Object(f.jsx)("div",{className:"col-md-8",children:Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsxs)("h2",{style:{textAlign:"center"},children:[" ",t.name]}),Object(f.jsx)("hr",{})]})})]})}),_=function(e){var t=e.results;return Object(f.jsx)("div",{className:"listContainer",children:Object(f.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around"},children:t&&t.map((function(e){return Object(c.createElement)(w,Object(l.a)(Object(l.a)({},e),{},{key:e.name}))}))})})},E=function(){var e=Object(c.useContext)(k),t=e.state,n=e.handleSetUrL,a=e.stopLoading,r=e.startLoading,i=t.data,o=t.loading,l=t.error,u=i.results,d=i.next,m=i.previous,p=Object(c.useState)([]),x=Object(s.a)(p,2),h=x[0],v=x[1],g=Object(c.useCallback)(Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=5;break}return e.next=3,O(u);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),[u]);return Object(c.useEffect)((function(){r(),g().then((function(e){setTimeout((function(){v(e),a()}),1e3)}))}),[g]),Object(f.jsxs)("div",{style:{display:"flex",alignItems:"center",backgroundColor:"rgb(43,47,51)",justifyContent:"center",flexDirection:"column",marginTop:"2rem",width:"100%",height:"100%"},children:[Object(f.jsx)(S,{handleSetUrL:n,next:d,previous:m}),o?Object(f.jsx)(C,{}):Object(f.jsx)(_,{results:h}),Object(f.jsx)(S,{handleSetUrL:n,next:d,previous:m}),l&&alert(l)]})},I=function(){var e=Object(c.useContext)(k).handleSetUrL;return Object(f.jsxs)("nav",{className:"container-fluid navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(f.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(f.jsx)("div",{className:"navbar-collapse",children:Object(f.jsxs)("div",{className:"navbar-nav",children:[Object(f.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/pokes",onClick:function(){e("https://pokeapi.co/api/v2/pokemon-form/?limit=5&offset=5")},children:"Inicio"}),Object(f.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})})]})},L=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(I,{}),Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/pokes",render:function(){return Object(f.jsx)(E,{})}}),Object(f.jsx)(o.b,{exact:!0,path:"/pokes/character/:id",render:function(){return Object(f.jsx)(N,{})}}),Object(f.jsx)(o.a,{to:"/pokes"})]})]})},T=n(21),A=["isAutenticated","component"],U=function(e){var t=e.isAutenticated,n=e.component,c=Object(T.a)(e,A);return Object(f.jsx)(o.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return t?Object(f.jsx)(n,Object(l.a)({},e)):Object(f.jsx)(o.a,{to:"/login"})}}))},B=function(){return Object(f.jsx)(i.a,{children:Object(f.jsx)("div",{children:Object(f.jsx)(o.d,{children:Object(f.jsx)(U,{isAutenticated:!0,path:"/",component:L})})})})},D=(n(37),{data:{},loading:!0,error:null}),P=function(){var e=function(e){var t=Object(c.useState)(e),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(D),o=Object(s.a)(i,2),u=o[0],j=o[1];return Object(c.useEffect)((function(){console.log(a),d(a).then((function(e){j((function(t){return Object(l.a)(Object(l.a)({},t),{},{data:e})}))})).catch((function(e){j((function(t){return Object(l.a)(Object(l.a)({},t),{},{loading:!1,error:e})}))}))}),[a]),[u,a,function(e){return r(e)},function(){j((function(e){return Object(l.a)(Object(l.a)({},e),{},{loading:!1})}))},function(){j((function(e){return Object(l.a)(Object(l.a)({},e),{},{loading:!0})}))}]}(localStorage.getItem("url")||"https://pokeapi.co/api/v2/pokemon-form/?limit=5&offset=5"),t=Object(s.a)(e,5),n=t[0],a=t[1],r=t[2],i=t[3],o=t[4];return Object(c.useEffect)((function(){localStorage.setItem("url",a)}),[a]),Object(f.jsx)(k.Provider,{value:{state:n,url:a,handleSetUrL:r,stopLoading:i,startLoading:o},children:Object(f.jsx)(B,{})})};r.a.render(Object(f.jsx)(P,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.df6c8bf7.chunk.js.map