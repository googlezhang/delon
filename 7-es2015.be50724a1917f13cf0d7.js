(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9m5P":function(e,t,n){"use strict";n.r(t),n.d(t,"DevTestModule",(function(){return L}));var a=n("tyNb"),c=n("PCNd"),i=n("sWYD"),l=n("fXoL"),o=n("yclk");const s=function(){return{y1:"\u5ba2\u6d41\u91cf",y2:"\u652f\u4ed8\u7b14\u6570"}};let r=(()=>{class e{constructor(){this.chartData=[]}ngOnInit(){for(let e=0;e<20;e+=1)this.chartData.push({time:Object(i.a)((new Date).getTime()+18e5*e,"yyyy-MM-dd HH:mm"),y1:Math.floor(100*Math.random())+1e3,y2:Math.floor(100*Math.random())+10})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Pb({type:e,selectors:[["app-demo"]],decls:1,vars:4,consts:[[3,"data","titleMap","height"]],template:function(e,t){1&e&&l.Wb(0,"g2-timeline",0),2&e&&l.uc("data",t.chartData)("titleMap",l.yc(3,s))("height",200)},directives:[o.a],encapsulation:2}),e})();var u=n("ByMC");let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Pb({type:e,selectors:[["dev-home"]],decls:2,vars:1,consts:[[3,"autoBreadcrumb"]],template:function(e,t){1&e&&(l.Wb(0,"page-header",0),l.Sc(1," home ")),2&e&&l.uc("autoBreadcrumb",!1)},directives:[u.a],encapsulation:2}),e})();var p=n("uU7u"),b=n("kVq8"),h=(n("xw4t"),n("FwiY")),m=n("y9FJ"),g=n("CJNZ"),f=n("PScX"),v=n("C2AL"),x=n("Nqz0"),_=n("ZE2D"),k=n("Q8cG"),y=n("CCNn"),S=n("UKzi"),z=n("sYmb");const w=function(){return["/dev"]},E=[b.U,b.W,b.cb,b.db,b.I,b.H,b.c,b.S,b.Y,b.nb,b.T,b.z,b.K,b.J,b.a];let C=(()=>{class e{constructor(e,t,n,a,c){this.menuSrv=t,this.settings=n,this.msgSrv=a,this.i18n=c,this.lang="zh-CN",this.menus=[{text:"test",group:!0,children:[{text:"Dashboard-DISABLED",link:"/dev",icon:"anticon anticon-dashboard",i18n:"app.header.menu.home",badge:5,disabled:!0},{text:"Level1",link:"#",icon:"anticon anticon-appstore",children:[{text:"Level2",link:"#",children:[{text:"Level3A",link:"/dev/l1"},{text:"Level3B-DISABLED",link:"/dev/l1",disabled:!0}]},{text:"Level2-DISABLED",link:"/dev/l2",disabled:!0}]},{text:"ABC",icon:"anticon anticon-appstore",children:[{text:"Reuse Tab1",link:"/dev/l1",i18n:"app.header.menu.docs"},{text:"Reuse Tab2",link:"/dev/l2"},{text:"Reuse Tab3",link:"/dev/l3"},{text:"Reuse Tab4",link:"/dev/l4"},{text:"Reuse Tab5",link:"/dev/l5"},{text:"Reuse Tab6",link:"/dev/l6"},{text:"Reuse Tab7",link:"/dev/l7"},{text:"Ellipsis",link:"/dev/l8"}]}]}],this.customContextMenu=[{id:"custom1",title:"\u81ea\u5b9a\u4e491",fn:(e,t)=>{console.log("\u81ea\u5b9a\u4e491",e,t)}},{id:"custom2",title:"\u81ea\u5b9a\u4e492",disabled:()=>!0,fn:(e,t)=>{console.log("\u81ea\u5b9a\u4e492",e,t)}}],e.addIcon(...E)}get isFixed(){return this.settings.layout.fixed}get isBoxed(){return this.settings.layout.boxed}get isCollapsed(){return this.settings.layout.collapsed}toggleCollapsedSideabar(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}toggleLang(){this.lang="zh-CN"===this.lang?"en-US":"zh-CN",this.i18n.use(this.lang)}ngOnInit(){this.menuSrv.add(this.menus)}}return e.\u0275fac=function(t){return new(t||e)(l.Vb(h.c),l.Vb(m.a),l.Vb(g.a),l.Vb(f.b),l.Vb(p.a))},e.\u0275cmp=l.Pb({type:e,selectors:[["dev-layout"]],hostVars:8,hostBindings:function(e,t){2&e&&l.Lb("alain-default",!0)("alain-default__fixed",t.isFixed)("alain-default__boxed",t.isBoxed)("alain-default__collapsed",t.isCollapsed)},decls:38,vars:21,consts:[[1,"alain-default__header"],[1,"alain-default__header-logo"],[1,"alain-default__header-logo-link",3,"routerLink"],["src","./assets/img/logo-full.svg",1,"alain-default__header-logo-expanded",2,"max-height","40px",3,"alt"],["src","./assets/img/logo.svg",1,"alain-default__header-logo-collapsed",2,"max-height","30px",3,"alt"],[1,"alain-default__nav-wrap"],[1,"alain-default__nav"],[1,"alain-default__nav-item",3,"click"],["nz-icon","",3,"nzType"],[1,"alain-default__aside"],[1,"alain-default__aside-inner"],["nz-dropdown","","nzTrigger","click",1,"alain-default__aside-user",3,"nzDropdownMenu"],["nzIcon","anticon anticon-user",1,"alain-default__aside-user-avatar",3,"nzSize"],[1,"alain-default__aside-user-info"],[1,"text-truncate","mb0"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click"],[1,"d-block","py-lg"],[1,"alain-default__content"],[3,"mode","customContextMenu"]],template:function(e,t){if(1&e&&(l.bc(0,"div",0),l.bc(1,"div",1),l.bc(2,"a",2),l.Wb(3,"img",3),l.Wb(4,"img",4),l.ac(),l.ac(),l.bc(5,"div",5),l.bc(6,"ul",6),l.bc(7,"li"),l.bc(8,"div",7),l.jc("click",(function(){return t.toggleCollapsedSideabar()})),l.Wb(9,"i",8),l.ac(),l.ac(),l.bc(10,"li"),l.bc(11,"div",7),l.jc("click",(function(){return t.toggleLang()})),l.Sc(12),l.ac(),l.ac(),l.ac(),l.ac(),l.ac(),l.bc(13,"div",9),l.bc(14,"div",10),l.bc(15,"div",11),l.Wb(16,"nz-avatar",12),l.bc(17,"div",13),l.bc(18,"strong"),l.Sc(19),l.ac(),l.bc(20,"p",14),l.Sc(21),l.ac(),l.ac(),l.ac(),l.bc(22,"nz-dropdown-menu",null,15),l.bc(24,"ul",16),l.bc(25,"li",17),l.jc("click",(function(){return t.msgSrv.success("profile")})),l.Sc(26),l.nc(27,"translate"),l.ac(),l.bc(28,"li",17),l.jc("click",(function(){return t.msgSrv.success("settings")})),l.Sc(29),l.nc(30,"translate"),l.ac(),l.bc(31,"li",17),l.jc("click",(function(){return t.msgSrv.success("logout")})),l.Sc(32),l.nc(33,"translate"),l.ac(),l.ac(),l.ac(),l.Wb(34,"sidebar-nav",18),l.ac(),l.ac(),l.bc(35,"section",19),l.Wb(36,"reuse-tab",20),l.Wb(37,"router-outlet"),l.ac()),2&e){const e=l.Ec(23);l.Eb(2),l.uc("routerLink",l.yc(20,w)),l.Eb(1),l.vc("alt",t.settings.app.name),l.Eb(1),l.vc("alt",t.settings.app.name),l.Eb(5),l.wc("nzType","menu-",t.settings.layout.collapsed?"unfold":"fold",""),l.Eb(3),l.Uc(" ",t.lang," "),l.Eb(3),l.uc("nzDropdownMenu",e),l.Eb(1),l.uc("nzSize","large"),l.Eb(3),l.Tc(t.settings.user.name),l.Eb(2),l.Tc(t.settings.user.email),l.Eb(5),l.Tc(l.oc(27,14,"profile")),l.Eb(3),l.Tc(l.oc(30,16,"settings")),l.Eb(3),l.Tc(l.oc(33,18,"logout")),l.Eb(4),l.uc("mode",2)("customContextMenu",t.customContextMenu)}},directives:[a.i,v.a,h.a,x.b,_.a,x.e,k.c,k.e,y.a,S.a,a.k],pipes:[z.b],encapsulation:2}),e})();var T=n("ofXK");let M=(()=>{class e{constructor(e){this.router=e}}return e.\u0275fac=function(t){return new(t||e)(l.Vb(a.a))},e.\u0275cmp=l.Pb({type:e,selectors:[["dev-page"]],decls:3,vars:3,template:function(e,t){1&e&&(l.Wb(0,"page-header"),l.Sc(1),l.nc(2,"json")),2&e&&(l.Eb(1),l.Uc(" page: ",l.oc(2,1,t.router.url)," "))},directives:[u.a],pipes:[T.k],encapsulation:2}),e})();const D=[{path:"demo",component:r},{path:"",component:C,children:[{path:"",component:d},{path:"l1",component:M},{path:"l2",component:M},{path:"l3",component:M},{path:"l4",component:M},{path:"l5",component:M},{path:"l6",component:M},{path:"l7",component:M},{path:"l8",component:M},{path:"login",component:M}]}];let L=(()=>{class e{}return e.\u0275mod=l.Tb({type:e}),e.\u0275inj=l.Sb({factory:function(t){return new(t||e)},imports:[[c.a,a.j.forChild(D)]]}),e})()}}]);