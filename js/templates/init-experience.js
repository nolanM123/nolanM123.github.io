export async function initExperience() {
    const experience = await $.get("./data/experience.json");

    const $experienceCardsContainer = $(".experience-card-container");
    const $experienceCardTemplate = $("#experience-card-template").contents();

    experience.forEach(({ name, role, dates, achievements }) => {
        const $experienceCard = $experienceCardTemplate.clone();

        // Populate experience details
        $experienceCard.find(".name").text(name);
        $experienceCard.find(".role").text(role);
        $experienceCard.find(".date").text(dates);

        // Populate achievements
        const $achievementList = $experienceCard.find(".achievement-list");
        achievements.forEach(achievement => {
            $achievementList.append(`<li class="achievement-item">${achievement}</li>`);
        });

        $experienceCardsContainer.append($experienceCard);
    });
}
