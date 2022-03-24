// DATA
let data = [];

// ELEMENT REFERENCES
const navBar = document.querySelector("#nav-bar");
const hamburgerIconImg = document.querySelector("#hamburger-icon");
const planetImage = document.querySelector("#planet-img");
const tabs = document.querySelectorAll(".tab-item");
const tabItemTitle = document.querySelector("#tab-item-title");
const tabItemDesc = document.querySelector("#tab-item-desc");
const statAvgDistance = document.querySelector("#stat-avg-dist");
const statEstTravelTime = document.querySelector("#stat-est-travel-time");

// CONSTANTS
const HAMBURGER_ICON_SRC = "./assets/shared/icon-hamburger.svg";
const CLOSE_ICON_SRC = "./assets/shared/icon-close.svg";
let isIconHamburger = true;

let numSelectedTab = 0;

// FETCHES DATA FROM THE data.json file
getData();

async function getData() {
    const DATA_URL = "./../data.json";
    const rawRespons = await fetch(DATA_URL);
    const jsonResponse = await rawRespons.json();
    // THE BELOW LINE WILL TAKE ALL THE DATA FOR THE DESTINATION PAGE FROM
    // THE data.json FILE AND ASSIGN IT TO THE "data" VARIABLE
    data = jsonResponse.destinations;
}


// HAMBURGER CLICK HANDLER
function hamburgerClickHandler() {
    navBar.classList.toggle("nav-active");
    hamburgerIconImg.src = isIconHamburger ? CLOSE_ICON_SRC : HAMBURGER_ICON_SRC;
    isIconHamburger = !isIconHamburger;
}

// TABS CLICK HANDLER
function changeTabHandler( tabIndex ) {
    let numTabIndex = parseInt(tabIndex) - 1;
    if( tabIndex === numSelectedTab) return;
    changeSelectedTab( numTabIndex );
    numSelectedTab = numTabIndex;
    changeTabInfo( numSelectedTab );
}

function changeSelectedTab( currentSelectedTab ) {
    tabs[ currentSelectedTab ].classList.toggle("tab-item-active"); 
    tabs[ numSelectedTab ].classList.toggle("tab-item-active"); 
}

function changeTabInfo( tabIndex ) {
    tabItemTitle.innerHTML = data[ tabIndex ].name;
    tabItemDesc.innerHTML = data[ tabIndex ].description;
    statAvgDistance.innerHTML = data[tabIndex].distance;
    statEstTravelTime.innerHTML = data[tabIndex].travel;
    planetImage.src = data[tabIndex].images.png;
}

