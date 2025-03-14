export async function initHero() {
    const links = await $.get("./data/hero.json");

    const $linkContainer = $("#hero-section .link-container");
    const $linkTemplate = $("#link-template").contents();

    links.forEach(({ name, href, src }) => {
        const $link = $linkTemplate.clone();
        $link.attr("href", href);
        $link.find(".icon").attr("src", src).attr("alt", `${name} Icon`);
        $link.find(".name").text(name);
        $linkContainer.append($link);
    });
}