webpackJsonp([1],{Sjjo:function(t,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=r("LFd+"),a=r("YaEn"),i={name:"EditBoard",data:function(){return{key:this.$route.params.id,board:{}}},created:function(){var t=this;e.a.firestore().collection("boards").doc(this.$route.params.id).get().then(function(o){o.exists?t.board=o.data():alert("No such document!")})},methods:{onSubmit:function(t){var o=this;t.preventDefault(),e.a.firestore().collection("boards").doc(this.$route.params.id).set(this.board).then(function(t){o.key="",o.board.title="",o.board.description="",o.board.author="",a.a.push({name:"ShowBoard",params:{id:o.$route.params.id}})}).catch(function(t){alert("Error adding document: ",t)})}}},n={render:function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("h2",[r("router-link",{attrs:{to:{name:"ShowBoard",params:{id:t.key}}}},[t._v("(Show Board)")])],1),t._v(" "),r("b-jumbotron",[r("b-form",{on:{submit:t.onSubmit}},[r("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Title"}},[r("b-form-input",{attrs:{id:"title"},model:{value:t.board.title,callback:function(o){t.$set(t.board,"title","string"==typeof o?o.trim():o)},expression:"board.title"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Description"}},[r("b-form-textarea",{attrs:{id:"description",placeholder:"Enter something",rows:2,"max-rows":6},model:{value:t.board.description,callback:function(o){t.$set(t.board,"description",o)},expression:"board.description"}},[t._v(t._s(t.board.description))])],1),t._v(" "),r("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Author"}},[r("b-form-input",{attrs:{id:"author"},model:{value:t.board.author,callback:function(o){t.$set(t.board,"author","string"==typeof o?o.trim():o)},expression:"board.author"}})],1),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Update")])],1)],1)],1)],1)},staticRenderFns:[]};var s=r("VU/8")(i,n,!1,function(t){r("dbjX")},null,null);o.default=s.exports},dbjX:function(t,o){}});
//# sourceMappingURL=1.c122bfb5aefb5b74200a.js.map