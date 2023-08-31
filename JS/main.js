let player = {
Matter: new Decimal(10),
MatterPerSec: new Decimal(1),
Souls: new Decimal(0),
SoulsToGet: new Decimal(0),
SoulsGain: new Decimal(0),
Dark_Matter_currency: new Decimal(0),
Dark_MatterToGet: new Decimal(0),
Black_Hole: new Decimal(0),
Black_HolePerSec: new Decimal(0),
Black_Holeboost: new Decimal(0),
Black_HoleExtractor: new Decimal(0),
Quarks: new Decimal(0),
QuarkToGet: new Decimal(0),
Atoms: new Decimal(0),
AtomsToGet: new Decimal(0),
Proton_1: new Decimal(0),
Neutron_1: new Decimal(0),
Electron_1: new Decimal(0),
ProtonPerSec_1: new Decimal(0),
NeutronPerSec_1: new Decimal(0),
ElectronPerSec_1: new Decimal(0),
Proton_boost2: new Decimal(0),
Neutron_boost2: new Decimal(0),
Electron_boost2: new Decimal(0),
}
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

   let MatterGenerator_1 = {
      cost: 10,
      power: 1,
      amount: 0,
   }

   let MatterBoost_1 = {
    cost: 100,
    power: 1,
    amount: 0,
   }

   let MatterExtent_1 = {
    cost: 1000,
    power: 1,
    amount: 0,
   }

   let Tickspeed1 = {
    cost: 1,
    power: 1,
    amount: 0,
   }

