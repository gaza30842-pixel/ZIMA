document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع تحديث الصفحة

    const btn = document.getElementById('submitBtn');
    
    // جلب القيم من الخانات
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const job = document.getElementById('userJob').value;

    // تغيير حالة الزرار
    btn.innerText = 'جاري الإرسال...';
    btn.disabled = true;

    // إرسال الطلب لـ FormSubmit (AJAX)
    fetch("https://formsubmit.co/ajax/ziroxoft@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "الاسم": name,
            "رقم الهاتف": phone,
            "التخصص/العمل": job,
            "_subject": "طلب انضمام جديد لـ Ziroxoft"
        })
    })
    .then(response => {
        if (response.ok) {
            alert('✅ تم إرسال بياناتك بنجاح! فريق Ziroxoft هيتواصل معاك.');
            document.getElementById('supportForm').reset();
        } else {
            throw new Error('خطأ في السيرفر');
        }
    })
    .catch(error => {
        alert('❌ عذراً، حدث خطأ. تأكد من تفعيل الفورم من الإيميل أول مرة.');
        console.error(error);
    })
    .finally(() => {
        // إرجاع الزرار لحالته الأصلية
        btn.innerText = 'إرسال البيانات';
        btn.disabled = false;
    });
});
