import{a as m,c as y,o as d,j as b,b as u}from"./header-7c1f1e4e.js";const t=9;let o=1;const c=document.querySelector(".my-library-list"),s=document.getElementById("btn-load-more"),e=localStorage.getItem("myLibrary")?JSON.parse(localStorage.getItem("myLibrary")):[],l=p(e,t);if(e.length==0)m(c,b);else{const r=e.length<t?e.length:t;y(e,c,r)}e.length>t&&s.style.setProperty("display","block");c.addEventListener("click",d);s.addEventListener("click",f);function p(r,n){const i=[];for(let a=0;a<r.length;a+=n){const g=r.slice(a,a+n);i.push(g)}return i}function f(r){const n=l[o].length<t?l[o].length:t;y(l[o],c,n),o++,o>=l.length&&s.style.setProperty("display","none")}u("library");