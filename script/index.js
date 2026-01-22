function loadCatagories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>displayCatagories(data.categories))
}

function displayCatagories(catagories){
    console.log(catagories)
}

loadCatagories()