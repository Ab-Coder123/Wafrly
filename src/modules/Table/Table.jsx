import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/Images/New folder/logo (1).png";
import { ToastContainer } from "react-toastify";

const Tabledatabase = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "jhjjm He",
      email: "test@teumjrdt.cosdddd",
      password: "1234567891",
      password_confirmation: "1234567891",
      phone: "218256321269",
      key_phone: "+20",
      sex: "Male",
      nationality_id: "1",
      type: "Admin",
      registration_confirmed: "0",
      image: "https://via.placeholder.com/50",
      category_ids: "[240, 247]",
      answer_ids: "[1, 5]",
      active: true,
    },
    {
        id: 1,
        name: "kukuk He",
        email: "test@teumjrdt.cosdddd",
        password: "1234567891",
        password_confirmation: "1234567891",
        phone: "218256321269",
        key_phone: "+20",
        sex: "Male",
        nationality_id: "1",
        type: "Admin",
        registration_confirmed: "0",
        image: "https://via.placeholder.com/50",
        category_ids: "[240, 247]",
        answer_ids: "[1, 5]",
        active: true,
      },

      {
        id: 1,
        name: "thth He",
        email: "test@teumjrdt.cosdddd",
        password: "1234567891",
        password_confirmation: "1234567891",
        phone: "218256321269",
        key_phone: "+20",
        sex: "Male",
        nationality_id: "1",
        type: "Admin",
        registration_confirmed: "0",
        image: "https://via.placeholder.com/50",
        category_ids: "[240, 247]",
        answer_ids: "[1, 5]",
        active: true,
      },


      {
        id: 1,
        name: "fgfg He",
        email: "test@teumjrdt.cosdddd",
        password: "1234567891",
        password_confirmation: "1234567891",
        phone: "218256321269",
        key_phone: "+20",
        sex: "Male",
        nationality_id: "1",
        type: "Admin",
        registration_confirmed: "0",
        image: "https://via.placeholder.com/50",
        category_ids: "[240, 247]",
        answer_ids: "[1, 5]",
        active: true,
      },


      {
        id: 1,
        name: "qwqw He",
        email: "test@teumjrdt.cosdddd",
        password: "1234567891",
        password_confirmation: "1234567891",
        phone: "218256321269",
        key_phone: "+20",
        sex: "Male",
        nationality_id: "1",
        type: "Admin",
        registration_confirmed: "0",
        image: "https://via.placeholder.com/50",
        category_ids: "[240, 247]",
        answer_ids: "[1, 5]",
        active: true,
      },


      {
        id: 1,
        name: "Mohamsdsded He",
        email: "test@teumjrdt.cosdddd",
        password: "1234567891",
        password_confirmation: "1234567891",
        phone: "218256321269",
        key_phone: "+20",
        sex: "Male",
        nationality_id: "1",
        type: "Admin",
        registration_confirmed: "0",
        image: "https://via.placeholder.com/50",
        category_ids: "[240, 247]",
        answer_ids: "[1, 5]",
        active: true,
      },


      {
        id: 1,
        name: "rfdf He",
        email: "test@teumjrdt.cosdddd",
        password: "1234567891",
        password_confirmation: "1234567891",
        phone: "218256321269",
        key_phone: "+20",
        sex: "Male",
        nationality_id: "1",
        type: "Admin",
        registration_confirmed: "0",
        image: "https://via.placeholder.com/50",
        category_ids: "[240, 247]",
        answer_ids: "[1, 5]",
        active: true,
      },


      {
        id: 1,
        name: "Mohaسmed He",
        email: "test@teumjrdt.cosdddd",
        password: "1234567891",
        password_confirmation: "1234567891",
        phone: "218256321269",
        key_phone: "+20",
        sex: "Male",
        nationality_id: "1",
        type: "Admin",
        registration_confirmed: "0",
        image: "https://via.placeholder.com/50",
        category_ids: "[240, 247]",
        answer_ids: "[1, 5]",
        active: true,
      },
    // يمكنك إضافة المزيد من المستخدمين هنا...
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    toast.success(
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
        <span>تم حذف المستخدم بنجاح!</span>
      </div>
    );
  };

  const handleEdit = (id) => {
    const newName = prompt("أدخل الاسم الجديد:");
    if (newName) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, name: newName } : user
        )
      );
      toast.info(
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
          <span>تم تعديل المستخدم بنجاح!</span>
        </div>
      );
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#C54442] mb-6">
        إدارة المستخدمين
      </h1>

      {/* شريط البحث */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="ابحث عن المستخدم..."
          className="px-4 py-2 border rounded-lg w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto flex items-start justify-start">
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-200">
            <tr className=" text-right">
              <th className="p-4 text-right">الصورة</th>
              <th className="p-4 text-right">الاسم</th>
              <th className="p-4 text-right">البريد الإلكتروني</th>
              <th className="p-4 text-right">كلمة المرور</th>
              <th className="p-4 text-right">تأكيد كلمة المرور</th>
              <th className="p-4 text-right">رقم الهاتف</th>
              <th className="p-4 text-right">مفتاح الهاتف</th>
              <th className="p-4 text-right">الجنس</th>
              <th className="p-4 text-right">الجنسية</th>
              <th className="p-4 text-right">نوع الحساب</th>
              <th className="p-4 text-right">تأكيد التسجيل</th>
              <th className="p-4 text-right">IDs التصنيف</th>
              <th className="p-4 text-right">الإجابات</th>
              <th className="p-4 text-right">الإجراءات</th>
            </tr>
          </thead>
          <tbody >
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-100 transition duration-300 transform hover:scale-[1.02]"
              >
                <td className="p-4">
                  <img src={user.image} alt="Profile" className="w-12 h-12 rounded-full" />
                </td>
                <td className="p-4">{user.name}</td>
                <td
                  className="p-4 text-blue-500 cursor-pointer hover:text-blue-700"
                  onClick={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {user.email}
                </td>
                <td className="p-4">{user.password}</td>
                <td className="p-4">{user.password_confirmation}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4">{user.key_phone}</td>
                <td className="p-4">{user.sex}</td>
                <td className="p-4">{user.nationality_id}</td>
                <td className="p-4">{user.type}</td>
                <td className="p-4">{user.registration_confirmed}</td>
                <td className="p-4">{user.category_ids}</td>
                <td className="p-4">{user.answer_ids}</td>
                <td className="p-4 space-x-2 flex items-start gap-7 justify-start">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={() => handleDelete(user.id)}
                  >
                    حذف
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                    onClick={() => handleEdit(user.id)}
                  >
                    تعديل
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Tabledatabase;
