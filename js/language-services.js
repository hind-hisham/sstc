
let ourcurses=document.getElementById('course');
let contentC=document.getElementById('content-c');
//the index translation code by arabic and english
class translate{
    constructor(){
        document.getElementById('arabic').addEventListener('click',()=>{
            this.translate('arabic');
        });
        document.getElementById('english').addEventListener('click',()=>{
            this.translate('english');
        });
    }
    translate(language){
        if(language == 'arabic'){
            //the direction of the peage
            document.body.style.direction='rtl';
             //the direction of the section mest be ltr
             ourcurses.style.setProperty('direction','ltr','important');
             contentC.style.setProperty('direction','rtl','important');

            //the nav translation
            document.getElementById('01').textContent='الرئيسية';
            document.getElementById('02').textContent='الخدمات';
            document.getElementById('03').textContent='الكورسات';
            document.getElementById('04').textContent='عن المركز';
            document.getElementById('05').textContent='اتصل بنا';
            document.getElementById('06').textContent='تسجيل دخول';

 //the content
 
 //start section our services 
 document.getElementById('3-1').textContent='استمتع بخدماتنا';
 document.getElementById('3-2').textContent='تمتع بافضل الخدمات المقدمة بكل حب علي مستوي يليق بكم باعلي التقنيات الحديثة لتلبية رغباتكم والتاكد من حصولكم علي افضل خدمة';
 document.getElementById('3-3').textContent='صيانة الحاسوب';
 document.getElementById('3-4').textContent='تركيب وصيانة الشبكات';
 document.getElementById('3-5').textContent='تطوير البرمجيات والتطبيقات';
 document.getElementById('3-6').textContent='كاميرات المراقبة';
 document.getElementById('3-7').textContent='انظمة الحضور والانصراف';
 document.getElementById('3-8').textContent='تحليل البيانات';

 //start section footer
document.getElementById('8-1').textContent=' السودان - القضارف -  عمارة الفرات';
document.getElementById('8-2').textContent='0112993294 - 0903804202';
document.getElementById('8-3').textContent='كل';
document.getElementById('8-4').textContent=' الحقوق محفوظة لصالح SSTC';    
  
        }
        else if(language == 'english'){
            //the direction of the peage
            document.body.style.direction='ltr';
             //the direction of the section mest be ltr
             ourcurses.style.setProperty('direction','ltr','important');
             contentC.style.setProperty('direction','ltr','important');

            //the nav translation
            document.getElementById('01').textContent='Home';
            document.getElementById('02').textContent='Services';
            document.getElementById('03').textContent='Courses';
            document.getElementById('04').textContent='About Us';
            document.getElementById('05').textContent='Contact Us';
            document.getElementById('06').textContent='Login';

           
            //start section our services
            document.getElementById('3-1').textContent='Engoi Our Services';
            document.getElementById('3-2').textContent='';
            document.getElementById('3-3').textContent='Computer Maintenance';
            document.getElementById('3-4').textContent='Network installation and maintenance';
            document.getElementById('3-5').textContent='Software and application development';
            document.getElementById('3-6').textContent='Surveillance Cameras(CCTV)';
            document.getElementById('3-7').textContent='Attendance and departure systems';
            document.getElementById('3-8').textContent='data analysis';
           
           //start section footer
document.getElementById('8-1').textContent=' Sudan - Algdaref - Alfurat Building';
document.getElementById('8-2').textContent='0112993294 - 0903804202';
document.getElementById('8-3').textContent='All';
document.getElementById('8-4').textContent='Rights Reserved SSTC';    
  
        }
    }
}
onload = new translate();