import{_ as j,i as x,B as S,c as p,b as t,e as c,f as n,F as U,j as $,w as f,d as a,v as u,k as _,l as b,m as A,r as k,o as d,g as l,n as T,t as h,q as w,p as M,h as B,s as y}from"./index-CHWlKXGV.js";const N={name:"AdminView",components:{ButtonRouter:x,ButtonMain:S},props:{articles:Array},data(){return{sav_show:!1,form_show:!1,title:"",description:"",price:"",image:"",link:"https://www.leetchi.com/fr/c/bapteme-adele-5792572?utm_source=native&utm_medium=social_sharing",categorie:"",sav:{motif:"",object:"",urgent:!1,message:""}}},methods:{createArticle(){fetch("https://birth-backend.onrender.com/api/article",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.title,description:this.description,prix:this.price,photo:this.image,lien:this.link,categorie:this.categorie,visible:!0})}).then(i=>i.json()).then(i=>{alert("L'article a été ajouté avec succès"),this.reset(),this.form_show=!1,this.$emit("newArticle",{name:this.title,description:this.description,prix:this.price,image:this.image,lien:this.link,categorie:this.categorie,visible:!0})}).catch(i=>{alert("Un probleme a survenu lors de l'ajout de l'article")})},reset(){this.title="",this.description="",this.price="",this.image="",this.link="https://www.leetchi.com/fr/c/bapteme-adele-5792572?utm_source=native&utm_medium=social_sharing",this.categorie=""},saveSAV(){const i="https://discord.com/api/webhooks/1258380390012420168/bukCK2JnddU-BSQTFnlgl2u-sa7wqObbAEb57SChmJ30Znmd9c3bk3Zkxp7eH0lWjvxJ",v={content:`${this.sav.urgent?"@everyone":""} 
 **Motif**: ${this.sav.motif} 
 **Objet**: ${this.sav.object} 
 **Message**: ${this.sav.message}`};fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}).then(m=>{m.ok?(this.sav_show=!1,console.log("Message sent successfully!")):console.error("Failed to send message. Status code:",m.status)}).catch(m=>{console.error("Error sending message:",m)}),console.log("saveSAV")},change(i){console.log(i),fetch("https://birth-backend.onrender.com/api/article/switch/"+i,{method:"PUT",headers:{"Content-Type":"application/json"}}).then(o=>o.json()).then(o=>{alert("La visibilité de l'article a été modifiée avec succès")}).catch(o=>{alert("Un probleme a survenu lors de la modification de la visibilité de l'article")})}},computed:{visibles(){return this.articles.filter(i=>i.visible===!0)}}},s=i=>(M("data-v-eb29a5ac"),i=i(),B(),i),O={class:"about"},I={class:"tete"},E=s(()=>t("h1",null,"This is the admin page",-1)),F={class:"wrapper2"},J={key:0},P={class:"lien-container"},D={class:"lien"},L=s(()=>t("h2",null,"Catégorie: ",-1)),z=["src"],R=s(()=>t("label",{for:"title"},"Title",-1)),q=s(()=>t("label",{for:"categorie"},"Catégorie",-1)),Z=y('<option value="meuble" data-v-eb29a5ac>vêtements</option><option value="deco" data-v-eb29a5ac>décorations</option><option value="vetement" data-v-eb29a5ac>meubles</option><option value="jouet" data-v-eb29a5ac>jouets</option><option value="se déplacer" data-v-eb29a5ac>se déplacer</option><option value="autre" data-v-eb29a5ac>autres</option>',6),H=[Z],K=s(()=>t("label",{for:"price"},"Price",-1)),Q=s(()=>t("label",{for:"description"},"Description",-1)),W=s(()=>t("label",{for:"image"},"Image",-1)),G=s(()=>t("label",{for:"cagnotte"},"Lien vers la cagnotte",-1)),X={class:"wrapper"},Y=s(()=>t("label",{for:"selection"},"Motif du message",-1)),ee=y('<option value="problem" data-v-eb29a5ac>Problème</option><option value="modifier" data-v-eb29a5ac>j&#39;ai fait une erreur sur un article</option><option value="information" data-v-eb29a5ac>Information</option><option value="supprimer" data-v-eb29a5ac>supprimer un article</option><option value="autre" data-v-eb29a5ac>autre</option>',5),te=[ee],oe=s(()=>t("label",{for:"object"},"Objet du message",-1)),ie=s(()=>t("label",{for:"urgent"},"Urgent",-1)),se=s(()=>t("label",{for:"message"},"Message",-1));function ae(i,o,v,m,ne,g){const r=k("button-main"),C=k("button-router");return d(),p("div",O,[t("div",I,[E,t("div",null,[c(r,{onClick:o[0]||(o[0]=e=>this.form_show=!0)},{default:n(()=>[l("Ajoute un article")]),_:1}),c(r,{onClick:o[1]||(o[1]=e=>this.sav_show=!0)},{default:n(()=>[l("Envoyer un message au SAV")]),_:1}),c(C,{to:"/messages"},{default:n(()=>[l("lire mes messages")]),_:1})])]),t("ul",null,[(d(!0),p(U,null,$(v.articles,e=>(d(),p("li",{key:e.id,class:T([e.visible?"visible":"hidden",e.achete?"achete":"libre"])},[t("div",F,[e.achete?(d(),p("h1",J,"Article acheté par "+h(e.prenom),1)):b("",!0),t("h2",null,h(e.name),1),t("p",null,h(e.description),1),t("p",null,h(e.prix)+" €",1),t("div",P,[t("p",D,h(e.lien),1)]),L,t("p",null,h(e.categorie),1),e.visible?(d(),w(r,{key:2,onClick:V=>{e.visible=!1,this.change(e._id)}},{default:n(()=>[l("Cacher")]),_:2},1032,["onClick"])):(d(),w(r,{key:1,onClick:V=>{this.change(e._id),e.visible=!0}},{default:n(()=>[l("Rendre visible")]),_:2},1032,["onClick"]))]),t("img",{src:e.photo,alt:"article.title"},null,8,z)],2))),128))]),this.form_show?(d(),p("form",{key:0,action:"",onSubmit:o[10]||(o[10]=f(e=>this.createArticle(),["prevent"]))},[t("fieldset",null,[t("div",null,[R,a(t("input",{placeholder:"Nom de l'article",type:"text",id:"title","onUpdate:modelValue":o[2]||(o[2]=e=>this.title=e)},null,512),[[u,this.title]])]),t("div",null,[q,a(t("select",{name:"categorie",id:"categorie","onUpdate:modelValue":o[3]||(o[3]=e=>this.categorie=e)},H,512),[[_,this.categorie]])]),t("div",null,[K,a(t("input",{type:"number",id:"price","onUpdate:modelValue":o[4]||(o[4]=e=>this.price=e)},null,512),[[u,this.price]])])]),Q,a(t("textarea",{name:"description",id:"description",cols:"30",rows:"3","onUpdate:modelValue":o[5]||(o[5]=e=>this.description=e),placeholder:"Description de l'article"},null,512),[[u,this.description]]),W,a(t("input",{type:"text",id:"image","onUpdate:modelValue":o[6]||(o[6]=e=>this.image=e),placeholder:"Collez le lien de la photo"},null,512),[[u,this.image]]),G,a(t("input",{type:"text",id:"cagnotte","onUpdate:modelValue":o[7]||(o[7]=e=>this.link=e),placeholder:"Collez le lien de la cagnotte"},null,512),[[u,this.link]]),t("div",X,[c(r,{style:{"background-color":"red"},onClick:o[8]||(o[8]=e=>g.reset())},{default:n(()=>[l("Reset")]),_:1}),c(r,{style:{"background-color":"lightgreen"}},{default:n(()=>[l("Valider")]),_:1}),c(r,{onClick:o[9]||(o[9]=e=>this.form_show=!1)},{default:n(()=>[l("Fermer")]),_:1})])],32)):b("",!0),this.sav_show?(d(),p("form",{key:1,action:"",onSubmit:o[15]||(o[15]=f(e=>g.saveSAV(),["prevent"]))},[t("fieldset",null,[t("div",null,[Y,a(t("select",{id:"selection","onUpdate:modelValue":o[11]||(o[11]=e=>this.sav.motif=e)},te,512),[[_,this.sav.motif]])]),t("div",null,[oe,a(t("input",{type:"text",id:"object","onUpdate:modelValue":o[12]||(o[12]=e=>this.sav.object=e)},null,512),[[u,this.sav.object]])]),t("div",null,[ie,a(t("input",{type:"checkbox",name:"urgent",id:"","onUpdate:modelValue":o[13]||(o[13]=e=>this.sav.urgent=e)},null,512),[[A,this.sav.urgent]])])]),se,a(t("textarea",{name:"message",id:"message",cols:"30",rows:"10","onUpdate:modelValue":o[14]||(o[14]=e=>this.sav.message=e)},null,512),[[u,this.sav.message]]),c(r,null,{default:n(()=>[l("Envoyer")]),_:1})],32)):b("",!0)])}const re=j(N,[["render",ae],["__scopeId","data-v-eb29a5ac"]]);export{re as default};
