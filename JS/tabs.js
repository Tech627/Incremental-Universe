let Upgrades_container = document.getElementById("Upgrades-container");
let Upgrades_styles = document.getElementById("Upgrades-styles")
let Main = document.getElementById("Main");
let Tickspeed2 = document.getElementById("Tickspeed")
let Tickspeed_cost = document.getElementById("Tickspeed-cost");
let BH_content = document.getElementById("BH-content");
let Matter_content = document.getElementById("Matter-content");
let Main_styles = document.getElementById("Main-styles");
let Achievements = document.getElementById("Achievements");
let Achievements_styles = document.getElementById("Achievements-styles");
let Challanges = document.getElementById("Challanges");
let Challenge_01 = document.getElementById("Challange1");
let Challenge_02 = document.getElementById("Challenge2");
let Finnish_button = document.getElementById("Finnish-button");
let Challanges_styles = document.getElementById("Challanges-styles");
let Dark_Matter = document.getElementById("Dark-matter");
let Dark_styles = document.getElementById("Dark-styles");
let Stats = document.getElementById("Stats");
let Sfg_stats = document.getElementById("Sfg-stats");
let Stats_styles = document.getElementById("Stats-styles");
let Main_stats = document.getElementById("Main-stats")
let Options = document.getElementById("Options")
let Font_content = document.getElementById("Font-content")
let Options_styles = document.getElementById("Options-styles");
let Skill_tree = document.getElementById("Skills");
let Radiation_content_tab = document.getElementById("Radiation-content-tab");
let Lab_Research_tab = document.getElementById("Lab-Research-tab");
let Research_up1 = document.getElementById("Research-up1");
let Research_up2 = document.getElementById("Research-up2");
let Research_up3 = document.getElementById("Research-up3");
let Radiation_content = document.getElementById("Radiation-content");
let Lab_Research_content = document.getElementById("Lab-Research-content");
let RNA = document.getElementById("RNA");
let RNA_transfer = document.getElementById("RNA-transfer");
let Quarks_tab = document.getElementById("Quarks-tab");
let Quarks_content = document.getElementById("Quarks-content");
let Up_Quark = document.getElementById("up-Quark")
let Down_Quark = document.getElementById("Down-Quark")
let Atoms_tab = document.getElementById("Atoms-tab");
let Atoms_content = document.getElementById("Atoms-content");
let Molecules_tab = document.getElementById("Molecules-tab");
let Molecules_content = document.getElementById("Molecules-content");
let Proton = document.getElementById("Proton");
let Proton_boost = document.getElementById("Proton-boost");
let Proton_boost1 = document.getElementById("Proton-boost1");
let ProtonPerSec = document.getElementById("ProtonPerSec");
let Neutron = document.getElementById("Neutron");
let Neutron_boost = document.getElementById("Neutron-boost");
let Neutron_boost1 = document.getElementById("Neutron-boost1");
let NeutronPerSec = document.getElementById("NeutronPerSec");
let Electron = document.getElementById("Electron");
let Electron_boost = document.getElementById("Electron-boost");
let Electron_boost1 = document.getElementById("Electron-boost1");
let ElectronPerSec = document.getElementById("ElectronPerSec");
let Dialation_tab_content = document.getElementById("Time-dialation-content");
let Softcaps_styles = document.getElementById("Softcaps-styles");
let Softcaps_content = document.getElementById("Softcaps-content");
let Lore_content = document.getElementById("Lore");
let Chapter_I_Lore = document.getElementById("Chapter-I-lore")

function OpenBH() {
    BH_content.classList.add("show-BH-content");
    Matter_content.classList.remove("show-Matter-content");
    Tickspeed2.classList.remove("show-Tickspeed");
    Tickspeed_cost.classList.remove("show-Tickspeed-cost");
    Quarks_tab.classList.remove("show-Quarks-tab");
    Quarks_content.classList.remove("show-Quarks-content"); 
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Molecules_content.classList.remove("show-Molecules-content");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
}

function OpenMC() {
    Matter_content.classList.add("show-Matter-content");
    BH_content.classList.remove("show-BH-content");
    if(SoulsUpgrade_3.bought === false) {
        Tickspeed2.classList.remove("show-Tickspeed");
        Tickspeed_cost.classList.remove("show-Tickspeed-cost");
    }
    if(SoulsUpgrade_3.bought === true) {
        Tickspeed2.classList.add("show-Tickspeed");
        Tickspeed_cost.classList.add("show-Tickspeed-cost");
    }
    Quarks_tab.classList.remove("show-Quarks-tab");
    Quarks_content.classList.remove("show-Quarks-content"); 
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Molecules_content.classList.remove("show-Molecules-content");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
}

