import Hero from "../components/Hero";
import dynamic from "next/dynamic";

const HowItWorks = dynamic(() => import("../components/HowItWorks"), {
  loading: () => <div className="min-h-[400px] flex justify-center items-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#485d3a]"></div></div>
});
export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
    </>
  );
}
