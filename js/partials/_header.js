function createNavItem(links) {
    var navItems = "";
    sorted = links.sort(sortObjects);
    for (i = 0; i < links.length; i++) {
        navItems +=
            `<li class="nav-item">
            <span class="fa ${links[i].Nav_Icon}"></span>
            <a class="nav-link" href="${links[i].Nav_Name}">
                ${links[i].Nav_Name}
            </a>
        </li>`
    } return navItems;
}

function createCTAButtons(ctaBtns) {
    var navCTABtns = ""
    sorted = ctaBtns.sort(sortObjects);

    for (i = 0; i < sorted.length; i++) {
        navCTABtns +=
            `<a class="btn ${sorted[i].class_Name}" type="button" href="${sorted[i].cta_Link}">${sorted[i].cta_Copy}</a>`;
    } return navCTABtns;
}

function appHeader() {
    navigationItems();
    document.getElementById("header").innerHTML =
        `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Amazon Logo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">${createNavItem(navigationArray.links)}</ul>
                    <span class="navbar-text">
                        ${createCTAButtons(navigationArray.ctaButtons)}
                        <!--<a class="btn btn-secondary" type="button" href="#">My Account</a>-->
                        <!--<a class="btn btn-primary" type="button" href="#">Join Audible</a>-->
                    </span>
                </div>
            </div>
        </nav>`
}