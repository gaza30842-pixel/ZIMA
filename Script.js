// تفعيل الخدمة بمفتاحك الخاص
emailjs.init("KQB7Ixi-XCLxi5C3wGSIo"); 

document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('submitBtn');
    const status = document.getElementById('status');
    
    // تغيير شكل الزرار أثناء الإرسال
    btn.innerText = 'جاري الإرسال...';
    btn.disabled = true;

    // تجميع البيانات من الخانات
    const templateParams = {
        from_name: document.getElementById('userName').value,
        phone_number: document.getElementById('userPhone').value
    };

    // إرسال البيانات باستخدام الـ Template ID بتاعك
    emailjs.send("service_default", "template_hb4zybi", templateParams)
        .then(function() {
            // حالة النجاح
            alert('تم إرسال دعمك بنجاح لـ Zimax! شكراً لك.');
            btn.innerText = 'دعم Zimax';
            btn.disabled = false;
            document.getElementById('supportForm').reset();
        }, function(error) {
            // حالة الفشل
            alert('حدث خطأ في الإرسال، حاول مرة أخرى.');
            btn.innerText = 'دعم Zimax';
            btn.disabled = false;
            console.log('FAILED...', error);
        });
});
