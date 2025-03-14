export async function initProjects() {
    const projects = await $.get("./data/projects.json");

    const $projectCardsContainer = $(".project-card-container");
    const $projectCardTemplate = $("#project-card-template").contents();
    const $linkTemplate = $("#link-template").contents();

    projects.forEach(({ name, role, description, src, skills, achievements, links }) => {
        const $projectCard = $projectCardTemplate.clone();

        // Populate project details
        $projectCard.find(".name").text(name);
        $projectCard.find(".role").text(role);
        $projectCard.find(".description").text(description);
        $projectCard.find(".thumbnail").attr("src", src).attr("alt", `${name} Thumbnail`);

        // Populate skills (stack)
        const $stackContainer = $projectCard.find(".stack-container");
        skills.forEach(({ src, name }) => {
            $stackContainer.append(`<img src="${src}" alt="${name} Logo" class="icon">`);
        });

        // Populate achievements
        const $achievementList = $projectCard.find(".achievement-list");
        achievements.forEach(achievement => {
            $achievementList.append(`<li class="achievement-item">${achievement}</li>`);
        });

        // Populate links
        const $linkContainer = $projectCard.find(".link-container");
        links.forEach(({ href, src, name }) => {
            const $link = $linkTemplate.clone();
            $link.attr("href", href);
            $link.find(".icon").attr("src", src).attr("alt", `${name} Icon`);
            $link.find(".name").text(name);
            $linkContainer.append($link);
        });

        $projectCardsContainer.append($projectCard);
    });
}
