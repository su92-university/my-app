import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import LeftSideBarDashboards from "@/components/Left_side_bar_dashboards";
import Managment from "@/components/Managment";
import Nav from "@/components/Nav";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <LeftSideBarDashboards/>
      <div className="flex-1 overflow-y-auto">
        <Managment/>
      </div>
      {/* <Nav/>
      <Herosection/>
      <WhyChooseUs/>
      <FAQ/>
      <Footer/> */}
    </div>
  );
}
