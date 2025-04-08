import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-[calc(100vh-96px)] bg-base-100 px-4 md:px-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <img
          src="images/hero.webp"
          alt="Delicious Pizza"
          className="max-w-[240px] md:max-w-sm lg:max-w-md mask mask-squircle shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Feeling hungry?</h1>
        <p className="py-6 text-2xl">Order your favorite Pizza in minutes!</p>
          <Link to={"/Pizzeria/menu"} className="btn btn-primary transition-transform duration-300 hover:bg-yellow-600 transform hover:scale-110">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
