const cBtn = document.getElementById("lang");

const consol = document.getElementById("cmd");
const banner = document.getElementById("banner");

const box = document.getElementById("cmd-box");

cBtn.addEventListener('click', toggleConsole);

let cmdOpen = false;

function toggleConsole() {
    if (cmdOpen) {
        consol.style.display = "none";
        banner.style.display = "block";
    } else {
        consol.style.display = "block";
        banner.style.display = "none";
        box.focus();
    }
    cmdOpen = !cmdOpen;
}

box.addEventListener("keyup", handleCmd)

function handleCmd(event) {
    if (event.key === "Enter") {
        parseCmd(box.value.trim());
        box.value = "";
    }
}

function parseCmd(text) {
    if (text === "draw") {
        console.log("draw command");
    }
} 