// ==========================================
// کد جاوااسکریپت صفحه درباره ما (about.js)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ۱. قابلیت جستجو در هدر
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    alert(`searching for:"${query}"`);
                    // جهت هدایت به صفحه جستجو در صورت نیاز:
                    // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
                } else {
                    alert('Please enter a search term.');
                }
            }
        });
    }

    // ۲. افکت تعاملی برای کارت‌های اعضای تیم
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.style.cursor = 'pointer';
        member.style.transition = 'transform 0.2s ease, background-color 0.2s ease';
        member.style.padding = '8px';
        member.style.borderRadius = '6px';

        member.addEventListener('mouseenter', () => {
            member.style.transform = 'translateX(5px)';
            member.style.backgroundColor = '#f8fafc';
        });

        member.addEventListener('mouseleave', () => {
            member.style.transform = 'translateX(0)';
            member.style.backgroundColor = 'transparent';
        });

        member.addEventListener('click', () => {
            const name = member.querySelector('h4')?.textContent;
            const role = member.querySelector('p')?.textContent;
            console.log(`عضو انتخاب شده: ${name} - نقش: ${role}`);
        });
    });

    // ۳. انیمیشن هوور برای کارت‌های ویژگی (Why Choose Us)
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.style.transition = 'transform 0.2s ease';
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.02)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

});
