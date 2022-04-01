let data = [];

// 1 - space-port-image
// 2 - capsule-image 
// ELEMENTS REFERENCE
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const image = document.querySelector("#page-image");

// VARIABLES
let selectedTabIndex = 0;

// FETCHES DATA FROM THE data.json file
getData();

async function getData() {
    const DATA_URL = "./../data.json";
    const rawRespons = await fetch(DATA_URL);
    const jsonResponse = await rawRespons.json();
    data = jsonResponse.technology;
}

// TAB HANDLER
function tabClickHandler( tabIndex ) {
    const index = parseInt(tabIndex) - 1;
    if( selectedTabIndex == index ) return;
    selectedTabIndex = index;
    changeTabContent();
}

function changeTabContent() {
    title.innerHTML = data[selectedTabIndex].name;
    if( window.innerWidth <= 768 ) {
        image.style.backgroundImage = `url(${data[selectedTabIndex].images.landscape})`;
    } else {
        image.style.backgroundImage = `url(${data[selectedTabIndex].images.portrait})`;
    }
    image.style.backgroundSize = "100% 100%";

    description.innerHTML = data[selectedTabIndex].description;
}