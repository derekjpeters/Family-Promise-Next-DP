import faker from 'faker';

const FakerEmploymentSection = () => {
  const currentlyEmployedOptions = ['Yes (Full-Time)', 'Yes (Part-Time)', 'Seasonal/Temporary Employment', 'No Due to a Documented Mental/Physical Condition', 'No'];
  const interestedInWorkingInOptions = ['Retail/Sales', 'Fast Food', 'Hospitality', 'Warehouse', 'Truck Driving'];

  const mockData = {
    mostRecent: {
      name: faker.company.companyName(),
    },
    currentlyEmployed: faker.random.arrayElement(currentlyEmployedOptions),
    skillsCertifications: {
      has: faker.datatype.boolean(),
      skills: faker.datatype.boolean() ? faker.lorem.words() : null,
    },
    interestedInWorkingIn: faker.random.arrayElement(interestedInWorkingInOptions),
  };

  return mockData;
};

export default FakerEmploymentSection;