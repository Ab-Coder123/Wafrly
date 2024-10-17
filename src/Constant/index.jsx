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
    span1 : 'نسبة التسويق 7,00 ' ,
    span2 : ' 199.99'
  },
  {
    title: "سماعة رأس لاسلكية عالية الجودة",
    imageproduct: imgs.imageproduct2,
    span1 : 'نسبة التسويق 7,00 ' ,
    span2 : ' 199.99'
  },
  {
    title: "سماعة رأس لاسلكية عالية الجودة",
    imageproduct: imgs.imageproduct1,
    span1 : 'نسبة التسويق 7,00 ' ,
    span2 : ' 199.99'
  },
  {
    title: "سماعة رأس لاسلكية عالية الجودة",
    imageproduct: imgs.imageproduct2,
    span1 : 'نسبة التسويق 7,00  ' ,
    span2 : ' 199.99'
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


const Bannerdatas= [
  {
    id: '1' ,
    imgbanner : imgs.imgBanner ,
    span : 'اسم الفئة التابع لها المنتج' ,
    head : 'تعزيز تجربة الموسيقى الخاصة بك' , 
    button : 'اشتري الأن' ,
  }
] ;

const NewsProducts = [
  {
    id:'1' ,
    head: 'بلايستيشن 5' ,
    prah : ' وصف عن المنتج المعروض' ,
    btn : 'طلب الان' ,
   
    img : imgs.NewsProduct1 ,
  } ,

  {
    id:'2' ,
    head: 'بلايستيشن 5' ,
    prah : ' وصف عن المنتج المعروض' ,
    btn : 'طلب الان' ,
   
    img : imgs.NewsProduct2 ,
  } ,

  {
    id:'3' ,
    head: 'بلايستيشن 5' ,
    prah : ' وصف عن المنتج المعروض' ,
    btn : 'طلب الان' ,
   
    img : imgs.NewsProduct3 ,
  } ,

  {
    id:'4' ,
    head: 'بلايستيشن 5' ,
    prah : ' وصف عن المنتج المعروض' ,
    btn : 'طلب الان' ,
    img : imgs.NewsProduct4 ,
  }
]


const SidePay = [
  {
    id:'1' ,
    img:imgs.Sideicon1 ,
    head : 'حسابي '
  } , 
  {
    id:'2' ,
    img:imgs.Sideicon2 ,
    head : 'طلباتي '
  } ,
  {
    id:'3' ,
    img:imgs.Sideicon3 ,
    head : 'نسبة الأرباح '
  } ,
  {
    id:'4' ,
    img:imgs.Sideicon4 ,
    head : 'الإشتراكات '
  } ,
  {
    id:'5' ,
    img:imgs.Sideicon6 ,
    head : 'المحفظة '
  } ,
  {
    id:'6' ,
    img:imgs.Sideicon5 ,
    head : 'تسجيل خروج '
  } ,
]

const SidePay2 = [
  {
      img : imgs.Coin ,
      span : 'الرصيد الحالي ' , 
      head : '$ 50,000' ,
      ask1 : 'طلبات السحب ' ,
      ask2 : 'طلبات الايداع' , 
      spanask1 : 'طرق الدفع الرئيسيه' ,
      btn : 'طلبات سحب'  ,
  } ,

]

const Optionpay = [
  {
    id : '1' ,
    opt : 'اكثر الطرق دفع' , 
  } ,
  {
    id : '2' ,
    opt : 'تحويل بنكي ' , 
  } ,
  {
    id : '3' ,
    opt : ' Cash ' , 
  } ,

]
export  {sidedata , Products , Section, Bannerdatas , Optionpay , NewsProducts , SidePay , SidePay2};
