const countryUrl = "https://restcountries.eu/rest/v2/name/"
const travelWarnUrl = "https://www.travel-advisory.info/api"

const currencyDomain = "https://free.currconv.com/api/v7/convert?q=USD_"
const currencyKey = config.MY_KEY


let submitBtn = document.querySelector("#lgbutton")
let input = document.querySelector("#blank")
const countryDiv = document.querySelector(".country-details")
const warningDiv = document.querySelector(".travel-warn")
let travelPage = document.querySelector("#page2")
let countryInput = document.querySelector(".country-input")
let amountInput = document.querySelector("#blank-num")
let convInput = document.querySelector("#blank-conv")
let convertBtn = document.querySelector("#currency-button")
let currencyInput = document.querySelector("#blank-code")
let currencyVal
let counPage = document.querySelector(".countrydetails-container")
let warnPage = document.querySelector(".warn-container")
let currPage = document.querySelector(".currency-container")


//API #1 for country data
async function getCountryData() {
  try {
    let response = await axios.get(`${countryUrl}${input.value}`)
    let countries = response.data

    for (let i = 0; i > countries.length; i++) {
      console.log(countries[i])
    }
    countries.length = 1
    countries.forEach((country) => {
      countryDiv.innerHTML += `
      <h4>${country.name}</h4>
      <img src=${country.flag}>
      <p class="js-ele">Capital City is ${country.capital}</p>
      <p class="js-ele">Main currency used is ${country.currencies[0].code}</p>
      <p class="js-ele">Primary language spoken is ${country.languages[0].name}</p>
      `
    })

    let currVal = countries[0].currencies[0].code


    travelPage.style.display = "flex"
    counPage.style.display = "inline-block"
    warnPage.style.display = "inline-block"
    countryInput.style.display = "none"
    currPage.style.display = "inline-block"

    //runs the secondary function to pull API #2 data via API #1, while creating a link to allow API #3 to run
    getTravelData(countries[0].alpha2Code, currVal)
    input.value = ""

  } catch (error) {
    console.log(`Uh Oh! This is what went wrong: ${error}`)
  }
}
submitBtn.addEventListener("click", getCountryData)


// //API #2 for travel warnings
async function getTravelData(code, money) {
  try {
    let response = await axios.get(`${travelWarnUrl}`)
    let travelWarn = response.data.data
    for (let i = 0; i > travelWarn.length; i++) {
      console.log(travelWarn[i])
    }

    let countryVal = Object.values(travelWarn).filter((value) => {
      return value.iso_alpha2 === code && value.advisory
    })

    warningDiv.innerHTML += `
      <h4>${countryVal[0].name}</h4>
      <p class="js-ele">Degree of risk: ${countryVal[0].advisory.score}/5</p>
      <p class="js-ele">Active source count: ${countryVal[0].advisory.sources_active}</p>
      <p class="js-ele">${countryVal[0].advisory.message}</p>
      <p class="js-ele">Last updated: ${countryVal[0].advisory.updated}</p>
      <p class="js-ele"><a href=${countryVal[0].advisory.source}>Sources detailed on site</a></p>
      <p class="js-ele">*Disclaimer: Please note that not all countries have travel advisories available*</p>
      `

    //calls terciary function while getting information from API #1 chained via  API #2
    getCurrencyData(money)


  } catch (error) {
    console.log(`Uh Oh! This is what went wrong: ${error}`)
  }
}


//API #3 for currency conversion 
async function getCurrencyData(money) {
  try {
    let response = await axios.get(`${currencyDomain}${money},${money}_USD&compact=ultra&apiKey=${currencyKey}`)
    let currency = response.data

    //defines the currency code for conversion 
    currencyInput.innerText += money
    currencyInput.style.color = "#C9CAD9"

    //pulls out the conversion rate for USD_currency code 
    currencyVal = Object.values(currency).find((value) => {
      return value
    })

  } catch (error) {
    console.log(`Uh Oh! This is what went wrong: ${error}`)
  }

}


function currencyConv() {
  baseCurrency = amountInput.value
  newCurrency = currencyVal

  let conversion = baseCurrency * newCurrency
  convInput.value = Math.round(100 * conversion) / 100
  amountInput.value = ""
  return conversion
}

convertBtn.addEventListener("click", currencyConv)
