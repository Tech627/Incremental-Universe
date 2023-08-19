var Matter = 10;
var MatterPerSec = 1;
var MatterGenerator_1 = 0;
var Souls = 0;
var SoulsToGet = 0;
var SoulsGain = 0;
var Dark_Matter_currency = 0;
var Dark_MatterToGet = 0;
var Black_Hole = 0;
var Black_HolePerSec = 0;
var Black_Holeboost = 1;
var Black_HoleExtractor = 0;
var Quarks = 0;
var QuarkToGet = 0;
var Atoms = 0;
var AtomsToGet = 0;
let Challange_1 = document.getElementById("Challange1");
let Achievement_1 = document.getElementById("Achievement1");
let Achievement_2 = document.getElementById("Achievement2");
let Finnish_button = document.getElementById("Finnish-button");
let Sacrifice_Prestige = document.getElementById("SacrificePrestige");
let Dark_Matter_button = document.getElementById("Dark-matter-button");
let Tickspeed2 = document.getElementById("Tickspeed")
let Tickspeed_cost = document.getElementById("Tickspeed-cost");
let BH_tab = document.getElementById("BH-tab");

// Matter tab

   var MatterGenerator_1 = {
      cost: 10,
      power: 1,
      amount: 0,
   }

   var MatterBoost_1 = {
    cost: 100,
    power: 1,
    amount: 0,
   }

   var MatterExtent_1 = {
    cost: 1000,
    power: 1,
    amount: 0,
   }

   var Tickspeed1 = {
    cost: 1,
    power: 1,
    amount: 0,
   }

// BH-tab

   var Black_HoleMachine = {
    cost: 1,
    power: 0,
    amount: 0,
   }

// Souls Upgrades

   var SoulsUpgrade_1 = {
    cost: 1,
    bought: false,
   }

   var SoulsUpgrade_2 = {
    cost: 10,
    bought: false,
   }

   var SoulsUpgrade_3 = {
    cost: 20,
    bought: false,
   }

   var SoulsUpgrade_4 = {
    cost: 250,
    bought: false,
   }

   var SoulsUpgrade_5 = {
    cost: 1e3,
    bought: false,
   }

   var SoulsUpgrade_6 = {
    cost: 5e3,
    bought: false,
   }

   var SoulsUpgrade_7 = {
    cost: 1e5,
    bought: false,
   }

// Black Hole Upgrades

   var BlackHoleUpgrade_1 = {
    cost: 10,
    bought: false,
   }

   var BlackHoleUpgrade_2 = {
    cost: 100,
    bought: false,
   }

//Achievements 

    var Achievement1 = {
        requirment: 100,
    }

    var Achievement2 = {
        requirment: 1,
    }

function format(amount) {
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    if (power < 3) return amount.toFixed(2)
    return mantissa.toFixed(2) + "e" + power    
}

// Matter tab

function MatterGenerator() {
    if(Matter >= MatterGenerator_1.cost) {
        if(BlackHoleUpgrade_1.bought = false) {
            Matter -= MatterGenerator_1.cost;
        }
        if(BlackHoleUpgrade_1.bought = true) {
            Matter -= 0;
        }
        MatterPerSec = MatterGenerator_1.power;
        MatterGenerator_1.cost *= 1.5;
        MatterGenerator_1.power++;
        MatterGenerator_1.amount++;
        document.getElementById("Matter-generator").textContent = "Matter Generator [ " + MatterGenerator_1.amount + " ]";
        document.getElementById("Matter-generator-cost").textContent = "Cost: " + format(MatterGenerator_1.cost);
        document.getElementById("MatterPerSec").textContent = format(MatterPerSec) + " Matter/sec";
        setInterval(function() {
            Matter += MatterPerSec;
            document.getElementById("Matter").textContent = "Matter: " + format(Matter);
        }, 1000);
    }
    if(SoulsUpgrade_1.bought == true) {
        MatterGenerator_1.power += 0.5;
    }
    if(SoulsUpgrade_4.bought == true) {
      MatterPerSec *= Souls / 100;
    }
    if(Skill_up1.bought == true) {
        MatterPerSec ** 1.1;
    }
}

