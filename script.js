// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initProjects();
    initFilters();
    initBackToTop();
    initScrollAnimations();
    initTypewriter();
    initCounters();
    initParallax();
});


function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation duration
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}


const projects = [
    // Security Projects
    {
        title: "Web Vulnerability Scanner",
        desc: "Automated scanner for detecting OWASP Top 10 vulnerabilities",
        category: "security",
        tags: ["python", "security", "automation"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop"
    },
    {
        title: "Binary Exploitation Framework",
        desc: "Tool untuk automate buffer overflow dan ROP chain exploitation",
        category: "security",
        tags: ["python", "assembly", "exploit"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop"
    },
    {
        title: "Network Intrusion Detection",
        desc: "IDS berbasis machine learning untuk mendeteksi serangan jaringan",
        category: "security",
        tags: ["python", "ml", "network"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop"
    },
    {
        title: "Malware Sandbox",
        desc: "Isolated environment untuk menganalisis malware dengan aman",
        category: "security",
        tags: ["python", "virtualization", "malware"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop"
    },
    {
        title: "Password Cracker",
        desc: "Distributed password cracking tool dengan GPU acceleration",
        category: "security",
        tags: ["cuda", "python", "security"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop"
    },
    {
        title: "CTF Solver Bot",
        desc: "Discord bot untuk auto-solve CTF challenges",
        category: "security",
        tags: ["discord", "python", "ctf"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop"
    },
    
    // Coding Projects
    {
        title: "Code Review Platform",
        desc: "Platform untuk code review kolaboratif dengan real-time feedback",
        category: "coding",
        tags: ["react", "nodejs", "websocket"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop"
    },
    {
        title: "Developer Portfolio Generator",
        desc: "CLI tool untuk generate portfolio website otomatis",
        category: "coding",
        tags: ["python", "cli", "automation"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop"
    },
    {
        title: "Real-time Chat App",
        desc: "Aplikasi chat end-to-end encryption dengan React dan Socket.io",
        category: "coding",
        tags: ["react", "nodejs", "crypto"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop"
    },
    {
        title: "API Gateway",
        desc: "Custom API gateway dengan rate limiting dan authentication",
        category: "coding",
        tags: ["go", "microservices", "api"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop"
    },
    {
        title: "Task Manager CLI",
        desc: "Command line task manager dengan sync ke cloud",
        category: "coding",
        tags: ["rust", "cli", "cloud"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop"
    },
    {
        title: "Code Snippet Manager",
        desc: "Aplikasi untuk menyimpan dan mencari code snippets",
        category: "coding",
        tags: ["vue", "electron", "desktop"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop"
    },
    
    // Hardware Projects
    {
        title: "Raspberry Pi Cluster",
        desc: "4-node Kubernetes cluster untuk belajar distributed computing",
        category: "hardware",
        tags: ["raspberrypi", "kubernetes", "docker"],
        image: "https://images.unsplash.com/photo-1553408227-a63e9b34b8b1?w=600&auto=format&fit=crop"
    },
    {
        title: "Custom Mechanical Keyboard",
        desc: "DIY mechanical keyboard dengan QMK firmware",
        category: "hardware",
        tags: ["keyboard", "qmk", "soldering"],
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        title: "Smart Home Hub",
        desc: "Central hub untuk kontrol perangkat IoT rumah",
        category: "hardware",
        tags: ["esp32", "mqtt", "homeassistant"],
        image: "https://images.unsplash.com/photo-1553408227-a63e9b34b8b1?w=600&auto=format&fit=crop"
    },
    {
        title: "Network Attached Storage",
        desc: "Custom NAS dengan OpenMediaVault dan RAID",
        category: "hardware",
        tags: ["nas", "raid", "linux"],
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        title: "Watercooling PC",
        desc: "Custom loop watercooling dengan temperature monitoring",
        category: "hardware",
        tags: ["pc", "cooling", "modding"],
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        title: "RFID Door Lock",
        desc: "Smart door lock dengan RFID dan keypad",
        category: "hardware",
        tags: ["arduino", "rfid", "security"],
        image: "https://images.unsplash.com/photo-1553408227-a63e9b34b8b1?w=600&auto=format&fit=crop"
    },
    
    // AI/ML Projects
    {
        title: "Malware Detection ML",
        desc: "Machine learning model untuk mendeteksi malware dari binary",
        category: "ai",
        tags: ["python", "tensorflow", "security"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop"
    },
    {
        title: "Phishing Email Detector",
        desc: "AI untuk mengidentifikasi email phishing dengan NLP",
        category: "ai",
        tags: ["nlp", "python", "security"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop"
    },
    {
        title: "Network Anomaly Detection",
        desc: "Autoencoder untuk mendeteksi anomali traffic jaringan",
        category: "ai",
        tags: ["deeplearning", "network", "security"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop"
    }
];


function initProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.desc}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}


function initFilters() {
    const filters = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
    
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Update active filter
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            const category = filter.dataset.filter;
            
            projects.forEach(project => {
                if (category === 'all' || project.dataset.category === category) {
                    project.style.display = 'block';
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    project.style.opacity = '0';
                    project.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        project.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}


function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.about-card, .expertise-card, .project-card, .achievement-card, .blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}


function initTypewriter() {
    const quotes = [
        '"security is not a product, but a process"',
        '"the only secure system is the one that is powered off"',
        '"hacking is about creativity, not just tools"',
        '"defense in depth is the key"'
    ];
    
    let index = 0;
    const quoteElement = document.querySelector('.header-quote');
    
    setInterval(() => {
        index = (index + 1) % quotes.length;
        if (quoteElement) {
            quoteElement.style.opacity = '0';
            setTimeout(() => {
                quoteElement.textContent = quotes[index];
                quoteElement.style.opacity = '1';
            }, 500);
        }
    }, 5000);
}


function initCounters() {
    const counters = document.querySelectorAll('.quick-number, .stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const value = target.textContent;
                
                if (value.includes('+')) {
                    const num = parseInt(value);
                    animateCounter(target, num, true);
                } else if (value === '∞') {
                    // Skip infinity
                } else {
                    const num = parseInt(value);
                    if (!isNaN(num)) {
                        animateCounter(target, num);
                    }
                }
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target, hasPlus = false) {
    let current = 0;
    const increment = target / 50;
    
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
    }, 20);
}


function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Parallax for orbs
        document.querySelectorAll('.gradient-orb').forEach((orb, index) => {
            const speed = 0.1 + (index * 0.05);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


const yearElement = document.querySelector('.footer-bottom p:first-child');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
}


console.log('%c╔══════════════════════════════════════╗', 'color: #7c4dff; font-size: 14px;');
console.log('%c║     GARK2091 · DIGITAL REALM        ║', 'color: #7c4dff; font-size: 14px; font-weight: bold;');
console.log('%c╚══════════════════════════════════════╝', 'color: #7c4dff; font-size: 14px;');
console.log('%c🚀 Website fully loaded!', 'color: #00ff00; font-size: 12px;');
console.log('%c🔗 Discord: https://discord.gg/nH94vYstKA', 'color: #5865F2; font-size: 12px;');