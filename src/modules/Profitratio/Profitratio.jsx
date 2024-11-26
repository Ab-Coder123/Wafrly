import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Payingdata } from '../Paying/Paying';
import { profiledata, SidePay } from '../../Constant/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountDetails } from "../../Statemanagment/Reducers/AccountSlice";
import { updateAccount } from "../../Statemanagment/Reducers/AccountSlice";  // تعديل المسار إذا لزم الأمر
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

import logo from '../../assets/Images/New folder/logo (1).png'



const Profitratiodata = ({ ProfitratiodataProp }) => {
    const profiledata1 = ProfitratiodataProp.find((item) => item.id === '1');
    const profiledata2 = ProfitratiodataProp.find((item) => item.id === '2');
    const dispatch = useDispatch();
    const { accountDetails, loading, error } = useSelector((state) => state.account);

    // تعريف المتغيرات في حالة
    const [email, setEmail] = useState(accountDetails?.data.email || '');
    const [phone, setPhone] = useState(accountDetails?.data.phone || '');
    const [name, setName] = useState(accountDetails?.data.name || '');
    const [additionalPhoneNumber, setAdditionalPhoneNumber] = useState(accountDetails?.data.additionalPhoneNumber || '');
    const [gender, setGender] = useState(accountDetails?.data.gender || ''); // هنا تم إضافة gender

    const [favoriteSection, setFavoriteSection] = useState("اليكترونات");

    useEffect(() => {
        if (!accountDetails) {
            dispatch(fetchAccountDetails());
        }
    }, [dispatch, accountDetails]);

    useEffect(() => {
        if (accountDetails) {
            console.log(accountDetails.data); // تحقق من أن التفاصيل قد وصلت
            // تعيين القيم بناءً على البيانات المحملة
            setEmail(accountDetails?.data.email || '');
            setPhone(accountDetails?.data.phone || '');
            setName(accountDetails?.data.name || '');
            setAdditionalPhoneNumber(accountDetails?.data.additionalPhoneNumber || '');
            setGender(accountDetails?.data.gender || '');
        }
    }, [accountDetails]);

    const handleGenderChange = (selectedGender) => {
        setGender(selectedGender);
    };

    const handleSectionChange = (section) => {
        setFavoriteSection(section);
    };

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const handleSave = () => {
        // التحقق من صحة البريد الإلكتروني
        if (!validateEmail(email)) {
            toast.error("عذرًا، البريد الإلكتروني غير صالح. يرجى المحاولة مرة أخرى!", {
                position: "top-center",
                autoClose: 3000, // يغلق تلقائيًا بعد 3 ثوانٍ
                hideProgressBar: true,
                icon: <img src={logo} alt="Logo" className="w-6 h-6" />,
            });
            return;
        }
    
        // التحقق من وجود الـ ID
        if (!accountDetails?.data?.id) {
            console.error("User ID is missing");
            toast.error("فشل في الحفظ. لا يوجد معرف للمستخدم.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
            });
            return;
        }
    
        // إنشاء الكائن المحدث
        const updatedData = {
            ...accountDetails.data,
            gender,
            favoriteSection,
            email,
            phone,
            additionalPhoneNumber,
            name,
        };
    
        console.log("Saving updated data:", updatedData);
    
        // إرسال البيانات المحدثة
        dispatch(updateAccount({ data: updatedData }))
            .then(() => {
                toast.success("تم الحفظ بنجاح!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    icon: <img src={logo} alt="Logo" className="w-6 h-6" />,
                });
            })
            .catch(() => {
                toast.error("فشل في الحفظ. يرجى المحاولة مرة أخرى.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    icon: <img src={logo} alt="Logo" className="w-6 h-6" />,
                });
            });
    };

    // دالة للتحقق من صحة البريد الإلكتروني

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error?.message || "حدث خطأ غير متوقع"}</p>;
    console.log(error?.message);
    if (!accountDetails || !accountDetails?.data) {
        return <p>لا توجد بيانات للمستخدم</p>;
    }

    return (
        <>  
              <ToastContainer />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-4 px-4 sm:px-8'>
                {/* div 1 */}
                {profiledata1 && (
                    <div className='col-span-8 flex flex-col items-center justify-center py-12 sm:py-5' key={accountDetails?.id}>
                        <div className='relative'>
                            <img src={profiledata1.backgroundprofile} alt="" className="w-full object-cover" />
                        </div>
                        <div className='flex items-end absolute top-[100%] sm:top-52'>
                            <img className='h-32 sm:h-40' src={accountDetails?.data.image || 'default-image.jpg'} alt="" />
                            <div className='absolute'>
                                <img src={profiledata1.changeimg} alt="" />
                            </div>
                        </div>
                    </div>
                )}
                {/* div 2 */}
                {profiledata2 && (
                    <div className="py-8 col-span-8 flex flex-col md:flex-row items-start gap-8 justify-start" key={accountDetails?.id}>
                        <div className='w-full md:w-1/2'>
                            {/* حقول الإدخال */}
                            <div className="mb-4">
                                <label className="block mb-2 text-right">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border bg-gray-200 rounded-xl"
                                    placeholder={accountDetails?.data.email || 'البريد الإلكتروني'}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-right">الهاتف</label>
                                <div className="flex gap-2">
                                    <input
                                        type="tel"
                                        className="w-full p-2 border bg-gray-200 rounded-xl"
                                        placeholder={accountDetails?.data.phone || 'رقم الهاتف'}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <div className='flex items-center justify-center w-20 sm:w-32 border rounded-l bg-gray-200 gap-2'>
                                        <span className="">+218</span>
                                        <img src={profiledata2.imgcountry} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className='block mb-2 text-right'>الاسم كاملا</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border bg-gray-200 rounded-xl"
                                    placeholder={accountDetails?.data.name || 'الاسم كاملا'}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-right">رقم هاتف إضافي</label>
                                <div className="flex gap-2">
                                    <input
                                        type="tel"
                                        className="w-full p-2 border bg-gray-200 rounded-xl"
                                        placeholder={accountDetails?.data.additionalPhoneNumber || 'لايوجد رقم هاتف اضافي '}
                                        value={additionalPhoneNumber}
                                        onChange={(e) => setAdditionalPhoneNumber(e.target.value)}
                                    />
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
                                    <div
                                        className={`cursor-pointer flex items-start justify-center gap-5 px-4 py-2 border-2 rounded ${gender === 'ذكر' ? 'border-red-500' : ''}`}
                                        onClick={() => handleGenderChange('ذكر')}
                                    >
                                        <h2>ذكر</h2>
                                        <img className="h-6 ml-2" src={profiledata2.male} alt="" />
                                    </div>
                                    <div
                                        className={`cursor-pointer flex items-start justify-center gap-5 px-4 py-2 border-2 rounded ${gender === 'انثي' ? 'border-red-500' : ''}`}
                                        onClick={() => handleGenderChange('انثي')}
                                    >
                                        <h2>انثي</h2>
                                        <img className="h-6 ml-2" src={profiledata2.female} alt="" />
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
                                {accountDetails && accountDetails.data.type === "customer" && (

                                    <button
                                        className="px-10 py-2 bg-red-500 text-white rounded"
                                        onClick={handleSave}
                                    >
                                        حفظ التعديلات
                                    </button>

                                )}
                                {accountDetails && accountDetails.data.type === "admin" && (
                                    <div className='flex justify-start items-start gap-7 w-[500px]'>
                                        <button
                                            className="px-10 py-2 bg-red-500 text-white rounded"
                                            onClick={handleSave}
                                        >
                                            حفظ التعديلات
                                        </button>
                                        <AdminOptions />
                                    </div>



                                )}

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};



export const AdminOptions = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        // تنفيذ الإجراء بناءً على الخيار المختار
        if (selectedValue === "logout") {
            console.log("تسجيل الخروج"); // هنا ممكن تضيف دالة تسجيل الخروج
        } else if (selectedValue === "deleteAccount") {
            console.log("حذف حساب شخص محدد");
        } else if (selectedValue === "manageDatabase") {
            console.log("إدارة قاعدة البيانات");
        }
    };

    return (
        <div className="flex items-center justify-center">
            <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="bg-gray-300 text-black px-4 py-2 rounded cursor-pointer  transition-colors"
            >
                <option value="" disabled>
                    اختر الإجراء
                </option>
                <option value="deleteAccount">🗑️ حذف حساب</option>
                <option value="manageDatabase">📂 إدارة قاعدة البيانات</option>
            </select>

            {/* روابط تنقل للمستخدم (اختياري لو عايز تضيفها مع المنطق) */}
            {selectedOption === "logout" && (
                <Link to="/Pages/UserSection/User" className="hidden">
                    {/* هذا الرابط مجرد placeholder في حال أردت تنقل */}
                </Link>
            )}
            {selectedOption === "deleteAccount" && (
                <Link to="/modules/DeletCustomer/DeletCustomer" className="hidden"></Link>
            )}
            {selectedOption === "manageDatabase" && (
                <Link to="/Pages/Tabledatabase/Table" className="hidden"></Link>
            )}
        </div>
    );
};




Profitratiodata.propTypes = {
    ProfitratiodataProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            backgroundprofile: PropTypes.string.isRequired,
            imgprofile: PropTypes.string.isRequired,
            changeimg: PropTypes.string.isRequired,
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