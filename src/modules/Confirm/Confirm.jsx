import React , {useEffect} from 'react';
import PropTypes from "prop-types";
import { } from '../../Constant';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Confirmrequest } from '../../Constant/index';
import axios from 'axios';

const ConfirmOrder = ({ data }) => {
    // useEffect( async () => {
         
    //     try {
    //       const response = await axios.get('https://Admin.afirly.net/api/nationality');
    //       console.log(response); // Handle the response data (array of nationalities)
    //   } catch (error) {
    //       console.error('Error fetching nationalities:', error.response || error.message);
    //   }
     
    //    }, []);
    return (
        <div className="container mx-auto p-6 py-12">
              
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              


                {/* Right Side: Customer Information Form */}
                <div className="col-span-6  p-6 rounded-md shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">تفاصيل الشحن</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="الاسم الأول" className=" bg-gray-200 w-full p-2 border rounded-md" />
                        <input type="text" placeholder="الاسم الأخير" className=" bg-gray-200 w-full p-2 border rounded-md" />
                        <input type="text" placeholder="عنوان الشارع" className=" bg-gray-200 w-full p-2 border rounded-md" />
                        <input type="text" placeholder="المدينة" className="bg-gray-200 w-full p-2 border rounded-md" />
                        <input type="text" placeholder="رمز البريد ZIP" className="bg-gray-200 w-full p-2 border rounded-md" />
                        <input type="text" placeholder="رقم الهاتف" className="bg-gray-200  w-full p-2 border rounded-md" />
                        <button type="submit" className="w-fit px-5 bg-red-500 text-white py-2 rounded-md mt-4">تأكيد الشراء</button>
                    </form>
                </div>
                {/* Left Side: Product Details */}
                <div className="col-span-5 bg-white p-6 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">تاكيد الطلب</h2>
                    <div className="flex items-center gap-4">
                        <img src={data.img1} className="h-10" alt="Product Image" />
                        <h3 className="text-lg font-semibold">{data.title1}</h3>
                        <p className="text-gray-600">{data.price1}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <img src={data.img2} className="h-10" alt="Product Image" />
                        <h3 className="text-lg font-semibold">{data.title2}</h3>
                        <p className="text-gray-600">{data.price2}</p>
                    </div>

                    <div className="border-t mt-6 pt-4">

                        <div className='flex  items-center my-3 justify-between'>
                            <p className="text-lg font-semibold">
                                {data.subtotalLabel}
                            </p>
                            <span className="font-bold">{data.subtotal}</span>
                        </div>


                        <div className='flex  items-center border-t  py-3 justify-between'>
                            <p className="text-lg">
                                {data.profitMarginLabel}
                            </p>
                            <span className=" ">{data.profitMargin}</span>
                        </div>



                        <div className='flex border-t items-center py-3  justify-between'>
                            <p className="text-lg ">
                                {data.shippingCostLabel}
                            </p>
                            <span className="bg-gray-200 px-7 float-left rounded-sm">{data.shippingCost}</span>
                        </div>

                        <div className='flex  items-center my-3 justify-between'>
                            <p className="text-2xl font-bold mt-4">
                                {data.totalLabel}
                            </p>
                            <span className=" font-bold ">{data.total}</span>
                        </div>


                    </div>

                    <button className="bg-red-500 text-white py-2 px-4 rounded-md mt-6">تأكيد الطلب</button>
                </div>
            </div>
        </div>
    );
};






const Confirm = () => {
    return (
        <>
            <Navbar />
            <section>
                <ConfirmOrder data={Confirmrequest[0]} />
            </section>
            <Footer />
        </>
    );
}

export default Confirm;
