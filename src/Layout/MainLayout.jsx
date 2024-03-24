import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Components/Header/Nav";
import Footer from "../Components/Footer/Footer";
import Spinner from "../Components/Spinner/Spinner";

export default function MainLayout() {
  const navigation = useNavigation();

  
  return (
    <>
      <header className="h-16">
        <Nav />
      </header>

      <main className="min-h-[calc(100vh-116px)] ">
        {
          navigation.state === 'loading' ? <Spinner/> :  <Outlet />
        }
       
      </main>
      <Footer />
    </>
  );
}
