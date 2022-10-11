
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
            //the nav translation
            document.getElementById('01').textContent = 'الرئيسية';
            document.getElementById('02').textContent = 'الخدمات';
            document.getElementById('03').textContent = 'الكورسات';
            document.getElementById('04').textContent = 'عن المركز';
            document.getElementById('05').textContent = 'اتصل بنا';
            document.getElementById('06').textContent = 'تسجيل دخول';
            //the translation
            document.getElementById('1').textContent = 'انشاء حساب جديد';
            document.getElementById('2').textContent = 'تسجيل دخول';
           

        }
        else if (language == 'english') {
            //the direction of the peage
            document.body.style.direction = 'ltr';
            //the nav translation
            document.getElementById('01').textContent = 'Home';
            document.getElementById('02').textContent = 'Services';
            document.getElementById('03').textContent = 'Courses';
            document.getElementById('04').textContent = 'About Us';
            document.getElementById('05').textContent = 'Contact Us';
            document.getElementById('06').textContent = 'Login';
            //the translation
            document.getElementById('3').textContent = 'Sing Up';
            document.getElementById('4').textContent = 'Login';


        }
    }
}
onload = new translate();