function MatterBoost() {
    if(Matter >= MatterBoost_1.cost) {
        if(BlackHoleUpgrade_1.bought = false) {
            Matter -= MatterBoost_1.cost;
        }
        if(BlackHoleUpgrade_1.bought = true) {
            Matter -= 0;
        }
        MatterPerSec += MatterBoost_1.power + MatterBoost_1.amount;
        MatterBoost_1.cost *= 4;
        MatterBoost_1.power++;
        MatterBoost_1.amount++;
        document.getElementById("Matter-boost").textContent = "Matter Boost [ " + MatterBoost_1.amount + " ]";
        document.getElementById("Matter-boost-cost").textContent = "Cost: " + format(MatterBoost_1.cost);
        document.getElementById("MatterPerSec").textContent = format(MatterPerSec) + " Matter/sec";
    }
    if(SoulsUpgrade_4.bought == true) {
        MatterPerSec *= Souls / 2000;
      }
}

function MatterExtent() {
    if(Matter >= MatterExtent_1.cost) {
        if(BlackHoleUpgrade_1.bought = false) {
            Matter -= MatterExtent_1.cost;
        }
        if(BlackHoleUpgrade_1.bought = true) {
            Matter -= 0;
        }
        MatterPerSec += MatterExtent_1.power + MatterExtent_1.amount; 
        MatterExtent_1.cost *= 9;
        MatterExtent_1.power++;
        MatterExtent_1.amount++;
        document.getElementById("Matter-extent").textContent = "Matter Extent [ " + MatterExtent_1.amount + " ]"
        document.getElementById("Matter-extent-cost").textContent = "Cost: " + format(MatterExtent_1.cost);
        document.getElementById("MatterPerSec").textContent = format(MatterPerSec) + " Matter/sec";
    }
    if(SoulsUpgrade_4.bought == true) {
        MatterPerSec *= Souls / 1e7;
    }
    if(SoulsUpgrade_5.bought == true) {
       MatterExtent_1.power *= Matter / 1e10;
    }
    if(SoulsUpgrade_6.bought == true) {
        MatterExtent_1.power += 1;
    }
    if(Skill_up4.bought == true) {
        Black_Holeboost *= MatterExtent_1.power / 15;
    }
}

function Tickspeed() {
    if(Souls >= Tickspeed1.cost) {
        Souls -= Tickspeed1.cost;
        MatterPerSec *= Tickspeed1.power;
        Tickspeed1.cost *= 2;
        Tickspeed1.power++;
        Tickspeed1.amount++;
        document.getElementById("Tickspeed").textContent = "Tickspeed [" + Tickspeed1.amount + "]";
        document.getElementById("Tickspeed-cost").textContent = "Cost: " + format(Tickspeed1.cost) + " Souls";
        document.getElementById("MatterPerSec").textContent = format(MatterPerSec) + " Matter/sec";
    }
    if(SoulsUpgrade_7.bought == true) {
        Tickspeed1.power *= Souls / 1e6;
    }
}

// BH-tab 

function BlackHoleExtractor() {
    if (Dark_Matter_currency >= Black_HoleMachine.cost) {
        Dark_Matter_currency -= Black_HoleMachine.cost;
        Black_HoleMachine.cost *= 2;
        Black_HoleMachine.power++;
        Black_HoleMachine.amount++;
        Black_HoleExtractor++;
        Black_HolePerSec += Black_HoleMachine.power;
        Black_Holeboost += Black_Hole * Black_HoleMachine.power;
        document.getElementById("Black-Hole-gain").textContent = "(" + format(Black_HolePerSec) + " Black Holes formed/sec)";
        document.getElementById("BH-extractor").textContent = "Black Hole Extractor [" + Black_HoleExtractor + "]";
        document.getElementById("Black-Hole-boost").textContent = "Currently: " + format(Black_Holeboost) + " boost to Matter Gain";
        setInterval(function () {
            Black_Hole += Black_HolePerSec;
            document.getElementById("Black-Hole").textContent = "You have formed " + format(Black_Hole) + " Black Holes";
        }, 1000);
        setInterval(function() {
            Matter += Black_Holeboost;
        }, 1000);
        if(BlackHoleUpgrade_2.bought = true) {
            Black_HolePerSec *= Matter
        }
    }
}

// Souls-Upgrade

function SoulsUpgrade1() {
    if(Souls >= SoulsUpgrade_1.cost) {
        Souls -= SoulsUpgrade_1.cost;
        SoulsUpgrade_1.bought = true;
        MatterGenerator_1.cost = 10;
        MatterGenerator_1.power = 1;
        MatterGenerator_1.amount = 0;
        MatterBoost_1.cost = 100;
        MatterBoost_1.power = 1;
        MatterBoost_1.amount = 0;
        MatterExtent_1.cost = 1e3;
        MatterExtent_1.power = 1;
        MatterExtent_1.amount = 0;
    }
}

