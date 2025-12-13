import MobileHeader from "@/components/Mobile/MobileHomeHeader";
import CartPage from "../desktop/cart/page";
import ServiceGrid from "@/components/Mobile/ServiceGrid";
import NewAndNoteworthy from "@/components/Mobile/NewAndNoteworthy";
import MostBookedServices from "@/components/Mobile/MostBookedServices";
import PcServices from "@/components/Mobile/PcServices";
import LaptopService from "@/components/Mobile/LaptopService";
import PcLaptopRepairServices from "@/components/Mobile/PcLaptopRepairServices";
import Footer from "@/components/Footer";


export default function Mobile() {
    return (
        <>
            {/* <MobileHeader /> */}
                <MobileHeader />
            <ServiceGrid />
            <div className="w-full h-[8px] bg-gray-100 mt-6" />
            <NewAndNoteworthy />
            <div className="w-full h-[8px] bg-gray-100 mt-6" />
            <MostBookedServices />
            <PcServices />
            <LaptopService />
            <PcLaptopRepairServices />
            <Footer />
            {/* <main className="pt-[420px] overflow-y-auto">
        <CartPage />
      </main> */}
        </>
    );
}
