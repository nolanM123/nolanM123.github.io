import { initHero } from "./templates/init-hero.js";
import { initProjects } from "./templates/init-projects.js";
import { initSkills } from "./templates/init-skills.js";
import { initExperience } from "./templates/init-experience.js";
import { initEducation } from "./templates/init-education.js";

import { animNav } from "./animations/anim-nav.js";
import { animCard } from "./animations/anim-card.js";
import { animDots } from "./animations/anim-dots.js";

import { initContactForm } from "./scripts/contact-form.js";

$(function () {
    // Templates
    initHero();
    initProjects();
    initSkills();
    initExperience();
    initEducation();

    // Animations
    animNav();
    animCard();
    animDots();

    // Scripts
    initContactForm();
});
