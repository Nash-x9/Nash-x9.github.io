import{u as V,i as b}from"./action-cd384d03.js";import{d as k,y as w,z as v,D as C,r as o,c as E,w as a,f as I,v as p,j as n,C as z,E as A,T as s}from"./tool-4bde39df.js";import{b as B}from"./cryptoJS-7c6db2a3.js";import"./modulepreload-polyfill-3cfb730f.js";import"./index-97831974.js";import"./commonjs-dynamic-modules-302442b1.js";import"./index-10d6d5e1.js";import"./string_decoder-fc53e566.js";import"./index-847cce26.js";const G=k({__name:"Decrypt",async setup(H){let u,c;const m={key:""},t=V(([u,c]=w(()=>b({input:z("base64"),option:m,output:A("text")})),u=await u,c(),u)),l=v(()=>{if(t.current.input.text.isEmpty()||t.current.option.key==="")return s.empty();if(t.current.input.text.isError())return t.current.input.text;try{return s.fromBase64(B.decrypt(t.current.input.text.toBase64(),t.current.option))}catch(i){return s.fromError($error(i))}});return C(()=>l.value, i=>{i.isEmpty()||t.save()},{immediate:!0,deep:!0}),(i, e)=>{const d=o("TextInput"),_=o("HelpTip"),x=o("Input"),f=o("TextOutput"),y=o("Align"),g=o("HeightResize");return I(),E(g,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:a(({small:h,large:T})=>[p(y,{direction:"vertical"},{default:a(()=>[p(d,{modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]= r=>n(t).current.input=r),allow:["base64","hex"],height:h},null,8,["modelValue","height"]),p(x,{class:"ctool-page-option",modelValue:n(t).current.option.key,"onUpdate:modelValue":e[1]||(e[1]= r=>n(t).current.option.key=r),label:"key"},{suffix:a(()=>[p(_,{link:"https://github.com/brix/crypto-js"})]),_:1},8,["modelValue"]),p(f,{modelValue:n(t).current.output,"onUpdate:modelValue":e[2]||(e[2]= r=>n(t).current.output=r),allow:["text"],content:l.value,height:T,encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{G as default};
