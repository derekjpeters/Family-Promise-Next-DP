import faker from 'faker';

const FakerClientAndFamInfoSection = () => {
  const ethnicityOptions = ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Native Hawaiian or Other Pacific Islander', 'White or Caucasian', 'Hispanic or Latino or Spanish Origin', 'Non-Resident Alien (of any race or ethnicity)', 'Multiracial or Biracial'];
  const raceOptions = ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Native Hawaiian or Other Pacific Islander', 'White'];
  const genderOptions = ['Male', 'Female', 'Transgender Male', 'Transgender Female', 'Non-Binary', 'Prefer to Self-Describe'];
  const sexualOrientationOptions = ['Asexual', 'Bisexual', 'Gay', 'Lesbian', 'Heterosexual/Straight', 'Pansexual', 'Queer', 'Preferred Not to Answer', 'Other'];
  const veteranOptions = ['Yes', 'No'];

  const mockData = {
    headOfHousehold: faker.datatype.boolean(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    ssn: faker.datatype.number(),
    dob: faker.date.past(),
    ethnicity: faker.random.arrayElement(ethnicityOptions),
    race: faker.random.arrayElement(raceOptions),
    gender: faker.random.arrayElement(genderOptions),
    selfDescribe: faker.lorem.words(),
    sexualOrientation: faker.random.arrayElement(sexualOrientationOptions),
    other: faker.lorem.words(),
    lastKnownAddress: {
      zip: faker.address.zipCode(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
    },
    veteran: faker.random.arrayElement(veteranOptions),
  };

  return mockData;
};

export default FakerClientAndFamInfoSection;