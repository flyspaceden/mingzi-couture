(() => {
  const page = document.body.dataset.page;
  const navItems = [
    ['index.html', '首页', 'home'],
    ['collections.html', '产品典藏', 'collections'],
    ['jewelry.html', '高定首饰', 'jewelry'],
    ['smart-watch.html', '智能腕表', 'watch'],
    ['brand.html', '品牌与公司', 'brand'],
  ];
  const links = navItems.map(([href, label, key]) => `<a href="${href}"${page === key ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  const header = document.querySelector('[data-site-header]');
  const footer = document.querySelector('[data-site-footer]');
  if (header) {
    header.innerHTML = `<div class="site-header"><a class="brand-mark" href="index.html" aria-label="名紫首页"><span>MINGZI</span><b>名 紫</b></a><button class="menu-toggle" type="button" aria-label="打开导航" aria-expanded="false"><i></i><i></i></button><nav class="site-nav" aria-label="主导航">${links}<a class="site-nav__contact" href="contact.html">商务联系 <span aria-hidden="true">↗</span></a></nav></div>`;
    const toggle = header.querySelector('.menu-toggle');
    const nav = header.querySelector('.site-nav');
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
      document.body.classList.toggle('nav-open', open);
    });
    nav.addEventListener('click', event => {
      if (event.target.matches('a')) {
        header.classList.remove('menu-open');
        document.body.classList.remove('nav-open');
      }
    });
  }
  if (footer) {
    footer.innerHTML = `<div class="site-footer shell"><div class="site-footer__top"><a class="brand-mark" href="index.html"><span>MINGZI</span><b>名 紫</b></a><p>凝萃时光，绽放内在光芒。</p><a class="text-link" href="contact.html">合作咨询 <span aria-hidden="true">↗</span></a></div><div class="site-footer__bottom"><span>© ${new Date().getFullYear()} MINGZI. ALL RIGHTS RESERVED.</span><span>中经嘉华（深圳）科技有限公司</span></div></div>`;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
  }, { threshold: 0.16 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

  document.querySelectorAll('img').forEach(image => image.draggable = false);
  document.addEventListener('contextmenu', event => {
    if (event.target.closest('img, .lightbox')) event.preventDefault();
  });
  document.addEventListener('dragstart', event => {
    if (event.target.closest('img')) event.preventDefault();
  });
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && ['s', 'u'].includes(event.key.toLowerCase())) event.preventDefault();
  });

  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lightboxImage = lightbox.querySelector('img');
    document.querySelectorAll('[data-lightbox] button').forEach(button => {
      button.addEventListener('click', () => {
        const image = button.querySelector('img');
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt;
        lightbox.showModal();
      });
    });
    lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
    lightbox.addEventListener('close', () => { lightboxImage.src = ''; });
  }
})();
