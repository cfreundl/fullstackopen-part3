(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=t(14),l=t(2),i=function(e){var n=e.message;if(null===n)return null;var t=n.isError?"error":"info";return r.a.createElement("div",{className:t},n.text)},m=function(e){var n=e.filterText,t=e.handleFilterTextChange;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},d=function(e){var n=e.newName,t=e.handleNameChange,a=e.newNumber,c=e.handleNumberChange,u=e.addName;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:u},"add")))},f=function(e){var n,t=e.persons,a=e.filterText,c=e.deleteEntry;return r.a.createElement("div",null,t.filter((n=a,function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e,n){return r.a.createElement("div",{key:n},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return c(e.id,e.name)}},"delete"))})))},h=t(3),s=t.n(h),b="/api/persons",v=function(){return s.a.get(b).then((function(e){return e.data}))},E=function(e){return s.a.post(b,e).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat(b,"/").concat(e))},g=function(e,n){return s.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=(t(37),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),h=Object(l.a)(u,2),s=h[0],b=h[1],w=Object(a.useState)(""),C=Object(l.a)(w,2),j=C[0],N=C[1],O=Object(a.useState)(""),k=Object(l.a)(O,2),x=k[0],y=k[1],T=Object(a.useState)(null),S=Object(l.a)(T,2),D=S[0],A=S[1];Object(a.useEffect)((function(){v().then((function(e){c(e)}))}),[]);var F=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t={text:e,isError:n};A(t),setTimeout((function(){A(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(i,{message:D}),r.a.createElement(m,{filterText:x,handleFilterTextChange:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"Add new entry"),r.a.createElement(d,{newName:s,handleNameChange:function(e){b(e.target.value)},newNumber:j,handleNumberChange:function(e){N(e.target.value)},addName:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));if(void 0!==n){if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))){var a=Object(o.a)({},n,{number:j});g(n.id,a).then((function(e){F("Changed ".concat(e.name)),c(t.map((function(n){return n.id!==e.id?n:e}))),b(""),N("")})).catch((function(e){F("Information of ".concat(n.name," has already been removed from server"),!0),c(t.filter((function(e){return e.id!==n.id})))}))}}else E({name:s,number:j}).then((function(e){F("Added ".concat(e.name)),c(t.concat(e)),b(""),N("")}))}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(f,{persons:t,filterText:x,deleteEntry:function(e,n){window.confirm("Delete ".concat(n,"?"))&&p(e).then((function(a){F("Deleted ".concat(n)),c(t.filter((function(n){return n.id!==e})))}))}}))});u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2cd7546a.chunk.js.map