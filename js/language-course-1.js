let info=document.getElementById('info');
let rinfo=document.getElementById('right-info');
let rinfo2=document.getElementById('right-info-2');
let rinfo3=document.getElementById('right-info-3');



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
            info.style.setProperty('direction','ltr','important');
            rinfo.style.setProperty('direction','rtl','important');
            rinfo2.style.setProperty('direction','rtl','important');
            rinfo3.style.setProperty('direction','rtl','important');


            //the nav translation
            document.getElementById('01').textContent='الرئيسية';
            document.getElementById('02').textContent='الخدمات';
            document.getElementById('03').textContent='الكورسات';
            document.getElementById('04').textContent='عن المركز';
            document.getElementById('05').textContent='اتصل بنا';
            document.getElementById('06').textContent='تسجيل دخول';
 //the content
 document.getElementById('1-1').textContent='الكورسات';
 document.getElementById('1-2').textContent='';

 //section our services
 document.getElementById('2-1').textContent='اساسيات الحاسوب';
 document.getElementById('2-2').textContent='لينه معتصم';
 document.getElementById('2-3').textContent='اساسيات الحاسوب';
 document.getElementById('2-4').textContent='اساسيات الحاسوب';
 document.getElementById('2-5').textContent='اساسيات الحاسوب';
 document.getElementById('2-6').textContent='اساسيات الحاسوب';
 document.getElementById('2-7').textContent='اساسيات الحاسوب';
 document.getElementById('2-8').textContent='اساسيات الحاسوب';

 document.getElementById('3-1').textContent='المحاسبة الالكترونية';
 document.getElementById('3-2').textContent='سعدية محمد'; 
 document.getElementById('3-4').textContent='المحاسبة الالكترونية';
 document.getElementById('3-5').textContent='المحاسبة الالكترونية';
 document.getElementById('3-6').textContent='المحاسبة الالكترونية';
 document.getElementById('3-7').textContent='المحاسبة الالكترونية';
 document.getElementById('3-8').textContent='المحاسبة الالكترونية';
 document.getElementById('3-9').textContent='المحاسبة الالكترونية';
 document.getElementById('3-10').textContent='المحاسبة الالكترونية';
 document.getElementById('3-11').textContent='المحاسبة الالكترونية';
 document.getElementById('3-12').textContent='المحاسبة الالكترونية';

 document.getElementById('4-1').textContent='صيانة الحاسوب';
 document.getElementById('4-2').textContent='شوقي عبدالكريم'; 

  //start section footer
document.getElementById('8-1').textContent=' السودان - القضارف -  عمارة الفرات';
document.getElementById('8-2').textContent='0112993294 - 0903804202';
document.getElementById('8-3').textContent='كل';
document.getElementById('8-4').textContent=' الحقوق محفوظة لصالح SSTC';    
  
        }
        else if(language == 'english'){
            //the direction of the peage
            document.body.style.direction='ltr';
            rinfo.style.setProperty('direction','ltr','important');
            rinfo2.style.setProperty('direction','ltr','important');
            rinfo3.style.setProperty('direction','ltr','important');


            //the nav translation
            document.getElementById('01').textContent='Home';
            document.getElementById('02').textContent='Services';
            document.getElementById('03').textContent='Courses';
            document.getElementById('04').textContent='About Us';
            document.getElementById('05').textContent='Contact Us';
            document.getElementById('06').textContent='Login';

 //the content
 document.getElementById('1-1').textContent='الكورسات';
 document.getElementById('1-2').textContent='Our Courses';

 //section our services
 document.getElementById('2-1').textContent='اساسيات الحاسوب';
 document.getElementById('2-2').textContent='لينه معتصم';
 document.getElementById('2-3').textContent='اساسيات الحاسوب';
 document.getElementById('2-4').textContent='اساسيات الحاسوب';
 document.getElementById('2-5').textContent='اساسيات الحاسوب';
 document.getElementById('2-6').textContent='اساسيات الحاسوب';
 document.getElementById('2-7').textContent='اساسيات الحاسوب';
 document.getElementById('2-8').textContent='اساسيات الحاسوب';

 document.getElementById('3-1').textContent='المحاسبة الالكترونية';
 document.getElementById('3-2').textContent='سعدية محمد'; 
 document.getElementById('3-3').textContent='المحاسبة الالكترونية';
 document.getElementById('3-4').textContent='المحاسبة الالكترونية';
 document.getElementById('3-5').textContent='المحاسبة الالكترونية';
 document.getElementById('3-6').textContent='المحاسبة الالكترونية';
 document.getElementById('3-7').textContent='المحاسبة الالكترونية';
 document.getElementById('3-8').textContent='المحاسبة الالكترونية';
 document.getElementById('3-9').textContent='المحاسبة الالكترونية';
 document.getElementById('3-10').textContent='المحاسبة الالكترونية';
 document.getElementById('3-11').textContent='المحاسبة الالكترونية';
 document.getElementById('3-12').textContent='المحاسبة الالكترونية';

 document.getElementById('4-1').textContent='صيانة الحاسوب';
 document.getElementById('4-2').textContent='شوقي عبدالكريم'; 

  //start section footer
document.getElementById('8-1').textContent=' Sudan - Algdaref - Alfurat Building';
document.getElementById('8-2').textContent='0112993294 - 0903804202';
document.getElementById('8-3').textContent='All';
document.getElementById('8-4').textContent='Rights Reserved SSTC';    
  
        }
    }
}
onload = new translate();