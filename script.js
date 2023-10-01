function searchFunc() {
    let countryQuery = document.getElementById("countryBar").value;
    let currencyQuery = document.getElementById("currencyBar").value;

    //check if both boxes are blank so that no alert pops up (idk it acts weird without this so i guess i gotta do this)
    if (countryQuery.length === 0 && currencyQuery.length === 0) {
        return false;
    }

    //checks for the country search box
    if (countryQuery.length > 20) {
        alert("more than 20 characters!");
        return false;
    }

    //checks for the currency search box
    if (currencyQuery.length > 0 && !/^[A-Z]{3}$/.test(currencyQuery)) {
        alert("Only 3 upper case letters are allowed!");
        return false;
    }

    //it doesn't wanna fetch from a json file for me for some reason so I'm storing all the data here in a const variable
    const data = [
        {
            "name": "Andorra",
            "currency": "EUR"
        },
        {
            "name": "Austria",
            "currency": "EUR"
        },
        {
            "name": "Australia",
            "currency": "AUD"
        },
        {
            "name": "Belgium",
            "currency": "EUR"
        },
        {
            "name": "Bulgaria",
            "currency": "BGN"
        },
        {
            "name": "Canada",
            "currency": "CAD"
        },
        {
            "name": "Switzerland",
            "currency": "CHF"
        },
        {
            "name": "Ivory Coast",
            "currency": "XOF"
        },
        {
            "name": "China",
            "currency": "CNY"
        },
        {
            "name": "Czechia",
            "currency": "CZK"
        },
        {
            "name": "Germany",
            "currency": "EUR"
        },
        {
            "name": "Denmark",
            "currency": "DKK"
        },
        {
            "name": "Greece",
            "currency": "EUR"
        },
        {
            "name": "Israel",
            "currency": "ILS"
        },
        {
            "name": "India",
            "currency": "INR"
        },
        {
            "name": "Italy",
            "currency": "EUR"
        },
        {
            "name": "Japan",
            "currency": "JPY"
        },
        {
            "name": "South Korea",
            "currency": "KRW"
        },
        {
            "name": "Lebanon",
            "currency": "LBP"
        },
        {
            "name": "Slovakia",
            "currency": "EUR"
        }

    ]

    let matches = [];

    //filters for the country search bar
    if (countryQuery.length > 0) {
        matches = data.filter(item => item.name.toLowerCase().includes(countryQuery.toLowerCase()));
    }

    //filters for the currency search bar
    if (currencyQuery.length > 0) {
        matches = data.filter(item => item.currency.toUpperCase().includes(currencyQuery.toUpperCase()));
    }

    //code for showing the up to 5 matches in the alert box
    let msg = "";
    for (let i = 0; i < Math.min(5, matches.length); i++) {
        msg += `Name: ${matches[i].name}, Currency: ${matches[i].currency}\n`;
    }
    if (msg.length > 0) {
        alert(msg);
    } else {
        alert("No matches");
    }
}

//dynamic search results
function searchUpdate() {
    let countryQuery = document.getElementById("countryBar").value;
    let currencyQuery = document.getElementById("currencyBar").value;
    let searchResultsList = document.querySelector(".search-results-list");
    let matches = [];
    const data = [
        {
            "name": "Andorra",
            "currency": "EUR"
        },
        {
            "name": "Austria",
            "currency": "EUR"
        },
        {
            "name": "Australia",
            "currency": "AUD"
        },
        {
            "name": "Belgium",
            "currency": "EUR"
        },
        {
            "name": "Bulgaria",
            "currency": "BGN"
        },
        {
            "name": "Canada",
            "currency": "CAD"
        },
        {
            "name": "Switzerland",
            "currency": "CHF"
        },
        {
            "name": "Ivory Coast",
            "currency": "XOF"
        },
        {
            "name": "China",
            "currency": "CNY"
        },
        {
            "name": "Czechia",
            "currency": "CZK"
        },
        {
            "name": "Germany",
            "currency": "EUR"
        },
        {
            "name": "Denmark",
            "currency": "DKK"
        },
        {
            "name": "Greece",
            "currency": "EUR"
        },
        {
            "name": "Israel",
            "currency": "ILS"
        },
        {
            "name": "India",
            "currency": "INR"
        },
        {
            "name": "Italy",
            "currency": "EUR"
        },
        {
            "name": "Japan",
            "currency": "JPY"
        },
        {
            "name": "South Korea",
            "currency": "KRW"
        },
        {
            "name": "Lebanon",
            "currency": "LBP"
        },
        {
            "name": "Slovakia",
            "currency": "EUR"
        }

    ]
    //check if both boxes are blank so that no alert pops up
    if (countryQuery.length === 0 && currencyQuery.length === 0) {
        while (searchResultsList.firstChild) {
            searchResultsList.removeChild(searchResultsList.firstChild);
        }
        return false;

    }

    //checks for the country search box
    if (countryQuery.length > 20) {
        alert("more than 20 characters!");
        return false;
    }

    //checks for the currency search box
    if (currencyQuery.length > 0 && !/^[A-Z]{3}$/.test(currencyQuery)) {
        alert("Only 3 upper case letters are allowed!");
        return false;
    }

    //clears any existing search results
    while (searchResultsList.firstChild) {
        searchResultsList.removeChild(searchResultsList.firstChild);
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
        let text = document.createTextNode(`Name: ${matches[i].name}, Currency: ${matches[i].currency}`);
        li.appendChild(text);
        searchResultsList.appendChild(li);
    }
}
