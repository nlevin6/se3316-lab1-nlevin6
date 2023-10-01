//dynamic search results
function searchUpdate() {
    console.log("test");
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

    // //check if both boxes are blank so that no results show up
    // if (countryQuery.length === 0 && currencyQuery.length === 0) {
    //     searchResultsList.style.display = "none";
    //     return false;
    // }

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
    // Display the search results if there are matches
    if (matches.length > 0) {
        searchResultsList.style.display = "block";
    } else {
        // Hide the search results if there are no matches
        searchResultsList.style.display = "none";
    }
    console.log("Matches: ", matches);
}

const countryInput = document.getElementById("countryBar");
const currencyInput = document.getElementById("currencyBar");

countryInput.addEventListener("input", searchUpdate);
currencyInput.addEventListener("input", searchUpdate);
