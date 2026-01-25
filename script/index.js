function removeActiveClass(){
    const activeButtons=document.getElementsByClassName("active");
    for(const btn of activeButtons){
        btn.classList.remove("active");
    }
}

function loadCatagories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCatagories(data.categories))
}

function loadVedieos() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((response) => response.json())
        .then(data => {
            document.getElementById("btn-all").classList.add("active");
            displayVedieos(data.videos)

        })
}

const loadCategoriVedieos = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActiveClass();
            const clickedButton = document.getElementById(`btn-${id}`);
            clickedButton.classList.add("active")
            displayVedieos(data.category)
        })
}

function displayCatagories(catagories) {
    const catagoryContainer = document.getElementById("catagory-container");

    for (let cat of catagories) {

        const catagoriDiv = document.createElement("div");
        catagoriDiv.innerHTML = `
         <button id="btn-${cat.category_id}" onclick="loadCategoriVedieos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        catagoryContainer.appendChild(catagoriDiv)
    }
}
const displayVedieos = (vedieos) => {
    const vedieoContainer = document.getElementById("vedieo-container");

    vedieoContainer.innerHTML = "";

    if (vedieos.length == 0) {
        vedieoContainer.innerHTML = `
        <div class="col-span-full text-center flex flex-col justify-center items-center py-20">
            <img class="w-[120px]" src="./Icon.png" alt="" srcset="">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>
        `
        return;
    }

    vedieos.forEach(vedieo => {
        // console.log(vedieo)
        const vedioCard = document.createElement("div");

        vedioCard.innerHTML = `
      <div class="card bg-base-100">
            <figure class="relative">
                <img class="w-full h-[150px] object-cover" src="${vedieo.thumbnail}" alt="Shoes" />
                <span class="absolute bottom-2 right-3 text-white text-sm rounded bg-black px-2">3hrs 56 min ago</span>
            </figure>

            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                            <img src="${vedieo.authors[0].profile_picture}" />
                        </div>
                    </div>
                </div>
                <div class="intro">
                    <h2 class="text-sm font-semibold">Building a Winning UX Strategy <br> Using the Kano Model</h2>
                    <p class="text-sm text-gray-400 flex gap-1">${vedieo.authors[0].profile_name}
                    
                    <img class="w-5 h-5"
                            src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""></p>
                    <p class="text-sm text-gray-400">${vedieo.others.views} views</p>
                </div>
            </div>
        </div>
    `;

        vedieoContainer.append(vedioCard)
    });
}



loadCatagories()
// loadVedieos()