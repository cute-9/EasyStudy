(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2468956"],{"1c99":function(e,t,s){},"45c9":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",[e._v("试卷：《"+e._s(e.records.tsName)+"》")]),s("el-descriptions",[s("el-descriptions-item",{attrs:{label:"考试总人数"}},[e._v(e._s(e.records.totalNum)+"人")]),s("el-descriptions-item",{attrs:{label:"创建人"}},[e._v(e._s(e.records.username))]),s("el-descriptions-item",{attrs:{label:"总分"}},[e._v(e._s(e.records.tsScore)+"分")]),s("el-descriptions-item",{attrs:{label:"考试时间"}},[e._v(" "+e._s(e.records.startTime)+"至"+e._s(e.records.endTime))])],1),s("div",{staticClass:"el-search-item"},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),s("el-button",{attrs:{slot:"append",type:"warning"},on:{click:e.noJoin},slot:"append"},[e._v("未参加考试人员名单")])],1),s("correct-exam",{attrs:{isable:e.isable}})],1)},l=[],r=s("2af9"),o={components:{CorrectExam:r["b"]},data:function(){return{isable:!0,records:{tsName:"英语11",tsScore:100,startTime:"2022-04-11T17:15:00.000+00:00",endTime:"2022-04-12T17:15:00.000+00:00",totalNum:3,username:"彭彭"},value:"",options:[{value:"1",label:"全部"},{value:"2",label:"已作答"},{value:"3",label:"未作答"}]}},mounted:function(){var e=decodeURIComponent(this.$route.query.examInfo);this.records=JSON.parse(e)},methods:{noJoin:function(){this.isable=!1}}},n=o,i=(s("543c"),s("2877")),c=Object(i["a"])(n,a,l,!1,null,"0291020e",null);t["default"]=c.exports},"543c":function(e,t,s){"use strict";s("1c99")}}]);
//# sourceMappingURL=chunk-d2468956.5c16c29b.js.map