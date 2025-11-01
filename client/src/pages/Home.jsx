
import {useState } from "react";
import About from '../components/About/About'
import { TypeAnimation } from "react-type-animation";
const Home = () => {

const [inputLink,setInputLink]=useState({
  userLink:"",
  competitorLink:""
})

  const inputTag = [
    {
      name:"userLink",
      placeholder: "Enter your YouTube channel link",
      bgGradient:
        "focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-200",
    },
    {
      name:"competitorLink",
      placeholder: "Enter competitor’s YouTube channel link",
      bgGradient:
        "focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-fuchsia-400 transition duration-200",
    },
  ];

const handleChange=(e)=>{
  const {name,value}=e.target

setInputLink((prev)=>({...prev,[name]:value}))

}

const handleSubmit=(e)=>{
e.preventDefault();
console.log(inputLink)
};


  return (
    <div className="min-h-screen ">
      <nav className="flex justify-start">
        <img src="/src/assets/logo.svg" alt="" />
      </nav>

<TypeAnimation
  sequence={[
    "AI-Powered Insights for Creators", 1000,
    "Create Smarter with Data", 1000,
    "Turn Analytics into Action", 1000,
    "Your YouTube Success Starts Here", 1000
  ]}
  wrapper="span"
  speed={50}
  className="flex justify-center  text-pink-500 font-semibold text-2xl sm:text-3xl md:text-4xl"
  repeat={Infinity}
/>

      <main>
        <div className="w-full max-w-2xl mx-auto mt-12">
          <form onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-3xl 
                   bg-gradient-to-br from-gray-100 via-white to-gray-100 
                   shadow-lg border border-gray-200"
          >
            {inputTag.map((item, i) => (
              <input
                name={item.name}
                key={i}
                type="text"
                placeholder={item.placeholder}
                onChange={handleChange}
                className={`p-4 rounded-xl border border-gray-300 bg-white/90 text-gray-800 
                 placeholder-gray-500 shadow-sm ${item.bgGradient}`}
              />
            ))}

            <button
              type="submit"
              className="md:col-span-2 py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 
                 transition-transform duration-200"
            >
              Show Result
            </button>
          </form>
        </div>

<About/>

      </main>

    </div>
  );
};

export default Home;
