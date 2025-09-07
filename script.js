// ========== メイン初期化 ==========
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initHeroAnimations();
    initScrollAnimations();
    initDemoFeatures();
    initGaugeDemo();
    initComingSoonFeatures();
});

// ========== ナビゲーション機能 ==========
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // スクロール時のナビバー背景変更
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // スムーススクロール
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== ヒーロセクションアニメーション ==========
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const phoneScreen = document.querySelector('.phone-screen');
    
    // テキスト要素のフェードインアニメーション
    setTimeout(() => {
        if (heroTitle) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(30px)';
            heroTitle.style.transition = 'all 0.8s ease';
            setTimeout(() => {
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }, 200);
        }
    }, 100);
    
    setTimeout(() => {
        if (heroDescription) {
            heroDescription.style.opacity = '0';
            heroDescription.style.transform = 'translateY(30px)';
            heroDescription.style.transition = 'all 0.8s ease';
            setTimeout(() => {
                heroDescription.style.opacity = '1';
                heroDescription.style.transform = 'translateY(0)';
            }, 400);
        }
    }, 100);
    
    setTimeout(() => {
        if (heroButtons) {
            heroButtons.style.opacity = '0';
            heroButtons.style.transform = 'translateY(30px)';
            heroButtons.style.transition = 'all 0.8s ease';
            setTimeout(() => {
                heroButtons.style.opacity = '1';
                heroButtons.style.transform = 'translateY(0)';
            }, 600);
        }
    }, 100);
    
    // スマホ画面のアニメーション
    if (phoneScreen) {
        setTimeout(() => {
            phoneScreen.style.opacity = '0';
            phoneScreen.style.transform = 'rotateY(-15deg) rotateX(5deg) scale(0.8)';
            phoneScreen.style.transition = 'all 1s ease';
            setTimeout(() => {
                phoneScreen.style.opacity = '1';
                phoneScreen.style.transform = 'rotateY(-15deg) rotateX(5deg) scale(1)';
            }, 800);
        }, 100);
    }
}

// ========== スクロールアニメーション ==========
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // アニメーション対象要素を監視
    const animateElements = document.querySelectorAll(
        '.feature-card, .step, .benefit-item, .section-title'
    );
    
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
    
    // CSSクラスでアニメーション実行
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ========== HPゲージデモアニメーション ==========
function initGaugeDemo() {
    const gaugeFill = document.getElementById('demo-gauge');
    const gaugeAmount = document.querySelector('.gauge-amount');
    
    if (!gaugeFill || !gaugeAmount) return;
    
    let currentPercent = 60;
    let targetPercent = 60;
    let isDecreasing = false;
    
    // ゲージアニメーションのシナリオ
    const scenarios = [
        { percent: 80, color: '#10b981', amount: '¥20,000 / ¥25,000' },
        { percent: 45, color: '#f59e0b', amount: '¥11,250 / ¥25,000' },
        { percent: 20, color: '#ef4444', amount: '¥5,000 / ¥25,000' },
        { percent: 60, color: '#10b981', amount: '¥15,000 / ¥25,000' }
    ];
    
    let scenarioIndex = 0;
    
    function updateGauge() {
        const scenario = scenarios[scenarioIndex];
        targetPercent = scenario.percent;
        
        // 滑らかなアニメーション
        const animateGauge = () => {
            const diff = targetPercent - currentPercent;
            if (Math.abs(diff) > 1) {
                currentPercent += diff * 0.05;
                gaugeFill.style.width = `${currentPercent}%`;
                
                // 色の変更
                if (currentPercent > 50) {
                    gaugeFill.style.background = 'linear-gradient(90deg, #10b981 0%, #059669 100%)';
                } else if (currentPercent > 25) {
                    gaugeFill.style.background = 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)';
                } else {
                    gaugeFill.style.background = 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)';
                }
                
                requestAnimationFrame(animateGauge);
            } else {
                currentPercent = targetPercent;
                gaugeFill.style.width = `${currentPercent}%`;
                gaugeAmount.textContent = scenario.amount;
                
                // 次のシナリオへ
                setTimeout(() => {
                    scenarioIndex = (scenarioIndex + 1) % scenarios.length;
                    updateGauge();
                }, 2000);
            }
        };
        
        animateGauge();
    }
    
    // 初期表示後にアニメーション開始
    setTimeout(updateGauge, 1000);
}

// ========== デモ機能 ==========
function initDemoFeatures() {
    const playButton = document.getElementById('demo-play-btn');
    
    if (playButton) {
        playButton.addEventListener('click', function() {
            // デモ動画のプレースホルダー機能
            this.innerHTML = '<span>🎬</span>デモ準備中...';
            this.style.background = 'rgba(37, 99, 235, 0.1)';
            this.style.color = '#2563eb';
            this.style.cursor = 'default';
            
            setTimeout(() => {
                this.innerHTML = '<span>🚧</span>近日公開予定';
                this.style.background = 'rgba(249, 115, 22, 0.1)';
                this.style.color = '#ea580c';
            }, 1500);
            
            setTimeout(() => {
                this.innerHTML = '<span>▶️</span>デモを再生';
                this.style.background = 'rgba(255, 255, 255, 0.9)';
                this.style.color = '#2563eb';
                this.style.cursor = 'pointer';
            }, 4000);
        });
    }
}

// ========== パフォーマンス最適化 ==========
function initPerformanceOptimizations() {
    // 画像の遅延読み込み
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // スクロールイベントのスロットリング
    let scrollTimer = null;
    const originalScrollHandler = window.onscroll;
    
    window.addEventListener('scroll', function() {
        if (scrollTimer !== null) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(function() {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 10);
    });
}

// ========== ユーティリティ関数 ==========
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ========== 近日公開予定機能 ==========
function initComingSoonFeatures() {
    // 近日公開予定カードのインタラクション
    const comingSoonCards = document.querySelectorAll('.feature-card.coming-soon');
    
    comingSoonCards.forEach(card => {
        card.addEventListener('click', function() {
            // バッジを一時的にパルス効果
            const badge = this.querySelector('.coming-soon-badge');
            if (badge) {
                badge.style.animation = 'none';
                setTimeout(() => {
                    badge.style.animation = 'coming-soon-pulse 0.6s ease-in-out 3';
                    setTimeout(() => {
                        badge.style.animation = 'coming-soon-pulse 2s ease-in-out infinite';
                    }, 1800);
                }, 10);
            }
            
            // 簡単なフィードバック
            const originalBg = this.style.background;
            this.style.background = 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)';
            setTimeout(() => {
                this.style.background = originalBg;
            }, 300);
        });
        
        // ホバー時の追加効果
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // 近日公開テキストのアニメーション
    const comingSoonTexts = document.querySelectorAll('.coming-soon-text, .coming-soon-small');
    
    // 定期的に注意を引くアニメーション
    setInterval(() => {
        comingSoonTexts.forEach((text, index) => {
            setTimeout(() => {
                text.style.transform = 'scale(1.05)';
                text.style.transition = 'transform 0.2s ease';
                setTimeout(() => {
                    text.style.transform = 'scale(1)';
                }, 200);
            }, index * 100);
        });
    }, 10000); // 10秒ごと
}

// ========== エラーハンドリング ==========
window.addEventListener('error', function(e) {
    console.warn('ランディングページでエラーが発生しました:', e.error);
});

// ========== パフォーマンス監視 ==========
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('ページ読み込み時間:', Math.round(perfData.loadEventEnd - perfData.fetchStart) + 'ms');
        }, 0);
    });
}