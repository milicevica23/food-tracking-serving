import{s as it,d as s,C as rt,i as o,a as pe,b as O,c as f,h as st,e as Y,f as Ye,A as ze,q as He,g as qe,j as u,k as z,t as Ce,l as Je,m as lt,o as _t,n as ot,p as dt,r as Ne}from"../chunks/scheduler.DgFQApTg.js";import{S as mt,i as ft,d as k,t as g,a as m,e as Se,m as y,c as R,b as I,g as Oe}from"../chunks/index.vp3cdaT4.js";import{D as ut,e as gt,s as ct,Q as Ee,p as pt,r as We,C as vt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.4wjKAic4.js";import{w as $t}from"../chunks/entry.f9RG9seA.js";import{h as le}from"../chunks/button.BNY8BBjJ.js";import{D as ht,Q as Fe}from"../chunks/Value.BYEkrbxH.js";import{p as bt}from"../chunks/stores.CcaItnXN.js";import{L as Ze}from"../chunks/LinkButton.CfLAoZGN.js";import{B as wt}from"../chunks/BarChart.lynrH73K.js";import{B as oe}from"../chunks/BigValue.DIBHjl6k.js";import{L as kt}from"../chunks/LineChart.ZSsbzZEq.js";import{p as yt}from"../chunks/profile.BW8tN6E9.js";function Rt(i){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:Ne,p:Ne,d:Ne}}function It(i){let r;return{c(){r=Ce("Back to User Overview")},l(n){r=He(n,"Back to User Overview")},m(n,a){o(n,r,a)},d(n){n&&s(r)}}}function Tt(i){let r;return{c(){r=Ce("All Ingredients")},l(n){r=He(n,"All Ingredients")},m(n,a){o(n,r,a)},d(n){n&&s(r)}}}function xe(i){let r,n;return r=new Fe({props:{queryID:"available_models",queryResult:i[1]}}),{c(){I(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,c){y(r,a,c),n=!0},p(a,c){const v={};c[0]&2&&(v.queryResult=a[1]),r.$set(v)},i(a){n||(m(r.$$.fragment,a),n=!0)},o(a){g(r.$$.fragment,a),n=!1},d(a){k(r,a)}}}function et(i){let r,n;return r=new Fe({props:{queryID:"ingredient_stats",queryResult:i[2]}}),{c(){I(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,c){y(r,a,c),n=!0},p(a,c){const v={};c[0]&4&&(v.queryResult=a[2]),r.$set(v)},i(a){n||(m(r.$$.fragment,a),n=!0)},o(a){g(r.$$.fragment,a),n=!1},d(a){k(r,a)}}}function tt(i){let r,n;return r=new Fe({props:{queryID:"ingredient_occurrences",queryResult:i[3]}}),{c(){I(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,c){y(r,a,c),n=!0},p(a,c){const v={};c[0]&8&&(v.queryResult=a[3]),r.$set(v)},i(a){n||(m(r.$$.fragment,a),n=!0)},o(a){g(r.$$.fragment,a),n=!1},d(a){k(r,a)}}}function at(i){let r,n;return r=new Fe({props:{queryID:"ingredient_over_time",queryResult:i[4]}}),{c(){I(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,c){y(r,a,c),n=!0},p(a,c){const v={};c[0]&16&&(v.queryResult=a[4]),r.$set(v)},i(a){n||(m(r.$$.fragment,a),n=!0)},o(a){g(r.$$.fragment,a),n=!1},d(a){k(r,a)}}}function qt(i){let r,n,a,c,v,_,Q,de,d=i[0].ingredient+"",me,V,l,C,T,j,J,x,G,q,F,E,fe='<p class="markdown"><strong class="markdown">Score Interpretation:</strong> Lower scores (1-2) indicate less impact/better outcomes, while higher scores (4-5) indicate greater impact/worse outcomes.</p>',ee,H,K='<a href="#summary-statistics-last-3-months">Summary Statistics (Last 3 Months)</a>',N,D,M,te,L,A,S,P,B,ae,U,p,X,be,ne,we,ve,ke,W,De='<a href="#all-occurrences-last-3-months">All Occurrences (Last 3 Months)</a>',ye,ue,ie,Re,Z,Me='<a href="#health-scores-over-time">Health Scores Over Time</a>',Ie,ge,re,Te,se,$e;function nt(e,t){return Rt}let he=nt()(i);l=new Ze({props:{url:"/users/"+i[0].user_hash_id,$$slots:{default:[It]},$$scope:{ctx:i}}}),T=new Ze({props:{url:"/users/"+i[0].user_hash_id+"/ingredients-prediction",$$slots:{default:[Tt]},$$scope:{ctx:i}}});let $=i[1]&&xe(i);q=new ht({props:{name:"model_filter",data:i[1],value:"model_name",title:"Model",defaultValue:"gemma-3-27b-it"}});let h=i[2]&&et(i);M=new oe({props:{data:i[2],value:"total_occurrences",title:"Total Occurrences"}}),L=new oe({props:{data:i[2],value:"avg_confidence",title:"Avg Confidence",fmt:"num2"}}),S=new oe({props:{data:i[2],value:"avg_sleep",title:"Avg Sleep Score",fmt:"num2"}}),B=new oe({props:{data:i[2],value:"avg_mental_state",title:"Avg Mental State",fmt:"num2"}}),U=new oe({props:{data:i[2],value:"avg_bloating",title:"Avg Bloating Score",fmt:"num2"}}),X=new oe({props:{data:i[2],value:"avg_reflux",title:"Avg Reflux Score",fmt:"num2"}}),ne=new oe({props:{data:i[2],value:"avg_finger",title:"Avg Finger Score",fmt:"num2"}});let b=i[3]&&tt(i);ie=new ut({props:{data:i[3],search:"true"}});let w=i[4]&&at(i);return re=new kt({props:{data:i[4],x:"date",y:["avg_sleep","avg_mental_state","avg_bloating","avg_reflux","avg_finger"]}}),se=new wt({props:{data:i[4],x:"date",y:"occurrences"}}),{c(){r=u(),he.c(),n=z("meta"),a=z("meta"),c=Ye(),v=u(),_=z("h1"),Q=z("a"),de=Ce("Ingredient: "),me=Ce(d),V=u(),I(l.$$.fragment),C=u(),I(T.$$.fragment),j=u(),J=z("hr"),x=u(),$&&$.c(),G=u(),I(q.$$.fragment),F=u(),E=z("blockquote"),E.innerHTML=fe,ee=u(),H=z("h2"),H.innerHTML=K,N=u(),h&&h.c(),D=u(),I(M.$$.fragment),te=u(),I(L.$$.fragment),A=u(),I(S.$$.fragment),P=u(),I(B.$$.fragment),ae=u(),I(U.$$.fragment),p=u(),I(X.$$.fragment),be=u(),I(ne.$$.fragment),we=u(),ve=z("hr"),ke=u(),W=z("h2"),W.innerHTML=De,ye=u(),b&&b.c(),ue=u(),I(ie.$$.fragment),Re=u(),Z=z("h2"),Z.innerHTML=Me,Ie=u(),w&&w.c(),ge=u(),I(re.$$.fragment),Te=u(),I(se.$$.fragment),this.h()},l(e){r=f(e);const t=st("svelte-2igo1p",document.head);he.l(t),n=Y(t,"META",{name:!0,content:!0}),a=Y(t,"META",{name:!0,content:!0}),c=Ye(),t.forEach(s),v=f(e),_=Y(e,"H1",{class:!0,id:!0});var ce=ze(_);Q=Y(ce,"A",{href:!0});var _e=ze(Q);de=He(_e,"Ingredient: "),me=He(_e,d),_e.forEach(s),ce.forEach(s),V=f(e),R(l.$$.fragment,e),C=f(e),R(T.$$.fragment,e),j=f(e),J=Y(e,"HR",{class:!0}),x=f(e),$&&$.l(e),G=f(e),R(q.$$.fragment,e),F=f(e),E=Y(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),qe(E)!=="svelte-1u9u9wa"&&(E.innerHTML=fe),ee=f(e),H=Y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),qe(H)!=="svelte-145lwlg"&&(H.innerHTML=K),N=f(e),h&&h.l(e),D=f(e),R(M.$$.fragment,e),te=f(e),R(L.$$.fragment,e),A=f(e),R(S.$$.fragment,e),P=f(e),R(B.$$.fragment,e),ae=f(e),R(U.$$.fragment,e),p=f(e),R(X.$$.fragment,e),be=f(e),R(ne.$$.fragment,e),we=f(e),ve=Y(e,"HR",{class:!0}),ke=f(e),W=Y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),qe(W)!=="svelte-13sdye8"&&(W.innerHTML=De),ye=f(e),b&&b.l(e),ue=f(e),R(ie.$$.fragment,e),Re=f(e),Z=Y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),qe(Z)!=="svelte-1tad4ik"&&(Z.innerHTML=Me),Ie=f(e),w&&w.l(e),ge=f(e),R(re.$$.fragment,e),Te=f(e),R(se.$$.fragment,e),this.h()},h(){O(n,"name","twitter:card"),O(n,"content","summary_large_image"),O(a,"name","twitter:site"),O(a,"content","@evidence_dev"),O(Q,"href","#ingredient-paramsingredient"),O(_,"class","markdown"),O(_,"id","ingredient-paramsingredient"),O(J,"class","markdown"),O(E,"class","markdown"),O(H,"class","markdown"),O(H,"id","summary-statistics-last-3-months"),O(ve,"class","markdown"),O(W,"class","markdown"),O(W,"id","all-occurrences-last-3-months"),O(Z,"class","markdown"),O(Z,"id","health-scores-over-time")},m(e,t){o(e,r,t),he.m(document.head,null),pe(document.head,n),pe(document.head,a),pe(document.head,c),o(e,v,t),o(e,_,t),pe(_,Q),pe(Q,de),pe(Q,me),o(e,V,t),y(l,e,t),o(e,C,t),y(T,e,t),o(e,j,t),o(e,J,t),o(e,x,t),$&&$.m(e,t),o(e,G,t),y(q,e,t),o(e,F,t),o(e,E,t),o(e,ee,t),o(e,H,t),o(e,N,t),h&&h.m(e,t),o(e,D,t),y(M,e,t),o(e,te,t),y(L,e,t),o(e,A,t),y(S,e,t),o(e,P,t),y(B,e,t),o(e,ae,t),y(U,e,t),o(e,p,t),y(X,e,t),o(e,be,t),y(ne,e,t),o(e,we,t),o(e,ve,t),o(e,ke,t),o(e,W,t),o(e,ye,t),b&&b.m(e,t),o(e,ue,t),y(ie,e,t),o(e,Re,t),o(e,Z,t),o(e,Ie,t),w&&w.m(e,t),o(e,ge,t),y(re,e,t),o(e,Te,t),y(se,e,t),$e=!0},p(e,t){he.p(e,t),(!$e||t[0]&1)&&d!==(d=e[0].ingredient+"")&&rt(me,d);const ce={};t[0]&1&&(ce.url="/users/"+e[0].user_hash_id),t[1]&32&&(ce.$$scope={dirty:t,ctx:e}),l.$set(ce);const _e={};t[0]&1&&(_e.url="/users/"+e[0].user_hash_id+"/ingredients-prediction"),t[1]&32&&(_e.$$scope={dirty:t,ctx:e}),T.$set(_e),e[1]?$?($.p(e,t),t[0]&2&&m($,1)):($=xe(e),$.c(),m($,1),$.m(G.parentNode,G)):$&&(Oe(),g($,1,1,()=>{$=null}),Se());const Le={};t[0]&2&&(Le.data=e[1]),q.$set(Le),e[2]?h?(h.p(e,t),t[0]&4&&m(h,1)):(h=et(e),h.c(),m(h,1),h.m(D.parentNode,D)):h&&(Oe(),g(h,1,1,()=>{h=null}),Se());const Ae={};t[0]&4&&(Ae.data=e[2]),M.$set(Ae);const Be={};t[0]&4&&(Be.data=e[2]),L.$set(Be);const Ue={};t[0]&4&&(Ue.data=e[2]),S.$set(Ue);const Qe={};t[0]&4&&(Qe.data=e[2]),B.$set(Qe);const Ve={};t[0]&4&&(Ve.data=e[2]),U.$set(Ve);const je={};t[0]&4&&(je.data=e[2]),X.$set(je);const Ge={};t[0]&4&&(Ge.data=e[2]),ne.$set(Ge),e[3]?b?(b.p(e,t),t[0]&8&&m(b,1)):(b=tt(e),b.c(),m(b,1),b.m(ue.parentNode,ue)):b&&(Oe(),g(b,1,1,()=>{b=null}),Se());const Ke={};t[0]&8&&(Ke.data=e[3]),ie.$set(Ke),e[4]?w?(w.p(e,t),t[0]&16&&m(w,1)):(w=at(e),w.c(),m(w,1),w.m(ge.parentNode,ge)):w&&(Oe(),g(w,1,1,()=>{w=null}),Se());const Pe={};t[0]&16&&(Pe.data=e[4]),re.$set(Pe);const Xe={};t[0]&16&&(Xe.data=e[4]),se.$set(Xe)},i(e){$e||(m(l.$$.fragment,e),m(T.$$.fragment,e),m($),m(q.$$.fragment,e),m(h),m(M.$$.fragment,e),m(L.$$.fragment,e),m(S.$$.fragment,e),m(B.$$.fragment,e),m(U.$$.fragment,e),m(X.$$.fragment,e),m(ne.$$.fragment,e),m(b),m(ie.$$.fragment,e),m(w),m(re.$$.fragment,e),m(se.$$.fragment,e),$e=!0)},o(e){g(l.$$.fragment,e),g(T.$$.fragment,e),g($),g(q.$$.fragment,e),g(h),g(M.$$.fragment,e),g(L.$$.fragment,e),g(S.$$.fragment,e),g(B.$$.fragment,e),g(U.$$.fragment,e),g(X.$$.fragment,e),g(ne.$$.fragment,e),g(b),g(ie.$$.fragment,e),g(w),g(re.$$.fragment,e),g(se.$$.fragment,e),$e=!1},d(e){e&&(s(r),s(v),s(_),s(V),s(C),s(j),s(J),s(x),s(G),s(F),s(E),s(ee),s(H),s(N),s(D),s(te),s(A),s(P),s(ae),s(p),s(be),s(we),s(ve),s(ke),s(W),s(ye),s(ue),s(Re),s(Z),s(Ie),s(ge),s(Te)),he.d(e),s(n),s(a),s(c),k(l,e),k(T,e),$&&$.d(e),k(q,e),h&&h.d(e),k(M,e),k(L,e),k(S,e),k(B,e),k(U,e),k(X,e),k(ne,e),b&&b.d(e),k(ie,e),w&&w.d(e),k(re,e),k(se,e)}}}function St(i,r,n){let a,c;Je(i,bt,p=>n(24,a=p)),Je(i,We,p=>n(28,c=p));let{data:v}=r,{data:_={},customFormattingSettings:Q,__db:de,inputs:d}=v;lt(We,c="43cbb1a961407d9a715bf684235a8d6c",c);let me=gt($t(d));_t(me.subscribe(p=>n(7,d=p))),ot(vt,{getCustomFormats:()=>Q.customFormats||[]});const V=(p,X)=>yt(de.query,p,{query_name:X});ct(V);let l=a.params;dt(()=>!0);let C={initialData:void 0,initialError:void 0},T=le`select distinct model_name
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
order by model_name`,j=`select distinct model_name
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
order by model_name`;_.available_models_data&&(_.available_models_data instanceof Error?C.initialError=_.available_models_data:C.initialData=_.available_models_data,_.available_models_columns&&(C.knownColumns=_.available_models_columns));let J,x=!1;const G=Ee.createReactive({callback:p=>{n(1,J=p)},execFn:V},{id:"available_models",...C});G(j,{noResolve:T,...C}),globalThis[Symbol.for("available_models")]={get value(){return J}};let q={initialData:void 0,initialError:void 0},F=le`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')`,E=`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')`;_.ingredient_stats_data&&(_.ingredient_stats_data instanceof Error?q.initialError=_.ingredient_stats_data:q.initialData=_.ingredient_stats_data,_.ingredient_stats_columns&&(q.knownColumns=_.ingredient_stats_columns));let fe,ee=!1;const H=Ee.createReactive({callback:p=>{n(2,fe=p)},execFn:V},{id:"ingredient_stats",...q});H(E,{noResolve:F,...q}),globalThis[Symbol.for("ingredient_stats")]={get value(){return fe}};let K={initialData:void 0,initialError:void 0},N=le`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')
order by insert_timestamp desc`,D=`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')
order by insert_timestamp desc`;_.ingredient_occurrences_data&&(_.ingredient_occurrences_data instanceof Error?K.initialError=_.ingredient_occurrences_data:K.initialData=_.ingredient_occurrences_data,_.ingredient_occurrences_columns&&(K.knownColumns=_.ingredient_occurrences_columns));let M,te=!1;const L=Ee.createReactive({callback:p=>{n(3,M=p)},execFn:V},{id:"ingredient_occurrences",...K});L(D,{noResolve:N,...K}),globalThis[Symbol.for("ingredient_occurrences")]={get value(){return M}};let A={initialData:void 0,initialError:void 0},S=le`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')
group by date
order by date`,P=`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')
group by date
order by date`;_.ingredient_over_time_data&&(_.ingredient_over_time_data instanceof Error?A.initialError=_.ingredient_over_time_data:A.initialData=_.ingredient_over_time_data,_.ingredient_over_time_columns&&(A.knownColumns=_.ingredient_over_time_columns));let B,ae=!1;const U=Ee.createReactive({callback:p=>{n(4,B=p)},execFn:V},{id:"ingredient_over_time",...A});return U(P,{noResolve:S,...A}),globalThis[Symbol.for("ingredient_over_time")]={get value(){return B}},i.$$set=p=>{"data"in p&&n(5,v=p.data)},i.$$.update=()=>{i.$$.dirty[0]&32&&n(6,{data:_={},customFormattingSettings:Q,__db:de}=v,_),i.$$.dirty[0]&64&&pt.set(Object.keys(_).length>0),i.$$.dirty[0]&16777216&&n(0,l=a.params),i.$$.dirty[0]&1&&n(9,T=le`select distinct model_name
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
order by model_name`),i.$$.dirty[0]&1&&n(10,j=`select distinct model_name
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
order by model_name`),i.$$.dirty[0]&3840&&(T||!x?T||(G(j,{noResolve:T,...C}),n(11,x=!0)):G(j,{noResolve:T})),i.$$.dirty[0]&129&&n(13,F=le`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')`),i.$$.dirty[0]&129&&n(14,E=`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')`),i.$$.dirty[0]&61440&&(F||!ee?F||(H(E,{noResolve:F,...q}),n(15,ee=!0)):H(E,{noResolve:F})),i.$$.dirty[0]&129&&n(17,N=le`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')
order by insert_timestamp desc`),i.$$.dirty[0]&129&&n(18,D=`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')
order by insert_timestamp desc`),i.$$.dirty[0]&983040&&(N||!te?N||(L(D,{noResolve:N,...K}),n(19,te=!0)):L(D,{noResolve:N})),i.$$.dirty[0]&129&&n(21,S=le`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')
group by date
order by date`),i.$$.dirty[0]&129&&n(22,P=`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_ingredients_flat_prediction
where user_hash_id = '${l.user_hash_id}'
  and ingredient = '${l.ingredient}'
  and ('${d.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${d.model_filter.value}')
group by date
order by date`),i.$$.dirty[0]&15728640&&(S||!ae?S||(U(P,{noResolve:S,...A}),n(23,ae=!0)):U(P,{noResolve:S}))},[l,J,fe,M,B,v,_,d,C,T,j,x,q,F,E,ee,K,N,D,te,A,S,P,ae,a]}class Vt extends mt{constructor(r){super(),ft(this,r,St,qt,it,{data:5},null,[-1,-1])}}export{Vt as component};
