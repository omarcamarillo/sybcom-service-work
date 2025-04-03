fetch("client.json")
.then(function(response){
    return response.json();
})
.then(function(clients){
    let placeholder = document.querySelector('#content-work');
    let out = "";
    for(let client of clients){
        out += `
            <li class="client" data-category="${client.category}">
                <span class="${client.status}" style="font-size:8px;"> <i class="ri-checkbox-blank-circle-fill"></i> </span>
                <span class="info">${client.name}</span>
                <a href="" class="info">${client.phone}</a>
                <a href="" class="info">${client.locate}</a>
                <span class="info">${client.work}</span>
                <span class="info" style="width: 300px;">${client.price}</span>
            </li>
        `
    }

    placeholder.innerHTML = out;
})


window.onload = function() {

    const body = document.querySelector(".hidden")
    const startBtn = document.querySelector("#join")
    const loading = document.querySelector("#alerta")
    
    
    startBtn.addEventListener("click", ()=>{
        body.classList.remove("hidden")
        loading.setAttribute("style", "opacity: 0;pointer-events: none;transform: scale(0);")
    })
    // body.classList.remove("hidden");
}