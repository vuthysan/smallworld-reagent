// Compiled by ClojureScript 1.10.439 {}
goog.provide('smallworld.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
goog.require('smallworld.components.bannerIndex');
goog.require('smallworld.components.index');
goog.require('smallworld.components.opportunities');
goog.require('smallworld.components.opportunities_single_page');
goog.require('smallworld.components.footer');
smallworld.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/opportunities",new cljs.core.Keyword(null,"opportunities","opportunities",1714631877)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/opportunities-single",new cljs.core.Keyword(null,"opportunities-single","opportunities-single",-1610934149)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
smallworld.core.path_for = (function smallworld$core$path_for(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34768 = arguments.length;
var i__4642__auto___34769 = (0);
while(true){
if((i__4642__auto___34769 < len__4641__auto___34768)){
args__4647__auto__.push((arguments[i__4642__auto___34769]));

var G__34770 = (i__4642__auto___34769 + (1));
i__4642__auto___34769 = G__34770;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return smallworld.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

smallworld.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__34764){
var vec__34765 = p__34764;
var params = cljs.core.nth.call(null,vec__34765,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,smallworld.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,smallworld.core.router,route));
}
});

smallworld.core.path_for.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
smallworld.core.path_for.cljs$lang$applyTo = (function (seq34762){
var G__34763 = cljs.core.first.call(null,seq34762);
var seq34762__$1 = cljs.core.next.call(null,seq34762);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34763,seq34762__$1);
});

smallworld.core.path_for.call(null,new cljs.core.Keyword(null,"about","about",1423892543));
smallworld.core.home_page = (function smallworld$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),smallworld.components.bannerIndex.bannerIndex.call(null),smallworld.components.index.index.call(null)], null);
});
});
smallworld.core.about_page = (function smallworld$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About smallworld"], null)], null);
});
});
smallworld.core.opportunities_page = (function smallworld$core$opportunities_page(){
return (function (){
return smallworld.components.opportunities.opportunities.call(null);
});
});
smallworld.core.opportunities_single_page = (function smallworld$core$opportunities_single_page(){
return (function (){
return smallworld.components.opportunities_single_page.opportunities_single.call(null);
});
});
smallworld.core.page_for = (function smallworld$core$page_for(route){
var G__34771 = route;
var G__34771__$1 = (((G__34771 instanceof cljs.core.Keyword))?G__34771.fqn:null);
switch (G__34771__$1) {
case "index":
return new cljs.core.Var(function(){return smallworld.core.home_page;},new cljs.core.Symbol("smallworld.core","home-page","smallworld.core/home-page",1039815339,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"smallworld.core","smallworld.core",-1822611195,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/smallworld/core.cljs",16,1,33,33,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(smallworld.core.home_page)?smallworld.core.home_page.cljs$lang$test:null)]));

break;
case "opportunities":
return new cljs.core.Var(function(){return smallworld.core.opportunities_page;},new cljs.core.Symbol("smallworld.core","opportunities-page","smallworld.core/opportunities-page",-2089283897,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"smallworld.core","smallworld.core",-1822611195,null),new cljs.core.Symbol(null,"opportunities-page","opportunities-page",-1797415015,null),"src/cljs/smallworld/core.cljs",25,1,43,43,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(smallworld.core.opportunities_page)?smallworld.core.opportunities_page.cljs$lang$test:null)]));

break;
case "opportunities-single":
return new cljs.core.Var(function(){return smallworld.core.opportunities_single_page;},new cljs.core.Symbol("smallworld.core","opportunities-single-page","smallworld.core/opportunities-single-page",-729469424,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"smallworld.core","smallworld.core",-1822611195,null),new cljs.core.Symbol(null,"opportunities-single-page","opportunities-single-page",-462825134,null),"src/cljs/smallworld/core.cljs",32,1,48,48,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(smallworld.core.opportunities_single_page)?smallworld.core.opportunities_single_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return smallworld.core.about_page;},new cljs.core.Symbol("smallworld.core","about-page","smallworld.core/about-page",1364135919,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"smallworld.core","smallworld.core",-1822611195,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/smallworld/core.cljs",17,1,39,39,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(smallworld.core.about_page)?smallworld.core.about_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34771__$1)].join('')));

}
});
smallworld.core.current_page = (function smallworld$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),smallworld.components.footer.footer.call(null)], null);
});
});
smallworld.core.mount_root = (function smallworld$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [smallworld.core.current_page], null),document.getElementById("app"));
});
smallworld.core.init_BANG_ = (function smallworld$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.call(null,smallworld.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render.call(null,clerk.core.after_render_BANG_);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),smallworld.core.page_for.call(null,current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,reitit.frontend.match_by_path.call(null,smallworld.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return smallworld.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1548396944509
