import { Outlet } from "react-router-dom";
import Nav from "../Components/Header/Nav";
import Footer from "../Components/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <header className="h-16">
        <Nav />
      </header>

        <main className="min-h-[calc(100vh-116px)] ">
        <Outlet />
        </main>
      <Footer/>
    </>
  );
}
