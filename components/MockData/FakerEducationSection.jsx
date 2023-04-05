import faker from 'faker';

const FakerEducationSection = () => {
  const highestGradeDegreeCompletedOptions = ['Grade School', 'High School/GED', 'Associates Degree', 'Undergrad Degree', 'Grad/Post Grad Degreee'];

  const mockData = {
    highestGradeDegreeCompleted: faker.random.arrayElement(highestGradeDegreeCompletedOptions),
  };

  return mockData;
};

export default FakerEducationSection;