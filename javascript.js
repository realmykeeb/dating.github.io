function toggleSidebar() {
    const wrapper = document.querySelector('.sidebar-wrapper');
    const sidebarActive = document.getElementById('sidebar-active').checked;

    if (sidebarActive) {
        wrapper.classList.add('sidebar-active');
    } else {
        wrapper.classList.remove('sidebar-active');
    }
}
