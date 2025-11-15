

// إخفاء شاشة التحميل
window.addEventListener('load', function() {
    setTimeout(function() {
        const pageLoader = document.getElementById('pageLoader');
        if (pageLoader) {
            pageLoader.style.opacity = '0';
            setTimeout(function() {
                pageLoader.style.display = 'none';
            }, 500);
        }
    }, 2000);
});

// تأثيرات التمرير للعناصر
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// تطبيق تأثيرات على العناصر
document.addEventListener('DOMContentLoaded', function() {
    // تأثيرات العناصر
    document.querySelectorAll('.gallery-item, .video-item, .pdf-item').forEach(el => {
        observer.observe(el);
    });

    // تأثيرات إضافية للصور
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px)';
        });
    });

    // تأثيرات الباوربوينت - حركات عشوائية للعناصر
    const animatedElements = document.querySelectorAll('.gallery-item, .video-item, .pdf-item, .contact-card');
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });

    // تأثير الكتابة للنصوص
    const textElements = document.querySelectorAll('.page-title, .page-subtitle');
    textElements.forEach(element => {
        element.classList.add('fade-in');
    });
});

// تأثيرات الماركيه الديناميكية
function createMarqueeContent() {
    const marquees = document.querySelectorAll('.marquee');
    marquees.forEach(marquee => {
        const originalText = marquee.textContent;
        // تكرار النص لملء المساحة
        marquee.innerHTML = Array(5).fill(originalText).join(' 🎯 ');
    });
}

// تهيئة الماركيه عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', createMarqueeContent);
// تغيير خلفية body إلى كحلي غامق والنص إلى أبيض
document.body.style.backgroundColor = "#2c3e50";
document.body.style.color = "white";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.fontFamily = "Arial, sans-serif";