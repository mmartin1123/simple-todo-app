(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),l=n.n(r),i=n(5),c=n(1),s=n(2),d=n(4),p=n(3),u=n(17),m=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.completed,n=e.title,a=e.id,r=this.props,l=r.handleChangeProps,i=r.deleteTodoProps;return o.a.createElement("li",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:t,onChange:function(){return l(a)}}),o.a.createElement("button",{onClick:function(){return i(a)}},"Delete"),o.a.createElement("span",{style:t?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},n))}}]),n}(o.a.Component),h=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("ul",null,this.props.todos.map((function(t){return o.a.createElement(m,{key:t.id,todo:t,handleChangeProps:e.props.handleChangeProps,deleteTodoProps:e.props.deleteTodoProps})})))}}]),n}(o.a.Component),f=function(){return o.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},o.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple Todo App"),o.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))},b=n(8),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodoProps(e.state.title),e.setState({title:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},o.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange,name:"title"}),o.a.createElement("input",{type:"submit",value:"Submit",className:"input-submit"}))}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:Object(u.a)(),title:"Setup development environment",completed:!0},{id:Object(u.a)(),title:"Develop website and add content",completed:!1},{id:Object(u.a)(),title:"Deploy to live server",completed:!1}]},e.handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todos:Object(i.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodoItem=function(t){var n={id:Object(u.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(i.a)(e.state.todos),[n])})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement(v,{addTodoProps:this.addTodoItem}),o.a.createElement(h,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo}))}}]),n}(o.a.Component);n(14);l.a.render(o.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.4e4077ab.chunk.js.map