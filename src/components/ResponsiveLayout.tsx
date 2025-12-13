'use client';

import { useDevice } from "@/lib/useDevice";
import MobileFooter from "./Mobile/MobileFooter";
import MobileHeader from "./Mobile/MobileHomeHeader";
import NavBar from "./Navbar";
import Footer from "./Footer";

export default function ResponsiveLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const device = useDevice();

    if (device === "mobile") {
        return (
            <>
                {/* <MobileHeader /> */}

                {/* BODY SCROLL ONLY */}
                <main className="">
                    {children}
                </main>

                <MobileFooter />
            </>
        );
    }

    return (
        <>
            <NavBar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
