import{S as m,a as u,i as d}from"./assets/vendor-CWo9T4oQ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g=new m(".gallery-link",{captionsData:"alt",captionDelay:250}),i={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},y=s=>{i.gallery.innerHTML=s.map(({largeImageURL:a,webformatURL:r,tags:o,likes:e,views:t,comments:l,downloads:c})=>`
    <li class="gallery-item">
  	  <a class="gallery-link" href="${a}">
  	  	<img
  	  		class="gallery-image"
  	  		src="${r}"
  	  		alt="${o}"
  	  		/>
        <ul class="gallery-meta">
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Likes:</span>
            ${e}
          </li>
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Views:</span>
            ${t}
          </li>
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Comments:</span>
            ${l}
          </li>
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Downloads:</span>
            ${c}
          </li>
        </ul>
  	  </a>

    </li>
  `).join(""),g.refresh()},f=()=>{i.gallery.innerHTML=""},p=()=>{i.loader.classList.remove("is-hidden")},h=()=>{i.loader.classList.add("is-hidden")},L=s=>{const a=new URLSearchParams({key:"57971034-8c5a8e627d304003806052b2f",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return u.get(`https://pixabay.com/api/?${a}`).then(r=>{if(r.status!==200)throw new Error(r.status);return r.data.hits})},b={class:"message",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",theme:"dark",position:"topRight",maxWidth:"432px"},n=s=>{d.error({...b,title:"",message:s,backgroundColor:"#ef4040"})},S={form:document.querySelector(".form")};S.form.addEventListener("submit",async s=>{s.preventDefault();const a=s.target.elements["search-text"].value.trim();if(!a){n("Query cannot be empty");return}f(),p(),L(a).then(r=>{if(r.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}y(r)}).catch(r=>{n(`An error occurred: ${r.message}`)}).finally(()=>{h()})});
//# sourceMappingURL=index.js.map
