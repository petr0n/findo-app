(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(47)},24:function(e,t,n){},25:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),l=n.n(c),i=(n(24),n(25),n(50)),o=n(51),s=n(52),u=n(2),m=n(3),h=n(5),d=n(4),f=n(6),g=n(15),p=n.n(g),v=(n(39),function(e){var t=e.children;return r.a.createElement("div",{className:"container mx-auto flex px-5"},r.a.createElement("div",{className:"md_w-2/12 sm_w-0"}),r.a.createElement("div",{className:"md_w-8/12 sm_w-full"},t),r.a.createElement("div",{className:"md_w-2/12 sm_w-0"}))}),b=(n(40),function(){return r.a.createElement("div",{className:"text-center text-white py-10"},"\xa9 FINDO GAME - All rights reserved")}),E=(n(41),function(){return r.a.createElement("div",{className:"flex items-center my-10"},r.a.createElement("img",{src:"../../images/findo-logo.png",alt:"FINDO LOGO",className:"mx-auto"}))}),O=(n(42),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"board-inner flex flex-wrap justify-center"},this.props.tiles)}}]),t}(a.Component)),j=(n(43),function(){return r.a.createElement("div",{className:"flex items-center justify-center text-center"},r.a.createElement("div",{className:"p-3 bg-white",style:{width:"9vw",height:"9vw",margin:".5vw"}},"Text goes here"))}),y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).makeTileGrid=function(){for(var e=[],t=0;t<25;t++)e.push(r.a.createElement(j,{info:"info"}));return console.log("tiles",e),e},n.renderGrid=function(){n.setState({tiles:n.makeTileGrid()})},n.state={tiles:[]},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.renderGrid()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"board mx-auto"},r.a.createElement("div",{className:"trans-white mx-auto items-center p-1 mb-2 w-full"},r.a.createElement("div",{className:"cursor-pointer mb-4",onClick:function(){return e.props.handlePageChange("login")}},"Back to Login")),r.a.createElement(O,{tiles:this.state.tiles}))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={placeholder:"This is only a template"},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"trans-white mx-auto rounded flex flex-col items-center p-8 w-full flex-none"},r.a.createElement("h2",{className:"text-2xl mb-10"},"Login"),r.a.createElement("div",{className:"cursor-pointer mb-4",onClick:function(){return e.props.handlePageChange("game")}},"FACEBOOK"),r.a.createElement("div",{className:"cursor-pointer mb-4",onClick:function(){return e.props.handlePageChange("game")}},"GOOGLE"),r.a.createElement("div",{className:"cursor-pointer mb-4",onClick:function(){return e.props.handlePageChange("game")}},"Start Game"))}}]),t}(a.Component),k=(n(44),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).handlePageChange=function(e){n.setState({currentPage:e}),n.changePage()},n.state={placeholder:"This is only a template",loggedIn:!1,hasPrevious:!0,gameboardId:null,currentPage:"login"},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"changePage",value:function(){switch(console.log("this.state.currentPage",this.state.currentPage),this.state.currentPage){case"login":return r.a.createElement(w,{key:"login1",hasPrevious:this.state.hasPrevious,handlePageChange:this.handlePageChange});case"game":return r.a.createElement(y,{key:"game",gameboardId:this.state.gameboardId,handlePageChange:this.handlePageChange});default:return r.a.createElement(w,{key:"login2",hasPrevious:this.state.hasPrevious,handlePageChange:this.handlePageChange})}}},{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement(E,null),r.a.createElement(p.a,{transitionName:"page",transitionEnterTimeout:500,transitionLeaveTimeout:500},this.changePage()),r.a.createElement(b,null))}}]),t}(a.Component)),P=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={placeholder:"This is only a template"},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home"))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={placeholder:"This is only a template"},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"AddTile"))}}]),t}(a.Component),x=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={placeholder:"This is only a template",loggedIn:!0},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement(E,null),r.a.createElement(P,null),r.a.createElement(C,null),r.a.createElement(b,null))}}]),t}(a.Component);n(45);var N=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(s.a,{path:"/",component:k}),r.a.createElement(s.a,{path:"/admin",exact:!0,component:x}))))};l.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6153dda0.chunk.js.map