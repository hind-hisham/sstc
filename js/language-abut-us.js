
//the index translation code by arabic and english
class translate{
    constructor(){
        document.getElementById('arabic').addEventListener('click',()=>{
            this.translate('arabic');
        });
        document.getElementById('english').addEventListener('click',()=>{
            this.translate('english');
        });
        this.translate(localStorage.setItem('language'));
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
 
             //the content of the peage
            document.getElementById('1').innerHTML='مركز الشرق ';
            document.getElementById('1-1').innerHTML='نحن كمركز نسعي جاهدين لتزويد عملائنا الكرام وشركائنا من القطاعات المختلفة بحلول تقنية ذات جوده عالية وسريعة  ومعتمدة وسهلة الاستخدام  وبأسعار مناسبة   لزيادة كفاءة المؤسسات بتوفير القيمة والميزة التنافسية في سوق العمل من خلال التقنية . كما نسعي لبناء علاقة فعالة  ذات منفعة متبادلة .';

            document.getElementById('2').innerHTML='الرؤية';
            document.getElementById('2-1').innerHTML='نطمح في مركز الشرق لنكون من رواد صناعة البرمجيات في السودان والخيار الافضل لقطاع الحكومي والخاص كما نسعي لتطوير الاعمال وزيادة الارباح من خلال توفير حلول برمجية كفؤة ومعتمدة وسهلة الاستخدام .';

            document.getElementById('3').innerHTML='الرسالة';
            document.getElementById('3-1').innerHTML='نحن كمركز نسعي جاهدين لتزويد عملائنا الكرام وشركائنا من القطاعات المختلفة بحلول تقنية ذات جوده عالية وسريعة  ومعتمدة وسهلة الاستخدام  وبأسعار مناسبة   لزيادة كفاءة المؤسسات بتوفير القيمة والميزة التنافسية في سوق العمل من خلال التقنية . كما نسعي لبناء علاقة فعالة  ذات منفعة متبادلة .';

            document.getElementById('4').innerHTML='القيم';
            document.getElementById('4-1').innerHTML='الكفاءة ، المهارة ، الجودة ،الامانة ، الاعتمادية ، الموثوقية، الابتكار والابداع والعمل بروح الفريق   هي القيم التي ننطلق منها في المركز ونتعامل من خلالها مع عملائنا  لنوفر لهم افضل واحدث واسهل خدمة تقنية لتلبية رغباتهم .';


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

             //content translation 
            document.getElementById('1').innerHTML='Alsharg Center';
            document.getElementById('1-1').innerHTML='As you work through describing parts of the program, hand out a copy of each pertinent learning sheet to each participant as you come to it. Provide a think-aloud model of (either individually or in pairs) respond to the next item on the sheet As you work through describing parts of the program, hand out a copy of each pertinent ';

            document.getElementById('2').innerHTML='Vision';
            document.getElementById('2-1').innerHTML='Alsharg Center vision is to position our self as a leading software provider in Sudan and to be the best option for both (Government/private) sectors as well as we seek to improve our clients business and increase their profits, through providing them with well designed, efficient, reliable, scalable technical solutions. ';

            document.getElementById('3').innerHTML='Our Mission';
            document.getElementById('3-1').innerHTML='We as center are dedicated to provide our clients and partners from different sectors with high quality information technology solutions that are fast, reliable and cost effective, to increase the efficiency of these enterprise systems and provide them with well designed equipment to compete and gain more profits, and we seek to create long term effective benefit relationship.';

            document.getElementById('4').innerHTML='Future vision';
            document.getElementById('4-1').innerHTML='As you work through describing parts of the program, hand out a copy of each pertinent learning sheet to each participant as you come to it. Provide a think-aloud model of (either individually or in pairs) respond to the next item on the sheet As you work through describing parts of the program, hand out a copy of each pertinent';
        
        }
        localStorage.setItem('language',language);
    }
}
onload = new translate();