function SoulsUpgrade2() {
    if(Souls >= SoulsUpgrade_2.cost) {
        Souls -= SoulsUpgrade_2.cost;
        SoulsUpgrade_2.bought = true;
        MatterGenerator_1.cost = 10;
        MatterGenerator_1.power = 1;
        MatterGenerator_1.amount = 0;
        MatterBoost_1.cost = 100;
        MatterBoost_1.power = 1;
        MatterBoost_1.amount = 0;
        MatterExtent_1.cost = 1e3;
        MatterExtent_1.power = 1;
        MatterExtent_1.amount = 0;        
    }
}

function SoulsUpgrade3() {
    if(Souls >= SoulsUpgrade_3.cost) {
        Souls -= SoulsUpgrade_3.cost;
        SoulsUpgrade_3.bought = true;
        MatterGenerator_1.cost = 10;
        MatterGenerator_1.power = 1;
        MatterGenerator_1.amount = 0;
        MatterBoost_1.cost = 100;
        MatterBoost_1.power = 1;
        MatterBoost_1.amount = 0;
        MatterExtent_1.cost = 1e3;
        MatterExtent_1.power = 1;
        MatterExtent_1.amount = 0;  
        Tickspeed2.classList.add("show-Tickspeed");
        Tickspeed_cost.classList.add("show-Tickspeed-cost");
    }
}

function SoulsUpgrade4() {
    if(Souls >= SoulsUpgrade_4.cost) {
        Souls -= SoulsUpgrade_4.cost;
        SoulsUpgrade_4.bought = true;
        MatterGenerator_1.cost = 10;
        MatterGenerator_1.power = 1;
        MatterGenerator_1.amount = 0;
        MatterBoost_1.cost = 100;
        MatterBoost_1.power = 1;
        MatterBoost_1.amount = 0;
        MatterExtent_1.cost = 1e3;
        MatterExtent_1.power = 1;
        MatterExtent_1.amount = 0;  
    }
}

function SoulsUpgrade5() {
    if(Souls >= SoulsUpgrade_5.cost) {
        Souls -= SoulsUpgrade_5.cost;
        SoulsUpgrade_5.bought = true;
        MatterGenerator_1.cost = 10;
        MatterGenerator_1.power = 1;
        MatterGenerator_1.amount = 0;
        MatterBoost_1.cost = 100;
        MatterBoost_1.power = 1;
        MatterBoost_1.amount = 0;
        MatterExtent_1.cost = 1e3;
        MatterExtent_1.power = 1;
        MatterExtent_1.amount = 0;  
    }
}

function SoulsUpgrade6() {
    if(Souls >= SoulsUpgrade_6.cost) {
        Souls -= SoulsUpgrade_6.cost;
        SoulsUpgrade_6.bought = true;
        MatterGenerator_1.cost = 10;
        MatterGenerator_1.power = 1;
        MatterGenerator_1.amount = 0;
        MatterBoost_1.cost = 100;
        MatterBoost_1.power = 1;
        MatterBoost_1.amount = 0;
        MatterExtent_1.cost = 1e3;
        MatterExtent_1.power = 1;
        MatterExtent_1.amount = 0;  
    }
}

function SoulsUpgrade7() {
    if(Souls >= SoulsUpgrade_7.cost) {
        Souls -= SoulsUpgrade_7.cost;
        SoulsUpgrade_7.bought = true;
        MatterGenerator_1.cost = 10;
        MatterGenerator_1.power = 1;
        MatterGenerator_1.amount = 0;
        MatterBoost_1.cost = 100;
        MatterBoost_1.power = 1;
        MatterBoost_1.amount = 0;
        MatterExtent_1.cost = 1e3;
        MatterExtent_1.power = 1;
        MatterExtent_1.amount = 0;  
    }
}

// Black Hole Upgrades 

function BlackHoleUpgrade1() {
    if(Black_Hole >= BlackHoleUpgrade_1.cost) {
        Black_Hole -= BlackHoleUpgrade_1.cost;
        BlackHoleUpgrade_1.bought = true;
    }
}

function BlackHoleUpgrade2() {
    if(Black_Hole >= BlackHoleUpgrade_2.cost) {
        Black_Hole -= BlackHoleUpgrade_2.cost;
        BlackHoleUpgrade_2.bought = true;
    }
}


