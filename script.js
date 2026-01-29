
document.addEventListener('DOMContentLoaded', () => {
    const mainNavLinks = document.querySelectorAll('#main-nav a');
    const subNavs = document.querySelectorAll('.sub-nav');
    const mainContentSection = document.querySelectorAll('.main-content-section');
    const sidebar = document.getElementById('vertical-sidebar');

    function activateSectionAndNav(targetNavLink) {

        mainNavLinks.forEach(link => link.classList.remove('active-main-nav'));
        targetNavLink.classList.add('active-main-nav');

        subNavs.forEach(nav => nav.classList.remove('active'));
        mainContentSection.forEach(section => section.style.display = 'none');

        const targetSectionId = targetNavLink.dataset.section;
        const targetSubNavId = `${targetSectionId}-sub-nav`;

        const targetSubNav = document.getElementById(targetSubNavId);
        if (targetSubNav) {
            sidebar.style.display = 'block';
            targetSubNav.classList.add('active');
        } else {
            sidebar.style.display = 'none'
        }

        const targetContentSection = document.getElementById(targetSectionId);
        if (targetContentSection) {
            targetContentSection.style.display = 'block';
            targetContentSection.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }

    mainNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            activateSectionAndNav(link);
        });
    });

    if (mainNavLinks.length > 0) {
        activateSectionAndNav(mainNavLinks[0]);
    }

    document.querySelectorAll('.sub-nav a').forEach(subLink => {
        subLink.addEventListener('click', (e) => {
            const targetId = e.target.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault(); // Prevent default jump behavior
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