function OpenQuarks() {
    Quarks_tab.classList.add("show-Quarks-tab");
    Atoms_tab.classList.add("show-Atoms-tab");
    Molecules_tab.classList.add("show-Molecules-tab")
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Dialation_tab_content.classList.remove("show-Time-dialation-content")
    Radiation_content_tab.classList.remove("show-Radiation-content-tab");
    Lab_Research_tab.classList.remove("show-Lab-Research-tab")
    Lab_Research_content.classList.remove("show-Lab-Research-content")
    Radiation_content.classList.remove("show-Radiation-content")
    RNA.classList.remove("show-RNA")
    RNA_transfer.classList.remove("show-RNA-transfer")
}

function OpenQuarksContent() {
    if (Elements.el_3.bought === true) {
      Up_Quark.classList.add("show-up-Quark")
    }
    if (Elements.el_10.bought === true) {
      Down_Quark.classList.add("show-Down-Quark")
    }
    Quarks_content.classList.add("show-Quarks-content");
    Atoms_content.classList.remove("show-Atoms-content");
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Molecules_content.classList.remove("show-Molecules-content");
}

function OpenAtomsContent() {
    Atoms_content.classList.add("show-Atoms-content");
    Quarks_content.classList.remove("show-Quarks-content"); 
    Skill_tree.classList.remove("open-Skills");
    Reset.classList.remove("open-Rebirth");
    if(AtomsBoost.amount >= 1) {
        Proton.classList.add("show-Proton");
        Proton_boost.classList.add("show-Proton-boost");
        ProtonPerSec.classList.add("show-ProtonPerSec");
    }
    if(AtomsBoost.amount >= 2) {
        Neutron.classList.add("show-Neutron");
        Neutron_boost.classList.add("show-Neutron-boost");
        NeutronPerSec.classList.add("show-NeutronPerSec");
    }
    if(AtomsBoost.amount >= 3) {
        Electron.classList.add("show-Electron");
        Electron_boost.classList.add("show-Electron-boost");
        ElectronPerSec.classList.add("show-ElectronPerSec")
    }
    if(AtomsBoost.amount >= 4) {
        Proton_boost1.classList.add("show-Proton-boost1");
    }
    if(AtomsBoost.amount >= 5) {
        Neutron_boost1.classList.add("show-Neutron-boost1");
    }
    if(AtomsBoost.amount >= 6) {
        Electron_boost1.classList.add("show-Electron-boost1");
    }
    Molecules_content.classList.remove("show-Molecules-content");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
}

function OpenMoleculesContent() {
    Molecules_content.classList.add("show-Molecules-content");
    Reset.classList.remove("open-rebirth");
    Skill_tree.classList.remove("open-Skills");
    Quarks_content.classList.remove("show-Quarks-content"); 
    Atoms_content.classList.remove("show-Atoms-content");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
}

function OpenTimeDialationContent() {
    Dialation_tab_content.classList.add("show-Time-dialation-content")
    Reset.classList.remove("open-rebirth");
    Skill_tree.classList.remove("open-Skills");
    Quarks_content.classList.remove("show-Quarks-content"); 
    Atoms_content.classList.remove("show-Atoms-content");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
    Molecules_content.classList.remove("show-Molecules-content");
    Quarks_tab.classList.remove("show-Quarks-tab");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Radiation_content_tab.classList.remove("show-Radiation-content-tab"); 
    Radiation_content.classList.remove("show-Radiation-content")
    Lab_Research_tab.classList.remove("show-Lab-Research-tab")
    Lab_Research_content.classList.remove("show-Lab-Research-content")
    RNA.classList.remove("show-RNA")
    RNA_transfer.classList.remove("show-RNA-transfer")
}

function OpenRadiation() {
    Radiation_content_tab.classList.add("show-Radiation-content-tab");
    Lab_Research_tab.classList.add("show-Lab-Research-tab")
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
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
    Dialation_tab_content.classList.remove("show-Time-dialation-content")
    Molecules_content.classList.remove("show-Molecules-content");
}

function OpenDnaContent() {
    Radiation_content.classList.add("show-Radiation-content")
    Lab_Research_content.classList.remove("show-Lab-Research-content")
    if(Lab_Research.Researches >= 1) {
        RNA.classList.add("show-RNA");
        RNA_transfer.classList.add("show-RNA-transfer")
    }
}

