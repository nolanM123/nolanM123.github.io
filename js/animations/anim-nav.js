export function animNav() {
    const $navbar = $("#navbar");
    const $focus = $navbar.find(".focus");
    const $navLinks = $navbar.find("a");
    const $navSections = $(".nav-section");

    let scrolling = false;

    function updateNav() {
        scrolling = true;
        const scrollTop = $(window).scrollTop();
        const threshold = scrollTop + $(window).height() / 3;
        let activeSectionId = null;

        $navSections.each(function () {
            const $section = $(this);
            const top = $section.offset().top;
            const bottom = top + $section.outerHeight();

            if (top <= threshold && bottom >= threshold) {
                activeSectionId = $section.attr("id");
                return false;
            }
        });

        if (activeSectionId) {
            const $activeLink = $navLinks.filter(`[href="#${activeSectionId}"]`);
            const pos = $activeLink.position();

            $navLinks.removeClass("focused");
            $activeLink.addClass("focused");

            $focus.css({
                top: pos.top,
                left: pos.left,
                width: $activeLink.outerWidth(),
                height: $activeLink.outerHeight(),
            });

            if (activeSectionId === "hero-section") {
                $navbar.css("background-color", "#fff");
                $focus.css("background-color", "#1478dc");
                $activeLink.css("color", "#fff");
            } else {
                $navbar.css("background-color", "rgba(245, 245, 245, 0.2)");
                $focus.css("background-color", "#fff");
                $navLinks.css("color", "#141414");
                $activeLink.css("color", "");
            }
        }

        scrolling = false;
    }

    $(window).on("scroll resize", () => {
        if (!scrolling) updateNav();
    }).trigger("scroll");
}
