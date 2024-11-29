import React, { useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComplains, postComplain } from '../../Statemanagment/Reducers/Compilain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function ContactForm() {
    const dispatch = useDispatch();

    // حالة التحقق من التوثيق
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // الحصول على بيانات الشكاوى من الـ state
    const { complains, loading, error } = useSelector((state) => state.complains);

    // جلب الشكاوى عند تحميل الصفحة
    useEffect(() => {
        dispatch(fetchComplains());
        
        // التحقق من إذا كان المستخدم مسجلاً
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [dispatch]);

    // إرسال شكوى جديدة
    const sendComplain = (e) => {
        e.preventDefault();

        // التحقق من أن المستخدم مسجل
        if (!isAuthenticated) {
            alert('يرجى تسجيل الدخول أولاً');
            return; // لا تتابع في إرسال الشكوى
        }

        const formData = new FormData(e.target);
        const complainData = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        dispatch(postComplain(complainData));
    };
    // الحصول على بيانات الشكاوى من الـ state

    // جلب الشكاوى عند تحميل الصفحة
    useEffect(() => {
        dispatch(fetchComplains());
    }, [dispatch]);


    return (
        <>
            <Navbar />
            <div className="overflow-hidden font-cairo grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 py-12 my-12 gap-20 px-5 md:px-24 bg-white">
                {/* قسم معلومات الاتصال */}
                <div className="col-span-7 lg:col-span-5 space-y-10">
                    <div className="flex items-start gap-5 space-x-2">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-[#DB4444] text-xl" />
                        <div>
                            <h3 className="text-2xl pb-4 font-semibold">اتصل بنا</h3>
                            <p className="font-bold text-xl">نحن متواجدون 24/7 أيام في الأسبوع.</p>
                            <p>الهاتف: +8806111122222</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5 space-x-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-[#DB4444] text-xl" />
                        <div>
                            <h3 className="text-2xl pb-4 font-semibold">اكتب لنا</h3>
                            <p className="font-bold text-xl w-[300px] lg:w-full">
                                املأ النموذج الخاص بنا وسنقوم بالرد خلال 24 ساعة
                            </p>
                            <p className="text-l">البريد الإلكتروني: customer@coname.com</p>
                            <p className="text-l">رسائل البريد الإلكتروني: support@coname.com</p>
                        </div>
                    </div>
                </div>

                {/* قسم النموذج */}
                <div className="col-span-5 md:col-span-7 md:w-fill mb-6 md:mb-0">
                    <form onSubmit={sendComplain}>
                        <div className="flex flex-col md:flex-row col-span-7 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="اسمك *"
                                className="border border-gray-300 p-2 rounded-md focus:outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="البريد الإلكتروني الخاص بك *"
                                className="border border-gray-300 p-2 rounded-md focus:outline-none"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="العنوان  *"
                                className="border border-gray-300 p-2 rounded-md focus:outline-none"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="اكتب رسالتك."
                            className="border border-gray-300 p-2 rounded-md w-full h-48 col-span-7 mt-4 focus:outline-none"
                            required
                        />
                        <button type="submit" className="mt-4 bg-[#DB4444] text-white p-2 rounded-md px-10 md:w-auto">
                            إرسال
                        </button>
                    </form>
                </div>
            </div>

            {/* عرض الشكاوى */}
            <div className="bg-gray-100 py-10">
                <h3 className="text-2xl font-semibold text-center mb-6">الشكاوى الواردة</h3>
                {loading && <p className="text-center">جارٍ التحميل...</p>}
                {error && <p className="text-center text-red-500">حدث خطأ: {error?.message || error}</p>
}
                <ul className="space-y-4"> {/* فتح عنصر <ul> هنا */}
                    {Object.entries(complains).length > 0 ? (
                        Object.entries(complains).map(([key, complain]) => (
                            <li key={key} className="border-b border-gray-300 p-4">
                                <p className="font-bold">{complain.user_name}</p>
                                <p>{complain.message}</p>
                            </li>
                        ))
                    ) : (
                        <p className="text-center">لا توجد شكاوى حالياً.</p>
                    )}
                </ul> {/* إغلاق <ul> هنا */}
            </div>


            <Footer />
        </>
    );
}

export default ContactForm;
