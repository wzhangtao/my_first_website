// 移动端菜单交互
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 点击导航链接后关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// 深色模式切换
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
const html = document.documentElement;

// 从 localStorage 读取主题设置
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 初始化主题
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.textContent = '☀️';
} else {
    html.setAttribute('data-theme', 'light');
    if (themeIcon) themeIcon.textContent = '🌙';
}

// 切换主题
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        if (themeIcon) {
            themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        }
    });
}
