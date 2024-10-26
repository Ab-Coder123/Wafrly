import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Payingdata } from '../Paying/Paying';
import { profiledata, SidePay } from '../../Constant/index';
import PropTypes from "prop-types";


const Profitratiodata = ({ ProfitratiodataProp }) => {
    const profiledata1 = ProfitratiodataProp.find((Profitratiodataprop) => Profitratiodataprop.id === '1')
    const profiledata2 = ProfitratiodataProp.find((Profitratiodataprop) => Profitratiodataprop.id === '2')


    // form effect 
    const [gender, setGender] = useState('ذكر');
    const [favoriteSection, setFavoriteSection] = useState('اليكترونات');

    const handleGenderChange = (value) => {
        setGender(value);
    };

    const handleSectionChange = (section) => {
        setFavoriteSection(section);
    };

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8'>
                {/* div 1 */}
                {
                    profiledata1 &&
                    (
                        <div className=' col-span-8 flex flex-col items-center justify-center'>
                            <div className=' relative'>
                                <img src={profiledata1.backgroundprofile} alt="" />
                            </div>
                            <div className='flex items-end absolute top-52'>
                                <img className='h-40' src={profiledata1.imgprofile} alt="" />
                                <div className='absolute '>
                                    <img src={profiledata1.changeimg} alt="" />

                                </div>
                            </div>
                        </div>

                    )
                }

                {/* div 2 */}
                {
                    profiledata2 &&
                    (

                        <div className="py-8 col-span-8 flex items-start gap-28 justify-start   ">

                            <div className=' col-span-5'>
                                {/* حقول الإدخال */}
                                <div className="mb-4">
                                    <label className="block mb-2 text-right">البريد الإلكتروني</label>
                                    <input
                                        type="email"
                                        className="w-full p-2 border bg-gray-200 rounded-xl"
                                        placeholder="ex@gmail.com"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-right">الهاتف </label>
                                    <div className="flex gap-4">

                                        <input
                                            type="tel"
                                            className="w-full p-2 border bg-gray-200 rounded-xl"
                                            placeholder="0000000"
                                        />

                                        <div className='flex items-center justify-center w-32 border rounded-l bg-gray-200 gap-2'>
                                            <span className="">+218</span>
                                            <img src={profiledata2.imgcountry} alt="" />
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <label className='block mb-2 text-right'>الاسم كاملا</label>
                                    <div>
                                        <input type="text" className="w-full p-2 border bg-gray-200 rounded-xl"

                                            name="" id="" placeholder='Name' />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-right">رقم هاتقف اضافي </label>
                                    <div className="flex gap-2">

                                        <input
                                            type="tel"
                                            className="w-full p-2 border bg-gray-200 rounded-xl"
                                            placeholder="0000000"
                                        />

                                        <div className='flex items-center justify-center w-32 border rounded-l bg-gray-200 gap-2'>
                                            <span className="">+218</span>
                                            <img src={profiledata2.imgcountry} alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col items-start col-span-6'>
                                {/* اختيار الجنس */}
                                <div className="mb-4">
                                    <label className="block mb-2 text-right">الجنس</label>
                                    <div className="flex justify-start gap-4  space-x-4">
                                        <div className={` cursor-pointer px-10 py-2 border-2 rounded flex items-center gap-3 ${gender === 'ذكر' ? 'border-red-500' : ''}`} onClick={() => handleGenderChange('ذكر')}
                                        >

                                            <button
                                            >
                                                ذكر
                                            </button>
                                            <img className='h-6 ' src={profiledata2.male} profiledata2 alt="" />
                                        </div>



                                        <div className={` cursor-pointer  px-10 py-2 border-2 rounded flex items-center gap-3 ${gender === 'انثي' ? 'border-red-500' : ''}`}
                                            onClick={() => handleGenderChange('انثي')}
                                        >
                                            <button
                                            >
                                                انثي
                                            </button>
                                            <img className='h-7 ' src={profiledata2.female} profiledata2 alt="" />
                                        </div>


                                    </div>
                                </div>

                                {/* الأقسام المفضلة */}
                                <div className="mb-4 py-5">
                                    <label className="block mb-2 text-right">الأقسام المفضلة</label>
                                    <div className="flex items-start justify-start gap-2">

                                        <div className={`p-2  border-2 rounded ${favoriteSection === 'اليكترونات' ? 'border-red-500' : ''}`}
                                            onClick={() => handleSectionChange('اليكترونات')}>
                                            <button>
                                                اليكترونات
                                            </button>
                                            <img src={profiledata2} alt="" />
                                        </div>


                                        <div className={`p-2 border-2 rounded ${favoriteSection === 'منتجات ترفيهيه' ? 'border-red-500' : ''}`}
                                            onClick={() => handleSectionChange('منتجات ترفيهيه')}>
                                            <button>
                                                منتجات ترفيهية
                                            </button>
                                            <img src={profiledata2} alt="" />
                                        </div>

                                        <div className={`p-2 border-2 rounded ${favoriteSection === 'الصحة والجمال' ? 'border-red-500' : ''}`}
                                            onClick={() => handleSectionChange('الصحة والجمال')}>
                                            <button>
                                                الصحة والجمال
                                            </button>
                                            <img src={profiledata2} alt="" />
                                        </div>

                                        <div
                                            className={`p-2 border-2 rounded ${favoriteSection === 'ملابس' ? 'border-red-500' : ''}`}
                                            onClick={() => handleSectionChange('ملابس')}>
                                            <button >
                                                ملابس
                                            </button>
                                        </div>
                                    </div>
                                </div>



                                {/* زر حفظ التعديلات */}
                                <div className="mt-6 text-center">
                                    <button className="px-14 py-3 bg-red-500 text-white rounded">حفظ التعديلات</button>
                                </div>
                            </div>


                        </div>
                    )
                }
            </div>
        </>
    );
}


Profitratiodata.propTypes = {
    ProfitratiodataProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            backgroundprofile: PropTypes.string.isRequired,
            imgprofile: PropTypes.string.isRequired,
            changeimg: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            phone2: PropTypes.string.isRequired,
            imgcountry: PropTypes.string.isRequired,
            male: PropTypes.string.isRequired,
            female: PropTypes.string.isRequired,

        })
    ).isRequired,
};


Payingdata.propTypes = {
    PayingdataProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            head: PropTypes.string.isRequired,
        })
    ).isRequired,
};




const Profitratio = () => {
    return (
        <div className='font-cairo'>
            <Navbar />
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 px-24 py-10'>
                <div className=' col-span-3'>
                    <Payingdata PayingdataProp={SidePay} />
                </div>
                <div className=' col-span-8'>
                    <Profitratiodata ProfitratiodataProp={profiledata} />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Profitratio;
