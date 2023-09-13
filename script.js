function searchFunc() {
    let countryQuery = document.getElementById("countryBar").value;
    let currencyQuery = document.getElementById("currencyBar").value;

    //check if both boxes are blank so that no alert pops up (idk it acts weird without this so i guess i gotta do this)
    if (countryQuery.length === 0 && currencyQuery.length === 0) {
        return false;
    }

    //checks for the country search box
    if (countryQuery.length > 20) {
        alert("more than 20 chracters!");
        return false;
    }
    
    //checks for the currency search box
    if (currencyQuery.length > 0 && !/^[A-Z]{3}$/.test(currencyQuery)) {
        alert("Only 3 upper case letters are allowed!");
        return false;
    }
}