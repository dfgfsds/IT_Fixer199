'use client';
import CategoryGrid from "@/components/CategoryGrid";
import ServicesCardSlider from "@/components/ServicesCardSlider";
import Image from "next/image";

function PcIndex() {
    const pcItems = [
        {
            name: 'Gaming PC',
            image: 'https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg',
        },
        {
            name: 'Workstation',
            image: 'https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg',
        },
        {
            name: 'Mini PC',
            image: 'https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg',
        },
        {
            name: 'All-in-One',
            image: 'https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg',
        },
    ];
    return (
        <>
            <div className="utility-spacing">
                <CategoryGrid title="PC & Desktops" items={pcItems} />
            </div>

            <div className="">
                <div className="utility-spacing">
                    <ServicesCardSlider />
                </div>
            </div>

            <div className="relative utility-spacing">
                <div className="overflow-hidden">
                    <Image
                        alt="Service 4"
                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1752250436156-db21b3.jpeg"
                        width={1200} // or any appropriate width
                        height={1200} // or any appropriate height
                        className="transition-transform duration-300 hover:scale-105"
                    />

                </div>
            </div>

        </>
    )

}

export default PcIndex;