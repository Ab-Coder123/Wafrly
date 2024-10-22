import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PropTypes from "prop-types";
import { ProductDetailsPagedatapart1, ProductDetailsPagedatapart2, iconstars } from '../../Constant/index';
import img1 from "../../assets/Images/New folder/logo (1).png"
import Popproduct from '../../components/PoupularHotel/Pophotel';
import { Link } from "react-router-dom";

const ProductDetailsPagedatasMain = () => {
  return (
    <>
      <div>
      <section className=' font-cairo py-10 flex flex-col items-start justify-start gap-y-5'>
        <ProductDetailsPagedataspart1 ProductDetailsPagedataspart1Prop={ProductDetailsPagedatapart1} />
        <ProductDetailsPagedataspart2 ProductDetailsPagedataspart2Prop={ProductDetailsPagedatapart2} />
      </section>

      <Popproduct/>

      </div>
 

    </>
  );
}


// start section one 

const ProductDetailsPagedataspart1 = ({ ProductDetailsPagedataspart1Prop }) => {
  const productdetail1 = ProductDetailsPagedataspart1Prop.find((ProductDetailsProp1) => ProductDetailsProp1.id === '1');
  const productdetail2 = ProductDetailsPagedataspart1Prop.find((ProductDetailsProp1) => ProductDetailsProp1.id === '2');

  return (
    <>
      <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-20'>
        {productdetail1 &&
          (
            <div className=' col-span-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6  gap-x-4  '>

              {/* 2 */}
              <div className=' col-span-2 flex flex-col items-end justify-start gap-y-3'>
                <img src={productdetail1.img1} className='h-[130px]' alt="" />
                <img src={productdetail1.img1} className='h-[130px]' alt="" />
                <img src={productdetail1.img1} className='h-[130px]' alt="" />
              </div>

              {/* 1 */}
              <div className=' col-span-4'>
                <img src={productdetail1.img1} className='w-[150%]' alt="" />
              </div>
            </div>
          )
        }

        {productdetail2 &&
          (
            <div className=' flex flex-col items-start justify-start gap-y-3 col-span-5'>
              {/* div 1 */}
              <div className=''>
                <div className='flex flex-col items-start gap-y-2'>
                  <h2 className='text-2xl font-bold text-black '>{productdetail2.head}</h2>

                  <div className=' flex justify-start items-end gap-4'>
                    <span className=' text-l text-gray-400 font-bold'>(150 تعليق)</span>
                    <img className='h-5' src={productdetail2.imgstar} alt='star-img' />
                    <span className='text-[#00FF66] '>متاح في المخزن</span>
                  </div>
                  <h2 className='text-bold text-2xl text-black pb-4'>{productdetail2.spansalary}</h2>
                  <p className=' text-gray-600 w-[500px]'>{productdetail2.praph}</p>
                </div>
              </div>
              {/* div 2 */}
              <div className='w-full h-0.5 bg-gray-300'></div>
              {/* div 3 */}
              <div className=''>
                <div className='flex items-start space-y-4 flex-col '>
                  {/* one div */}
                  <div className='flex items-start justify-center gap-5'>
                    <h2 className=' font-bold text-black text-xl'>{productdetail2.spancolor}</h2>
                    {/* div toggole */}
                    <div className="flex items-center gap-x-3">
                      {/* الدائرة الوردية */}
                      <input
                        type="radio"
                        name="option"
                        className="appearance-none h-6 w-6 bg-red-400 border-2 border-red-400 rounded-full checked:bg-red-400 focus:outline-none"
                      />
                      {/* الدائرة الزرقاء مع الحدود */}
                      <input
                        type="radio"
                        name="option"
                        className="appearance-none h-6 w-6 bg-blue-400  rounded-full checked:bg-blue-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* two div */}
                  <div className='flex items-start justify-center gap-5'>
                    <SizeSelector />
                  </div>

                  {/* div 3 */}
                  <div className='flex items-start justify-center gap-5'>
                    <ProductControls />
                  </div>

                  {/* div 4 */}

                  <div className='flex flex-col items-start gap-y-6 border w-full p-2 border-1 border-black'>
                    <div className='flex items-start gap-3'>
                      <img src={productdetail2.card1img} alt="" />
                      <div className='flex flex-col items-start gap-y-2 '>
                        <h2 className=''>{productdetail2.card1head}</h2>
                        <p className=''>{productdetail2.card1praph}</p>
                      </div>
                    </div>
                    <div className='w-full h-0.5 bg-gray-300'></div>

                    <div className='flex items-start gap-3'>
                      <img src={productdetail2.card2img} alt="" />
                      <div className='flex flex-col items-start gap-y-2 '>
                        <h2 className=''>{productdetail2.card2head}</h2>
                        <p className=''>{productdetail2.card1praph}</p>
                      </div>
                    </div>

                  </div>

                  {/* end */}
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState('M'); // الحجم الافتراضي المختار

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="font-bold text-xl pl-3">مقاس:</span>
      {sizes.map((size) => (
        <button
          key={size}
          className={`border-2 rounded-lg px-3 py-1 
          ${selectedSize === size ? 'bg-red-500 text-white' : 'text-black'} 
          hover:bg-red-200`}
          onClick={() => handleSizeSelect(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

const ProductControls = () => {
  const [quantity, setQuantity] = useState(0); // الكمية الافتراضية

  const increaseQuantity = () => {
    setQuantity((prevquantity) => prevquantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevquantity) => prevquantity - 1)

    }
  }

  return (
    <div className="flex items-center gap-6">

      {/* اختيار الكمية */}
      <div className="flex items-center border-2 border-gray-300 rounded-lg">
        <button
          className="px-4 py-2 text-xl font-bold"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <span className="px-4 py-2 text-xl font-bold">{quantity}</span>
        <button
          className="px-4 py-2 text-xl font-bold"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>

      {/* زر اشترِ الآن */}
      <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">
        اشترِ الآن
      </button>

      {/* زر القلب */}
      <button className="border-2 border-black p-2 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 116.364 6.364l-7.682 7.682a.75.75 0 01-1.06 0l-7.682-7.682a4.5 4.5 0 010-6.364z"
          />
        </svg>
      </button>

    </div>
  );
};

// end section one 


// start section 2

const ProductDetailsPagedataspart2 = ({ ProductDetailsPagedataspart2Prop }) => {
  const productdetail1 = ProductDetailsPagedataspart2Prop.find((ProductDetailsProp2) => ProductDetailsProp2.id === '1');
  const productdetail2 = ProductDetailsPagedataspart2Prop.find((ProductDetailsProp2) => ProductDetailsProp2.id === '2');
  return (
    <div className=' py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-20'>
      {/* right div */}
      <div className='col-span-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 mr-24 gap-x-4 gap-y-10'>
        {/* div 1 */}
        {productdetail1 &&
          (
            <div className='flex flex-col items-start justify-start col-span-5 gap-y-3'>
              <div className="flex flex-row justify-start gap-4">
                <img src={img1} className="h-10" alt="" />
                <h2 className="mb-8 text-4xl font-bold text-gray-800">
                  {productdetail1.specificationsTitle}
                </h2>
              </div>
              <div className=' text-gray-500'>
                <p>{productdetail1.specificationsprah}</p>
              </div>
            </div>
          )
        }

        {/* div 2 */}
        {productdetail1 &&
          (
            <div className='flex flex-col items-start justify-start col-span-5 gap-y-3'>
              <div className="flex flex-row justify-start gap-4">
                <img src={img1} className="h-10" alt="" />
                <h2 className="mb-8 text-4xl font-bold text-gray-800">
                  {productdetail1.detailsTitle}
                </h2>
              </div>
              <div className=' text-gray-500'>
                <p>{productdetail1.specificationsprah}</p>
              </div>
            </div>
          )
        }
        {/* div 3 */}
        {productdetail1 &&
          (
            <div className='flex flex-col items-start justify-start col-span-5 gap-y-3'>
              <div className="flex flex-row justify-start gap-4">
                <img src={img1} className="h-10" alt="" />
                <h2 className="mb-8 text-4xl font-bold text-gray-800">
                  {productdetail1.customerReviewsTitle}
                </h2>
              </div>
              <div className='flex flex-col mx-auto items-center justify-start gap-y-3'>
                <h3>0 تقييم</h3>
                <img src={productdetail1.iconstar6} alt="" />
              </div>
              <div>
                  <Iconstardata iconsProp={iconstars}/>
              </div>
            </div>
          )
        }
      </div>

      {/* left div */}



      <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 col-span-6 gap-20'>
        {productdetail2 &&
          (
            <div className='flex flex-col items-start justify-start col-span-6 gap-y-3'>
              <div className="flex flex-row justify-start gap-4 col-span-6 ">
                <img src={img1} className="h-10" alt="" />
                <h2 className="mb-8 text-4xl font-bold text-gray-800">
                  {productdetail2.sectionTitle2}
                </h2>
              </div>
              <div>
                <p>لن يتم نشر عنوان بريدك الإلكتروني. تم وضع علامة على الحقول المطلوبة</p>
              </div>

              {/* div 2 */}
              <div className='flex items-center justify-between gap-52 items-start gap-y-4'>
                {/* 1 */}
                <div className='flex flex-col justify-center gap-5'>
                  <h2>تقييمك</h2>
                  <h2>سرعة التسليم</h2>
                  <h2>قيمة المال</h2>
                </div>
                {/* 2 */}
                <div className='flex flex-col justify-end  gap-5'>
                  <img src={productdetail2.iconstar6} alt="" />
                  <img src={productdetail2.iconstar6} alt="" />
                  <img src={productdetail2.iconstar6} className='' alt="" />
                </div>
              </div>

              {/* div 3 */}
              <div className='col-span-6 flex flex-col items-start gap-y-10'>
                <div className='flex flex-col items-start gap-y-2'>
                  <h2 className='text-xl font-bold to-black'>{productdetail2.reviewsTitle}</h2>
                  <textarea name="" id="" className=' border border-1 w-[400px] h-80 p-5 border-gray-400'></textarea>
                </div>
                <div className='flex flex-col items-start gap-y-2'>
                  <h2 className='text-xl font-bold to-black'>{productdetail2.nameField}</h2>
                  <label htmlFor="name"></label>
                  <input type="text" name="" id="name" className='border border-1 border-gray-400 w-[400px] p-2' placeholder='اسمك' />
                </div>

                <div className='flex flex-col items-start gap-y-2'>
                  <h2 className='text-xl font-bold to-black'>{productdetail2.emailField}</h2>
                  <label htmlFor="name"></label>
                  <input type='email' name="" id="name" className='border border-1 border-gray-400 w-[400px] p-2' placeholder='اسمك' />
                </div>

                <div className='flex flex-col items-start gap-y-3'>
                  <div className='flex items-start justify-center  gap-x-2'>
                    <input type="checkbox" name="" className='mt-2' id="" />
                    <p className='text-[#242424] w-[500px]'>{productdetail2.saveInfoText}</p>
                  </div>
                  <button className='bg-[#DB4444] py-2 px-4 text-white font-bold rounded-md '>{productdetail2.sendButton}</button>
                </div>
              </div>


            </div>
          )
        }

      </div>
    </div>
  );
}

// end section 2


const Iconstardata = ({ iconsProp }) => {
  return (
    <>
      {
        iconsProp.map((iconsprop) => {
          return (
                  <div className='flex items-center justify-start space-y-5 gap-4' key={iconsprop.id}>
                    <div className='mt-6'> <img src={iconsprop.iconstar} alt="" /> </div>
                    <div className='w-80 h-2 bg-gray-300 rounded-lg'></div>
                  </div>
          )
        })
      }
    </>
  );
}










ProductDetailsPagedataspart1.propTypes = {
  ProductDetailsPagedataspart1Prop: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      head: PropTypes.string.isRequired,
      imgstar: PropTypes.string,
      spansalary: PropTypes.string,
      praph: PropTypes.string,
      spancolor: PropTypes.string,
      button: PropTypes.string,
      imgheart: PropTypes.string,
      card1img: PropTypes.string,
      card1head: PropTypes.string,
      card1praph: PropTypes.string,
      card2img: PropTypes.string,
      card2head: PropTypes.string,
      card2praph: PropTypes.string,
      img1: PropTypes.string,
      img2: PropTypes.string,
      img3: PropTypes.string,
      img4: PropTypes.string,
      img5: PropTypes.string,
    })
  ).isRequired,
};


Iconstardata.propTypes = {
  iconsProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      iconstar: PropTypes.string,

    })
  ).isRequired,
};



ProductDetailsPagedataspart2.propTypes = {
  ProductDetailsPagedataspart2Prop: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      sectionTitle1: PropTypes.string.isRequired,
      sectionTitle2: PropTypes.string.isRequired,
      reviewsTitle: PropTypes.string,
      nameField: PropTypes.string,
      emailField: PropTypes.string,
      reviewPlaceholder: PropTypes.string,
      saveInfoText: PropTypes.string,
      note: PropTypes.string,
      specificationsTitle: PropTypes.string,
      detailsTitle: PropTypes.string,
      customerReviewsTitle: PropTypes.string,
      noReviewsText: PropTypes.string,
      specificationsprah: PropTypes.string,

    })
  ).isRequired,
};


const OrderConfirmation = () => {

  return (
    <>
      <Navbar />
      <ProductDetailsPagedatasMain />
      <Footer />
    </>

  );
};

export default OrderConfirmation;
