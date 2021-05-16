!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=s(t);if(e){var r=s(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9],{"9DjR":function(e,r,c){"use strict";c.r(r),c.d(r,"SectionModule",function(){return E});var s,a=c("tyNb"),u=c("Q8ph"),b=c("xmsf"),f=c("fXoL"),l=c("0/gI"),d=c("lJxs"),h=c("v5Tv"),p=((s=function(e){i(c,e);var r=o(c);function c(){return t(this,c),r.apply(this,arguments)}return n(c,[{key:"getEntityPath",value:function(){return"sections"}},{key:"paginateQuestions",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,i=this.getUrl()+"/".concat(t,"/questions?page=").concat(e,"&page_size=").concat(n);return this.get(i).pipe(Object(d.a)(function(t){return{meta:t.meta,data:t.data.map(function(t){return new h.a(t)})}}))}}]),c}(l.a)).\u0275fac=function(t){return g(t||s)},s.\u0275prov=f.Kb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),g=f.Wb(p),v=c("e4Ts"),m=c("YK+t"),T=c("ofXK"),w=c("hp31"),y=c("Cc/g"),U=c("M9IT");function S(t,e){if(1&t&&f.Pb(0,"app-question-item",5),2&t){var n=f.fc(),i=n.$implicit,r=n.index,o=f.fc();f.mc("question",i)("questionNumber",o.currentPage*o.pageSize+r+1)("canShowAnswer",!0)}}function I(t,e){if(1&t&&f.Pb(0,"app-question-group",6),2&t){var n=f.fc(),i=n.$implicit,r=n.index,o=f.fc();f.mc("question",i)("questionNumber",o.currentPage*o.pageSize+r+1)("showAnswer",!0)}}function k(t,e){if(1&t&&(f.Ub(0,"div"),f.Ec(1,S,1,3,"app-question-item",3),f.Ec(2,I,1,3,"app-question-group",4),f.Tb()),2&t){var n=e.$implicit;f.Db(1),f.mc("ngIf",n.isSingle),f.Db(1),f.mc("ngIf",n.isParent)}}function q(t,e){if(1&t){var n=f.Vb();f.Ub(0,"div"),f.Ub(1,"mat-paginator",7,8),f.bc("page",function(t){return f.xc(n),f.fc().handlePage(t)}),f.Tb(),f.Tb()}if(2&t){var i=f.fc();f.Db(1),f.mc("pageSize",i.pageSize)("showFirstLastButtons",!0)("length",i.totalSize)("pageIndex",i.currentPage)("hidePageSize",!0)}}var x,A,O,G=[{path:":id",component:(x=function(){function e(n,i,r){t(this,e),this.route=n,this.sectionService=i,this.sessionStorageService=r,this.pageSize=10,this.currentPage=0,this.totalSize=0,this.sectionId=u.a.getId(this.route.snapshot.paramMap.get("id"))}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.sectionService.paginateQuestions(this.sectionId,this.currentPage+1,this.pageSize).subscribe(function(e){t.questions=e.data,t.totalSize=e.meta.total}),this.isActiveOrder=u.a.isActiveOrder(this.sessionStorageService.retrieve(b.a.Order),u.a.getId(this.route.snapshot.paramMap.get("ky-thi")))}},{key:"ngOnDestroy",value:function(){}},{key:"handlePage",value:function(t){var e=this;u.a.scrollTop(),this.sectionService.paginateQuestions(this.sectionId,t.pageIndex+1,this.pageSize).subscribe(function(n){e.questions=n.data,e.currentPage=t.pageIndex,e.totalSize=n.meta.total})}}]),e}(),x.\u0275fac=function(t){return new(t||x)(f.Ob(a.a),f.Ob(p),f.Ob(v.b))},x.\u0275cmp=f.Ib({type:x,selectors:[["ng-component"]],decls:4,vars:2,consts:[[1,"grid","grid-cols-1","gap-1",2,"margin","auto","padding-bottom","10px"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"question","questionNumber","canShowAnswer",4,"ngIf"],[3,"question","questionNumber","showAnswer",4,"ngIf"],[3,"question","questionNumber","canShowAnswer"],[3,"question","questionNumber","showAnswer"],[3,"pageSize","showFirstLastButtons","length","pageIndex","hidePageSize","page"],["paginator",""]],template:function(t,e){1&t&&(f.Pb(0,"app-order-contest"),f.Ub(1,"div",0),f.Ec(2,k,3,2,"div",1),f.Tb(),f.Ec(3,q,3,5,"div",2)),2&t&&(f.Db(2),f.mc("ngForOf",e.questions),f.Db(1),f.mc("ngIf",e.isActiveOrder))},directives:[m.a,T.j,T.k,w.a,y.a,U.a],encapsulation:2}),x)}],P=((A=function e(){t(this,e)}).\u0275fac=function(t){return new(t||A)},A.\u0275mod=f.Mb({type:A}),A.\u0275inj=f.Lb({imports:[[a.g.forChild(G)],a.g]}),A),_=c("PCNd"),N=c("sHgf"),E=((O=function e(){t(this,e)}).\u0275fac=function(t){return new(t||O)},O.\u0275mod=f.Mb({type:O}),O.\u0275inj=f.Lb({imports:[[_.a,P,N.a]]}),O)},"Cc/g":function(e,i,r){"use strict";r.d(i,"a",function(){return b});var o=r("fXoL"),c=r("Wp6s"),s=r("ofXK"),a=r("hp31");function u(t,e){if(1&t&&o.Pb(0,"app-question-item",3),2&t){var n=e.$implicit,i=e.index,r=o.fc();o.mc("question",n)("questionNumber",i+1)("questionPrefix",r.questionNumber+".")("canShowAnswer",r.showAnswer)("examId",r.examId)("result",r.result)("forceShowAnswer",r.forceShowAnswer)}}var b=function(){var e=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Ib({type:e,selectors:[["app-question-group"]],inputs:{question:"question",questionNumber:"questionNumber",showAnswer:"showAnswer",forceShowAnswer:"forceShowAnswer",examId:"examId",result:"result"},decls:5,vars:3,consts:[[1,"mt-3","hover-shadow-wrapper"],[2,"background","#ededed","margin","10px 0","padding","10px","font-size","16px","font-weight","100"],[3,"question","questionNumber","questionPrefix","canShowAnswer","examId","result","forceShowAnswer",4,"ngFor","ngForOf"],[3,"question","questionNumber","questionPrefix","canShowAnswer","examId","result","forceShowAnswer"]],template:function(t,e){1&t&&(o.Ub(0,"mat-card",0),o.Ub(1,"mat-card-title",1),o.Gc(2),o.Tb(),o.Ub(3,"mat-card-content"),o.Ec(4,u,1,7,"app-question-item",2),o.Tb(),o.Tb()),2&t&&(o.Db(2),o.Jc(" ",e.questionNumber,": ",e.question.title," "),o.Db(2),o.mc("ngForOf",e.question.children))},directives:[c.a,c.d,c.b,s.j,a.a],encapsulation:2}),e}()},Ch5c:function(e,n,r){"use strict";r.d(n,"a",function(){return s});var c=r("+Ag2"),s=function(){var e=function(e){i(r,e);var n=o(r);function r(){return t(this,r),n.apply(this,arguments)}return r}(c.a);return e.STATUS_ACTIVE=1,e.STATUS_INACTIVE=2,e}()},Q8ph:function(e,i,r){"use strict";r.d(i,"a",function(){return c});var o=r("Ch5c"),c=function(){function e(){t(this,e)}return n(e,null,[{key:"convertToContestUrl",value:function(t,n){return"ky-thi/"+e.convertToUrl(t,n)}},{key:"convertToUrl",value:function(t,e){var n=t.toLowerCase();return(n="@"+(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/\xe1|\xe0|\u1ea3|\u1ea1|\xe3|\u0103|\u1eaf|\u1eb1|\u1eb3|\u1eb5|\u1eb7|\xe2|\u1ea5|\u1ea7|\u1ea9|\u1eab|\u1ead/gi,"a")).replace(/\xe9|\xe8|\u1ebb|\u1ebd|\u1eb9|\xea|\u1ebf|\u1ec1|\u1ec3|\u1ec5|\u1ec7/gi,"e")).replace(/i|\xed|\xec|\u1ec9|\u0129|\u1ecb/gi,"i")).replace(/\xf3|\xf2|\u1ecf|\xf5|\u1ecd|\xf4|\u1ed1|\u1ed3|\u1ed5|\u1ed7|\u1ed9|\u01a1|\u1edb|\u1edd|\u1edf|\u1ee1|\u1ee3/gi,"o")).replace(/\xfa|\xf9|\u1ee7|\u0169|\u1ee5|\u01b0|\u1ee9|\u1eeb|\u1eed|\u1eef|\u1ef1/gi,"u")).replace(/\xfd|\u1ef3|\u1ef7|\u1ef9|\u1ef5/gi,"y")).replace(/\u0111/gi,"d")).replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,"")).replace(/ /gi,"-")).replace(/\-\-\-\-\-/gi,"-")).replace(/\-\-\-\-/gi,"-")).replace(/\-\-\-/gi,"-")).replace(/\-\-/gi,"-"))+"@").replace(/\@\-|\-\@|\@/gi,"")+"-"+e}},{key:"getId",value:function(t){return parseInt(t.split(/[-]+/).pop())}},{key:"parentUrl",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t.split("/").reverse().slice(e).reverse().join("/")}},{key:"isActiveOrder",value:function(t,e){if(!t)return!1;var n=!1;return t.forEach(function(t,i){t.contest_id!==e||t.status!==o.a.STATUS_ACTIVE||(n=!0)}),n}},{key:"scrollTop",value:function(){setTimeout(function(){window.scrollTo({top:0,behavior:"smooth"})},100)}}]),e}()},"YK+t":function(e,r,c){"use strict";c.d(r,"a",function(){return E});var s,a=c("3Pt+"),u=c("Ch5c"),b=c("xmsf"),f=c("Q8ph"),l=c("s6DD"),d=c("fXoL"),h=c("0/gI"),p=c("lJxs"),g=((s=function(e){i(c,e);var r=o(c);function c(){return t(this,c),r.apply(this,arguments)}return n(c,[{key:"getEntityPath",value:function(){return"orders"}},{key:"create",value:function(t,e){var n=this.getUrl()+"/".concat(t);return this.post(n,e).pipe(Object(p.a)(function(t){return t.data}),Object(p.a)(function(t){return t.map(function(t){return console.log(t)})}))}},{key:"index",value:function(){return this.get(this.getUrl()).pipe(Object(p.a)(function(t){return t.data}),Object(p.a)(function(t){return t.map(function(t){return new u.a(t)})}))}}]),c}(h.a)).\u0275fac=function(t){return v(t||s)},s.\u0275prov=d.Kb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),v=d.Wb(g),m=c("QK4o"),T=c("kqIc"),w=c("e4Ts"),y=c("tyNb"),U=c("IfeN"),S=c("ofXK"),I=c("NFeN"),k=c("kmnG"),q=c("qFsG"),x=c("bTqV");function A(t,e){if(1&t){var n=d.Vb();d.Ub(0,"div",1),d.Ub(1,"div",2),d.Ub(2,"div",3),d.Ub(3,"div",4),d.Ub(4,"div",5),d.Ub(5,"p",6),d.bc("click",function(){return d.xc(n),d.fc().redirectLoginPage()}),d.Ub(6,"span",7),d.Ub(7,"i",8),d.Gc(8,"shopping_cart"),d.Tb(),d.Gc(9," \xa0"),d.Tb(),d.Gc(10," \u0110\u0103ng k\xfd mua kh\xf3a h\u1ecdc "),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb()}}function O(t,e){if(1&t){var n=d.Vb();d.Ub(0,"div"),d.Ub(1,"ul",11),d.Ub(2,"li",12),d.Ub(3,"div",13),d.Gc(4,"1"),d.Tb(),d.Ub(5,"div",14),d.Ub(6,"div",15),d.Ub(7,"span",16),d.Gc(8,"Thanh To\xe1n"),d.Tb(),d.Tb(),d.Ub(9,"div",17),d.Ub(10,"div",1),d.Ub(11,"div",18),d.Ub(12,"p"),d.Ub(13,"b"),d.Gc(14),d.Tb(),d.Gc(15),d.Ub(16,"span",19),d.Gc(17),d.Tb(),d.Tb(),d.Ub(18,"div",20),d.Ub(19,"span",21),d.Ub(20,"b"),d.Gc(21,"Ng\u01b0\u1eddi h\u01b0\u1edfng th\u1ee5: "),d.Tb(),d.Gc(22,"Tr\u1ecbnh Th\u1ecb Li\xean "),d.Tb(),d.Tb(),d.Ub(23,"div",20),d.Ub(24,"span",21),d.Ub(25,"b"),d.Gc(26,"STK:"),d.Tb(),d.Gc(27," 007704060063627"),d.Tb(),d.Tb(),d.Ub(28,"div",20),d.Ub(29,"span",21),d.Ub(30,"b"),d.Gc(31,"Ng\xe2n h\xe0ng:"),d.Tb(),d.Gc(32," VIB - Ng\xe2n h\xe0ng Qu\u1ed1c T\u1ebf VIB"),d.Tb(),d.Tb(),d.Ub(33,"div",20),d.Ub(34,"span",21),d.Ub(35,"i"),d.Gc(36,"(Ngay khi nh\u1eadn \u0111\u01b0\u1ee3c ti\u1ec1n, b\u1ed9 ph\u1eadn h\u1ed7 tr\u1ee3 s\u1ebd k\xedch ho\u1ea1t t\xe0i kho\u1ea3n cho b\u1ea1n)"),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(37,"div",18),d.Ub(38,"div",5),d.Ub(39,"b"),d.Ub(40,"p"),d.Gc(41),d.Tb(),d.Tb(),d.Tb(),d.Ub(42,"div",22),d.Ub(43,"mat-icon",23),d.Gc(44,"done"),d.Tb(),d.Gc(45," \u0110\u1ec1 thi c\u1eadp nh\u1eadt li\xean t\u1ee5c "),d.Tb(),d.Ub(46,"div",22),d.Ub(47,"mat-icon",23),d.Gc(48,"done"),d.Tb(),d.Gc(49," Tr\u1ecdn b\u1ed9 c\xe2u h\u1ecfi v\xe0 gi\u1ea3i th\xedch "),d.Tb(),d.Ub(50,"div",22),d.Ub(51,"mat-icon",23),d.Gc(52,"done"),d.Tb(),d.Gc(53," T\u1ea3i v\u1ec1 tr\u1ecdn b\u1ed9 t\xe0i li\u1ec7u "),d.Tb(),d.Ub(54,"div",22),d.Ub(55,"mat-icon",23),d.Gc(56,"done"),d.Tb(),d.Gc(57," C\u1eadp nh\u1eadt th\xf4ng tin chi ti\u1ebft v\u1ec1 k\u1ef3 thi qua email "),d.Tb(),d.Ub(58,"div",22),d.Ub(59,"mat-icon",23),d.Gc(60,"done"),d.Tb(),d.Gc(61," H\u1ecdc t\u1eadp d\u1ec5 d\xe0ng tr\xean Web v\xe0 App \u0111i\u1ec7n tho\u1ea1i "),d.Tb(),d.Ub(62,"div",22),d.Ub(63,"mat-icon",23),d.Gc(64,"done"),d.Tb(),d.Gc(65," T\xe0i kho\u1ea3n k\xedch ho\u1ea1t cho \u0111\u1ebfn khi thi xong "),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(66,"li",12),d.Ub(67,"div",24),d.Gc(68,"2"),d.Tb(),d.Ub(69,"div",14),d.Ub(70,"div",15),d.Ub(71,"span",25),d.Gc(72,"Ghi ch\xfa"),d.Tb(),d.Tb(),d.Ub(73,"div",17),d.Ub(74,"form",26),d.Ub(75,"mat-form-field",27),d.Pb(76,"input",28),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(77,"div",5),d.Ub(78,"button",29),d.bc("click",function(){return d.xc(n),d.fc(3).hideForm()}),d.Gc(79,"H\u1ee7y"),d.Tb(),d.Gc(80," \xa0 \xa0 "),d.Ub(81,"button",30),d.bc("click",function(){return d.xc(n),d.fc(3).register()}),d.Gc(82," \u0110\u0103ng k\xfd "),d.Tb(),d.Tb(),d.Tb()}if(2&t){var i=d.fc(3);d.Db(14),d.Ic("",i.contest.isFree?"Mi\u1ec5n ph\xed":"Vui l\xf2ng thanh to\xe1n"," :"),d.Db(1),d.Ic(" ",i.contest.formatted_sale_price," "),d.Db(2),d.Ic(" (",i.contest.formatted_price,") "),d.Db(24),d.Hc(i.contest.title),d.Db(33),d.mc("formGroup",i.form),d.Db(7),d.mc("disabled",!i.form.valid)}}function G(t,e){if(1&t){var n=d.Vb();d.Ub(0,"div",3),d.Ub(1,"div",4),d.Ub(2,"div",5),d.Ub(3,"p",6),d.bc("click",function(){return d.xc(n),d.fc(2).toggleForm()}),d.Ub(4,"span",7),d.Ub(5,"i",8),d.Gc(6,"shopping_cart"),d.Tb(),d.Gc(7," \xa0"),d.Tb(),d.Gc(8," \u0110\u0103ng k\xfd mua kh\xf3a h\u1ecdc "),d.Tb(),d.Tb(),d.Ec(9,O,83,6,"div",10),d.Tb(),d.Tb()}if(2&t){var i=d.fc(2);d.Db(9),d.mc("ngIf",i.shouldShowForm)}}function P(t,e){1&t&&(d.Ub(0,"div",3),d.Ub(1,"div",31),d.Ub(2,"p",32),d.Ub(3,"i",8),d.Gc(4,"shopping_cart"),d.Tb(),d.Gc(5," \xa0 H\u1ec7 th\u1ed1ng \u0111ang x\u1eed l\xfd y\xeau c\u1ea7u \u0111\u0103ng k\xfd mua kh\xf3a h\u1ecdc c\u1ee7a b\u1ea1n! "),d.Tb(),d.Tb(),d.Tb())}function _(t,e){if(1&t&&(d.Ub(0,"div",1),d.Ub(1,"div",2),d.Ec(2,G,10,1,"div",9),d.Ec(3,P,6,0,"div",9),d.Tb(),d.Tb()),2&t){var n=d.fc();d.Db(2),d.mc("ngIf",!n.isInactive),d.Db(1),d.mc("ngIf",n.isInactive)}}var N,E=((N=function(){function e(n,i,r,o,c,s,u,b){t(this,e),this.orderService=n,this.formBuilder=i,this.authService=r,this.contestService=o,this.sessionStorageService=c,this.route=s,this.notificationService=u,this.router=b,this.shouldShowForm=!1,this.isActive=!1,this.isInactive=!1,this.isFinishLoading=!1,this.form=this.formBuilder.group({note:[null,a.o.required]}),this.user=this.authService.getCurrentUser()}return n(e,[{key:"ngOnInit",value:function(){var t=this;if(this.user){if(!this.contest){var e=f.a.getId(this.route.snapshot.paramMap.get("ky-thi"));this.contestService.getById(e).subscribe(function(e){t.contest=e})}this.orderService.index().subscribe(function(e){t.sessionStorageService.store(b.a.Order,e),e.forEach(function(e,n){e.contest_id===t.contest.id&&e.status===u.a.STATUS_INACTIVE&&(t.isInactive=!0),e.contest_id===t.contest.id&&e.status===u.a.STATUS_ACTIVE&&(t.isActive=!0)}),t.isFinishLoading=!0})}}},{key:"toggleForm",value:function(){this.shouldShowForm=!this.shouldShowForm}},{key:"hideForm",value:function(){this.shouldShowForm=!1}},{key:"register",value:function(){var t,e=this;this.orderService.create(this.contest.id,{note:null===(t=this.form.get("note"))||void 0===t?void 0:t.value}).subscribe(function(t){e.shouldShowForm=!1,e.isInactive=!0})}},{key:"redirectLoginPage",value:function(){this.notificationService.warning("Vui l\xf2ng \u0111\u0103ng nh\u1eadp!"),this.router.navigate([l.a.SignIn],{queryParams:{returnUrl:this.router.url}})}}]),e}()).\u0275fac=function(t){return new(t||N)(d.Ob(g),d.Ob(a.d),d.Ob(m.a),d.Ob(T.a),d.Ob(w.b),d.Ob(y.a),d.Ob(U.a),d.Ob(y.d))},N.\u0275cmp=d.Ib({type:N,selectors:[["app-order-contest"]],inputs:{contest:"contest"},decls:2,vars:2,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-lg-12","col-md-12"],[1,"card"],[1,"card-body"],[1,"text-center"],[1,"btn","btn-primary",3,"click"],[1,"mat-button-wrapper"],[1,"material-icons"],["class","card",4,"ngIf"],[4,"ngIf"],[1,"timeline","timeline-simple"],[1,"timeline-inverted"],[1,"timeline-badge","success"],[1,"timeline-panel"],[1,"timeline-heading"],[1,"badge","badge-success"],[1,"timeline-body"],[1,"col-sm-12","col-md-6"],[2,"text-decoration","line-through"],[1,"my-2"],[1,"font-title-soft"],[2,"display","flex"],[1,"material-icons",2,"color","blue"],[1,"timeline-badge","info"],[1,"badge","badge-info"],[3,"formGroup"],["appearance","outline"],["formControlName","note","matInput","","placeholder","Nh\u1eadp H\u1ecd T\xean v\xe0 S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i"],["mat-raised-button","","color","default",1,"text-center",3,"click"],["mat-raised-button","","color","primary",1,"text-center",3,"disabled","click"],[1,"card-body","text-center"],[1,"btn","btn-warning"]],template:function(t,e){1&t&&(d.Ec(0,A,11,0,"div",0),d.Ec(1,_,4,2,"div",0)),2&t&&(d.mc("ngIf",!e.user),d.Db(1),d.mc("ngIf",e.contest&&!e.contest.isFree&&!e.isActive&&e.isFinishLoading))},directives:[S.k,I.a,a.p,a.l,a.f,k.b,a.c,q.b,a.k,a.e,x.a],encapsulation:2}),N)},hp31:function(e,i,r){"use strict";r.d(i,"a",function(){return S});var o=r("3Pt+"),c=r("Q8ph"),s=r("xmsf"),a=r("fXoL"),u=r("tyNb"),b=r("e4Ts"),f=r("Wp6s"),l=r("ofXK"),d=r("bSwM"),h=r("bTqV"),p=function(){return{"background-color":"#b7c9fb"}},g=function(){return{}};function v(t,e){if(1&t){var n=a.Vb();a.Ub(0,"div",5),a.Ub(1,"mat-checkbox",6),a.bc("change",function(t){return a.xc(n),a.fc().answer(t)}),a.Gc(2),a.Tb(),a.Tb()}if(2&t){var i=e.$implicit,r=e.index,o=a.fc();a.mc("ngStyle",o.shouldShowAnswer()&&r+1===o.question.correct_answer?a.oc(4,p):a.oc(5,g)),a.Db(1),a.nc("formControlName","answer_"+(r+1)),a.mc("value",r+1+""),a.Db(1),a.Ic(" ",i," ")}}function m(t,e){if(1&t&&(a.Ub(0,"div",11),a.Gc(1),a.Tb()),2&t){var n=a.fc(2);a.Db(1),a.Ic(" ",n.question.description?n.question.description:""," ")}}function T(t,e){1&t&&(a.Ub(0,"div",11),a.Gc(1," Gi\u1ea3i th\xedch: "),a.Ub(2,"span",12),a.Gc(3,"** T\xe0i kho\u1ea3n mi\u1ec5n ph\xed ch\u1ec9 l\xe0m \u0111\u01b0\u1ee3c 10 c\xe2u"),a.Tb(),a.Tb())}function w(t,e){if(1&t&&(a.Ub(0,"div",7),a.Ub(1,"div",8),a.Ub(2,"button",9),a.Gc(3),a.Tb(),a.Tb(),a.Ec(4,m,2,1,"div",10),a.Ec(5,T,4,0,"div",10),a.Tb()),2&t){var n=a.fc();a.Db(2),a.nc("color",n.isCorrectAnswer()?"primary":"accent"),a.Db(1),a.Ic(" ",n.isCorrectAnswer()?"B\u1ea1n \u0111\xe3 tr\u1ea3 l\u1eddi \u0110\xfang!":"B\u1ea1n \u0111\xe3 tr\u1ea3 l\u1eddi Sai!"," "),a.Db(1),a.mc("ngIf",n.isActiveOrder),a.Db(1),a.mc("ngIf",!n.isActiveOrder)}}var y=function(){return{background:"#f2f2f2"}},U=function(t,e,n,i){return[t,e,n,i]},S=function(){var e=function(){function e(n,i,r){t(this,e),this.route=n,this.sessionStorageService=i,this.formBuilder=r}return n(e,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({answer_1:[null,o.o.required],answer_2:[null],answer_3:[null],answer_4:[null]}),this.sessionKey="exam_"+this.examId+"_answers";var t=this.getAnswers();this.selectedValue=this.question.id in t?t[this.question.id]:null,this.selectedValue&&this.form.controls["answer_".concat(this.selectedValue)].setValue(!0),this.isActiveOrder=c.a.isActiveOrder(this.sessionStorageService.retrieve(s.a.Order),c.a.getId(this.route.snapshot.paramMap.get("ky-thi")))}},{key:"ngOnDestroy",value:function(){}},{key:"answer",value:function(t){var e=this;if(this.selectedValue=t.checked?parseInt(t.source.value):null,[1,2,3,4].forEach(function(t){t!=e.selectedValue&&e.form.controls["answer_".concat(t)].setValue(null)}),this.examId){var n=this.getAnswers();this.selectedValue?n["".concat(this.question.id)]=this.selectedValue:delete n["".concat(this.question.id)],this.sessionStorageService.store(this.sessionKey,n)}}},{key:"isCorrectAnswer",value:function(){return this.selectedValue===this.question.correct_answer}},{key:"shouldShowAnswer",value:function(){return this.forceShowAnswer?this.forceShowAnswer:!!this.selectedValue&&this.canShowAnswer}},{key:"getAnswers",value:function(){return this.result?this.result:this.sessionStorageService.retrieve(this.sessionKey)||{}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Ob(u.a),a.Ob(b.b),a.Ob(o.d))},e.\u0275cmp=a.Ib({type:e,selectors:[["app-question-item"]],inputs:{question:"question",questionNumber:"questionNumber",questionPrefix:"questionPrefix",canShowAnswer:"canShowAnswer",forceShowAnswer:"forceShowAnswer",examId:"examId",result:"result"},decls:7,vars:14,consts:[[1,"mt-3","hover-shadow-wrapper","question-item",3,"ngStyle"],[2,"background","#ededed","margin","10px 0","padding","10px","font-size","16px","font-weight","100"],[3,"formGroup"],["style","padding-top: 5px","class","m-1 mat-background-primary mat-primary ",3,"ngStyle",4,"ngFor","ngForOf"],["style","padding: 5px",4,"ngIf"],[1,"m-1","mat-background-primary","mat-primary",2,"padding-top","5px",3,"ngStyle"],[1,"example-margin",3,"value","formControlName","change"],[2,"padding","5px"],[1,"text-center",2,"margin","10px 0"],["mat-raised-button","",3,"color"],["class","font-bold",4,"ngIf"],[1,"font-bold"],[2,"color","orangered"]],template:function(t,e){1&t&&(a.Ub(0,"mat-card",0),a.Ub(1,"mat-card-title",1),a.Gc(2),a.Tb(),a.Ub(3,"mat-card-content"),a.Ub(4,"form",2),a.Ec(5,v,3,6,"div",3),a.Tb(),a.Ec(6,w,6,4,"div",4),a.Tb(),a.Tb()),2&t&&(a.mc("ngStyle",e.selectedValue?a.oc(7,y):a.oc(8,g)),a.Db(2),a.Kc(" ",e.questionPrefix,"",e.questionNumber,": ",e.question.title," "),a.Db(2),a.mc("formGroup",e.form),a.Db(1),a.mc("ngForOf",a.sc(9,U,e.question.answer_1,e.question.answer_2,e.question.answer_3,e.question.answer_4)),a.Db(1),a.mc("ngIf",e.shouldShowAnswer()))},directives:[f.a,l.l,f.d,f.b,o.p,o.l,o.f,l.j,l.k,d.a,o.k,o.e,h.a],encapsulation:2}),e}()},kqIc:function(e,r,c){"use strict";c.d(r,"a",function(){return l});var s=c("0/gI"),a=c("lJxs"),u=c("Fryg"),b=c("l425"),f=c("fXoL"),l=function(){var e=function(e){i(c,e);var r=o(c);function c(){return t(this,c),r.apply(this,arguments)}return n(c,[{key:"getEntityPath",value:function(){return"contests"}},{key:"index",value:function(){return this.get(this.getUrl()).pipe(Object(a.a)(function(t){return t.data}),Object(a.a)(function(t){return t.map(function(t){return new u.a(t)})}))}},{key:"getSubjects",value:function(t){var e=this.getUrl()+"/".concat(t,"/subjects");return this.get(e).pipe(Object(a.a)(function(t){return t.data}),Object(a.a)(function(t){return t.map(function(t){return new b.a(t)})}))}},{key:"getById",value:function(t){var e=this.getUrl()+"/".concat(t);return this.get(e).pipe(Object(a.a)(function(t){return new u.a(t.data)}))}}]),c}(s.a);return e.\u0275fac=function(t){return d(t||e)},e.\u0275prov=f.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),d=f.Wb(l)},l425:function(e,n,r){"use strict";r.d(n,"a",function(){return c});var c=function(e){i(r,e);var n=o(r);function r(){return t(this,r),n.apply(this,arguments)}return r}(r("+Ag2").a)},sHgf:function(e,n,i){"use strict";i.d(n,"a",function(){return s});var r=i("ofXK"),o=i("PCNd"),c=i("fXoL"),s=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({imports:[[r.c,o.a]]}),e}()},v5Tv:function(e,r,c){"use strict";c.d(r,"a",function(){return s});var s=function(e){i(c,e);var r=o(c);function c(){var e;return t(this,c),(e=r.apply(this,arguments)).TYPE_SINGLE=1,e.TYPE_PARENT=2,e.TYPE_CHILD=3,e}return n(c,[{key:"isSingle",get:function(){return this.type===this.TYPE_SINGLE}},{key:"isParent",get:function(){return this.type===this.TYPE_PARENT}}]),c}(c("+Ag2").a)},xmsf:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(t){return t.Order="x}b?g;ZeC(AN>Ad",t}({})}}])}();