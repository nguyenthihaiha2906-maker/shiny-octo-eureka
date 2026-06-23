document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ch?n hành vi load l?i trang m?c d?nh c?a form

    // Reset toàn b? thông báo l?i cu
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    let isValid = true;

    // 1. Ki?m tra H? Tên
    const fullname = document.getElementById('fullname').value.trim();
    if (!fullname) {
        document.getElementById('nameError').textContent = 'Vui lòng cho Luxury Bride bi?t tên c?a Nàng nhé.';
        isValid = false;
    }

    // 2. Ki?m tra Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Nàng oi, d?ng b? tr?ng d?a ch? Email nhé.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Ð?nh d?ng email chua dúng r?i Nàng oi (Ví d?: name@gmail.com).';
        isValid = false;
    }

    // 3. Ki?m tra S? di?n tho?i
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/; // Ð?nh d?ng chu?n SÐT Vi?t Nam
    if (!phone) {
        document.getElementById('phoneError').textContent = 'Vui lòng d? l?i s? di?n tho?i d? tu v?n viên liên h?.';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'S? di?n tho?i không h?p l?, Nàng ki?m tra l?i nhé (g?m 10 s?).';
        isValid = false;
    }

    // 4. Ki?m tra Ngày d?t l?ch
    const appointmentDate = document.getElementById('appointmentDate').value;
    if (!appointmentDate) {
        document.getElementById('dateError').textContent = 'Nàng vui lòng ch?n ngày h?n ghé qua ti?m nhé.';
        isValid = false;
    } else {
        const selectedDate = new Date(appointmentDate);
        const today = new Date();
        today.setHours(0,0,0,0); // Ðua v? m?c 0h ngày hôm nay d? so sánh chu?n
        if (selectedDate < today) {
            document.getElementById('dateError').textContent = 'Ngày h?n không th? n?m ? quá kh? dâu Nàng oi.';
            isValid = false;
        }
    }

    // 5. Ki?m tra L?i nh?n
    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('messageError').textContent = 'Hãy nh?n cho chúng mình bi?t m?u váy ho?c mong mu?n c?a Nàng nha.';
        isValid = false;
    }

    // N?u toàn b? d? li?u h?p l? -> Ti?n hành x? lý g?i qua EmailJS
    if (isValid) {
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Ðang k?t n?i g?i l?ch...';

        // Chu?n b? các tham s? bi?n d? d?y lên EmailJS Template
        const templateParams = {
            from_name: fullname,
            from_email: email,
            phone_number: phone,
            booking_date: appointmentDate,
            message_details: message
        };

        // G?i hàm g?i mail c?a thu vi?n EmailJS
        // Hãy thay th? "YOUR_SERVICE_ID" và "YOUR_TEMPLATE_ID" dúng theo tài kho?n EmailJS c?a ní nhé
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                alert('? Ð?t l?ch h?n thành công! Luxury Bride dã ghi nh?n và s? liên h? s?m nh?t d?n Nàng tho.');
                document.getElementById('appointmentForm').reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'G?i Yêu C?u Ð?t L?ch';
            }, function(error) {
                // Tru?ng h?p chua c?u hình EmailJS, thông báo này s? hi?n th? phòng h? giúp d? li?u demo không l?i.
                alert('Ghi nh?n thông tin d?t l?ch thành công! (Luu ý: Hãy c?u hình ID EmailJS c? th? d? mail t? d?ng d? v? h?p thu nhé ní).');
                submitBtn.disabled = false;
                submitBtn.textContent = 'G?i Yêu C?u Ð?t L?ch';
            });
    }
});