//Sacrifice Prestige

function SacrificePrestige() {
    if( Matter >= 1e4 ) {
        Souls += Math.sqrt(Matter / 10000);
        SoulsToGet += Math.sqrt(Matter / 10000)
        SoulsGain += Math.sqrt(Souls / 5) + 1;
        Matter -= Matter;
        Matter = 10;
        MatterPerSec = 0;
        MatterGenerator_1.amount = 0;
        MatterBoost_1.amount = 0;
        MatterExtent_1.amount = 0;
        MatterGenerator_1.cost = 10;
        MatterBoost_1.cost = 100;
        MatterExtent_1.cost = 1000;
        MatterGenerator_1.power = 1;
        MatterBoost_1.power = 1;
        MatterExtent_1.power = 1;
        document.getElementById("Souls").textContent = "Souls: " + format(Souls);
        document.getElementById("Souls-Gain").textContent = "(+" + format(SoulsGain) + ")";            
    }
    if( SoulsUpgrade_2.bought = true) {
        Souls += Math.sqrt(Matter / 3333);
    }
}

// Dark matter Prestige

function DarkMatterPrestige() {
    if( Souls >= 1e4 ) {
        Dark_Matter_currency += Math.sqrt(Souls / 0.01);
        Dark_MatterToGet += Math.sqrt(Souls / 0.01);
        Matter -= Matter;
        Matter = 100;
        MatterGenerator_1.amount = 0;
        MatterBoost_1.amount = 0;
        MatterExtent_1.amount = 0;
        MatterGenerator_1.power = 1;
        MatterBoost_1.power = 1;
        MatterExtent_1.power = 1;
        MatterGenerator_1.cost = 10;
        MatterBoost_1.cost = 100;
        MatterExtent_1.cost = 1e3;
        Souls -= Souls;
        MatterPerSec -= MatterPerSec;
        setInterval(function() {
            document.getElementById("Dark-matter-currency").textContent = "Dark Matter: " + format(Dark_MatterToGet);
        })
    }
}

// Skill-upgrades

let Skill_up1 = {
    cost: 1,
    bought: false,
}

let Skill_up2 = {
    cost: 5,
    bought: false,
}

let Skill_up3 = {
    cost: 1e5,
    bought: false,
}

let Skill_up4 = {
    cost: 1e12,
    bought: false,
}

let Skill_up5 = {
    cost: 1e3,
    bought: false,
}

function Skill1() {
    if ( Dark_Matter_currency >= 1) {
        Dark_Matter_currency -= Skill_up1.cost;
        Skill_up1.bought = true;
    }
}

function Skill2() {
    if ( Dark_Matter_currency >= 5) {
        Dark_Matter_currency -= Skill_up2.cost;
        Skill_up2.bought = true;
        BH_tab.classList.add("show-BH-tab");
    }
}

function Skill3() {
    if ( Black_Hole >= Skill_up3.cost ) {
        Black_Hole -= Skill_up3.cost;
        Skill_up3.bought = true;
    }
}

function Skill4() {
    if (Black_Hole >= Skill_up4.cost ) {
        Black_Hole -= Skill_up4.cost;
        Skill_up4.bought = true;
    }
}

function Skill5() {
    if (Dark_Matter_currency >= Skill_up5.cost ) {
        Dark_Matter_currency -= Skill_up5.cost;
        Skill_up5.bought = true;
    }
}

// Quarks-tab

function QuarksGain() {
    if(Black_Hole >= 5e6) {
       Quarks += Math.sqrt(Black_Hole / 5e6);
       document.getElementById("Quarks-currency").textContent = "You have developed " + format(Quarks) + " Quarks";
    }
}

// Atoms-tab

var AtomsBoost = {
    amount: 0,
    cost: 10,
}

function AtomsGain() {
    if(Quarks >= 100) {
        Atoms += Math.sqrt(Quarks / 100);
        AtomsBoost.amount += 1;
        document.getElementById("Atoms-currency").textContent = "You have developed " + format(Atoms) + " Atoms";
     }
}

//Challanges

function Challenge1() {
    Matter = 0;
    MatterPerSec = 0;
    ClickUpgrade_1.cost = 50;
    ClickUpgrade_1.power = 1;
    ClickUpgrade_1.level = 0;
    ProductionUnit_1.cost = 250;
    ProductionUnit_1.power = 0;
    ProductionUnit_1.level = 0;
    document.getElementById("ClickUpgrade1").ariaDisabled = true;
    document.getElementById("ClickUpgrade2").ariaDisabled = true;
    document.getElementById("ProductionUnit1").ariaDisabled = true;
    document.getElementById("ProductionUnit2").ariaDisabled = true;
}

