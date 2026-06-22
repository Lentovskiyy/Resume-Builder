import HeroSection from "@/components/layouts/Sections/HeroSection/HeroSection";
import FeaturesSection from "@/components/layouts/Sections/FeaturesSection/FeaturesSection";
import TrustSection from "@/components/layouts/Sections/TrustSection/TrustSection";
import StepsSection from "@/components/layouts/Sections/StepsSection/StepsSection";
import PricingSection from "@/components/layouts/Sections/PricingSection/PricingSection";
import FaqSection from "@/components/layouts/Sections/FaqSection/FaqSection";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";

// 🔐 Import your cookie-aware server client helper
import { createClient } from "@/services/supabase/serverMain";

// 💡 Changed to an async function so it can read server data
const Home = async () =>  {

  // 1. Initialize Supabase and check if the user cookie is present
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // 2. Convert to a true/false boolean
  const userIsLoggedIn = !!user;

  return (
    <>
      <Header isLoggedIn={userIsLoggedIn} />
      <main className="flex flex-1 flex-col items-center bg-gray-100">
        <HeroSection/>
        <FeaturesSection/>
        <TrustSection/>
        <StepsSection/>
        <PricingSection/>
        <FaqSection/>
      </main>
      <Footer/>
    </>
  );
}

export default Home;