# Project Overview

## Project Name

Travel Scout
  *"Scout's Honor"*

## Project Description

The goal of this application is to help users plan their upcoming trip. They will input their desired location into a search bar and using APIs, country information (flag?, capital, currencies, and languages spoken) and travel warnings will be populated upon their form submission. 


## API and Data Sample

[Country Data API:](https://restcountries.eu/) 

```[
    {
        "name": "Afghanistan",
        "topLevelDomain": [
            ".af"
        ],
        "alpha2Code": "AF",
        "alpha3Code": "AFG",
        "callingCodes": [
            "93"
        ],
        "capital": "Kabul",
        "altSpellings": [
            "AF",
            "Afġānistān"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "population": 27657145,
        "latlng": [
            33.0,
            65.0
        ],
        "demonym": "Afghan",
        "area": 652230.0,
        "gini": 27.8,
        "timezones": [
            "UTC+04:30"
        ],
        "borders": [
            "IRN",
            "PAK",
            "TKM",
            "UZB",
            "TJK",
            "CHN"
        ],
        "nativeName": "افغانستان",
        "numericCode": "004",
        "currencies": [
            {
                "code": "AFN",
                "name": "Afghan afghani",
                "symbol": "؋"
            }
        ],
        "languages": [
            {
                "iso639_1": "ps",
                "iso639_2": "pus",
                "name": "Pashto",
                "nativeName": "پښتو"
            },
            {
                "iso639_1": "uz",
                "iso639_2": "uzb",
                "name": "Uzbek",
                "nativeName": "Oʻzbek"
            },
            {
                "iso639_1": "tk",
                "iso639_2": "tuk",
                "name": "Turkmen",
                "nativeName": "Türkmen"
            }
```

[Travel Warnings API:](https://www.travel-advisory.info/data-api) 

```{
    "api_status": {
        "request": {
            "item": "not specified"
        },
        "reply": {
            "cache": "cached",
            "code": 200,
            "status": "ok",
            "note": "The api works, we could fetch countries.",
            "count": 238
        }
    },
    "data": {
        "AD": {
            "iso_alpha2": "AD",
            "name": "Andorra",
            "continent": "EU",
            "advisory": {
                "score": 2.79999999999999982236431605997495353221893310546875,
                "sources_active": 4,
                "message": "",
                "updated": "2020-06-08 07:22:37",
                "source": "https://www.travel-advisory.info/andorra"
            }
        },
        "AE": {
            "iso_alpha2": "AE",
            "name": "United Arab Emirates",
            "continent": "AS",
            "advisory": {
                "score": 3.100000000000000088817841970012523233890533447265625,
                "sources_active": 7,
                "message": "",
                "updated": "2020-06-08 07:22:37",
                "source": "https://www.travel-advisory.info/united-arab-emirates"
            }
        },
        "AF": {
            "iso_alpha2": "AF",
            "name": "Afghanistan",
            "continent": "AS",
            "advisory": {
                "score": 5,
                "sources_active": 10,
                "message": "",
                "updated": "2020-06-08 07:22:37",
                "source": "https://www.travel-advisory.info/afghanistan"
            }
        },
```    

[Currency Conversion API:](https://www.currencyconverterapi.com/docs)

```
{
    "USD_PHP": 50.000499,
    "PHP_USD": 0.02
}
```

    


## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

[Wireframe mock up can be found here](https://xd.adobe.com/view/3711b41b-6afe-45c2-78e3-353cacd03326-4120/?fullscreen)


#### MVP 

- Set up access for external API
- Connect API to form 
- Build input field with search button for country value input
- Add "click" event listener for submit button
- Run function to pull country data from API
- Click button to run function 
- Render selected country data (name, flag, capital city, currencies, languages spoken)


#### PostMVP  

- Add second API to populate travel warnings for desired location
- Connect second API to event listener for submit button (or to primary API)
- Create callback function that will sync with event listener to populate country warnings after button is clicked
- Add media queries for responsive design
- Refine CSS styling 
- Use 3rd API to populate real-time currency exchange rate
- Build function to link country currency value with conversion API call


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Proposal | Complete
|June 9| Begin Core Application Structure (HTML, CSS, etc.) + Access API | Complete
|June 10| Test API + MVP functionality | Complete
|June 11| Continue API testing + implement advanced CSS/Flexbox | Complete
|June 12| Post MVP execution + Application QA | Complete
|June 15| Present | Incomplete

## Priority Matrix

[Priority Matrix can be found here](https://app.conceptboard.com/board/et2x-bhim-tko2-6dx3-5cdz)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML Setup + Pseudocode | M | 2hrs| 1hrs | 1hrs |
| Basic CSS Implementation | M | 3hrs| 1hr 5mins | 1hr 5mins |
| Base JS Structure | H | 3hrs| 1hr 50mins | 1hr 50mins |
| Building JS Algorithms for API | H | 3hrs| 3hrs 30mins | 3hrs 30mins  |
| Pre-lim API Setup + Access | H | 2hrs| 2hrs 15mins | 2hrs 15mins |
| API sync with JS | H | 5hrs| 5hrs | 5hrs |
| API Testing + Functionality | H | 5hrs| 5hrs | 5hrs |
| Advanced CSS Add-ins (implementing themes + additional styling) | M | 4hrs| 3hrs 30mins | 3hrs 30mins |
| Finalize Advanced CSS + Testing/Tweaks | M | 4hrs| 3hrs | 3hrs |
| Application QA | H | 6hrs| 4hrs | 4hrs |
| Total | H | 37hrs| --hrs | --hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function currencyConv() {
  baseCurrency = amountInput.value
  newCurrency = currencyVal

  let conversion = baseCurrency * newCurrency
  convInput.value = Math.round(100 * conversion) / 100
  amountInput.value = ""
  return conversion
}
convertBtn.addEventListener("click", currencyConv)
```
In the code snippet above, you can find the function created to conduct the conversion rate equation based on the input value entered by the user, that results in the conversion rate for the main currency used in the country they have selected. 


## Change Log
The changes made after intial submission of this proposal are as follows:
- Country details only included one currency used + language spoken
- Currency conversion became interactive and allows user to input whatever amount they desire to receive the value in return