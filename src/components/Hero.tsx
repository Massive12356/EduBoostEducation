import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pic1 from '../images/heroImage.jpeg';
import pic2 from '../images/heroImage1.jpeg';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    img: pic2,
    title: 'Transforming Ghanaian Education',
    subtitle: 'One School at a Time',
    description:
      'We provide an all-in-one technology ecosystem from modern ICT labs to teacher training and management software to empower schools and prepare students for a digital future.',
    primaryBtn: 'Request a Demo',
    secondaryBtn: 'Partner with Us',
  },
  {
    img: pic1,
    title: 'Empowering Students and Teachers',
    subtitle: 'For the Digital Future',
    description:
      'Our training, tools, and school management systems give teachers confidence and students real digital skills.',
    primaryBtn: 'Get Started',
    secondaryBtn: 'Learn More',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => setCurrent(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);

  // threshold in px to decide swipe
  const swipeConfidenceThreshold = 100;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={current}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-fill"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </motion.div>
      </AnimatePresence>

      {/* Drag-enabled content */}
      <AnimatePresence initial={false} custom={current}>
        <motion.div
          key={current + '-text'}
          className="
      relative z-10 flex flex-col items-center 
      justify-center h-full px-4 text-center max-w-3xl mx-auto
       /* push content down from top */
    "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x * velocity.x;
            if (swipe < -swipeConfidenceThreshold) {
              nextSlide();
            } else if (swipe > swipeConfidenceThreshold) {
              prevSlide();
            }
          }}
        >
          <h1
            className="ubuntu
      text-2xl md:text-[5rem] lg:text-[2.3rem] font-bold text-white mb-4 uppercase leading-tight
    "
          >
            {slides[current].title}{' '}
            <span className="text-[#f503f5]">{slides[current].subtitle}</span>
          </h1>
          <p className=" alanSas text-[1rem] md:text-xl w-[73%] mb-5 leading-tight text-white">
            {slides[current].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <div className="group">
              <motion.button
                whileTap={{ scale: 0.95 }}
                aria-label={slides[current].primaryBtn}
                className="bg-[#f2b705] flex gap-3 px-6 py-3 alanSas rounded-lg text-black font-semibold hover:bg-[#9e7701] group-hover:text-white"
              >
                {slides[current].primaryBtn} <ArrowRight />
              </motion.button>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              aria-label={slides[current].secondaryBtn}
              className="bg-[#f2b705] flex  items-center justify-center px-6 py-3 alanSas rounded-lg text-black font-semibold hover:bg-[#9e7701] hover:text-white"
            >
              {slides[current].secondaryBtn}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
