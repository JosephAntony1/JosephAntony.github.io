(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(12),r=a.n(l),s=(a(52),a(2)),o=a(3),c=a(6),m=a(4),d=a(13),u=a(5),h=(a(22),a(53),a(17)),p=a.n(h),f=(a(68),a(18)),g=a(9),y=a.n(g),v=a(19),E=a.n(v),w=a(8),b=a.n(w),O=(a(35),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"bullets",value:function(){var e=[];for(var t in this.props.info)e.push(i.a.createElement("li",{style:{marginBlockStart:" 0.83em"},key:t},this.props.info[t]));return e}},{key:"render",value:function(){return i.a.createElement("div",{className:"experience"},i.a.createElement("span",null,i.a.createElement("div",{className:"jobTitle"},i.a.createElement("h2",null,this.props.title),i.a.createElement("span",null,i.a.createElement("h5",{className:"company"},this.props.company," "),i.a.createElement("h6",{className:"date"},i.a.createElement("i",null,this.props.date)))),i.a.createElement("div",{className:"work"},this.bullets())))}}]),t}(i.a.Component)),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(b.a,{className:"separate",parallaxData:[{start:"self",duration:"15%",easing:"ease",startOffset:"10%",properties:[{startValue:0,endValue:1,property:"scaleX"}]}]},i.a.createElement("hr",{className:"separate"}))}}]),t}(i.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"experiences"},i.a.createElement(O,{title:"Software Engineer",company:"Leidos",info:["Coded and tested a variety of machine learning algorithms for large scale data clarification","Utilized Python\u2019s Flask to make a web UI and Whoosh Alchemy to manage a PostgreSQL database to handle large streams of continually flowing data.","Using AlanNLP trained on the SQUAD dataset to develop a natural language procesing conversational UX for Leidos employees and customers to easily converse with and get their questions answered more easily."],date:"(June 2017 - Present)"}),i.a.createElement(j,null),i.a.createElement(O,{title:"Software Engineering Intern",company:"Solstice Consulting",info:["Created a neural network capable of reading the American Sign Language alphabet using cutting edge Single Shot Detection via Tensorflow, working under a Scrum Agile Methodology; project was demoed at Google\u2019s Cloud Next conference","Developed a V0.1 version of a website to host the technology for anyone to interact with it using React.js"],date:"(June 2018 - August 2018)"}),i.a.createElement(j,null),i.a.createElement(O,{title:"Android Developer",company:"WMUC",info:["Created and maintain an app for listening to the school\u2019s radio station with plans to expand to a database for all local shows","Managed a team of 4 developers using an agile development framework"],date:"(November 2016 \u2013 May 2017)"}),i.a.createElement("br",null))}}]),t}(i.a.Component),x=a(7),D=a.n(x),N=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{height:"70vh",verticalAlign:"middle"}},i.a.createElement("div",{className:"center-vert"},i.a.createElement(D.a,{startDelay:1500,speed:20},i.a.createElement("h1",{style:{fontSize:"9vh",fontWeight:"lighter",color:" #22a39f"}},"Hello.",i.a.createElement(D.a.Delay,{ms:500}),"\xa0My name is Joseph Antony.",i.a.createElement(D.a.Delay,{ms:1e3}),i.a.createElement(D.a.Backspace,{count:35,speed:10}),"I am a Software Engineer.",i.a.createElement(D.a.Delay,{ms:1e3}),"\xa0Apparently.",i.a.createElement(D.a.Delay,{ms:1e3}),i.a.createElement(D.a.Backspace,{count:50,speed:10})))))}}]),t}(i.a.Component),A=a(41),S=a.n(A),W=a(42),C=a.n(W),V=a(43),L=a.n(V),P=a(44),z=a.n(P),B=a(45),J=a.n(B),U=a(46),M=a.n(U),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).scrollPane=i.a.createRef(),a.state={width:0,height:0,margin:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=[{image:M.a,amount:.85},{image:J.a,amount:.6},{image:z.a,amount:.5},{image:L.a,amount:.4},{image:C.a,amount:.3},{image:S.a,amount:.2}];return e=this.state.width>this.state.height?"w":"h",i.a.createElement(f.ParallaxProvider,null,i.a.createElement("div",{className:"App  ms-Fabric"},i.a.createElement(p.a,null,i.a.createElement("div",{className:E.a.bannerContainer},i.a.createElement(f.ParallaxBanner,{className:E.a.bannerBg,layers:t,style:{height:"100vh"}},i.a.createElement("div",{className:"parallaxChildren ms-font-su"},i.a.createElement("img",{src:y.a,alt:y.a,style:{height:"25v"+e}}),i.a.createElement("h1",{style:{fontSize:"7v"+e,color:"white",margin:"0"}},"Joseph Antony"))))),i.a.createElement(N,null),i.a.createElement("div",{className:"resume"},i.a.createElement("div",{style:{verticalAlign:"middle"}},this.slideyTitle()),i.a.createElement(j,null),i.a.createElement(p.a,null,i.a.createElement(k,null)),i.a.createElement(j,null))))}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){this._ismounted=!1,window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"slideyTitle",value:function(){var e;return e=this.state.width>this.state.height?"w":"h",this.state.width>768?i.a.createElement("div",null," ",i.a.createElement(b.a,{style:{width:"fit-content",display:"inline-block",verticalAlign:"middle"},parallaxData:[{start:"self",duration:"40%",easing:"ease",startOffset:"10%",properties:[{startValue:0,endValue:-this.state.width+.95*this.state.width,property:"translateX"}]}]},i.a.createElement("img",{src:y.a,alt:y.a,style:{height:"20v"+e}})),i.a.createElement(b.a,{style:{width:"fit-content",display:"inline-block",verticalAlign:"middle"},parallaxData:[{start:"self",duration:"40%",easing:"ease",startOffset:"10%",properties:[{startValue:0,endValue:this.state.width-.95*this.state.width,property:"translateX"}]}]},i.a.createElement("h1",{style:{fontSize:"9v"+e,fontWeight:"lighter",color:" #22a39f"}},"Experience"))):i.a.createElement("div",null,i.a.createElement(b.a,{className:"slideyTitle",style:{width:"fit-content",display:"inline-block",verticalAlign:"middle"},parallaxData:[{start:"self",duration:"40%",easing:"ease",startOffset:"10%",properties:[{startValue:0,endValue:1,property:"opacity"}]}]},i.a.createElement("img",{src:y.a,alt:y.a,style:{height:"20v"+e}}),i.a.createElement("h1",{style:{fontSize:"9v"+e,fontWeight:"lighter",color:" #22a39f"}},"Experience")))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},19:function(e,t,a){},22:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/1-min.01babc06.png"},42:function(e,t,a){e.exports=a.p+"static/media/2-min.1353e216.png"},43:function(e,t,a){e.exports=a.p+"static/media/3-min.7f906a9f.png"},44:function(e,t,a){e.exports=a.p+"static/media/4-min.40552322.png"},45:function(e,t,a){e.exports=a.p+"static/media/5-min.6956149d.png"},46:function(e,t,a){e.exports=a.p+"static/media/6.2123608e.png"},47:function(e,t,a){e.exports=a(109)},52:function(e,t,a){},9:function(e,t,a){e.exports=a.p+"static/media/JA_Logo.6284c2a8.svg"}},[[47,1,2]]]);
//# sourceMappingURL=main.425472e9.chunk.js.map