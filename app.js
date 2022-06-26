const toggles = document.querySelectorAll(".toggle");
const good  = document.getElementById("good");
const fast = document.getElementById("fast");
const cheap = document.getElementById("cheap");


toggles.forEach(toggle=>{
    toggle.addEventListener("change",(e)=>{
        controlItem(e.target);
    })
})

function controlItem(e){
  if(good.checked && fast.checked && cheap.checked){
    if(good===e){
        good.checked=false;
    }
    if(fast===e){
        fast.checked=false;
    }
    if(cheap.checked){
        cheap.checked=false;
    }
  }
}