import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
function Landing() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const sliderRef = useRef(null);

  const { ref: sectionRef, inView: isVisible } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Start animation when 50% of the section is visible
  });

  const stats = [
    {
      id: 1,
      platform: "Food Save from waste",
      icon: "📺", // Replace with your YouTube icon
      value: 5000,
      exe: "+kg",
      bgColor: "bg-red-500",
    },
    {
      id: 2,
      platform: "Meal Donated",
      icon: "🐦", // Replace with your Twitter icon
      value: 3000,
      exe: "+",
      bgColor: "bg-blue-500",
    },
    {
      id: 3,
      platform: "Active Food Bank",
      icon: "💼", // Replace with your LinkedIn icon
      value: 200,
      exe: "+",
      bgColor: "bg-blue-700",
    },
  ];
  const slides = [
    {
      id: 1,
      title: "Sustanibility leaderboard",
      image: "./src/images/s1.png",
      bgColor: "bg-red-500",
      
    },
    {
      id: 2,
      title: "Recipy suggetion",
      image: "./src/images/s2.png",
      bgColor: "bg-blue-500",
      
    },
    {
      id: 3,
      title: "Food donation",
      image: "./src/images/s3.png",
      bgColor: "bg-green-500",
      
    },
    {
      id: 4,
      title: "Discount offers",
      image: "./src/images/s4.png",
      bgColor: "bg-red-500",
      
    },
    {
      id: 5,
      title: "Expiry Notification",
      image: "./src/images/s5.png",
      bgColor: "bg-blue-500",
      
    },
    {
      id: 6,
      title: "Smart inventory management",
      image: "./src/images/s6.png",
      bgColor: "bg-green-500",
      
    },
    // Add more slides as needed with unique descriptions
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false, // Disable hover pause functionality
  };

  // Animation sequence
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Define variants for sequential animation
  const boxVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.6, // Delay each box animation
      },
    }),
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-greenish-light py-10 px-8 to-greenish-dark bg-black text-white">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center relative text-center px-4 overflow-hidden">
          {/* Glass effect container */}
          <div className="relative backdrop-blur-0 text-center bg-white/5 rounded-xl shadow-xl p-10 max-w-5xl w-full mx-6">
            <motion.h1
              className="text-5xl font-extrabold text-[#00FF09] mb-4"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Reimagine Food Waste
            </motion.h1>

            {/* Centered second sentence */}
            <motion.p
              className="text-lg text-greenish-light text-center max-w-3xl mb-8 mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              Save more, Waste less, Give back.
            </motion.p>

            <motion.button
              className="px-8 py-4 bg-[#00FF09] text-lg text-black text-greenish-dark font-bold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Learn More
            </motion.button>
          </div>
        </section>

        <section className="py-16 px-6 bg-greenish-light">
          <motion.h2
            className="text-3xl font-bold text-greenish-dark text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Gallery
          </motion.h2>
          <div
            ref={ref} // Trigger animation when this section is in view
            className="grid grid-cols-1 md:grid-cols-4  gap-6"
          >
            {[
              { image: "./src/images/card1.jpg", text: "Inventory Management" },
              { image: "./src/images/card2.jpg", text: "Cooking" },
              { image: "./src/images/card3.jpg", text: "Donating" },
              { image: "./src/images/card4.jpg", text: "Decomposing" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg bg-red-900 shadow-lg"
                custom={index} // Pass index for delay control
                initial="hidden"
                animate={controls}
                variants={boxVariants}
              >
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-64 "
                />
                <p className="text-center my-4 text-lg font-semibold text-white">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className=" my-8">
          <h1 className="text-3xl font-bold text-greenish-dark text-center mb-8">
            Features
          </h1>
          <div className="flex flex-col lg:flex-row px-10 text-center py-10 gap-10">
            <div className="lg:w-1/3 bg-white/10 backdrop-blur-xl p-20 border border-transparent hover:border-white text-center rounded-xl mb-10 lg:mb-0 transition-all">
              <img
                src="./src/images/exp.png"
                alt=""
                className="w-36 h-36 m-auto rounded-full"
              />
              <p className="text-[#00FF09] text-2xl font-bold my-5">
                Reduce food Waste
              </p>
              <p className="text-lg text-center">
                Inventory tracking & Expiry alert.
              </p>
            </div>
            <div className="lg:w-1/3 bg-white/10 backdrop-blur-xl p-20 border border-transparent hover:border-white text-center rounded-xl mb-10 lg:mb-0 transition-all">
              <img
                src="./src/images/com.png"
                alt=""
                className="w-36 h-36 m-auto rounded-full"
              />
              <p className="text-[#00FF09] text-2xl font-bold my-5">
                Help Communities
              </p>
              <p className="text-lg text-center">
                Donate the surplus food to those in need.
              </p>
            </div>
            <div className="lg:w-1/3 bg-white/10 backdrop-blur-xl p-20 border border-transparent hover:border-white text-center rounded-xl transition-all">
              <img
                src="./src/images/money.png"
                alt=""
                className="w-36 h-36 m-auto rounded-full"
              />
              <p className="text-[#00FF09] text-2xl font-bold my-5">
                Save Money
              </p>
              <p className="text-lg text-center">
                Get offers soon to expire food.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full p-10 text-center bg-[#00FF09]  mb-4 mt-16">
          {/* The container for the slideshow */}
          <p className="text-3xl font-bold text-greenish-dark text-black text-center mb-8">Features</p>
          <Slider {...settings} className="h-1/2 ">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex items-center justify-center  h-full px-4"
              >
                <div
                  className={`w-full h-full border border-white bg-black flex items-center text-center justify-center rounded-lg cursor-pointer`}
                >
                  <div className="text-center p-4 ">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-96 object-cover mb-4 rounded-lg"
                    />
                    <h2 className="text-white text-2xl font-bold">{slide.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <div
            ref={sectionRef}
            className="w-full  text-white py-16 flex flex-col  items-center"
          >
            <h2 className="text-4xl font-bold mb-10">
              Making a difference together
            </h2>
            <div className="flex flex-wrap w-full justify-around  gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className={`w-64 h-64 ${stat.bgColor} rounded-lg flex flex-col justify-center items-center shadow-lg`}
                >
                  <div className="text-6xl mb-4">{stat.icon}</div>
                  <div className=" flex gap-1">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      className="text-4xl font-bold"
                    />
                    <p className="text-2xl font-bold py-1 ">{stat.exe}</p>
                  </div>

                  <p className="text-xl mt-2">{stat.platform}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" ">
          <h1 className="text-3xl font-bold text-center text-greenish-dark  mb-8">
            Ready to join our Community
          </h1>
          <div className="flex gap-10 ">
            <div className="w-1/2 ">
              <img src="./src/images/d.svg" alt="" className=" " />
            </div>
            <div className="w-1/2   py-40 space-y-8 px-20 text-center   ">
              <p className="text-2xl">
                Be a part of sustanable future. Start Managing your food smartly
                today
              </p>
              <div className=" text-center">
                <button className="bg-[#00FF09] text-black font-bold w-52 h-14 rounded-lg  text-lg m-auto hover:text-white hover:bg-green-500">
                  join Now{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
