import{r as e,w as h,d as a,n as i,g as m,C as f,a as c,e as l,c as u,t as v,b as L,f as b}from"./footer-modal-6f48d5d1.js";e.catalogForm.addEventListener("submit",C);async function y(r=1){try{i.Loading.standard("Loading...",{backgroundColor:"rgba(0,0,0,0.8)",svgColor:"rgb(248, 119, 25)"});const t={query:a.searchQuery,primary_release_year:a.searchYear,page:a.searchCurrentPage,region:a.searchRegion,year:a.searchYear},s=await m(t),n=s.results;new f(s,y).activatePagination(),n.length?(p(s),e.catalogForm.reset(),g(),e.tuiPaginationContainer.style.display="block"):(P(),d(),c(e.catalogList,l),e.tuiPaginationContainer.style.display="none"),e.buttonReset.addEventListener("click",M=>{e.catalogForm.reset(),g()})}catch(t){console.error(t),d(),c(e.catalogList,l)}i.Loading.remove()}async function C(r){r.preventDefault();const t=r.currentTarget,s=t.elements.searchQuery.value.trim(),n=t.elements.country.value,o=t.elements.year.value;s===""?h():(R(1,s,o,n),y())}function p(r){screen.width<=767?u(r.results,e.catalogList,10):u(r.results,e.catalogList,20)}function P(){e.buttonReset.classList.remove("hidden"),e.buttonReset.classList.add("active"),w()}function g(){e.buttonReset.classList.remove("active"),e.buttonReset.classList.add("hidden")}function d(){e.catalogList.innerHTML=""}function R(r,t,s,n){a.searchCurrentPage=r,a.searchQuery=t,a.searchYear=s,a.searchRegion=n}function w(){a.searchCurrentPage=0,a.searchQuery="",a.searchYear="",a.searchRegion=""}v();L("hero/catalog");h();b();