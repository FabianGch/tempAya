import{r as g,c as _,z as P,b as R,d as W,w as e,e as l,j as f,f as a,i as u}from"./index-f1f4c7ce.js";import{n as j,o as E,p as q,q as z,r as J,s as M,t as F,u as m,v as G}from"./mdi-0c455e62.js";import{_ as H,a as h,c as y}from"./LayoutAuthenticated-7d783d24.js";import{a as v,_ as o}from"./BaseButton-39e75784.js";import{_ as b}from"./BaseButtons-2a9577c6.js";import{_ as k}from"./NotificationBar-bc1e810f.js";import{_ as T,a as O}from"./CardBoxModal-e693f0bf.js";import{_ as w}from"./SectionTitle-209599c9.js";import{_ as A}from"./FormField-303d75a5.js";import{_ as I}from"./FormCheckRadioGroup-9dab2d32.js";import{_ as K}from"./SectionTitleLineWithButton-2e2f12ab.js";import{C as Q}from"./CardBoxComponentEmpty-64b566ce.js";import{_ as $}from"./PillTag-b50129b2.js";import"./BaseIcon-20fbf9b2.js";import"./BaseLevel-4342ddb8.js";import"./FormCheckRadio-ee1add36.js";const X=a("p",null,"This is sample modal",-1),Y=a("p",null,"Lorem ipsum dolor",-1),Z=a("p",null,"This is sample modal",-1),ll=a("p",null,"Lorem ipsum dolor",-1),el=a("p",null,"This is sample modal",-1),ol=a("p",null,"Lorem ipsum dolor",-1),al={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"},ul={class:"space-y-12"},nl=a("div",{class:"space-y-3"},[a("p",null,"Click to see in action")],-1),tl=a("div",{class:"space-y-3"},[a("p",null,"Click to see in action")],-1),il=a("div",{class:"space-y-3"},[a("p",null,"Click to see in action")],-1),sl=a("h1",{class:"text-2xl text-gray-500 dark:text-slate-400"},"Notifications",-1),dl={class:"flex items-center justify-center mt-6"},rl=a("b",null,"Info state",-1),cl=a("b",null,"Success state",-1),ml=a("b",null,"Warning state",-1),fl=a("b",null,"Danger state",-1),vl=a("b",null,"Contrast",-1),_l={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},bl=a("div",{class:"space-y-3"},[a("p",null,"Card with title, icon & footer")],-1),Ml={__name:"UiView",setup(pl){const S=g(!1),D=g(!1),N=g(!1),U=g([]),c=_(()=>U.value.indexOf("outline")>-1),p=g([]),t=_(()=>p.value.indexOf("outline")>-1),i=_(()=>p.value.indexOf("small")>-1),s=_(()=>p.value.indexOf("disabled")>-1),d=_(()=>p.value.indexOf("rounded")>-1),x=g(["icon"]),C=_(()=>x.value.indexOf("outline")>-1),B=_(()=>x.value.indexOf("small")>-1),V=_(()=>x.value.indexOf("icon")>-1?j:null),L=P();return(gl,n)=>(R(),W(H,null,{default:e(()=>[l(T,{modelValue:S.value,"onUpdate:modelValue":n[0]||(n[0]=r=>S.value=r),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:e(()=>[X,Y]),_:1},8,["modelValue"]),l(T,{modelValue:D.value,"onUpdate:modelValue":n[1]||(n[1]=r=>D.value=r),title:"Unhandled exception",button:"danger"},{default:e(()=>[Z,ll]),_:1},8,["modelValue"]),l(T,{modelValue:N.value,"onUpdate:modelValue":n[2]||(n[2]=r=>N.value=r),title:"Success",button:"success"},{default:e(()=>[el,ol]),_:1},8,["modelValue"]),l(w,{first:""},{default:e(()=>[f("Dark mode")]),_:1}),l(h,null,{default:e(()=>[l(v,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:e(()=>[a("div",al,[l(o,{label:"Toggle",color:"contrast",onClick:n[3]||(n[3]=r=>u(L).set())})])]),_:1})]),_:1}),l(w,null,{default:e(()=>[f("Modal examples")]),_:1}),l(h,null,{default:e(()=>[a("div",ul,[l(v,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:n[4]||(n[4]=r=>S.value=!0)},{footer:e(()=>[l(b,null,{default:e(()=>[l(o,{label:"Confirm",color:"info"}),l(o,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[l(O,{title:"Please confirm action"},{default:e(()=>[l(o,{icon:u(E),color:"whiteDark",small:"","rounded-full":""},null,8,["icon"])]),_:1}),nl]),_:1}),l(v,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:n[5]||(n[5]=r=>D.value=!0)},{footer:e(()=>[l(b,null,{default:e(()=>[l(o,{label:"Done",color:"danger"})]),_:1})]),default:e(()=>[l(O,{title:"Unhandled exception"}),tl]),_:1}),l(v,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:n[6]||(n[6]=r=>N.value=!0)},{footer:e(()=>[l(o,{label:"Done",color:"success"})]),default:e(()=>[l(O,{title:"Success"}),il]),_:1})])]),_:1}),l(w,{custom:""},{default:e(()=>[sl,a("div",dl,[l(I,{modelValue:U.value,"onUpdate:modelValue":n[7]||(n[7]=r=>U.value=r),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),l(h,null,{default:e(()=>[l(k,{color:"info",icon:u(q),outline:c.value},{right:e(()=>[l(o,{label:"Button",color:c.value?"info":"white",outline:c.value,"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[rl,f(". NotificationBar ")]),_:1},8,["icon","outline"]),l(k,{color:"success",icon:u(z),outline:c.value},{right:e(()=>[l(o,{label:"Button",color:c.value?"success":"white",outline:c.value,"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[cl,f(". NotificationBar ")]),_:1},8,["icon","outline"]),l(k,{color:"warning",icon:u(J),outline:c.value},{right:e(()=>[l(o,{label:"Button",color:c.value?"warning":"white",outline:c.value,"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[ml,f(". NotificationBar ")]),_:1},8,["icon","outline"]),l(k,{color:"danger",icon:u(M),outline:c.value},{right:e(()=>[l(o,{label:"Button",color:c.value?"danger":"white",outline:c.value,"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[fl,f(". NotificationBar ")]),_:1},8,["icon","outline"]),l(k,{color:"contrast",icon:u(F),outline:c.value},{default:e(()=>[vl,f(". NotificationBar ")]),_:1},8,["icon","outline"])]),_:1}),l(w,null,{default:e(()=>[f("Buttons")]),_:1}),l(h,null,{default:e(()=>[l(v,null,{default:e(()=>[l(A,{label:"Settings"},{default:e(()=>[l(I,{modelValue:p.value,"onUpdate:modelValue":n[8]||(n[8]=r=>p.value=r),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",rounded:"Rounded",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),l(y),l(b,null,{default:e(()=>[l(o,{color:"lightDark",label:"Button",small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["small","outline","disabled","rounded-full"]),l(o,{color:"contrast",label:"Button",small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["small","outline","disabled","rounded-full"]),l(o,{color:"info",label:"Button",small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["small","outline","disabled","rounded-full"]),l(o,{color:"success",label:"Button",small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["small","outline","disabled","rounded-full"]),l(o,{color:"warning",label:"Button",small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["small","outline","disabled","rounded-full"]),l(o,{color:"danger",label:"Button",small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["small","outline","disabled","rounded-full"])]),_:1}),l(y),l(b,null,{default:e(()=>[l(o,{color:"lightDark",label:"Button",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"]),l(o,{color:"contrast",label:"Button",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"]),l(o,{color:"info",label:"Button",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"]),l(o,{color:"success",label:"Button",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"]),l(o,{color:"warning",label:"Button",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"]),l(o,{color:"danger",label:"Button",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1}),l(y),l(b,null,{default:e(()=>[l(o,{color:"lightDark",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"]),l(o,{color:"contrast",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"]),l(o,{color:"info",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"]),l(o,{color:"success",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"]),l(o,{color:"warning",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"]),l(o,{color:"danger",icon:u(m),small:i.value,outline:t.value,disabled:s.value,"rounded-full":d.value},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1})]),_:1})]),_:1}),l(w,null,{default:e(()=>[f("Pills")]),_:1}),l(h,null,{default:e(()=>[l(v,null,{default:e(()=>[l(A,{label:"Settings"},{default:e(()=>[l(I,{modelValue:x.value,"onUpdate:modelValue":n[9]||(n[9]=r=>x.value=r),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",icon:"Icon"}},null,8,["modelValue"])]),_:1}),l(y),l(b,null,{default:e(()=>[l($,{color:"contrast",label:"Contrast",small:B.value,outline:C.value,icon:V.value},null,8,["small","outline","icon"]),l($,{color:"info",label:"Info",small:B.value,outline:C.value,icon:V.value},null,8,["small","outline","icon"]),l($,{color:"success",label:"Success",small:B.value,outline:C.value,icon:V.value},null,8,["small","outline","icon"]),l($,{color:"warning",label:"Warning",small:B.value,outline:C.value,icon:V.value},null,8,["small","outline","icon"]),l($,{color:"danger",label:"Danger",small:B.value,outline:C.value,icon:V.value},null,8,["small","outline","icon"])]),_:1})]),_:1})]),_:1}),l(w,null,{default:e(()=>[f("Cards")]),_:1}),l(h,null,{default:e(()=>[a("div",_l,[l(v,null,{footer:e(()=>[l(b,null,{default:e(()=>[l(o,{label:"Confirm",color:"info"}),l(o,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[l(O,{title:"With title & icon"},{default:e(()=>[l(o,{icon:u(G),color:"whiteDark","rounded-full":""},null,8,["icon"])]),_:1}),bl]),_:1}),l(v,null,{footer:e(()=>[l(b,null,{default:e(()=>[l(o,{label:"Confirm",color:"info"}),l(o,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[f(" Just body & footer ")]),_:1})]),l(K,{icon:u(M),title:"Empty variation"},null,8,["icon"]),l(v,null,{default:e(()=>[l(Q)]),_:1})]),_:1})]),_:1}))}};export{Ml as default};
