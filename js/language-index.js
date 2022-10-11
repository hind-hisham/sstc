let ourWork = document.getElementById('work-o');
let ourService = document.getElementById('service');
let ourcurses = document.getElementById('course');
let contentS = document.getElementById('content-s');
let contentC = document.getElementById('content-c');
let testmon = document.getElementById('test-mon');

//the index translation code by arabic and english
class translate {
    constructor() {
        document.getElementById('arabic').addEventListener('click', () => {
            this.translate('arabic');
        });
        document.getElementById('english').addEventListener('click', () => {
            this.translate('english');
        });
    }
    translate(language) {
        if (language == 'arabic') {
            //the direction of the peage
            document.body.style.direction = 'rtl';
            //the direction of the section mest be ltr
            ourService.style.setProperty('direction', 'ltr', 'important');
            ourcurses.style.setProperty('direction', 'ltr', 'important');
            ourWork.style.setProperty('direction', 'ltr', 'important');
            contentS.style.setProperty('direction', 'rtl', 'important');
            contentC.style.setProperty('direction', 'rtl', 'important');
            testmon.style.setProperty('direction', 'ltr', 'important');

            //the nav translation
            document.getElementById('01').textContent = 'الرئيسية';
            document.getElementById('02').textContent = 'الخدمات';
            document.getElementById('03').textContent = 'الكورسات';
            document.getElementById('04').textContent = 'عن المركز';
            document.getElementById('05').textContent = 'اتصل بنا';
            document.getElementById('06').textContent = 'تسجيل دخول';
            //the nav2 translation
            document.getElementById('001').textContent = 'خدماتنا';
            document.getElementById('002').textContent = 'كورساتنا';
            document.getElementById('003').textContent = 'العروض';
            document.getElementById('004').textContent = 'الفريق';
            document.getElementById('005').textContent = 'شركاء النجاح';
            document.getElementById('006').textContent = 'رأيك يهمنا';

            //the content
            //the slider

            document.getElementById('1-1').textContent = 'صيانة الحاسوب ';
            document.getElementById('1-2').textContent = ' يقوم المركز بصيانة اجهزة الحاسوب الشخصية  والطابعات وماكينات التصوير للافراد والموسسات بواسطة كوادر مؤهلة جدا مع تثبيت احدث الاصدار من البرامج والتطبيقات وانظمة الحماية مع الحصر علي تسليم الاجهزة في اقل وقت ممكن';
            document.getElementById('1-4').textContent = 'تطوير البرامج ';
            document.getElementById('1-5').textContent = 'يقوم المركز بتحليل وتصميم وبرمجة الانظمة  ومواقع الانترنت باستخدام احدث بئيات العمل وفق للمعاير العالمية الحديثة بواسطة فريق مؤهل جدا';
            document.getElementById('1-6').textContent = 'تركيب الشبكات وانظمة الحماية';
            document.getElementById('1-7').textContent = 'يقوم المركز بالدراسة والتنفيذ لشبكات الحاسوب والمخدمات وانظمة كاميرا المراقبة وانظمة الحماية واجهزة الحضور والانصراف بمايناسب متطلبات المؤسسة واستيراد افضل الاجهزة والمعداد';


            document.getElementById('103').textContent = 'المزيد';
            document.getElementById('100').textContent = 'المزيد';
            document.getElementById('101').textContent = 'المزيد';

            //section our courses
            document.getElementById('2-1').textContent = 'إنضم الي كورساتنا';
            document.getElementById('2-2').textContent = 'انضم لافضل الكورسات التي تاهلك بشكل كامل,علي يد افضل المدربين خبرتا وكفاءة.';
            document.getElementById('2-10').textContent = 'اساسيات الحاسوب';
            document.getElementById('2-11').textContent = 'المحاسبة الالكترونية';
            document.getElementById('2-3').textContent = 'صيانة الحاسوب';
            document.getElementById('2-4').textContent = 'شبكات الحاسوب';
            document.getElementById('2-5').textContent = 'تصميم المواقع';
            document.getElementById('2-6').textContent = 'مهارت الطباعة';
            document.getElementById('2-7').textContent = 'لغة الجافا';
            document.getElementById('2-8').textContent = 'كاميرات المراقية';
            document.getElementById('2-9').textContent = 'لغة C#';
            //start section our services 
            document.getElementById('3-1').textContent = 'استمتع بخدماتنا';
            document.getElementById('3-2').textContent = 'تمتع بافضل الخدمات المقدمة بكل حب علي مستوي يليق بكم باعلي التقنيات الحديثة لتلبية رغباتكم والتاكد من حصولكم علي افضل خدمة';
            document.getElementById('3-3').textContent = 'صيانة الحاسوب';
            document.getElementById('3-4').textContent = 'تركيب وصيانة الشبكات';
            document.getElementById('3-5').textContent = 'تطوير البرمجيات والتطبيقات';
            document.getElementById('3-6').textContent = 'كاميرات المراقبة';
            document.getElementById('3-7').textContent = 'انظمة الحضور والانصراف';
            document.getElementById('3-8').textContent = 'تحليل البيانات';
            //start section offer
            document.getElementById('4-1').textContent = 'احصل على';
            document.getElementById('4-2').textContent = 'تخفيض';
            document.getElementById('4-3').textContent = 'اربعة كورسات';
            document.getElementById('4-4').textContent = 'اشترك في اربعة كورسات معا واحصل علي تخفيض بقيمة 30% واستمتع بالميزات الاضافية';
            document.getElementById('4-5').textContent = 'سجل الان';
            document.getElementById('4-6').textContent = 'احصل على';
            document.getElementById('4-7').textContent = 'تخفيض';
            document.getElementById('4-8').textContent = 'ثلاثة كورسات';
            document.getElementById('4-9').textContent = 'اشترك في ثلاثة كورسات معا واحصل علي تخفيض بقيمة 20% واستمتع بالميزات الاضافية';
            document.getElementById('4-10').textContent = 'سجل الان';
            document.getElementById('4-11').textContent = 'احصل على';
            document.getElementById('4-12').textContent = 'تخفيض';
            document.getElementById('4-13').textContent = 'كورسين';
            document.getElementById('4-14').textContent = 'اشترك في كورسين معا واحصل علي تخفيض بقيمة 10% واستمتع بالميزات الاضافية';
            document.getElementById('4-15').textContent = 'سجل الان';

            //start section team
            document.getElementById('5-1').textContent = 'تعرف علي فريقنا الرائع';
            document.getElementById('5-2').textContent = 'شوقي عبد الكريم';
            document.getElementById('5-3').textContent = 'المدير التنفيذي';
            document.getElementById('5-4').textContent = 'محمد صديق';
            document.getElementById('5-5').textContent = 'مسؤول الدعم التقني';
            document.getElementById('5-6').textContent = 'لينا معتصم';
            document.getElementById('5-7').textContent = 'مسؤولة التدريب';
            document.getElementById('5-8').textContent = 'عبد الله بلال';
            document.getElementById('5-9').textContent = 'مسؤول الدعم التقني';
            document.getElementById('5-10').textContent = 'التايا ابراهيم';
            document.getElementById('5-11').textContent = 'مدير العلاقات العامة';
            document.getElementById('5-12').textContent = 'هند علي';
            document.getElementById('5-13').textContent = 'مسؤول الحسابات';
            document.getElementById('5-14').textContent = 'ذو الكفل كمال';
            document.getElementById('5-15').textContent = 'مطور الواجهات الخلفية';
            document.getElementById('5-16').textContent = 'محمد عثمان';
            document.getElementById('5-17').textContent = 'مطور الواجهات الخلفية';
            document.getElementById('5-18').textContent = 'محمد عمر';
            document.getElementById('5-19').textContent = 'مطور الواهات الامامية';
            document.getElementById('5-20').textContent = 'عاطف هارون';
            document.getElementById('5-21').textContent = 'مطور برمجيات';
            //start section testmon
            document.getElementById('9-1').textContent = '';
            document.getElementById('9-2').textContent = '';
            document.getElementById('9-3').textContent = '';
            document.getElementById('9-4').textContent = '';
            document.getElementById('9-5').textContent = '';
            document.getElementById('9-6').textContent = '';
            document.getElementById('9-7').textContent = '';
            document.getElementById('9-8').textContent = '';
            document.getElementById('9-9').textContent = '';
            document.getElementById('9-10').textContent = '';
            document.getElementById('9-11').textContent = '';



            //start section our work
            document.getElementById('6-1').textContent = 'شركاء النجاح';
            document.getElementById('6-2').textContent = 'وزارة المالية - القضارف';
            document.getElementById('6-3').textContent = 'نظام حصر الانشطة الاقتصادية';
            document.getElementById('6-4').textContent = 'الادارة القانوية - القضارف';
            document.getElementById('6-5').textContent = 'نظام ادارة العقودات';
            document.getElementById('6-6').textContent = 'مدارس هورايزون القضارف';
            document.getElementById('6-7').textContent = 'نظام التعليم الالكتروني';
            document.getElementById('6-8').textContent = 'مسجل مهن الانتاج الزراعي والحيواني';
            document.getElementById('6-9').textContent = 'نظام تسجيل الجمعيات الزراعية والحيوانية';
            document.getElementById('6-10').textContent = 'المجلس النرويجي للاجئين';
            document.getElementById('6-11').textContent = 'تركيب شبكة للمبني';
            document.getElementById('6-12').textContent = 'جمعية تنظيم الاسرة السودانية ';
            document.getElementById('6-13').textContent = 'تركيب شبكة للمبني';
            document.getElementById('6-14').textContent = 'منظمة Marcy Corps';
            document.getElementById('6-15').textContent = 'تركيب ماكينات التصوير';
            document.getElementById('6-16').textContent = 'Welt hunger hilfe';
            document.getElementById('6-17').textContent = 'تركيب ماكينات التصوير';
            document.getElementById('6-18').textContent = 'MEDAIR';
            document.getElementById('6-19').textContent = 'صيانة ماكينات التصوير';
            document.getElementById('6-20').textContent = 'COOPI';
            document.getElementById('6-21').textContent = 'صيانة اجهزة الحاسوب';
            document.getElementById('6-22').textContent = 'Plan International';
            document.getElementById('6-23').textContent = 'ادخال وتحليل البيانات';
            document.getElementById('6-24').textContent = 'شرطة ولاية القضارف';
            document.getElementById('6-25').textContent = 'صيانة اجهزة الحاسوب والطابعات';


            //start section our work
            document.getElementById('7-1').textContent = 'شاركنا رأيك';
            document.getElementById('7-2').textContent = 'نشر';
            //start section footer
            document.getElementById('8-1').textContent = ' السودان - القضارف -  عمارة الفرات';
            document.getElementById('8-2').textContent = '0112993294 - 0903804202';
            document.getElementById('8-3').textContent = 'كل';
            document.getElementById('8-4').textContent = ' الحقوق محفوظة لصالح SSTC';

        }
        else if (language == 'english') {
            //the direction of the peage
            document.body.style.direction = 'ltr';
            //the direction of the section mest be ltr
            ourService.style.setProperty('direction', 'ltr', 'important');
            ourcurses.style.setProperty('direction', 'ltr', 'important');
            ourWork.style.setProperty('direction', 'ltr', 'important');
            contentS.style.setProperty('direction', 'ltr', 'important');
            contentC.style.setProperty('direction', 'ltr', 'important');
            testmon.style.setProperty('direction', 'ltr', 'important');

            //the nav translation
            document.getElementById('01').textContent = 'Home';
            document.getElementById('02').textContent = 'Services';
            document.getElementById('03').textContent = 'Courses';
            document.getElementById('04').textContent = 'About Us';
            document.getElementById('05').textContent = 'Contact Us';
            document.getElementById('06').textContent = 'Login';

            //the nav2 translation
            document.getElementById('001').textContent = 'Services';
            document.getElementById('002').textContent = 'Courses';
            document.getElementById('003').textContent = 'Offer';
            document.getElementById('004').textContent = 'Team';
            document.getElementById('005').textContent = 'Our Work';
            document.getElementById('006').textContent = 'Contact Us';

            //the content
            //the slider
            document.getElementById('1-1').textContent = 'Computer Maintenance';
            document.getElementById('1-2').textContent = 'The center maintains personal computers, printers and photocopiers for individuals and institutions by highly qualified cadres with the installation of the latest versions of programs, applications and protection systems, with a limitation on delivering the devices in the shortest possible time.';
            document.getElementById('1-4').textContent = 'Software and application development';
            document.getElementById('1-5').textContent = 'The center analyzes, designs and programming systems and websites using the latest work environments according to modern international standards by a highly qualified team.';
            document.getElementById('1-6').textContent = 'Network installation and maintenance';
            document.getElementById('1-7').textContent = 'The center studies and implements computer networks, servers, surveillance camera systems, protection systems, attendance devices, in accordance with the requirements of the institution, and imports the best equipment and devices.';

            document.getElementById('103').textContent = 'more';
            document.getElementById('100').textContent = 'more';
            document.getElementById('101').textContent = 'more';
            //section our courses  
            document.getElementById('2-1').textContent = 'Join Our Courses';
            document.getElementById('2-2').textContent = 'Join the best courses that fully qualify you, at the hands of the best experienced and efficient trainers.';
            document.getElementById('2-3').textContent = 'Computer Maintenance';
            document.getElementById('2-4').textContent = 'Computer network';
            document.getElementById('2-5').textContent = 'web Design';
            document.getElementById('2-6').textContent = 'typing skills';
            document.getElementById('2-7').textContent = 'java';
            document.getElementById('2-8').textContent = 'CCTV';
            document.getElementById('2-9').textContent = 'C#';
            document.getElementById('2-10').textContent = 'computer basics';
            document.getElementById('2-11').textContent = 'electronic accounting';
            //start section our services
            document.getElementById('3-1').textContent = 'Enjoy Our Services';
            document.getElementById('3-2').textContent = 'Enjoy the best services provided with love at a level worthy of you with the highest modern technologies to meet your desires and ensure that you get the best service.';
            document.getElementById('3-3').textContent = 'Computer Maintenance';
            document.getElementById('3-4').textContent = 'Network installation and maintenance';
            document.getElementById('3-5').textContent = 'Software and application development';
            document.getElementById('3-6').textContent = 'Surveillance Cameras(CCTV)';
            document.getElementById('3-7').textContent = 'Attendance and departure systems';
            document.getElementById('3-8').textContent = 'data analysis';
            //start section offer
            document.getElementById('4-1').textContent = 'Get';
            document.getElementById('4-2').textContent = 'Discont';
            document.getElementById('4-3').textContent = 'Four Courses';
            document.getElementById('4-4').textContent = 'Subscribe to four courses together and get a 30% discount and enjoy the additional features';
            document.getElementById('4-5').textContent = 'Take It';
            document.getElementById('4-6').textContent = 'Get';
            document.getElementById('4-7').textContent = 'Discont';
            document.getElementById('4-8').textContent = 'Three Courses';
            document.getElementById('4-9').textContent = 'Subscribe to three courses together and get a 20% discount and enjoy the extra features';
            document.getElementById('4-10').textContent = 'Take It';
            document.getElementById('4-11').textContent = 'Get';
            document.getElementById('4-12').textContent = 'Discont';
            document.getElementById('4-13').textContent = 'Tow Courses';
            document.getElementById('4-14').textContent = 'Subscribe to Coursen together and get a 10% discount and enjoy the extra features';
            document.getElementById('4-15').textContent = 'Take It';

            //start section team
            document.getElementById('5-1').textContent = 'our awesome team';
            document.getElementById('5-2').textContent = 'Shawgi Abdelkareem';
            document.getElementById('5-3').textContent = 'Center Director';
            document.getElementById('5-4').textContent = 'Mohammed siddig';
            document.getElementById('5-5').textContent = 'Technical Support officer';
            document.getElementById('5-6').textContent = 'Leena mutasim';
            document.getElementById('5-7').textContent = 'Training Officer';
            document.getElementById('5-8').textContent = 'Abdalla Bilal';
            document.getElementById('5-9').textContent = 'Software development officer';
            document.getElementById('5-10').textContent = 'Altaya Ibraheem';
            document.getElementById('5-11').textContent = 'Public Relations and Marketing Officer';
            document.getElementById('5-12').textContent = 'Hind Ali';
            document.getElementById('5-13').textContent = 'accounts officer';
            document.getElementById('5-14').textContent = 'ZoalKifl KamalZoalKifl';
            document.getElementById('5-15').textContent = 'Full Stack Developer';
            document.getElementById('5-16').textContent = 'Mohamed Osman';
            document.getElementById('5-17').textContent = 'Backend Developer';
            document.getElementById('5-18').textContent = 'Mohamed Omer';
            document.getElementById('5-19').textContent = 'Front End Developer';
            document.getElementById('5-20').textContent = 'Atif Haron';
            document.getElementById('5-21').textContent = 'Software engineer';

             //start section testmon
             document.getElementById('9-1').textContent = 'Our Claen Sed';
             document.getElementById('9-2').textContent = '';
             document.getElementById('9-3').textContent = '';
             document.getElementById('9-4').textContent = '';
             document.getElementById('9-5').textContent = '';
             document.getElementById('9-6').textContent = '';
             document.getElementById('9-7').textContent = '';
             document.getElementById('9-8').textContent = '';
             document.getElementById('9-9').textContent = '';
             document.getElementById('9-10').textContent = '';
             document.getElementById('9-11').textContent = '';

            //start section our work
            document.getElementById('6-1').textContent = 'Success Partners';
            document.getElementById('6-2').textContent = 'Ministry of Finance - Gedaref';
            document.getElementById('6-3').textContent = 'Economic Activities Inventory System';
            document.getElementById('6-4').textContent = 'Legal Administration - Gedaref';
            document.getElementById('6-5').textContent = 'contract management system';
            document.getElementById('6-6').textContent = 'Horizon School - Gadarif';
            document.getElementById('6-7').textContent = 'E-learning System';
            document.getElementById('6-8').textContent = 'Registrar of agricultural and animal production';
            document.getElementById('6-9').textContent = 'Registration system';
            document.getElementById('6-10').textContent = 'Norwegian Refugee Council';
            document.getElementById('6-11').textContent = 'Network installation for the building';
            document.getElementById('6-12').textContent = 'Sudanese Family Planning Association';
            document.getElementById('6-13').textContent = 'Network installation for the building';
            document.getElementById('6-14').textContent = 'Marcy Corps';
            document.getElementById('6-15').textContent = 'network maintenance';
            document.getElementById('6-16').textContent = 'Welt hunger hilfe';
            document.getElementById('6-17').textContent = 'photocopy machine installation';
            document.getElementById('6-18').textContent = 'Medair';
            document.getElementById('6-19').textContent = 'photocopy machine  maintenance';
            document.getElementById('6-20').textContent = 'COOPI';
            document.getElementById('6-21').textContent = 'Computer Maintenance';
            document.getElementById('6-22').textContent = 'Plan International';
            document.getElementById('6-23').textContent = 'Data Entry and Analysis';
            document.getElementById('6-24').textContent = 'Gedaref State Police';
            document.getElementById('6-25').textContent = 'Computer & printers maintenance';


            //start section our work
            document.getElementById('7-1').textContent = 'Share your opinion';
            document.getElementById('7-2').textContent = 'Send';
            //start section footer
            //start section footer
            document.getElementById('8-1').textContent = ' Sudan - Algdaref - Alfurat Building';
            document.getElementById('8-2').textContent = '0112993294 - 0903804202';
            document.getElementById('8-3').textContent = 'All';
            document.getElementById('8-4').textContent = 'Rights Reserved SSTC';

        }
    }
}
onload = new translate();