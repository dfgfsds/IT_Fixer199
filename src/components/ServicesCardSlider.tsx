import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const services = [
  {
    title: 'Laptop Repair (Hardware)',
    rating: 4.8,
    reviews: '28K',
    price: '₹499',
    image:
      'https://i.pinimg.com/736x/dd/50/74/dd507457ac7f2475c96fd475d66914c8.jpg',
    // laptop motherboard / chip repair
  },
  {
    title: 'PC Repair (Desktop)',
    rating: 4.7,
    reviews: '19K',
    price: '₹399',
    image:
      'https://i.pinimg.com/1200x/d1/33/3d/d1333dda34bbd58e38adb6b6681e52ec.jpg',
    // desktop CPU repair
  },
  {
    title: 'Laptop Service & Cleaning',
    rating: 4.9,
    reviews: '41K',
    price: '₹299',
    image:
      'https://i.pinimg.com/736x/db/0c/44/db0c4491cc2f26d10e1a95f484ababb4.jpg',
    // laptop internal cleaning
  },
  {
    title: 'OS Installation (Windows / Linux)',
    rating: 4.6,
    reviews: '12K',
    price: '₹249',
    image:
      'https://i.pinimg.com/1200x/8f/fd/20/8ffd20b23dda5660e5393ca1b13ced17.jpg',
    // windows installation
  },
  {
    title: 'Data Recovery (Hard Disk / SSD)',
    rating: 4.5,
    reviews: '9K',
    price: '₹999',
    image:
      'https://i.pinimg.com/1200x/35/b5/01/35b5011f6c046cb4fc4cc3d2aacbf8b6.jpg',
    // data recovery service
  },
];

const TRANSITION_MS = 300;

const ServicesCardSlider = () => {
  const [visibleSlides, setVisibleSlides] = useState(5);
  const total = services.length;
  const extended = [
    ...services.slice(total - visibleSlides, total),
    ...services,
    ...services.slice(0, visibleSlides),
  ];
  const [index, setIndex] = useState(visibleSlides);
  const [animating, setAnimating] = useState(false);

  const updateVisibleSlides = () => {
    if (window.innerWidth < 640) setVisibleSlides(1);
    else if (window.innerWidth < 768) setVisibleSlides(2);
    else if (window.innerWidth < 1024) setVisibleSlides(3);
    else setVisibleSlides(5);
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  useEffect(() => {
    setIndex(visibleSlides);
  }, [visibleSlides]);

  const prev = () => {
    if (animating) return;
    setAnimating(true);
    setIndex((i) => i - 1);
  };
  const next = () => {
    if (animating) return;
    setAnimating(true);
    setIndex((i) => i + 1);
  };

  useEffect(() => {
    if (!animating) return;
    const t = setTimeout(() => {
      let adjusted = index;
      if (index >= visibleSlides + total) {
        adjusted = visibleSlides;
      } else if (index < visibleSlides) {
        adjusted = visibleSlides + total - 1;
      }
      setAnimating(false);
      setIndex(adjusted);
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [index, total, animating, visibleSlides]);

  const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const stars = [];
    for (let i = 0; i < full; i++) {
      stars.push(
        <span key={`f${i}`} className="text-yellow-500 text-sm">
          ★
        </span>
      );
    }
    if (half) {
      stars.push(
        <span key="half" className="text-yellow-500 text-sm">
          ☆
        </span>
      );
    }
    while (stars.length < 5) {
      stars.push(
        <span key={`e${stars.length}`} className="text-gray-300 text-sm">
          ★
        </span>
      );
    }
    return <div className="flex gap-1">{stars}</div>;
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold text-black">Most booked services</h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-4"
          style={{
            transform: `translateX(-${(index * 100) / visibleSlides}%)`,
            transition: animating ? `transform ${TRANSITION_MS}ms ease` : 'none',
          }}
        >
          {extended.map((svc, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <div className="rounded-xl overflow-hidden">
                <div className="w-full">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    width={600}
                    height={208} // h-52 = 208px
                    className="w-full h-52 rounded-md object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-base font-semibold mb-1 text-black">
                    {svc.title}
                  </h3>
                  <div className="flex items-center text-sm mb-1 gap-2">
                    {renderStars(svc.rating)}
                    <div className="text-gray-600">
                      {svc.rating.toFixed(2)} ({svc.reviews})
                    </div>
                  </div>
                  <div className="text-lg text-black">{svc.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="Previous"
          onClick={prev}
          disabled={animating}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white hover:bg-white shadow rounded-full p-2 disabled:opacity-50"
        >
          <FaArrowLeft className="text-black" />
        </button>
        <button
          aria-label="Next"
          onClick={next}
          disabled={animating}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white hover:bg-white shadow rounded-full p-2 disabled:opacity-50"
        >
          <FaArrowRight className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default ServicesCardSlider;
