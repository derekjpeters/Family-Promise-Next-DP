// data/cases.js

import FakerClientAndFamInfoSection from '../components/MockData/FakerClientAndFamInfoSection';
import FakerEmploymentSection from '../components/MockData/FakerEmploymentSection';
import FakerHouseholdInformation from '../components/MockData/FakerHouseholdInformation';
import FakerEducationSection from '../components/MockData/FakerEducationSection';
import FakerFinanceInformation from '../components/MockData/FakerFinanceInformation';
import FakerInsuranceSection from '../components/MockData/FakerInsuranceSection';
import FakerDocuments from '../components/MockData/FakerDocuments';
import FakerGoals from '../components/MockData/FakerGoals';


const CASE_COUNT = 20;

const cases = Array.from({ length: CASE_COUNT }, (_, i) => ({
  id: i + 1,
  clientInfo: FakerClientAndFamInfoSection(),
  employment: FakerEmploymentSection(),
  householdInfo: FakerHouseholdInformation(),
  education: FakerEducationSection(),
  finances: FakerFinanceInformation(),
  insurance: FakerInsuranceSection(),
  documents: FakerDocuments,
  goals: FakerGoals(),
}));

export default cases;