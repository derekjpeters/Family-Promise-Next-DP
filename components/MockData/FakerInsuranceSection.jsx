import faker from 'faker';

const FakerInsuranceSection = () => {
  const mockData = {
    medicare: {
      hasMedicare: faker.datatype.boolean(),
      medicareNumber: faker.random.alphaNumeric(),
      effectiveDate: faker.date.past(),
    },
    medicaid: {
      hasMedicaid: faker.datatype.boolean(),
      medicaidNumber: faker.random.alphaNumeric(),
      effectiveDate: faker.date.past(),
      expirationDate: faker.date.future(),
    },
    privateInsurance: {
      hasPrivateInsurance: faker.datatype.boolean(),
      insuranceCompany: faker.company.companyName(),
      groupNumber: faker.datatype.number(),
      subscriberNumber: faker.random.alphaNumeric(),
      effectiveDate: faker.date.past(),
      expirationDate: faker.date.future(),
      employerName: faker.company.companyName(),
      employeeOccupation: faker.name.jobTitle(),
    },
    otherCoverage: faker.lorem.sentences(),
    workingWithOtherAgencies: faker.datatype.boolean(),
    otherAgencies: faker.lorem.sentences(),
  };

  return mockData;
};

export default FakerInsuranceSection;