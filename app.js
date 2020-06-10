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
      <p>Main currency used are ${country.currencies[0].code}</p>
      <p>Primary language spoken are ${country.languages[0].name}</p>
      `
    })
    console.log(response)
  } catch (error) {
    console.log(`Uh Oh! This is what went wrong: ${error}`)
  }
}
submitBtn.addEventListener("click", () => {
  getCountryData()
  // getTravelData(input.value)
  // getCurrencyData()
})



// //API #2 for travel warnings
async function getTravelData() {
  try {
    let response = await axios.get(`${travelWarnUrl}`)
    let travelWarn = response.data.data

    for (let i = 0; i > advisory.length; i++) {
      console.log(advisory[i])
    }

    travelWarn.forEach((warn) => {
      warningDiv.innerHTML += `
      <h2>${warn.name}</h2>
      <p>Degree of risk: ${warn.score}/5</p>
      <p>Active source count: ${warn.advisory.score}</p>
      <p>${warn.advisory.message}</p>
      <p>Last updated: ${warn.advisory.updated}</p>
      <p>View more data: ${warn.advisory.sources_active}</p>
      `
    })
    console.log(response)
  } catch (error) {
    console.log(`Uh Oh! This is what went wrong: ${error}`)
  }
}
getTravelData()





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