function OpenLabResearchContent() {
    Lab_Research_content.classList.add("show-Lab-Research-content")
    Radiation_content.classList.remove("show-Radiation-content")
    RNA.classList.remove("show-RNA")
    RNA_transfer.classList.remove("show-RNA-transfer")
    if(Skill_up7.bought === true) {
        Research_up1.classList.add("show-Research-up1");
        Research_up2.classList.add("show-Research-up2");
        Research_up3.classList.add("show-Research-up3");
    }
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
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Molecules_content.classList.remove("show-Molecules-content");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
    Dialation_tab_content.classList.remove("show-Time-dialation-content")
    Radiation_content.classList.remove("show-Radiation-content")
    Radiation_content_tab.classList.remove("show-Radiation-content-tab");
    Lab_Research_tab.classList.remove("show-Lab-Research-tab")
    Lab_Research_content.classList.remove("show-Lab-Research-content")
    RNA.classList.remove("show-RNA")
    RNA_transfer.classList.remove("show-RNA-transfer")
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
    Quarks_content.classList.remove("show-Quarks-content");
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Molecules_content.classList.remove("show-Molecules-content");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
    Challenge_01.classList.remove("show-Challange1")
    Finnish_button.classList.remove("show-Finnish-button")
    Dialation_tab_content.classList.remove("show-Time-dialation-content")
    Radiation_content.classList.remove("show-Radiation-content")
    Radiation_content_tab.classList.remove("show-Radiation-content-tab");
    Lab_Research_tab.classList.remove("show-Lab-Research-tab") 
    Lab_Research_content.classList.remove("show-Lab-Research-content")
    RNA.classList.remove("show-RNA")
    RNA_transfer.classList.remove("show-RNA-transfer")
    Challenge_01.classList.remove("show-Challange1")
    Challenge_02.classList.remove("show-Challegne2")
    Stats_styles.classList.remove("show-Stats-styles")
    Stats.classList.remove("open-Stats")
    Main_stats.classList.remove("show-Main-stats")
    Chapter_I_Lore.classList.remove("show-Chapter-I-lore")
    Lore_content.classList.remove("show-Lore")
    Softcaps_styles.classList.remove("show")
    Softcaps_content.classList.remove("show")
    Sfg_stats.classList.remove("show")
    Font_content.classList.remove("show")
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
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Molecules_content.classList.remove("show-Molecules-content");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
    Challenge_01.classList.remove("show-Challange1")
    Finnish_button.classList.remove("show-Finnish-button")
    Dialation_tab_content.classList.remove("show-Time-dialation-content")
    Radiation_content.classList.remove("show-Radiation-content")
    Radiation_content_tab.classList.remove("show-Radiation-content-tab");
    Lab_Research_tab.classList.remove("show-Lab-Research-tab")
    Lab_Research_content.classList.remove("show-Lab-Research-content")
    RNA.classList.remove("show-RNA")
    RNA_transfer.classList.remove("show-RNA-transfer")
    Challenge_01.classList.remove("show-Challange1")
    Challenge_02.classList.remove("show-Challegne2")
    Stats_styles.classList.remove("show-Stats-styles")
    Stats.classList.remove("open-Stats")
    Main_stats.classList.remove("show-Main-stats")
    Chapter_I_Lore.classList.remove("show-Chapter-I-lore")
    Lore_content.classList.remove("show-Lore")
    Softcaps_styles.classList.remove("show")
    Softcaps_content.classList.remove("show")
    Sfg_stats.classList.remove("show")
    Font_content.classList.remove("show")
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
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Molecules_content.classList.remove("show-Molecules-content");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
    Challenge_01.classList.remove("show-Challange1")
    Finnish_button.classList.remove("show-Finnish-button")
    Dialation_tab_content.classList.remove("show-Time-dialation-content")
    Radiation_content.classList.remove("show-Radiation-content")
    Radiation_content_tab.classList.remove("show-Radiation-content-tab");
    Lab_Research_tab.classList.remove("show-Lab-Research-tab")
    Lab_Research_content.classList.remove("show-Lab-Research-content")
    RNA.classList.remove("show-RNA")
    RNA_transfer.classList.remove("show-RNA-transfer")
    Challenge_01.classList.remove("show-Challange1")
    Challenge_02.classList.remove("show-Challegne2")
    Stats_styles.classList.remove("show-Stats-styles")
    Stats.classList.remove("open-Stats")
    Main_stats.classList.remove("show-Main-stats")
    Chapter_I_Lore.classList.remove("show-Chapter-I-lore")
    Lore_content.classList.remove("show-Lore")
    Softcaps_styles.classList.remove("show")
    Softcaps_content.classList.remove("show")
    Sfg_stats.classList.remove("show")
    Font_content.classList.remove("show")
}

