(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],{14:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(13),r=n.n(l),c=n(3),u=n(2),i=n.n(u),d=function(e){var t=e.skateboard,n=e.deleteBoard;return o.a.createElement("li",null,"ID: ",t.id,o.a.createElement("p",null),"Board: ",t.board,o.a.createElement("p",null),o.a.createElement("button",{onClick:n},"Delete"))};var s=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)("a new board..."),u=Object(c.a)(r,2),s=u[0],b=u[1];return Object(a.useEffect)((function(){console.log("effect"),i.a.get("http://localhost:3001/boards").then((function(e){console.log("promise fulfilled"),l(e.data)}))}),[]),console.log("render",n.length,"skateboards"),o.a.createElement("div",{className:"Main"},o.a.createElement("h1",null,"Skateboard Website"),o.a.createElement("ul",null,n.map((function(e){return o.a.createElement(d,{key:e.id,skateboard:e,deleteBoard:function(){return t=e.id,console.log("delete the board with id: "+t-1),n.findIndex(n.find((function(e){return e.id===t}))),void i.a.delete("http://localhost:3001/boards/"+t).then((function(e){l(e.data)}));var t}})}))),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:n.length+1,board:s};i.a.post("http://localhost:3001/boards",t).then((function(e){l(n.concat(e.data)),b("")}))}},o.a.createElement("input",{value:s,onChange:function(e){console.log(e.target.value),b(e.target.value)}}),o.a.createElement("button",{type:"submit"},"save")))};r.a.render(o.a.createElement(s,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3065cebc.chunk.js.map