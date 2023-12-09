import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative h-64 md:h-72 lg:h-96 bg-cover bg-center bg-[url('https://i.ibb.co/jksCcPC/creative-learners.jpg')]">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto flex flex-col justify-center h-full text-center relative z-10">
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4"
        >
          Welcome to Online Group Study
        </motion.h1>
        <motion.p
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg md:text-xl lg:text-2xl text-white mb-8"
        >
          Learn together, succeed together.
        </motion.p>
      </div>
    </section>
  );
};

export default Banner;
