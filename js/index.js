function navigationItems() {
    navigationArray = {
        links: [
            {
                "Nav_Name": "Your Library",
                "Nav_Link": "#",
                "Nav_Icon": "fa-library"
            },
            {
                "Nav_Name": "Recommended",
                "Nav_Link": "#",
                "Nav_Icon": "fa-thumbsup"
            },
            {
                "Nav_Name": "Store",
                "Nav_Link": "#",
                "Nav_Icon": "fa-cart"
            },
            {
                "Nav_Name": "Recommended",
                "Nav_Link": "#",
                "Nav_Icon": "fa-thumbsup"
            },
        ]
    }
}

function audibleLibrary() {
    booksArray = {
        books: [
            {
                "Id": "0001",
            },
            {
                "Id": "0002",
            }
            ,
            {
                "Id": "0003",
            }
            ,
            {
                "Id": "0004",
            }
            ,
            {
                "Id": "0005",
            }
            ,
            {
                "Id": "0006",
            },
        ]
    }
}

function createNavItem() {

    var navItems = "";
    for (i = 0; i < navigationArray.links.length; i++) {
        navName = navigationArray.links[i].Nav_Name;
        navLink = navigationArray.links[i].Nav_Link;
        navIcon = navigationArray.links[i].Nav_Icon;

        navItems +=
            `<li class="nav-item">
            <span class="fa ${navIcon}"></span>
            <a class="nav-link" href="${navLink}">
                ${navName}
            </a>
        </li>`
    }

    document.querySelector(".navbar-nav").innerHTML += navItems;

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
                    <ul class="navbar-nav mr-auto"></ul>
                    <span class="navbar-text">
                        <a class="btn btn-secondary" type="button" href="#">My Account</a>
                        <a class="btn btn-primary" type="button" href="#">Join Audible</a>
                    </span>
                </div>
            </div>
        </nav>`

    createNavItem();
}

function launch() {
    appHeader();
}

launch();