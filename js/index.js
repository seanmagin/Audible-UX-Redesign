
function sortObjects(a, b) {
    if (a.Order < b.Order) {
        return -1;
    }
    if (a.Order > b.Order) {
        return 1;
    }
    return 0;
}

function launch() {
    appHeader();
    appContainer();

}

launch();