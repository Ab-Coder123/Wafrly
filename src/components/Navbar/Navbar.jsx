import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faBell, faPerson, faHeader } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import img1 from "../../assets/Images/New folder/logo.png";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";


const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* detail nav */}
      <section className="bg-[#C54442] py-2 font-cairo ">
        <div className="flex justify-center gap-3 text-white ">
          <div>
            <h2 className="font-bold"> %تخفيضات الصيف على جميع المنتجات والتوصيل السريع المجاني - خصم 50   </h2>
          </div>
          <div>
            <Link to='' className="font-bold text-lg underline ">أطلب الان</Link>
          </div>
        </div>
      </section>
      {/* nav */}
      <div className="z-50 py-12 font-cairo">
        <section
          className={`fixed ${scrolling ? "top-0" : "top-9"
            }  z-50 flex  font-cairo flex-row items-start justify-around  shadow shadow-md shadow-slate-300 w-full p-3 transition duration-300 ${scrolling ? "bg-white shadow-lg" : "bg-white text-black"
            }`}
        >


          <div className="flex flex-row justify-center gap-10">

            <div className="text-xl md:text-1xl font-bold text-[#C54442] z-30 relative ">
              <img src={img1} className=" w-18" />
            </div>
            <div className="hidden lg:flex flex flex-row  ">
              <button className="px-2 font-bold  text-[#C54442]   dark:hover:text-[#99302e] hover:text-[#99302e] hover:-translate-y-1 transition-all duration-300 md:px-4 py-1 md:py-2">
                <Link to='/'>الرئسيه</Link>
              </button>
              <button className="px-2 font-bold text-black   dark:hover:text-[#99302e] hover:text-[#99302e] hover:-translate-y-1 transition-all duration-300 md:px-4 py-1 md:py-2">
                <Link to="/modules/Contact/Contact">تواصل معنا</Link>
              </button>
              <button className="px-2 font-bold  text-black   dark:hover:text-[#99302e] hover:text-[#99302e] hover:-translate-y-1 transition-all duration-300 md:px-4 py-1 md:py-2">
                <Link to="/modules/WhoWe/WhoWe">من نحن</Link>
              </button>
            </div>
          </div>
          {/* section two */}
          <div className="flex flex-row items-center gap-3 ">
          
            <div className="flex justify-center mt-5 ">
              <input
                type="text"
                placeholder="عن ماذا تبحث"
                className="p-2 border bg-gray-200  rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd3c3a] w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <ul className="flex  gap-10 justify-center mt-4 text-lg text-gray-700">
                <li><Link to=''> <FontAwesomeIcon icon={faHeart} size="x" /> </Link></li>
                <li><Link to='/modules/Profitratio/Profitratio
                .
                  '> <FontAwesomeIcon icon={faShoppingCart} size="x" /></Link></li>
                <li><Link to=''> <FontAwesomeIcon icon={faBell} size="x" /></Link></li>
                <li><Link to='/modules/SignUp/Signup'> <FontAwesomeIcon icon={faUser} size="x" /></Link></li>

              </ul>
          </div>

        </section>
      </div>
    </>
  );
};

export default Navbar;
