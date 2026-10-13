/**
 * PEC Energy Consulting & EPC - Main Javascript
 * Vu Phong Style Interactions & Components
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation on Scroll
  const header = document.querySelector('.main-header');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      if (header) header.classList.add('scrolled');
      if (backToTopBtn) backToTopBtn.classList.add('show');
    } else {
      if (header) header.classList.remove('scrolled');
      if (backToTopBtn) backToTopBtn.classList.remove('show');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Mobile Drawer Navigation
  const mobileToggle = document.querySelector('.mobile-toggle-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const closeDrawerBtn = document.querySelector('.close-drawer-btn');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (drawerOverlay) drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  // 3. Modals (Quote Modal & Search Modal)
  const quoteModal = document.getElementById('quoteModal');
  const searchModal = document.getElementById('searchModal');
  const openQuoteBtns = document.querySelectorAll('.open-quote-modal');
  const openSearchBtns = document.querySelectorAll('.search-toggle-btn');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

  openQuoteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (quoteModal) quoteModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  openSearchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (searchModal) {
        searchModal.classList.add('active');
        const input = searchModal.querySelector('input');
        if (input) setTimeout(() => input.focus(), 100);
      }
      document.body.style.overflow = 'hidden';
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (quoteModal) quoteModal.classList.remove('active');
      if (searchModal) searchModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  [quoteModal, searchModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });

  // 4. Project Filter Tabs
  const projectTabs = document.querySelectorAll('.project-tabs .tab-btn');
  const projectCards = document.querySelectorAll('.projects-grid .project-card');

  if (projectTabs.length > 0 && projectCards.length > 0) {
    projectTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        projectTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // 5. Animated Number Counters
  const counters = document.querySelectorAll('.counter-val');
  let countersAnimated = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      const duration = 2000;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target.toLocaleString('vi-VN');
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current).toLocaleString('vi-VN');
        }
      }, stepTime);
    });
  }

  if (counters.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          runCounters();
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
  }

  // 6. Interactive Form Submission Demonstration
  const quoteForms = document.querySelectorAll('.quote-form-element');
  quoteForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerText : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Đang gửi thông tin...';
      }

      setTimeout(() => {
        alert('Cảm ơn Quý khách! PEC đã tiếp nhận thông tin yêu cầu tư vấn & báo giá. Chuyên viên kỹ thuật sẽ liên hệ lại trong vòng 15-30 phút.');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;
        }
        if (quoteModal) quoteModal.classList.remove('active');
        document.body.style.overflow = '';
      }, 800);
    });
  });

  // 7. Accordion (FAQ toggles)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
});
