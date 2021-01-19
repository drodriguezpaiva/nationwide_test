const axios = require("axios").default;

const options = {
  method: 'POST',
  url: 'https://api-stage.nationwide.com/customer-acquisition/homeowners-sales-quoting/v2/rated-quotes',
  headers: {
    'Content-Type': 'application/json',
    'X-NW-Message-ID': '1',
    client_id: '3c1hQgxGVANNMSNTqXWwvPT5BVU75oWw'
  },
  data: {
    "producer": {
      "producerCode": "12345678 - 001",
      "agencyCode": "string"
    },
    "effectiveDate": "2021-01-19",
    "creditConsent": true,
    "policyAddress": {
      "addressLine1": "1234 E Broad St",
      "addressLine2": "APT 534C",
      "city": "Columbus",
      "state": "OH",
      "postalCode": "43016-1111"
    },
    "termType": "Annual",
    "accountId": "string",
    "policyHolders": [
      {
        "prefillId": "string",
        "person": {
          "firstName": "Tyler",
          "middleName": "Huckleberry",
          "lastName": "Frankenstein",
          "prefix": "dr",
          "suffix": "c_II",
          "gender": "F",
          "maritalStatus": "M",
          "dateOfBirth": "1980-01-01",
          "ssn": "999-99-9999"
        },
        "address": {
          "addressLine1": "1234 E Broad St",
          "addressLine2": "APT 534C",
          "city": "Columbus",
          "state": "OH",
          "postalCode": "43016-1111"
        },
        "emailAddress": "asd@email.com",
        "homeNumber": "123",
        "policyHolderType": "PolicyPriNamedInsured",
        "companyName": "",
        "priorInformation": {
          "person": {
            "firstName": "Tyler",
            "middleName": "Huckleberry",
            "lastName": "Frankenstein",
            "prefix": "dr",
            "suffix": "c_II",
            "gender": "F",
            "maritalStatus": "M",
            "dateOfBirth": "1980-01-01",
            "ssn": "999-99-9999"
          },
          "address": {
            "addressLine1": "1234 E Broad St",
            "addressLine2": "APT 534C",
            "city": "Columbus",
            "state": "OH",
            "postalCode": "43016-1111"
          }
        }
      }
    ],
    "yearsWithPriorCarrier": "string",
    "offeredQuotes": [
      {
        "coverages": [
          {
            "coverageId": "string",
            "coverableId": 0,
            "coverageLevel": "string",
            "selectedValue": [
              {
                "code": "string",
                "value": "string"
              }
            ]
          }
        ]
      }
    ],
    "coveredLocation": {
      "hasHydrantIn1000Ft": true,
      "location": {
        "addressLine1": "1234 E Broad St",
        "addressLine2": "APT 534C",
        "city": "Columbus",
        "state": "OH",
        "postalCode": "43016-1111"
      },
      "priorLocation": {
        "addressLine1": "1234 E Broad St",
        "addressLine2": "APT 534C",
        "city": "Columbus",
        "state": "OH",
        "postalCode": "43016-1111"
      },
      "numberOfOccupants": 2,
      "isInCurrLocForThreeYrs": true,
      "secondaryHome": true,
      "gatedCommunity": true,
      "seasonal": true,
      "electricWiring": {
        "circuitBreaker": true,
        "aluminumWire": true,
        "knobTube": true,
        "fuseBox": true
      },
      "smokeDetector": true,
      "riskItems": {
        "trampoline": false,
        "trampolineFence": null,
        "trampolineTieDowns": null,
        "trampolineNet": null,
        "dangerousOrExoticAnimal": false,
        "animalThatCausedInjury": false,
        "haveDogs": false,
        "incidentalFarm": false,
        "swimmingPool": false,
        "poolLadder": null,
        "removableLadder": null,
        "swimmingLessonsProvided": null,
        "divingBoard": null,
        "waterDepthUnderDivingBoard": null,
        "poolSlide": null,
        "waterDepthUnderSlide": null,
        "poolFence": null,
        "selfLatchingGate": false
      },
      "hasOilTank": false,
      "protectiveDevices": {
        "hasWroughtIronBar": null,
        "windMitigations": [
          {
            "category": "string",
            "selectedOption": "string"
          }
        ],
        "hasSecondaryWaterResistance": true
      },
      "occupancy": "owner",
      "datePurchased": "2010-10-10",
      "numberOfFamilies": 1,
      "unitsBetweenFirewalls": 0,
      "townhouse": true,
      "businessOnPremises": true,
      "registeredHistoric": true,
      "historicDistrict": true,
      "modularHome": true,
      "ownershipType": "string",
      "isShortSaleAuctForeclose_Ext": true,
      "flatRoof": true,
      "roofCondition": "good",
      "thermostat": true,
      "currentConstruction": true,
      "currentRemodelingOrRehabiliation": true,
      "nonResidentialToResidential": true,
      "own": true,
      "childCareBusiness": true,
      "numberOfUnits": 0,
      "constructionInfo": {
        "constructionType": "BrickStoneMasonry",
        "yearBuilt": 900,
        "squareFootage": 1500,
        "numberOfStories": "1.5",
        "garages": [
          {
            "numberOfCars": 1,
            "squareFeet": 100,
            "garageType": "null"
          }
        ],
        "otherStructures": {
          "openPorch": true,
          "screenPorch": true,
          "sunSolarRoom": true,
          "woodDeck": true,
          "breezeway": true
        },
        "numberOfKitchens": 1,
        "kitchenDescription": "string",
        "numberOfFullBathrooms": 1,
        "fullBathroomDescription": "string",
        "numberOfHalfBathrooms": 1,
        "halfBathroomDescription": 0,
        "centralCooling": null,
        "heating": null,
        "walls": [
          {
            "feature": "string",
            "percentage": 0
          }
        ],
        "flooring": [
          {
            "feature": "string",
            "percentage": 0
          }
        ],
        "siteAccess": null,
        "wallHeights": [
          {
            "height": 10,
            "percentage": 15
          }
        ],
        "foundationType": {
          "slab": true,
          "crawlSpace": true,
          "basement": true,
          "daylightWalkoutBasement": true,
          "piersRaised": true,
          "suspendedOverHillside": true
        },
        "additionalFoundationType": {
          "concreteMasonry": true,
          "dirt": true,
          "landfill": true,
          "open": true,
          "rock": true,
          "sand": true
        },
        "roofMaterial": "Aluminium_Ext"
      },
      "deededOwner": true
    }
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});