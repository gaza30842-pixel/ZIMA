// script.js

// ضع هنا User ID من EmailJS
emailjs.init("service_xadbc85");

document.getElementById('zimaxForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const messageDiv = document.getElementById('message');

    if(name === '' || phone === '') {
        messageDiv.textContent = 'الرجاء ملء جميع الحقول!';
        messageDiv.style.color = '#ff4e50';
        return;
    }

    emailjs.send('service_xadbc85', 'YOUR_TEMPLATE_ID', {
        user_name: name,
        user_phone: phone
    }).then(function(response) {
        messageDiv.textContent = `شكرًا ${name}! تم تأكيد دعمك لـ Zimax.`;
        messageDiv.style.color = '#00ff99';
        document.getElementById('zimaxForm').reset();
    }, function(error) {
        messageDiv.textContent = 'حدث خطأ أثناء إرسال البيانات!';
        messageDiv.style.color = '#ff4e50';
        console.error(error);
    });
});
