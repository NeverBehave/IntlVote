webpackJsonp([1],{NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7+uW"),n={name:"App",methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"mdui-toolbar mdui-color-theme"},[s("button",{staticClass:"mdui-btn mdui-btn-icon",on:{click:function(i){t.goBack()}}},[s("i",{staticClass:"mdui-icon material-icons"},[t._v("arrow_back")])]),t._v(" "),s("span",{staticClass:"mdui-typo-title"},[t._v("Vote System")]),t._v(" "),s("div",{staticClass:"mdui-toolbar-spacer"})]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")(n,a,!1,function(t){s("c61e")},null,null).exports,r=s("/ocq"),u={props:["vote","ticket"],name:"landing-card",data:function(){return{url:this.$router.currentRoute.path+"vote/"+this.vote.id}},computed:{vote_time:function(){return!(Date.parse(this.vote.started_at)<=Date.now()&&Date.parse(this.vote.ended_at)>=Date.now())}}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-card mdui-m-t-5 mdui-col-xs-12 mdui-col-md-6"},[e("div",{staticClass:"mdui-card-media"},[e("img",{attrs:{src:s("eZHe")}}),t._v(" "),e("div",{staticClass:"mdui-card-media-covered"},[e("div",{staticClass:"mdui-card-primary"},[e("div",{staticClass:"mdui-card-primary-title"},[t._v(t._s(t.vote.title))]),t._v(" "),e("div",{staticClass:"mdui-card-primary-subtitle"},[t._v(t._s(t.vote.intro))])])])]),t._v(" "),e("div",{staticClass:"mdui-chip"},[e("span",{staticClass:"mdui-chip-title"},[t._v("开始时间: "+t._s(t.vote.started_at))])]),t._v(" "),e("div",{staticClass:"mdui-chip"},[e("span",{staticClass:"mdui-chip-title"},[t._v("结束时间: "+t._s(t.vote.ended_at))])]),t._v(" "),e("div",{staticClass:"mdui-chip"},[e("span",{staticClass:"mdui-chip-title"},[t._v("总投票人数: "+t._s(t.vote.times))])]),t._v(" "),e("div",{staticClass:"mdui-card-actions"},["1"===t.vote.is_voted?e("button",{staticClass:"mdui-btn mdui-ripple",attrs:{disabled:""}},[t._v("已经投过票")]):t.vote.vote_time?e("button",{staticClass:"mdui-btn mdui-ripple",attrs:{disabled:""}},[t._v("投票尚未开始")]):e("router-link",{attrs:{to:t.url}},[e("button",{staticClass:"mdui-btn mdui-ripple"},[t._v("开始投票")])]),t._v(" "),"1"===t.vote.show_result?e("router-link",{attrs:{to:t.url+"/result"}},[e("button",{staticClass:"mdui-btn mdui-ripple"},[t._v("查看结果")])]):t._e()],1)])},staticRenderFns:[]},l=s("VU/8")(u,c,!1,null,null,null).exports,d=s("mWCS"),m=s.n(d),v={props:["message"],name:"show-dialog",mounted:function(){this.show_dialog.open()},computed:{show_dialog:function(){return new m.a.Dialog("#dialog",{history:!1,modal:!1,destroyOnClosed:!0})}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},p={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"mdui-dialog",attrs:{id:"dialog"}},[s("div",{staticClass:"mdui-dialog-title"},[t._v("出现了一个问题")]),t._v(" "),s("div",{staticClass:"mdui-dialog-content"},[t._v("\n    "+t._s(t.message)+"\n  ")]),t._v(" "),s("div",{staticClass:"mdui-dialog-actions"},[s("button",{staticClass:"mdui-btn mdui-ripple",on:{click:function(i){t.goBack()}}},[t._v("确定")])])])},staticRenderFns:[]},_=s("VU/8")(v,p,!1,null,null,null).exports,h={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"mdui-card"},[s("div",{staticClass:"mdui-card-primary"},[s("div",{staticClass:"mdui-card-primary-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"mdui-card-primary-subtitle"},[t._v(t._s(t.subtitle))])]),t._v(" "),s("div",{staticClass:"mdui-card-content"},[t._v(t._s(t.intro))])])},staticRenderFns:[]},f={name:"show-process",mounted:function(){this.show_process.open()},beforeDestroy:function(){this.show_process.close()},destroy:function(){m.a.mutation()},computed:{show_process:function(){return new m.a.Dialog("#process",{history:!1,modal:!1,destroyOnClosed:!0})}}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mdui-dialog",attrs:{id:"process"}},[i("div",{staticClass:"mdui-dialog-title"},[this._v("正在载入数据……")]),this._v(" "),i("div",{staticClass:"mdui-dialog-content"},[i("div",{staticClass:"mdui-progress"},[i("div",{staticClass:"mdui-progress-indeterminate"})])])])}]},C={props:["ticket"],name:"basement",components:{ShowDialog:_,LandingCard:l,LandingDescription:s("VU/8")({props:["title","subtitle","intro"],name:"landing-description"},h,!1,null,null,null).exports,ShowProcess:s("VU/8")(f,g,!1,null,null,null).exports},data:function(){return{url:"https://gist.hfi.me/raw/ofugucocin",votes:null,loading:!1,err:null}},created:function(){this.fetchData()},computed:{title:function(){return this.vote_group.title},subtitle:function(){return this.vote_group.subtitle},intro:function(){return this.vote_group.intro},vote_group:function(){return this.votes.vote_group},groups:function(){return this.vote_group.votes},is_active:function(){return null!==this.votes&&"1"===this.votes.active}},methods:{fetchData:function(){var t=this;this.loading=!0,m.a.JQ.ajax({method:"GET",url:this.url,success:function(i){t.loading=!1,t.votes=JSON.parse(i).data},error:function(i,s){t.loading=!1,t.err="获取数据失败，请重试！"}})}}},b={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return this.loading?s("show-process",{attrs:{loading:t.loading}}):null!==this.err?s("show-dialog",{attrs:{message:this.err}}):t.is_active?s("div",{staticClass:"mdui-container"},[s("div",{staticClass:"mdui-row mdui-col-xs-12"},[s("landing-description",{attrs:{title:t.title,subtitle:t.subtitle,description:t.intro}})],1),t._v(" "),s("div",{staticClass:"mdui-row mdui-m-t-0"},[t._l(t.groups,function(t){return[s("landing-card",{attrs:{vote:t}})]})],2)]):s("show-dialog",{attrs:{message:"该投票劵无效, 请联系工作人员"}})},staticRenderFns:[]},w=s("VU/8")(C,b,!1,null,null,null).exports,y=s("mvHQ"),k=s.n(y),x={props:["questions","url"],computed:{post_data:function(){var t=null;return this.submit=!0,m.a.snackbar({message:"正在提交数据……"}),m.a.JQ.ajax({method:"POST",url:this.url,data:k()({selected:this.selectedSelection}),success:function(i){t=i}}),t},body:function(){return this.question.body},support:function(){return this.question.support},selection:function(){return this.question.selections}},data:function(){return{submit:!1,selectedSelection:[]}},methods:{submit_result:function(){var t=JSON.parse(this.post_data());null!==t&&"success"===t.status?m.a.snackbar({message:"提交成功！正在返回首页",buttonText:"现在返回",onClose:function(){this.$route.go(-1)}}):(submit=!1,m.a.snackbar({message:"提交数据时出现问题，请重试！"}))}}},$={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("form",{on:{submit:function(i){i.preventDefault(),t.submit(i)}}},[t._l(t.questions,function(i){return[s("div",{staticClass:"mdui-card"},[s("div",{staticClass:"mdui-card-primary"},[s("div",{staticClass:"mdui-card-primary-title"},[t._v(t._s(t.body))]),t._v(" "),s("div",{staticClass:"mdui-card-primary-subtitle"},[t._v(t._s(t.support))])]),t._v(" "),s("div",{staticClass:"mdui-card-content"},t._l(i.options,function(i){return s("label",{staticClass:"mdui-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedSelection,expression:"selectedSelection"}],attrs:{type:"radio"},domProps:{value:i.id,checked:t._q(t.selectedSelection,i.id)},on:{change:function(s){t.selectedSelection=i.id}}}),t._v(" "),s("i",{staticClass:"mdui-radio-icon"},[t._v(t._s(i.content))])])}))])]}),t._v(" "),s("div",{staticClass:"mdui-card"},[s("div",{staticClass:"mdui-card-content"},[s("button",{staticClass:"mdui-btn mdui-ripple",attrs:{disabled:t.submit},on:{click:function(i){t.submit_result()}}},[s("input",{attrs:{type:"submit",value:"提交"}})])])])],2)},staticRenderFns:[]},S={props:["ticket","vote_id"],name:"vote-basement",components:{VoteCard:s("VU/8")(x,$,!1,null,null,null).exports,ShowDialog:_},data:function(){return{url:"https://vote.hfi.me/vote/id/"+this.vote_id+"/ticket/"+this.ticket}},computed:{fetch_data:function(){var t=null;return m.a.JQ.ajax({method:"GET",url:this.url,success:function(i){t=JSON.parse(i).data}}),t.data},vote:function(){return this.fetch_data.vote},title:function(){return this.vote.title},subtitle:function(){return this.vote.subtitle},description:function(){return this.vote.intro},questions:function(){return this.vote.questions},is_active:function(){return null!==this.vote&&"0"===this.vote.is_voted}},methods:{}},V={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.is_active?s("div",{staticClass:"mdui-container"},[s("div",{staticClass:"mdui-row mdui-col-xs-12"},[s("landing-description",{attrs:{title:t.title,subtitle:t.subtitle,description:t.description}})],1),t._v(" "),s("div",{staticClass:"mdui-row mdui-m-t-0"},[s("vote-card",{attrs:{questions:t.questions,url:t.url}})],1)]):s("show-dialog",{attrs:{message:"操作将不能进行，请返回"}})},staticRenderFns:[]},D=s("VU/8")(S,V,!1,null,null,null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mdui-container"},[i("div",{staticClass:"mdui-typo-body-1"},[this._v("什么都没有的喵～")])])}]},q=s("VU/8")(null,E,!1,null,null,null).exports;e.a.use(r.a);var R=new r.a({mode:"history",routes:[{path:"/",name:"Index",component:q},{path:"/ticket/:ticket/vote/:vote_id",name:"VoteBasement",component:D,props:!0},{path:"/ticket/:ticket",name:"Basement",component:w,props:!0}]});s("fYrV"),s("i+kA");e.a.config.productionTip=!1,new e.a({el:"#app",router:R,components:{App:o},template:"<App/>"})},c61e:function(t,i){},eZHe:function(t,i,s){t.exports=s.p+"static/img/card.137d983.jpg"},fYrV:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.1e6f2409bcdf353611fb.js.map