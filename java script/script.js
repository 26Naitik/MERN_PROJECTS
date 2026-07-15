let count=0;
document.getElementById("ibtn").addEventListener("click",function(){
  count++;
  document.getElementById("cntr").textContent=count;
});
document.getElementById("dbtn").addEventListener("click",function(){
  count--;
  document.getElementById("cntr").textContent=count;
});
document.getElementById("rbtn").addEventListener("click",function(){
  count=0;
  document.getElementById("cntr").textContent=count;
});