// BH-tab

   let Black_HoleMachine = {
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

   var BlackHoleUpgrade_3 = {
    cost: 1e5,
    bought: false,
   }

   var BlackHoleUpgrade_4 = {
    cost: 1e5,
    bought: false,
   }

//Achievements 

    var Achievement1 = {
        requirment: 100,
    }

    var Achievement2 = {
        requirment: 1,
    }

// Matter tab

setInterval(function() {
    player.Matter += player.MatterPerSec / 1000; 
    document.getElementById("Matter").textContent = "Matter: " + format(player.Matter);
}, 1);

setInterval(function() {
    player.MatterPerSec
    document.getElementById("MatterPerSec").textContent = format(player.MatterPerSec) + " Matter/sec";
}, 1);

setInterval(function() {
   
    player.ProtonPerSec_1.add(Math.log10(Math.sqrt(player.Matter / 1e6) / 1e7))
    player.Proton_1.add(player.ProtonPerSec_1);
    if(BlackHoleUpgrade_3.bought === true) {
        player.ProtonPerSec_1.add(player.Quarks.div(1e6));
    }
    document.getElementById("ProtonPerSec").textContent = "(+" + format(player.ProtonPerSec_1) + " Protons Per sec)";
    document.getElementById("Proton").textContent = format(player.Proton_1) + " Protons";    
    player.NeutronPerSec_1.add(Math.sqrt(Math.sqrt(player.Souls / 1e6)  / 1e7 ));
    player.Neutron_1.add(player.NeutronPerSec_1);
    if(BlackHoleUpgrade_3.bought === true) {
        player.NeutronPerSec_1.add(player.Quarks.div(1e6));
    }
    document.getElementById("NeutronPerSec").textContent = "(+" + format(player.NeutronPerSec_1) + " Neutrons Per sec)";
    document.getElementById("Neutron").textContent = format(player.Neutron_1) + " Neutrons"
    player.ElectronPerSec_1.add(Math.sqrt(Math.sqrt(player.Souls / 1e6)  / 1e7 ));
    player.Electron_1.add(player.ElectronPerSec_1)
    if(BlackHoleUpgrade_4.bought === true) {
        player.ElectronPerSec_1.add(player.Atoms.div(1e7));
    }
    document.getElementById("ElectronPerSec").textContent = "(+" + format(player.ElectronPerSec_1) + " Electrons Per sec)"
    document.getElementById("Electron").textContent = format(player.Electron_1) + " Electrons"
}, 1);

setInterval(function() {
    player.Proton_boost2.add(Math.log10(player.Proton_1));
    player.Neutron_boost2.add(player.Neutron_1);
    player.Electron_boost2.add(player.Electron_1);
    document.getElementById("Proton-boost").textContent = format(player.Proton_boost2) + "x boost to Matter gain";
    document.getElementById("Neutron-boost").textContent = format(player.Neutron_boost2) + "x boost to Souls gain";
    document.getElementById("Electron-boost").textContent = format(player.Electron_boost2) + "x boost to Formed Black Holes";
}, 1);

function MatterGenerator() {
    if(player.Matter >= MatterGenerator_1.cost) {
        if(BlackHoleUpgrade_1.bought === false) {
            player.Matter -= MatterGenerator_1.cost;
        }
        if(BlackHoleUpgrade_1.bought === true ) {
            player.Matter -= 0;
        }
        player.MatterPerSec += MatterGenerator_1.power;
        MatterGenerator_1.cost *= 1.5;
        MatterGenerator_1.power++;
        MatterGenerator_1.amount++;
        document.getElementById("Matter-generator").textContent = "Matter Generator [ " + MatterGenerator_1.amount + " ]";
        document.getElementById("Matter-generator-cost").textContent = "Cost: " + format(MatterGenerator_1.cost);
    }
    if(SoulsUpgrade_1.bought === true ) {
        MatterGenerator_1.power += 0.5;
    }
    if(SoulsUpgrade_4.bought === true ) {
      player.MatterPerSec *= Souls / 100;
    }
    if(Skill_up1.bought === true ) {
        player.MatterPerSec ** 1.1;
    }
}

function MatterBoost() {
    if(player.Matter >= MatterBoost_1.cost) {
        if(BlackHoleUpgrade_1.bought === false ) {
            player.Matter -= MatterBoost_1.cost;
        }
        if(BlackHoleUpgrade_1.bought === true ) {
            player.Matter -= 0;
        }
        player.MatterPerSec += MatterBoost_1.power + MatterBoost_1.amount;
        MatterBoost_1.cost *= 4;
        MatterBoost_1.power++;
        MatterBoost_1.amount++;
        document.getElementById("Matter-boost").textContent = "Matter Boost [ " + MatterBoost_1.amount + " ]";
        document.getElementById("Matter-boost-cost").textContent = "Cost: " + format(MatterBoost_1.cost);
    }
    if(SoulsUpgrade_4.bought === true ) {
        player.MatterPerSec *= Souls / 2000;
      }
}

function MatterExtent() {
    if(player.Matter >= MatterExtent_1.cost) {
        if(BlackHoleUpgrade_1.bought === false ) {
            player.Matter -= MatterExtent_1.cost;
        }
        if(BlackHoleUpgrade_1.bought === true ) {
            player.Matter -= 0;
        }
        player.MatterPerSec +=(MatterExtent_1.power + MatterExtent_1.amount); 
        MatterExtent_1.cost *= 9;
        MatterExtent_1.power++;
        MatterExtent_1.amount++;
        document.getElementById("Matter-extent").textContent = "Matter Extent [ " + MatterExtent_1.amount + " ]"
        document.getElementById("Matter-extent-cost").textContent = "Cost: " + format(MatterExtent_1.cost);
    }
    if(SoulsUpgrade_4.bought === true ) {
        player.MatterPerSec *= Souls / 1e7;
    }
    if(SoulsUpgrade_5.bought === true) {
       MatterExtent_1.power *= Matter / 1e10;
    }
    if(SoulsUpgrade_6.bought === true) {
        MatterExtent_1.power++;
    }
    if(Skill_up4.bought === true) {
        Black_Holeboost *= MatterExtent_1.power / 15;
    }
}

function Tickspeed() {
    if(player.Souls >= Tickspeed1.cost) {
        player.Souls -= Tickspeed1.cost;
        player.MatterPerSec *= Tickspeed1.power;
        player.Tickspeed1.cost *= 2;
        Tickspeed1.power += 1;
        Tickspeed1.amount += 1;
        document.getElementById("Tickspeed").textContent = "Tickspeed [" + Tickspeed1.amount + "]";
        document.getElementById("Tickspeed-cost").textContent = "Cost: " + format(Tickspeed1.cost) + " Souls";
    }
    if(SoulsUpgrade_7.bought = true) {
        Tickspeed1.power *= Souls.div / 1e6;
    }
}

// BH-tab 

function BlackHoleExtractor() {
    if (player.Dark_Matter_currency >= Black_HoleMachine.cost) {
        player.Dark_Matter_currency -= Black_HoleMachine.cost;
        Black_HoleMachine.cost *= 2;
        Black_HoleMachine.power += 1;
        Black_HoleMachine.amount += 1;
        player.Black_HoleExtractor += 1;
        player.Black_HolePerSec += Math.sqrt(Black_HoleMachine.power);
        player.Black_Holeboost += Math.log10(Math.sqrt(Black_Hole * Black_HoleMachine.power));
        document.getElementById("Black-Hole-gain").textContent = "(" + format(Black_HolePerSec) + " Black Holes formed/sec)";
        document.getElementById("BH-extractor").textContent = "Black Hole Extractor [" + Black_HoleExtractor + "]";
        document.getElementById("Black-Hole-boost").textContent = "Currently: " + format(Black_Holeboost) + " boost to Matter Gain";
        setInterval(function () {
            player.Black_Hole += Black_HolePerSec;
            player.Black_Hole += Electron_boost2;
            document.getElementById("Black-Hole").textContent = "You have formed " + format(Black_Hole) + " Black Holes";
        }, 1000);
        setInterval(function() {
            player.Matter += Black_Holeboost;
        }, 1000);
        if(BlackHoleUpgrade_2.bought === true) {
            player.Black_HolePerSec *= Matter
        }
    }
}

// Souls-Upgrade

function SoulsUpgrade1() {
    if(player.Souls >= SoulsUpgrade_1.cost) {
        player.Souls -= SoulsUpgrade_1.cost;
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
    if(player.Souls >= SoulsUpgrade_2.cost) {
        player.Souls -= SoulsUpgrade_2.cost;
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
    if(player.Souls >= SoulsUpgrade_3.cost) {
        player.Souls -= SoulsUpgrade_3.cost;
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
    if(player.Souls >= SoulsUpgrade_4.cost) {
        player.Souls -= SoulsUpgrade_4.cost;
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
    if(player.Souls >= SoulsUpgrade_5.cost) {
        player.Souls -= SoulsUpgrade_5.cost;
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
    if(player.Souls >= SoulsUpgrade_6.cost) {
        player.Souls -= SoulsUpgrade_6.cost;
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
    if(player.Souls >= SoulsUpgrade_7.cost) {
        player.Souls -= SoulsUpgrade_7.cost;
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
    if(player.Black_Hole >= BlackHoleUpgrade_1.cost) {
        player.Black_Hole.sub(BlackHoleUpgrade_1.cost);
        BlackHoleUpgrade_1.bought.eq(true);
    }
}

function BlackHoleUpgrade2() {
    if(player.Black_Hole >= BlackHoleUpgrade_2.cost) {
        player.Black_Hole.sub(BlackHoleUpgrade_2.cost);
        BlackHoleUpgrade_2.bought.eq(true);
    }
}

function BlackHoleUpgrade3() {
    if(player.Quarks >= BlackHoleUpgrade_3.cost) {
        player.Quarks.sub(BlackHoleUpgrade_3.cost);
        BlackHoleUpgrade_3.bought.eq(true);
    }
}

function BlackHoleUpgrade4() {
    if(player.Atoms >= BlackHoleUpgrade_4.cost) {
        player.Atoms.sub(BlackHoleUpgrade_4.cost);
        BlackHoleUpgrade_4.bought.eq(true);
    }
}

//Sacrifice Prestige

function SacrificePrestige() {
    if(player.Matter >= 1) {
        player.Souls += Math.sqrt(player.Matter / 1);
        player.Souls += player.Neutron_boost2;
        player.SoulsToGet += Math.sqrt(player.Matter / 1);
        player.SoulsGain += Math.sqrt(player.Souls / 5) + 1;
        player.Matter += player.Matter;
        player.Matter = 10;
        player.MatterPerSec = 0;
        MatterGenerator_1.cost = 10;
        MatterGenerator_1.power = 1;
        MatterGenerator_1.amount = 0;
        MatterBoost_1.cost = 100;
        MatterBoost_1.power = 1;
        MatterBoost_1.amount = 0;
        MatterExtent_1.cost = 1e3;
        MatterExtent_1.power = 1;
        MatterExtent_1.amount = 0;
        document.getElementById("Souls").textContent = "Souls: " + format(player.Souls);   
        document.getElementById("Souls-Gain").textContent = "(+" + format(player.SoulsGain) + ")";         
    }
    if( SoulsUpgrade_2.bought === true) {
        player.Souls += Math.sqrt(Matter / 3333);
    }
}

// Dark matter Prestige

function DarkMatterPrestige() {
    if(player.Souls >= 0.1) {
        player.Dark_Matter_currency.add(Math.sqrt(Souls.div(0.01)));
        player.Dark_MatterToGet.add(Math.sqrt(Souls.div(0.01)));
        player.MatterPerSec = 1;
        player.Matter = 10;
        player.MatterPerSec = 0;
        MatterGenerator_1.cost = 10;
        MatterGenerator_1.power = 1;
        MatterGenerator_1.amount = 0;
        MatterBoost_1.cost = 100;
        MatterBoost_1.power = 1;
        MatterBoost_1.amount = 0;
        MatterExtent_1.cost = 1e3;
        MatterExtent_1.power = 1;
        MatterExtent_1.amount = 0;
        player.Souls -= Souls;
        setInterval(function() {
            document.getElementById("Dark-matter-currency").textContent = "Dark Matter: " + format(player.Dark_MatterToGet);
        }, 1000);
    }
}

// Skill-upgrades

var Skill_up1 = {
    cost: 1,
    bought: false,
}

var Skill_up2 = {
    cost: 5,
    bought: false,
}

var Skill_up3 = {
    cost: 1e5,
    bought: false,
}

var Skill_up4 = {
    cost: 1e12,
    bought: false,
}

var Skill_up5 = {
    cost: 1e3,
    bought: false,
}

function Skill1() {
    if (player.Dark_Matter_currency >= 1) {
        player.Dark_Matter_currency -= Skill_up1.cost;
        Skill_up1.bought = true;
    }
}

function Skill2() {
    if (player.Dark_Matter_currency >= 5) {
        player.Dark_Matter_currency -= Skill_up2.cost;
        Skill_up2.bought = true;
        BH_tab.classList.add("show-BH-tab");
    }
}

function Skill3() {
    if (player.Black_Hole >= Skill_up3.cost) {
        player.Dark_Matter_currency -= Skill_up3.cost;
        Skill_up3.bought = true;
    }
}

function Skill4() {
    if (player.Black_Hole >= Skill_up4.cost) {
        player.Dark_Matter_currency -= Skill_up4.cost;
        Skill_up4.bought = true;
    }
}

function Skill5() {
    if (player.Dark_Matter_currency >= Skill_up5.cost) {
        player.Dark_Matter_currency -= Skill_up5.cost;
        Skill_up5.bought = true;
    }
}

// Quarks-tab

function QuarksGain() {
    if(player.Black_Hole >= 5e6) {
       player.Quarks += Math.sqrt(Black_Hole / 5e6);
       player.Black_Hole -= Math.sqrt(Black_Hole / 5e6);
       document.getElementById("Quarks-currency").textContent = "You have developed " + format(Quarks) + " Quarks";
    }
}

// Atoms-tab

var AtomsBoost = {
    amount: 0,
    cost: 10,
}

function AtomsGain() {
    if(player.Quarks >= 100) {
        player.Atoms += Math.sqrt(Quarks / 100);
        player.AtomsBoost.amount++;
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
            player.Matter = JSON.parse(SavedMatter);
        } 
        if(SavedMatterPerSec) {
            player.MatterPerSec = JSON.parse(SavedMatterPerSec);
        }
        if(SavedSouls) {
            player.Souls = JSON.parse(SavedSouls);
        }
        if(SavedSoulsGain) {
            player.SoulsGain = JSON.parse(SavedSoulsGain);
        }
        if(SavedDark_Matter_currency) {
            player.Dark_Matter_currency = JSON.parse(SavedDark_Matter_currency);
        }
        if(SavedMatterGenerator) {
            player.MatterGenerator_1 = JSON.parse(SavedMatterGenerator);
        }
        if(SavedMatterBoost) {
            player.MatterBoost_1 = JSON.parse(SavedMatterBoost);
        }
        if(SavedMatterExtent) {
            player.MatterExtent_1 = JSON.parse(SavedMatterExtent);
        }
        if(SavedTickspeed) {
            player.Tickspeed1 = JSON.parse(SavedTickspeed);
        }
        if(SavedSoulUpgrade1) {
            player.SoulsUpgrade_1 = JSON.parse(SavedSoulUpgrade1);
        }
        if(SavedSoulUpgrade2) {
            player.SoulsUpgrade_2 = JSON.parse(SavedSoulUpgrade2);
        }
        if(SavedSoulUpgrade3) {
            player.SoulsUpgrade_3 = JSON.parse(SavedSoulUpgrade3);
        }
        if(SavedSkill_up1) {
            player.Skill_up1 = JSON.parse(SavedSkill_up1);
        }
        if(SavedSkill_up2) {
            player.Skill_up2 = JSON.parse(SavedSkill_up2);
        }
        if(SavedSkill_up3) {
            player.Skill_up3 = JSON.parse(SavedSkill_up3);
        }
        if(SavedSkill_up4) {
            player.Skill_up4 = JSON.parse(SavedSkill_up4);
        }
        if(SavedBlack_Hole) {
            player.Black_Hole = JSON.parse(SavedBlack_Hole);
        }
        if(SavedBlack_Holegain) {
            player.Black_HolePerSec = JSON.parse(SavedBlack_Holegain);
        }
        if(SavedBlack_HoleMachine) {
            player.Black_HoleMachine = JSON.parse(SavedBlack_HoleMachine);
        }
        if(SavedBlack_HoleExtractor) {
            player.Black_HoleExtractor = JSON.parse(SavedBlack_HoleExtractor);
        }
        if(SavedBlack_Holeboost) {
            player.Black_Holeboost = JSON.parse(SavedBlack_Holeboost);
        }
        if(SavedBlackHole_Upgrade1) {
            player.BlackHoleUpgrade_1 = JSON.parse(SavedBlackHole_Upgrade1);
        }
        if(SavedBlackHole_Upgrade2) {
            player.BlackHoleUpgrade_2 = JSON.parse(SavedBlackHole_Upgrade2);
        }
        if(SavedQuarks) {
            player.Quarks = JSON.parse(SavedQuarks);
        }
        if(SavedAtoms) {
            player.Atoms = JSON.parse(SavedAtoms);
        }
    } 
}