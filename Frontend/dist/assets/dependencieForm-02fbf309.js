import{k as b,r as s,b as m,d as c,w as e,e as o,l as g,m as h,i as w,f as a}from"./index-f1f4c7ce.js";import{c as v}from"./mdi-0c455e62.js";import{_ as $,a as x}from"./LayoutAuthenticated-7d783d24.js";import{a as S,_ as V}from"./BaseButton-39e75784.js";import{_ as k}from"./FormField-303d75a5.js";import{_ as C}from"./FormControl-cf4ed4db.js";import{_ as A}from"./NotificationBarInCard-b525f67b.js";import{_ as N}from"./NotificationBar-bc1e810f.js";import"./BaseIcon-20fbf9b2.js";import"./BaseLevel-4342ddb8.js";const y=a("b",null,"Agregado",-1),B=a("p",{style:{"font-size":"25px","text-align":"center"}},[a("strong",null,"Agregar Dependencia")],-1),D=a("br",null,null,-1),G={__name:"dependencieForm",setup(M){const n=b({name:""}),u=s(!0),t=s(0),r=["info","success","danger","warning"],f=()=>{t.value=r[t.value+1]?t.value+1:0},l=s(!1),_=()=>{l.value=!0};return(d,i)=>(m(),c($,null,{default:e(()=>[o(x,null,{default:e(()=>[l.value?(m(),c(N,{key:0,color:"info",icon:d.mdiMonitorCellphone},{default:e(()=>[y]),_:1},8,["icon"])):g("",!0),B,D,o(S,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto","is-form":"","is-hoverable":"",onSubmit:h(f,["prevent"])},{footer:e(()=>[o(V,{label:"Agregar",type:"submit",color:"info",onClick:_})]),default:e(()=>[o(A,{color:r[0],"is-placed-with-header":u.value},null,8,["color","is-placed-with-header"]),o(k,{label:"Nombre Dependencia"},{default:e(()=>[o(C,{modelValue:n.name,"onUpdate:modelValue":i[0]||(i[0]=p=>n.name=p),"icon-left":w(v)},null,8,["modelValue","icon-left"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}};export{G as default};
