import faker from 'faker';

const FakerGoals = () => {
  const mockData = {
    goals: [
      {
        area: faker.lorem.words(),
        steps: faker.lorem.words(),
        targetDate: faker.date.future(),
        cmTask: faker.lorem.words(),
        dateAchieved: faker.date.recent(),
        notes: faker.lorem.words(),
      },
      {
        area: faker.lorem.words(),
        steps: faker.lorem.words(),
        targetDate: faker.date.future(),
        cmTask: faker.lorem.words(),
        dateAchieved: faker.date.recent(),
        notes: faker.lorem.words(),
      },
    ],
    clientStrengths: faker.lorem.paragraph(),
    clientBarriers: faker.lorem.paragraph(),
    progressSummary: faker.lorem.paragraph(),
  };

  return mockData;
};

export default FakerGoals;