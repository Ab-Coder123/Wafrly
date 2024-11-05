import React from 'react';
import PropTypes from "prop-types";
import { shoppingcartdata2, shoppingcartdata1 } from '../../Constant';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Shopping = ({ ShoppingProps }) => {
    return (
        <>
            {ShoppingProps.map((Shoppingprops) => (
                <div className='px-4 sm:px-24 overflow-x-auto'>
                    <p className='my-5'>الرئيسية / عربة التسوق</p>
                    <table className="sm:w-full w-[170%] bg-white text-black shadow-md rounded-md">
                        <thead>
                            <tr className="text-right font-semibold text-x sm:text-base p-4 sm:p-10 shadow-md">
                                <th className="p-2 sm:p-4">{Shoppingprops.head1}</th>
                                <th className="p-2 sm:p-4">{Shoppingprops.head2}</th>
                                <th className="p-2 sm:p-4">{Shoppingprops.head3}</th>
                                <th className="p-2 sm:p-4">{Shoppingprops.head4}</th>
                                <th className="p-2 sm:p-4">{Shoppingprops.head5}</th>
                                <th className="p-2 sm:p-4">{Shoppingprops.head6}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Shopdata ShoppingdataProps={shoppingcartdata2} />
                        </tbody>
                    </table>
                    <Link to='/modules/FilterProduct/Filterproduct'>
                        <button className='my-10 p-2 border border-sm rounded-sm border-gray-400'>
                            العودة الى المتجر
                        </button>
                    </Link>
                    <div className='flex justify-end'>
                        <CartSummary />
                    </div>
                </div>
            ))}
        </>
    );
};



const Shopdata = ({ ShoppingdataProps }) => {
    return (
        <>
            {ShoppingdataProps.map((Shoppingprops) => (
                <tr className="text-right font-semibold shadow-md text-x sm:text-base p-4 sm:p-5 my-4" key={Shoppingprops.id}>
                    <td className="py-4 sm:py-10 px-3 flex items-center gap-4">
                        <img src={Shoppingprops.img} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
                        <p>{Shoppingprops.title}</p>
                    </td>
                    <td className="p-2 sm:p-4">{Shoppingprops.price}</td>
                    <td className="p-2 sm:p-4">{Shoppingprops.profits}</td>
                    <td className="p-2 sm:p-4">
                        <input type="number" value={1} className="w-12 sm:w-16 border rounded-md text-center" />
                    </td>
                    <td className="p-2 sm:p-4">{Shoppingprops.calc}</td>
                </tr>

            ))}
        </>
    );
};


const CartSummary = () => {
    return (
        <div className="w-full sm:w-1/3 p-4 bg-white shadow-lg border border-gray-400 shadow-gray-400  rounded-md text-right  mt-5">
            <h2 className="font-semibold text-lg mb-4">إجمالي العربة</h2>
            <div className="flex justify-between border-b py-2">
                <span>المجموع الفرعي:</span>
                <span>$1750</span>
            </div>
            <div className="flex justify-between border-b py-2">
                <span>نسبة الربح:</span>
                <span>$1750</span>
            </div>
            <div className="flex justify-between border-b py-2">
                <span>المجموع:</span>
                <span>$1750</span>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded mt-4">
                طلب
            </button>
        </div>
    );
};



Shopping.propTypes = {
    ShoppingProps: PropTypes.arrayOf(
        PropTypes.shape({
            head1: PropTypes.string.isRequired,
            head2: PropTypes.string.isRequired,
            head3: PropTypes.string.isRequired,
            head4: PropTypes.string.isRequired,
            head5: PropTypes.string.isRequired,
            head6: PropTypes.string.isRequired,
        })
    ).isRequired,
};

Shopdata.propTypes = {
    ShoppingdataProps: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            profits: PropTypes.string.isRequired,
            calc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const Shoppingcart = () => {
    return (
        <>
            <Navbar />
            <section className='font-cairo py-12'>
                <Shopping ShoppingProps={shoppingcartdata1} />
            </section>
            <Footer />
        </>
    );
};

export default Shoppingcart;
