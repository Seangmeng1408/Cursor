var focus=document.querySelector(".mouse_on");
var focusWidth=focus.offsetWidth/2;

window.addEventListener("mousemove",(e)=>{
    focus.style.left=e.clientX-focusWidth+"px";
    focus.style.top=e.clientY-focusWidth+"px";
})
window.addEventListener("click",()=>{
    window.open("https://www.dinseangmeng.xyz");
})