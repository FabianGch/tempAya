import{b as o}from"./BaseButton-39e75784.js";import{b as r,g as t,s as a,c as l,z as i,M as d,N as u,O as p,x as _}from"./index-f1f4c7ce.js";const g={},m={class:"bg-gray-50 dark:bg-slate-800 dark:text-slate-100"};function f(e,s){return r(),t("div",m,[a(e.$slots,"default")])}const h=o(g,[["render",f]]),w={__name:"SectionFullScreen",props:{bg:{type:String,required:!0,validator:e=>["purplePink","pinkRed"].includes(e)}},setup(e){const s=e,n=l(()=>{if(i().isEnabled)return d;switch(s.bg){case"purplePink":return p;case"pinkRed":return u}return""});return(c,k)=>(r(),t("div",{class:_(["flex min-h-screen items-center justify-center",n.value])},[a(c.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"})],2))}};export{h as L,w as _};
