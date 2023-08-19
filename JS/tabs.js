let Upgrades_container = document.getElementById("Upgrades-container");
let Upgrades_styles = document.getElementById("Upgrades-styles")
let Main = document.getElementById("Main");
let BH_content = document.getElementById("BH-content");
let Matter_content = document.getElementById("Matter-content");
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
let Quarks_tab = document.getElementById("Quarks-tab");
let Quarks_content = document.getElementById("Quarks-content");
let Atoms_tab = document.getElementById("Atoms-tab");
let Atoms_content = document.getElementById("Atoms-content");
let Proton = document.getElementById("Proton");
let Proton_boost = document.getElementById("Proton-boost");
let Neutron = document.getElementById("Neutron");
let Neutron_boost = document.getElementById("Neutron-boost");
let Electron = document.getElementById("Electron");
let Electron_boost = document.getElementById("Electron-boost");

function OpenBH() {
    BH_content.classList.add("show-BH-content");
    Matter_content.classList.remove("show-Matter-content");
    Tickspeed2.classList.remove("show-Tickspeed");
    Tickspeed_cost.classList.remove("show-Tickspeed-cost");
    Quarks_tab.classList.remove("show-Quarks-tab");
    Quarks_content.classList.remove("show-Quarks-content"); 
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
}

function OpenMC() {
    Matter_content.classList.add("show-Matter-content");
    BH_content.classList.remove("show-BH-content");
    Tickspeed2.classList.add("show-Tickspeed");
    Tickspeed_cost.classList.add("show-Tickspeed-cost");
    Quarks_tab.classList.remove("show-Quarks-tab");
    Quarks_content.classList.remove("show-Quarks-content"); 
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
}

function OpenQuarks() {
    Quarks_tab.classList.add("show-Quarks-tab");
    Atoms_tab.classList.add("show-Atoms-tab");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
}

function OpenQuarksContent() {
    Quarks_content.classList.add("show-Quarks-content");
    Atoms_content.classList.remove("show-Atoms-content");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
}

function OpenAtomsContent() {
    Atoms_content.classList.add("show-Atoms-content");
    Quarks_content.classList.remove("show-Quarks-content"); 
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    if(AtomsBoost.amount >= 1) {
        Proton.classList.add("show-Proton");
        Proton_boost.classList.add("show-Proton-boost");
    }
    if(AtomsBoost.amount >= 2) {
        Neutron.classList.add("show-Neutron");
        Neutron_boost.classList.add("show-Neutron-boost");
    }
    if(AtomsBoost.amount >= 3) {
        Electron.classList.add("show-Electron");
        Electron_boost.classList.add("show-Electron-boost");
    }
}

function OpenReset() {
    Reset.classList.add("open-Rebirth");
    Skill_tree.classList.remove("open-Skills");
    Quarks_tab.classList.remove("show-Quarks-tab");
    Quarks_content.classList.remove("show-Quarks-content"); 
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
}

function OpenSkills() {
    Skill_tree.classList.add("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Quarks_tab.classList.remove("show-Quarks-tab");
    Quarks_content.classList.remove("show-Quarks-content");
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
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
    Tickspeed2.classList.remove("show-Tickspeed");
    Tickspeed_cost.classList.remove("show-Tickspeed-cost");
    Matter_content.classList.remove("show-Matter-content");
    BH_tab.classList.remove("show-BH-tab");
    BH_content.classList.remove("show-BH-content");
    Quarks_tab.classList.remove("show-Quarks-tab");
    Quarks_content.remove("show-Quarks-content");
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
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
    if(SoulsUpgrade_3.bought == true) {
        Tickspeed2.classList.add("show-Tickspeed");
        Tickspeed_cost.classList.add("show-Tickspeed-cost");
    }
    if(Skill_up2.bought == true) {
        BH_tab.classList.add("show-BH-tab");
    }
    Quarks_tab.classList.remove("show-Quarks-tab");
    Quarks_content.classList.remove("show-Quarks-content");
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
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
    Tickspeed2.classList.remove("show-Tickspeed");
    Tickspeed_cost.classList.remove("show-Tickspeed-cost");
    Matter_content.classList.remove("show-Matter-content");
    BH_tab.classList.remove("show-BH-tab");
    BH_content.classList.remove("show-BH-content");
    Quarks_tab.classList.remove("show-Quarks-tab");
    Quarks_content.classList.remove("show-Quarks-content");
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
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
    Tickspeed2.classList.remove("show-Tickspeed");
    Tickspeed_cost.classList.remove("show-Tickspeed-cost");
    Matter_content.classList.remove("show-Matter-content");
    BH_tab.classList.remove("show-BH-tab");
    BH_content.classList.remove("show-BH-content");
    Quarks_tab.classList.remove("show-Quarks-tab");
    Quarks_content.classList.remove("show-Quarks-content");
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
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
    Tickspeed2.classList.remove("show-Tickspeed");
    Tickspeed_cost.classList.remove("show-Tickspeed-cost");
    Matter_content.classList.remove("show-Matter-content");
    BH_tab.classList.remove("show-BH-tab");
    BH_content.classList.remove("show-BH-content");
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
    Tickspeed2.classList.remove("show-Tickspeed");
    Tickspeed_cost.classList.remove("show-Tickspeed-cost");
    Matter_content.classList.remove("show-Matter-content");
    BH_tab.classList.remove("show-BH-tab");
    BH_content.classList.remove("show-BH-content");
    Quarks_tab.classList.remove("show-Quarks-tab");
    Quarks_content.classList.remove("show-Quarks-content");
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
}