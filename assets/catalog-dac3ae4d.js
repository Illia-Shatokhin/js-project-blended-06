import{n as d,g as u,a as n}from"./hero-2a043042.js";import{c as i,r,g as m}from"./catalogMovieCard-90d908b1.js";const c=document.getElementById("search-form"),s=document.querySelector(".catalog-button-reset"),l=document.querySelector(".catalog-search-button");c.addEventListener("submit",f);async function f(e){e.preventDefault();const a=e.currentTarget.elements.searchQuery.value.trim();a===""?d.exports.Notify.failure("No value!"):((await g(a)).length?alert("Ф-я рендер Каті"):alert("Заглушка"),v()),s.addEventListener("click",o=>{c.reset(),y()})}async function g(e){try{return await(await u({query:e,include_adult:!1,page:1})).results}catch(t){console.error(t)}}function v(){s.classList.remove("hidden"),s.classList.add("active"),l.disabled=!0}function y(){s.classList.remove("active"),s.classList.add("hidden"),l.disabled=!1}screen.width<=767?i(n,r.catalogList,10):i(n,r.catalogList,20);r.catalogList.addEventListener("click",async e=>{const t=e.target;if(t.tagName==="LI"){const a=t.id;await m(a)}});
