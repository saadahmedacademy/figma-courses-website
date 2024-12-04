import { Achievement } from "@/components/Achievement";
import { CompaniesSection } from "@/components/CompaniesSection";
import { CourseCategories } from "@/components/CourseCatogaries";
import { Courses } from "@/components/Courses";
import { HeroSection } from "@/components/HeroSection"
import { OurTeam } from "@/components/OurTeam"

export default function Home() {
  return (
    <>
    <HeroSection/>
    <CompaniesSection/>
    <CourseCategories/>
    <Achievement/>
    <Courses/>
    <OurTeam/>
    </>
  );
}
