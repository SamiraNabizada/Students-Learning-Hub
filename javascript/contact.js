// ==========================================
// کد جاوااسکریپت صفحه تماس با ما (contact.js)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // ۱. مدیریت و اعتبارسنجی فرم تماس
    const contactForm = document.querySelector('.card form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم

            // دریافت مقادیر ورودی‌ها
            const fullNameInput = contactForm.querySelector('input[type="text"]');
            const emailInput = contactForm.querySelector('input[type="email"]');
            const messageInput = contactForm.querySelector('textarea');

            const fullName = fullNameInput ? fullNameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            // اعتبارسنجی ورودی‌ها
            if (!fullName) {
                showNotification('Please enter your full name.', 'error');
                fullNameInput.focus();
                return;
            }

            if (!email || !validateEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                emailInput.focus();
                return;
            }

            if (!message || message.length < 10) {
                showNotification('Please enter a message with at least 10 characters.', 'error');
                messageInput.focus();
                return;
            }

            // شبیه‌سازی ارسال موفقیت‌آمیز
            showNotification('Your message has been sent successfully! We will contact you soon.', 'success');

            // پاک‌سازی فرم
            contactForm.reset();
        });
    }

    // ۲. تابع بررسی صحت فرمت ایمیل
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // ۳. تابع نمایش اعلان (پیام خطا یا موفقیت)
    function showNotification(message, type) {
        // حذف اعلان‌های قبلی در صورت وجود
        const existingAlert = document.querySelector('.custom-alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        // ساخت عنصر اعلان جدید
        const alertDiv = document.createElement('div');
        alertDiv.className = `custom-alert ${type}`;
        alertDiv.textContent = message;

        // استایل‌دهی پویا به اعلان
        Object.assign(alertDiv.style, {
            padding: '12px 16px',
            marginTop: '15px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '500',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            backgroundColor: type === 'success' ? '#d1fae5' : '#fee2e2',
            color: type === 'success' ? '#065f46' : '#991b1b',
            border: `1px solid ${type === 'success' ? '#a7f3d0' : '#fca5a5'}`
        });

        // افزودن اعلان به انتهای فرم
        if (contactForm) {
            contactForm.appendChild(alertDiv);

            // حذف خودکار اعلان پس از ۵ ثانیه
            setTimeout(() => {
                alertDiv.remove();
            }, 5000);
        }
    }

    // ۴. قابلیت جستجو در هدر
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    alert(`searching for:"${query}"`);
                } else {
                    alert('Please enter a search term.');
                }
            }
        });
    }

});