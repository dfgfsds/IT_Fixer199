import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaChevronLeft,
  FaChevronRight,
  FaVolumeMute,
  FaVolumeUp,
} from 'react-icons/fa';
import { FaCirclePlay } from 'react-icons/fa6';
import { FiXCircle } from 'react-icons/fi';

const items = [
  {
    title: 'Laptop Repair',
    tag: 'Hardware & motherboard fixes',
    price: '₹499',
    image:
      'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600',
    video:
      'https://media.istockphoto.com/id/1142007462/video/teenage-boy-repairs-laptop-hard-drive.mp4?s=mp4-640x640-is&k=20&c=sR_OHavgUdxTBU3yqg_A3IAZZtrX-OuqmFKeRGoaVPA=',
  },
  {
    title: 'PC Repair',
    tag: 'Desktop troubleshooting',
    price: '₹599',
    image:
      'https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg?auto=compress&cs=tinysrgb&w=600',
    video:
      'https://media.istockphoto.com/id/1168052821/video/a-caucasian-mans-hands-use-a-screwdriver-to-dismantle-a-computer-lying-in-pieces-of-the-floor.mp4?s=mp4-640x640-is&k=20&c=uuivnCwLT96WuYLK47UDIDzHm-vIuT1U9uVOHJDXnBw=',
  },
  {
    title: 'Laptop Service',
    tag: 'Cleaning & performance boost',
    price: '₹399',
    image:
      'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=600',
    video:
      'https://media.istockphoto.com/id/661797934/video/it-specialist-working-working-on-a-laptop-hes-employee-of-big-ultramodern-data-center.mp4?s=mp4-640x640-is&k=20&c=m_ds_53-lTeiuVjRvRuzs1RNY7DCgVhw4KI96mNktxU=',
  },
  {
    title: 'OS Installation',
    tag: 'Windows / Linux setup',
    price: '₹299',
    image:
      'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
    video:
      'https://media.istockphoto.com/id/977762452/video/system-updating-progress-warning-message-update-failed-alert-on-screen-computer-screen.mp4?s=mp4-640x640-is&k=20&c=VXCsQ47Ploc4qkJhyA8ASMbLeqRPT3BSh2QqK1UVuuo=',
  },
  {
    title: 'Data Recovery',
    tag: 'Hard disk & SSD recovery',
    price: '₹999',
    image:
      'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
    video:
      'https://media.istockphoto.com/id/1044424538/video/data-recovery-progress-warning-message-files-recovered-alert-on-computer-screen-entering.mp4?s=mp4-640x640-is&k=20&c=BYz0skNqgtNQ68_tfs26GDPqpbLbnZhXDJ_cmvY2jGI=',
  },
  {
    title: 'Laptop Screen Replacement',
    tag: 'Broken / flickering display',
    price: '₹1,499',
    image:
      'https://images.pexels.com/photos/4492136/pexels-photo-4492136.jpeg?auto=compress&cs=tinysrgb&w=600',
    video:
      'https://media.istockphoto.com/id/1193203489/video/service-worker-repairing-cleaning-dust-laptop-motherboard-circuit-board-cooler-with-brush-in.mp4?s=mp4-640x640-is&k=20&c=245iPSXKuZ2Ip3ESPF4_UzpSiu7GzzIMG0-jYjBAJV4=',
  },
  {
    title: 'PC Assembly',
    tag: 'Custom build & upgrades',
    price: '₹799',
    image:
      'https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=600',
    video:
      'https://media.istockphoto.com/id/2149040646/video/closeup-of-unrecognizable-master-repairman-assembling-pc-system-unit-install-video-card-of.mp4?s=mp4-640x640-is&k=20&c=oqnz1tSfLI82bBWvJI_zHU8NxKdw4wYNu_rKFQ78xTo=',
  },
  {
    title: 'Virus Removal',
    tag: 'Security & cleanup',
    price: '₹249',
    image:
      'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600',
    video:
      'https://media.istockphoto.com/id/2199327309/video/creative-illustration-of-cartoon-viruses-interacting-with-a-laptop-showing-a-warning-message.mp4?s=mp4-640x640-is&k=20&c=5EqzOvxOegfZFkCRTIUo8xxT8rn0kokmrYpDY1isXdE=',
  },
];


const VideoSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleSlides(1);
      else if (width < 768) setVisibleSlides(2);
      else if (width < 1024) setVisibleSlides(3);
      else setVisibleSlides(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = items.length;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % total);
  };
  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const openModalAt = (idx:number) => {
    setModalIdx(idx);
    setModalOpen(true);
  };

  const modalPrev = () => setModalIdx((i) => (i - 1 + total) % total);
  const modalNext = () => setModalIdx((i) => (i + 1) % total);

  return (
    <div className="">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-black">Thoughtful curations</h2>
        <p className="text-black">of our finest experiences</p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${(startIndex * 100) / visibleSlides}%)` }}
        >
          {items.map((it, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}
              onClick={() => openModalAt(i)}
            >
              <div className="rounded-xl overflow-hidden relative group">
                <div className="w-full aspect-[9/16] bg-gray-100">
                  <Image
                  height={400}
                  width={300}
                    src={it.image}
                    alt={it.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaCirclePlay className="text-white text-5xl opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-md">
                  {it.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="Previous slide"
          onClick={prevSlide}
          className="absolute top-1/2 left-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg"
        >
          <FaChevronLeft className="text-xl text-gray-800" />
        </button>
        <button
          aria-label="Next slide"
          onClick={nextSlide}
          className="absolute top-1/2 right-6 translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg"
        >
          <FaChevronRight className="text-xl text-gray-800" />
        </button>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 px-4 mt-16">
          <div className="relative w-full max-w-sm bg-white overflow-hidden shadow-lg">
            <button
              onClick={() => setModalOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-black z-10 cursor-pointer"
            >
              <FiXCircle className="text-2xl text-white" />
            </button>

            <div className="relative">
              <div className="aspect-[4/5] bg-black">
                <video
                  key={modalIdx}
                  src={items[modalIdx].video}
                  autoPlay
                  muted={isMuted}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-4 right-16 z-10">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="bg-black/50 text-white rounded-full p-2"
                >
                  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
              </div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                {items.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 w-8 rounded-full ${
                      i === modalIdx ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 m-2 rounded-md">
                <div className="text-sm text-gray-300 mb-1">
                  {items[modalIdx].tag}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {items[modalIdx].title}
                </h3>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-lg font-semibold text-white">
                    {items[modalIdx].price}
                  </div>
                  <button className="bg-white text-black px-6 py-2 rounded-md font-semibold">
                    View more
                  </button>
                </div>
              </div>

              <button
                onClick={modalPrev}
                aria-label="Previous video"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 shadow z-10"
              >
                <FaChevronLeft className="text-white" />
              </button>
              <button
                onClick={modalNext}
                aria-label="Next video"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 shadow z-10"
              >
                <FaChevronRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
