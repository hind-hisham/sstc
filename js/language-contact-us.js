
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
            document.getElementById('1').textContent = 'اتصل بنا';
            document.getElementById('2').textContent = 'ارسل';
            //start section footer
            document.getElementById('8-1').textContent = ' السودان - القضارف -  عمارة الفرات';
            document.getElementById('8-2').textContent = '0112993294 - 0903804202';
            document.getElementById('8-3').textContent = 'كل';
            document.getElementById('8-4').textContent = ' الحقوق محفوظة لصالح SSTC';

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
            document.getElementById('1').textContent = 'Contact Us';
            document.getElementById('2').textContent = "Send";
            //start section footer
            document.getElementById('8-1').textContent = ' Sudan - Algdaref - Alfurat Building';
            document.getElementById('8-2').textContent = '0112993294 - 0903804202';
            document.getElementById('8-3').textContent = 'All';
            document.getElementById('8-4').textContent = 'Rights Reserved SSTC';


        }
    }
}
onload = new translate();