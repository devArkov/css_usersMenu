let menuToggle = document.querySelector('.menuToggle'),
    navigation = document.querySelector('.navigation');

    menuToggle.onclick = function () {
        navigation.classList.toggle('active');
    }