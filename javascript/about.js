// ==========================================
// کد جاوااسکریپت صفحه درباره ما (about.js)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // ۱. افکت تعاملی برای کارت‌های اعضای تیم
    // ==========================================

    const teamMembers =
        document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {

        member.style.cursor = 'pointer';

        member.style.transition =
            'transform 0.2s ease, background-color 0.2s ease';

        member.style.padding = '8px';

        member.style.borderRadius = '6px';


        member.addEventListener('mouseenter', () => {

            member.style.transform =
                'translateX(5px)';

            member.style.backgroundColor =
                '#f8fafc';

        });


        member.addEventListener('mouseleave', () => {

            member.style.transform =
                'translateX(0)';

            member.style.backgroundColor =
                'transparent';

        });


        member.addEventListener('click', () => {

            const name =
                member.querySelector('h4')?.textContent;

            const role =
                member.querySelector('p')?.textContent;

            console.log(
                `عضو انتخاب شده: ${name} - نقش: ${role}`
            );

        });

    });


    // ==========================================
    // ۲. انیمیشن Hover برای کارت‌های ویژگی
    // ==========================================

    const featureItems =
        document.querySelectorAll('.feature-item');

    featureItems.forEach(item => {

        item.style.transition =
            'transform 0.2s ease';


        item.addEventListener('mouseenter', () => {

            item.style.transform =
                'scale(1.02)';

        });


        item.addEventListener('mouseleave', () => {

            item.style.transform =
                'scale(1)';

        });

    });

});