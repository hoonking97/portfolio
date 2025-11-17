window.onload = () => {
    const iosBtn = document.querySelector('.ios');
    const androidBtn = document.querySelector('.android');

    iosBtn.addEventListener('click', () => {
        window.open('https://apps.apple.com/kr/app/kakaopay/id1464496236', '_blank');
    });

    androidBtn.addEventListener('click', () => {
        window.open('https://play.google.com/store/apps/details?id=com.kakaopay.app', '_blank');
    });

    document.querySelectorAll('.arrow-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });
};

document.write("<div style='color: red;'>외부 자바스크립트 파일</div>");
