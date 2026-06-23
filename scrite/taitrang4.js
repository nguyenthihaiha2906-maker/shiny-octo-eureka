// JavaScript Document

/* ==========================================================================
   --- 1. HI?U ?NG Ð?I MÀU THANH MENU KHI CU?N TRANG (SCROLL NAVBAR) ---
   ========================================================================== */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled'); // Thêm class d?i màu t?i/m? suong sang tr?ng
        } else {
            navbar.classList.remove('scrolled'); // Tr? v? trong su?t khi ? trên cùng
        }
    }
});

/* ==========================================================================
   --- 2. HÀM CU?N MU?T MÀ XU?NG KH?I Ð?T L?CH H?N ---
   ========================================================================== */
function cuonDenDatHen() {
    const vungNhanEmail = document.getElementById('email-box');
    if (vungNhanEmail) {
        vungNhanEmail.scrollIntoView({ behavior: 'smooth' });
        
        // T? d?ng d?t con tr? chu?t vào ô nh?p li?u sau khi cu?n xong d? tang tr?i nghi?m
        setTimeout(() => {
            const inputEmail = document.getElementById('consultation-email');
            if (inputEmail) inputEmail.focus();
        }, 800);
    }
}

/* ==========================================================================
   --- 3. KI?M TRA D? LI?U Ð?U VÀO FORM TU V?N VÀ X? LÝ G?I EMAIL ---
   ========================================================================== */
function xuLyGuiEmail(event) {
    // Ngan ch?n hành vi t?i l?i trang m?c d?nh c?a form
    event.preventDefault(); 
    
    const inputEmail = document.getElementById('consultation-email');
    if (!inputEmail) return;

    const giaTriEmail = inputEmail.value.trim();

    // 1. Ki?m tra b? tr?ng d? li?u
    if (giaTriEmail === '') {
        alert('? Vui lòng nh?p d?a ch? Email c?a Nàng d? nh?n thông tin tu v?n t? Luxury Bride!');
        inputEmail.focus();
        return;
    }

    // 2. Ki?m tra dúng d?nh d?ng Email b?ng bi?u th?c Regex chu?n
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(giaTriEmail)) {
        alert('?? Ð?nh d?ng Email không h?p l?! Vui lòng ki?m tra l?i c?u trúc (Ví d?: tuvan.bride@gmail.com).');
        inputEmail.focus();
        return;
    }

    // --- Khi t?t c? d? li?u h?p l? ---
    alert('?? C?m on Nàng dã g?i thông tin! Chuyên viên Luxury Bride dã ti?p nh?n Email thành công và s? liên h? tu v?n trong th?i gian s?m nh?t.');
    
    // Xóa s?ch d? li?u trên khung nh?p sau khi g?i thành công
    const formTuVan = document.getElementById('tu-van-form');
    if (formTuVan) formTuVan.reset(); 
}

// L?ng nghe s? ki?n khi trang t?i xong (Ð?m b?o form ch?y t?t c? 2 cách kích ho?t)
document.addEventListener('DOMContentLoaded', function() {
    const formTuVan = document.getElementById('tu-van-form');
    if (formTuVan) {
        formTuVan.addEventListener('submit', xuLyGuiEmail);
    }
});