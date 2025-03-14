export async function initSkills() {
    const skills = await $.get("./data/skills.json");

    const $skillCardsContainer = $(".skill-card-container");
    const $skillCardTemplate = $("#skill-card-template").contents();

    skills.forEach(({ name, experience, expertise, description, src }) => {
        const $skillCard = $skillCardTemplate.clone();

        // Populate skill details
        $skillCard.find(".icon").attr("src", src).attr("alt", `${name} Logo`);
        $skillCard.find(".name").text(name);
        $skillCard.find(".dates").text(`${experience} Years`);
        $skillCard.find(".progress-fill").css("width", `${expertise * 100}%`);
        $skillCard.find(".description").text(description);

        $skillCardsContainer.append($skillCard);
    });

    $skillCardsContainer.on("mouseenter", ".skill-card", function() {
        const $card = $(this);
        const offset = $card.offset();
        const offLeft = offset.left < 64;
        const offRight = offset.left + $card.outerWidth() > $(window).outerWidth() - 64
        
        if (offLeft) {
            $card.find(".content").css("left", "100%");
        } else if (offRight) {
            $card.find(".content").css("left", "0%");
        }

    });

    $skillCardsContainer.on("mouseleave", ".skill-card", function() {
        $(this).find(".content").css("left", "50%");
    });
}