var mapElem = document.getElementById("map");
var inpElem = document.getElementById("empty");
inpElem.focus();
inpElem.addEventListener("input", handleMap);
var map = 1;
function handleMap() {
    if (map === 1) {
        mapElem.innerText = "M---";
    } else if (map === 2) {
        mapElem.innerText = "-M--";
    } else if (map === 3) {
        mapElem.innerText = "--M-";
    } else if (map === 4) {
        mapElem.innerText = "---M";
    } else if (map === 5) {
        mapElem.innerText = "M---";
        map = 1
    }
    map = map + 1;
}
handleMap();