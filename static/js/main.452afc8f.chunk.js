(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(7),o=n.n(r),i=(n(14),n(15),n(2)),s=n(3),j=n(5),b=n(4),d=n(8),u=n.n(d),l=n(0);function h(t){var e=t.children;return Object(l.jsx)("section",{className:u.a.container,children:e})}var O=n(9),p=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.countFeedback=function(e){var n=e.target.textContent.toLowerCase();t.setState((function(t){return Object(O.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(e){t.setState((function(){return{total:e.good+e.neutral+e.bad}}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.good+this.state.neutral+this.state.bad,e=Math.ceil(this.state.good/t*100);return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"button",onClick:this.countFeedback,children:"Good"}),Object(l.jsx)("button",{type:"button",onClick:this.countFeedback,children:"Neutral"}),Object(l.jsx)("button",{type:"button",onClick:this.countFeedback,children:"Bad"}),Object(l.jsxs)("p",{children:["Good: ",this.state.good]}),Object(l.jsxs)("p",{children:["Neutral: ",this.state.neutral]}),Object(l.jsxs)("p",{children:["Bad: ",this.state.bad]}),Object(l.jsxs)("p",{children:["Total: ",t]}),Object(l.jsxs)("p",{children:["Positive feedback: ",e," %"]})]})}}]),n}(c.Component),x=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Statistics"}),Object(l.jsx)("p",{children:"Good: "}),Object(l.jsx)("p",{children:"Neutral:"}),Object(l.jsx)("p",{children:"Bad:"}),Object(l.jsx)("p",{children:"Total:"}),Object(l.jsx)("p",{children:"Positive feedback: %"})]})}}]),n}(c.Component),f=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(l.jsxs)(h,{children:[Object(l.jsx)("h1",{children:"Please leave feedback"}),Object(l.jsx)(p,{}),Object(l.jsx)(x,{})]})}}]),n}(c.Component);o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={container:"Container_container__so2e5"}}},[[17,1,2]]]);
//# sourceMappingURL=main.452afc8f.chunk.js.map