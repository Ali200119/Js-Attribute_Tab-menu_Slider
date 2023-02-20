"use strict"

// let linkElem = document.querySelector("a");
// let github = document.querySelector("body").children[1];
// let google = document.querySelector("body").children[2];

// // console.log(linkElem.getAttribute("href"));

// // linkElem.setAttribute("href", "https://www.google.com");

// // console.log(linkElem.hasAttribute("href"));

// github.addEventListener("click", function() {
//     linkElem.setAttribute("href", "https://github.com")
// })

// google.addEventListener("click", function() {
//     linkElem.setAttribute("href", "https://www.google.com")
// })

let btn = document.querySelectorAll("main .tab .menu button");
let contents = document.querySelectorAll("main .tab .content p");

for (const button of btn) {
    button.addEventListener("click", function() {
        document.querySelector("main .tab .menu .active").classList.remove("active");
        this.classList.add("active");

        for (const content of contents) {
            if (button.getAttribute("data-id") == content.getAttribute("data-id")) {
                content.classList.add("active");
            }
            
            else {
                content.classList.remove("active");
            }
        }
    })
}

// document.querySelector("a").removeAttribute("href");