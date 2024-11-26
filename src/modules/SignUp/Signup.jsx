import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "../../Statemanagment/Reducers/SignUpSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import Side_Image from "../../assets/Images/New folder/Side Image.png";
import logo from '../../assets/Images/New folder/logo (1).png';
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.signup);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const [sex, setGender] = useState("male");
  const [image, setimage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // رفع الصورة
  const onDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    setimage(image);
    setPreview(URL.createObjectURL(image));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: "image/*" });

  const handelSignup = async (e) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      alert("كلمة المرور وتأكيد كلمة المرور لا يتطابقان!");
      return;
    }
    
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('password_confirmation', password_confirmation);
    formData.append('nationality', nationality);
    formData.append('sex', sex);

    try {
      const result = await dispatch(fetchSignUp(formData));
      if (result && result.meta && result.meta.requestStatus === 'fulfilled') {
        // عرض بيانات المستخدم في الكونسول
        console.log("User Data:", {
          name,
          email,
          phone,
          nationality,
          sex,
          image: preview, // معاينة الصورة
        });

        // إذا تم التسجيل بنجاح، التوجيه إلى الصفحة الرئيسية
        navigate('/modules/Profitratio/Profitratio');
      } else {
        console.error("Error:", result ? result.error : "Unknown error");
      }
    } catch (err) {
      console.error("Error in dispatch:", err);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <Navbar />
      <section className="py-8 flex items-center justify-center font-cairo">
        <div className="flex justify-center items-start bg-white shadow-lg rounded-lg">
          {/* form */}
          <div className="p-5 w-80 lg:w-full">
            <div className="flex flex-row items-center justify-center gap-6 mx-auto">
              <img src={logo} alt="" />
              <h2 className="text-3xl font-extrabold text-black text-center">
                أنشاء حساب جديد
              </h2>
            </div>
            <p className="py-5 text-center text-gray-400 text-sm">
              برجاء اكمال البيانات لاستكمال عملية الدخول
            </p>

            <form className="mt-3" onSubmit={handelSignup}>
              <div className="mt-4">
                <label className="block text-sm text-[#C54442] font-bold">الاسم كاملا</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="الاسم كاملا"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-[#C54442] font-bold">البلد</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="البلد"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-[#C54442] font-bold">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ffd13a]"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm text-[#C54442] font-bold">الجنس</label>
                <select
                  value={sex}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  required
                >
                  <option disabled>اختر الجنس</option>
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-[#C54442] font-bold">الهاتف</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="0000000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm text-[#C54442] font-bold">كلمة المرور</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm text-[#C54442] font-bold">تأكيد كلمة المرور</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="Confirm Password"
                  value={password_confirmation}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col items-center justify-center py-12 mt-5 bg-gray-100 rounded-lg border-2 border-dashed border-[#C54442] hover:bg-gray-50 hover:border-yellow-500 transition-all duration-200 ease-in-out">
                <div {...getRootProps()} className="flex flex-col items-center cursor-pointer">
                  <input {...getInputProps()} />
                  {preview ? (
                    <img src={preview} alt="Profile Preview" className="w-24 h-24 rounded-full object-cover shadow-md mt-4" />
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      <img src="path/to/your/icon-upload.png" alt="Upload Icon" className="w-12 h-12 opacity-70" />
                      <p className="text-gray-600 font-medium text-center">
                        {isDragActive ? "أسقط صورتك هنا ⬇️" : "اسحب وأفلت صورة هنا، أو اضغط لتحديد صورة"}
                      </p>
                    </div>
                  )}
                  <p className="text-sm text-gray-400 text-center mt-2">
                    (يُفضل أن تكون الصورة بتنسيق PNG أو JPG)
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 bg-[#C54442] text-white py-2 px-4 rounded-lg hover:bg-[#C54442] focus:outline-none focus:bg-green-400" disabled={isSubmitting}>
                {isSubmitting ? "جاري التسجيل..." : "انشاء حساب"}
              </button>
              {error && (
                <p className="text-red-500 text-center mt-2">
                  {error.includes("User already exists") ? "البريد الإلكتروني مسجل بالفعل" : "حدث خطأ، الرجاء المحاولة لاحقًا"}
                </p>
              )}
            </form>

            <div className="text-center mt-4">
              <p className="text-gray-600">
                هل لديك حساب بالفعل؟ <Link to="/modules/Login/Login" className="text-[#C54442]">تسجيل الدخول</Link>
              </p>
            </div>
           
          </div>

          <div className="hidden lg:block w-96 h-full relative">
            <img src={Side_Image} alt="Side Image" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