function OpenChallanges() {
    if(Skill_up5.bought === true) {
        Challenge_01.classList.add("show-Challange1")
    }
    if(SoulsUpgrade_10.bought === true) {
        Challenge_02.classList.add("show-Challenge2")
    }
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
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Molecules_content.classList.remove("show-Molecules-content");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
    Dialation_tab_content.classList.remove("show-Time-dialation-content")
    Radiation_content.classList.remove("show-Radiation-content")
    Radiation_content_tab.classList.remove("show-Radiation-content-tab");
    Lab_Research_tab.classList.remove("show-Lab-Research-tab")
    Lab_Research_content.classList.remove("show-Lab-Research-content")
    RNA.classList.remove("show-RNA")
    RNA_transfer.classList.remove("show-RNA-transfer")
    Stats_styles.classList.remove("show-Stats-styles")
    Stats.classList.remove("open-Stats")
    Main_stats.classList.remove("show-Main-stats")
    Chapter_I_Lore.classList.remove("show-Chapter-I-lore")
    Lore_content.classList.remove("show-Lore")
    Softcaps_styles.classList.remove("show")
    Softcaps_content.classList.remove("show")
    Sfg_stats.classList.remove("show")
    Font_content.classList.remove("show")
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
    Challenge_01.classList.remove("show-Challange1")
    Finnish_button.classList.remove("show-Finnish-button")
    Challenge_01.classList.remove("show-Challange1")
    Challenge_02.classList.remove("show-Challegne2") 
    Stats_styles.classList.remove("show-Stats-styles")
    Stats.classList.remove("open-Stats")
    Main_stats.classList.remove("show-Main-stats")
    Chapter_I_Lore.classList.remove("show-Chapter-I-lore")
    Lore_content.classList.remove("show-Lore")
    Softcaps_styles.classList.remove("show")
    Softcaps_content.classList.remove("show")
    Sfg_stats.classList.remove("show")
    Font_content.classList.remove("show")
}

function OpenStats() {
    Stats_styles.classList.add("show-Stats-styles")
    Stats.classList.add("open-Stats")
    Dark_Matter.classList.remove("open-Dark-matter");
    Main_styles.classList.remove("show-Main-styles");
    Upgrades_styles.classList.remove("show-Upgrades-styles");
    Achievements_styles.classList.remove("show-Achievements-styles");
    Challanges_styles.classList.remove("show-Challanges-styles");
    Dark_styles.classList.remove("show-Dark-styles");
    Options_styles.classList.remove("show-Options-styles");
    Main.classList.remove("open-Main");
    Tickspeed2.classList.remove("show-Tickspeed")
    Tickspeed_cost.classList.remove("show-Tickspeed-cost")
    Achievements.classList.remove("open-Achievements");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Challanges.classList.remove("open-Challanges");
    Options.classList.remove("open-Options");
    Matter_content.classList.remove("show-Matter-content");
    BH_tab.classList.remove("show-BH-tab");
    BH_content.classList.remove("show-BH-content");
    Chapter_I_Lore.classList.remove("show-Chapter-I-lore")
    Lore_content.classList.remove("show-Lore")
    Softcaps_styles.classList.remove("show")
    Softcaps_content.classList.remove("show")
    Font_content.classList.remove("show")
}

function OpenMainStats() {
    Main_stats.classList.add("show-Main-stats")
    Chapter_I_Lore.classList.remove("show-Chapter-I-lore")
    Lore_content.classList.remove("show-Lore")
    Sfg_stats.classList.remove("show")
}

function OpenSfgStats() {
    Sfg_stats.classList.add("show")
    Main_stats.classList.remove("show-Main-stats")
}

function OpenOptions() {
    Options.classList.add("open-Options");
    Options_styles.classList.add("show-Options-styles");
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Upgrades_styles.classList.remove("show-Upgrades-styles");
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
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Molecules_content.classList.remove("show-Molecules-content");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
    Challenge_01.classList.remove("show-Challange1")
    Finnish_button.classList.remove("show-Finnish-button")
    Dialation_tab_content.classList.remove("show-Time-dialation-content")
    Radiation_content.classList.remove("show-Radiation-content")
    Radiation_content_tab.classList.remove("show-Radiation-content-tab");
    Lab_Research_tab.classList.remove("show-Lab-Research-tab")
    Lab_Research_content.classList.remove("show-Lab-Research-content")
    RNA.classList.remove("show-RNA")
    RNA_transfer.classList.remove("show-RNA-transfer")
    Challenge_01.classList.remove("show-Challange1")
    Challenge_02.classList.remove("show-Challegne2")
    Stats_styles.classList.remove("show-Stats-styles")
    Stats.classList.remove("open-Stats")
    Main_stats.classList.remove("show-Main-stats")
    Chapter_I_Lore.classList.remove("show-Chapter-I-lore")
    Lore_content.classList.remove("show-Lore")
    Softcaps_styles.classList.remove("show")
    Softcaps_content.classList.remove("show")
    Sfg_stats.classList.remove("show")
}

