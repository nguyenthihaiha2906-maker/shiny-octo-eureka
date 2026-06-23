// --- ÐI?U HU?NG QUAY V? TRANG CH? KHI B?M NÚT MUI TÊN ---
function goToHome(event) {
    if (event) event.preventDefault();
    window.location.href = "trangchu.html";
}

// --- LOGIC X? LÝ ÐANG KÝ TÀI KHO?N ---
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Ngan trang b? t?i l?i
            
            // Tham chi?u t?i các th? d?u vào
            const fullname = document.getElementById('fullname');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const password = document.getElementById('password');
            const rePassword = document.getElementById('re-password');
            const thongbao = document.getElementById('thongbao');
            
            // Tham chi?u t?i các vùng báo l?i
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const phoneError = document.getElementById('phoneError');
            const passwordError = document.getElementById('passwordError');
            const rePasswordError = document.getElementById('rePasswordError');
            
            // Xóa s?ch thông báo cu
            nameError.innerText = "";
            emailError.innerText = "";
            phoneError.innerText = "";
            passwordError.innerText = "";
            rePasswordError.innerText = "";
            thongbao.innerText = "";
            thongbao.className = ""; // Reset class CSS cu
            
            let isValid = true;
            
            // 1. Ki?m tra H? và tên
            if (fullname.value.trim() === "") {
                nameError.innerText = "?? Nàng vui lòng nh?p h? và tên c?a mình.";
                isValid = false;
            }
            
            // 2. Ki?m tra Email
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (email.value.trim() === "") {
                emailError.innerText = "?? Ð?a ch? email không du?c b? tr?ng.";
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                emailError.innerText = "?? Ð?nh d?ng email chua h?p l? (Ví d?: ten@gmail.com).";
                isValid = false;
            }
            
            // 3. Ki?m tra S? di?n tho?i
            const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
            if (phone.value.trim() === "") {
                phoneError.innerText = "?? Vui lòng cung c?p s? di?n tho?i liên l?c.";
                isValid = false;
            } else if (!phoneRegex.test(phone.value.trim())) {
                phoneError.innerText = "?? S? di?n tho?i ph?i g?m 10 ch? s? và b?t d?u b?ng s? 0.";
                isValid = false;
            }
            
            // 4. Ki?m tra M?t kh?u
            if (password.value === "") {
                passwordError.innerText = "?? Nàng hãy thi?t l?p m?t m?t kh?u b?o m?t.";
                isValid = false;
            } else if (password.value.length < 6) {
                passwordError.innerText = "?? M?t kh?u ph?i có d? dài t?i thi?u t? 6 ký t? tr? lên.";
                isValid = false;
            }
            
            // 5. Ki?m tra Xác nh?n l?i m?t kh?u
            if (rePassword.value === "") {
                rePasswordError.innerText = "?? Vui lòng nh?p l?i m?t kh?u v?a thi?t l?p.";
                isValid = false;
            } else if (password.value !== rePassword.value) {
                rePasswordError.innerText = "?? M?t kh?u xác nh?n chua trùng kh?p. Hãy th? l?i.";
                isValid = false;
            }
            
            // --- HÀNH Ð?NG KHI FORM H?P L? ---
            if (isValid) {
                // T?o gi? l?p luu tr? d? li?u vào LocalStorage c?a trình duy?t
                const userAccount = {
                    name: fullname.value.trim(),
                    email: email.value.trim(),
                    phone: phone.value.trim(),
                    password: password.value
                };
                
                localStorage.setItem('storedUser', JSON.stringify(userAccount));
                
                // Hi?n th? thông báo thành công r?c r?
                thongbao.className = "success-text";
                thongbao.innerHTML = "? Ðang ký thành công! <br> Ð?i m?t chút, chúng tôi s? chuy?n sang ph?n dang nh?p cho b?n...";
                
                // T? d?ng chuy?n hu?ng sang trang dang nh?p sau 1.5 giây
                setTimeout(() => {
                    window.location.href = "dangnhap.html";
                }, 1500);
            } else {
                // Hi?n th? thông báo nh?c nh? t?ng quan n?u có l?i nh?p li?u
                thongbao.style.color = "#d32f2f";
                thongbao.innerText = "? Ðang ký th?t b?i. Nàng vui lòng ki?m tra l?i các tru?ng thông tin phía trên.";
            }
        });
    }
});