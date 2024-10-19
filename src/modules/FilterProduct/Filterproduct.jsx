import React, { useState } from "react";
import { Populars } from '../../components/Products/Product';
import { Products } from '../../Constant';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="hidden" // إخفاء الشيك بوكس الافتراضي
      />
      <div
        className={`w-6 h-6 flex items-center justify-center border-2 border-[#F6DBDB] bg-[#F6DBDB] rounded-lg transition-all duration-2 ${isChecked ? "bg-[#952323] border-[#952323]" : "bg-white"
          }`}
      >
        {isChecked && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="  24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
  );
};


const Categories = () => (
  <div className='py-5'>
    <h2 className='font-bold text-black'>الفئات</h2>
    <ul className=' pt-3 cursor-pointer flex flex-col gap-y-3'>
      <div className='flex gap-4 '>
        <CustomCheckbox />
        <li> كل الفئات</li>
      </div>

      <div className='flex gap-4 '>
        <CustomCheckbox />
        <li> اسم الفئة</li>
      </div>


      <div className='flex gap-4 '>
        <CustomCheckbox />
        <li> اسم الفئة</li>
      </div>



      <div className='flex gap-4 '>
        <CustomCheckbox />
        <li> اسم الفئة</li>
      </div>



      <div className='flex gap-4 '>
        <CustomCheckbox />
        <li> اسم الفئة</li>
      </div>



      <div className='flex gap-4 '>
        <CustomCheckbox />
        <li> اسم الفئة</li>
      </div>



      <div className='flex gap-4 '>
        <CustomCheckbox />
        <li> اسم الفئة</li>
      </div>

    </ul>
  </div>
);

const Availability = () => (
  
  <>
   <div className='py-5'>
    <h2 className='font-bold text-black'>المتاح</h2>
    <ul className=' pt-3 cursor-pointer flex flex-col gap-y-3'>
      <div className='flex gap-4 '>
        <CustomCheckbox />
        <li> تم تحديده</li>
        </div>

      <div className='flex gap-4 '>
        <CustomCheckbox />
        <li > في المخزون</li>
        </div>


      <div className='flex gap-4 '>
        <CustomCheckbox />
        <li> غير متاح في المخزون</li>
        </div>




    </ul>
  </div>
  </>
);

const Brands = () => (

  <>
  <div className='py-5'>
   <h2 className='font-bold text-black'>العلامات التجارية</h2>
   <ul className=' pt-3 cursor-pointer flex flex-col gap-y-3'>
     <div className='flex gap-4 '>
       <CustomCheckbox />
       <li>اسم العلامة التجارية</li>
       </div>

     <div className='flex gap-4 '>
       <CustomCheckbox />
       <li>اسم العلامة التجارية</li>
       </div>


     <div className='flex gap-4 '>
       <CustomCheckbox />
       <li>اسم العلامة التجارية</li>

       </div>


       <div className='flex gap-4 '>
       <CustomCheckbox />
       <li>اسم العلامة التجارية</li>

       </div>    <div className='flex gap-4 '>
       <CustomCheckbox />
       <li>اسم العلامة التجارية</li>

       </div>    <div className='flex gap-4 '>
       <CustomCheckbox />
       <li>اسم العلامة التجارية</li>

       </div>    <div className='flex gap-4 '>
       <CustomCheckbox />
       <li>اسم العلامة التجارية</li>

       </div>


   </ul>
 </div>
 </>

);



const Filterproduct = () => {
  return (
    <>
      <Navbar />
      <section className='py-12'>
        <div className='flex flex-col lg:flex-row justify-center gap-10'>


          <div className='flex flex-col items-start '>
            <Categories />
            <div className="pr-3 bg-gray-4 w-full h-1"></div>
            <Availability />
            <div className="bg-gray-4 w-full pr-3 h-1"></div>
            <Brands />
          </div>

          <div className='w-[80%]'>
            <Populars popularproduct={Products} />
            <Populars popularproduct={Products} />
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default Filterproduct;
