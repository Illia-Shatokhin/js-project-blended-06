import{h as Q,c as P,r as D,o as X,a as K,e as ee,n as j,t as te,b as ne,f as ae}from"./button-to-header-b137ad25.js";async function oe(){try{const e=await Q();P(e.results,D.weeklyLinks,3),D.weeklyLinks.addEventListener("click",X)}catch(e){console.error(e),K(D.weeklyLinks,ee)}}localStorage.getItem("myLibrary")||localStorage.setItem("myLibrary",JSON.stringify([]));const G=new Date;G.getMonth();const B={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzcwNGY3NWVjYTA3MmEwNGFiODBiNzBjOTQ5ZWZjMiIsInN1YiI6IjY0Nzg0ZWFkY2Y0YjhiMDEwMzFjZWZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HGp4SG4w1Ow4nxzAlMDbe5phup9IwpC6GqyzdUZE9ZM"}};fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",B).then(e=>e.json()).then(e=>{j.Loading.standard("Loading...",{backgroundColor:"rgba(0,0,0,0.8)",svgColor:"rgb(248, 119, 25)"});const n={};e.genres.forEach(t=>{n[t.id]=t.name}),fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",B).then(t=>t.json()).then(t=>{const c=t.results;if(c.length===0){const l=document.createElement("p");l.textContent="No upcoming films found.",document.getElementById("film-container").appendChild(l)}else{const l=G.getMonth()+1,m=[];if(c.forEach(i=>{new Date(i.release_date).getMonth()+1===l&&m.push(i)}),m.length>0){let Y=function(M){const S=new Date(M),U=String(S.getDate()).padStart(2,"0"),q=String(S.getMonth()+1).padStart(2,"0"),H=S.getFullYear();return`${U}.${q}.${H}`};const i=Math.floor(Math.random()*m.length),a=m[i],r=document.createElement("div");r.className="film-card";const F=document.querySelector(".upcoming-film-image-container"),h=document.createElement("img");h.className="film-image",h.src=screen.width>=768?`https://image.tmdb.org/t/p/original/${a.backdrop_path}`:`https://image.tmdb.org/t/p/original/${a.poster_path}`,F.appendChild(h);const y=document.createElement("h2");y.className="film-title",y.textContent=a.title.toUpperCase(),r.appendChild(y);const s=document.createElement("div");s.className="film-wrap",r.appendChild(s);const d=document.createElement("div");d.className="film-release-wrap",s.appendChild(d);const C=document.createElement("p");C.className="film-release-text",C.textContent="Release Date",d.appendChild(C);const v=document.createElement("p");v.className="film-release-date";const $=Y(a.release_date);v.textContent=$,d.appendChild(v);const p=document.createElement("div");p.className="film-vote-wrap",s.appendChild(p);const E=document.createElement("p");E.className="film-vote-text",E.textContent="Vote / Votes",p.appendChild(E);const L=document.createElement("p");L.className="film-votes",L.innerHTML=`<span class="vote-average">${a.vote_average}</span> / <span class="vote-count">${a.vote_count}</span>`,p.appendChild(L);const f=document.createElement("div");f.className="film-popularity-wrap",s.appendChild(f);const b=document.createElement("p");b.className="film-rating-text",b.textContent="Popularity",f.appendChild(b);const k=document.createElement("p");k.className="film-rating",k.textContent=`${a.popularity.toFixed(1)}`,f.appendChild(k);const g=document.createElement("div");g.className="film-genre-wrap",s.appendChild(g);const N=document.createElement("p");N.className="film-genre-text",N.textContent="Genre",g.appendChild(N);const x=document.createElement("p");x.className="film-genre";const V=a.genre_ids.map(M=>n[M]);x.textContent=`${V.join(", ")}`,g.appendChild(x);const w=document.createElement("p");w.className="film-about",w.textContent="ABOUT",r.appendChild(w);const I=document.createElement("p");I.className="film-description",I.textContent=a.overview,r.appendChild(I);const o=document.createElement("button");o.className="library-button button btn-gradient",W(a.id)?(o.textContent="Remove from My Library",o.classList.remove("btn-gradient")):(o.textContent="Add to My Library",o.classList.add("btn-gradient")),o.addEventListener("click",()=>ie(a,o)),r.appendChild(o),document.getElementById("film-container").appendChild(r)}else{const i=document.createElement("p");i.textContent="No upcoming films found for this month.",document.getElementById("film-container").appendChild(i)}}})});j.Loading.remove();function W(e){return JSON.parse(localStorage.getItem("myLibrary")).some(t=>t.id===e)}function ie(e,n){const t=JSON.parse(localStorage.getItem("myLibrary")),c=t.findIndex(l=>l.id===e.id);c===-1?t.push(e):t.splice(c,1),localStorage.setItem("myLibrary",JSON.stringify(t)),W(e.id)?(n.textContent="Remove from My Library",n.classList.remove("btn-gradient"),n.style.background="white",n.style.color="orange"):(n.textContent="Add to My Library",n.classList.add("btn-gradient"),n.style.background="var(--basic-gradient)",n.style.color="black")}const J=document.getElementById("our-team-btn"),u=document.querySelector(".team__backdrop"),T=document.querySelector(".team__modal-close-btn"),A=document.querySelector("body");J.addEventListener("click",O);function O(e){e.preventDefault(),u.classList.remove("is-hidden"),document.body.classList.add("modal-open"),re()}function R(e){e.preventDefault(),e.code==="Escape"&&_()}function Z(e){e.target.closest(".team__wrapper")||_()}function z(e){e.preventDefault(),_()}function re(){document.addEventListener("keydown",R),u.addEventListener("click",Z),T.addEventListener("click",z),A.style.overflow="hidden"}function _(){document.removeEventListener("keydown",R),u.removeEventListener("click",Z),T.removeEventListener("click",z),u.classList.add("is-hidden"),document.body.classList.remove("modal-open"),A.style.overflow="auto"}J.addEventListener("click",O);te();ne("hero/catalog");oe();ae();
