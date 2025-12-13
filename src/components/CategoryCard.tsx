import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function CategoryCard() {
    // const items = [
    //     {
    //         title: 'Native Smart Locks',
    //         image: 'https://images.pexels.com/photos/31854227/pexels-photo-31854227.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     },
    //     {
    //         title: 'Laptop',
    //         image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    //     },
    //     {
    //         title: 'Spa Ayurveda',
    //         image: 'https://images.pexels.com/photos/3771833/pexels-photo-3771833.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     },
    //     {
    //         title: 'Hair Studio for Women',
    //         image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     },
    //     {
    //         title: 'AC',
    //         image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     },
    // ];

    const items = [
        {
            title: 'Laptop Repair',
            image: 'https://i.pinimg.com/736x/dd/50/74/dd507457ac7f2475c96fd475d66914c8.jpg',
            // laptop motherboard / hardware repair
        },
        {
            title: 'PC Repair',
            image: 'https://i.pinimg.com/1200x/d1/33/3d/d1333dda34bbd58e38adb6b6681e52ec.jpg',
            // desktop CPU repair
        },
        {
            title: 'Laptop Service',
            image: 'https://i.pinimg.com/736x/db/0c/44/db0c4491cc2f26d10e1a95f484ababb4.jpg',
            // laptop cleaning & servicing
        },
        {
            title: 'OS Installation',
            image: 'https://i.pinimg.com/1200x/6f/6d/0c/6f6d0c97fbcde65e8b5aa3f390410d95.jpg',
            // windows / os installation
        },
        {
            title: 'Data Recovery',
            image: 'https://i.pinimg.com/1200x/4a/23/6c/4a236c2e10235e30d4cd2008f993e602.jpg',
            // hard disk / data recovery
        },
    ];




    // 🧠 Responsive visible card count
    const getVisibleCount = () => {
        if (window.innerWidth < 640) return 1; // mobile
        if (window.innerWidth < 1024) return 2; // tablet
        if (window.innerWidth < 1280) return 3; // small laptop
        return 5; // desktop
    };

    const [VISIBLE, setVISIBLE] = useState(getVisibleCount());
    const [index, setIndex] = useState(VISIBLE);
    const [animating, setAnimating] = useState(false);
    const containerRef = useRef(null);
    const TRANSITION_MS = 400;
    const total = items.length;

    const extended = [
        ...items.slice(total - VISIBLE, total),
        ...items,
        ...items.slice(0, VISIBLE),
    ];

    const moveTo = (newIndex: number) => {
        if (animating) return;
        setAnimating(true);
        setIndex(newIndex);
    };

    const prev = () => moveTo(index - 1);
    const next = () => moveTo(index + 1);

    // Handle wrapping logic after transition
    useEffect(() => {
        if (!animating) return;
        const handle = setTimeout(() => {
            let adjusted = index;
            if (index >= VISIBLE + total) {
                adjusted = VISIBLE;
            } else if (index < VISIBLE) {
                adjusted = VISIBLE + total - 1;
            }
            if (adjusted !== index) {
                setAnimating(false);
                setIndex(adjusted);
            } else {
                setAnimating(false);
            }
        }, TRANSITION_MS);
        return () => clearTimeout(handle);
    }, [index, total, animating, VISIBLE]);

    // 🧠 Resize listener for responsive VISIBLE count
    useEffect(() => {
        const handleResize = () => {
            const newVisible = getVisibleCount();
            setVISIBLE(newVisible);
            setIndex(newVisible); // reset index on resize
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                <div
                    ref={containerRef}
                    className="flex gap-2"
                    style={{
                        transform: `translateX(-${(index * 100) / VISIBLE}%)`,
                        transition: animating ? `transform ${TRANSITION_MS}ms ease` : 'none',
                    }}
                >
                    {extended.map((it, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0"
                            style={{ width: `${100 / VISIBLE}%` }}
                        >
                            <div className="rounded-xl overflow-hidden">
                                <div className="w-full">
                                    <Image
                                        src={it.image}
                                        alt={it.title}
                                        className="w-full h-52 object-cover rounded-t-md"
                                        width={600}
                                        height={208}
                                    />
                                </div>
                                <div className="p-3">
                                    <h3 className="text-base text-black font-semibold">{it.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <button
                aria-label="Previous"
                onClick={prev}
                disabled={animating}
                className="absolute cursor-pointer top-1/2 left-2 -translate-y-1/2 bg-white hover:bg-white shadow rounded-full p-2 disabled:opacity-50"
            >
                <FaArrowLeft className="text-black" />
            </button>
            <button
                aria-label="Next"
                onClick={next}
                disabled={animating}
                className="absolute cursor-pointer top-1/2 right-2 -translate-y-1/2 bg-white hover:bg-white shadow rounded-full p-2 disabled:opacity-50"
            >
                <FaArrowRight className="text-black" />
            </button>
        </div>
    );
}

export default CategoryCard;
