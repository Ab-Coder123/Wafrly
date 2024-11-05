import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5vdgbo6', 'template_urga7qm', form.current, '21LtOH1B6Mjl0MrRg')
            .then((result) => {
                console.log(result.text);
                alert("تم إرسال الرسالة بنجاح!");
            }, (error) => {
                console.log(error.text);
                alert("حدث خطأ أثناء إرسال الرسالة.");
            });
    };

    return (
        <>
            <Navbar />
            <div className=" overflow-hidden font-cairo grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 py-12 my-12 gap-20 px-5 md:px-24 bg-white ">
                {/* قسم معلومات الاتصال */}
                <div className=" col-span-7 lg:col-span-5 space-y-10">
                    <div className="flex items-start gap-5 space-x-2">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-[#DB4444] text-xl" />
                        <div>
                            <h3 className="text-2xl pb-4 font-semibold">اتصل بنا</h3>
                            <p className='font-bold text-xl'>نحن متواجدون 24/7 أيام في الأسبوع.</p>
                            <p>الهاتف: +8806111122222</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5 space-x-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-[#DB4444] text-xl" />
                        <div>
                            <h3 className="text-2xl pb-4 font-semibold">اكتب لنا</h3>
                            <p className='  font-bold text-xl w-[300px] lg:w-full '>املأ النموذج الخاص بنا وسنقوم بالرد خلال 24 ساعة</p>
                            <p className='text-l'>البريد الإلكتروني: customer@coname.com</p>
                            <p className='text-l '>رسائل البريد الإلكتروني: support@coname.com</p>
                        </div>
                    </div>
                </div>

                {/* قسم النموذج */}
                <div className=" col-span-5  md:col-span-7  md:w-fill mb-6 md:mb-0">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col md:flex-row col-span-7 gap-4">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="اسمك *"
                                className="border border-gray-300 p-2 rounded-md focus:outline-none"
                            />
                            <input
                                type="email"
                                name="user_email"
                                placeholder="البريد الإلكتروني الخاص بك *"
                                className="border border-gray-300 p-2 rounded-md focus:outline-none"
                            />
                            <input
                                type="text"
                                name="user_phone"
                                placeholder="هاتفك *"
                                className="border border-gray-300 p-2 rounded-md focus:outline-none"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="اكتب رسالتك."
                            className="border border-gray-300 p-2 rounded-md w-full h-48 col-span-7 mt-4 focus:outline-none"
                        />
                        <button type="submit" className="mt-4 bg-[#DB4444] text-white p-2 rounded-md px-10  md:w-auto">
                            إرسال
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactForm;
