import faker from 'faker';

export const FakerDocuments = {
    adultsInFamily: {
      completedHFCA: faker.datatype.boolean(),
      validDriverLicenseOrStateID: faker.datatype.boolean(),
      validSocialSecurityCards: faker.datatype.boolean(),
      signedUpForDSHSBenefits: faker.datatype.boolean(),
      completedResponsibleRentersCourse: faker.datatype.boolean(),
      birthCertificatesForChildren: faker.datatype.boolean(),
      childrenEnrolledInSchool: faker.datatype.boolean(),
      childcare: faker.datatype.boolean(),
    },
    receiveInformationAbout: {
      foodOrMealAssistance: faker.datatype.boolean(),
      clothingAssistance: faker.datatype.boolean(),
      counselingServices: faker.datatype.boolean(),
      addictionOrRecoveryResources: faker.datatype.boolean(),
      mentorPrograms: faker.datatype.boolean(),
      youthServicesOrProgramming: faker.datatype.boolean(),
      budgeting: faker.datatype.boolean(),
    },
    receiveTextUpdatesAbout: {
      employmentOpportunities: faker.datatype.boolean(),
      apartmentListings: faker.datatype.boolean(),
      careerFairsAndJobTrainings: faker.datatype.boolean(),
    },
    referrals: [
      {
        name: faker.name.findName(),
        address: faker.address.streetAddress(),
        cell: faker.phone.phoneNumber(),
        home: faker.phone.phoneNumber(),
        work: faker.phone.phoneNumber(),
        email: faker.internet.email(),
      },
      // add more referrals as needed
    ],
    firstMeetingDate: faker.date.future(),
};

export default FakerDocuments;