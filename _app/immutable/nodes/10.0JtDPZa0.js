import{s as _a,d as s,C as ma,i as o,a as ve,b as k,c as u,h as da,e as U,f as xe,A as ea,q as Oe,g as ke,j as c,k as Q,t as Fe,l as aa,m as fa,o as ua,n as ca,p as ga,r as Le}from"../chunks/scheduler.DgFQApTg.js";import{S as pa,i as va,d as y,t as g,a as d,e as Ce,m as R,c as T,b as H,g as Me}from"../chunks/index.vp3cdaT4.js";import{D as $a,e as ha,s as ba,Q as Ae,p as wa,r as ta,C as ka}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.4wjKAic4.js";import{w as ya}from"../chunks/entry.f9RG9seA.js";import{h as ie}from"../chunks/button.BNY8BBjJ.js";import{D as Ra,Q as Ne}from"../chunks/Value.BYEkrbxH.js";import{p as Ta}from"../chunks/stores.CcaItnXN.js";import{L as la}from"../chunks/LinkButton.CfLAoZGN.js";import{B as Ha}from"../chunks/BarChart.lynrH73K.js";import{B as _e}from"../chunks/BigValue.DIBHjl6k.js";import{L as Ia}from"../chunks/LineChart.ZSsbzZEq.js";import{p as Sa}from"../chunks/profile.BW8tN6E9.js";function qa(r){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:Le,p:Le,d:Le}}function Ea(r){let n;return{c(){n=Fe("Back to User Overview")},l(l){n=Oe(l,"Back to User Overview")},m(l,t){o(l,n,t)},d(l){l&&s(n)}}}function Ca(r){let n;return{c(){n=Fe("All Allergens")},l(l){n=Oe(l,"All Allergens")},m(l,t){o(l,n,t)},d(l){l&&s(n)}}}function ra(r){let n,l;return n=new Ne({props:{queryID:"available_models",queryResult:r[1]}}),{c(){H(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,p){R(n,t,p),l=!0},p(t,p){const v={};p[0]&2&&(v.queryResult=t[1]),n.$set(v)},i(t){l||(d(n.$$.fragment,t),l=!0)},o(t){g(n.$$.fragment,t),l=!1},d(t){y(n,t)}}}function na(r){let n,l;return n=new Ne({props:{queryID:"allergen_stats",queryResult:r[2]}}),{c(){H(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,p){R(n,t,p),l=!0},p(t,p){const v={};p[0]&4&&(v.queryResult=t[2]),n.$set(v)},i(t){l||(d(n.$$.fragment,t),l=!0)},o(t){g(n.$$.fragment,t),l=!1},d(t){y(n,t)}}}function sa(r){let n,l;return n=new Ne({props:{queryID:"allergen_occurrences",queryResult:r[3]}}),{c(){H(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,p){R(n,t,p),l=!0},p(t,p){const v={};p[0]&8&&(v.queryResult=t[3]),n.$set(v)},i(t){l||(d(n.$$.fragment,t),l=!0)},o(t){g(n.$$.fragment,t),l=!1},d(t){y(n,t)}}}function ia(r){let n,l;return n=new Ne({props:{queryID:"allergen_over_time",queryResult:r[4]}}),{c(){H(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,p){R(n,t,p),l=!0},p(t,p){const v={};p[0]&16&&(v.queryResult=t[4]),n.$set(v)},i(t){l||(d(n.$$.fragment,t),l=!0)},o(t){g(n.$$.fragment,t),l=!1},d(t){y(n,t)}}}function Ma(r){let n,l,t,p,v,_,G,me,m=r[0].allergen+"",de,V,i,O,I,j,K,W,z,S,F,C,fe='<a href="#summary-statistics-last-3-months">Summary Statistics (Last 3 Months)</a>',Z,P,q,N,M,x,L,ee,E,D,A,ae,B,te,f,ue,$e,ye,X,De='<a href="#all-occurrences-last-3-months">All Occurrences (Last 3 Months)</a>',Re,ce,le,Te,Y,Be='<a href="#health-scores-over-time">Health Scores Over Time</a>',He,ge,re,Ie,ne,Se,he,qe,J,Ue='<a href="#eu-allergen-reference">EU Allergen Reference</a>',Ee,se,Qe='<thead class="markdown"><tr class="markdown"><th align="center" class="markdown">Letter</th> <th align="left" class="markdown">Allergen</th></tr></thead> <tbody class="markdown"><tr class="markdown"><td align="center" class="markdown">A</td> <td align="left" class="markdown">Gluten (wheat, rye, barley, oats)</td></tr> <tr class="markdown"><td align="center" class="markdown">B</td> <td align="left" class="markdown">Crustaceans</td></tr> <tr class="markdown"><td align="center" class="markdown">C</td> <td align="left" class="markdown">Eggs</td></tr> <tr class="markdown"><td align="center" class="markdown">D</td> <td align="left" class="markdown">Fish</td></tr> <tr class="markdown"><td align="center" class="markdown">E</td> <td align="left" class="markdown">Peanuts</td></tr> <tr class="markdown"><td align="center" class="markdown">F</td> <td align="left" class="markdown">Soybeans</td></tr> <tr class="markdown"><td align="center" class="markdown">G</td> <td align="left" class="markdown">Milk (lactose)</td></tr> <tr class="markdown"><td align="center" class="markdown">H</td> <td align="left" class="markdown">Nuts (almonds, hazelnuts, walnuts, cashews, pecans, Brazil nuts, pistachios, macadamia)</td></tr> <tr class="markdown"><td align="center" class="markdown">L</td> <td align="left" class="markdown">Celery</td></tr> <tr class="markdown"><td align="center" class="markdown">M</td> <td align="left" class="markdown">Mustard</td></tr> <tr class="markdown"><td align="center" class="markdown">N</td> <td align="left" class="markdown">Sesame</td></tr> <tr class="markdown"><td align="center" class="markdown">O</td> <td align="left" class="markdown">Sulphites</td></tr> <tr class="markdown"><td align="center" class="markdown">P</td> <td align="left" class="markdown">Lupin</td></tr> <tr class="markdown"><td align="center" class="markdown">R</td> <td align="left" class="markdown">Molluscs</td></tr></tbody>',be;function oa(e,a){return qa}let we=oa()(r);i=new la({props:{url:"/users/"+r[0].user_hash_id,$$slots:{default:[Ea]},$$scope:{ctx:r}}}),I=new la({props:{url:"/users/"+r[0].user_hash_id+"/allergens-prediction",$$slots:{default:[Ca]},$$scope:{ctx:r}}});let $=r[1]&&ra(r);S=new Ra({props:{name:"model_filter",data:r[1],value:"model_name",title:"Model",defaultValue:"gemma-3-27b-it"}});let h=r[2]&&na(r);q=new _e({props:{data:r[2],value:"total_occurrences",title:"Total Occurrences"}}),M=new _e({props:{data:r[2],value:"avg_confidence",title:"Avg Confidence",fmt:"num2"}}),L=new _e({props:{data:r[2],value:"avg_sleep",title:"Avg Sleep Score",fmt:"num2"}}),E=new _e({props:{data:r[2],value:"avg_mental_state",title:"Avg Mental State",fmt:"num2"}}),A=new _e({props:{data:r[2],value:"avg_bloating",title:"Avg Bloating Score",fmt:"num2"}}),B=new _e({props:{data:r[2],value:"avg_reflux",title:"Avg Reflux Score",fmt:"num2"}}),f=new _e({props:{data:r[2],value:"avg_finger",title:"Avg Finger Score",fmt:"num2"}});let b=r[3]&&sa(r);le=new $a({props:{data:r[3],search:"true"}});let w=r[4]&&ia(r);return re=new Ia({props:{data:r[4],x:"date",y:["avg_sleep","avg_mental_state","avg_bloating","avg_reflux","avg_finger"]}}),ne=new Ha({props:{data:r[4],x:"date",y:"occurrences"}}),{c(){n=c(),we.c(),l=Q("meta"),t=Q("meta"),p=xe(),v=c(),_=Q("h1"),G=Q("a"),me=Fe("Allergen: "),de=Fe(m),V=c(),H(i.$$.fragment),O=c(),H(I.$$.fragment),j=c(),K=Q("hr"),W=c(),$&&$.c(),z=c(),H(S.$$.fragment),F=c(),C=Q("h2"),C.innerHTML=fe,Z=c(),h&&h.c(),P=c(),H(q.$$.fragment),N=c(),H(M.$$.fragment),x=c(),H(L.$$.fragment),ee=c(),H(E.$$.fragment),D=c(),H(A.$$.fragment),ae=c(),H(B.$$.fragment),te=c(),H(f.$$.fragment),ue=c(),$e=Q("hr"),ye=c(),X=Q("h2"),X.innerHTML=De,Re=c(),b&&b.c(),ce=c(),H(le.$$.fragment),Te=c(),Y=Q("h2"),Y.innerHTML=Be,He=c(),w&&w.c(),ge=c(),H(re.$$.fragment),Ie=c(),H(ne.$$.fragment),Se=c(),he=Q("hr"),qe=c(),J=Q("h2"),J.innerHTML=Ue,Ee=c(),se=Q("table"),se.innerHTML=Qe,this.h()},l(e){n=u(e);const a=da("svelte-2igo1p",document.head);we.l(a),l=U(a,"META",{name:!0,content:!0}),t=U(a,"META",{name:!0,content:!0}),p=xe(),a.forEach(s),v=u(e),_=U(e,"H1",{class:!0,id:!0});var pe=ea(_);G=U(pe,"A",{href:!0});var oe=ea(G);me=Oe(oe,"Allergen: "),de=Oe(oe,m),oe.forEach(s),pe.forEach(s),V=u(e),T(i.$$.fragment,e),O=u(e),T(I.$$.fragment,e),j=u(e),K=U(e,"HR",{class:!0}),W=u(e),$&&$.l(e),z=u(e),T(S.$$.fragment,e),F=u(e),C=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ke(C)!=="svelte-145lwlg"&&(C.innerHTML=fe),Z=u(e),h&&h.l(e),P=u(e),T(q.$$.fragment,e),N=u(e),T(M.$$.fragment,e),x=u(e),T(L.$$.fragment,e),ee=u(e),T(E.$$.fragment,e),D=u(e),T(A.$$.fragment,e),ae=u(e),T(B.$$.fragment,e),te=u(e),T(f.$$.fragment,e),ue=u(e),$e=U(e,"HR",{class:!0}),ye=u(e),X=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ke(X)!=="svelte-13sdye8"&&(X.innerHTML=De),Re=u(e),b&&b.l(e),ce=u(e),T(le.$$.fragment,e),Te=u(e),Y=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ke(Y)!=="svelte-1tad4ik"&&(Y.innerHTML=Be),He=u(e),w&&w.l(e),ge=u(e),T(re.$$.fragment,e),Ie=u(e),T(ne.$$.fragment,e),Se=u(e),he=U(e,"HR",{class:!0}),qe=u(e),J=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ke(J)!=="svelte-1vwrb5z"&&(J.innerHTML=Ue),Ee=u(e),se=U(e,"TABLE",{class:!0,"data-svelte-h":!0}),ke(se)!=="svelte-vql6jc"&&(se.innerHTML=Qe),this.h()},h(){k(l,"name","twitter:card"),k(l,"content","summary_large_image"),k(t,"name","twitter:site"),k(t,"content","@evidence_dev"),k(G,"href","#allergen-paramsallergen"),k(_,"class","markdown"),k(_,"id","allergen-paramsallergen"),k(K,"class","markdown"),k(C,"class","markdown"),k(C,"id","summary-statistics-last-3-months"),k($e,"class","markdown"),k(X,"class","markdown"),k(X,"id","all-occurrences-last-3-months"),k(Y,"class","markdown"),k(Y,"id","health-scores-over-time"),k(he,"class","markdown"),k(J,"class","markdown"),k(J,"id","eu-allergen-reference"),k(se,"class","markdown")},m(e,a){o(e,n,a),we.m(document.head,null),ve(document.head,l),ve(document.head,t),ve(document.head,p),o(e,v,a),o(e,_,a),ve(_,G),ve(G,me),ve(G,de),o(e,V,a),R(i,e,a),o(e,O,a),R(I,e,a),o(e,j,a),o(e,K,a),o(e,W,a),$&&$.m(e,a),o(e,z,a),R(S,e,a),o(e,F,a),o(e,C,a),o(e,Z,a),h&&h.m(e,a),o(e,P,a),R(q,e,a),o(e,N,a),R(M,e,a),o(e,x,a),R(L,e,a),o(e,ee,a),R(E,e,a),o(e,D,a),R(A,e,a),o(e,ae,a),R(B,e,a),o(e,te,a),R(f,e,a),o(e,ue,a),o(e,$e,a),o(e,ye,a),o(e,X,a),o(e,Re,a),b&&b.m(e,a),o(e,ce,a),R(le,e,a),o(e,Te,a),o(e,Y,a),o(e,He,a),w&&w.m(e,a),o(e,ge,a),R(re,e,a),o(e,Ie,a),R(ne,e,a),o(e,Se,a),o(e,he,a),o(e,qe,a),o(e,J,a),o(e,Ee,a),o(e,se,a),be=!0},p(e,a){we.p(e,a),(!be||a[0]&1)&&m!==(m=e[0].allergen+"")&&ma(de,m);const pe={};a[0]&1&&(pe.url="/users/"+e[0].user_hash_id),a[1]&32&&(pe.$$scope={dirty:a,ctx:e}),i.$set(pe);const oe={};a[0]&1&&(oe.url="/users/"+e[0].user_hash_id+"/allergens-prediction"),a[1]&32&&(oe.$$scope={dirty:a,ctx:e}),I.$set(oe),e[1]?$?($.p(e,a),a[0]&2&&d($,1)):($=ra(e),$.c(),d($,1),$.m(z.parentNode,z)):$&&(Me(),g($,1,1,()=>{$=null}),Ce());const Ge={};a[0]&2&&(Ge.data=e[1]),S.$set(Ge),e[2]?h?(h.p(e,a),a[0]&4&&d(h,1)):(h=na(e),h.c(),d(h,1),h.m(P.parentNode,P)):h&&(Me(),g(h,1,1,()=>{h=null}),Ce());const Ve={};a[0]&4&&(Ve.data=e[2]),q.$set(Ve);const je={};a[0]&4&&(je.data=e[2]),M.$set(je);const ze={};a[0]&4&&(ze.data=e[2]),L.$set(ze);const Pe={};a[0]&4&&(Pe.data=e[2]),E.$set(Pe);const Ke={};a[0]&4&&(Ke.data=e[2]),A.$set(Ke);const Xe={};a[0]&4&&(Xe.data=e[2]),B.$set(Xe);const Ye={};a[0]&4&&(Ye.data=e[2]),f.$set(Ye),e[3]?b?(b.p(e,a),a[0]&8&&d(b,1)):(b=sa(e),b.c(),d(b,1),b.m(ce.parentNode,ce)):b&&(Me(),g(b,1,1,()=>{b=null}),Ce());const Je={};a[0]&8&&(Je.data=e[3]),le.$set(Je),e[4]?w?(w.p(e,a),a[0]&16&&d(w,1)):(w=ia(e),w.c(),d(w,1),w.m(ge.parentNode,ge)):w&&(Me(),g(w,1,1,()=>{w=null}),Ce());const We={};a[0]&16&&(We.data=e[4]),re.$set(We);const Ze={};a[0]&16&&(Ze.data=e[4]),ne.$set(Ze)},i(e){be||(d(i.$$.fragment,e),d(I.$$.fragment,e),d($),d(S.$$.fragment,e),d(h),d(q.$$.fragment,e),d(M.$$.fragment,e),d(L.$$.fragment,e),d(E.$$.fragment,e),d(A.$$.fragment,e),d(B.$$.fragment,e),d(f.$$.fragment,e),d(b),d(le.$$.fragment,e),d(w),d(re.$$.fragment,e),d(ne.$$.fragment,e),be=!0)},o(e){g(i.$$.fragment,e),g(I.$$.fragment,e),g($),g(S.$$.fragment,e),g(h),g(q.$$.fragment,e),g(M.$$.fragment,e),g(L.$$.fragment,e),g(E.$$.fragment,e),g(A.$$.fragment,e),g(B.$$.fragment,e),g(f.$$.fragment,e),g(b),g(le.$$.fragment,e),g(w),g(re.$$.fragment,e),g(ne.$$.fragment,e),be=!1},d(e){e&&(s(n),s(v),s(_),s(V),s(O),s(j),s(K),s(W),s(z),s(F),s(C),s(Z),s(P),s(N),s(x),s(ee),s(D),s(ae),s(te),s(ue),s($e),s(ye),s(X),s(Re),s(ce),s(Te),s(Y),s(He),s(ge),s(Ie),s(Se),s(he),s(qe),s(J),s(Ee),s(se)),we.d(e),s(l),s(t),s(p),y(i,e),y(I,e),$&&$.d(e),y(S,e),h&&h.d(e),y(q,e),y(M,e),y(L,e),y(E,e),y(A,e),y(B,e),y(f,e),b&&b.d(e),y(le,e),w&&w.d(e),y(re,e),y(ne,e)}}}function Aa(r,n,l){let t,p;aa(r,Ta,f=>l(24,t=f)),aa(r,ta,f=>l(28,p=f));let{data:v}=n,{data:_={},customFormattingSettings:G,__db:me,inputs:m}=v;fa(ta,p="d7fb55f1e3db3b9ef083848fa0c300f1",p);let de=ha(ya(m));ua(de.subscribe(f=>l(7,m=f))),ca(ka,{getCustomFormats:()=>G.customFormats||[]});const V=(f,ue)=>Sa(me.query,f,{query_name:ue});ba(V);let i=t.params;ga(()=>!0);let O={initialData:void 0,initialError:void 0},I=ie`select distinct model_name
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
order by model_name`,j=`select distinct model_name
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
order by model_name`;_.available_models_data&&(_.available_models_data instanceof Error?O.initialError=_.available_models_data:O.initialData=_.available_models_data,_.available_models_columns&&(O.knownColumns=_.available_models_columns));let K,W=!1;const z=Ae.createReactive({callback:f=>{l(1,K=f)},execFn:V},{id:"available_models",...O});z(j,{noResolve:I,...O}),globalThis[Symbol.for("available_models")]={get value(){return K}};let S={initialData:void 0,initialError:void 0},F=ie`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')`,C=`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')`;_.allergen_stats_data&&(_.allergen_stats_data instanceof Error?S.initialError=_.allergen_stats_data:S.initialData=_.allergen_stats_data,_.allergen_stats_columns&&(S.knownColumns=_.allergen_stats_columns));let fe,Z=!1;const P=Ae.createReactive({callback:f=>{l(2,fe=f)},execFn:V},{id:"allergen_stats",...S});P(C,{noResolve:F,...S}),globalThis[Symbol.for("allergen_stats")]={get value(){return fe}};let q={initialData:void 0,initialError:void 0},N=ie`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')
order by insert_timestamp desc`,M=`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')
order by insert_timestamp desc`;_.allergen_occurrences_data&&(_.allergen_occurrences_data instanceof Error?q.initialError=_.allergen_occurrences_data:q.initialData=_.allergen_occurrences_data,_.allergen_occurrences_columns&&(q.knownColumns=_.allergen_occurrences_columns));let x,L=!1;const ee=Ae.createReactive({callback:f=>{l(3,x=f)},execFn:V},{id:"allergen_occurrences",...q});ee(M,{noResolve:N,...q}),globalThis[Symbol.for("allergen_occurrences")]={get value(){return x}};let E={initialData:void 0,initialError:void 0},D=ie`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')
group by date
order by date`,A=`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')
group by date
order by date`;_.allergen_over_time_data&&(_.allergen_over_time_data instanceof Error?E.initialError=_.allergen_over_time_data:E.initialData=_.allergen_over_time_data,_.allergen_over_time_columns&&(E.knownColumns=_.allergen_over_time_columns));let ae,B=!1;const te=Ae.createReactive({callback:f=>{l(4,ae=f)},execFn:V},{id:"allergen_over_time",...E});return te(A,{noResolve:D,...E}),globalThis[Symbol.for("allergen_over_time")]={get value(){return ae}},r.$$set=f=>{"data"in f&&l(5,v=f.data)},r.$$.update=()=>{r.$$.dirty[0]&32&&l(6,{data:_={},customFormattingSettings:G,__db:me}=v,_),r.$$.dirty[0]&64&&wa.set(Object.keys(_).length>0),r.$$.dirty[0]&16777216&&l(0,i=t.params),r.$$.dirty[0]&1&&l(9,I=ie`select distinct model_name
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
order by model_name`),r.$$.dirty[0]&1&&l(10,j=`select distinct model_name
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
order by model_name`),r.$$.dirty[0]&3840&&(I||!W?I||(z(j,{noResolve:I,...O}),l(11,W=!0)):z(j,{noResolve:I})),r.$$.dirty[0]&129&&l(13,F=ie`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')`),r.$$.dirty[0]&129&&l(14,C=`select
  count(*) as total_occurrences,
  avg(confidence_score) as avg_confidence,
  avg(state_point) as avg_mental_state,
  avg(sleep_point) as avg_sleep,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')`),r.$$.dirty[0]&61440&&(F||!Z?F||(P(C,{noResolve:F,...S}),l(15,Z=!0)):P(C,{noResolve:F})),r.$$.dirty[0]&129&&l(17,N=ie`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')
