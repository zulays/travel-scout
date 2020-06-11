const countryUrl = "https://restcountries.eu/rest/v2/name/"
const travelWarnUrl = "https://www.travel-advisory.info/api"

const currencyDomain = "https://free.currconv.com/api/v7/convert?q=USD_"
const currencyKey = config.MY_KEY


let submitBtn = document.querySelector("#button")
let input = document.querySelector("#blank")
const countryDiv = document.querySelector(".country-details")
const warningDiv = document.querySelector(".travel-warn")
let currencyInput = document.querySelector("#blank-code")
let convertBtn = document.querySelector("#currency-button")

//API #1 for country data
async function getCountryData() {
  try {
    let response = await axios.get(`${countryUrl}${input.value}`)
    let countries = response.data

    for (let i = 0; i > countries.length; i++) {
      console.log(countries[i])
    }
    countries.forEach((country) => {
      countryDiv.innerHTML += `
      <h2>${country.name}</h2>
      <img src=${country.flag}>
      <p>Capital City is ${country.capital}</p>
      <p class="currency-name">Main currency used is ${country.currencies[0].code}</p>
      <p>Primary language spoken is ${country.languages[0].name}</p>
      `
           })
    let currVal = countries[0].currencies[0].code
    console.log(response)

    //runs the secondary function to pull API #2 data via API #1, while creating a link to allow API #3 to run
    getTravelData(countries[0].alpha2Code,currVal)
   input.value = ""
  } catch (error) {
    console.log(`Uh Oh! This is what went wrong: ${error}`)
  }  
}
submitBtn.addEventListener("click", getCountryData)


// //API #2 for travel warnings
async function getTravelData(code,money) {  
  try {
    let response = await axios.get(`${travelWarnUrl}`)
    let travelWarn = response.data.data
    for (let i = 0; i > travelWarn.length; i++) {
      console.log(travelWarn[i])
  }

  let countryVal = Object.values(travelWarn).filter((value) => {
    return value.iso_alpha2 === code && value.advisory
  })
console.log(countryVal)

       warningDiv.innerHTML += `
      <h2>${countryVal[0].name}</h2>
      <p>Degree of risk: ${countryVal[0].advisory.score}/5</p>
      <p>Active source count: ${countryVal[0].advisory.sources_active}</p>
      <p>${countryVal[0].advisory.message}</p>
      <p>Last updated: ${countryVal[0].advisory.updated}</p>
      <p><a href=${countryVal[0].advisory.source}>Sources detailed on site</a></p>
      <p>*Disclaimer: Please note that not all countries have travel advisories available*</p>
      `
      //calls terciary function while getting information from API #1 via chained API #2
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
    console.log(response)

    //defines the currency code for conversion 
    currencyInput.value = money
    
    //pulls out the conversion rate for USD_currency code 
    let currencyVal = Object.values(currency).find((rate) => {
      return rate
    })
  console.log(currencyVal)

  } catch (error) {
    console.log(`Uh Oh! This is what went wrong: ${error}`)
  }
}


//Function - Currency Conversion
  // let baseCurrency = 1
  // let newCurrency = money
  // // let exchange = Math.float()

  // function currencyConv(baseCurrency, newCurrency) {
  //   return base
  
// }
// // console.log(currencyConv(1, ))
// // currencyConv()
// convertBtn.addEventListener("click", currencyConv)