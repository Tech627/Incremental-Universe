function Save() {
    if(localStorage) {
        localStorage.setItem("Matter", JSON.stringify(player.Matter));
        localStorage.setItem("MatterPerSec", JSON.stringify(player.MatterPerSec));
        localStorage.setItem("Achievement1", JSON.stringify(Achievement_1));
        localStorage.setItem("Achievement2", JSON.stringify(Achievement_2));
        localStorage.setItem("Challange1", JSON.stringify(Challange_1));
        localStorage.setItem("Souls", JSON.stringify(player.Souls));
        localStorage.setItem("Souls-Gain", JSON.stringify(player.SoulsGain));
        localStorage.setItem("Matter-generator-cost", JSON.stringify(MatterGenerator_1.cost));
        localStorage.setItem("Matter-generator-amount", JSON.stringify(MatterGenerator_1.amount));
        localStorage.setItem("Matter-boost-cost", JSON.stringify(MatterBoost_1.cost));
        localStorage.setItem("Matter-boost-amount", JSON.stringify(MatterBoost_1.amount));
        localStorage.setItem("Matter-extent-cost", JSON.stringify(MatterExtent_1.cost));
        localStorage.setItem("Matter-extent-amount", JSON.stringify(MatterExtent_1.amount));
        localStorage.setItem("Tickspeed-cost", JSON.stringify(Tickspeed1.cost));
        localStorage.setItem("Tickspeed-amount", JSON.stringify(Tickspeed1.amount));
        localStorage.setItem("Soul-Upgrade1", JSON.stringify(SoulsUpgrade_1));
        localStorage.setItem("Soul-Upgrade2", JSON.stringify(SoulsUpgrade_2));
        localStorage.setItem("Soul-Upgrade3", JSON.stringify(SoulsUpgrade_3));
        localStorage.setItem("Soul-Upgrade4", JSON.stringify(SoulsUpgrade_4));
        localStorage.setItem("Soul-Upgrade5", JSON.stringify(SoulsUpgrade_5));
        localStorage.setItem("Soul-Upgrade6", JSON.stringify(SoulsUpgrade_6));
        localStorage.setItem("Soul-Upgrade7", JSON.stringify(SoulsUpgrade_7));
        localStorage.setItem("Soul-Upgrade8", JSON.stringify(SoulsUpgrade_8));
        localStorage.setItem("Soul-Upgrade9", JSON.stringify(SoulsUpgrade_9));
        localStorage.setItem("Soul-Upgrade10", JSON.stringify(SoulsUpgrade_10));
        localStorage.setItem("Skill-1", JSON.stringify(Skill_up1));
        localStorage.setItem("Skill-2", JSON.stringify(Skill_up2));
        localStorage.setItem("Skill-3", JSON.stringify(Skill_up3));
        localStorage.setItem("Skill-4", JSON.stringify(Skill_up4));
        localStorage.setItem("Skill-5", JSON.stringify(Skill_up5));
        localStorage.setItem("Black-Hole", JSON.stringify(player.Black_Hole));
        localStorage.setItem("Black-Hole-gain", JSON.stringify(player.Black_HolePerSec));
        localStorage.setItem("Black-Hole-machine", JSON.stringify(Black_HoleMachine));
        localStorage.setItem("Black-Hole-extractor", JSON.stringify(player.Black_HoleExtractor));
        localStorage.setItem("Black-Hole-boost", JSON.stringify(player.Black_Holeboost));
        localStorage.setItem("BlackHole-Upgrade1", JSON.stringify(BlackHoleUpgrade_1));
        localStorage.setItem("BlackHole-Upgrade2", JSON.stringify(BlackHoleUpgrade_2));
        localStorage.setItem("BlackHole-Upgrade3", JSON.stringify(BlackHoleUpgrade_3));
        localStorage.setItem("BlackHole-Upgrade4", JSON.stringify(BlackHoleUpgrade_4));
        localStorage.setItem("BlackHole-Upgrade5", JSON.stringify(BlackHoleUpgrade_5));
        localStorage.setItem("BlackHole-Upgrade6", JSON.stringify(BlackHoleUpgrade_6));
        localStorage.setItem("BlackHole-Upgrade7", JSON.stringify(BlackHoleUpgrade_7));
        localStorage.setItem("Quarks", JSON.stringify(player.Quarks));
        localStorage.setItem("Atoms", JSON.stringify(player.Atoms));
        localStorage.setItem("U-quark", JSON.stringify(UQuark_1))
    }
    alert("When Page is reloaded or refreshed It will say you have 0 everything, but you will have to click on something to show It's value!!")
}

