(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{306:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("790a7675",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";var r=n(0).a.extend({props:{icon:{type:String}}}),d=(n(309),n(8)),o=n(44),l=n.n(o),c=n(295),component=Object(d.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports;l()(component,{VIcon:c.a})},309:function(t,e,n){"use strict";var r=n(306);n.n(r).a},310:function(t,e,n){(e=n(11)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},326:function(t,e,n){var content=n(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("958aea08",content,!0,{sourceMap:!1})},400:function(t,e,n){"use strict";var r=n(326);n.n(r).a},401:function(t,e,n){(e=n(11)(!1)).push([t.i,".Contacts-Card{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px}.Contacts-Card-Table{width:100%;border-collapse:collapse}.Contacts-Card-Table th{font-size:14px !important}.Contacts-Card-Table td{padding:0 16px;font-size:14px}@media screen and (min-width: 769px){.Contacts-Card-Table thead tr{height:48px}.Contacts-Card-Table tbody tr{height:96px}.Contacts-Card-Table th,.Contacts-Card-Table tr:not(:last-child){border-top:none;border-left:none;border-right:none;border-bottom:thin solid rgba(0,0,0,.12)}.Contacts-Card-Table tr:last-child{border:none}}@media screen and (max-width: 768px){.Contacts-Card-Table thead{display:none}.Contacts-Card-Table tbody tr{height:auto}.Contacts-Card-Table tbody tr .content{font-weight:bold;border-bottom:none !important;padding-top:12px;padding-bottom:8px}.Contacts-Card-Table tbody tr .bureau{border-bottom:none !important}.Contacts-Card-Table tbody tr .tel{padding-bottom:12px}.Contacts-Card-Table tbody tr:not(:last-child){border-bottom:thin solid rgba(0,0,0,.12)}.Contacts-Card-Table td{display:block}}",""]),t.exports=e},549:function(t,e,n){"use strict";n.r(e);var r=n(0),d=n(308),o=r.a.extend({components:{PageHeader:d.a},data:function(){return{pc:!0}},computed:{tableAttrs:function(){return this.pc?{}:{role:"presentation"}},headingAttrs:function(){return this.pc?{}:{role:"heading","aria-level":"3"}}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.pc=window.innerWidth>768}},head:function(){return{title:this.$t("お問い合わせ先一覧")}}}),l=(n(400),n(8)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Contacts"},[n("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("お問い合わせ先一覧"))+"\n  ")]),t._v(" "),n("div",{staticClass:"Contacts-Card"},[n("table",t._b({staticClass:"Contacts-Card-Table"},"table",t.tableAttrs,!1),[n("thead",[n("tr",[n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("お問い合わせ内容"))+"\n          ")]),t._v(" "),n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v(t._s(t.$t("局名")))]),t._v(" "),n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v(t._s(t.$t("電話番号")))])])]),t._v(" "),n("tbody",[n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("サイト全般に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("政策企画局")))]),t._v(" "),t._m(0)]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("サイトの技術面に関すること"))),n("br"),t._v(t._s(t.$t("オープンデータ、オープンソースに関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("戦略政策情報推進本部")))]),t._v(" "),t._m(1)]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("新型コロナウイルス感染症対策本部会議に関すること"))),n("br"),t._v(t._s(t.$t("都庁来庁者データに関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("総務局")))]),t._v(" "),n("td",{staticClass:"tel"},[t._v("\n            "+t._s(t.$t("感染症対策本部会議に関すること"))),n("br"),n("a",{attrs:{href:"tel:03-5320-7891"}},[t._v("03-5320-7891")]),n("br"),t._v("\n            "+t._s(t.$t("都庁来庁者データに関すること"))),n("br"),n("a",{attrs:{href:"tel:03-5388-2319"}},[t._v("03-5388-2319")])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("都公式ホームページに関すること"))),n("br"),t._v(t._s(t.$t("都公式SNSアカウントに関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("生活文化局")))]),t._v(" "),n("td",{staticClass:"tel"},[t._v("\n            "+t._s(t.$t("都公式ホームページに関すること"))),n("br"),n("a",{attrs:{href:"tel:03-5388-3061"}},[t._v("03-5388-3061")]),n("br"),t._v("\n            "+t._s(t.$t("都公式SNSアカウントに関すること"))),n("br"),n("a",{attrs:{href:"tel:03-5388-3094"}},[t._v("03-5388-3094")])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("中小企業支援、テレワークに関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("産業労働局")))]),t._v(" "),n("td",{staticClass:"tel"},[t._v("\n            "+t._s(t.$t("資金繰りに関すること"))),n("br"),n("a",{attrs:{href:"tel:03-5320-4877"}},[t._v("03-5320-4877")]),n("br"),t._v("\n            "+t._s(t.$t("経営に関すること"))),n("br"),n("a",{attrs:{href:"tel:03-3251-7881"}},[t._v("03-3251-7881")]),n("br"),t._v("\n            "+t._s(t.$t("労働関係に関すること"))),n("br"),n("a",{attrs:{href:"tel:0570-00-6110"}},[t._v("0570-00-6110")])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("新型コロナウイルス感染症の予防・検査・医療に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("福祉保健局")))]),t._v(" "),n("td",{staticClass:"tel"},[n("a",{attrs:{href:"tel:0570-550-571"}},[t._v("0570-550-571")]),n("br"),t._v("\n            "+t._s(t.$t("（新型コロナコールセンター）"))+"\n          ")])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("都立学校に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("教育庁")))]),t._v(" "),t._m(2)]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("スムーズビズに関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("都市整備局")))]),t._v(" "),t._m(3)]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("都営交通に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("交通局")))]),t._v(" "),n("td",{staticClass:"tel"},[n("a",{attrs:{href:"tel:03-3816-5700"}},[t._v("03-3816-5700")]),n("br"),t._v("\n            "+t._s(t.$t("（都営交通お客様センター）"))+"\n          ")])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"tel"},[e("a",{attrs:{href:"tel:03-5388-2171"}},[this._v("03-5388-2171")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"tel"},[e("a",{attrs:{href:"tel:03-5320-7930"}},[this._v("03-5320-7930")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"tel"},[e("a",{attrs:{href:"tel:03-5320-6705"}},[this._v("03-5320-6705")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"tel"},[e("a",{attrs:{href:"tel:03-5388-3317"}},[this._v("03-5388-3317")])])}],!1,null,null,null);e.default=component.exports}}]);