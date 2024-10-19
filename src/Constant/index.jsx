// sidedata.js
import imgs from '../assets'; // تأكد من أن المسار صحيح بناءً على هيكل مشروعك

const sidedata = [
  {
    id: '1',
    icon: imgs.imgslide1,
    li: 'الكترونيات',
  },
  {
    id: '2',
    icon: imgs.imgslide2,
    li: 'ملابس',
  },
  {
    id: '3',
    icon: imgs.imgslide3,
    li: 'ترفيه',
  },
  {
    id: '4',
    icon: imgs.imgslide4,
    li: 'صحة و جمال',
  },
  {
    id: '5',
    icon: imgs.imgslide5,
    li: 'أجهزة منزلية',
  },
  {
    id: '6',
    icon: imgs.imgslide6,
    li: 'الكترونيات',
  },
  {
    id: '7',
    icon: imgs.imgslide7,
    li: 'ملابس',
  },
  {
    id: '8',
    icon: imgs.imgslide8,
    li: 'ترفيه',
  },
];


const Products = [

  {
    title: "سماعة رأس لاسلكية عالية الجودة",
    imageproduct: imgs.imageproduct1,
    span1: 'نسبة التسويق 7,00 ',
    span2: ' 199.99'
  },
  {
    title: "سماعة رأس لاسلكية عالية الجودة",
    imageproduct: imgs.imageproduct2,
    span1: 'نسبة التسويق 7,00 ',
    span2: ' 199.99'
  },
  {
    title: "سماعة رأس لاسلكية عالية الجودة",
    imageproduct: imgs.imageproduct1,
    span1: 'نسبة التسويق 7,00 ',
    span2: ' 199.99'
  },
  {
    title: "سماعة رأس لاسلكية عالية الجودة",
    imageproduct: imgs.imageproduct2,
    span1: 'نسبة التسويق 7,00  ',
    span2: ' 199.99'
  },

];
const Section = [
  {
    id: 1,
    title: 'هواتف',
    icon: imgs.imgslide1, // استبدل 'imgslide1' بالصورة المناسبة
  },
  {
    id: 2,
    title: 'أجهزة منزلية',
    icon: imgs.imgslide2, // استبدل 'imgslide2' بالصورة المناسبة
  },
  {
    id: 3,
    title: 'إلكترونيات',
    icon: imgs.imgslide3, // استبدل 'imgslide3' بالصورة المناسبة
  },
  {
    id: 4,
    title: 'كاميرات',
    icon: imgs.imgslide4, // استبدل 'imgslide4' بالصورة المناسبة
  },
  {
    id: 5,
    title: 'ترفيه',
    icon: imgs.imgslide5, // استبدل 'imgslide5' بالصورة المناسبة
  },
  {
    id: 6,
    title: 'صحة و جمال',
    icon: imgs.imgslide6, // استبدل 'imgslide6' بالصورة المناسبة
  },
];


const Bannerdatas = [
  {
    id: '1',
    imgbanner: imgs.imgBanner,
    span: 'اسم الفئة التابع لها المنتج',
    head: 'تعزيز تجربة الموسيقى الخاصة بك',
    button: 'اشتري الأن',
  }
];

const NewsProducts = [
  {
    id: '1',
    head: 'بلايستيشن 5',
    prah: ' وصف عن المنتج المعروض',
    btn: 'طلب الان',

    img: imgs.NewsProduct1,
  },

  {
    id: '2',
    head: 'بلايستيشن 5',
    prah: ' وصف عن المنتج المعروض',
    btn: 'طلب الان',

    img: imgs.NewsProduct2,
  },

  {
    id: '3',
    head: 'بلايستيشن 5',
    prah: ' وصف عن المنتج المعروض',
    btn: 'طلب الان',

    img: imgs.NewsProduct3,
  },

  {
    id: '4',
    head: 'بلايستيشن 5',
    prah: ' وصف عن المنتج المعروض',
    btn: 'طلب الان',
    img: imgs.NewsProduct4,
  }
]


