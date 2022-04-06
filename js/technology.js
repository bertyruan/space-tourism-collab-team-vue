let data = [];

// 1 - space-port-image
// 2 - capsule-image 
// ELEMENTS REFERENCE
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const image = document.querySelector("#page-image");
const links = document.querySelectorAll(".link");

// VARIABLES
let selectedTabIndex = 0;

init();


async function init() {
    // FETCHES DATA FROM THE data.json file
    // await blocks code from executing until data is fetched
    await getData();

    // Sets the page's image
    setImage();
    
    //checks when the window has been resized and update the image if changes from desktop view
    window.addEventListener('resize', setImage);

    links[selectedTabIndex].classList.toggle('selected');
}

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
    const prevIndex = selectedTabIndex;
    selectedTabIndex = index;

    links[prevIndex].classList.toggle('selected');
    links[selectedTabIndex].classList.toggle('selected');
    changeTabContent();
}

function changeTabContent() {
    title.innerHTML = data[selectedTabIndex].name;
    description.innerHTML = data[selectedTabIndex].description;
    setImage();
}

function setImage() {
    if( window.innerWidth < 1440 ) {
        image.src = data[selectedTabIndex].images.landscape;
    } else {
        image.src = data[selectedTabIndex].images.portrait;
    }
}