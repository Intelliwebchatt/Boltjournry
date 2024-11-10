// Intersection Observer for animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Performance monitoring
const performanceMonitor = {
    init() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const timing = performance.timing;
                const loadTime = timing.loadEventEnd - timing.navigationStart;
                console.log(`Page load time: ${loadTime}ms`);
            });
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    performanceMonitor.init();
});