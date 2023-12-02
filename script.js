var a = document.querySelector("#round");
var b = document.querySelector("#dot");
document.addEventListener("mousemove" ,function (e){
  a.style.cssText = b.style.cssText
  = "left:" + e.clientX + "px;top:" + e.clientY + "px"
});