const SidePay = [
  {
    id: '1',
    img: imgs.Sideicon1,
    head: 'حسابي '
  },
  {
    id: '2',
    img: imgs.Sideicon2,
    head: 'طلباتي '
  },
  {
    id: '3',
    img: imgs.Sideicon3,
    head: 'نسبة الأرباح '
  },
  {
    id: '4',
    img: imgs.Sideicon4,
    head: 'الإشتراكات '
  },
  {
    id: '5',
    img: imgs.Sideicon6,
    head: 'المحفظة '
  },
  {
    id: '6',
    img: imgs.Sideicon5,
    head: 'تسجيل خروج '
  },
]

const SidePay2 = [
  {
    img: imgs.Coin,
    span: 'الرصيد الحالي ',
    head: '$ 50,000',
    ask1: 'طلبات السحب ',
    ask2: 'طلبات الايداع',
    spanask1: 'طرق الدفع الرئيسيه',
    btn: 'طلبات سحب',
  },

]

const Optionpay = [

  {
    id: '2',
    opt: 'تحويل بنكي ',
  },
  {
    id: '3',
    opt: ' Cash ',
  },

]


const OperationsData = [
  {
    id: '1',
    date: 'Sat. 2 Sep 2024',
    change: '+68.3%',
    changeColor: 'green',
    changebg: 'red',
    name: 'تحويل من محفظه الهاتف',
    accountNumber: '(W-24-09-02-7882)',
    imgoperation: imgs.export1, // First image
  },
  {
    id: '2',
    date: 'Sat. 2 Sep 2024',
    change: '-16.8%',
    changeColor: 'red',
    changebg: 'gray',
    name: 'cash',
    accountNumber: '(W-24-09-02-5187)',
    imgoperation: imgs.export2, // Second image
  },
  {
    id: '3',
    date: 'Sat. 2 Sep 2024',
    change: '+68.3%',
    changeColor: 'green',
    changebg: 'red',
    name: 'تحويل من محفظه الهاتف',
    accountNumber: '(W-24-09-02-8325)',
    imgoperation: imgs.export1, // First image
  },
  {
    id: '4',
    date: 'Sat. 2 Sep 2024',
    change: '+68.3%',
    changeColor: 'green',
    changebg: 'red',
    name: 'تحويل من محفظه الهاتف',
    accountNumber: '(W-24-09-02-9751)',
    imgoperation: imgs.export1, // First image
  },
  {
    id: '5',
    date: 'Sat. 2 Sep 2024',
    change: '-16.8%',
    changeColor: 'red',
    changebg: 'gray',
    name: 'تحويل بنكى',
    accountNumber: '(W-24-09-02-2273)',
    imgoperation: imgs.export2, // Second image
  },
  {
    id: '6',
    date: 'Sat. 2 Sep 2024',
    change: '-16.8%',
    changeColor: 'red',
    changebg: 'gray',
    name: 'تحويل بنكى',
    accountNumber: '(W-24-09-02-1377)',
    imgoperation: imgs.export2, // Second image
  },
  {
    id: '7',
    date: 'Sat. 2 Sep 2024',
    change: '+68.3%',
    changeColor: 'green',
    changebg: 'red',
    name: 'الفواتير',
    accountNumber: '(W-24-09-02-8767)',
    imgoperation: imgs.export1, // First image
  },
];


const WhoWedatas = [
  {
    id: '1',
    head: 'إنشاء حساب جديد',
    img: imgs.Logo,
    praph: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ',

  },

  {
    id: '2',
    head: 'الهدف',
    img: imgs.Scope,
    praph: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ.',

  },

  {
    id: '3',
    head: 'الرؤية',
    img: imgs.Eye,
    praph: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ.',

  },

  {
    id: '4',
    head: 'فتحي نبيل',
    img: imgs.person1,
    praph: 'Fact Checker',

  },

  {
    id: '5',
    head: 'زياد أحمد',
    img: imgs.person2,
    praph: 'Fact Checker',

  },
  
  {
    id: '6',
    head: 'دعاء أحمد',
    img: imgs.person3,
    praph: 'Fact Checker',

  },
  {
    id: '7',
    head: 'فريق العمل ',
    img: imgs.team ,

  },

]




export { sidedata, Products, OperationsData, WhoWedatas, Section, Bannerdatas, Optionpay, NewsProducts, SidePay, SidePay2 };
