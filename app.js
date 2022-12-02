
let box=document.getElementById("box")
let input=document.getElementById("input")
let btn=document.getElementById("btn")


 let a=input.value
   
    btn.addEventListener("click",()=>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=e1e3ab5ebeb54159af2125823211608%20&q=${input.value}&aqi=yes}`)
       
        .then(res=>res.json())
         .then(res=>{
     
     box.innerHTML =`<div class="div"><span><h3 class="h3">${res.location.name} </h3 > ${res.location.localtime} </br>${res.current.temp_c} ${res.current.condition.text}</span><img  src="${res.current.condition.icon}" /></div>`
    
    })  
    
})

