export async function initEducation() {
    const education = await $.get("./data/education.json");

    const $educationCardsContainer = $(".education-card-container");
    const $educationCardTemplate = $("#education-card-template").contents();

    education.forEach(({ name, role, dates, achievements }) => {
        const $educationCard = $educationCardTemplate.clone();

        // Populate education details
        $educationCard.find(".name").text(name);
        $educationCard.find(".role").text(role);
        $educationCard.find(".date").text(dates);

        // Populate achievements
        const $achievementList = $educationCard.find(".achievement-list");
        achievements.forEach(achievement => {
            $achievementList.append(`<li class="achievement-item">${achievement}</li>`);
        });

        $educationCardsContainer.append($educationCard);
    });
}
