import { Achievement } from "@/components/Achievement";
import { CompaniesSection } from "@/components/CompaniesSection";
import { CourseCategories } from "@/components/CourseCatogaries";
import { Courses } from "@/components/Courses";
import { HeroSection } from "@/components/HeroSection"
import { OurTeam } from "@/components/OurTeam"
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <CompaniesSection/>
    <CourseCategories/>
    <Achievement/>
    <Courses/>
    <OurTeam/>
    <Reviews/>
    </>
  );
}
