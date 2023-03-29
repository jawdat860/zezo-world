let skill = document.querySelector(".skill")
let spans = document.querySelectorAll(".skill .box .box-in .rr span")
let stat = document.querySelector(".stat");
let spanss = document.querySelectorAll(".stat .box span:first-of-type");
window.addEventListener("scroll",()=>{
    if(window.scrollY >= skill.offsetTop){
        spans.forEach(element => {
            element.style.width = element.dataset.width
        });
    }
})
window.addEventListener("scroll",()=>{
    if(window.scrollY >= stat.offsetTop){
        spanss.forEach(element => {
           
           let s= setInterval(()=>{
            let one =parseInt(element.innerHTML);
            let two = parseInt(element.dataset.num);
              if(one === two){
                clearInterval(s)
              }else{
                    element.innerHTML++;
                }
                
            },3000/element.dataset.num)
        });
    }
})

