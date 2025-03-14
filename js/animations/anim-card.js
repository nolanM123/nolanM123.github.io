export function animCard() {
    let scrolling = false;

    function _animCard() {
        scrolling = true;

        const $cards = $(".card");

        $cards.each(function () {
            const $card = $(this);
            const cardTop = $card.offset().top;
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();

            const distanceFromCenter = cardTop - scrollTop - (3 * windowHeight / 5);

            if (distanceFromCenter <= 0) {
                $card.css({
                    "transform": "none",
                    "opacity": 1
                });
            } else {
                const normalizedDistance = Math.max(0.1, Math.min(1, 1 - distanceFromCenter / (windowHeight / 2)));

                $card.css({
                    "transform": `scale(${normalizedDistance})`,
                    "opacity": normalizedDistance
                });
            }
        });

        scrolling = false;
    }

    $(window).on("scroll resize", () => {
        if (!scrolling) {
            _animCard();
        }
    });

    $(".skill-card-container").on({
        mouseenter: function () {
            $(this).css("opacity", 1);
        },
        mouseleave: function () {
            _animCard();
        }
    }, ".skill-card");
}
