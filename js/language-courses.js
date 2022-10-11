let icon=document.getElementById('icon');

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
            //the nav translation
            document.getElementById('01').textContent='الرئيسية';
            document.getElementById('02').textContent='الخدمات';
            document.getElementById('03').textContent='الكورسات';
            document.getElementById('04').textContent='عن المركز';
            document.getElementById('05').textContent='اتصل بنا';
            document.getElementById('06').textContent='تسجيل دخول';
 //the content
 document.getElementById('1-1').textContent='الكورسات';
 //section our services
 document.getElementById('2-1').textContent='اساسيات الحاسوب';
 document.getElementById('2-2').textContent='لينه معتصم';
 document.getElementById('3-1').textContent='المحاسبة الالكترونية';
 document.getElementById('3-2').textContent='سعدية محمد'; 
 document.getElementById('4-1').textContent='صيانة الحاسوب';
 document.getElementById('4-2').textContent='شوقي عبدالكريم'; 
 document.getElementById('5-1').textContent='شبكات الحاسوب';
 document.getElementById('5-2').textContent='محمد صديق';  
 document.getElementById('6-1').textContent='تصميم المواقع';
 document.getElementById('6-2').textContent='أماني محمد'; 
 document.getElementById('7-1').textContent='مهارت الطباعة';
 document.getElementById('7-2').textContent='محمد صديق';
 document.getElementById('18-1').textContent='لغة الجافا';
 document.getElementById('18-2').textContent='هند علي'; 
 document.getElementById('9-1').textContent='كاميرات المراقية';
 document.getElementById('9-2').textContent='شوقي عبدالكريم'; 
 document.getElementById('10-1').textContent='لغة C#';
 document.getElementById('10-2').textContent='شوقي عبدالكريم';
 document.getElementById('11').textContent='ساعة';
 document.getElementById('12').textContent='ساعة';
 document.getElementById('13').textContent='ساعة';
 document.getElementById('14').textContent='ساعة';
 document.getElementById('15').textContent='ساعة';
 document.getElementById('16').textContent='ساعة';
 document.getElementById('17').textContent='ساعة';
 document.getElementById('18').textContent='ساعة';
 document.getElementById('19').textContent='ساعة';

  
 //start section footer
 document.getElementById('8-1').textContent=' السودان - القضارف -  عمارة الفرات';
 document.getElementById('8-2').textContent='0112993294 - 0903804202';
 document.getElementById('8-3').textContent='كل';
 document.getElementById('8-4').textContent=' الحقوق محفوظة لصالح SSTC';    
   
        }
        else if(language == 'english'){
            //the direction of the peage
            document.body.style.direction='ltr';
            
            //the nav translation
            document.getElementById('01').textContent='Home';
            document.getElementById('02').textContent='Services';
            document.getElementById('03').textContent='Courses';
            document.getElementById('04').textContent='About Us';
            document.getElementById('05').textContent='Contact Us';
            document.getElementById('06').textContent='Login';

//the content
//the content
document.getElementById('1-1').textContent='Our Courses';
//section our services
document.getElementById('2-1').textContent='computer basics';
document.getElementById('2-2').textContent='Leena mutasim';
document.getElementById('3-1').textContent='electronic accounting';
document.getElementById('3-2').textContent='Sediya Mohammed'; 
document.getElementById('4-1').textContent='Computer Maintenance';
document.getElementById('4-2').textContent='Shawgi Abdelkareem Dawood'; 
document.getElementById('5-1').textContent='Computer network';
document.getElementById('5-2').textContent='Mohammed siddig';  
document.getElementById('6-1').textContent='web Design';
document.getElementById('6-2').textContent='Amane Mohammed'; 
document.getElementById('7-1').textContent='typing skills';
document.getElementById('7-2').textContent='Mohammed siddig';
document.getElementById('18-1').textContent='java';
document.getElementById('18-2').textContent='Hind Ali'; 
document.getElementById('9-1').textContent='CCTV';
document.getElementById('9-2').textContent='Shawgi Abdelkareem'; 
document.getElementById('10-1').textContent='C#';
document.getElementById('10-2').textContent='Shawgi Abdelkareem';
document.getElementById('11').textContent='hour';
document.getElementById('12').textContent='hour';
document.getElementById('13').textContent='hour';
document.getElementById('14').textContent='hour';
document.getElementById('15').textContent='hour';
document.getElementById('16').textContent='hour';
document.getElementById('17').textContent='hour';
document.getElementById('18').textContent='hour';
document.getElementById('19').textContent='hour';
//start section footer
document.getElementById('8-1').textContent=' Sudan - Algdaref - Alfurat Building';
document.getElementById('8-2').textContent=' 0112993294 - 0903804202';
document.getElementById('8-3').textContent='All';
document.getElementById('8-4').textContent='Rights Reserved SSTC';    
  
        }
    }
}
onload = new translate();