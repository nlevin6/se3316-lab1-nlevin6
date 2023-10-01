//dynamic search results
function searchUpdate() {
    let countryQuery = document.getElementById("countryBar").value;
    let currencyQuery = document.getElementById("currencyBar").value;
    let searchResultsList = document.querySelector(".search-results-list");
    let divSearchResults = document.querySelector(".search-results");
    let matches = [];
    const data = [
        {
            name: "Andorra",
            currency: "EUR",
            regions: ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "SantJulià de"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Andorra",
            flag: "ad"
        },
        {
            name: "Austria",
            currency: "EUR",
            regions: ["Vorarlberg", "Tirol", "Salzburg", "Upper Austria", "Lower Austria", "Vienna", "Styria", "Carinthia", "Burgenland"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Austria",
            flag: "at"
        },
        {
            name: "Australia",
            currency: "AUD ($)",
            regions: ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Australia",
            flag: "au"
        },
        {
            name: "Belgium",
            currency: "EUR",
            regions: ["Flemish", "Brussels-Capital", "Walloon"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Belgium",
            flag: "be"
        },
        {
            name: "Bulgaria",
            currency: "BGN (Лв.)",
            regions: ["Montana (Mihailovgrad)", "Lovech", "Razgrad", "Varna", "Burgas", "Haskovo", "Plovdiv", "Sofia Province", "Sofia City"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Bulgaria",
            flag: "bg"
        },
        {
            name: "Canada",
            currency: "CAD ($)",
            regions: ["Ontario", "Saskatchewan", "Alberta", "Manitoba", "British Columbia", "Northwest Territories", "Nova Scotia", "Newfoundland and Labrador", "New Brunswick", "Prince Edward Island", "Nunavut", "Quebec", "Yukon"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Canada",
            flag: "ca"
        },
        {
            name: "Switzerland",
            currency: "CHF (CHf)",
            regions: ["Ticino", "Valais", "Bern", "Grisons", "Vaud", "Aargau", "Thurgau", "Jura", "Uri", "Solothurn", "Basel-landschaft", "Glarus", "Schwyz", "Appenzell Ausserrhoden", "Obwalden", "Appenzell Innerrhoden", "Basel City", "Nidwalden", "Central Switzerland", "Swiss Alps", "Bernese Oberland", "Fribourg", "Zug", "Eastern Switzerland"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Switzerland",
            flag: "ch"
        },
        {
            name: "Ivory Coast",
            currency: "XOF (CFA)",
            regions: ["Bas-Sassandra District", "Lagunes", "Denguélé", "Savanes", "Haut-Sassandra", "Comoé", "Lacs", "Sassandra-Marahoué District", "Woroba", "Montagnes", "Zanzan", "Sud-Comoé", "Béller Region", "Vallée du Bandama", "Gbêkê", "Folon Region", "Béré Region", "Formager"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Ivory_Coast",
            flag: "ci"
        },
        {
            name: "China",
            currency: "CNY (¥)",
            regions: ["Anhui", "Fujian", "Guangdong", "Gansu", "Guizhou", "Henan", "Hubei", "Hebei", "Hainan", "Heilongjiang", "Hunan", "Jilin", "Jiangsu", "Jiangxi", "Liaoning", "Qinghai", "Sichuan", "Shandong", "Shaanxi", "Shanxi", "Yunnan", "Zhejiang"],
            wikipediaLink: "https://en.wikipedia.org/wiki/China",
            flag: "cn"
        },
        {
            name: "Czechia",
            currency: "CZK (Kč)",
            regions: ["Central Bohemia", "South Bohemia", "Plzeň", "Karlovy Vary", "Ústí nad Labem", "Liberec", "Hradec Králové", "Pardubice", "Vysočina", "South Moravian", "Olomouc", "Zlín", "Moravian-Silesia"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Czech_Republic",
            flag: "cz"
        },
        {
            name: "Germany",
            currency: "EUR",
            regions: ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Germany",
            flag: "de"
        },
        {
            name: "Denmark",
            currency: "DKK (kr.)",
            regions: ["North Denmark", "Central Denmark", "Southern Denmark", "Zealand", "Capital Region of Denmark"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Denmark",
            flag: "dk"
        },
        {
            name: "Greece",
            currency: "EUR",
            regions: ["Crete", "Peloponnese", "Central Greece", "Ionian Islands", "Dodecanese", "Epirus", "Attica", "Thessaly", "Chalcidice", "Aegean Sea", "Thrace", "Western Greece", "Eastern Macedonia and Thrace", "Macedonia", "Central Macedonia", "Cyclades", "South Aegean", "North Aegian", "Aegean Islands", "Achaea", "Arcadia", "Sporades", "Western Macedonia", "Saronic Islands"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Greece",
            flag: "gr"
        },
        {
            name: "Israel",
            currency: "ILS (₪)",
            regions: ["Northern District", "Southern District", "Negev", "Central District", "Jerusalem District", "Haifa District", "Tel Aviv District", "Jordan Rift Valley", "Judea and Samaria Area"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Israel",
            flag: "il"
        },
        {
            name: "India",
            currency: "INR (₹)",
            regions: ["Andhra Pradesh", "Himachal Pradesh", "Rajasthan", "Arunachal Pradesh", "West Bengal", "Kashmir", "Kerala", "Uttar Pradesh", "Gujarat", "Punjab", "South India", "Sikkim", "Tamil Nadu", "Uttarakhand", "Haryana", "West India", "Ladakh", "Northeast India", "Jharkhand", "North India", "East India", "Jammu and Kashmir", "Central India", "Madhya Pradesh"],
            wikipediaLink: "https://en.wikipedia.org/wiki/India",
            flag: "in"
        },
        {
            name: "Italy",
            currency: "EUR",
            regions: ["Tuscany", "Sicily", "Umbria", "Emilia-Romagna", "Puglia", "Piedmont", "Lombardy", "Calabria", "Campania", "Veneto", "Liguria", "Friuli-Venezia Giulia", "Marche", "Abruzzo", "Sardinia", "Aosta Valley", "Lazio", "Basilicata", "Molise", "Trentino-South Tyrol", "Southern Italy", "Northern Italy", "Trentino", "Dolomites"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Italy",
            flag: "it"
        },
        {
            name: "Japan",
            currency: "JPY (¥)",
            regions: ["Hokkaido", "Tohoku", "Kanto", "Chubu", "Kansai", "Chugoku", "Shikoku", "Kyushu & Okinawa"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Japan",
            flag: "jp"
        },
        {
            name: "South Korea",
            currency: "KRW (₩)",
            regions: ["North Chungcheong", "South Chungcheong", "Gangwon", "Gyeonggi", "North Gyeongsang", "South Gyeongsang", "North Jeolla", "South Jeolla", "Jeju"],
            wikipediaLink: "https://en.wikipedia.org/wiki/South_Korea",
            flag: "kr"
        },
        {
            name: "Lebanon",
            currency: "LBP (LBP)",
            regions: ["Akkar", "Baalbeck-Hermel", "Beirut", "Bekaa", "Mount Lebanon", "North Lebanon", "Nabatiyeh", "South Lebanon"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Lebanon",
            flag: "lb"
        },
        {
            name: "Slovakia",
            currency: "EUR",
            regions: ["Bratislava", "Trnava", "Trenčín", "Nitra", "Žilina", "Banská Bystrica", "Prešov", "Košice"],
            wikipediaLink: "https://en.wikipedia.org/wiki/Slovakia",
            flag: "sk"
        }
    ];

    //clears any existing search results
    while (searchResultsList.firstChild) {
        searchResultsList.removeChild(searchResultsList.firstChild);
    }

    //check if both boxes are blank so that no results show up
    if (countryQuery.length === 0 && currencyQuery.length === 0) {
        divSearchResults.style.display = "none";
        return;
    } else {
        divSearchResults.style.display = "block";
    }

    //filters for the country search bar
    if (countryQuery.length > 0) {
        matches = data.filter(item => item.name.toLowerCase().includes(countryQuery.toLowerCase()));
    }

    //filters for the currency search bar
    if (currencyQuery.length > 0) {
        matches = data.filter(item => item.currency.toUpperCase().includes(currencyQuery.toUpperCase()));
    }

    //Dynamically update list as the user is typing new characters or deleting characters in the search box
    for (let i = 0; i < Math.min(5, matches.length); i++) {
        let li = document.createElement("li");
        let ul = document.createElement("ul");
        let img = document.createElement("img");

        //this stuff below is just a bunch of lines to make it visually look similar to the HTML
        img.src = `country_flags/${matches[i].flag}.png`;
        img.alt = `${matches[i].name} flag`;
        li.appendChild(img);
        ul.classList.add("sub-ul");
    
        let nameLi = document.createElement("li");
        let nameBold = document.createElement("b");
        nameBold.textContent = "Name:";
        nameLi.appendChild(nameBold);
        nameLi.appendChild(document.createTextNode(` ${matches[i].name}`));
    
        let currencyLi = document.createElement("li");
        let currencyBold = document.createElement("b");
        currencyBold.textContent = "Currency:";
        currencyLi.appendChild(currencyBold);
        currencyLi.appendChild(document.createTextNode(` ${matches[i].currency}`));
    
        ul.appendChild(nameLi);
        ul.appendChild(currencyLi);
    
        // Check if regions is defined and is an array
        if (Array.isArray(matches[i].regions)) {
            let regionsLi = document.createElement("li");
            let regionsBold = document.createElement("b");
            regionsBold.textContent = "Regions:";
            regionsLi.appendChild(regionsBold);
            regionsLi.appendChild(document.createTextNode(` ${matches[i].regions.join(', ')}`));
            ul.appendChild(regionsLi);
        }

        let link = document.createElement("a");
        link.href = matches[i].wikipediaLink;
        link.textContent = `${matches[i].name}'s Wikipedia Page`;

        ul.appendChild(link);
        li.appendChild(ul);
        searchResultsList.appendChild(li);
    }
    

    
    // Display the search results if there are matches
    if (matches.length > 0) {
        searchResultsList.style.display = "block";
    } else {
        let li = document.createElement("li");
        li.textContent = "No Results Found";
        searchResultsList.appendChild(li);
        searchResultsList.style.display = "block";
    }
}

const countryInput = document.getElementById("countryBar");
const currencyInput = document.getElementById("currencyBar");

countryInput.addEventListener("input", searchUpdate);
currencyInput.addEventListener("input", searchUpdate);
