(this.webpackJsonpweds=this.webpackJsonpweds||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),s=a.n(i),c=a(13),o=a.n(c),r=(a(35),a(22)),d=a(8),b=a(11),l=a(58),u=a(26),j=a.n(u),h=(a(36),a.p+"static/media/cover.b5afa7f3.jpeg"),m=a.p+"C:/Users/jeeva/Desktop/wedding-bot/static/media/abhineet.fb68e553.jpg",p=a.p+"C:/Users/jeeva/Desktop/wedding-bot/static/media/raksha.978b841a.jpeg",g=a.p+"C:/Users/jeeva/Desktop/wedding-bot-MAIN/static/media/img2.feea2512.jpg",f=a.p+"static/media/e-card.236b7a59.jpeg",O=a.p+"static/media/loading.e8db860b.gif",v=a.p+"C:/Users/jeeva/Desktop/wedding-bot/static/media/wedding.b5887c68.mp3",x=a.p+"static/media/e-video.e413b067.mp4",y=[{label:"\ud83d\udcc5 When is the celebration?",id:"celebration date"},{label:"Invitation Card ",id:"invitation"},{label:"Where do I need to come?",id:"location"}],w={"celebration date":{text:["Yaa! It's on  Saturday <b>30th</b> of july.","Yeah we know, it's less than even a week and we are super nervous for the party","Please be there by 6:30 pm \ud83d\ude4f "],audio:v},"personal pics":{image:[m,p,g],text:["Here you go"]},location:{text:["It's at <b>Daivajnya Kalyana mantapa, Mundgod</b>","you can just follow google maps:"],location:"https://tars-file-upload.s3.amazonaws.com/ByNADi/e8e72425e745b4a32703175a09276c0a--staticmap.png",link:"https://maps.app.goo.gl/KmJHoRnXtcfVFgaGA",text:["Heartly Welcoming You and Your Family"," ❤️UJWALKUMAR & LEKHANA ❤️","It's at <b>Daivajnya Kalyana mantapa, Mundgod</b>","you can just follow google maps:"]},invitation:{text:["We may not have it all together, but together we have it all."],image:[f],video:x}};var N=function(){var e=Object(i.useState)([{image:[h],text:["Hey! \ud83d\ude0a","A lifetime of Loving, Caring and Sharing 😍... Please join us as we are celebrating✨ 25th year of togetherness ❤️ of Mr, UDAYAKUMAR👑& Mrs, USHA 👑 . ","And we want you to be a part of this Silver Anniversary."]}]),t=Object(b.a)(e,2),a=t[0],s=t[1],c=Object(i.useState)(!0),o=Object(b.a)(c,2),u=o[0],m=o[1],p=Object(i.useState)(y),g=Object(b.a)(p,2),f=g[0],x=g[1],N=Object(i.useState)(""),S=Object(b.a)(N,2),k=S[0],I=S[1],C=Object(i.useState)(null),E=Object(b.a)(C,2),F=E[0],W=E[1],A=Object(i.useRef)(!1),B=Object(i.useRef)(!1),D=Object(i.useRef)(!1);Object(i.useEffect)((function(){if(A.current){var e=A;e.current.scrollTop=e.current.scrollHeight}})),Object(i.useEffect)((function(){"celebration date"===k&&(B.current.src=v,B.current.pause(),B.current.play()),"invitation"===k&&D.current.addEventListener("playing",(function(){document.getElementById("audio").pause()}))}),[k]),Object(i.useEffect)((function(){F&&setTimeout((function(){return H(F)}),2e3)}),[F]);var H=function(e){var t=Object(d.a)(a);t.pop();var n=Object(r.a)({},w[e]);t.push(n),s(t),I(e),m(!u)};return Object(n.jsx)("div",{className:"bot",children:Object(n.jsx)("div",{className:"bot-container",children:Object(n.jsxs)("div",{className:"bot-section",children:[Object(n.jsx)("div",{className:"bot-messages",ref:A,style:u?{height:"75%"}:{height:"88%"},children:a.map((function(e,t){return function(e,t){return Object(n.jsx)(n.Fragment,{children:t%2===1?Object(n.jsx)("div",{className:"user-response",children:Object("div",{className:"message user-chat-bubble",children:e.userSays})}):Object(n.jsx)("div",{className:"bot-response",children:Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[e.text&&e.text.map((function(e){return Object(n.jsx)("div",{className:"message chat-bubble",children:Object(n.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})})})),e.image&&e.image.map((function(e){return Object(n.jsx)("div",{className:"message-image",children:Object(n.jsx)("img",{"data-action":"zoom",src:e})})})),e.location&&Object(n.jsx)("div",{className:"message chat-bubble",children:Object(n.jsx)("a",{href:e.link,target:"_blank",children:Object(n.jsx)("img",{src:e.location,style:{width:"100%"}})})}),e.audio&&Object(n.jsx)("audio",{ref:B,id:"audio",children:Object(n.jsx)("source",{type:"audio/mpeg"})}),e.video&&Object(n.jsx)("div",{children:Object(n.jsx)("video",{ref:D,width:"200",height:"240",controls:!0,children:Object(n.jsx)("source",{src:e.video,type:"video/mp4"})})}),e.typing&&Object(n.jsx)("div",{className:"loading chat-bubble",children:Object(n.jsx)("img",{src:O})})]})})})})}(e,t)}))}),Object(n.jsxs)("div",{className:"bot-footer",children:[Object(n.jsxs)("div",{className:"bot-input-container",onClick:function(e){m(!u)},children:[Object(n.jsx)("input",{type:"text",placeholder:"\ud83d\udc47\ud83c\udffb\ud83d\udc47\ud83c\udffb Choose from below... \ud83d\udc47\ud83c\udffb\ud83d\udc47\ud83c\udffb",className:"input",disabled:!0}),Object(n.jsx)(j.a,{className:"input-send"})]}),u&&Object(n.jsx)("div",{className:"bot-button-container",children:f.slice(0,2).map((function(e,t){return Object(n.jsx)(l.a,{type:"button",className:"button",variant:"contained",onClick:function(t){return function(e,t,n){e.preventDefault();var i=Object(d.a)(a),c=f.filter((function(e){return e.id!==t})),o={userSays:n};i.push(o),i.push({typing:!0}),s(i),x(c),W(t),m(!u)}(t,e.id,e.label)},children:e.label})}))})]})]})})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),S()}},[[43,1,2]]]);
//# sourceMappingURL=main.a58fed23.chunk.js.map