(this["webpackJsonpreact-contributors-example"]=this["webpackJsonpreact-contributors-example"]||[]).push([[0],{21:function(t,n,e){t.exports=e(39)},22:function(t,n,e){},39:function(t,n,e){"use strict";e.r(n);e(22);var r=e(0),o=e.n(r),a=e(11),i=e.n(a),s=e(3),c=e(19),u=e(9),l=e.n(u),p=e(4);function m(){const t=Object(s.a)(["\n  margin-top: 0.25rem;\n"]);return m=function(){return t},t}function h(){const t=Object(s.a)(["\n  margin: 0;\n"]);return h=function(){return t},t}function d(){const t=Object(s.a)(["\n  display: flex;\n  flex: 1 1;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 1rem;\n  text-align: inherit;\n"]);return d=function(){return t},t}function f(){const t=Object(s.a)(["\n  overflow: hidden;\n  border-radius: 50%;\n  height: 4.5rem;\n  margin-bottom: 0;\n  width: 4.5rem;\n"]);return f=function(){return t},t}function b(){const t=Object(s.a)(["\n  display: flex;\n  min-width: 18.125rem;\n  width: 20%;\n  margin: 1rem;\n  padding: 1rem;\n"]);return b=function(){return t},t}function g(){const t=Object(s.a)(["\n  display: flex;\n  align-content: center;\n  flex-flow: row wrap;\n  height: 100%;\n  margin: 1rem 1rem;\n"]);return g=function(){return t},t}let w,v,x,y,E,j;const C=p.a.div(w||(w=g())),O=p.a.div(v||(v=b())),B=p.a.img(x||(x=f())),_=p.a.div(y||(y=d())),k=p.a.h4(E||(E=h())),A=p.a.small(j||(j=m())),J=new c.a;class S extends o.a.Component{render(){return o.a.createElement(O,null,o.a.createElement(B,{src:this.props.avatar_url}),o.a.createElement(_,null,o.a.createElement(k,null,this.props.name),o.a.createElement(A,null,o.a.createElement("a",{href:this.props.url},this.props.url))))}}class D extends o.a.Component{constructor(t){super(t),this.state={contributors:[]}}loadContributors(t,n){return new Promise((e,r)=>{J.repos.listContributors({owner:t,repo:n}).then(t=>{this.setState({contributors:[...l.a.orderBy(l.a.unionBy(this.state.contributors,t.data,"login"),"contributions","desc")]}),e()},t=>{r(t)})})}componentDidMount(){this.props.repo?!this.props.repo||Array.isArray(this.props.repo)?this.props.repo.map(t=>{this.loadContributors(this.props.owner,t)}):this.loadContributors(this.props.owner,this.props.repo):this.setState({contributors:[]})}render(){return o.a.createElement(C,null,this.state.contributors&&this.state.contributors.length?this.state.contributors.map((t,n)=>o.a.createElement(S,{key:n,avatar_url:t.avatar_url,name:t.login,url:t.html_url})):void 0)}}var I=D;const M=["EasyButton","easybtn.earias.me"];var P=()=>o.a.createElement(I,{owner:"evert-arias",repo:M});i.a.render(o.a.createElement(P,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e50cd592.chunk.js.map