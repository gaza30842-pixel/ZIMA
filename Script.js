document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الصفحة من إعادة التحميل

    const btn = document.getElementById('submitBtn');
    const status = document.getElementById('status');
    
    // تغيير حالة الزرار
    btn.innerText = 'جاري الإرسال...';
    btn.disabled = true;

    // تجميع البيانات من الخانات
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;

    // إرسال البيانات لـ FormSubmit عن طريق AJAX
    fetch("https://formsubmit.co/ajax/ziroxoft@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "اسم الداعم": name,
            "رقم الهاتف": phone,
            "_subject": "إشعار دعم جديد: Zimax"
        })
    })
    .then(response => response.json())
    .then(data => {
        // حالة النجاح
        alert('✅ تم إرسال دعمك بنجاح! شكراً لك.');
        btn.innerText = 'دعم Zimax';
        btn.disabled = false;
        document.getElementById('supportForm').reset();
    })
    .catch(error => {
        // حالة الفشل
        alert('❌ حدث خطأ، يرجى المحاولة مرة أخرى.');
        btn.innerText = 'دعم Zimax';
        btn.disabled = false;
    });
});
