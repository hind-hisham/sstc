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
             //the direction of the section mest be ltr
             icon.style.setProperty('transform','translateX(-300px) translateY(-130px)','important');

             //the nav translation
             document.getElementById('01').textContent='الرئيسية';
             document.getElementById('02').textContent='الخدمات';
             document.getElementById('03').textContent='الكورسات';
             document.getElementById('04').textContent='عن المركز';
             document.getElementById('05').textContent='اتصل بنا';
             document.getElementById('06').textContent='تسجيل دخول';
 //the content
 document.getElementById('1-1').textContent='بءبسسبيءئ';
 document.getElementById('1-2').textContent='ثسشثصش';
 document.getElementById('1-3').textContent='خهعا';
 //section our services
 document.getElementById('2-1').textContent='اتغلفغب';
 document.getElementById('2-2').textContent='تنعلغعب'; 
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
             icon.style.setProperty('transform','translateX(0px) translateY(-130px)','important');


              //the nav translation
              document.getElementById('01').textContent='Home';
              document.getElementById('02').textContent='Services';
              document.getElementById('03').textContent='Courses';
              document.getElementById('04').textContent='About Us';
              document.getElementById('05').textContent='Contact Us';
              document.getElementById('06').textContent='Login';
  
//the content
document.getElementById('1-1').textContent='Mobile App';
document.getElementById('1-2').textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore similique optio impedit quisquam iure laboriosam.';
document.getElementById('1-3').textContent='Request';
//section our services
document.getElementById('2-1').textContent='Request Services';
document.getElementById('2-2').textContent='click me'; 
  //start section footer
  document.getElementById('8-1').textContent=' Sudan - Algdaref - Alfurat Building';
  document.getElementById('8-2').textContent='0112993294 - 0903804202';
  document.getElementById('8-3').textContent='All';
  document.getElementById('8-4').textContent='Rights Reserved SSTC';    
    
        }
    }
}
onload = new translate();