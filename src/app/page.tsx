import Home from "@/components/Home";
import Services from "@/components/Services";
import Techonology from "@/components/Techonology";

export default function page () {
  return (
    <main className="flex flex-col h-screen">
      <Home />
      <Services />
      <Techonology />
    </main>
  );
}
