import React, { useState } from "react";
import axios from "axios";
import imglogo from '../../assets/Images/New folder/logo (1).png'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import img1 from '../../assets/Images/New folder/g27cq4-500x500 1.png'
import img2 from '../../assets/Images/New folder/g92-2-500x500 1.png'






const OrderSummary = () => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
            <table className="w-full text-right border-collapse">
                <tbody>
                    <tr className="">
                        <td className="py-2 px-2">
                            <img
                                src={img1} // استبدل الرابط بصورة المنتج
                                alt="Product 1"
                                className="inline-block w-12 h-12 object-cover"
                            />
                        </td>
                        <td className="py-2 text-gray-700">شاشات الكريستال السائل</td>
                        <td className="py-2 text-gray-700">$650</td>
                    </tr>
                    <tr className="">
                        <td className="py-2 px-2">
                            <img
                                src={img2} // استبدل الرابط بصورة المنتج
                                alt="Product 2"
                                className="inline-block w-12 h-12 object-cover"
                            />
                        </td>
                        <td className="py-2 text-gray-700">لوحة ألعاب H1</td>
                        <td className="py-2 text-gray-700">$1100</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="py-2 text-gray-600 font-bold">
                            المجموع الفرعي:
                        </td>
                        <td className="py-2 text-gray-700">$1750</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="py-2 text-gray-600 font-bold">
                            قيمة الشحن:
                        </td>
                        <td className="py-2">
                            <input
                                type="text"
                                placeholder="00.0$"
                                className="w-16 border border-gray-300 rounded p-1 text-center focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="py-2 text-gray-600 font-bold">
                            المجموع:
                        </td>
                        <td className="py-2 text-gray-700">$1750</td>
                    </tr>
                </tbody>
            </table>
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg mt-4">
                تأكيد الطلب
            </button>
        </div>
    );
};



const OrderConfirmation = () => {
    const [formData, setFormData] = useState({
        customer_name: "",
        email: "",
        address: "", // هذا يمكن استبداله بـ district إن أردت فصلها
        street: "",
        apartment: "",
        phone: "",
        extra_phone_number: "",
        termsAccepted: false,
        floor_no: "",
        postal_code: "",
        town_id: null, // أضف قيمة `town_id` الافتراضية
        status_shipping: "pending", // قيمة افتراضية يمكن تعديلها
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };



    const towns = [
        { id: 1, name: "Cairo" },
        { id: 2, name: "Giza" },
        { id: 3, name: "Alexandria" },
    ];

    const handleTownChange = (e) => {
        setFormData({ ...formData, town_id: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = "https://admin.afirly.net/api/orders";
        const token = localStorage.getItem("token");

        if (!token) {
            alert("التوكن غير موجود. الرجاء تسجيل الدخول.");
            return;
        }


        if (!formData.termsAccepted) {
            alert("الرجاء الموافقة على الشروط والأحكام.");
            return;
        }

        try {
            const response = await axios.post(
                apiUrl,
                {
                    customer_name: formData.customer_name,
                    town_id: formData.town_id,
                    district: formData.address, // إذا أردت فصل district يمكن تعديل الاسم
                    street: formData.street,
                    apartment: formData.apartment,
                    postal_code: formData.postal_code,
                    email: formData.email,
                    phone_number: formData.phone,
                    extra_phone_number: formData.extra_phone_number,
                    floor_no: formData.floor_no,
                    status_shipping: formData.status_shipping,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log({
                customer_name: formData.customer_name,
                town_id: formData.town_id,
                district: formData.address,
                street: formData.street,
                apartment: formData.apartment,
                postal_code: formData.postal_code,
                email: formData.email,
                phone_number: formData.phone,
                extra_phone_number: formData.extra_phone_number,
                floor_no: formData.floor_no,
                status_shipping: formData.status_shipping,
              });
              
            console.log("Response:", response.data);
            alert("تم إرسال الطلب بنجاح!");
        } catch (error) {
            console.log("Error:", error.response?.data || error.message);
            alert("حدث خطأ أثناء إرسال الطلب.");
        }
    };


    return (
        <>
            <Navbar />

            <div className="flex flex-col px-6 lg:px-20 gap-y-2 py-12">

                <div className="col-span-8 flex flex-row justify-start gap-4  lg:py-3">
                    <img src={imglogo} className="h-10" alt="Logo" />
                    <h2 className="mb-12 text-4xl font-bold text-gray-800">
                        تاكيد الطلب
                    </h2>
                </div>

                {/* form */}
                <div className="flex flex-col md:flex-row justify-between items-start p-6">
                    {/* القسم الأيمن */}
                    <div className="w-full md:w-1/2 bg-white p-4 shadow-md rounded-lg mt-6 md:mt-0 md:ml-6">
                        <form className="space-y-4" onSubmit={handleSubmit}>


                            <div>
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="customer_name">
                                    الاسم الأول:
                                </label>
                                <input
                                    type="text"
                                    id="customer_name"
                                    name="customer_name"
                                    value={formData.customer_name}
                                    onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                                    البريد الإلكتروني:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
                                    رقم الهاتف:
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="customer_name">اختر المدينة:</label>
                                <select value={formData.town_id} className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    onChange={handleTownChange}>
                                    <option value="" disabled>
                                        اختر المدينة
                                    </option>
                                    {towns.map((town) => (
                                        <option key={town.id} value={town.id}>
                                            {town.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
                                    رقم الهاتف الإضافي:                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.extra_phone_number}
                                    onChange={(e) => setFormData({ ...formData, extra_phone_number: e.target.value })}
                                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>


                            <div>
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
                                    شارع                                </label>
                                <input
                                    id="street"
                                    name="street"
                                    type="text"
                                    value={formData.street}
                                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>




                            <div>
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
                                    الرمز البريدي:                              </label>
                                <input
                                    type="text"
                                    value={formData.apartment}
                                    onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                                    id="apartment"
                                    name="apartment"
                                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>







                            <div>
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
                                    الطابق                                </label>
                                <input
                                    type="text"
                                    value={formData.floor_no}
                                    onChange={(e) => setFormData({ ...formData, floor_no: e.target.value })}
                                    id="floor_no"
                                    name="floor_no"
                                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>



                            <div className="flex gap-4 items-center">
                                <input
                                    type="checkbox"
                                    id="termsAccepted"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="termsAccepted" className="text-sm text-gray-700">
                                    أوافق على الشروط والأحكام.
                                </label>
                            </div>



                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg"
                            >
                                إرسال الطلب
                            </button>
                        </form>
                    </div>

                    <OrderSummary />

                </div>
            </div>


            <Footer />
        </>

    );
};

export default OrderConfirmation;
