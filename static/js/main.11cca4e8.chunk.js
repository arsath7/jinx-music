(this.webpackJsonpdemoapp=this.webpackJsonpdemoapp||[]).push([[0],{21:function(e,a,n){},42:function(e,a,n){},52:function(e,a,n){"use strict";n.r(a);var s=n(0),i=n(23),t=n.n(i),c=(n(42),n(6)),r=(n(21),n(3)),j=function(){return Object(r.jsx)("div",{className:"titleone",children:Object(r.jsx)("h1",{className:"title",children:"JINX MUSIC"})})},l=Object(s.createContext)(),o=function(e){var a=Object(s.useState)(""),n=Object(c.a)(a,2),i=n[0],t=n[1],j=Object(s.useState)([{id:1,name:"raanjhanaa",singers:"Ar rahman",genre:"folk song",album:"Raanjhanaa",song:"songs/Raanjhanaa.mp3",image:"images/raanjha.jpg"},{id:2,name:"hasi",singers:"ami mishra",genre:"melody",album:"Hamaari hadhuri kahani",song:"songs/Hasi.mp3",image:"images/hamari.jpg"},{id:3,name:"ik vaari aa",singers:"arijit singh",genre:"pop",album:"Raabta",song:"songs/Ik Vaari Aa.mp3",image:"images/raabta.jpg"},{id:4,name:"kaise mujhe",singers:"ami mishra",genre:"melody",album:"ghajini",song:"songs/Kaise Mujhe.mp3",image:"images/ghajini.jpg"},{id:5,name:"kar-har-maidaan",singers:"lal singh",genre:"motivation",album:"sanju",song:"songs/Kar-Har-Maidaan-Fateh.mp3",image:"images/sanju.jpg"},{id:6,name:"the humma song",singers:"ar rahman",genre:"melody",album:"ok jaanu",song:"songs/The Humma Song.mp3",image:"images/ok jaanu.jpg"},{id:7,name:"tum tak",singers:"Javed ali",genre:"melody",album:"Raanjhanaa",song:"songs/Tum Tak.mp3",image:"images/raanjha.jpg"},{id:8,name:"ullu ka pattha",singers:"Arijit singh",genre:"pop",album:"Jagga jasoos",song:"songs/Ullu Ka Pattha.mp3",image:"images/jagga.jpg"},{id:9,name:"yun hi chala chal",singers:"Udit narayanan",genre:"motivation",album:"Swades",song:"songs/Yun Hi Chala Chal.mp3",image:"images/swades.jpg"}]),o=Object(c.a)(j,2),m=o[0],g=o[1];return Object(r.jsx)(l.Provider,{value:{songss:[m,g],searchh:[i,t]},children:e.children})},m=n(15),g=function(){var e=Object(s.useContext)(l),a=e.searchh,n=(e.songss,Object(c.a)(a,2)),i=n[0],t=n[1];return Object(r.jsx)("div",{className:"searchform",children:Object(r.jsxs)("div",{className:"search-bar",children:[Object(r.jsx)("input",{type:"text",className:"search-box",value:i,onChange:function(e){t(e.target.value)},placeholder:"Search by song name"}),Object(r.jsx)(m.b,{onClick:function(e){t("")},className:"closeicon"})]})})},h=n(37),d=(n(45),function(){var e=Object(s.useContext)(l),a=e.songss,n=e.searchh,i=Object(c.a)(a,2),t=i[0],j=(i[1],Object(c.a)(a,2)),o=(j[0],j[1],Object(c.a)(n,2)),g=o[0],d=(o[1],Object(s.useState)(0)),u=Object(c.a)(d,2),b=u[0],O=u[1],p=t[b];if(!p)return null;return""!=g&&!0,Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"songname",children:t.filter((function(e){return e.name.includes(g)})).map((function(e){return Object(r.jsxs)("div",{className:"songlist",children:[Object(r.jsx)("div",{className:"hiddentitle",children:"hello"}),Object(r.jsx)("img",{className:"picture",src:e.image}),Object(r.jsx)("h1",{className:"indisong",children:e.name}),Object(r.jsxs)("div",{className:"details",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Album:"})," ",Object(r.jsx)("i",{children:e.album})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Singers:"})," ",Object(r.jsx)("i",{children:e.singers})]})]}),Object(r.jsx)(m.a,{className:"playicon",onClick:function(a){return function(e,a){e.preventDefault(),O(a-1)}(a,e.id)}}),Object(r.jsx)("div",{className:"hiddentitle",children:"hello"})]})}))}),Object(r.jsx)("div",{className:"player",children:Object(r.jsx)(h.a,{autoPlay:!0,src:p.song,showJumpControls:!1,customAdditionalControls:[],showSkipControls:!0,showFilledVolume:!0,onEnded:function(){return O((function(e){return e+1}))}})})]})});var u=function(){return Object(r.jsx)(o,{children:Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("div",{className:"titlecompo",children:Object(r.jsx)(j,{})}),Object(r.jsx)("div",{className:"searchbarcompo",children:Object(r.jsx)(g,{})}),Object(r.jsx)(d,{})]})})},b=n(35),O=n(4);n(14),n(18);var p=function(){var e=Object(s.useState)(),a=Object(c.a)(e,2);return a[0],a[1],Object(r.jsx)(b.a,{children:Object(r.jsx)(O.c,{children:Object(r.jsx)(O.a,{exact:!0,path:"/",children:Object(r.jsx)(u,{})})})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(a){var n=a.getCLS,s=a.getFID,i=a.getFCP,t=a.getLCP,c=a.getTTFB;n(e),s(e),i(e),t(e),c(e)}))};t.a.render(Object(r.jsx)(p,{}),document.getElementById("root")),x()}},[[52,1,2]]]);
//# sourceMappingURL=main.11cca4e8.chunk.js.map