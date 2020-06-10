const countryUrl = "https://restcountries.eu/rest/v2/name/"
const travelWarnUrl = "https://www.travel-advisory.info/api"

const currencyDomain = "https://free.currconv.com/api/v7/convert?q=USD_EUR,EUR_USD&compact=ultra"
const currencyApiKey = "3008f48cb4daac91be77"
const currencyUrl = `${currencyDomain}&apiKey=${currencyApiKey}`



let submitBtn = document.querySelector("#button")
let input = document.querySelector("#blank")
const countryDiv = document.querySelector(".country-data")
const travelAdvisory = document.querySelector(".travel-warn")
const currency = document.querySelector(".currency")



//API #1 for country data
async function getCountryData() {
  try {
    let response = await axios.get(`${countryUrl}${input.value}`)
    let countries = response.data
    // let countryValue = countries[Math.floor(Math.random * countries.length)]
    // country.innerHTML = ""
    // console.log(countryValue)

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
})



// //API #2 for travel warnings
// async function getTravelData() {
//   try {
//     let response = await axios.get(`${travelWarnUrl}`)
//     // let warn = response.data.ç
//     console.log(response)
//   } catch (error) {
//     console.log(`This is what went wrong: ${error}`)
//   }
// }
// getTravelData()





// //API #3 for currency conversion 
// async function getCurrencyData() {
//   try {
//     let response = await axios.get(`${currencyUrl}`)
//     let currency = response.data
//     console.log(response)
//   } catch (error) {
//     console.log(`This is what went wrong: ${error}`)
//   }
// }
// getCurrencyData()