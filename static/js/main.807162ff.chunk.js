(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),i=c.n(s),n=c(15),r=c.n(n),o=(c(22),c(2)),l=c(3),j=c(5),d=c(4),b=c(7),p=(c(23),c(9)),m=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var a;return Object(o.a)(this,c),(a=t.call(this,e)).header=i.a.createRef(),a.navigation=i.a.createRef(),a.hamburguer=i.a.createRef(),a}return Object(l.a)(c,[{key:"render",value:function(){var e,t,c=this,s=document.documentElement,i=window.scrollY||s.scrollTop,n=0,r=0,o=function(){t=!0;var a=c.header.current;return 2===n&&e>200?a.classList.add("hide"):1===n?a.classList.remove("hide"):t=!1,t};return window.addEventListener("click",(function(e){(e.preventDefault(),e.target.classList.contains("hamburguer"))&&c.navigation.current.classList.toggle("visible")})),window.addEventListener("scroll",(function(){e=window.scrollY||s.scrollTop,(n=e>i?2:1)!==r&&(t=o()),i=e,t&&(r=n)})),Object(a.jsxs)("header",{ref:this.header,className:"header",children:[Object(a.jsx)("figure",{className:"logotipo",children:Object(a.jsx)("img",{className:"logotipo-img",src:"data:image/png;base64,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",alt:"Logotipo"})}),Object(a.jsxs)("ul",{ref:this.navigation,className:"navigation",children:[Object(a.jsx)("li",{className:"navigation-item",children:Object(a.jsx)(p.HashLink,{className:"navigation-link",to:"#about",children:"About me"})}),Object(a.jsx)("li",{className:"navigation-item",children:Object(a.jsx)(p.HashLink,{className:"navigation-link",to:"#projects",children:"Projects"})}),Object(a.jsx)("li",{className:"navigation-item",children:Object(a.jsx)(p.HashLink,{className:"navigation-link",to:"#contact",children:"Contact me"})})]}),Object(a.jsxs)("button",{ref:this.hamburguer,className:"hamburguer",children:[Object(a.jsx)("div",{className:"hamburguer__line"}),Object(a.jsx)("div",{className:"hamburguer__line"}),Object(a.jsx)("div",{className:"hamburguer__line"})]})]})}}]),c}(s.Component),h=(c(32),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsxs)("ul",{className:"left__social",children:[Object(a.jsx)("li",{className:"left__item",children:Object(a.jsx)(b.Link,{to:"https://github.com/TomasSacripanti",target:"_blank",rel:"noopener noreferrer",className:"left__link",onClick:function(){return window.location.href="https://github.com/TomasSacripanti",null},children:Object(a.jsx)("i",{className:"fab fa-github"})})}),Object(a.jsx)("li",{className:"left__item",children:Object(a.jsx)(b.Link,{to:"https://www.linkedin.com/in/tom%C3%A1s-sacripanti-37519a165/",target:"_blank",rel:"noopener noreferrer",className:"left__link",onClick:function(){return window.location.href="https://www.linkedin.com/in/tom%C3%A1s-sacripanti-37519a165/",null},children:Object(a.jsx)("i",{className:"fab fa-linkedin-in"})})}),Object(a.jsx)("li",{className:"left__item",children:Object(a.jsx)(b.Link,{to:"https://www.instagram.com/tomisacripanti/",target:"_blank",rel:"noopener noreferrer",className:"left__link",onClick:function(){return window.location.href="https://www.instagram.com/tomisacripanti/",null},children:Object(a.jsx)("i",{className:"fab fa-instagram"})})}),Object(a.jsx)("li",{className:"left__item",children:Object(a.jsx)(b.Link,{to:"https://twitter.com/TomasSacripanti",target:"_blank",rel:"noopener noreferrer",className:"left__link",onClick:function(){return window.location.href="https://twitter.com/TomasSacripanti",null},children:Object(a.jsx)("i",{className:"fab fa-twitter"})})})]}),Object(a.jsx)("div",{className:"left__line"})]}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsx)(b.Link,{className:"right__email",to:"mailto:sacripantitomas@gmail.com",children:"sacripantitomas@gmail.com"}),Object(a.jsx)("div",{className:"right__line"})]})]})}}]),c}(s.Component)),u=(c(33),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsx)("p",{children:"Hi, my name is..."}),Object(a.jsx)("h1",{className:"main__name",children:"Sacripanti Tom\xe1s."}),Object(a.jsx)("h1",{children:"I build things for the web."}),Object(a.jsxs)("p",{className:"main__based",children:["I'm a Frontend Developer, based in Rosario, ",Object(a.jsx)("span",{children:"Argentina"})," and i'm specialized in building and developing great web applications."]}),Object(a.jsx)(p.HashLink,{className:"main__button",to:"#about",children:"Sobre m\xed"})]})}}]),c}(s.Component)),O=(c(34),c.p+"static/media/portfoliophoto.84ce3191.png"),f=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"about",className:"about",children:[Object(a.jsxs)("div",{className:"about__text",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"about__title",children:"About me"}),Object(a.jsx)("div",{className:"about__line"})]}),Object(a.jsxs)("p",{children:["Hello! I am ",Object(a.jsx)("span",{children:"Tom\xe1s Sacripanti"}),", a Frontend Developer based in Rosario,",Object(a.jsx)("span",{children:" Argentina"}),"."]}),Object(a.jsx)("p",{children:"I enjoy creating amazing stuff that lives on the internet. My goal is to always bring excellent digital products that provides pixel perfect and performance experiences."}),Object(a.jsxs)("p",{children:["I'm currently studying a ",Object(a.jsx)("span",{children:"Programming Technician"})," at the UTN (Universidad Tecnol\xf3gica Nacional) and i have experience working with the following technologies:"]}),Object(a.jsxs)("div",{className:"about__skills",children:[Object(a.jsxs)("ul",{className:"about__list",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-caret-right"}),"HTML & (S)CSS"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-caret-right"}),"Javascript(ES6)"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-caret-right"}),"React"]})]}),Object(a.jsxs)("ul",{className:"about__list",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-caret-right"}),"NodeJS (Express)"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-caret-right"}),"MongoDB"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-caret-right"}),"Git & GitHub"]})]})]})]}),Object(a.jsx)("div",{className:"about__image",children:Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:O,alt:"Personal"})})})]})}}]),c}(s.Component),g=(c(35),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){return Object(o.a)(this,c),t.call(this,e)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:this.props.classList,children:[Object(a.jsxs)(b.Link,{to:this.props.link,className:"project__image",children:[Object(a.jsx)("img",{src:this.props.image,alt:"Notes App (MERN Stack)"}),Object(a.jsx)("div",{className:"project__overlay--one"})]}),Object(a.jsxs)("div",{className:"project__description",children:[Object(a.jsx)("h4",{children:this.props.title}),Object(a.jsx)("p",{children:this.props.description}),Object(a.jsx)("ul",{className:"project__technologies",children:this.props.techs.map((function(e){return Object(a.jsx)("li",{children:e})}))}),Object(a.jsx)("div",{className:"project__links"})]})]})}}]),c}(s.Component)),x=c.p+"static/media/mern-notes.effe11dd.png",A=c.p+"static/media/crypto-cotizador.8699c865.png",v=c.p+"static/media/weather-app.79fffab2.png",N=c.p+"static/media/calculator.dac89b6a.png",C=c.p+"static/media/stopwatch.0fe73090.png",w=c.p+"static/media/shopcart.7f8f7fed.png",y=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"projects",className:"projects",children:[Object(a.jsx)("h3",{className:"projects__title",children:"Projects i've developed"}),Object(a.jsx)(g,{title:"Notes Application",description:"MERN Stack Application that save notes identified with their respective user.",techs:["MongoDB","Express.js","React.js","Node.js"],link:"https://github.com/TomasSacripanti/Notes-MERN",image:x,classList:"project project__one"}),Object(a.jsx)(g,{title:"Crypto Calculator",description:"Application that calculates cryptocurrencies values in many different currencies",techs:["React.js","Bootstrap","Crypto Compare API"],link:"https://github.com/TomasSacripanti/Crypto-Cotizador",image:A,classList:"project project__two"}),Object(a.jsx)(g,{title:"Weather App",description:"This Weather App takes the city name and country code and returns different many factors of the weather in that current location",techs:["React.js","Bootstrap","Open Weather Map API"],link:"https://github.com/TomasSacripanti/Weather-App",image:v,classList:"project project__three"}),Object(a.jsx)(g,{title:"Calculator",description:"Exact simple calculator developed with vanilla javascript from scratch",techs:["HTML","CSS","Javascript"],link:"https://github.com/TomasSacripanti/Calculator",image:N,classList:"project project__four"}),Object(a.jsx)(g,{title:"Stopwatch",description:"Simple stopwatch application created just with javascript",techs:["HTML","CSS","Javascript"],link:"https://github.com/TomasSacripanti/Stopwatch-Cronometro",image:C,classList:"project project__five"}),Object(a.jsx)(g,{title:"Shopcart",description:"Udemy website shopping cart copy",techs:["React.js","HTML","CSS"],link:"",image:w,classList:"project project__six"})]})}}]),c}(s.Component),k=(c(36),c(10)),E=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var a;return Object(o.a)(this,c),(a=t.call(this,e)).submitForm=a.submitForm.bind(Object(k.a)(a)),a.state={status:""},a}return Object(l.a)(c,[{key:"render",value:function(){this.state.status;return Object(a.jsxs)("form",{className:"contact__form",action:"https://formspree.io/f/mpzogbaw",method:"POST",children:[Object(a.jsx)("h5",{children:"Enviar mensaje"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",name:"name",required:"required"}),Object(a.jsx)("span",{children:"Nombre"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"email",name:"email",required:"required"}),Object(a.jsx)("span",{children:"Email"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{name:"mensaje",id:"",cols:"30",rows:"2",required:"required"}),Object(a.jsx)("span",{children:"Escribe tu mensaje..."})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Enviar",onClick:this.submitForm})})]})}},{key:"submitForm",value:function(e){var t=this,c=e.target.parentElement.parentElement;console.log(c);var a=new FormData(c),s=new XMLHttpRequest;s.open(c.method,c.action),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?(c.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},s.send(a)}}]),c}(i.a.Component),B=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"contact",className:"contact",children:[Object(a.jsxs)("div",{className:"contact__head",children:[Object(a.jsx)("h3",{children:"Contact me"}),Object(a.jsx)("p",{children:"If you want to contact me, here down below i left my contact data or just message me in the following form and i will email you back with a response."})]}),Object(a.jsxs)("div",{className:"contact__body",children:[Object(a.jsxs)("div",{className:"contact__info",children:[Object(a.jsxs)("div",{className:"contact__phone",children:[Object(a.jsx)("div",{className:"contact__icon",children:Object(a.jsx)("i",{className:"fas fa-phone-alt"})}),Object(a.jsxs)("div",{className:"contact__text",children:[Object(a.jsx)("h6",{children:"Phone"}),Object(a.jsx)("p",{children:"03464-15-686477"})]})]}),Object(a.jsxs)("div",{className:"contact__email",children:[Object(a.jsx)("div",{className:"contact__icon",children:Object(a.jsx)("i",{className:"far fa-envelope"})}),Object(a.jsxs)("div",{className:"contact__text",children:[Object(a.jsx)("h6",{children:"Email"}),Object(a.jsx)("p",{children:"sacripantitomas@gmail.com"})]})]})]}),Object(a.jsx)(E,{})]})]})}}]),c}(s.Component),I=(c(37),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/TomasSacripanti/Portfolio",children:Object(a.jsx)("p",{children:"React App designed and developed by Tom\xe1s Sacripanti"})})})}}]),c}(s.Component)),S=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{}),Object(a.jsx)(u,{}),Object(a.jsx)(f,{}),Object(a.jsx)(y,{}),Object(a.jsx)(B,{}),Object(a.jsx)(I,{})]})}}]),c}(s.Component),_=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsxs)(b.BrowserRouter,{children:[Object(a.jsx)(m,{}),Object(a.jsx)(S,{})]})}}]),c}(s.Component);r.a.render(Object(a.jsx)(_,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.807162ff.chunk.js.map