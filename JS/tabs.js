let Upgrades_container = document.getElementById("Upgrades-container");
let Main = document.getElementById("Main");
let Achievements = document.getElementById("Achievements");
let Challanges = document.getElementById("Challanges");
let Dark_Matter = document.getElementById("Dark-matter");
let Options = document.getElementById("Options")
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
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Challanges.classList.remove("open-Challanges");
    Dark_Matter.classList.remove("open-Dark-matter");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Options.classList.remove("open-Options");
}

function OpenMain() {
    Main.classList.add("open-Main");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Achievements.classList.remove("open-Achievements");
    Challanges.classList.remove("open-Challanges");
    Dark_Matter.classList.remove("open-Dark-matter");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Options.classList.remove("open-Options");
}

function OpenAchievements() {
    Achievements.classList.add("open-Achievements")
    Upgrades_container.classList.remove("open-Upgrades-container");
    Main.classList.remove("open-Main");
    Challanges.classList.remove("open-Challanges");
    Dark_Matter.classList.remove("open-Dark-matter");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Options.classList.remove("open-Options");
}

function OpenChallanges() {
    Challanges.classList.add("open-Challanges");
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Dark_Matter.classList.remove("open-Dark-matter");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Options.classList.remove("open-Options");
}

function OpenDarkMatter() {
    Dark_Matter.classList.add("open-Dark-matter");
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Challanges.classList.remove("open-Challanges");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Options.classList.remove("open-Options");
}

function OpenOptions() {
    Options.classList.add("open-Options");
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Challanges.classList.remove("open-Challanges");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Dark_Matter.classList.remove("open-Dark-matter");
}