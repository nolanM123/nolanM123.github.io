export function animCard() {
    let ticking = false;

    function updateCards() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const triggerPoint = scrollTop + (3 * windowHeight) / 5;

        $(".card").each(function () {
            const $card = $(this);
            const cardTop = $card.offset().top;
            const distance = triggerPoint - cardTop;

            if (distance >= 0) {
                $card.css({
                    transform: "none",
                    opacity: 1,
                });
            } else {
                const norm = Math.max(0.1, 1 + distance / (windowHeight / 2));
                $card.css({
                    transform: `scale(${norm})`,
                    opacity: norm,
                });
            }
        });

        ticking = false;
    }

    // Use requestAnimationFrame to throttle scroll/resize events
    $(window).on("scroll resize", () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateCards);
        }
    });

    // Handle skill card hover to set opacity and re-animate on leave
    $(".skill-card-container").on({
        mouseenter() {
            $(this).css("opacity", 1);
        },
        mouseleave() {
            updateCards();
        },
    }, ".skill-card");
}
