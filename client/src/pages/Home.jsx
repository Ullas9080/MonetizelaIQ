import { useState } from "react";
import About from "../components/About/About";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [inputLink, setInputLink] = useState({
    userLink: "",
    competitorLink: "",
  });

  const inputTag = [
    {
      name: "userLink",
      placeholder: "Enter your YouTube channel link",
      bgGradient:
        "focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-200",
    },
    {
      name: "competitorLink",
      placeholder: "Enter competitor’s YouTube channel link",
      bgGradient:
        "focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-fuchsia-400 transition duration-200",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputLink((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputLink);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

     

      <nav className="flex justify-start p-4 ">
        <img src="/src/assets/logo.svg" alt="Logo" className="35 md:w-50 lg:w-64" />
      </nav>

      {/* Animated Heading */}
      <TypeAnimation
        sequence={[
          "AI-Powered Insights for Creators",
          1000,
          "Create Smarter with Data",
          1000,
          "Turn Analytics into Action",
          1000,
          "Your YouTube Success Starts Here",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="flex justify-center text-pink-500 font-semibold text-2xl sm:text-3xl md:text-2xl lg:text-4xl"
        repeat={Infinity}
      />

      {/* Main Form Section */}
      <main>
 <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-2xl 2xl:max-w-3xl mx-auto mt-6 md:mt-8 lg:mt-12">
  <form
    onSubmit={handleSubmit}
    className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-3xl text-sm
               bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]
               shadow-xl border border-gray-300 backdrop-blur-md lg:h-50 md:h-44"
  >
    {inputTag.map((item, i) => (
      <input
        key={i}
        name={item.name}
        type="text"
        placeholder={item.placeholder}
        onChange={handleChange}
        className={`p-4 rounded-xl border border-gray-300 bg-[#f8fafc] text-gray-800 
                     placeholder-gray-500 shadow-sm ${item.bgGradient} h-10 lg:h-13 
                     focus:bg-white focus:border-indigo-400 transition duration-200`}
      />
    ))}

    <button
      type="submit"
      className="md:col-span-2 py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 
                 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 
                 transition-transform duration-200 h-11 lg:h-13 text-md"
    >
      Show Result
    </button>
  </form>
</div>

        {/* About Section */}
        <About />
      </main>
    </div>
  );
};

export default Home;
