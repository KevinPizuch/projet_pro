(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(12),i=c.n(a),s=c(21),r=(c(65),c(66),c(7)),o=c(5),l=c(22),d=c.n(l),j=c(23),u=c(29),b=c(39),m=c(1),h=["","/images/svg/1-character.svg","/images/svg/2-character.svg","/images/svg/3-character.svg","/images/svg/4-character.svg","/images/svg/5-character.svg","/images/svg/6-character.svg","/images/svg/7-character.svg","/images/svg/8-character.svg","/images/svg/9-character.svg","/images/svg/10-character.svg"],O=function(e){var t=Object(n.useState)(1),c=Object(o.a)(t,2),a=c[0],i=c[1],s=Object(n.useState)(1),r=Object(o.a)(s,2);r[0],r[1];return Object(m.jsxs)("div",{className:"carousel",children:[Object(m.jsx)("span",{id:"carousel-arrow",onClick:function(){i(a<=1?10:a-1),e.changeCharacterIndex(1==a?10:a-1)},children:Object(m.jsx)(b.a,{})}),Object(m.jsx)("img",{src:h[a],id:a}),Object(m.jsx)("span",{id:"carousel-arrow",onClick:function(){i(a>=10?1:a+1),e.changeCharacterIndex(10==a?1:a+1)},children:Object(m.jsx)(b.b,{})})]})},x=c(108),v=c(107),g=c(109),f=c(110),p=c(31),k=c(58),N=c.n(k),w={createSocket:function(){return N()("http://127.0.0.1:4001")},createRoom:function(e,t,c){e.emit("create-room",[t,c,1])},joinRoom:function(e,t,c,n){console.log("join"),e.emit("request-join",[t,c,n,0])},checkForRoom:function(){var e=Object(u.a)(d.a.mark((function e(t,c,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.emit("check-for-room",[c],(function(e){n(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),getRoomInfo:function(e,t){e.emit("GetRoomInfo",t)}},y=function(e){var t,c=Object(n.useState)(null!==(t=e.params)&&void 0!==t?t:""),a=Object(o.a)(c,2),i=a[0],s=a[1],l=Object(n.useState)(""),b=Object(o.a)(l,2),h=b[0],k=b[1],N=Object(n.useState)(1),y=Object(o.a)(N,2),C=y[0],I=y[1],R=Object(r.f)();function D(){return(D=Object(u.a)(d.a.mark((function t(){var c,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p.a.loading("Loading ..."),n=w.createSocket(),t.next=4,w.checkForRoom(n,null!==(c=e.params)&&void 0!==c?c:i,(function(e){console.log(e),p.a.hide(),e?R.push({pathname:"/lobby",state:{username:h,characterIndex:C,gameCode:i,roomOwner:!1}}):p.a.fail("Erreur cette partie n'existe pas",2e3)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsx)(x.a,Object(j.a)(Object(j.a)({},e),{},{show:e.show,onHide:e.onHide,size:"l","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"Modal",children:Object(m.jsxs)(x.a.Body,{className:"modal-body",children:[Object(m.jsx)("button",{onClick:e.onHide,type:"button",className:"close",children:"\xd7"}),Object(m.jsx)("h4",{id:"h4-modal",children:"Je choisis mon avatar"}),Object(m.jsx)("div",{className:"caroussel",children:Object(m.jsx)(O,{changeCharacterIndex:function(e){I(e)}})}),Object(m.jsx)(v.a,{className:"mb-3",id:"username",children:Object(m.jsx)(g.a,{value:h,onChange:function(e){k(e.target.value)},placeholder:"Pseudo","aria-label":"Username","aria-describedby":"basic-addon1"})}),Object(m.jsx)("div",{id:"character-counter",children:h.length>0?Object(m.jsxs)("span",{children:[h.length,"/ 15"]}):null}),Object(m.jsx)("br",{})," ",h.length>=3&&h.length<=15&&0==i.length?Object(m.jsx)(f.a,{onClick:function(){R.push({pathname:"/lobby",state:{username:h,characterIndex:C,gameCode:i,roomOwner:!0}})},variant:"success",id:"create-game-btn",children:"Cr\xe9er une partie"}):Object(m.jsx)(f.a,{disabled:!0,variant:"success",id:"create-game-btn",children:"Cr\xe9er une partie"}),Object(m.jsxs)(v.a,{className:"mb-3",id:"join-game-btn",children:[Object(m.jsx)(v.a.Prepend,{children:i.length>=20&&h.length>=3?Object(m.jsx)(f.a,{onClick:function(){return D.apply(this,arguments)},variant:"success",id:"join-game-btn2",children:"Rejoindre une partie"}):Object(m.jsx)(f.a,{disabled:!0,variant:"success",id:"join-game-btn2",children:"Rejoindre une partie"})}),Object(m.jsx)(v.a.Prepend,{children:Object(m.jsx)(v.a.Text,{id:"basic-addon1",children:"#"})}),Object(m.jsx)(g.a,{"aria-describedby":"basic-addon1",placeholder:"Code de la partie",value:i,onChange:function(e){s(e.target.value)}})]})]})}))},C=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],i=c[1],s=e.match.params.id;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"devise",children:[Object(m.jsx)("p",{children:" Devise "}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"petit texte explicatif du site, but du jeu"})]}),Object(m.jsxs)("div",{className:"mini-games-details",children:[Object(m.jsxs)("div",{className:"draw",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"/images/draw.png"})}),Object(m.jsx)("p",{children:"descriptif rapide"}),Object(m.jsxs)("p",{children:["R\xe8gles, ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{})," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"]})]}),Object(m.jsxs)("div",{className:"mime",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"/images/mime.png"})}),Object(m.jsx)("p",{children:"descriptif rapide"}),Object(m.jsxs)("p",{children:["R\xe8gles, ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{})," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"]})]}),Object(m.jsxs)("div",{className:"impostor",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"/images/impostor.jpg"})}),Object(m.jsx)("p",{children:"descriptif rapide"}),Object(m.jsxs)("p",{children:["R\xe8gles, ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"]})]})]}),Object(m.jsx)("div",{className:"create-join-game",children:Object(m.jsx)(f.a,{variant:"primary",onClick:function(){return i(!0)},children:"Cr\xe9er / Rejoindre une partie"})}),Object(m.jsx)(y,{show:!!s||a,onHide:function(){return i(!1)},params:null!==s&&void 0!==s?s:null})]})},I=function(e){var t=Object(n.useState)(void 0),c=Object(o.a)(t,2),a=c[0],i=c[1];Object(n.useEffect)((function(){e.socket.emit("getWord",(function(e){i(e)}))}),[]);var s=function(t){e.socket.emit("choosenWord",t),e.onHide()};return Object(m.jsx)(x.a,Object(j.a)(Object(j.a)({},e),{},{show:e.show,onHide:e.onHide,size:"l","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"Modal",children:Object(m.jsx)(x.a.Body,{className:"modal-body",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"Vous devez choisir un mot !"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),a&&Object(m.jsxs)("div",{children:[Object(m.jsx)(f.a,{onClick:function(){return s(a.first)},variant:"outline-dark",children:a.first}),Object(m.jsxs)(f.a,{onClick:function(){return s(a.second)},variant:"outline-dark",children:[a.second," "]})]})]})})}))},R=function(e){var t=Object(n.useRef)(null),c=Object(n.useRef)(null),a=Object(n.useRef)(null),i=Object(n.useRef)(null),s=Object(n.useRef)(!1),r=Object(n.useRef)("black"),l=Object(n.useRef)(8),d=Object(n.useState)(null),j=Object(o.a)(d,2),u=j[0],b=j[1],h=Object(n.useState)(null),O=Object(o.a)(h,2),x=O[0],p=O[1],k=Object(n.useState)(null),N=Object(o.a)(k,2),w=(N[0],N[1],Object(n.useState)("")),y=Object(o.a)(w,2),C=y[0],R=y[1],D=Object(n.useState)(null),S=Object(o.a)(D,2),z=S[0],q=S[1],E=Object(n.useState)(!1),L=Object(o.a)(E,2),M=L[0],T=L[1],G=Object(n.useState)(null),H=Object(o.a)(G,2),P=H[0],W=H[1],B=Object(n.useState)(0),J=Object(o.a)(B,2),U=J[0],X=J[1];Object(n.useEffect)((function(){Y(),e.socket.emit("GetRoomInfo",e.roomID),e.socket.emit("GetMyData",(function(e){p(e),e.isMyTurn&&T(!0)}))}),[]),e.socket.on("GetRoomInfo",(function(e){b(e)}));var Y=function(){var c=t.current,n=c.getContext("2d"),i={},o=!1,d=function(t,a,i,s,r,o,l){if(n.beginPath(),n.moveTo(t-475,a-140),n.lineTo(i-475,s-140),n.strokeStyle=r,n.lineWidth=o,n.lineJoin=n.lineCap="round",n.stroke(),n.closePath(),l){var d=c.width,j=c.height;e.socket.emit("drawing",{x0:t/d,y0:a/j,x1:i/d,y1:s/j,color:r,lineWidth:o})}},j=function(e){s.current&&o&&(o=!1,d(i.x,i.y,e.clientX,e.clientY,r.current,l.current,!0))};c.addEventListener("mousedown",(function(e){s.current&&(o=!0,i.x=e.clientX,i.y=e.clientY)}),!1),c.addEventListener("mouseup",j,!1),c.addEventListener("mouseout",j,!1),c.addEventListener("mousemove",(function(e){s.current&&o&&(d(i.x,i.y,e.clientX,e.clientY,r.current,l.current,!0),i.x=e.clientX,i.y=e.clientY)}),!1),c.width=a.current.getBoundingClientRect().height,c.height=a.current.getBoundingClientRect().width;e.socket.on("drawing",(function(e){var t=c.width,n=c.height;d(e.x0*t,e.y0*n,e.x1*t,e.y1*n,e.color,e.lineWidth)}))};return e.socket.on("getDrawChatContent",(function(e){q(e),function(){var e;null===(e=i.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()})),e.socket.on("counter",(function(e){console.log(e)})),e.socket.on("myTurnToDraw",(function(e){s.current=!0})),e.socket.on("choosenWord",(function(t){W(t),e.socket.emit("startClockDraw")})),e.socket.on("drawTime",(function(e){X(e)})),e.socket.on("drawTimeOver",(function(t){s.current=!1,e.socket.emit("GetMyData",(function(e){p(e)})),e.socket.emit("GetRoomInfo",e.roomID),e.socket.emit("GetMyData",(function(e){p(e),e.isMyTurn&&T(!0)})),Y()})),Object(m.jsxs)("div",{className:"draw-main-container",children:[Object(m.jsxs)("div",{className:"draw-header-container",children:[Object(m.jsx)("div",{className:"draw-header-time-round",children:U&&"temps : "+U}),Object(m.jsx)("div",{className:"draw-header-secretword",children:P&&(x.isMyTurn?P:P.replace(/[a-zA-Z0-9_]/g,"_"))})]}),Object(m.jsxs)("div",{className:"draw-body-container",children:[Object(m.jsx)("div",{className:"draw-score-container",children:u&&u.map((function(t,c){return Object(m.jsxs)("div",{className:"draw-score-character-slot",style:t.isMyTurn?{backgroundColor:"green"}:c%2==0?{backgroundColor:"rgba(0, 0, 0, 0.37)"}:{backgroundColor:"rgba(0, 0, 0, 0.638)"},children:[Object(m.jsxs)("div",{className:"draw-score-character-slot-name-score",children:[Object(m.jsx)("div",{children:Object(m.jsxs)("p",{style:t.socketID==e.socketID?{color:"red"}:null,children:[t.name,t.socketID==e.socketID?" (Vous)":null]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:["points: ",t.points]})})]}),Object(m.jsx)("div",{className:"draw-score-character-slot-avatar",children:Object(m.jsx)("img",{src:"/images/svg/".concat(t.charIndex,"-character.svg")})})]},t.socketID.toString())}))}),Object(m.jsxs)("div",{ref:a,className:"draw-canvas-container",children:[Object(m.jsx)("canvas",{ref:t,className:"whiteboard"}),u&&x&&x.isMyTurn&&Object(m.jsxs)("div",{ref:c,className:"colors",children:[Object(m.jsx)("div",{className:"color white",onClick:function(){r.current="white"}}),Object(m.jsx)("div",{className:"color lightgray",onClick:function(){r.current="lightgray"}}),Object(m.jsx)("div",{className:"color red",onClick:function(){r.current="red"}}),Object(m.jsx)("div",{className:"color orange",onClick:function(){r.current="orange"}}),Object(m.jsx)("div",{className:"color yellow",onClick:function(){r.current="yellow"}}),Object(m.jsx)("div",{className:"color green",onClick:function(){r.current="green"}}),Object(m.jsx)("div",{className:"color lightskyblue",onClick:function(){r.current="lightskyblue"}}),Object(m.jsx)("div",{className:"color blue",onClick:function(){r.current="blue"}}),Object(m.jsx)("div",{className:"color purple",onClick:function(){r.current="purple"}}),Object(m.jsx)("div",{className:"color pink",onClick:function(){r.current="pink"}}),Object(m.jsx)("div",{className:"color brown",onClick:function(){r.current="brown"}}),Object(m.jsx)("div",{className:"color black",onClick:function(){r.current="black"}}),Object(m.jsx)("div",{id:"first-size",className:"size 8",onClick:function(){l.current=8},children:Object(m.jsx)("div",{className:"size 8 size-xs-icon",onClick:function(){l.current=8}})}),Object(m.jsx)("div",{className:"size 20",onClick:function(){l.current=20},children:Object(m.jsx)("div",{className:"size 20 size-m-icon",onClick:function(){l.current=20}})}),Object(m.jsx)("div",{className:"size 40",onClick:function(){l.current=40},children:Object(m.jsx)("div",{className:"size 40 size-xl-icon",onClick:function(){l.current=40}})}),Object(m.jsx)("div",{className:"tool white Erase",onClick:function(){r.current="white"}})]})]}),Object(m.jsxs)("div",{className:"draw-chat-container",children:[Object(m.jsxs)("div",{className:"draw-chat-content",children:[z&&z.map((function(e,t){return Object(m.jsx)("div",{className:"draw-chat-line",style:t%2==0?{backgroundColor:"rgba(0, 0, 0, 0.37)"}:{backgroundColor:"rgba(0, 0, 0, 0.638)"},children:Object(m.jsxs)("p",{children:[e.name," : ",e.content]})},t)})),Object(m.jsx)("div",{ref:i})]}),Object(m.jsx)("div",{className:"draw-chat-input",children:Object(m.jsxs)(v.a,{className:"mb-3 draw-chat-input-content",children:[Object(m.jsx)(g.a,{placeholder:"R\xe9ponse",value:C,onChange:function(e){R(e.target.value)}}),Object(m.jsx)(v.a.Append,{children:Object(m.jsx)(f.a,{variant:"outline-secondary",onClick:function(){e.socket.emit("drawChatInput",C),R("")},children:"Envoyer"})})]})})]})]}),Object(m.jsx)(I,{show:M,onHide:function(){return T(!1)},socket:e.socket})]})},D=function(e){var t=Object(n.useState)(void 0),c=Object(o.a)(t,2),a=c[0],i=c[1],s=Object(n.useState)(void 0),l=Object(o.a)(s,2),d=l[0],j=l[1],u=Object(n.useState)(void 0),b=Object(o.a)(u,2),h=b[0],O=b[1],x=Object(n.useState)(0),v=Object(o.a)(x,2),g=v[0],p=v[1],k=Object(n.useState)(void 0),N=Object(o.a)(k,2),y=N[0],C=N[1],I=Object(n.useState)(void 0),D=Object(o.a)(I,2),S=D[0],z=D[1],q=Object(r.f)();return Object(n.useEffect)((function(){if(!e.location.state)return q.push("/");var t=w.createSocket();return e.location.state.roomOwner?w.createRoom(t,e.location.state.username,e.location.state.characterIndex):w.joinRoom(t,e.location.state.gameCode,e.location.state.username,e.location.state.characterIndex),t.emit("GetMyData",(function(e){j(e)})),t.on("basicInfo",(function(c){var n;console.log("http://localhost:3000/lobby="+c.roomID),C(c.roomID),z(c.socketID),w.getRoomInfo(t,null!==(n=e.location.state.gameCode)&&void 0!==n?n:c.roomID),t.emit("GetMyData",(function(e){j(e)}))})),t.on("GetRoomInfo",(function(e){i(e)})),t.on("startDrawRoom",(function(){p(1)})),O(t),function(){t.emit("Quit",e.location.state.username)}}),[]),0==g?Object(m.jsxs)("div",{className:"Lobby-content",children:[Object(m.jsxs)("div",{className:"Lobby-container",children:[Object(m.jsx)("div",{className:"Lobby-params"}),Object(m.jsxs)("div",{className:"Lobby-players",children:[Object(m.jsxs)("h4",{children:["Joueurs ",a&&a.length,"/ 4"]}),Object(m.jsx)("div",{className:"character-slot-container",children:a&&a.map((function(e){return Object(m.jsxs)("div",{className:"character-slot",children:[Object(m.jsxs)("p",{children:[e.name," "]}),Object(m.jsx)("img",{src:"/images/svg/".concat(e.charIndex,"-character.svg")})]},e.socketID.toString())}))})]})]}),Object(m.jsxs)("div",{className:"play-button",children:[Object(m.jsx)(f.a,{variant:"outline-dark",href:"http://localhost:3000/lobby=".concat(y),target:"_blank",children:"Partager la partie"}),Object(m.jsx)("br",{}),d&&1==d.isAdmin&&Object(m.jsx)(f.a,{onClick:function(){h.emit("startGame")},variant:"outline-dark",children:"lancer la partie "})]})]}):1==g?Object(m.jsx)("div",{className:"draw-game-scene",children:Object(m.jsx)(R,{socket:h,roomID:y,socketID:S})}):void 0},S=function(){return Object(m.jsx)("p",{children:"Erreur page introuvable"})},z=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(m.jsx)("div",{className:"navbar-nav mr-auto",children:Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(s.b,{to:"/",className:"nav-link",children:"Home"})})})}),Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{exact:!0,path:["/","/lobby=:id"],component:C}),Object(m.jsx)(r.a,{exact:!0,path:["/lobby"],component:D}),Object(m.jsx)(r.a,{path:["*"],component:S})]})]})};i.a.render(Object(m.jsx)(s.a,{children:Object(m.jsx)(z,{})}),document.getElementById("root"))},66:function(e,t,c){}},[[105,1,2]]]);
//# sourceMappingURL=main.b7b65bcf.chunk.js.map