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
    producer: {producerCode: '12345678 - 001', agencyCode: 'string'},
    effectiveDate: '2021-01-19',
    creditConsent: true,
    policyAddress: {
      addressLine1: '1234 E Broad St',
      addressLine2: 'APT 534C',
      city: 'Columbus',
      state: 'OH',
      postalCode: '43016-1111'
    },
    termType: 'Annual',
    accountId: '',
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
        emailAddress: 'test@email.com',
        homeNumber: '123-123-1234',
        policyHolderType: 'PolicyPriNamedInsured',
        companyName: ''
      }
    ],
    hasSupportingUmbrellaPolicy: true,
    isAssignedRiskPlan: true,
    hasDrivingDataConsent: true,
    currentCarrier: {
      currentCarrierName: 'string',
      coverageLapse: 'string',
      currentBodilyInjuryLimit: 'string',
      currentCarrierTerms: 0,
      isNationwideWinBack: true
    },
    vehicleDrivers: [
      {
        driverId: 'string',
        vehicleId: 'string',
        isPrimaryDriver: true,
        isPrimaryVehicle: true
      }
    ],
    drivers: [
      {
        ageFirstLicensed: 0,
        driverType: 'Driver',
        employmentInfo: {
          currentEmployment: 'string',
          fulltimeEmployment: 'string',
          employmentAddress: {
            addressLine1: '1234 E Broad St',
            addressLine2: 'APT 534C',
            city: 'Columbus',
            state: 'OH',
            postalCode: '43016-1111'
          }
        },
        filings: [{filingState: 'string', filingType: 'string'}],
        hasGraduatedCollege: true,
        hasLicenseInSameStateForThreeYears: true,
        healthCarePlan: 'Medicare',
        infractions: [
          {
            infractionType: 'string',
            occurrenceDate: '2021-01-19',
            infractionDesc: 'string',
            overrideInfraction: 'string',
            overrideReason: 'string'
          }
        ],
        isFinancialFilingRequired: false,
        isLivingWithNWInsuredParent: false,
        isPersonalInjuryProtectionExcluded: false,
        licenseNumber: 'TV111111',
        licenseState: 'OH',
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
        prefillId: 'string',
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
        },
        reasonNonDriver: 'Military',
        relationToPrimaryNamedInsured: 'Spouse',
        tempId: 0
      }
    ],
    vehicles: [
      {
        prefillId: 'string',
        vin: '5J6RW1H55JA004191',
        garageLocation: {
          addressLine1: '1234 E Broad St',
          addressLine2: 'APT 534C',
          city: 'Columbus',
          state: 'OH',
          postalCode: '43016-1111'
        },
        odometerReading: 47213,
        annualMiles: 10000,
        registeredOwners: [{driverId: 'string'}],
        excludedDrivers: [{driverId: 'string'}],
        year: 2020,
        make: 'NISS',
        model: 'ROGUE SPT',
        bodyType: '4 DOOR 100 IN',
        bodyStyle: 'UTL4X24D',
        primaryUse: 'Work',
        vehicleType: 'auto',
        isPurchasedNew: false,
        purchasedNewDate: '2020-01-01T00:00:00.000Z',
        costNew: {amount: 25000, currency: 'USD'},
        customizationDetails: '4 inch lift kit',
        customizationAmount: 2500,
        additionalInterests: [
          {
            expirationDate: '2021-01-19',
            additionalInterestType: 'string',
            companyName: 'string',
            address: {
              addressLine1: '1234 E Broad St',
              addressLine2: 'APT 534C',
              city: 'Columbus',
              state: 'OH',
              postalCode: '43016-1111'
            }
          }
        ],
        hasPriorDamage: false,
        damageLocation: 'Front passenger door',
        isAnyRegisteredOwnerAPolicyDriver: true,
        milesOneWay: 20,
        daysCommutingPerWeek: 5,
        isRegisteredInState: true,
        prequalifiedPartnerScoreId: '2bdfa23f-6cf1-4ba2-896d-345958d122276',
        tempId: 0
      }
    ],
    telematicsEnrollments: {
      vehicleEnrollment: {
        vehicles: [
          {
            vehicleId: 'string',
            enrollmentStatus: 'string',
            vehicleProgram: 'string',
            annualMileage: 0
          }
        ]
      },
      mobileEnrollment: {
        phoneNumber: 'string',
        hasConsentToTextActivation: true,
        enrollmentStatus: 'string'
      }
    },
    offeredQuotes: [
      {
        coverages: [
          {
            coverageId: 'string',
            coverageLevel: 'string',
            selectedValue: [{code: 'string', value: 'string'}],
            tempCoverableId: 0
          }
        ]
      }
    ],
    eligibleDiscounts: [
      {
        eligibleDiscountId: 'string',
        selectedOptionValue: 'string',
        qualifyingInformation: {
          groupOccupation: 'string',
          smartrideMobileConsentToText: true,
          mobilePhone: 'string'
        }
      }
    ]
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});