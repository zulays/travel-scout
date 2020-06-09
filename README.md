# Project Overview

## Project Name

Travel Scout
  *"Scout's Honor"*

## Project Description

The goal of this application is to help users plan their upcoming trip. They will input their desired location into a search bar and using APIs, country information (flag?, capital, currencies, and languages spoken) and travel warnings will be populated upon their form submission. 


## API and Data Sample

[Country Data API:](https://restcountries.eu/rest/v2/all) 

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

[Travel Warnings API:](https://www.travel-advisory.info/api) 

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
        "AG": {
            "iso_alpha2": "AG",
            "name": "Antigua and Barbuda",
            "continent": "NA",
            "advisory": {
                "score": 3,
                "sources_active": 3,
                "message": "",
                "updated": "2020-06-08 07:22:37",
                "source": "https://www.travel-advisory.info/antigua-and-barbuda"
            }
        },
        "AI": {
            "iso_alpha2": "AI",
            "name": "Anguilla",
            "continent": "NA",
            "advisory": {
                "score": 3,
                "sources_active": 3,
                "message": "",
                "updated": "2020-06-08 07:22:37",
                "source": "https://www.travel-advisory.info/anguilla"
            }
        },
```

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

[Wireframe mock up can be found here](https://xd.adobe.com/view/3711b41b-6afe-45c2-78e3-353cacd03326-4120/?fullscreen)


#### MVP 

- Set up access for external API
- Connect API to form 
- Input location value (city, country) into search bar
- Add event listener for submit button to run function and clear value from search bar
- Click button to call function that will populate country info 
- Deploy site with GitPages for real-time access
 

#### PostMVP  

- Add second API to populate travel warnings for desired location
- Connect second API to event listener for submit button (or to primary API)
- Create callback function that will populate information after country value is inputted in search bar
- Add media queries for responsive design
- Refine CSS styling
- Use 3rd API to populate weather ticker tape above the footer

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Proposal | Complete
|June 9| Begin Core Application Structure (HTML, CSS, etc.) + Access API | Incomplete
|June 10| Test API + MVP functionality | Incomplete
|June 11| Continue API testing + implement advanced CSS/Flexbox | Incomplete
|June 12| Post MVP execution + Application QA | Incomplete
|June 15| Present | Incomplete

## Priority Matrix

[Priority Matrix can be found here](https://app.conceptboard.com/board/et2x-bhim-tko2-6dx3-5cdz)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML Setup | M | 1hrs| --hrs | --hrs |
| Basic CSS Implementation | M | 3hrs| --hrs | --hrs |
| JS Functionality | H | 6hrs| --hrs | --hrs |
| Working with API | H | 12hrs| --hrs | --hrs |
| Advanced CSS Implementation | M | 8hrs| --hrs | --hrs |
| Application QA | H | 6hrs| --hrs | --hrs |
| Total | H | 36hrs| --hrs | --hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
to be determined
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  