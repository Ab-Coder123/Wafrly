import React from 'react';
import { NewsProducts } from '../../Constant/index';
import PropTypes from "prop-types";

const NewsProductdata = ({ NewsProp }) => {
    const product1 = NewsProp.find((newsprop) => newsprop.id === '1');
    const product2 = NewsProp.find((newsprop) => newsprop.id === '2');
    const product3 = NewsProp.find((newsprop) => newsprop.id === '3');
    const product4 = NewsProp.find((newsprop) => newsprop.id === '4');

    return (
        <>
            <div className='flex justify-center items-start gap-5 mx-auto'>
                {/* div للعنصر الذي يحمل id = 1 */}
                {product1 && (
                    <div className='w-96 rounded-md bg-black text-white overflow-hidden'>
                        <div className='z-10'>
                            <img className=' relative top-24 left-1 h-96 object-cover ' src={product1.img} alt="" />
                        </div>
                        <div className=' flex flex-col items-start right-3 bottom-10 relative z-30'>
                            <h2 className='text-2xl font-bold'>{product1.head}</h2>
                            <p className='text-sm text-gray-400'>{product1.prah}</p>
                            <button className='bg-[#C54442] rounded-sm p-1 mt-3'>{product1.btn}</button>
                        </div>
                    </div>
                )}

                {/* section 2 */}
                <div className='flex flex-col  items-center'>
                    {/* div للعنصر الذي يحمل id = 2 */}
                    {product2 && (
                        <div className='rounded-md text-white overflow-hidden'>
                            <div className='z-10'>
                                <img className='relative left-1 h-64 object-cover' src={product2.img} alt="" />
                                <div className='flex flex-col items-start right-3 bottom-32 relative z-30'>
                                    <h2 className='text-2xl font-bold'>{product2.head}</h2>
                                    <p className='text-sm text-gray-400'>{product2.prah}</p>
                                    <button className='bg-[#C54442] rounded-sm p-1 mt-3'>{product2.btn}</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* section 3 */}
                    <div className='flex items-start justify-start relative bottom-20'>
                        {/* div للعنصر الذي يحمل id = 3 */}
                        {product3 && (
                            <div className='rounded-md text-white overflow-hidden'>
                                <div className='z-10'>
                                    <img className='relative left-1 h-52 object-cover' src={product3.img} alt="" />
                                    <div className='flex flex-col items-start right-3 bottom-32 relative z-30'>
                                        <h2 className='text-2xl font-bold'>{product3.head}</h2>
                                        <p className='text-sm text-gray-400'>{product3.prah}</p>
                                        <button className='bg-[#C54442] rounded-sm p-1 mt-3'>{product3.btn}</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* div للعنصر الذي يحمل id = 4 */}
                        {product4 && (
                            <div className='rounded-md relative text-white overflow-hidden'>
                                <div className='z-10'>
                                    <img className='relative left-1 h-52 object-cover' src={product4.img} alt="" />
                                    <div className='flex flex-col items-start right-3 bottom-32 relative z-30'>
                                        <h2 className='text-2xl font-bold'>{product4.head}</h2>
                                        <p className='text-sm text-gray-400'>{product4.prah}</p>
                                        <button className='bg-[#C54442] rounded-sm p-1 mt-3'>{product4.btn}</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}

NewsProductdata.propTypes = {
    NewsProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            head: PropTypes.string.isRequired,
            prah: PropTypes.string.isRequired,
            btn: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const NewsProduct = () => {
    return (
        <>
            <section className=''>
                <NewsProductdata NewsProp={NewsProducts} />
            </section>
        </>
    );
}

export default NewsProduct;
