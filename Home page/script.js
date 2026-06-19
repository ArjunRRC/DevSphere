var sideBar = document.getElementById("sidebar");
var menuClose = document.getElementById("menu-close");

menuClose.addEventListener('click',()=>{
    sideBar.style.marginLeft = "-40%"
});

var menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener('click',()=>{
    sideBar.style.marginLeft = "0px"
});

var slide = document.querySelector(".movie-images");
var currentSlide = 0;

document.getElementById("right-arrow").addEventListener("click",()=>{
    currentSlide++;

    if(currentSlide > 2){
        currentSlide = 0;
    };

    slide.style.transform =
        "translateX(-" + (currentSlide * 100) + "%)";
    })
    document.getElementById("left-arrow").addEventListener("click",()=>{
        currentSlide--;

       if(currentSlide < 0){
        currentSlide = 2;
    }

    slide.style.transform =
        "translateX(-" + (currentSlide * 100) + "%)";

})


const MovieList = [
    {
        title: "Avengers Endgame",
        image: "/Home page/Home-Images/thumb-1.jpg",
    },
    {
        title: "Vadachennai",
        image: "/Home page/Home-Images/thumb-2.jpg",
    },
    {
        title: "Thani Oruvan",
        image: "/Home page/Home-Images/thumb-3.jpg",
    },
    {
        title: "mandela",
        image: "/Home page/Home-Images/thumb-4.jpg",
    },
    {
        title: "Bullet Train",
        image: "/Home page/Home-Images/thumb-5.jpg",
    },
    {
        title: "Thor",
        image: "/Home page/Home-Images/thumb-6.jpg",
    },
    {
        title: "Fast & Furious",
        image: "/Home page/Home-Images/thumb-7.jpg",
    },
    {
        title: "Thunivu",
        image: "/Home page/Home-Images/thumb-8.jpg",
    }
];

const SeriesList = [
    {
        title: "Game of Thrones",
        image: "/Home page/Home-Images/thumb-9.jpg",
    },
    {
        title: "Money Heist",
        image: "/Home page/Home-Images/thumb-10.jpg",
    },
    {
        title: "Breaking Bad",
        image: "/Home page/Home-Images/thumb-11.jpg",
    },
    {
        title: "House of the Dragon",
        image: "/Home page/Home-Images/thumb-12.jpg",
    },
    {
        title: "Loki",
        image: "/Home page/Home-Images/thumb-13.jpg",
    },
    {
        title: "Heart Beat",
        image: "/Home page/Home-Images/thumb-14.jpg",
    },
    {
        title: "Police Police",
        image: "/Home page/Home-Images/thumb-15.jpg",
    },
    {
        title: "November Story",
        image: "/Home page/Home-Images/thumb-16.jpg",
    }
];

const AnimeList = [
    {
        title: "Deagon Ballz",
        image: "/Home page/Home-Images/thumb-17.jpg",
    },
    {
        title: "Naruto",
        image: "/Home page/Home-Images/thumb-18.jpg",
    },
    {
        title: "Doreamon",
        image: "/Home page/Home-Images/thumb-19.jpg",
    },
    {
        title: "Suzume",
        image: "/Home page/Home-Images/thumb-20.jpg",
    },
    {
        title: "Your Name",
        image: "/Home page/Home-Images/thumb-21.jpg",
    },
    {
        title: "Tom & Jerry",
        image: "/Home page/Home-Images/thumb-22.jpg",
    },
    {
        title: "Full Metal Achimist",
        image: "/Home page/Home-Images/thumb-23.jpg",
    },
    {
        title: "Attack On Titan",
        image: "/Home page/Home-Images/thumb-24.jpg",
    }
];

function createContentCard(content, container) {
    let img = document.createElement('img');
    img.src = content.image;

    let contentImage = document.createElement('div');
    contentImage.className = "movie-image";
    contentImage.appendChild(img);
    
    let heading = document.createElement('h3');
    heading.textContent = content.title;

    let contentTitle = document.createElement('div');
    contentTitle.className = "movie-title";
    contentTitle.appendChild(heading);

    let contentCard = document.createElement('div');
    contentCard.className = "movie-card";
    contentCard.appendChild(contentImage);
    contentCard.appendChild(contentTitle);
    
    container.appendChild(contentCard);
}


function displayContent() {
    let moviesContainer = document.getElementById("movies");
    MovieList.forEach((movie) => createContentCard(movie, moviesContainer));

    let seriesContainer = document.getElementById("series");
    SeriesList.forEach((series) => createContentCard(series, seriesContainer));

    let animeContainer = document.getElementById("anime");
    AnimeList.forEach((anime) => createContentCard(anime, animeContainer));
}

function searchContent(element) {
    let value = element.value.toLowerCase();
    let searchContainer = document.getElementById('search-content');

    searchContainer.innerHTML = "";

    if (value.length > 2) {
        let moviesFound = MovieList.filter((movie) => movie.title.toLowerCase().includes(value));
        moviesFound.forEach((movie) => createContentCard(movie, searchContainer));

        let animeFound = AnimeList.filter((anime) => anime.title.toLowerCase().includes(value));
        animeFound.forEach((anime) => createContentCard(anime, searchContainer));

        let seriesFound = SeriesList.filter((series) => series.title.toLowerCase().includes(value));
        seriesFound.forEach((series) => createContentCard(series, searchContainer));
    }
    // if (value.length > 2) {
        
    // }
    //  if (value.length > 2) {
        
    // }
    
}

displayContent();

function openSearch() {
    let container = document.getElementById('search-container');
    container.style.display = "block";

    document.body.style.overflowY = "hidden";
}

function closeSearch() {
    let searchContainer = document.getElementById('search-content');
    searchContainer.innerHTML = "";

    let searchInput = document.getElementById('search');
    searchInput.value = "";

    document.body.style.overflowY = "visible";

    let container = document.getElementById('search-container');
    container.style.display = "none";
}