function BackBtn() {
    Matter = 0;
    MatterPerSec = 0;
    ClickUpgrade_1.cost = 50;
    ClickUpgrade_1.power = 1;
    ClickUpgrade_1.level = 0;
    ProductionUnit_1.cost = 250;
    ProductionUnit_1.power = 0;
    ProductionUnit_1.level = 0;
    document.getElementById("ClickUpgrade1").ariaDisabled = false;
    document.getElementById("ClickUpgrade2").ariaDisabled = false;
    document.getElementById("ProductionUnit1").ariaDisabled = false;
    document.getElementById("ProductionUnit2").ariaDisabled = false;
}

function FinnishBtn() {
    Matter = 0;
    MatterPerSec = 0;
    ClickUpgrade_1.cost = 50;
    ClickUpgrade_1.power = 1;
    ClickUpgrade_1.level = 0;
    ProductionUnit_1.cost = 250;
    ProductionUnit_1.power = 0;
    ProductionUnit_1.level = 0;
    document.getElementById("ClickUpgrade1").ariaDisabled = false;
    document.getElementById("ClickUpgrade2").ariaDisabled = false;
    document.getElementById("ProductionUnit1").ariaDisabled = false;
    document.getElementById("ProductionUnit2").ariaDisabled = false;
    Finnish_button.classList.remove("show-Finnish-button")
}

//Save & Load

function Save() {
    if(localStorage) {
        localStorage.setItem("Matter", JSON.stringify(Matter));
        localStorage.setItem("MatterPerSec", JSON.stringify(MatterPerSec));
        localStorage.setItem("Achievement1", JSON.stringify(Achievement_1));
        localStorage.setItem("Achievement2", JSON.stringify(Achievement_2));
        localStorage.setItem("Challange1", JSON.stringify(Challange_1));
        localStorage.setItem("Souls", JSON.stringify(Souls));
        localStorage.setItem("Souls-Gain", JSON.stringify(SoulsGain));
        localStorage.setItem("Matter-generator", JSON.stringify(MatterGenerator_1));
        localStorage.setItem("Matter-boost", JSON.stringify(MatterBoost_1));
        localStorage.setItem("Matter-extent", JSON.stringify(MatterExtent_1));
        localStorage.setItem("Tickspeed", JSON.stringify(Tickspeed1));
        localStorage.setItem("Soul-Upgrade1", JSON.stringify(SoulsUpgrade_1));
        localStorage.setItem("Soul-Upgrade2", JSON.stringify(SoulsUpgrade_2));
        localStorage.setItem("Soul-Upgrade3", JSON.stringify(SoulsUpgrade_3));
        localStorage.setItem("Skill-1", JSON.stringify(Skill_up1));
        localStorage.setItem("Skill-2", JSON.stringify(Skill_up2));
        localStorage.setItem("Skill-3", JSON.stringify(Skill_up3));
        localStorage.setItem("Skill-4", JSON.stringify(Skill_up4));
        localStorage.setItem("Black-Hole", JSON.stringify(Black_Hole));
        localStorage.setItem("Black-Hole-gain", JSON.stringify(Black_HolePerSec));
        localStorage.setItem("Black-Hole-machine", JSON.stringify(Black_HoleMachine));
        localStorage.setItem("Black-Hole-extractor", JSON.stringify(Black_HoleExtractor));
        localStorage.setItem("Black-Hole-boost", JSON.stringify(Black_Holeboost));
        localStorage.setItem("BlackHole-Upgrade1", JSON.stringify(BlackHoleUpgrade_1));
        localStorage.setItem("BlackHole-Upgrade2", JSON.stringify(BlackHoleUpgrade_2));
        localStorage.setItem("Quarks", JSON.stringify(Quarks));
        localStorage.setItem("Atoms", JSON.stringify(Atoms));
    }
    alert("When Page is reloaded or refreshed It will say you have 0 everything, but you will have to click on something to show It's value!!")
}

