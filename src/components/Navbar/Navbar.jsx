import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faBell, faBars, faShare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import img1 from "../../assets/Images/New folder/logo.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
  const [isSearchOpen, setIsSearchOpen] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };


    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("blur-background", !isMenuOpen);
  };

  const toggleShare = () => {
    setIsShareOpen(!isShareOpen);
    document.body.classList.toggle("blur-background", !isShareOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  return (
    <>
      {/* الشريط العلوي للتخفيضات */}
      <section className="bg-[#C54442] py-2 overflow-hidden font-cairo">
        <div className="flex justify-center gap-3 text-white">
          <h2 className="font-bold"> %تخفيضات الصيف على جميع المنتجات والتوصيل السريع المجاني - خصم 50 </h2>
          <Link to='' className="font-bold text-lg underline">أطلب الآن</Link>
        </div>
      </section>

      {/* شريط التنقل */}
      <div className="overflow-hidden z-50 py-12 font-cairo">
        <section className={`fixed ${scrolling ? "top-0" : "top-9"} p-2 z-50 ${isSmallScreen ? "flex  justify-center items-center gap-x-14 " : "grid grid-cols-5 md:grid-cols-12 lg:grid-cols-12  px-24"} shadow-lg w-full transition duration-300 ${scrolling ? "bg-white shadow-lg" : "bg-white text-black"}`}>

          {/* الشعار وزر القائمة */}
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 col-span-2 gap-11 justify-between">
            <img src={img1} className="w-18 col-span-2 lg:col-span-4" alt="Logo" />
            <button onClick={toggleMenu} className="text-2xl lg:hidden focus:outline-none">
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>

          {/* القائمة */}
          <div className={`lg:flex items-center gap-20 col-span-5 ${isMenuOpen ? "block absolute flex bg-white  absolute bg-white shadow-lg p-5 top-24 left-1/2 transform -translate-x-1/2 z-5 w-[400px] " : "hidden"} lg:block`}>
            <Link to='/' className="block py-2 text-[#C54442] font-bold hover:text-[#99302e]">الرئيسية</Link>
            <Link to='/modules/Contact/Contact' className="block py-2 text-black font-bold hover:text-[#99302e]">تواصل معنا</Link>
            <Link to='/modules/WhoWe/WhoWe' className="block py-2 text-black font-bold hover:text-[#99302e]">من نحن</Link>
          </div>

          {/* شريط البحث وأيقونات الحساب */}
          <div className="flex items-center gap-10 col-span-5">

            {/* زر البحث للأجهزة الصغيرة فقط */}
            {isSmallScreen && (
              <button onClick={toggleSearch} className="text-2xl lg:hidden focus:outline-none">
                <FontAwesomeIcon icon={isSearchOpen ? faTimes : faSearch} />
              </button>
            )}

            {/* حقل الإدخال للبحث */}
            <input
              type="text"
              placeholder="عن ماذا تبحث"
              className={`p-1 border bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd3c3a] ${isSearchOpen || !isSmallScreen ? 'block' : 'hidden'
                } absolute lg:static bg-gray-200 shadow-lg p-2 top-24 left-1/2 transform -translate-x-1/2 lg:transform-none z-5 w-80`}
            />

            {/* زر المشاركة */}
            <button onClick={toggleShare} className="text-2xl lg:hidden focus:outline-none">
              <FontAwesomeIcon icon={isShareOpen ? faTimes : faShare} />
            </button>

            {/* أيقونات الحساب */}
            <ul className={`flex gap-10 text-lg text-gray-700 ${isShareOpen ? 'block absolute bg-white shadow-lg p-5 top-24 left-1/2 transform -translate-x-1/2 z-5' : 'hidden'} lg:flex`}>
              <li><Link to=''><FontAwesomeIcon icon={faHeart} /></Link></li>
              <li><Link to='/modules/Profitratio/Profitratio'><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
              <li><Link to='/modules/Notifications/Notifications'><FontAwesomeIcon icon={faBell} /></Link></li>
              <li><Link to='/modules/SignUp/Signup'><FontAwesomeIcon icon={faUser} /></Link></li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
