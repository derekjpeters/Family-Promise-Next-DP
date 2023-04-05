import faker from 'faker';

const FakerHouseholdInformation = () => {
  const previousLivingSituationCount = faker.datatype.number({ min: 0, max: 5 });
  const previousLivingSituation = Array.from({ length: previousLivingSituationCount }, () =>
    faker.lorem.words(faker.datatype.number({ min: 1, max: 3 }))
  );

  return {
    currentLivingSituation: faker.lorem.words(faker.datatype.number({ min: 1, max: 3 })),
    previousLivingSituation,
    numBedrooms: faker.datatype.number({ min: 1, max: 5 }),
    numBathrooms: faker.datatype.number({ min: 1, max: 3 }),
    hasFurniture: faker.datatype.boolean(),
  };
};

export default FakerHouseholdInformation;