function Get() {
    if (localStorage) {
        const SavedMatter = localStorage.getItem("Matter");
        const SavedMatterPerSec = localStorage.getItem("MatterPerSec");
        const SavedAchievement_1 = localStorage.getItem("Achievement1");
        const SavedAchievement_2 = localStorage.getItem("Achievement2");
        const SavedChallange_1 = localStorage.getItem("Challange1");
        const SavedSouls = localStorage.getItem("Souls");
        const SavedSoulsGain = localStorage.getItem("Souls-Gain");
        const SavedTickspeed = localStorage.getItem("Tickspeed");
        const SavedDark_Matter_currency = localStorage.getItem("Dark-matter-currency");
        const SavedMatterGenerator = localStorage.getItem("Matter-generator");
        const SavedMatterBoost = localStorage.getItem("Matter-boost");
        const SavedMatterExtent = localStorage.getItem("Matter-extent");
        const SavedSoulUpgrade1 = localStorage.getItem("Soul-Upgrade1");
        const SavedSoulUpgrade2 = localStorage.getItem("Soul-Upgrade2");
        const SavedSoulUpgrade3 = localStorage.getItem("Soul-Upgrade3");
        const SavedSkill_up1 = localStorage.getItem("Skill-1");
        const SavedSkill_up2 = localStorage.getItem("Skill-2");
        const SavedSkill_up3 = localStorage.getItem("Skill-3");
        const SavedSkill_up4 = localStorage.getItem("Skill-4");
        const SavedBlack_Hole = localStorage.getItem("Black-Hole");
        const SavedBlack_Holegain = localStorage.getItem("Black-Hole-gain");
        const SavedBlack_HoleMachine = localStorage.getItem("Black-Hole-machine");
        const SavedBlack_HoleExtractor = localStorage.getItem("Black-Hole-extractor");
        const SavedBlack_Holeboost = localStorage.getItem("Black-Hole-boost")
        const SavedBlackHole_Upgrade1 = localStorage.getItem("BlackHole-Upgrade1");
        const SavedBlackHole_Upgrade2 = localStorage.getItem("BlackHole-Upgrade2");
        const SavedQuarks = localStorage.getItem("Quarks");
        const SavedAtoms = localStorage.getItem("Atoms");
        if(SavedMatter) {
            Matter = JSON.parse(SavedMatter);
        } 
        if(SavedMatterPerSec) {
            MatterPerSec = JSON.parse(SavedMatterPerSec);
        }
        if(SavedAchievement_1) {
            Achievement_1 = JSON.parse(SavedAchievement_1);
        }
        if(SavedAchievement_2) {
            Achievement_2 = JSON.parse(SavedAchievement_2);
        }
        if(SavedChallange_1) {
            Challange_1 = JSON.parse(SavedChallange_1);
        }
        if(SavedSouls) {
            Souls = JSON.parse(SavedSouls);
        }
        if(SavedSoulsGain) {
            SoulsGain = JSON.parse(SavedSoulsGain);
        }
        if(SavedDark_Matter_currency) {
            Dark_Matter_currency = JSON.parse(SavedDark_Matter_currency);
        }
        if(SavedMatterGenerator) {
            MatterGenerator_1 = JSON.parse(SavedMatterGenerator);
        }
        if(SavedMatterBoost) {
            MatterBoost_1 = JSON.parse(SavedMatterBoost);
        }
        if(SavedMatterExtent) {
            MatterExtent_1 = JSON.parse(SavedMatterExtent);
        }
        if(SavedTickspeed) {
            Tickspeed1 = JSON.parse(SavedTickspeed);
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
        if(SavedBlack_Hole) {
            Black_Hole = JSON.parse(SavedBlack_Hole);
        }
        if(SavedBlack_Holegain) {
            Black_HolePerSec = JSON.parse(SavedBlack_Holegain);
        }
        if(SavedBlack_HoleMachine) {
            Black_HoleMachine = JSON.parse(SavedBlack_HoleMachine);
        }
        if(SavedBlack_HoleExtractor) {
            Black_HoleExtractor = JSON.parse(SavedBlack_HoleExtractor);
        }
        if(SavedBlack_Holeboost) {
            Black_Holeboost = JSON.parse(SavedBlack_Holeboost);
        }
        if(SavedBlackHole_Upgrade1) {
            BlackHoleUpgrade_1 = JSON.parse(SavedBlackHole_Upgrade1);
        }
        if(SavedBlackHole_Upgrade2) {
            BlackHoleUpgrade_2 = JSON.parse(SavedBlackHole_Upgrade2);
        }
        if(SavedQuarks) {
            Quarks = JSON.parse(SavedQuarks);
        }
        if(SavedAtoms) {
            Atoms = JSON.parse(SavedAtoms);
        }
    } 
}