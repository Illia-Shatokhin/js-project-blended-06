import{r as e,n as g,g as f,a as c,e as l,c as d,b as v,w as m,o as L}from"./header-22777803.js";e.catalogForm.addEventListener("submit",b);async function b(t){try{t.preventDefault();const a=t.currentTarget,r=a.elements.searchQuery.value.trim(),n=a.elements.country.value,i=a.elements.year.value;if(console.log(i),console.log(n),r==="")g.exports.Notify.failure("No movie specified!");else{const s=await(await f({query:r,include_adult:!1,page:1,region:n,year:i})).results;console.dir(s[0].release_date),console.dir(s),s.length?(o(),p(s)):(o(),c(e.catalogList,l)),y()}e.buttonReset.addEventListener("click",u=>{e.catalogForm.reset(),h()})}catch(a){console.error(a),o(),c(e.catalogList,l)}}function p(t){screen.width<=767?d(t,e.catalogList,10):d(t,e.catalogList,20)}function y(){e.buttonReset.classList.remove("hidden"),e.buttonReset.classList.add("active"),e.buttonSearchCatalog.disabled=!0}function h(){e.buttonReset.classList.remove("active"),e.buttonReset.classList.add("hidden"),e.buttonSearchCatalog.disabled=!1}function o(){e.catalogList.innerHTML=""}v();m();e.catalogList.addEventListener("click",L);
