import{k as V,r as c,b as s,d as u,w as d,e as l,i as g,l as C,m as h,f as n}from"./index-f1f4c7ce.js";import{_ as S,a as v}from"./LayoutAuthenticated-7d783d24.js";import{a as A,_ as m}from"./BaseButton-39e75784.js";import{_ as o}from"./FormField-303d75a5.js";import{_ as b}from"./FormControl-cf4ed4db.js";import{_ as B}from"./BaseButtons-2a9577c6.js";import{b as k}from"./mdi-0c455e62.js";import{_ as M}from"./NotificationBar-bc1e810f.js";import"./BaseIcon-20fbf9b2.js";import"./BaseLevel-4342ddb8.js";const j=n("b",null,"Agregado",-1),$=n("p",{style:{"font-size":"25px","text-align":"center"}},[n("strong",null,"Agregar Trabajo Presencial")],-1),w=n("br",null,null,-1),J={__name:"workInSIteForm",setup(z){const e=V({hasContract:!0}),f=[{id:1,label:"Adan"},{id:2,label:"Floyd"},{id:3,label:"Storm"},{id:4,label:"Si"},{id:5,label:"Lanny"},{id:6,label:"Julian"},{id:7,label:"Henry"},{id:8,label:"Abbey"},{id:9,label:"Elihu"},{id:10,label:"Wallie"},{id:11,label:"Abby"},{id:12,label:"Meidl"},{id:13,label:"Massimo"},{id:14,label:"Bevan"},{id:15,label:"Riva"},{id:16,label:"Port"},{id:17,label:"Yelena"},{id:18,label:"Guthry"},{id:19,label:"Cortie"},{id:20,label:"Cortney"},{id:21,label:"Gabie"},{id:22,label:"Marinna"},{id:23,label:"Chloris"},{id:24,label:"Bellina"},{id:25,label:"Elyn"},{id:26,label:"Immanuel"},{id:27,label:"Charity"},{id:28,label:"Vivianne"},{id:29,label:"Chiquita"},{id:30,label:"Harriette"},{id:31,label:"Dominga"},{id:32,label:"Christabel"},{id:33,label:"Sinclare"},{id:34,label:"Shirleen"},{id:35,label:"Kliment"}],p=[{id:48,label:"Elset"},{id:49,label:"Lamont"},{id:50,label:"Rozanne"},{id:51,label:"Corine"},{id:52,label:"Theodoric"},{id:53,label:"Barbey"},{id:54,label:"Jesselyn"},{id:55,label:"Alvin"},{id:56,label:"Denise"},{id:57,label:"Greggory"},{id:58,label:"Conchita"},{id:59,label:"Alene"},{id:60,label:"Izak"},{id:61,label:"Cheryl"},{id:62,label:"Earlie"},{id:63,label:"Layton"},{id:64,label:"Felisha"},{id:65,label:"Denyse"},{id:66,label:"Konstanze"},{id:67,label:"Niels"},{id:68,label:"Rowan"},{id:69,label:"Marijn"},{id:70,label:"Brent"},{id:71,label:"Harriot"},{id:72,label:"Stanislaw"},{id:73,label:"Laurene"},{id:74,label:"Lilah"},{id:75,label:"Milty"},{id:76,label:"Rennie"},{id:77,label:"Jason"},{id:78,label:"Danette"},{id:79,label:"Georgia"},{id:80,label:"Paul"},{id:81,label:"Isabelita"},{id:82,label:"Renato"},{id:83,label:"Abby"},{id:84,label:"Fowler"},{id:85,label:"Tori"},{id:86,label:"Levey"},{id:87,label:"Chic"},{id:88,label:"Coriss"},{id:89,label:"Bartel"},{id:90,label:"Boniface"},{id:91,label:"Kipp"},{id:92,label:"Cloe"},{id:93,label:"Aurore"},{id:94,label:"Mady"},{id:95,label:"Glenn"},{id:96,label:"Sophronia"},{id:97,label:"Welbie"},{id:98,label:"Willey"},{id:99,label:"Adler"},{id:100,label:"Mariellen"}],y=[{id:48,label:"Carro"},{id:49,label:"Moto"},{id:48,label:"Bicicleta"},{id:49,label:"Buseta"}],_=[{id:1,label:"Gómez"},{id:2,label:"Changzhou"},{id:3,label:"Sendangagung"},{id:4,label:"Trzciana"},{id:5,label:"Banjar Dauhpura"},{id:6,label:"Padangpanjang"},{id:7,label:"Sandefjord"},{id:8,label:"Shahrud"},{id:9,label:"Ku‘aydinah"},{id:10,label:"Gobojango"},{id:11,label:"Adassil"},{id:12,label:"Sanyang"},{id:13,label:"Chrastava"}],t=c(!1),r=()=>{t.value=!0};return(G,a)=>(s(),u(S,null,{default:d(()=>[l(v,null,{default:d(()=>[t.value?(s(),u(M,{key:0,color:"info",icon:g(k)},{default:d(()=>[j]),_:1},8,["icon"])):C("",!0),$,w,l(A,{form:"",onSubmit:h(r,["prevent"])},{footer:d(()=>[l(B,null,{default:d(()=>[l(m,{type:"submit",color:"info",label:"Agregar",onClick:r}),l(m,{type:"reset",color:"info",outline:"",label:"Cancelar"})]),_:1})]),default:d(()=>[l(o,{label:"Sede"},{default:d(()=>[l(b,{modelValue:e.site,"onUpdate:modelValue":a[0]||(a[0]=i=>e.site=i),options:_},null,8,["modelValue"])]),_:1}),l(o,{label:"Cantidad dias"},{default:d(()=>[l(b,{modelValue:e.days,"onUpdate:modelValue":a[1]||(a[1]=i=>e.days=i)},null,8,["modelValue"])]),_:1}),l(o,{label:"Dias de la semana"},{default:d(()=>[l(b,{modelValue:e.daysOfWeek,"onUpdate:modelValue":a[2]||(a[2]=i=>e.daysOfWeek=i)},null,8,["modelValue"])]),_:1}),l(o,{label:"Vehiculo"},{default:d(()=>[l(b,{modelValue:e.vehicles,"onUpdate:modelValue":a[3]||(a[3]=i=>e.vehicles=i),options:y},null,8,["modelValue"])]),_:1}),l(o,{label:"Cargo"},{default:d(()=>[l(b,{modelValue:e.cargo,"onUpdate:modelValue":a[4]||(a[4]=i=>e.cargo=i)},null,8,["modelValue"])]),_:1}),l(o,{label:"Empleado"},{default:d(()=>[l(b,{modelValue:e.employee,"onUpdate:modelValue":a[5]||(a[5]=i=>e.employee=i),options:p},null,8,["modelValue"])]),_:1}),l(o,{label:"Jefatura"},{default:d(()=>[l(b,{modelValue:e.jefatura,"onUpdate:modelValue":a[6]||(a[6]=i=>e.jefatura=i),options:f},null,8,["modelValue"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}};export{J as default};
