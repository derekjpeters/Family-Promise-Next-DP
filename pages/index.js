import HouseholdInfo from "../components/HouseholdInfoSection/HouseholdInfo"
import ClientAndFamInfo from "../components/ClientAndFamInfoSection/ClientAndFamInfo"
import Education from "../components/EducationSection/Education"
import Employment from "../components/EmploymentSection/Employment"

export default function Home() {
  return (
    <>
      <ClientAndFamInfo />
      <HouseholdInfo />
      <Education />
      <Employment />
    </>
  )
}
