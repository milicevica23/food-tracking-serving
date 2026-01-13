import{s as Ue,d as u,i as p,f as $e,K as Qe,r as ye,u as je,v as We,w as Ye,x as Be,b as D,a as Z,e as G,A as me,k as V,C as Ke,c as E,h as Xe,q as x,j as C,t as ee,l as Ae,m as ze,o as Je,n as Ze,p as xe,g as de}from"../chunks/scheduler.DgFQApTg.js";import{S as Oe,i as Ge,t as y,a as b,g as fe,e as ce,d as M,m as N,c as P,b as U}from"../chunks/index.vp3cdaT4.js";import{m as et,e as tt,s as rt,Q as be,p as at,D as st,r as Ie,C as ot}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.4wjKAic4.js";import{w as nt}from"../chunks/entry.f9RG9seA.js";import{h as ne}from"../chunks/button.BNY8BBjJ.js";import{D as lt,Q as ke,V as ve}from"../chunks/Value.BYEkrbxH.js";import{p as it}from"../chunks/stores.CcaItnXN.js";import{L as ge}from"../chunks/LinkButton.CfLAoZGN.js";import{C as _t}from"../chunks/CalendarHeatmap.DoFnMMVf.js";import{L as ut}from"../chunks/LineChart.ZSsbzZEq.js";import{p as dt}from"../chunks/profile.BW8tN6E9.js";function mt(o){let t,e,r,n;const m=o[3].default,s=je(m,o,o[2],null);return{c(){t=V("div"),e=V("div"),s&&s.c(),this.h()},l(d){t=G(d,"DIV",{class:!0,role:!0});var c=me(t);e=G(c,"DIV",{});var f=me(e);s&&s.l(f),f.forEach(u),c.forEach(u),this.h()},h(){D(t,"class",r="alert "+o[0]+" svelte-1w1ov1c"),D(t,"role","alert")},m(d,c){p(d,t,c),Z(t,e),s&&s.m(e,null),n=!0},p(d,c){s&&s.p&&(!n||c&4)&&We(s,m,d,d[2],n?Be(m,d[2],c,null):Ye(d[2]),null),(!n||c&1&&r!==(r="alert "+d[0]+" svelte-1w1ov1c"))&&D(t,"class",r)},i(d){n||(b(s,d),n=!0)},o(d){y(s,d),n=!1},d(d){d&&u(t),s&&s.d(d)}}}function ft(o){let t,e;return t=new et({props:{inputType:"Alert",height:"42",error:["No Alert content found"]}}),{c(){U(t.$$.fragment)},l(r){P(t.$$.fragment,r)},m(r,n){N(t,r,n),e=!0},p:ye,i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){M(t,r)}}}function ct(o){let t,e,r,n;const m=[ft,mt],s=[];function d(c,f){return c[1].default?1:0}return t=d(o),e=s[t]=m[t](o),{c(){e.c(),r=$e()},l(c){e.l(c),r=$e()},m(c,f){s[t].m(c,f),p(c,r,f),n=!0},p(c,[f]){let Q=t;t=d(c),t===Q?s[t].p(c,f):(fe(),y(s[Q],1,1,()=>{s[Q]=null}),ce(),e=s[t],e?e.p(c,f):(e=s[t]=m[t](c),e.c()),b(e,1),e.m(r.parentNode,r))},i(c){n||(b(e),n=!0)},o(c){y(e),n=!1},d(c){c&&u(r),s[t].d(c)}}}const Re={default:"base",danger:"negative",success:"positive"},pt=o=>Object.keys(Re).includes(o),$t=o=>pt(o)?(console.warn(`[Alert] The status "${o}" is deprecated. Please use "${Re[o]}" instead.`),Re[o]):o;function ht(o,t,e){let{$$slots:r={},$$scope:n}=t;const m=Qe(r);let{status:s="base"}=t;return o.$$set=d=>{"status"in d&&e(0,s=d.status),"$$scope"in d&&e(2,n=d.$$scope)},o.$$.update=()=>{o.$$.dirty&1&&e(0,s=$t(s))},[s,m,n,r]}class Ve extends Oe{constructor(t){super(),Ge(this,t,ht,ct,Ue,{status:0})}}function bt(o){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:ye,p:ye,d:ye}}function Fe(o){let t,e;return t=new ke({props:{queryID:"available_models",queryResult:o[1]}}),{c(){U(t.$$.fragment)},l(r){P(t.$$.fragment,r)},m(r,n){N(t,r,n),e=!0},p(r,n){const m={};n[0]&2&&(m.queryResult=r[1]),t.$set(m)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){M(t,r)}}}function Le(o){let t,e;return t=new ke({props:{queryID:"food_table_total_entries_count",queryResult:o[2]}}),{c(){U(t.$$.fragment)},l(r){P(t.$$.fragment,r)},m(r,n){N(t,r,n),e=!0},p(r,n){const m={};n[0]&4&&(m.queryResult=r[2]),t.$set(m)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){M(t,r)}}}function gt(o){let t,e,r,n,m,s,d,c,f,Q,F,$,H,T,q='<a href="#analysis-pages">Analysis Pages</a>',R,_,v,S,j,B,X,k,w,Y,L,K,i,g='<a href="#entry-history">Entry History</a>',z,A,te,J,ie,le,_e,W,ae='<a href="#food-entries">Food Entries</a>',se,oe,re,ue,h=o[3]&&Me(o);m=new ve({props:{data:o[2],column:"total_entries"}}),c=new ve({props:{data:o[2],column:"total_protein_grams"}}),$=new Ve({props:{$$slots:{default:[kt]},$$scope:{ctx:o}}}),_=new ge({props:{url:"/users/"+o[0].user_hash_id+"/ingredients-prediction",$$slots:{default:[vt]},$$scope:{ctx:o}}}),S=new ge({props:{url:"/users/"+o[0].user_hash_id+"/allergens-prediction",$$slots:{default:[wt]},$$scope:{ctx:o}}}),B=new ge({props:{url:"/users/"+o[0].user_hash_id+"/compounds-prediction",$$slots:{default:[Tt]},$$scope:{ctx:o}}}),k=new ge({props:{url:"/users/"+o[0].user_hash_id+"/protein-prediction",$$slots:{default:[Et]},$$scope:{ctx:o}}});let I=o[4]&&Ne(o);A=new _t({props:{data:o[4],date:"insert_day",value:"count_entries",title:"Entries by Day",subtitle:"Daily entries for this user"}}),J=new ut({props:{data:o[4],x:"insert_day",y:"count_entries",yAxisTitle:"Survey entries"}});let O=o[5]&&Pe(o);return re=new st({props:{data:o[5],search:"true"}}),{c(){h&&h.c(),t=C(),e=V("p"),r=ee("This user has "),n=V("strong"),U(m.$$.fragment),s=ee(" entries with "),d=V("strong"),U(c.$$.fragment),f=ee("g"),Q=ee(" total protein tracked."),F=C(),U($.$$.fragment),H=C(),T=V("h2"),T.innerHTML=q,R=C(),U(_.$$.fragment),v=C(),U(S.$$.fragment),j=C(),U(B.$$.fragment),X=C(),U(k.$$.fragment),w=C(),Y=V("hr"),L=C(),I&&I.c(),K=C(),i=V("h2"),i.innerHTML=g,z=C(),U(A.$$.fragment),te=C(),U(J.$$.fragment),ie=C(),le=V("hr"),_e=C(),W=V("h2"),W.innerHTML=ae,se=C(),O&&O.c(),oe=C(),U(re.$$.fragment),this.h()},l(a){h&&h.l(a),t=E(a),e=G(a,"P",{class:!0});var l=me(e);r=x(l,"This user has "),n=G(l,"STRONG",{class:!0});var he=me(n);P(m.$$.fragment,he),he.forEach(u),s=x(l," entries with "),d=G(l,"STRONG",{class:!0});var pe=me(d);P(c.$$.fragment,pe),f=x(pe,"g"),pe.forEach(u),Q=x(l," total protein tracked."),l.forEach(u),F=E(a),P($.$$.fragment,a),H=E(a),T=G(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(T)!=="svelte-19ue202"&&(T.innerHTML=q),R=E(a),P(_.$$.fragment,a),v=E(a),P(S.$$.fragment,a),j=E(a),P(B.$$.fragment,a),X=E(a),P(k.$$.fragment,a),w=E(a),Y=G(a,"HR",{class:!0}),L=E(a),I&&I.l(a),K=E(a),i=G(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(i)!=="svelte-15gokdy"&&(i.innerHTML=g),z=E(a),P(A.$$.fragment,a),te=E(a),P(J.$$.fragment,a),ie=E(a),le=G(a,"HR",{class:!0}),_e=E(a),W=G(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(W)!=="svelte-1lcxihw"&&(W.innerHTML=ae),se=E(a),O&&O.l(a),oe=E(a),P(re.$$.fragment,a),this.h()},h(){D(n,"class","markdown"),D(d,"class","markdown"),D(e,"class","markdown"),D(T,"class","markdown"),D(T,"id","analysis-pages"),D(Y,"class","markdown"),D(i,"class","markdown"),D(i,"id","entry-history"),D(le,"class","markdown"),D(W,"class","markdown"),D(W,"id","food-entries")},m(a,l){h&&h.m(a,l),p(a,t,l),p(a,e,l),Z(e,r),Z(e,n),N(m,n,null),Z(e,s),Z(e,d),N(c,d,null),Z(d,f),Z(e,Q),p(a,F,l),N($,a,l),p(a,H,l),p(a,T,l),p(a,R,l),N(_,a,l),p(a,v,l),N(S,a,l),p(a,j,l),N(B,a,l),p(a,X,l),N(k,a,l),p(a,w,l),p(a,Y,l),p(a,L,l),I&&I.m(a,l),p(a,K,l),p(a,i,l),p(a,z,l),N(A,a,l),p(a,te,l),N(J,a,l),p(a,ie,l),p(a,le,l),p(a,_e,l),p(a,W,l),p(a,se,l),O&&O.m(a,l),p(a,oe,l),N(re,a,l),ue=!0},p(a,l){a[3]?h?(h.p(a,l),l[0]&8&&b(h,1)):(h=Me(a),h.c(),b(h,1),h.m(t.parentNode,t)):h&&(fe(),y(h,1,1,()=>{h=null}),ce());const he={};l[0]&4&&(he.data=a[2]),m.$set(he);const pe={};l[0]&4&&(pe.data=a[2]),c.$set(pe);const De={};l[0]&8|l[1]&2048&&(De.$$scope={dirty:l,ctx:a}),$.$set(De);const we={};l[0]&1&&(we.url="/users/"+a[0].user_hash_id+"/ingredients-prediction"),l[1]&2048&&(we.$$scope={dirty:l,ctx:a}),_.$set(we);const Te={};l[0]&1&&(Te.url="/users/"+a[0].user_hash_id+"/allergens-prediction"),l[1]&2048&&(Te.$$scope={dirty:l,ctx:a}),S.$set(Te);const Ee={};l[0]&1&&(Ee.url="/users/"+a[0].user_hash_id+"/compounds-prediction"),l[1]&2048&&(Ee.$$scope={dirty:l,ctx:a}),B.$set(Ee);const Ce={};l[0]&1&&(Ce.url="/users/"+a[0].user_hash_id+"/protein-prediction"),l[1]&2048&&(Ce.$$scope={dirty:l,ctx:a}),k.$set(Ce),a[4]?I?(I.p(a,l),l[0]&16&&b(I,1)):(I=Ne(a),I.c(),b(I,1),I.m(K.parentNode,K)):I&&(fe(),y(I,1,1,()=>{I=null}),ce());const Se={};l[0]&16&&(Se.data=a[4]),A.$set(Se);const He={};l[0]&16&&(He.data=a[4]),J.$set(He),a[5]?O?(O.p(a,l),l[0]&32&&b(O,1)):(O=Pe(a),O.c(),b(O,1),O.m(oe.parentNode,oe)):O&&(fe(),y(O,1,1,()=>{O=null}),ce());const qe={};l[0]&32&&(qe.data=a[5]),re.$set(qe)},i(a){ue||(b(h),b(m.$$.fragment,a),b(c.$$.fragment,a),b($.$$.fragment,a),b(_.$$.fragment,a),b(S.$$.fragment,a),b(B.$$.fragment,a),b(k.$$.fragment,a),b(I),b(A.$$.fragment,a),b(J.$$.fragment,a),b(O),b(re.$$.fragment,a),ue=!0)},o(a){y(h),y(m.$$.fragment,a),y(c.$$.fragment,a),y($.$$.fragment,a),y(_.$$.fragment,a),y(S.$$.fragment,a),y(B.$$.fragment,a),y(k.$$.fragment,a),y(I),y(A.$$.fragment,a),y(J.$$.fragment,a),y(O),y(re.$$.fragment,a),ue=!1},d(a){a&&(u(t),u(e),u(F),u(H),u(T),u(R),u(v),u(j),u(X),u(w),u(Y),u(L),u(K),u(i),u(z),u(te),u(ie),u(le),u(_e),u(W),u(se),u(oe)),h&&h.d(a),M(m),M(c),M($,a),M(_,a),M(S,a),M(B,a),M(k,a),I&&I.d(a),M(A,a),M(J,a),O&&O.d(a),M(re,a)}}}function yt(o){let t,e,r,n="We don't have any food tracking data for your user ID yet. This could mean:",m,s,d='<li class="markdown"><strong class="markdown">You just started</strong>: Your data may take up to 1 hour to appear after your first entry</li> <li class="markdown"><strong class="markdown">Processing delay</strong>: Our data pipeline runs periodically, so please check back later</li> <li class="markdown"><strong class="markdown">Wrong link</strong>: Make sure you&#39;re using the correct user link from your confirmation</li>',c,f,Q='<a href="#what-to-do-next">What to do next?</a>',F,$,H='<li class="markdown"><strong class="markdown">Wait a bit</strong>: Check back in 1-2 hours</li> <li class="markdown"><strong class="markdown">Browse other users</strong>: See example dashboards on the <a href="/food-tracking-serving/" class="markdown">home page</a></li> <li class="markdown"><strong class="markdown">Contact us</strong>: If you&#39;ve been waiting more than 24 hours, visit the <a href="/food-tracking-serving/contact" class="markdown">contact page</a></li>',T,q,R;return t=new Ve({props:{status:"warning",$$slots:{default:[Ct]},$$scope:{ctx:o}}}),q=new ge({props:{url:"/",$$slots:{default:[Rt]},$$scope:{ctx:o}}}),{c(){U(t.$$.fragment),e=C(),r=V("p"),r.textContent=n,m=C(),s=V("ul"),s.innerHTML=d,c=C(),f=V("h3"),f.innerHTML=Q,F=C(),$=V("ol"),$.innerHTML=H,T=C(),U(q.$$.fragment),this.h()},l(_){P(t.$$.fragment,_),e=E(_),r=G(_,"P",{class:!0,"data-svelte-h":!0}),de(r)!=="svelte-11bnq7d"&&(r.textContent=n),m=E(_),s=G(_,"UL",{class:!0,"data-svelte-h":!0}),de(s)!=="svelte-ofs97u"&&(s.innerHTML=d),c=E(_),f=G(_,"H3",{class:!0,id:!0,"data-svelte-h":!0}),de(f)!=="svelte-u65i5a"&&(f.innerHTML=Q),F=E(_),$=G(_,"OL",{class:!0,"data-svelte-h":!0}),de($)!=="svelte-8utrd"&&($.innerHTML=H),T=E(_),P(q.$$.fragment,_),this.h()},h(){D(r,"class","markdown"),D(s,"class","markdown"),D(f,"class","markdown"),D(f,"id","what-to-do-next"),D($,"class","markdown")},m(_,v){N(t,_,v),p(_,e,v),p(_,r,v),p(_,m,v),p(_,s,v),p(_,c,v),p(_,f,v),p(_,F,v),p(_,$,v),p(_,T,v),N(q,_,v),R=!0},p(_,v){const S={};v[1]&2048&&(S.$$scope={dirty:v,ctx:_}),t.$set(S);const j={};v[1]&2048&&(j.$$scope={dirty:v,ctx:_}),q.$set(j)},i(_){R||(b(t.$$.fragment,_),b(q.$$.fragment,_),R=!0)},o(_){y(t.$$.fragment,_),y(q.$$.fragment,_),R=!1},d(_){_&&(u(e),u(r),u(m),u(s),u(c),u(f),u(F),u($),u(T)),M(t,_),M(q,_)}}}function Me(o){let t,e;return t=new ke({props:{queryID:"user_date_range",queryResult:o[3]}}),{c(){U(t.$$.fragment)},l(r){P(t.$$.fragment,r)},m(r,n){N(t,r,n),e=!0},p(r,n){const m={};n[0]&8&&(m.queryResult=r[3]),t.$set(m)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){M(t,r)}}}function kt(o){let t,e,r,n,m;return e=new ve({props:{data:o[3],column:"first_entry"}}),n=new ve({props:{data:o[3],column:"last_entry"}}),{c(){t=ee("First entry: "),U(e.$$.fragment),r=ee(" | Last entry: "),U(n.$$.fragment)},l(s){t=x(s,"First entry: "),P(e.$$.fragment,s),r=x(s," | Last entry: "),P(n.$$.fragment,s)},m(s,d){p(s,t,d),N(e,s,d),p(s,r,d),N(n,s,d),m=!0},p(s,d){const c={};d[0]&8&&(c.data=s[3]),e.$set(c);const f={};d[0]&8&&(f.data=s[3]),n.$set(f)},i(s){m||(b(e.$$.fragment,s),b(n.$$.fragment,s),m=!0)},o(s){y(e.$$.fragment,s),y(n.$$.fragment,s),m=!1},d(s){s&&(u(t),u(r)),M(e,s),M(n,s)}}}function vt(o){let t;return{c(){t=ee("Ingredients")},l(e){t=x(e,"Ingredients")},m(e,r){p(e,t,r)},d(e){e&&u(t)}}}function wt(o){let t;return{c(){t=ee("Allergens")},l(e){t=x(e,"Allergens")},m(e,r){p(e,t,r)},d(e){e&&u(t)}}}function Tt(o){let t;return{c(){t=ee("Compounds")},l(e){t=x(e,"Compounds")},m(e,r){p(e,t,r)},d(e){e&&u(t)}}}function Et(o){let t;return{c(){t=ee("Protein")},l(e){t=x(e,"Protein")},m(e,r){p(e,t,r)},d(e){e&&u(t)}}}function Ne(o){let t,e;return t=new ke({props:{queryID:"food_table_count_by_day",queryResult:o[4]}}),{c(){U(t.$$.fragment)},l(r){P(t.$$.fragment,r)},m(r,n){N(t,r,n),e=!0},p(r,n){const m={};n[0]&16&&(m.queryResult=r[4]),t.$set(m)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){M(t,r)}}}function Pe(o){let t,e;return t=new ke({props:{queryID:"food_entries",queryResult:o[5]}}),{c(){U(t.$$.fragment)},l(r){P(t.$$.fragment,r)},m(r,n){N(t,r,n),e=!0},p(r,n){const m={};n[0]&32&&(m.queryResult=r[5]),t.$set(m)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){M(t,r)}}}function Ct(o){let t,e="Your data is not ready yet!";return{c(){t=V("strong"),t.textContent=e},l(r){t=G(r,"STRONG",{"data-svelte-h":!0}),de(t)!=="svelte-dvbro4"&&(t.textContent=e)},m(r,n){p(r,t,n)},p:ye,d(r){r&&u(t)}}}function Rt(o){let t;return{c(){t=ee("Go to Home Page")},l(e){t=x(e,"Go to Home Page")},m(e,r){p(e,t,r)},d(e){e&&u(t)}}}function Dt(o){let t,e,r,n,m,s,d,c,f=o[0].user_hash_id+"",Q,F,$,H,T,q,R,_,v,S;function j(i,g){return bt}let X=j()(o),k=o[1]&&Fe(o);H=new lt({props:{name:"model_filter",data:o[1],value:"model_name",title:"Model",defaultValue:"gemma-3-27b-it"}});let w=o[2]&&Le(o);const Y=[yt,gt],L=[];function K(i,g){return i[2][0].total_entries===0?0:1}return R=K(o),_=L[R]=Y[R](o),{c(){t=C(),X.c(),e=V("meta"),r=V("meta"),n=$e(),m=C(),s=V("h1"),d=V("a"),c=ee("User: "),Q=ee(f),F=C(),k&&k.c(),$=C(),U(H.$$.fragment),T=C(),w&&w.c(),q=C(),_.c(),v=$e(),this.h()},l(i){t=E(i);const g=Xe("svelte-2igo1p",document.head);X.l(g),e=G(g,"META",{name:!0,content:!0}),r=G(g,"META",{name:!0,content:!0}),n=$e(),g.forEach(u),m=E(i),s=G(i,"H1",{class:!0,id:!0});var z=me(s);d=G(z,"A",{href:!0});var A=me(d);c=x(A,"User: "),Q=x(A,f),A.forEach(u),z.forEach(u),F=E(i),k&&k.l(i),$=E(i),P(H.$$.fragment,i),T=E(i),w&&w.l(i),q=E(i),_.l(i),v=$e(),this.h()},h(){D(e,"name","twitter:card"),D(e,"content","summary_large_image"),D(r,"name","twitter:site"),D(r,"content","@evidence_dev"),D(d,"href","#user-paramsuser_hash_id"),D(s,"class","markdown"),D(s,"id","user-paramsuser_hash_id")},m(i,g){p(i,t,g),X.m(document.head,null),Z(document.head,e),Z(document.head,r),Z(document.head,n),p(i,m,g),p(i,s,g),Z(s,d),Z(d,c),Z(d,Q),p(i,F,g),k&&k.m(i,g),p(i,$,g),N(H,i,g),p(i,T,g),w&&w.m(i,g),p(i,q,g),L[R].m(i,g),p(i,v,g),S=!0},p(i,g){X.p(i,g),(!S||g[0]&1)&&f!==(f=i[0].user_hash_id+"")&&Ke(Q,f),i[1]?k?(k.p(i,g),g[0]&2&&b(k,1)):(k=Fe(i),k.c(),b(k,1),k.m($.parentNode,$)):k&&(fe(),y(k,1,1,()=>{k=null}),ce());const z={};g[0]&2&&(z.data=i[1]),H.$set(z),i[2]?w?(w.p(i,g),g[0]&4&&b(w,1)):(w=Le(i),w.c(),b(w,1),w.m(q.parentNode,q)):w&&(fe(),y(w,1,1,()=>{w=null}),ce());let A=R;R=K(i),R===A?L[R].p(i,g):(fe(),y(L[A],1,1,()=>{L[A]=null}),ce(),_=L[R],_?_.p(i,g):(_=L[R]=Y[R](i),_.c()),b(_,1),_.m(v.parentNode,v))},i(i){S||(b(k),b(H.$$.fragment,i),b(w),b(_),S=!0)},o(i){y(k),y(H.$$.fragment,i),y(w),y(_),S=!1},d(i){i&&(u(t),u(m),u(s),u(F),u($),u(T),u(q),u(v)),X.d(i),u(e),u(r),u(n),k&&k.d(i),M(H,i),w&&w.d(i),L[R].d(i)}}}function St(o,t,e){let r,n;Ae(o,it,h=>e(29,r=h)),Ae(o,Ie,h=>e(33,n=h));let{data:m}=t,{data:s={},customFormattingSettings:d,__db:c,inputs:f}=m;ze(Ie,n="0d87b0b7f243ef7728fb2acd631fecf9",n);let Q=tt(nt(f));Je(Q.subscribe(h=>e(8,f=h))),Ze(ot,{getCustomFormats:()=>d.customFormats||[]});const F=(h,I)=>dt(c.query,h,{query_name:I});rt(F);let $=r.params;xe(()=>!0);let H={initialData:void 0,initialError:void 0},T=ne`select distinct model_name
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
order by model_name`,q=`select distinct model_name
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
order by model_name`;s.available_models_data&&(s.available_models_data instanceof Error?H.initialError=s.available_models_data:H.initialData=s.available_models_data,s.available_models_columns&&(H.knownColumns=s.available_models_columns));let R,_=!1;const v=be.createReactive({callback:h=>{e(1,R=h)},execFn:F},{id:"available_models",...H});v(q,{noResolve:T,...H}),globalThis[Symbol.for("available_models")]={get value(){return R}};let S={initialData:void 0,initialError:void 0},j=ne`select
  count(*) as total_entries,
  round(sum(predicted_protein_grams), 1) as total_protein_grams
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'`,B=`select
  count(*) as total_entries,
  round(sum(predicted_protein_grams), 1) as total_protein_grams
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'`;s.food_table_total_entries_count_data&&(s.food_table_total_entries_count_data instanceof Error?S.initialError=s.food_table_total_entries_count_data:S.initialData=s.food_table_total_entries_count_data,s.food_table_total_entries_count_columns&&(S.knownColumns=s.food_table_total_entries_count_columns));let X,k=!1;const w=be.createReactive({callback:h=>{e(2,X=h)},execFn:F},{id:"food_table_total_entries_count",...S});w(B,{noResolve:j,...S}),globalThis[Symbol.for("food_table_total_entries_count")]={get value(){return X}};let Y={initialData:void 0,initialError:void 0},L=ne`select
  min(insert_timestamp)::date as first_entry,
  max(insert_timestamp)::date as last_entry
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'`,K=`select
  min(insert_timestamp)::date as first_entry,
  max(insert_timestamp)::date as last_entry
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'`;s.user_date_range_data&&(s.user_date_range_data instanceof Error?Y.initialError=s.user_date_range_data:Y.initialData=s.user_date_range_data,s.user_date_range_columns&&(Y.knownColumns=s.user_date_range_columns));let i,g=!1;const z=be.createReactive({callback:h=>{e(3,i=h)},execFn:F},{id:"user_date_range",...Y});z(K,{noResolve:L,...Y}),globalThis[Symbol.for("user_date_range")]={get value(){return i}};let A={initialData:void 0,initialError:void 0},te=ne`select
  CAST(insert_timestamp AS DATE) as insert_day,
  count(*) as count_entries,
  round(sum(predicted_protein_grams), 1) as protein_grams
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'
group by all
order by insert_day`,J=`select
  CAST(insert_timestamp AS DATE) as insert_day,
  count(*) as count_entries,
  round(sum(predicted_protein_grams), 1) as protein_grams
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'
group by all
order by insert_day`;s.food_table_count_by_day_data&&(s.food_table_count_by_day_data instanceof Error?A.initialError=s.food_table_count_by_day_data:A.initialData=s.food_table_count_by_day_data,s.food_table_count_by_day_columns&&(A.knownColumns=s.food_table_count_by_day_columns));let ie,le=!1;const _e=be.createReactive({callback:h=>{e(4,ie=h)},execFn:F},{id:"food_table_count_by_day",...A});_e(J,{noResolve:te,...A}),globalThis[Symbol.for("food_table_count_by_day")]={get value(){return ie}};let W={initialData:void 0,initialError:void 0},ae=ne`select
  insert_timestamp,
  food_name,
  round(predicted_protein_grams, 1) as protein_grams,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point,
  confidence_score
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'
order by insert_timestamp desc`,se=`select
  insert_timestamp,
  food_name,
  round(predicted_protein_grams, 1) as protein_grams,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point,
  confidence_score
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'
order by insert_timestamp desc`;s.food_entries_data&&(s.food_entries_data instanceof Error?W.initialError=s.food_entries_data:W.initialData=s.food_entries_data,s.food_entries_columns&&(W.knownColumns=s.food_entries_columns));let oe,re=!1;const ue=be.createReactive({callback:h=>{e(5,oe=h)},execFn:F},{id:"food_entries",...W});return ue(se,{noResolve:ae,...W}),globalThis[Symbol.for("food_entries")]={get value(){return oe}},o.$$set=h=>{"data"in h&&e(6,m=h.data)},o.$$.update=()=>{o.$$.dirty[0]&64&&e(7,{data:s={},customFormattingSettings:d,__db:c}=m,s),o.$$.dirty[0]&128&&at.set(Object.keys(s).length>0),o.$$.dirty[0]&536870912&&e(0,$=r.params),o.$$.dirty[0]&1&&e(10,T=ne`select distinct model_name
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
order by model_name`),o.$$.dirty[0]&1&&e(11,q=`select distinct model_name
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
order by model_name`),o.$$.dirty[0]&7680&&(T||!_?T||(v(q,{noResolve:T,...H}),e(12,_=!0)):v(q,{noResolve:T})),o.$$.dirty[0]&257&&e(14,j=ne`select
  count(*) as total_entries,
  round(sum(predicted_protein_grams), 1) as total_protein_grams
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'`),o.$$.dirty[0]&257&&e(15,B=`select
  count(*) as total_entries,
  round(sum(predicted_protein_grams), 1) as total_protein_grams
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'`),o.$$.dirty[0]&122880&&(j||!k?j||(w(B,{noResolve:j,...S}),e(16,k=!0)):w(B,{noResolve:j})),o.$$.dirty[0]&257&&e(18,L=ne`select
  min(insert_timestamp)::date as first_entry,
  max(insert_timestamp)::date as last_entry
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'`),o.$$.dirty[0]&257&&e(19,K=`select
  min(insert_timestamp)::date as first_entry,
  max(insert_timestamp)::date as last_entry
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'`),o.$$.dirty[0]&1966080&&(L||!g?L||(z(K,{noResolve:L,...Y}),e(20,g=!0)):z(K,{noResolve:L})),o.$$.dirty[0]&257&&e(22,te=ne`select
  CAST(insert_timestamp AS DATE) as insert_day,
  count(*) as count_entries,
  round(sum(predicted_protein_grams), 1) as protein_grams
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'
group by all
order by insert_day`),o.$$.dirty[0]&257&&e(23,J=`select
  CAST(insert_timestamp AS DATE) as insert_day,
  count(*) as count_entries,
  round(sum(predicted_protein_grams), 1) as protein_grams
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'
group by all
order by insert_day`),o.$$.dirty[0]&31457280&&(te||!le?te||(_e(J,{noResolve:te,...A}),e(24,le=!0)):_e(J,{noResolve:te})),o.$$.dirty[0]&257&&e(26,ae=ne`select
  insert_timestamp,
  food_name,
  round(predicted_protein_grams, 1) as protein_grams,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point,
  confidence_score
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'
order by insert_timestamp desc`),o.$$.dirty[0]&257&&e(27,se=`select
  insert_timestamp,
  food_name,
  round(predicted_protein_grams, 1) as protein_grams,
  state_point,
  sleep_point,
  bloating_point,
  reflux_point,
  finger_point,
  confidence_score
from motherduck.food_meal_prediction
where user_hash_id = '${$.user_hash_id}'
  and model_name = '${f.model_filter.value}'
order by insert_timestamp desc`),o.$$.dirty[0]&503316480&&(ae||!re?ae||(ue(se,{noResolve:ae,...W}),e(28,re=!0)):ue(se,{noResolve:ae}))},[$,R,X,i,ie,oe,m,s,f,H,T,q,_,S,j,B,k,Y,L,K,g,A,te,J,le,W,ae,se,re,r]}class Gt extends Oe{constructor(t){super(),Ge(this,t,St,Dt,Ue,{data:6},null,[-1,-1])}}export{Gt as component};
