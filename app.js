const countryUrl = "https://restcountries.eu/rest/v2/name/"
const travelWarnUrl = "https://www.travel-advisory.info/api"

const currencyDomain = "https://free.currconv.com/api/v7/convert?q=USD_EUR,EUR_USD&compact=ultra"
const currencyKey = config.MY_KEY
const currencyUrl = `${currencyDomain}&apiKey=${currencyKey}`



let submitBtn = document.querySelector("#button")
let input = document.querySelector("#blank")
const countryDiv = document.querySelector(".country-data")
const warningDiv = document.querySelector(".travel-warn")
const currencyDiv = document.querySelector(".currency")



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
      <img src = ${country.flag}>
      <p>Capital City is ${country.capital}</p>
      <p>Main currency used is ${country.currencies[0].code}</p>
      <p>Primary language spoken is ${country.languages[0].name}</p>
      `
      })
    console.log(response)
    getTravelData(countries[0].alpha2Code)


  } catch (error) {
    console.log(`Uh Oh! This is what went wrong: ${error}`)
  }
}
submitBtn.addEventListener("click", () => {
  getCountryData()
  
  // getCurrencyData()
})



// //API #2 for travel warnings
async function getTravelData(code) {  
  try {
    let response = await axios.get(`${travelWarnUrl}`)
    let travelWarn = response.data.data
    // console.log(response)
    // console.log(travelWarn)

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
      <p><a href=${countryVal[0].advisory.source}>View more data on site</a></p>
      `
  } catch (error) {
    console.log(`Uh Oh! This is what went wrong: ${error}`)
  }
}
// getTravelData()


  
 // <h2>${nameOutput}</h2>
    // <p>Degree of risk: ${nameOutput} out of 5</p>
    // <p>Active source count: ${activeSourceOutput}</p>
    // <p>Last updated: ${timeOutput}</p>
    // <p>View more data: ${sourceOutput}</p>

// //API #3 for currency conversion 
// async function getCurrencyData() {
//   try {
//     let response = await axios.get(`${currencyUrl}`)
//     let currency = response.data
//     console.log(response)

//     //math equation in here
//   } catch (error) {
//     console.log(`This is what went wrong: ${error}`)
//   }
// }
// getCurrencyData()