function Get() {
    if (localStorage) {
        const SavedMatter = localStorage.getItem("Matter");
        const SavedMatterPerSec = localStorage.getItem("MatterPerSec");
        const SavedSouls = localStorage.getItem("Souls");
        const SavedSoulsGain = localStorage.getItem("Souls-Gain");
        const SavedTickspeed_cost = localStorage.getItem("Tickspeed-cost");
        const SavedTickspeed_amount = localStorage.getItem("Tickspeed-amount");
        const SavedDark_Matter_currency = localStorage.getItem("Dark-matter-currency");
        const SavedMatterGenerator_cost = localStorage.getItem("Matter-generator-cost");
        const SavedMatterGenerator_amount = localStorage.getItem("Matter-generator-amount");
        const SavedMatterBoost_cost = localStorage.getItem("Matter-boost-cost");
        const SavedMatterBoost_amount = localStorage.getItem("Matter-boost-amount");
        const SavedMatterExtent_cost = localStorage.getItem("Matter-extent-cost");
        const SavedMatterExtent_amount = localStorage.getItem("Matter-extent-amount");
        const SavedSoulUpgrade1 = localStorage.getItem("Soul-Upgrade1");
        const SavedSoulUpgrade2 = localStorage.getItem("Soul-Upgrade2");
        const SavedSoulUpgrade3 = localStorage.getItem("Soul-Upgrade3");
        const SavedSoulUpgrade4 = localStorage.getItem("Soul-Upgrade4");
        const SavedSoulUpgrade5 = localStorage.getItem("Soul-Upgrade5");
        const SavedSoulUpgrade6 = localStorage.getItem("Soul-Upgrade6");
        const SavedSoulUpgrade7 = localStorage.getItem("Soul-Upgrade7");
        const SavedSoulUpgrade8 = localStorage.getItem("Soul-Upgrade8");
        const SavedSoulUpgrade9 = localStorage.getItem("Soul-Upgrade9");
        const SavedSoulUpgrade10 = localStorage.getItem("Soul-Upgrade10");
        const SavedSkill_up1 = localStorage.getItem("Skill-1");
        const SavedSkill_up2 = localStorage.getItem("Skill-2");
        const SavedSkill_up3 = localStorage.getItem("Skill-3");
        const SavedSkill_up4 = localStorage.getItem("Skill-4");
        const SavedSkill_up5 = localStorage.getItem("Skill-5");
        const SavedBlack_Hole = localStorage.getItem("Black-Hole");
        const SavedBlack_Holegain = localStorage.getItem("Black-Hole-gain");
        const SavedBlack_HoleMachine = localStorage.getItem("Black-Hole-machine");
        const SavedBlack_HoleExtractor = localStorage.getItem("Black-Hole-extractor");
        const SavedBlack_Holeboost = localStorage.getItem("Black-Hole-boost")
        const SavedBlackHole_Upgrade1 = localStorage.getItem("BlackHole-Upgrade1");
        const SavedBlackHole_Upgrade2 = localStorage.getItem("BlackHole-Upgrade2");
        const SavedBlackHole_Upgrade3 = localStorage.getItem("BlackHole-Upgrade3");
        const SavedBlackHole_Upgrade4 = localStorage.getItem("BlackHole-Upgrade4");
        const SavedBlackHole_Upgrade5 = localStorage.getItem("BlackHole-Upgrade5");
        const SavedBlackHole_Upgrade6 = localStorage.getItem("BlackHole-Upgrade6");
        const SavedBlackHole_Upgrade7 = localStorage.getItem("BlackHole-Upgrade7");
        const SavedQuarks = localStorage.getItem("Quarks");
        const SavedAtoms = localStorage.getItem("Atoms");
        const SavedUQuark = localStorage.getItem("UQuark_1");
        if(SavedMatter) {
            player.Matter = new Decimal(JSON.parse(SavedMatter));
        } 
        if(SavedMatterPerSec) {
            player.MatterPerSec = new Decimal(JSON.parse(SavedMatterPerSec));
        }
        if(SavedSouls) {
            player.Souls = new Decimal(JSON.parse(SavedSouls));
        }
        if(SavedSoulsGain) {
            player.SoulsGain = new Decimal(JSON.parse(SavedSoulsGain));
        }
        if(SavedDark_Matter_currency) {
            player.Dark_Matter_currency = new Decimal(JSON.parse(SavedDark_Matter_currency));
        }
        if(SavedMatterGenerator_cost) {
            MatterGenerator_1.cost = new Decimal(JSON.parse(SavedMatterGenerator_cost));
        }
        if(SavedMatterGenerator_amount) {
            MatterGenerator_1.amount = new Decimal(JSON.parse(SavedMatterGenerator_amount));
        }
        if(SavedMatterBoost_cost) {
            MatterBoost_1.cost = new Decimal(JSON.parse(SavedMatterBoost_cost));
        }
        if(SavedMatterBoost_amount) {
            MatterBoost_1.amount = new Decimal(JSON.parse(SavedMatterBoost_amount));
        }
        if(SavedMatterExtent_cost) {
            MatterExtent_1.cost = new Decimal(JSON.parse(SavedMatterExtent_cost));
        }
        if(SavedMatterExtent_amount) {
            MatterExtent_1.amount = new Decimal(JSON.parse(SavedMatterExtent_amount));
        }
        if(SavedTickspeed_cost) {
            Tickspeed1_cost = new Decimal(JSON.parse(SavedTickspeed_cost));
        }
        if(SavedTickspeed_amount) {
            Tickspeed1_amount = new Decimal(JSON.parse(SavedTickspeed_amount));
        }
        if(SavedSoulUpgrade1) {
            SoulsUpgrade_1 = JSON.parse(SavedSoulUpgrade1);
        }
        if(SavedSoulUpgrade2) {
            SoulsUpgrade_2 = JSON.parse(SavedSoulUpgrade2);
        }
        if(SavedSoulUpgrade3) {
            SoulsUpgrade_3 = JSON.parse(SavedSoulUpgrade3);
        }
        if(SavedSoulUpgrade4) {
            SoulsUpgrade_4 = JSON.parse(SavedSoulUpgrade4);
        }
        if(SavedSoulUpgrade5) {
            SoulsUpgrade_5 = JSON.parse(SavedSoulUpgrade5);
        }
        if(SavedSoulUpgrade6) {
            SoulsUpgrade_6 = JSON.parse(SavedSoulUpgrade6);
        }
        if(SavedSoulUpgrade7) {
            SoulsUpgrade_7 = JSON.parse(SavedSoulUpgrade7);
        }
        if(SavedSoulUpgrade8) {
            SoulsUpgrade_8 = JSON.parse(SavedSoulUpgrade8);
        }    
        if(SavedSoulUpgrade9) {
            SoulsUpgrade_9 = JSON.parse(SavedSoulUpgrade9);
        }
        if(SavedSoulUpgrade10) {
            SoulsUpgrade_10 = JSON.parse(SavedSoulUpgrade10);
        }
        if(SavedSkill_up1) {
            Skill_up1 = JSON.parse(SavedSkill_up1);
        }
        if(SavedSkill_up2) {
            Skill_up2 = JSON.parse(SavedSkill_up2);
        }
        if(SavedSkill_up3) {
            Skill_up3 = JSON.parse(SavedSkill_up3);
        }
        if(SavedSkill_up4) {
            Skill_up4 = JSON.parse(SavedSkill_up4);
        }
        if(SavedSkill_up5) {
            Skill_up5 = JSON.parse(SavedSkill_up5);
        }
        if(SavedBlack_Hole) {
            player.Black_Hole = new Decimal(JSON.parse(SavedBlack_Hole));
        }
        if(SavedBlack_Holegain) {
            player.Black_HolePerSec = new Decimal(JSON.parse(SavedBlack_Holegain));
        }
        if(SavedBlack_HoleMachine) {
            Black_HoleMachine = new Decimal(JSON.parse(SavedBlack_HoleMachine));
        }
        if(SavedBlack_HoleExtractor) {
            player.Black_HoleExtractor = new Decimal(JSON.parse(SavedBlack_HoleExtractor));
        }
        if(SavedBlack_Holeboost) {
            player.Black_Holeboost = new Decimal(JSON.parse(SavedBlack_Holeboost));
        }
        if(SavedBlackHole_Upgrade1) {
            BlackHoleUpgrade_1 = JSON.parse(SavedBlackHole_Upgrade1);
        }
        if(SavedBlackHole_Upgrade2) {
            BlackHoleUpgrade_2 = JSON.parse(SavedBlackHole_Upgrade2);
        }
        if(SavedBlackHole_Upgrade3) {
            BlackHoleUpgrade_3 = JSON.parse(SavedBlackHole_Upgrade3);
        }
        if(SavedBlackHole_Upgrade4) {
            BlackHoleUpgrade_4 = JSON.parse(SavedBlackHole_Upgrade4);
        }
        if(SavedBlackHole_Upgrade5) {
            BlackHoleUpgrade_5 = JSON.parse(SavedBlackHole_Upgrade5);
        }
        if(SavedBlackHole_Upgrade6) {
            BlackHoleUpgrade_6 = JSON.parse(SavedBlackHole_Upgrade6);
        }
        if(SavedBlackHole_Upgrade7) {
            BlackHoleUpgrade_7 = JSON.parse(SavedBlackHole_Upgrade7);
        }
        if(SavedQuarks) {
            player.Quarks = new Decimal(JSON.parse(SavedQuarks));
        }
        if(SavedAtoms) {
            player.Atoms = new Decimal(JSON.parse(SavedAtoms));
        }
        if(SavedUQuark) {
            UQuark_1 = JSON.parse(SavedUQuark);
        }
     } 
}
function HardReset() {
player.Matter = new Decimal(10)
player.MatterPerSec = new Decimal(1)
player.Souls = new Decimal(0)
player.SoulsToGet = new Decimal(0)
player.SoulsPower = new Decimal(0)
player.SoulsPowerBoost = new Decimal(0)
player.Dark_Matter_currency = new Decimal(0)
player.Dark_MatterToGet = new Decimal(0)
player.Atoms = new Decimal(0)
player.Quarks = new Decimal(0)
MatterGenerator_1.cost = new Decimal(10)
MatterGenerator_1.amount = new Decimal(0)
MatterBoost_1.cost = new Decimal(100)
MatterBoost_1.amount = new Decimal(0)
MatterExtent_1.cost = new Decimal(1000)
MatterExtent_1.amount = new Decimal(0)
Tickspeed1.cost = new Decimal(1)
Tickspeed1.amount = new Decimal(0)
player.Proton_1 = new Decimal(0)
player.ProtonPerSec_1 = new Decimal(0)
player.Proton_boost2 = new Decimal(0)
player.Neutron_1 = new Decimal(0)
player.NeutronPerSec_1 = new Decimal(0)
player.Neutron_boost2 = new Decimal(0)
player.Electron_1 = new Decimal(0)
player.ElectronPerSec_1 = new Decimal(0)
player.Electron_boost2 = new Decimal(0)
player.Black_Hole = new Decimal(0)
player.Black_HolePerSec = new Decimal(0)
player.Black_Holeboost = new Decimal(0)
player.Black_HoleExtractor = new Decimal(0)
DialationPoints = new Decimal(0)
DialationPerSec = new Decimal(0)
Radiation.DNAPerSec = new Decimal(0)
Radiation.DNA_points = new Decimal(0)
Radiation.InRadiation = false
Radiation.RNA = new Decimal(0)
Lab_Research.Researches = new Decimal(0)
Lab_Research.cost = new Decimal(0)
Dialations_ups.Dialation_up1.cost = new Decimal(1e6)
Dialations_ups.Dialation_up1.level = new Decimal(0)
Dialations_ups.Dialation_up2.cost = new Decimal(1e12)
Dialations_ups.Dialation_up2.level = new Decimal(0)
Dialations_ups.Dialation_up3.cost = new Decimal(1e20)
Dialations_ups.Dialation_up3.level = new Decimal(0)
Dialations_ups.Dialation_up4.cost = new Decimal(1e35)
Dialations_ups.Dialation_up4.level = new Decimal(0)
Dialations.MatterDialation.inDialation = false
}