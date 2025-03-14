export function animNav() {
    const $navbar = $("#navbar");
    const $focus = $navbar.find(".focus");
    const $navLinks = $navbar.find("a");
    const $navSections = $(".nav-section");

    let scrolling = false;

    function _animNav() {
        scrolling = true;

        const scrollTop = $(window).scrollTop();
        const threshold = scrollTop + $(window).height() / 3;
    
        let sectionId = null;
    
        $navSections.each(function () {
            const $section = $(this);
            const sectionTop = $section.offset().top;
            const sectionBottom = sectionTop + $section.outerHeight();
    
            if (sectionTop <= threshold && sectionBottom >= threshold) {
                sectionId = $section.attr("id");
    
                return false;
            }
        });
    
        if (sectionId) {
            const $activeLink = $navLinks.filter(`[href="#${sectionId}"]`);
            const offset = $activeLink.position();
    
            $navLinks.removeClass("focused");
            $activeLink.addClass("focused");
            $focus.css({
                top: offset.top,
                left: offset.left,
                width: $activeLink.outerWidth(),
                height: $activeLink.outerHeight(),
            });

            if (sectionId === "hero-section") {
                $navbar.css("background-color", "#fff");
                $focus.css("background-color", "#1478dc");
                $activeLink.css("color", "#fff");
            } else {
                $navbar.css("background-color", "rgba(245, 245, 245, 0.2)");
                $focus.css("background-color", "#fff");
                $activeLink.css("color", "#");
                $navLinks.css("color", "#141414")
            }
        }

        scrolling = false;
    }

    $(window).on("scroll resize", () => {
        if (!scrolling) {
            _animNav();
        }
    }).trigger("scroll");
}
