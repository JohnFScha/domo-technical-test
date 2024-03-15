// Componentes
import Header from "@/components/Header";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Technology from "@/components/Techonology";
import Client from "@/components/Client";
import { CaseOne, CaseTwo } from "@/components/CaseStudies";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <Home />
      <Services />
      <Technology />
      <Client />
      <CaseOne />
      <CaseTwo />
      <Footer />
    </main>
  );
}
