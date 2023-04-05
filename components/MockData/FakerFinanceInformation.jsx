import faker from 'faker';

const FakerFinanceInformation = () => {
  const typesOfDebt = {
    studentLoan: faker.datatype.number({ min: 0, max: 100000 }),
    medicalBills: faker.datatype.number({ min: 0, max: 100000 }),
    creditCard: faker.datatype.number({ min: 0, max: 100000 }),
    autoLoan: faker.datatype.number({ min: 0, max: 100000 }),
  };

  const sourceOfIncome = {
    job: faker.datatype.boolean(),
    TANF: faker.datatype.boolean(),
    SSI: faker.datatype.boolean(),
    SSDI: faker.datatype.boolean(),
    childSupport: faker.datatype.boolean(),
    amount: faker.datatype.number({ min: 0, max: 100000 }),
  };

  const mockData = {
    historyOf: {
      evictions: faker.datatype.boolean(),
      landlordDebt: faker.datatype.boolean(),
      criminalHistory: faker.datatype.boolean(),
      poorCredit: faker.datatype.boolean(),
      noRentalHistory: faker.datatype.boolean(),
    },
    typesOfDebt,
    sourceOfIncome,
  };

  return mockData;
};

export default FakerFinanceInformation;