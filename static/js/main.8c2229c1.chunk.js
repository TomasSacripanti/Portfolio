(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),i=a.n(c),n=a(14),r=a.n(n),l=(a(21),a(2)),o=a(3),j=a(5),b=a(4),d=a(11),u=(a(22),a(7)),O=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).header=i.a.createRef(),s.navigation=i.a.createRef(),s.hamburguer=i.a.createRef(),s}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a=this,c=document.documentElement,i=window.scrollY||c.scrollTop,n=0,r=0,l=function(){t=!0;var s=a.header.current;return 2===n&&e>200?s.classList.add("hide"):1===n?s.classList.remove("hide"):t=!1,t};return window.addEventListener("click",(function(e){(e.preventDefault(),e.target.classList.contains("hamburguer"))&&a.navigation.current.classList.toggle("visible")})),window.addEventListener("scroll",(function(){e=window.scrollY||c.scrollTop,(n=e>i?2:1)!==r&&(t=l()),i=e,t&&(r=n)})),Object(s.jsxs)("header",{ref:this.header,className:"header",children:[Object(s.jsx)("figure",{className:"logotipo",children:Object(s.jsx)("img",{className:"logotipo-img",src:"data:image/png;base64,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",alt:"Logotipo"})}),Object(s.jsxs)("ul",{ref:this.navigation,className:"navigation",children:[Object(s.jsx)("li",{className:"navigation-item",children:Object(s.jsx)(u.HashLink,{className:"navigation-link",to:"#about",ref:this.about,onClick:this.scroll,children:"About me"})}),Object(s.jsx)("li",{className:"navigation-item",children:Object(s.jsx)(u.HashLink,{className:"navigation-link",to:"#projects",children:"Projects"})}),Object(s.jsx)("li",{className:"navigation-item",children:Object(s.jsx)(u.HashLink,{className:"navigation-link",to:"#contact",children:"Contact"})})]}),Object(s.jsxs)("button",{ref:this.hamburguer,className:"hamburguer",children:[Object(s.jsx)("div",{className:"hamburguer__line"}),Object(s.jsx)("div",{className:"hamburguer__line"}),Object(s.jsx)("div",{className:"hamburguer__line"})]})]})}}]),a}(c.Component),h=(a(31),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"left",children:[Object(s.jsxs)("ul",{className:"left__social",children:[Object(s.jsx)("li",{className:"left__item",children:Object(s.jsx)(u.HashLink,{to:"https://github.com/TomasSacripanti",target:"_blank",rel:"noreferrer",className:"left__link",children:Object(s.jsx)("i",{className:"fab fa-github"})})}),Object(s.jsx)("li",{className:"left__item",children:Object(s.jsx)(u.HashLink,{to:"https://www.linkedin.com/in/tom%C3%A1s-sacripanti-37519a165/",target:"_blank",rel:"noreferrer",className:"left__link",children:Object(s.jsx)("i",{className:"fab fa-linkedin-in"})})}),Object(s.jsx)("li",{className:"left__item",children:Object(s.jsx)(u.HashLink,{to:"https://www.instagram.com/tomisacripanti/",target:"_blank",rel:"noreferrer",className:"left__link",children:Object(s.jsx)("i",{className:"fab fa-instagram"})})}),Object(s.jsx)("li",{className:"left__item",children:Object(s.jsx)(u.HashLink,{to:"https://twitter.com/TomasSacripanti",target:"_blank",rel:"noreferrer",className:"left__link",children:Object(s.jsx)("i",{className:"fab fa-twitter"})})})]}),Object(s.jsx)("div",{className:"left__line"})]}),Object(s.jsxs)("div",{className:"right",children:[Object(s.jsx)(u.HashLink,{className:"right__email",to:"mailto:sacripantitomas@gmail.com",children:"sacripantitomas@gmail.com"}),Object(s.jsx)("div",{className:"right__line"})]})]})}}]),a}(c.Component)),m=(a(32),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("main",{className:"main",children:[Object(s.jsx)("p",{children:"Hi, my name is"}),Object(s.jsx)("h1",{className:"main__name",children:"Sacripanti Tom\xe1s."}),Object(s.jsx)("h1",{children:"I develop things for the web."}),Object(s.jsxs)("p",{className:"main__based",children:["I'm a Frontend Developer based in Rosario, ",Object(s.jsx)("span",{children:"Argentina"})," specialized on building and developing great websites and applications."]}),Object(s.jsx)("a",{className:"main__button",href:"#about",children:"Know me"})]})}}]),a}(c.Component)),A=(a(33),a.p+"static/media/portfoliophoto.84ce3191.png"),g=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"about",className:"about",children:[Object(s.jsxs)("div",{className:"about__text",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"about__title",children:"About me"}),Object(s.jsx)("div",{className:"about__line"})]}),Object(s.jsxs)("p",{children:["Hello! I'm ",Object(s.jsx)("span",{children:"Tom\xe1s Sacripanti"}),", a frontend developer based in Rosario,",Object(s.jsx)("span",{children:" Argentina"}),"."]}),Object(s.jsx)("p",{children:"I enjoy creating amazing stuff that lives on the internet. My goal is to always bring excellent products that provides pixel perfect and performance experiences."}),Object(s.jsxs)("p",{children:["I'm currently studying a ",Object(s.jsx)("span",{children:"Programming Technician"})," at the UTN (Universidad Tecnol\xf3gica Nacional) and i have experience working with the following technologies:"," "]}),Object(s.jsxs)("div",{className:"about__skills",children:[Object(s.jsxs)("ul",{className:"about__list",children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-caret-right"}),"HTML & (S)CSS"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-caret-right"}),"Javascript(ES6)"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-caret-right"}),"React"]})]}),Object(s.jsxs)("ul",{className:"about__list",children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-caret-right"}),"NodeJS (Express)"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-caret-right"}),"Git & GitHub"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-caret-right"}),"NPM"]})]})]})]}),Object(s.jsx)("div",{className:"about__image",children:Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:A,alt:"Personal"})})})]})}}]),a}(c.Component),f=(a(34),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{id:"projects",className:"projects"})}}]),a}(c.Component)),x=(a(35),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{id:"contact",className:"contact"})}}]),a}(c.Component)),p=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{}),Object(s.jsx)(m,{}),Object(s.jsx)(g,{}),Object(s.jsx)(f,{}),Object(s.jsx)(x,{})]})}}]),a}(c.Component),N=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(d.BrowserRouter,{children:[Object(s.jsx)(O,{}),Object(s.jsx)(p,{})]})}}]),a}(c.Component);r.a.render(Object(s.jsx)(N,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8c2229c1.chunk.js.map