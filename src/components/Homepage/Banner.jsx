const Banner = () => {
  return (
    <section className="relative h-64 md:h-72 lg:h-96 bg-cover bg-center bg-[url('https://i.ibb.co/jksCcPC/creative-learners.jpg')]">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto flex flex-col justify-center h-full text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
          Welcome to Online Group Study
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
          Learn together, succeed together.
        </p>
      </div>
    </section>
  );
};

export default Banner;
