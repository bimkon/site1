class NavigationBar {
    constructor(elem) {
        this.$burger = $(elem);
        this.initBurgerMenu();
    }

    initBurgerMenu() {
        this.$burger.click(() => {
            $('.navigation-bar__navigation').toggleClass(
                'navigation-bar__navigation_active',
            );
        });
    }
}

export default NavigationBar;
