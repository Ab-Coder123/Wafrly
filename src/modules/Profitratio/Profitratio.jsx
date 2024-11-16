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
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-4 px-4 sm:px-8'>
                {/* div 1 */}
                {profiledata1 && (
                    <div className='col-span-8 flex flex-col items-center justify-center py-12 sm:py-5'>
                        <div className='relative'>
                            <img src={profiledata1.backgroundprofile} alt="" className="w-full object-cover"/>
                        </div>
                        <div className='flex items-end absolute top-[100%] sm:top-52'>
                            <img className='h-32 sm:h-40' src={profiledata1.imgprofile} alt="" />
                            <div className='absolute'>
                                <img src={profiledata1.changeimg} alt="" />
                            </div>
                        </div>
                    </div>
                )}
                {/* div 2 */}
                {profiledata2 && (
                    <div className="py-8 col-span-8 flex flex-col md:flex-row items-start gap-8 justify-start">
                        <div className='w-full md:w-1/2'>
                            {/* حقول الإدخال */}
                            <div className="mb-4">
                                <label className="block mb-2 text-right">البريد الإلكتروني</label>
                                <input type="email" className="w-full p-2 border bg-gray-200 rounded-xl" placeholder="ex@gmail.com" />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-right">الهاتف</label>
                                <div className="flex gap-2">
                                    <input type="tel" className="w-full p-2 border bg-gray-200 rounded-xl" placeholder="0000000" />
                                    <div className='flex items-center justify-center w-20 sm:w-32 border rounded-l bg-gray-200 gap-2'>
                                        <span className="">+218</span>
                                        <img src={profiledata2.imgcountry} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className='block mb-2 text-right'>الاسم كاملا</label>
                                <input type="text" className="w-full p-2 border bg-gray-200 rounded-xl" placeholder='Name' />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-right">رقم هاتف إضافي</label>
                                <div className="flex gap-2">
                                    <input type="tel" className="w-full p-2 border bg-gray-200 rounded-xl" placeholder="0000000" />
                                    <div className='flex items-center justify-center w-20 sm:w-32 border rounded-l bg-gray-200 gap-2'>
                                        <span className="">+218</span>
                                        <img src={profiledata2.imgcountry} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col items-start w-full md:w-1/2'>
                            {/* اختيار الجنس */}
                            <div className="mb-4">
                                <label className="block mb-2 text-right">الجنس</label>
                                <div className="flex gap-4">
                                    <div className={`cursor-pointer px-4 py-2 border-2 rounded ${gender === 'ذكر' ? 'border-red-500' : ''}`} onClick={() => handleGenderChange('ذكر')}>
                                        ذكر
                                        <img className='h-6 ml-2' src={profiledata2.male} alt="" />
                                    </div>
                                    <div className={`cursor-pointer px-4 py-2 border-2 rounded ${gender === 'انثي' ? 'border-red-500' : ''}`} onClick={() => handleGenderChange('انثي')}>
                                        انثي
                                        <img className='h-6 ml-2' src={profiledata2.female} alt="" />
                                    </div>
                                </div>
                            </div>

                            {/* الأقسام المفضلة */}
                            <div className="mb-4 py-5">
                                <label className="block mb-2 text-right">الأقسام المفضلة</label>
                                <div className="flex gap-2 flex-wrap">
                                    {['اليكترونات', 'منتجات ترفيهيه', 'الصحة والجمال', 'ملابس'].map(section => (
                                        <div key={section} className={`p-2 border-2 rounded ${favoriteSection === section ? 'border-red-500' : ''}`} onClick={() => handleSectionChange(section)}>
                                            {section}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* زر حفظ التعديلات */}
                            <div className="mt-6 text-center w-full">
                                <button className="px-10 py-2 bg-red-500 text-white rounded">حفظ التعديلات</button>
                            </div>
                        </div>
                    </div>
                )}
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
            <section className='  font-cairo overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 px-0 sm:px-24 py-10'>
                <div className='col-span-5 lg:col-span-3 mb-8 md:mb-0'>
                    <Payingdata PayingdataProp={SidePay} />
                </div>
                <div className='col-span-8'>
                    <Profitratiodata ProfitratiodataProp={profiledata} />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Profitratio;























