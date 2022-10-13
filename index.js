let mainPage = document.querySelector(".mainPage");
let body = document.querySelector("body");
let mainText = document.querySelectorAll("p");
let lightCode = document.querySelectorAll("p.lightCode");
let darkCode = document.querySelectorAll("p.darkCode");
let navCol = document.querySelector(".navCol");
let navText = document.querySelectorAll("a.navText");
let headerText = document.querySelectorAll(".chapH");
let headerText2 = document.querySelectorAll("h3");

function giveHeadersLight(){
    for(i = 0; i < headerText.length; i++){
        headerText[i].classList.add("text-light");
    }
    for(i = 0; i < headerText2.length; i++){
        headerText2[i].classList.add("text-light");
    };
}

let themeCheck = true;
let firstTime = false;

function themeChange(){
    if (themeCheck == true){
        if (firstTime == false){
            giveHeadersLight();
            firstTime = true;
        };
        mainPage.classList.replace("bg-white", "bg-dark");
        body.classList.replace("bg-light", "bg-dark");
        navCol.classList.replace("bg-light", "bg-dark");
        themeCheck = false;
        for(i = 0; i < mainText.length; i++){
            mainText[i].setAttribute("class", "text-light");
        }
        for(i = 0; i < darkCode.length; i++){
            darkCode[i].classList.add("superDark");
        }
        for(i = 0; i < lightCode.length; i++){
            lightCode[i].classList.replace("text-light", "lightCode");
        }
        for(i = 0; i < navText.length; i++){
            navText[i].classList.replace("text-dark", "text-light");
        }
        for(i = 0; i < headerText.length; i++){
            headerText[i].classList.replace("text-dark", "text-light");
        }
        for(i = 0; i < headerText2.length; i++){
            headerText2[i].classList.replace("text-dark", "text-light");
        };

    } else if (themeCheck == false){
        mainPage.classList.replace("bg-dark", "bg-white");
        body.classList.replace("bg-dark", "bg-light");
        navCol.classList.replace("bg-dark", "bg-light");
        themeCheck = true;
        for(i = 0; i < mainText.length; i++){
            mainText[i].setAttribute("class", "text-dark");
        }
        for(i = 0; i < darkCode.length; i++){
            darkCode[i].classList.replace("text-dark", "darkCode");
        }
        for(i = 0; i < lightCode.length; i++){
            lightCode[i].classList.replace("text-dark", "lightCode");
        }
        for(i = 0; i < navText.length; i++){
            navText[i].classList.replace("text-light", "text-dark");
        }
        for(i = 0; i < headerText.length; i++){
            headerText[i].classList.replace("text-light", "text-dark");
        }
        for(i = 0; i < headerText2.length; i++){
            headerText2[i].classList.replace("text-light", "text-dark");
        };
    };
}
