import{c as u,b as r,g as d,p,G as m,f as t,t as y,x as b}from"./index-f1f4c7ce.js";const h=["type","name","value"],V=t("span",{class:"check"},null,-1),g={class:"pl-2"},k={__name:"FormCheckRadio",props:{name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},label:{type:String,default:null},modelValue:{type:[Array,String,Number,Boolean],default:null},inputValue:{type:[String,Number,Boolean],required:!0}},emits:["update:modelValue"],setup(e,{emit:s}){const a=e,l=u({get:()=>a.modelValue,set:n=>{s("update:modelValue",n)}}),i=u(()=>a.type==="radio"?"radio":"checkbox");return(n,o)=>(r(),d("label",{class:b(e.type)},[p(t("input",{"onUpdate:modelValue":o[0]||(o[0]=c=>l.value=c),type:i.value,name:e.name,value:e.inputValue},null,8,h),[[m,l.value]]),V,t("span",g,y(e.label),1)],2))}};export{k as _};
