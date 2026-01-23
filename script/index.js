function loadCatagories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>displayCatagories(data.categories))
}

function displayCatagories(catagories){
    const catagoryContainer=document.getElementById("catagory-container");

    for (let cat of catagories){
        console.log(cat)

        const catagoriDiv=document.createElement("div");
        catagoriDiv.innerHTML=`
         <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        catagoryContainer.appendChild(catagoriDiv)
    }
}

loadCatagories()