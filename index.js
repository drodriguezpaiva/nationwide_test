const axios = require("axios").default;

const options = {
  method: 'POST',
  url: 'https://api.nationwide.com/customer-acquisition/homeowners-sales-experience/v1/rated-quotes',
  headers: {'X-NW-Message-ID': '123', client_id: 'iQme3WrreyFWAidt213UEbU0l1fLFFM5'},
  data: {
    producer: {producerCode: '12345678 - 001', type: 'string', agencyCode: 'string'},
    effectiveDate: '2021-01-18',
    creditConsent: true,
    policyAddress: {
      addressLine1: '1234 E Broad St',
      addressLine2: 'APT 534C',
      city: 'Columbus',
      state: 'OH',
      postalCode: '43016-1111'
    },
    termType: 'string',
    accountId: 'string',
    policyHolders: [
      {
        prefillId: 'string',
        person: {
          firstName: 'Tyler',
          middleName: 'Huckleberry',
          lastName: 'Frankenstein',
          prefix: 'dr',
          suffix: 'c_II',
          gender: 'F',
          maritalStatus: 'M',
          dateOfBirth: '1980-01-01',
          ssn: '999-99-9999'
        },
        address: {
          addressLine1: '1234 E Broad St',
          addressLine2: 'APT 534C',
          city: 'Columbus',
          state: 'OH',
          postalCode: '43016-1111'
        },
        emailAddress: 'string',
        homeNumber: 'string',
        policyHolderType: 'string',
        companyName: 'string',
        priorInformation: {
          person: {
            firstName: 'Tyler',
            middleName: 'Huckleberry',
            lastName: 'Frankenstein',
            prefix: 'dr',
            suffix: 'c_II',
            gender: 'F',
            maritalStatus: 'M',
            dateOfBirth: '1980-01-01',
            ssn: '999-99-9999'
          },
          address: {
            addressLine1: '1234 E Broad St',
            addressLine2: 'APT 534C',
            city: 'Columbus',
            state: 'OH',
            postalCode: '43016-1111'
          }
        }
      }
    ],
    yearsWithPriorCarrier: 'string',
    prequalificationAnswers: [{questionText: 'string', questionCode: 'string', answerValue: 'string'}],
    offeredQuotes: [
      {
        coverages: [
          {
            coverageId: 'string',
            coverableId: 0,
            coverageLevel: 'string',
            selectedValue: [{code: 'string', value: 'string'}]
          }
        ],
        premium: {
          total: {amount: 0, currency: 'string'},
          fees: {amount: 0, currency: 'string'},
          taxes: {amount: 0, currency: 'string'},
          totalBeforeTaxes: {amount: 0, currency: 'string'},
          termMonths: 0
        }
      }
    ],
    coveredLocation: {
      hasHydrantIn1000Ft: true,
      location: {
        addressLine1: '1234 E Broad St',
        addressLine2: 'APT 534C',
        city: 'Columbus',
        state: 'OH',
        postalCode: '43016-1111'
      },
      priorLocation: {
        addressLine1: '1234 E Broad St',
        addressLine2: 'APT 534C',
        city: 'Columbus',
        state: 'OH',
        postalCode: '43016-1111'
      },
      numberOfOccupants: 0,
      isInCurrLocForThreeYrs: true,
      secondaryHome: true,
      gatedCommunity: true,
      seasonal: true,
      electricWiring: {circuitBreaker: true, aluminumWire: true, knobTube: true, fuseBox: true},
      smokeDetector: true,
      riskItems: {
        swimmingPool: true,
        typeOfSwimmingPool: 'string',
        poolLadder: true,
        removableLadder: true,
        swimmingLessonsProvided: true,
        divingBoard: true,
        waterDepthUnderDivingBoard: 0,
        poolSlide: true,
        waterDepthUnderSlide: 0,
        poolFence: true,
        selfLatchingGate: true,
        distanceToNonOwnedBuildingPool: 'string',
        trampoline: true,
        distanceToNonOwnedBuildingTrampoline: 'string',
        trampolineFence: true,
        trampolineTieDowns: true,
        trampolineNet: true,
        dangerousOrExoticAnimal: true,
        animalThatCausedInjury: true,
        haveDogs: true,
        dogs: [{dogBreed: 'string', biteHistory: true}],
        incidentalFarm: true
      },
      hasOilTank: true,
      oilTank: {
        yearTankInstalled: 0,
        tankMaterial: 'string',
        tankLocation: 'string',
        isClosureFillCertified: true
      },
      protectiveDevices: {
        sprinklerSystem: 'string',
        burglarAlarm: 'string',
        fireOrSmokeAlarm: 'string',
        hasWroughtIronBar: true,
        windProtectiveDevices: ['string'],
        windMitigations: [{category: 'string', selectedOption: 'string'}],
        hasSecondaryWaterResistance: true
      },
      occupancy: 'string',
      datePurchased: 'string',
      numberOfFamilies: 0,
      unitsBetweenFirewalls: 0,
      townhouse: true,
      businessOnPremises: true,
      registeredHistoric: true,
      historicDistrict: true,
      modularHome: true,
      ownershipType: 'string',
      isShortSaleAuctForeclose_Ext: true,
      flatRoof: true,
      roofUlType: 'string',
      roofCondition: 'string',
      thermostat: true,
      numberOfAmps: 'string',
      currentConstruction: true,
      currentRemodelingOrRehabiliation: true,
      nonResidentialToResidential: true,
      own: true,
      childCareBusiness: true,
      numberOfUnits: 0,
      constructionInfo: {
        constructionType: 'string',
        additionalHeating: 'string',
        yearBuilt: 0,
        squareFootage: 0,
        numberOfStories: 'string',
        garages: [{numberOfCars: 0, squareFeet: 0, garageType: 'string'}],
        otherStructures: {
          openPorch: true,
          screenPorch: true,
          sunSolarRoom: true,
          woodDeck: true,
          breezeway: true
        },
        numberOfKitchens: 0,
        kitchenDescription: 'string',
        numberOfFullBathrooms: 0,
        fullBathroomDescription: 'string',
        numberOfHalfBathrooms: 0,
        halfBathroomDescription: 0,
        centralCooling: 'string',
        heating: 'string',
        walls: [{feature: 'string', percentage: 0}],
        flooring: [{feature: 'string', percentage: 0}],
        ceilings: [{feature: 'string', percentage: 0}],
        siteAccess: 'string',
        wallHeights: [{height: 0, percentage: 0}],
        exteriorWalls: 'string',
        foundationType: {
          slab: true,
          crawlSpace: true,
          basement: true,
          daylightWalkoutBasement: true,
          piersRaised: true,
          suspendedOverHillside: true
        },
        additionalFoundationType: {
          concreteMasonry: true,
          dirt: true,
          landfill: true,
          open: true,
          rock: true,
          sand: true
        },
        roofMaterial: 'string'
      },
      deededOwner: true
    },
    eligibleDiscounts: [
      {
        eligibleDiscountId: 'string',
        selectedOptionValue: 'string',
        availableOptions: [{optionValue: 'string', optionDescription: 'string'}],
        qualifyingInformation: {associateNumber: 0}
      }
    ]
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});