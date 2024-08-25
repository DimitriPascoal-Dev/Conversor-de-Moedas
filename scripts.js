
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")/*Real*/
    const currencyValueConverted = document.querySelector(".currency-value")/*Dolar*/

    console.log(currencySelect.value)/*moedas valores*/
    const dolarToday = 5.54
    const euroToday = 6.21
    const libraToday = 7.32

    

    
    if(currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }

    if(currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }

    if(currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraToday)
    }
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name") 
    const currencyImage = document.querySelector(".logo-usa")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"

    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.jpg"

    }

    convertValues()
}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)
