import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import Signup from "@/components/layouts/Signup/Signup";
import {createClient} from "@/services/supabase/serverMain";

const Home = async () =>  {
  // 1. Initialize Supabase and check if the user cookie is present
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // 2. Convert to a true/false boolean
  const userIsLoggedIn = !!user;

  return (
    <>
      <Header isLoggedIn={userIsLoggedIn}/>
      <main className="flex flex-1 flex-col items-center bg-gray-300">
        <Signup/>
      </main>
      <Footer/>
    </>

  );
}

export default Home;
