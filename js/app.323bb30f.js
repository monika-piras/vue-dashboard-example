(function(t){function e(e){for(var a,n,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"01fd":function(t,e,s){},"04ca":function(t,e,s){},1327:function(t,e,s){},2118:function(t,e,s){"use strict";var a=s("c7a0"),i=s.n(a);i.a},"265f":function(t,e,s){"use strict";var a=s("5f06"),i=s.n(a);i.a},2781:function(t,e,s){},"31d7":function(t,e,s){},"3b27":function(t,e,s){"use strict";var a=s("1327"),i=s.n(a);i.a},"431f":function(t,e,s){},4389:function(t,e,s){},4938:function(t,e,s){"use strict";var a=s("c865"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("div",{staticClass:"row no-margin"},[s("div",{staticClass:"col-12 paddingCol-style"},[s("header",{staticClass:"headerStyle"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("VUE DASHBOARD")]),s("div",{staticClass:"d-block d-sm-none"},[s("div",{staticClass:"buttonMenuStyle"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}],staticClass:"app-button-style"},[s("b-icon-justify")],1)],1)])],1)])]),s("div",{staticClass:"row row-full-height no-margin"},[s("div",{staticClass:"col-sm-2 d-none d-sm-block no-padding"},[s("navigation-component")],1),s("div",{staticClass:"col-xs-12 col-sm-10 no-padding"},[s("router-view")],1)]),s("b-sidebar",{attrs:{id:"sidebar-backdrop",backdrop:"",shadow:""}},[s("b-form-group",[s("navigation-component")],1),s("button",{staticClass:"close closeStyle text-dark",attrs:{type:"button","aria-label":"Close"}},[s("svg",{staticClass:"bi-x b-icon bi",attrs:{viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"x",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[s("g",[s("path",{attrs:{"fill-rule":"evenodd",d:"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"}}),s("path",{attrs:{"fill-rule":"evenodd",d:"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"}})])])])],1)],1)},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-light bg-light"},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[s("b-icon",{staticClass:"icon-style",attrs:{icon:"house",scale:"1.5"}}),s("span",{staticClass:"label-responsive"},[t._v("HOME")])],1)],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/contacts"}},[s("b-icon",{staticClass:"icon-style",attrs:{icon:"people",scale:"1.5"}}),t._v("Contacts")],1)],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/products"}},[s("b-icon",{staticClass:"icon-style",attrs:{icon:"cart",scale:"1.5"}}),t._v("Products")],1)],1)])])},o=[],c={name:"NavigationComponent",props:{},data:function(){return{}}},l=c,u=(s("265f"),s("2877")),d=Object(u["a"])(l,n,o,!1,null,"0adf4334",null),m=d.exports,p=s("5f5b"),f=s("b1e0"),h=(s("2dd8"),s("43f9")),g=s.n(h),v=(s("51de"),s("e094"),s("1321")),b=s.n(v);a["default"].use(p["a"]),a["default"].use(f["a"]),a["default"].use(g.a),a["default"].use(b.a),a["default"].component("apexchart",b.a);var C={components:{NavigationComponent:m},created:function(){this.$store.dispatch("usersStore/loadUsers"),this.$store.dispatch("productsStore/loadProducts")}},y=C,_=(s("5c0b"),Object(u["a"])(y,i,r,!1,null,null,null)),P=_.exports,E=s("9483");Object(E["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var w=s("8c4f"),S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row no-margin"},[s("div",{staticClass:"col-sm"},[s("h4",{staticClass:"titleChartStyle"},[t._v("User's Gender")]),s("apexchart",{attrs:{width:"500",type:"bar",options:t.chartDataBar.chartOptions,series:t.chartDataBar.series}})],1),s("div",{staticClass:"col-sm"},[s("h4",{staticClass:"titleChartStyle"},[t._v("User's Age")]),s("apexchart",{attrs:{width:"380",type:"donut",options:t.chartDataDonut.chartOptions,series:t.chartDataDonut.series}})],1)])])},k=[],$=(s("4de4"),{name:"Home",components:{},data:function(){return{isActive:!0}},computed:{men:function(){var t=this.$store.getters["usersStore/getUsers"],e=t.filter((function(t){return"male"===t.gender})),s=e.length;return s},women:function(){var t=this.$store.getters["usersStore/getUsers"],e=t.filter((function(t){return"female"===t.gender})),s=e.length;return s},ageOver30:function(){var t=this.$store.getters["usersStore/getUsers"],e=t.filter((function(t){return t.age>30})),s=e.length;return s},ageUnder30:function(){var t=this.$store.getters["usersStore/getUsers"],e=t.filter((function(t){return t.age<=30})),s=e.length;return s},chartDataBar:function(){return{chartOptions:{chart:{width:500,type:"bar"},xaxis:{categories:["MEN","WOMEN"]},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},series:[{name:"number",data:[this.men,this.women]}]}},chartDataDonut:function(){return{series:[this.ageOver30,this.ageUnder30],chartOptions:{chart:{width:380,type:"donut"},labels:["Age >30","Age <30"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}}}}),x=$,D=(s("c8db"),Object(u["a"])(x,S,k,!1,null,"6ba07448",null)),I=D.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-style"},[s("div",{staticClass:"h1-style"},[s("h1",{staticClass:"h1-style-mobile"},[t._v("Contacts")]),s("button",{staticClass:"btn btn-primary buttonStyle",attrs:{type:"button"},on:{click:function(e){return t.addUser()}}},[t._v("Add User")])]),s("table-search-component")],1)},O=[],F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("md-table",{attrs:{"md-sort":"id","md-sort-order":"asc","md-card":"","md-fixed-header":""},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var a=e.item;return s("md-table-row",{},[s("md-table-cell",{attrs:{"md-label":"Name","md-sort-by":"name"}},[t._v(t._s(a.name))]),s("md-table-cell",{attrs:{"md-label":"Surname","md-sort-by":"surname"}},[t._v(t._s(a.surname))]),s("md-table-cell",{attrs:{"md-label":"Gender","md-sort-by":"gender"}},[t._v(t._s(a.gender))]),s("md-table-cell",{attrs:{"md-label":"Person Age","md-sort-by":"age"}},[t._v(t._s(a.age))]),s("md-table-cell",{attrs:{"md-label":"","md-sort-by":""}},[s("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.edit(a)}}},[t._v("Edit")])])],1)}}]),model:{value:t.searched,callback:function(e){t.searched=e},expression:"searched"}},[s("md-table-toolbar",[s("div",{staticClass:"md-toolbar-section-start"}),s("md-field",{staticClass:"md-toolbar-section-end",attrs:{"md-clearable":""}},[s("md-input",{attrs:{placeholder:"Search by name..."},on:{input:t.searchOnTable},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),s("md-table-empty-state",{attrs:{"md-label":"No users found","md-description":"No user found for this '"+t.search+"' query. Try a different search term or create a new user."}})],1)],1)},T=[],j=(s("ac1f"),s("841c"),{name:"TableSearchComponent",data:function(){return{search:null,searched:[]}},methods:{searchOnTable:function(){this.searched=this.$store.getters["usersStore/search"](this.search)},edit:function(t){this.$router.push({name:"userDetailPage",params:{paramUser:t}})}},created:function(){this.searched=this.$store.getters["usersStore/getUsers"]}}),A=j,M=(s("e1f2"),Object(u["a"])(A,F,T,!1,null,"bd3868a4",null)),B=M.exports,N={name:"ContactsPage",components:{TableSearchComponent:B},methods:{addUser:function(){this.$router.push("addUserPage")}}},L=N,G=(s("7e02"),Object(u["a"])(L,U,O,!1,null,"37487d96",null)),V=G.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-style"},[s("div",{staticClass:"h1-style"},[s("h1",{staticClass:"h1-style-mobile"},[t._v("Products")]),s("div",[s("button",{staticClass:" btn btn-primary add-button-style",on:{click:function(e){return t.addProduct()}}},[t._v("Add Product")])])]),s("div",{staticClass:"row"},t._l(t.items,(function(e){return s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("img",{staticClass:"card-img-top",staticStyle:{width:"18rem"},attrs:{src:e.image}}),s("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"card-content"},[s("h6",[t._v("Condition: "+t._s(e.condition?"new":"used"))]),s("div",[s("button",{staticClass:"btn btn-outline-primary button-style",on:{click:function(s){return t.goToItemDetail(e.id)}}},[t._v("Open details")])])])])])])})),0)])},R=[],q={name:"ProductsPage",components:{},data:function(){return{items:[]}},methods:{goToItemDetail:function(t){this.$router.push("/itemDetailPage/"+t)},addProduct:function(){this.$router.push("/addProductPage/")}},created:function(){this.items=this.$store.getters["productsStore/getProducts"]}},z=q,W=(s("b038"),Object(u["a"])(z,H,R,!1,null,"3f784331",null)),Y=W.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"margin-page-style"},[t.productDetail?s("div",[s("h4",[t._v(" ITEM DETAIL PAGE "),s("button",{staticClass:"btn btn-secondary button-style",on:{click:function(e){return t.goBack()}}},[s("b-icon",{staticClass:"icon-style",attrs:{icon:"chevron-left",scale:".8"}}),t._v("Go Back")],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("img",{staticClass:"card-img-top",staticStyle:{width:"18rem"},attrs:{src:t.productDetail.image}})])])]),s("div",{staticClass:"col-sm-6"},[s("h3",{staticClass:"card-title"},[t._v(t._s(t.productDetail.title))]),s("div",{staticClass:"card-content"},[s("p",{staticClass:"card-text"},[t._v(" "+t._s(t.productDetail.description)+" ")]),s("h6",[t._v("Category: "+t._s(t.productDetail.category))]),s("h6",[t._v("Condition: "),s("span",{staticStyle:{color:"green"}},[t._v(t._s(t.productDetail.condition?"new":"used"))])]),s("h6",{staticStyle:{color:"red"}},[t._v("Price: "+t._s(t.productDetail.price))]),s("div",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.editItem(t.productDetail.id)}}},[s("b-icon",{staticClass:"icon-style",attrs:{icon:"pencil",scale:"1.5"}}),t._v(" Edit item")],1)])])])])]):t._e()])])},Z=[],K={name:"ItemDetailPage",components:{},props:{},data:function(){return{}},methods:{goBack:function(){this.$router.push("/products")},editItem:function(t){this.$router.push("/editItemPage/"+t)}},computed:{paramID:function(){return this.$route.params.id},productDetail:function(){return this.$store.getters["productsStore/getProductDetails"](this.paramID)}}},Q=K,X=(s("2118"),Object(u["a"])(Q,J,Z,!1,null,"2b26487a",null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"margin-page-style"},[s("h4",[t._v("EDIT ITEM PAGE "),s("button",{staticClass:"btn btn-secondary button-style",on:{click:function(e){return t.goBack(t.productEditDetail.id)}}},[s("b-icon",{staticClass:"icon-style",attrs:{icon:"chevron-left",scale:".8"}}),t._v("Go Back")],1)]),this.productEditDetail?s("form-product-component",{attrs:{editItem:this.productEditDetail}}):t._e()],1)},st=[],at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isLoading?s("div",{staticClass:"text-center"},[s("b-spinner",{attrs:{variant:"primary",label:"Text Centered"}})],1):s("form",{on:{submit:t.checkForm}},[s("div",{staticClass:"form-group align-left"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control mb-2",attrs:{type:"text",id:"inlineFormInput1",placeholder:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t.isErrorTitle?s("div",{staticClass:"text-red-style"},[t._v("Title required.")]):t._e()]),s("div",{staticClass:"form-group align-left"},[t._m(1),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control mb-2",attrs:{name:"message",id:"inlineFormInput2",placeholder:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t.isErrorDescription?s("div",{staticClass:"text-red-style"},[t._v("Description required.")]):t._e()]),s("div",{staticClass:"form-group align-left"},[s("label",{staticClass:"left font-weight-style",attrs:{for:"inlineFormInput2"}},[t._v("Category")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"form-control mb-2",attrs:{name:"message",id:"inlineFormInput2",placeholder:"category"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})]),s("div",{staticClass:"form-group align-left"},[s("label",{staticClass:"left font-weight-style",attrs:{for:"inlineFormInput2"}},[t._v("Price")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"form-control mb-2",attrs:{name:"message",id:"inlineFormInput2",placeholder:"price"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),s("div",{staticClass:"form-group align-left"},[t._m(2),s("div",{staticClass:"input-image-display"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.imageString,expression:"imageString"}],staticClass:"form-control mb-2 input-width",attrs:{type:"text",id:"inlineFormInput5",placeholder:"image url"},domProps:{value:t.imageString},on:{input:function(e){e.target.composing||(t.imageString=e.target.value)}}})]),s("span",{staticClass:"span-margin"},[t._v("or")]),s("input",{staticClass:"input-button",attrs:{type:"file",id:"avatar",name:"avatar",accept:"image/png, image/jpeg"},on:{change:t.onFileChanged}}),t.isErrorImage?s("div",{staticClass:"text-red-style"},[t._v("Image required.")]):t._e()]),s("h6",{staticClass:"text-left font-weight-style"},[t._v("Condition")]),s("div",{staticClass:"form-group align-left custom-control custom-switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.condition,expression:"condition"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitches"},domProps:{checked:Array.isArray(t.condition)?t._i(t.condition,null)>-1:t.condition},on:{change:function(e){var s=t.condition,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&(t.condition=s.concat([r])):n>-1&&(t.condition=s.slice(0,n).concat(s.slice(n+1)))}else t.condition=i}}}),t.condition?s("label",{staticClass:"custom-control-label",attrs:{for:"customSwitches"}},[t._v("NEW")]):s("label",{staticClass:"custom-control-label",attrs:{for:"customSwitches"}},[t._v("USED")])]),s("div",{staticClass:"col-auto"},[this.editItem?s("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},[t._v("Edit Product")]):s("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},[t._v("Add Product")])])])])},it=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"left font-weight-style",attrs:{for:"inlineFormInput1"}},[t._v("Title "),s("span",{staticClass:"red"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"left font-weight-style",attrs:{for:"inlineFormInput2"}},[t._v("Description "),s("span",{staticClass:"red"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"font-weight-style",attrs:{for:"inlineFormInput5"}},[t._v("Image "),s("span",{staticClass:"red"},[t._v("*")])])}],rt=(s("a4d3"),s("e01a"),{name:"FormProductComponent",components:{},props:{editItem:Object},data:function(){return{isLoading:!1,title:this.editItem?this.editItem.title:null,isErrorTitle:!1,description:this.editItem?this.editItem.description:null,isErrorDescription:!1,category:this.editItem?this.editItem.category:null,price:this.editItem?this.editItem.price:null,condition:!this.editItem||this.editItem.condition,imageString:this.editItem?this.editItem.image:null,imageBase64:null,isErrorImage:!1,id:this.editItem?this.editItem.id:10*Math.random()}},methods:{onFileChanged:function(t){var e=this,s=t.target.files[0],a=new FileReader;a.readAsDataURL(s),a.onload=function(){e.imageBase64=a.result,e.imageString=null},a.onerror=function(t){console.error("Error reading image: ",t)}},checkForm:function(t){t.preventDefault(),this.isFormInvalid()||(this.isLoading=!0,this.save(),this.resetForm())},isFormInvalid:function(){return this.compileErrors(),this.formHasErrors()},resetForm:function(){this.title="",this.description="",this.imageString=""},resetErrors:function(){this.isErrorTitle=!1,this.isErrorDescription=!1,this.isErrorImage=!1},compileErrors:function(){this.resetErrors(),this.title&&this.hasMinLength(this.title,5)||(this.isErrorTitle=!0),this.description&&this.hasMinLength(this.description,5)||(this.isErrorDescription=!0),this.imageString||this.imageBase64||(this.isErrorImage=!0)},formHasErrors:function(){var t=!1;return(this.isErrorTitle||this.isErrorDescription||this.isErrorImage)&&(t=!0),t},hasMinLength:function(t,e){return t.length>=e},save:function(){var t=this;if(this.editItem){var e={title:this.title,description:this.description,category:this.category,price:this.price,condition:this.condition,image:this.imageString?this.imageString:this.imageBase64,id:this.editItem.id};this.$store.dispatch("productsStore/editProduct",e).then((function(e){t.$root.$bvToast.toast("Product successfully updated",{title:"Success",variant:"success",solid:!0}),t.$router.push("/products/")})).catch((function(e){t.isLoading=!1,t.$root.$bvToast.toast("Error updating Product",{title:"Error",variant:"warning",solid:!0}),console.error("Error updating Product")}))}else{var s={title:this.title,description:this.description,category:this.category,price:this.price,condition:this.condition,image:this.imageString?this.imageString:this.imageBase64,id:this.id};this.$store.dispatch("productsStore/addProduct",s).then((function(e){t.$root.$bvToast.toast("Product successfully updated",{title:"Success",variant:"success",solid:!0}),t.$router.push("/products/")})).catch((function(e){t.isLoading=!1,t.$root.$bvToast.toast("Error updating Product",{title:"Error",variant:"warning",solid:!0}),console.error("Error updating Product")}))}}}}),nt=rt,ot=(s("e485"),Object(u["a"])(nt,at,it,!1,null,"1ce24fbe",null)),ct=ot.exports,lt={name:"EditItemPage",components:{FormProductComponent:ct},methods:{goBack:function(t){this.$router.push("/itemDetailPage/"+t)}},computed:{paramID:function(){return this.$route.params.id},productEditDetail:function(){return this.$store.getters["productsStore/getProductDetails"](this.paramID)}}},ut=lt,dt=(s("e963"),Object(u["a"])(ut,et,st,!1,null,"78bc6a4f",null)),mt=dt.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"margin-page-style"},[s("h4",[t._v("ADD PRODUCT PAGE "),s("button",{staticClass:"btn btn-secondary button-style button-style-mobile",on:{click:function(e){return t.goBack()}}},[s("b-icon",{staticClass:"icon-style",attrs:{icon:"chevron-left",scale:".8"}}),t._v("Go Back")],1)]),s("form-product-component")],1)])},ft=[],ht={name:"AddProductPage",components:{FormProductComponent:ct},methods:{goBack:function(){this.$router.push("/products")}}},gt=ht,vt=(s("3b27"),Object(u["a"])(gt,pt,ft,!1,null,"66204076",null)),bt=vt.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"margin-page-style"},[s("h4",[t._v(" USER DETAIL PAGE "),s("button",{staticClass:"btn btn-secondary button-style",on:{click:function(e){return t.goBack()}}},[s("b-icon",{staticClass:"icon-style",attrs:{icon:"chevron-left",scale:".8"}}),t._v("Go Back")],1)]),this.user?s("form-component",{attrs:{user:this.user}}):t._e()],1)])},yt=[],_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isLoading?s("div",{staticClass:"text-center"},[s("b-spinner",{attrs:{variant:"primary",label:"Text Centered"}})],1):s("b-form",{on:{submit:t.onSubmit}},[s("b-form-group",{staticClass:"font-weight-style",attrs:{"label-cols-sm":"3",id:"input-group-2",label:"Name:","label-for":"input-2"}},[s("b-form-input",{attrs:{id:"input-2",state:t.isFormNameValid,placeholder:"Enter name"},model:{value:t.form.fname,callback:function(e){t.$set(t.form,"fname",e)},expression:"form.fname"}}),s("b-form-invalid-feedback",{attrs:{state:t.isFormNameValid}},[t._v(" Your Name must be 2-20 characters long. ")])],1),s("b-form-group",{staticClass:"font-weight-style",attrs:{"label-cols-sm":"3",id:"input-group-2",label:"Surname:","label-for":"input-2b"}},[s("b-form-input",{attrs:{id:"input-2b",state:t.isFormSurnameValid,placeholder:"Enter Surname"},model:{value:t.form.lname,callback:function(e){t.$set(t.form,"lname",e)},expression:"form.lname"}}),s("b-form-invalid-feedback",{attrs:{state:t.isFormSurnameValid}},[t._v(" Your Surname ID must be 2-20 characters long. ")])],1),s("b-form-group",{staticClass:"font-weight-style",attrs:{"label-cols-sm":"3",id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[s("b-form-input",{attrs:{id:"input-1",state:t.isFormEmailValid,type:"email",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),s("b-form-invalid-feedback",{attrs:{state:t.isFormEmailValid}},[t._v(" Your Email is incorrect. ")])],1),s("b-form-group",{staticClass:"font-weight-style width-style",attrs:{"label-cols-sm":"3",id:"input-group-2",label:"Age:","label-for":"input-2b"}},[s("b-form-input",{attrs:{id:"input-2b",placeholder:"Enter age"},model:{value:t.form.age,callback:function(e){t.$set(t.form,"age",e)},expression:"form.age"}})],1),s("b-form-group",{staticClass:"mt-2 font-weight-style",attrs:{label:"Gender:"}},[s("b-form-radio-group",{staticClass:"pt-2",model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}},[s("span",{staticClass:"font-weight-radio"},[s("b-form-radio",{attrs:{name:"some-radios",value:"male"}},[t._v("Male")]),s("b-form-radio",{attrs:{name:"some-radios",value:"female"}},[t._v("Female")])],1)])],1),s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)},Pt=[],Et=(s("b0c0"),{name:"FormComponent",props:{user:Object},data:function(){return{isLoading:!1,isSubmitted:!1,form:{fname:"",lname:"",age:"",email:"",gender:""}}},created:function(){console.log("created"),this.user&&this.fillForm()},methods:{fillForm:function(){this.form.fname=this.user.name,this.form.lname=this.user.surname,this.form.age=this.user.age,this.form.email=this.user.email,this.form.gender=this.user.gender},onSubmit:function(t){var e=this;if(t.preventDefault(),this.isSubmitted=!0,this.validationName&&this.validationSurname&&this.validationEmail)if(this.isLoading=!0,this.user){var s={name:this.form.fname,surname:this.form.lname,age:this.form.age,email:this.form.email,gender:this.form.gender,id:this.user.id};this.$store.dispatch("usersStore/updateUser",s).then((function(t){e.$root.$bvToast.toast("Contact successfully updated",{title:"Success",variant:"success",solid:!0}),e.$router.push("contacts")})).catch((function(t){e.isLoading=!1,e.$root.$bvToast.toast("Error updating contact",{title:"Error",variant:"warning",solid:!0}),console.error("Error updating contact")}))}else{s={name:this.form.fname,surname:this.form.lname,age:this.form.age,email:this.form.email,gender:this.form.gender,id:100*Math.random()};this.$store.dispatch("usersStore/addUser",s).then((function(t){e.$root.$bvToast.toast("Contact successfully added",{title:"Success",variant:"success",solid:!0}),e.$router.push("contacts")})).catch((function(t){e.isLoading=!1,e.$root.$bvToast.toast("Error adding contact",{title:"Error",variant:"warning",solid:!0}),console.error("Error adding contact")}))}}},computed:{validationName:function(){return this.form.fname.length>1&&this.form.fname.length<=20},validationSurname:function(){return this.form.lname.length>1&&this.form.lname.length<=20},validationEmail:function(){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(this.form.email)},isFormNameValid:function(){return this.isSubmitted||this.form.fname?this.validationName:null},isFormSurnameValid:function(){return this.isSubmitted||this.form.lname?this.validationSurname:null},isFormEmailValid:function(){return this.isSubmitted||this.form.email?this.validationEmail:null}}}),wt=Et,St=(s("e5d4"),Object(u["a"])(wt,_t,Pt,!1,null,"435489fc",null)),kt=St.exports,$t={name:"UserDetailPage",components:{FormComponent:kt},props:{},data:function(){return{user:Object}},methods:{goBack:function(){this.$router.push("/contacts")}},created:function(){if(this.user=this.$route.params.paramUser,null==this.user)return this.$router.push("contacts")}},xt=$t,Dt=(s("b108"),Object(u["a"])(xt,Ct,yt,!1,null,"184f63e4",null)),It=Dt.exports,Ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"margin-page-style"},[s("h4",[t._v("ADD USER PAGE "),s("button",{staticClass:"btn btn-secondary button-style button-style-mobile",on:{click:function(e){return t.goBack()}}},[s("b-icon",{staticClass:"icon-style",attrs:{icon:"chevron-left",scale:".8"}}),t._v("Go Back")],1)]),s("form-component")],1)])},Ot=[],Ft={name:"AddUserPage",components:{FormComponent:kt},methods:{goBack:function(){this.$router.push("/contacts")}}},Tt=Ft,jt=(s("4938"),Object(u["a"])(Tt,Ut,Ot,!1,null,"3b1b77d2",null)),At=jt.exports;a["default"].use(w["a"]);var Mt=[{path:"/",name:"Home",component:I},{path:"/contacts",name:"ContactsPage",component:V},{path:"/userDetailPage",name:"userDetailPage",component:It,props:!0},{path:"/products",name:"ProductsPage",component:Y},{path:"/itemDetailPage/:id",name:"itemDetailPage",component:tt},{path:"/editItemPage/:id",name:"editItemPage",component:mt},{path:"/addProductPage",name:"AddProductPage",component:bt},{path:"/addUserPage",name:"addUserPage",component:At}],Bt=new w["a"]({routes:Mt}),Nt=Bt,Lt=s("2f62"),Gt=(s("c740"),s("caad"),s("a434"),s("d3b7"),s("2532"),s("2909")),Vt=s("bc3a"),Ht=s.n(Vt),Rt={namespaced:!0,state:{allUsers:[]},getters:{getUsers:function(t){return t.allUsers},search:function(t){return function(e){return e=e.toLowerCase(),t.allUsers.filter((function(t){return t.name.toLowerCase().includes(e)}))}}},mutations:{loadUsersMutation:function(t){Ht.a.get("https://dashboard-backend-hapijs.herokuapp.com/users").then((function(e){var s,a=e.data.list;t.allUsers.splice(0,t.allUsers.length),(s=t.allUsers).push.apply(s,Object(Gt["a"])(a))}))},updateUserMutation:function(t,e){console.log("new user mutation ",e);var s=t.allUsers.findIndex((function(t){return t.id==e.id}));t.allUsers.splice(s,1,e)},addUserMutation:function(t,e){console.log("add new user mutation ",e),t.allUsers.push(e)}},actions:{loadUsers:function(t){t.commit("loadUsersMutation")},updateUser:function(t,e){return console.log("call action updateUser"),new Promise((function(s,a){setTimeout((function(){t.commit("updateUserMutation",e),s()}),2e3)}))},addUser:function(t,e){return new Promise((function(s,a){setTimeout((function(){t.commit("addUserMutation",e),s()}),2e3)}))}}},qt=(s("4160"),s("159b"),{namespaced:!0,state:{allProducts:[]},getters:{getProducts:function(t){return t.allProducts},getProductDetails:function(t){return function(e){var s=t.allProducts.findIndex((function(t){return t.id==e}));return t.allProducts[s]}}},mutations:{loadProductsMutation:function(t){Ht.a.get("https://dashboard-backend-hapijs.herokuapp.com/products").then((function(e){var s,a=e.data.list;a.forEach((function(t){t.image="https://dashboard-backend-hapijs.herokuapp.com"+t.image})),t.allProducts.splice(0,t.allProducts.length),(s=t.allProducts).push.apply(s,Object(Gt["a"])(a))}))},addProductMutation:function(t,e){console.log("add new product mutation ",e),t.allProducts.push(e)},editProductMutation:function(t,e){var s=t.allProducts.findIndex((function(t){return t.id==e.id}));t.allProducts.splice(s,1,e)}},actions:{loadProducts:function(t){t.commit("loadProductsMutation")},addProduct:function(t,e){return new Promise((function(s,a){setTimeout((function(){t.commit("addProductMutation",e),s()}),2e3)}))},editProduct:function(t,e){return new Promise((function(s,a){setTimeout((function(){t.commit("editProductMutation",e),s()}),2e3)}))}}});a["default"].use(Lt["a"]);var zt=new Lt["a"].Store({modules:{usersStore:Rt,productsStore:qt}});a["default"].config.productionTip=!1,new a["default"]({router:Nt,store:zt,render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"5f06":function(t,e,s){},"7e02":function(t,e,s){"use strict";var a=s("431f"),i=s.n(a);i.a},"9c0c":function(t,e,s){},ac15:function(t,e,s){},b038:function(t,e,s){"use strict";var a=s("01fd"),i=s.n(a);i.a},b108:function(t,e,s){"use strict";var a=s("2781"),i=s.n(a);i.a},c7a0:function(t,e,s){},c865:function(t,e,s){},c8db:function(t,e,s){"use strict";var a=s("ac15"),i=s.n(a);i.a},e041:function(t,e,s){},e1f2:function(t,e,s){"use strict";var a=s("04ca"),i=s.n(a);i.a},e485:function(t,e,s){"use strict";var a=s("e041"),i=s.n(a);i.a},e5d4:function(t,e,s){"use strict";var a=s("4389"),i=s.n(a);i.a},e963:function(t,e,s){"use strict";var a=s("31d7"),i=s.n(a);i.a}});
//# sourceMappingURL=app.323bb30f.js.map