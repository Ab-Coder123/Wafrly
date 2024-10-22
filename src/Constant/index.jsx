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



const OptionDeposit = [
  { id: '2', opt: 'ايداع بنكي' },
  { id: '3', opt: 'ايداع مانيول' },
];


const Optionpaybranch = [

  {
    id: '2',
    opt2: 'بنك صرافه ',
  },
  {
    id: '3',
    opt2: ' بنك الاسلامي  ',
  },

  {
    id: '3',
    opt2: ' بنك مصر  ',
  },

  {
    id: '3',
    opt2: ' بنك القاهره  ',
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

const UseBouqoutdatas= [
    {
      id : '1' ,
      logo : imgs.Logo ,
      head : 'الباقة المستخدمة' ,
      bouqout : '$ 522.12' ,
      bouqoutimg : imgs.bouqoutimg ,
      star : imgs.star ,
      span : 'الباقي المجانية' ,
      month : '00.00 ر.ل / شهريا' ,
      prah :  'أصلي مع 1000 منتج من العديد من العلامات التجارية المختلفة في جميع أنحاء العالم. ' ,
      span2: 'غير محدد' ,
      btn : 'تجديد' ,
      head2 : ' باقات آخري' ,
      prah2 : 'يتيح لك تطبيق وفرلي العديد من الباقات المميزة كل واحدة تتميز عن الاخري في خصائصها .. اختر المناسب لك' ,
    } ,


    {
      id :'2' ,
      logo : imgs.Logo ,
      head : 'باقات آخري' ,
      prah : 'يتيح لك تطبيق وفرلي العديد من الباقات المميزة كل واحدة تتميز عن الاخري في خصائصها .. اختر المناسب لك' ,
      // header
      cardimg1 : imgs.cardimg1 ,
      cardspan1 : '50.00 ر.ل / شهريا' ,
      cardprah1 : 'أصلي مع 1000 منتج من العديد من العلامات التجارية المختلفة في جميع أنحاء العالم.' ,
      progresscard1 : '30 يوم' ,
      cardhead1 : 'الباقي الفضية' ,

      // card1
      cardhead2 : 'الباقي الذهبية' ,
      cardimg2 : imgs.cardimg2 ,
      cardspan2 : '90.00 ر.ل / شهريا ',
      cardprah2 : 'أصلي مع 1000 منتج من العديد من العلامات التجارية المختلفة في جميع أنحاء العالم.' ,
      progresscard2 : '30 يوم' ,
      cardhead2 : 'الباقي الفضية' ,

    }

]


const ProductDetailsPagedatapart1 = [
      {
        id : '1' ,
        img1 : imgs.imgdetail1 ,
        img2 : imgs.imgdetail2 ,
        img3 : imgs.imgdetail3 ,
        img4 : imgs.imgdetail4 ,
        img5 : imgs.imgdetail5 ,
      } ,

      {
        id:'2' ,
        head : 'لوحة تحكم هافيك HV G-92' ,
        imgstar : imgs.imgdetailstar4 ,
        spansalary : '192.00 دولاراً' ,
        praph : 'غلاف وحدة تحكم بلايستيشن 5 مصنوع من الفينيل عالي الجودة مع لاصق قناة هوائية لسهولة التركيب بدون فقاعات وإزالة خالية من الفوضى، حساس للضغط.' ,
        spancolor : 'الألوان:' , 
        button : 'اشتري الآن' ,
        imgheart :  imgs.imgdetailheart ,
        card1img : imgs.icondetail1 ,
        card2img : imgs.icondetail2 ,
        card1head : 'توصيل مجاني' ,
        card1praph : 'أدخل الرمز البريدي الخاص بك لتوفر التسليم' ,
        card2head : 'تسليم العودة' ,
        card1praph : 'إرجاع مجاني خلال 30 يومًا. تفاصيل'
      }
]


const ProductDetailsPagedatapart2 = [
  
  {
    id: '1',
    specificationsTitle: 'مواصفات المنتج',
    specificationsprah : 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي ' ,
    detailsTitle: 'تفاصيل الطلب',
    customerReviewsTitle: 'مراجعات العملاء',
  },
 
  {
    id: '2',
    sectionTitle1: 'مواصفات المنتج',
    sectionTitle2: 'وصف بسيط للمنتج',
    reviewsTitle: 'مراجعتك:',
    noReviewsText: 'لا يوجد أي مراجعات بعد',
    nameField: 'الاسم',
    emailField: 'البريد الإلكتروني',
    reviewPlaceholder: 'اكتب رأيك هنا...',
    sendButton: 'إرسال',
    saveInfoText: 'احفظ اسمي وبريدي الإلكتروني، والموقع الإلكتروني في هذا المتصفح لاستخدامها في المرة القادمة التي أعلق فيها.',
    note: 'يجب عليك تسجيل الدخول لتتمكن من إضافة الحقول أو المراجعة.',
    iconstar6: imgs.imgdetailstar0 ,

  },

  {
    id:'3'
  } ,

];

const iconstars =[
  {
    id:'1' ,
    iconstar: imgs.imgdetailstar1 ,
  } ,
  {
    id:'2' ,
    iconstar: imgs.imgdetailstar2 ,
  } ,
  {
    id:'3' ,
    iconstar: imgs.imgdetailstar3 ,
  } ,
  {
    id:'4' ,
    iconstar: imgs.imgdetailstar4 ,
  } ,
  {
    id:'5' ,
    iconstar: imgs.imgdetailstar5 ,
  } ,

]



export { sidedata,OptionDeposit , iconstars , ProductDetailsPagedatapart1 , ProductDetailsPagedatapart2 , Optionpaybranch, Products, UseBouqoutdatas , OperationsData, WhoWedatas, Section, Bannerdatas, Optionpay, NewsProducts, SidePay, SidePay2 };
