"use strict"

let body = document.querySelector("body");
let click = document.querySelector("main .click");
let modal = document.querySelector("main .modal");
let quit = document.querySelector("main .modal i");
let cancel = document.querySelector("main .modal .response .cancel");
let accept = document.querySelector("main .modal .response .accept");

click.addEventListener("click", function() {
    modal.style.opacity = "1";
    modal.style.transform = "translateY(-60px)";
    modal.style.pointerEvents = "unset";
    body.style.background = "rgba(0, 0, 0, 0.3)";
})

quit.addEventListener("click", hide);
cancel.addEventListener("click", hide);
accept.addEventListener("click", hide);

function hide() {
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-165px)";
    modal.style.pointerEvents = "none";
    body.style.background = "unset";
}