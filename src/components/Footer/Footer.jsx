import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../assets/Images/Logo.png";

const Footer = () => {
  return (
    <footer className=" font-cairo bg-gray-100 dark:bg-gray-900 dark:text-white text-[#23282D] py-8 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img src={img1} alt="Egy Guide Logo" className=" mb-4" />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              حقوق الطبع والنشر © 2023 افرلي.
              جميع الحقوق محفوظة
            </p>
            <p className="text-xs text-gray-500 mt-2">Copyright by <strong>Wafrly</strong>© 2024</p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4"><strong>تابعنا</strong></h4>
            <ul className="space-y-2">
              <li><Link to="#" className="flex gap-3 items-center text-gray-600 dark:text-gray-300 text-sm"><FontAwesomeIcon icon={faFacebookF} className="mr-2" /><strong>Facebook</strong></Link></li>
              <li><Link to="#" className="flex gap-3 items-center text-gray-600 dark:text-gray-300 text-sm"><FontAwesomeIcon icon={faTwitter} className="mr-2" /><strong>Twitter</strong></Link></li>
              <li><Link to="#" className="flex gap-3 items-center text-gray-600 dark:text-gray-300 text-sm"><FontAwesomeIcon icon={faGoogle} className="mr-2" /><strong>Google</strong></Link></li>
              <li><Link to="#" className="flex gap-3 items-center text-gray-600 dark:text-gray-300 text-sm"><FontAwesomeIcon icon={faInstagram} className="mr-2" /><strong>Instagram</strong></Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4"><strong>روابط هامة</strong></h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-300 text-sm"><strong>رابط هام</strong></Link></li>
              <li><Link to="" className="text-gray-600 dark:text-gray-300 text-sm"><strong>رابط هام</strong></Link></li>
              <li><Link to="#" className="text-gray-600 dark:text-gray-300 text-sm"><strong>رابط هام</strong></Link></li>
              <li><Link to="/modules/ContactUs/ContactUs" className="text-gray-600 dark:text-gray-300 text-sm"><strong>رابط هام</strong></Link></li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4"><strong>Contact Us</strong></h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />283 St. Glen Wood Street</li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />+201069966233 / 023649482</li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Wafrly@gmail.com</li>
            </ul>
          </div>
          {/* App Download */}
          <div>
            <h4 className="text-lg font-semibold mb-4"><strong>Download App</strong></h4>
            <div className="flex flex-col space-y-4">


              <Link to="#" className="flex items-center justify-start gap-3 w-36 bg-black p-2 rounded-md" >
                <strong className="text-white text-left text-xs">Get it on <br /> Google Play</strong>
                <FontAwesomeIcon icon={faGooglePlay} className="mr-2 text-3xl text-white" />
              </Link>


              <Link to="#" className="flex items-center justify-start gap-3 w-36 bg-black p-2 rounded-md">
                <strong className="text-white text-left text-xs">Get it on <br />App Store</strong>
                <FontAwesomeIcon icon={faApple} className="mr-2 text-3xl text-white" />
              </Link>


            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
