let Upgrades_container = document.getElementById("Upgrades-container");
let Upgrades_styles = document.getElementById("Upgrades-styles")
let Main = document.getElementById("Main");
let Main_styles = document.getElementById("Main-styles");
let Achievements = document.getElementById("Achievements");
let Achievements_styles = document.getElementById("Achievements-styles");
let Challanges = document.getElementById("Challanges");
let Challanges_styles = document.getElementById("Challanges-styles");
let Dark_Matter = document.getElementById("Dark-matter");
let Dark_styles = document.getElementById("Dark-styles");
let Options = document.getElementById("Options")
let Options_styles = document.getElementById("Options-styles");
let Skill_tree = document.getElementById("Skills");
let Reset = document.getElementById("Rebirth");

function OpenReset() {
    Reset.classList.add("open-Rebirth");
    Skill_tree.classList.remove("open-Skills");
}

function OpenSkills() {
    Skill_tree.classList.add("open-Skills");
    Reset.classList.remove("open-Rebirth");
}

function OpenUpgrades() {
    Upgrades_container.classList.add("open-Upgrades-container");
    Upgrades_styles.classList.add("show-Upgrades-styles");
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Challanges.classList.remove("open-Challanges");
    Dark_Matter.classList.remove("open-Dark-matter");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Options.classList.remove("open-Options");
    Options_styles.classList.remove("show-Options-styles");
    Main_styles.classList.remove("show-Main-styles");
    Achievements_styles.classList.remove("show-Achievements-styles");
    Challanges_styles.classList.remove("show-Challanges-styles");
    Dark_styles.classList.remove("show-Dark-styles");
}

function OpenMain() {
    Main.classList.add("open-Main");
    Main_styles.classList.add("show-Main-styles");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Achievements.classList.remove("open-Achievements");
    Challanges.classList.remove("open-Challanges");
    Dark_Matter.classList.remove("open-Dark-matter");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Options.classList.remove("open-Options");
    Options_styles.classList.remove("show-Options-styles");
    Upgrades_styles.classList.remove("show-Upgrades-styles");
    Achievements_styles.classList.remove("show-Achievements-styles");
    Challanges_styles.classList.remove("show-Challanges-styles");
    Dark_styles.classList.remove("show-Dark-styles");
}

function OpenAchievements() {
    Achievements.classList.add("open-Achievements")
    Achievements_styles.classList.add("show-Achievements-styles")
    Upgrades_container.classList.remove("open-Upgrades-container");
    Main.classList.remove("open-Main");
    Challanges.classList.remove("open-Challanges");
    Dark_Matter.classList.remove("open-Dark-matter");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Options.classList.remove("open-Options");
    Options_styles.classList.remove("show-Options-styles");
    Main_styles.classList.remove("show-Main-styles");
    Upgrades_styles.classList.remove("show-Upgrades-styles");
    Challanges_styles.classList.remove("show-Challanges-styles");
    Dark_styles.classList.remove("show-Dark-styles");
}

function OpenChallanges() {
    Challanges.classList.add("open-Challanges");
    Challanges_styles.classList.add("show-Challanges-styles");
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Dark_Matter.classList.remove("open-Dark-matter");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Options.classList.remove("open-Options");
    Options_styles.classList.remove("show-Options-styles");
    Main_styles.classList.remove("show-Main-styles");
    Upgrades_styles.classList.remove("show-Upgrades-styles");
    Achievements_styles.classList.remove("show-Achievements-styles");
    Dark_styles.classList.remove("show-Dark-styles");
}

function OpenDarkMatter() {
    Dark_Matter.classList.add("open-Dark-matter");
    Dark_styles.classList.add("show-Dark-styles");
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Challanges.classList.remove("open-Challanges");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Options.classList.remove("open-Options");
    Options_styles.classList.remove("show-Options-styles");
    Main_styles.classList.remove("show-Main-styles");
    Upgrades_styles.classList.remove("show-Upgrades-styles");
    Achievements_styles.classList.remove("show-Achievements-styles");
    Challanges_styles.classList.remove("show-Challanges-styles");
}

function OpenOptions() {
    Options.classList.add("open-Options");
    Options_styles.classList.add("show-Options-styles");
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Challanges.classList.remove("open-Challanges");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Dark_Matter.classList.remove("open-Dark-matter");
    Main_styles.classList.remove("show-Main-styles");
    Upgrades_styles.classList.remove("show-Upgrades-styles");
    Achievements_styles.classList.remove("show-Achievements-styles");
    Challanges_styles.classList.remove("show-Challanges-styles");
    Dark_styles.classList.remove("show-Dark-styles");
}