function OpenSoftcaps() {
    Softcaps_styles.classList.add("show")
    Softcaps_content.classList.add("show")
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Upgrades_styles.classList.remove("show-Upgrades-styles");
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
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Molecules_content.classList.remove("show-Molecules-content");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
    Challenge_01.classList.remove("show-Challange1")
    Finnish_button.classList.remove("show-Finnish-button")
    Dialation_tab_content.classList.remove("show-Time-dialation-content")
    Radiation_content.classList.remove("show-Radiation-content")
    Radiation_content_tab.classList.remove("show-Radiation-content-tab");
    Lab_Research_tab.classList.remove("show-Lab-Research-tab")
    Lab_Research_content.classList.remove("show-Lab-Research-content")
    RNA.classList.remove("show-RNA")
    RNA_transfer.classList.remove("show-RNA-transfer")
    Challenge_01.classList.remove("show-Challange1")
    Challenge_02.classList.remove("show-Challegne2")
    Stats_styles.classList.remove("show-Stats-styles")
    Stats.classList.remove("open-Stats")
    Main_stats.classList.remove("show-Main-stats")
    Chapter_I_Lore.classList.remove("show-Chapter-I-lore")
    Lore_content.classList.remove("show-Lore")
    Options.classList.remove("open-Options");
    Options_styles.classList.remove("show-Options-styles");
    Sfg_stats.classList.remove("show")
    Font_content.classList.remove("show")
}

function OpenLoreContent() {
    Lore_content.classList.add("show-Lore")
    Main.classList.remove("open-Main");
    Upgrades_container.classList.remove("open-Upgrades-container");
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
    Quarks_content.classList.remove("show-Quarks-content");
    Atoms_content.classList.remove("show-Atoms-content");
    Atoms_tab.classList.remove("show-Atoms-tab");
    Proton.classList.remove("show-Proton");
    Proton_boost.classList.remove("show-Proton-boost");
    Neutron.classList.remove("show-Neutron");
    Neutron_boost.classList.remove("show-Neutron-boost");
    Electron.classList.remove("show-Electron");
    Electron_boost.classList.remove("show-Electron-boost");
    ProtonPerSec.classList.remove("show-ProtonPerSec");
    NeutronPerSec.classList.remove("show-NeutronPerSec");
    ElectronPerSec.classList.remove("show-ElectronPerSec");
    Proton_boost1.classList.remove("show-Proton-boost1");
    Neutron_boost1.classList.remove("show-Neutron-boost1");
    Electron_boost1.classList.remove("show-Electron-boost1");
    Molecules_content.classList.remove("show-Molecules-content");
    Molecules_tab.classList.remove("show-Molecules-tab");
    Up_Quark.classList.remove("show-up-Quark")
    Down_Quark.classList.remove("show-Down-Quark")
    Challenge_01.classList.remove("show-Challange1")
    Finnish_button.classList.remove("show-Finnish-button")
    Dialation_tab_content.classList.remove("show-Time-dialation-content")
    Radiation_content.classList.remove("show-Radiation-content")
    Radiation_content_tab.classList.remove("show-Radiation-content-tab");
    Lab_Research_tab.classList.remove("show-Lab-Research-tab") 
    Lab_Research_content.classList.remove("show-Lab-Research-content")
    RNA.classList.remove("show-RNA")
    RNA_transfer.classList.remove("show-RNA-transfer")
    Challenge_01.classList.remove("show-Challange1")
    Challenge_02.classList.remove("show-Challegne2")
    Stats_styles.classList.remove("show-Stats-styles")
    Stats.classList.remove("open-Stats")
    Main_stats.classList.remove("show-Main-stats")
    Softcaps_styles.classList.remove("show")
    Softcaps_content.classList.remove("show")
    Sfg_stats.classList.remove("show")
    Font_content.classList.remove("show")
}

function OpenChapterILore() {
    Chapter_I_Lore.classList.add("show-Chapter-I-lore")
}

function OpenFontContent() {
    Font_content.classList.add("show")
}

function CloseFontContent() {
    Font_content.classList.remove("show")
}