order by insert_timestamp desc`),r.$$.dirty[0]&129&&l(18,M=`select
  insert_timestamp,
  food_name,
  confidence_score,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')
order by insert_timestamp desc`),r.$$.dirty[0]&983040&&(N||!L?N||(ee(M,{noResolve:N,...q}),l(19,L=!0)):ee(M,{noResolve:N})),r.$$.dirty[0]&129&&l(21,D=ie`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')
group by date
order by date`),r.$$.dirty[0]&129&&l(22,A=`select
  cast(insert_timestamp as date) as date,
  avg(sleep_point) as avg_sleep,
  avg(state_point) as avg_mental_state,
  avg(bloating_point) as avg_bloating,
  avg(reflux_point) as avg_reflux,
  avg(finger_point) as avg_finger,
  count(*) as occurrences
from motherduck.food_table_allergens_flat_prediction
where user_hash_id = '${i.user_hash_id}'
  and allergen = '${i.allergen}'
  and ('${m.model_filter}' IN ('', 'undefined', 'null') OR model_name = '${m.model_filter.value}')
group by date
order by date`),r.$$.dirty[0]&15728640&&(D||!B?D||(te(A,{noResolve:D,...E}),l(23,B=!0)):te(A,{noResolve:D}))},[i,K,fe,x,ae,v,_,m,O,I,j,W,S,F,C,Z,q,N,M,L,E,D,A,B,t]}class Ka extends pa{constructor(n){super(),va(this,n,Aa,Ma,_a,{data:5},null,[-1,-1])}}export{Ka as component};
