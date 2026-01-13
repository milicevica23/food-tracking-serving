import{s as tt,d as _,C as at,i as d,a as pe,b as O,c as p,h as ot,e as X,f as ze,A as Ke,q as qe,g as Ee,j as g,k as Y,t as Ce,l as Pe,m as nt,o as rt,n as st,p as _t,r as Oe}from"../chunks/scheduler.DgFQApTg.js";import{S as it,i as lt,d as k,t as c,a as m,e as Re,m as y,c as R,b as I,g as Ie}from"../chunks/index.vp3cdaT4.js";import{D as dt,e as mt,s as ut,Q as Te,p as ct,r as Xe,C as ft}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.4wjKAic4.js";import{w as pt}from"../chunks/entry.f9RG9seA.js";import{h as re}from"../chunks/button.BNY8BBjJ.js";import{D as gt,Q as Se}from"../chunks/Value.BYEkrbxH.js";import{p as vt}from"../chunks/stores.CcaItnXN.js";import{L as Ye}from"../chunks/LinkButton.CfLAoZGN.js";import{B as $t}from"../chunks/BarChart.lynrH73K.js";import{B as _e}from"../chunks/BigValue.DIBHjl6k.js";import{L as ht}from"../chunks/LineChart.ZSsbzZEq.js";import{p as bt}from"../chunks/profile.BW8tN6E9.js";function wt(n){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:Oe,p:Oe,d:Oe}}function kt(n){let r;return{c(){r=Ce("Back to User Overview")},l(o){r=qe(o,"Back to User Overview")},m(o,a){d(o,r,a)},d(o){o&&_(r)}}}function yt(n){let r;return{c(){r=Ce("All Compounds")},l(o){r=qe(o,"All Compounds")},m(o,a){d(o,r,a)},d(o){o&&_(r)}}}function Je(n){let r,o;return r=new Se({props:{queryID:"available_models",queryResult:n[1]}}),{c(){I(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,f){y(r,a,f),o=!0},p(a,f){const v={};f[0]&2&&(v.queryResult=a[1]),r.$set(v)},i(a){o||(m(r.$$.fragment,a),o=!0)},o(a){c(r.$$.fragment,a),o=!1},d(a){k(r,a)}}}function We(n){let r,o;return r=new Se({props:{queryID:"compound_stats_predicted",queryResult:n[2]}}),{c(){I(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,f){y(r,a,f),o=!0},p(a,f){const v={};f[0]&4&&(v.queryResult=a[2]),r.$set(v)},i(a){o||(m(r.$$.fragment,a),o=!0)},o(a){c(r.$$.fragment,a),o=!1},d(a){k(r,a)}}}function Ze(n){let r,o;return r=new Se({props:{queryID:"compound_occurrences_predicted",queryResult:n[3]}}),{c(){I(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,f){y(r,a,f),o=!0},p(a,f){const v={};f[0]&8&&(v.queryResult=a[3]),r.$set(v)},i(a){o||(m(r.$$.fragment,a),o=!0)},o(a){c(r.$$.fragment,a),o=!1},d(a){k(r,a)}}}function xe(n){let r,o;return r=new Se({props:{queryID:"compound_over_time_predicted",queryResult:n[4]}}),{c(){I(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,f){y(r,a,f),o=!0},p(a,f){const v={};f[0]&16&&(v.queryResult=a[4]),r.$set(v)},i(a){o||(m(r.$$.fragment,a),o=!0)},o(a){c(r.$$.fragment,a),o=!1},d(a){k(r,a)}}}function Rt(n){let r,o,a,f,v,i,U,ie,l=n[0].compound+"",le,Q,s,N,T,V,z,J,j,q,D,E,de='<a href="#statistics-last-3-months">Statistics (Last 3 Months)</a>',W,G,C,M,H,Z,A,x,S,L,F,ee,B,te,u,me,ge,he,K,He='<a href="#occurrences-last-3-months">Occurrences (Last 3 Months)</a>',be,ue,ae,we,P,Fe='<a href="#health-scores-over-time">Health Scores Over Time</a>',ke,ce,oe,ye,ne,ve;function et(e,t){return wt}let $e=et()(n);s=new Ye({props:{url:"/users/"+n[0].user_hash_id,$$slots:{default:[kt]},$$scope:{ctx:n}}}),T=new Ye({props:{url:"/users/"+n[0].user_hash_id+"/compounds-prediction",$$slots:{default:[yt]},$$scope:{ctx:n}}});let $=n[1]&&Je(n);q=new gt({props:{name:"model_filter",data:n[1],value:"model_name",title:"Model",defaultValue:"gemma-3-27b-it"}});let h=n[2]&&We(n);C=new _e({props:{data:n[2],value:"total_occurrences",title:"Occurrences"}}),H=new _e({props:{data:n[2],value:"avg_confidence",title:"Avg Confidence",fmt:"num2"}}),A=new _e({props:{data:n[2],value:"avg_sleep",title:"Avg Sleep Score",fmt:"num2"}}),S=new _e({props:{data:n[2],value:"avg_mental_state",title:"Avg Mental State",fmt:"num2"}}),F=new _e({props:{data:n[2],value:"avg_bloating",title:"Avg Bloating Score",fmt:"num2"}}),B=new _e({props:{data:n[2],value:"avg_reflux",title:"Avg Reflux Score",fmt:"num2"}}),u=new _e({props:{data:n[2],value:"avg_finger",title:"Avg Finger Score",fmt:"num2"}});let b=n[3]&&Ze(n);ae=new dt({props:{data:n[3],search:"true"}});let w=n[4]&&xe(n);return oe=new ht({props:{data:n[4],x:"date",y:["avg_sleep","avg_mental_state","avg_bloating","avg_reflux","avg_finger"]}}),ne=new $t({props:{data:n[4],x:"date",y:"occurrences"}}),{c(){r=g(),$e.c(),o=Y("meta"),a=Y("meta"),f=ze(),v=g(),i=Y("h1"),U=Y("a"),ie=Ce("Compound: "),le=Ce(l),Q=g(),I(s.$$.fragment),N=g(),I(T.$$.fragment),V=g(),z=Y("hr"),J=g(),$&&$.c(),j=g(),I(q.$$.fragment),D=g(),E=Y("h2"),E.innerHTML=de,W=g(),h&&h.c(),G=g(),I(C.$$.fragment),M=g(),I(H.$$.fragment),Z=g(),I(A.$$.fragment),x=g(),I(S.$$.fragment),L=g(),I(F.$$.fragment),ee=g(),I(B.$$.fragment),te=g(),I(u.$$.fragment),me=g(),ge=Y("hr"),he=g(),K=Y("h2"),K.innerHTML=He,be=g(),b&&b.c(),ue=g(),I(ae.$$.fragment),we=g(),P=Y("h2"),P.innerHTML=Fe,ke=g(),w&&w.c(),ce=g(),I(oe.$$.fragment),ye=g(),I(ne.$$.fragment),this.h()},l(e){r=p(e);const t=ot("svelte-2igo1p",document.head);$e.l(t),o=X(t,"META",{name:!0,content:!0}),a=X(t,"META",{name:!0,content:!0}),f=ze(),t.forEach(_),v=p(e),i=X(e,"H1",{class:!0,id:!0});var fe=Ke(i);U=X(fe,"A",{href:!0});var se=Ke(U);ie=qe(se,"Compound: "),le=qe(se,l),se.forEach(_),fe.forEach(_),Q=p(e),R(s.$$.fragment,e),N=p(e),R(T.$$.fragment,e),V=p(e),z=X(e,"HR",{class:!0}),J=p(e),$&&$.l(e),j=p(e),R(q.$$.fragment,e),D=p(e),E=X(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ee(E)!=="svelte-6rmz3k"&&(E.innerHTML=de),W=p(e),h&&h.l(e),G=p(e),R(C.$$.fragment,e),M=p(e),R(H.$$.fragment,e),Z=p(e),R(A.$$.fragment,e),x=p(e),R(S.$$.fragment,e),L=p(e),R(F.$$.fragment,e),ee=p(e),R(B.$$.fragment,e),te=p(e),R(u.$$.fragment,e),me=p(e),ge=X(e,"HR",{class:!0}),he=p(e),K=X(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ee(K)!=="svelte-hxkhpn"&&(K.innerHTML=He),be=p(e),b&&b.l(e),ue=p(e),R(ae.$$.fragment,e),we=p(e),P=X(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ee(P)!=="svelte-1tad4ik"&&(P.innerHTML=Fe),ke=p(e),w&&w.l(e),ce=p(e),R(oe.$$.fragment,e),ye=p(e),R(ne.$$.fragment,e),this.h()},h(){O(o,"name","twitter:card"),O(o,"content","summary_large_image"),O(a,"name","twitter:site"),O(a,"content","@evidence_dev"),O(U,"href","#compound-paramscompound"),O(i,"class","markdown"),O(i,"id","compound-paramscompound"),O(z,"class","markdown"),O(E,"class","markdown"),O(E,"id","statistics-last-3-months"),O(ge,"class","markdown"),O(K,"class","markdown"),O(K,"id","occurrences-last-3-months"),O(P,"class","markdown"),O(P,"id","health-scores-over-time")},m(e,t){d(e,r,t),$e.m(document.head,null),pe(document.head,o),pe(document.head,a),pe(document.head,f),d(e,v,t),d(e,i,t),pe(i,U),pe(U,ie),pe(U,le),d(e,Q,t),y(s,e,t),d(e,N,t),y(T,e,t),d(e,V,t),d(e,z,t),d(e,J,t),$&&$.m(e,t),d(e,j,t),y(q,e,t),d(e,D,t),d(e,E,t),d(e,W,t),h&&h.m(e,t),d(e,G,t),y(C,e,t),d(e,M,t),y(H,e,t),d(e,Z,t),y(A,e,t),d(e,x,t),y(S,e,t),d(e,L,t),y(F,e,t),d(e,ee,t),y(B,e,t),d(e,te,t),y(u,e,t),d(e,me,t),d(e,ge,t),d(e,he,t),d(e,K,t),d(e,be,t),b&&b.m(e,t),d(e,ue,t),y(ae,e,t),d(e,we,t),d(e,P,t),d(e,ke,t),w&&w.m(e,t),d(e,ce,t),y(oe,e,t),d(e,ye,t),y(ne,e,t),ve=!0},p(e,t){$e.p(e,t),(!ve||t[0]&1)&&l!==(l=e[0].compound+"")&&at(le,l);const fe={};t[0]&1&&(fe.url="/users/"+e[0].user_hash_id),t[1]&32&&(fe.$$scope={dirty:t,ctx:e}),s.$set(fe);const se={};t[0]&1&&(se.url="/users/"+e[0].user_hash_id+"/compounds-prediction"),t[1]&32&&(se.$$scope={dirty:t,ctx:e}),T.$set(se),e[1]?$?($.p(e,t),t[0]&2&&m($,1)):($=Je(e),$.c(),m($,1),$.m(j.parentNode,j)):$&&(Ie(),c($,1,1,()=>{$=null}),Re());const Ne={};t[0]&2&&(Ne.data=e[1]),q.$set(Ne),e[2]?h?(h.p(e,t),t[0]&4&&m(h,1)):(h=We(e),h.c(),m(h,1),h.m(G.parentNode,G)):h&&(Ie(),c(h,1,1,()=>{h=null}),Re());const De={};t[0]&4&&(De.data=e[2]),C.$set(De);const Me={};t[0]&4&&(Me.data=e[2]),H.$set(Me);const Ae={};t[0]&4&&(Ae.data=e[2]),A.$set(Ae);const Le={};t[0]&4&&(Le.data=e[2]),S.$set(Le);const Be={};t[0]&4&&(Be.data=e[2]),F.$set(Be);const Ue={};t[0]&4&&(Ue.data=e[2]),B.$set(Ue);const Qe={};t[0]&4&&(Qe.data=e[2]),u.$set(Qe),e[3]?b?(b.p(e,t),t[0]&8&&m(b,1)):(b=Ze(e),b.c(),m(b,1),b.m(ue.parentNode,ue)):b&&(Ie(),c(b,1,1,()=>{b=null}),Re());const Ve={};t[0]&8&&(Ve.data=e[3]),ae.$set(Ve),e[4]?w?(w.p(e,t),t[0]&16&&m(w,1)):(w=xe(e),w.c(),m(w,1),w.m(ce.parentNode,ce)):w&&(Ie(),c(w,1,1,()=>{w=null}),Re());const je={};t[0]&16&&(je.data=e[4]),oe.$set(je);const Ge={};t[0]&16&&(Ge.data=e[4]),ne.$set(Ge)},i(e){ve||(m(s.$$.fragment,e),m(T.$$.fragment,e),m($),m(q.$$.fragment,e),m(h),m(C.$$.fragment,e),m(H.$$.fragment,e),m(A.$$.fragment,e),m(S.$$.fragment,e),m(F.$$.fragment,e),m(B.$$.fragment,e),m(u.$$.fragment,e),m(b),m(ae.$$.fragment,e),m(w),m(oe.$$.fragment,e),m(ne.$$.fragment,e),ve=!0)},o(e){c(s.$$.fragment,e),c(T.$$.fragment,e),c($),c(q.$$.fragment,e),c(h),c(C.$$.fragment,e),c(H.$$.fragment,e),c(A.$$.fragment,e),c(S.$$.fragment,e),c(F.$$.fragment,e),c(B.$$.fragment,e),c(u.$$.fragment,e),c(b),c(ae.$$.fragment,e),c(w),c(oe.$$.fragment,e),c(ne.$$.fragment,e),ve=!1},d(e){e&&(_(r),_(v),_(i),_(Q),_(N),_(V),_(z),_(J),_(j),_(D),_(E),_(W),_(G),_(M),_(Z),_(x),_(L),_(ee),_(te),_(me),_(ge),_(he),_(K),_(be),_(ue),_(we),_(P),_(ke),_(ce),_(ye)),$e.d(e),_(o),_(a),_(f),k(s,e),k(T,e),$&&$.d(e),k(q,e),h&&h.d(e),k(C,e),k(H,e),k(A,e),k(S,e),k(F,e),k(B,e),k(u,e),b&&b.d(e),k(ae,e),w&&w.d(e),k(oe,e),k(ne,e)}}}function It(n,r,o){let a,f;Pe(n,vt,u=>o(24,a=u)),Pe(n,Xe,u=>o(28,f=u));let{data:v}=r,{data:i={},customFormattingSettings:U,__db:ie,inputs:l}=v;nt(Xe,f="82bcaacd39c31899316c3202cbe54ae5",f);let le=mt(pt(l));rt(le.subscribe(u=>o(7,l=u))),st(ft,{getCustomFormats:()=>U.customFormats||[]});const Q=(u,me)=>bt(ie.query,u,{query_name:me});ut(Q);let s=a.params;_t(()=>!0);let N={initialData:void 0,initialError:void 0},T=re`select distinct model_name
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
order by model_name`,V=`select distinct model_name
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
order by model_name`;i.available_models_data&&(i.available_models_data instanceof Error?N.initialError=i.available_models_data:N.initialData=i.available_models_data,i.available_models_columns&&(N.knownColumns=i.available_models_columns));let z,J=!1;const j=Te.createReactive({callback:u=>{o(1,z=u)},execFn:Q},{id:"available_models",...N});j(V,{noResolve:T,...N}),globalThis[Symbol.for("available_models")]={get value(){return z}};let q={initialData:void 0,initialError:void 0},D=re`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')`,E=`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')`;i.compound_stats_predicted_data&&(i.compound_stats_predicted_data instanceof Error?q.initialError=i.compound_stats_predicted_data:q.initialData=i.compound_stats_predicted_data,i.compound_stats_predicted_columns&&(q.knownColumns=i.compound_stats_predicted_columns));let de,W=!1;const G=Te.createReactive({callback:u=>{o(2,de=u)},execFn:Q},{id:"compound_stats_predicted",...q});G(E,{noResolve:D,...q}),globalThis[Symbol.for("compound_stats_predicted")]={get value(){return de}};let C={initialData:void 0,initialError:void 0},M=re`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')
order by insert_timestamp desc`,H=`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')
order by insert_timestamp desc`;i.compound_occurrences_predicted_data&&(i.compound_occurrences_predicted_data instanceof Error?C.initialError=i.compound_occurrences_predicted_data:C.initialData=i.compound_occurrences_predicted_data,i.compound_occurrences_predicted_columns&&(C.knownColumns=i.compound_occurrences_predicted_columns));let Z,A=!1;const x=Te.createReactive({callback:u=>{o(3,Z=u)},execFn:Q},{id:"compound_occurrences_predicted",...C});x(H,{noResolve:M,...C}),globalThis[Symbol.for("compound_occurrences_predicted")]={get value(){return Z}};let S={initialData:void 0,initialError:void 0},L=re`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')
group by date
order by date`,F=`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')
group by date
order by date`;i.compound_over_time_predicted_data&&(i.compound_over_time_predicted_data instanceof Error?S.initialError=i.compound_over_time_predicted_data:S.initialData=i.compound_over_time_predicted_data,i.compound_over_time_predicted_columns&&(S.knownColumns=i.compound_over_time_predicted_columns));let ee,B=!1;const te=Te.createReactive({callback:u=>{o(4,ee=u)},execFn:Q},{id:"compound_over_time_predicted",...S});return te(F,{noResolve:L,...S}),globalThis[Symbol.for("compound_over_time_predicted")]={get value(){return ee}},n.$$set=u=>{"data"in u&&o(5,v=u.data)},n.$$.update=()=>{n.$$.dirty[0]&32&&o(6,{data:i={},customFormattingSettings:U,__db:ie}=v,i),n.$$.dirty[0]&64&&ct.set(Object.keys(i).length>0),n.$$.dirty[0]&16777216&&o(0,s=a.params),n.$$.dirty[0]&1&&o(9,T=re`select distinct model_name
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
order by model_name`),n.$$.dirty[0]&1&&o(10,V=`select distinct model_name
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
order by model_name`),n.$$.dirty[0]&3840&&(T||!J?T||(j(V,{noResolve:T,...N}),o(11,J=!0)):j(V,{noResolve:T})),n.$$.dirty[0]&129&&o(13,D=re`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')`),n.$$.dirty[0]&129&&o(14,E=`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')`),n.$$.dirty[0]&61440&&(D||!W?D||(G(E,{noResolve:D,...q}),o(15,W=!0)):G(E,{noResolve:D})),n.$$.dirty[0]&129&&o(17,M=re`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')
order by insert_timestamp desc`),n.$$.dirty[0]&129&&o(18,H=`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')
order by insert_timestamp desc`),n.$$.dirty[0]&983040&&(M||!A?M||(x(H,{noResolve:M,...C}),o(19,A=!0)):x(H,{noResolve:M})),n.$$.dirty[0]&129&&o(21,L=re`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')
group by date
order by date`),n.$$.dirty[0]&129&&o(22,F=`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_compounds_flat_prediction
where user_hash_id = '${s.user_hash_id}'
  and compound = '${s.compound}'
  and ('${l.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${l.model_filter.value}')
group by date
order by date`),n.$$.dirty[0]&15728640&&(L||!B?L||(te(F,{noResolve:L,...S}),o(23,B=!0)):te(F,{noResolve:L}))},[s,z,de,Z,ee,v,i,l,N,T,V,J,q,D,E,W,C,M,H,A,S,L,F,B,a]}class Bt extends it{constructor(r){super(),lt(this,r,It,Rt,tt,{data:5},null,[-1,-1])}}export{Bt as component};
