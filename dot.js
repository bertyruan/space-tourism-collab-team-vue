const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role= "tab"]');

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel);
});



//changettabfocus
let tabFocus = 0;
function changeTabFocus(e) {

}

//function changeTabPanel

function changeTabPanel(e) {

    console.log(e);

}
