let Matter = [
    "Matter", 0
]
var MatterPerSec = 0;
var MatterGenerator_1 = 0;
var Souls = 0;
var SoulsToGet = 0;
var SoulsGain = 0;
var Dark_Matter_currency = 0;
var Dark_MatterToGet = 0;
let Challange_1 = document.getElementById("Challange1");
let Achievement_1 = document.getElementById("Achievement1");
let Achievement_2 = document.getElementById("Achievement2");
let Finnish_button = document.getElementById("Finnish-button");
let Sacrifice_Prestige = document.getElementById("SacrificePrestige");
let Dark_Matter_button = document.getElementById("Dark-matter-button");
let Tickspeed2 = document.getElementById("Tickspeed")
let Tickspeed_cost = document.getElementById("Tickspeed-cost");

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
        Matter -= MatterGenerator_1.cost;
        MatterPerSec = MatterGenerator_1.power;
        MatterGenerator_1.cost *= 1.5;
        MatterGenerator_1.power++;
        MatterGenerator_1.amount++;
        document.getElementById("Matter-generator").textContent = "Matter Generator [ " + MatterGenerator_1.amount + " ]";
        document.getElementById("Matter-generator-cost").textContent = "Cost: " + format(MatterGenerator_1.cost);
        document.getElementById("Matter").innerText = "Matter: " + format(Matter);
        document.getElementById("MatterPerSec").textContent = format(MatterPerSec) + " Matter/sec";
    }
    if(SoulsUpgrade_1.bought = true) {
        MatterGenerator_1.power += 0.5;
    }
    setInterval(function () {
        Matter += MatterPerSec;
        document.getElementById("Matter").textContent = "Matter: " + format(Matter);
    }, 1000);
}

function MatterBoost() {
    if(Matter >= MatterBoost_1.cost) {
        Matter -= MatterBoost_1.cost;
        MatterPerSec += MatterBoost_1.power + MatterBoost_1.amount;
        MatterBoost_1.cost *= 4;
        MatterBoost_1.power++;
        MatterBoost_1.amount++;
        document.getElementById("Matter-boost").textContent = "Matter Boost [ " + MatterBoost_1.amount + " ]";
        document.getElementById("Matter-boost-cost").textContent = "Cost: " + format(MatterBoost_1.cost);
        document.getElementById("MatterPerSec").textContent = format(MatterPerSec) + " Matter/sec";
    }
    setInterval(function () {
        Matter += MatterPerSec;
        document.getElementById("Matter").textContent = "Matter: " + format(Matter);
    }, 1000);
}

function MatterExtent() {
    if(Matter >= MatterExtent_1.cost) {
        Matter -= MatterExtent_1.cost;
        MatterPerSec += MatterExtent_1.power; 
        MatterExtent_1.cost *= 9;
        MatterExtent_1.power++;
        MatterExtent_1.amount++;
        document.getElementById("Matter-extent").textContent = "Matter Extent [ " + MatterExtent_1.amount + " ]"
        document.getElementById("Matter-extent-cost").textContent = "Cost: " + format(MatterExtent_1.cost);
        document.getElementById("MatterPerSec").textContent = format(MatterPerSec) + " Matter/sec";
    }
    setInterval(function () {
        Matter += MatterPerSec;
        document.getElementById("Matter").textContent = "Matter: " + format(Matter);
    }, 1000);
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
    if( Souls >= 1 ) {
        Dark_Matter_currency += Math.sqrt(Souls / 0.1);
        Dark_MatterToGet += Math.sqrt(Souls / 0.1);
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
    bought: false
 }

function Skill1() {
    if ( DarkMatter >= 10) {
        Dark_Matter_currency -= 10;
        MatterPerSec ** 1.1;
        bought = true;
        if (bought == true) {
            MatterPerSec = MatterPerSec;
        }
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
        /*const SavedDark_Matter_currency = localStorage.getItem("Dark-matter-currency");*/
        const SavedMatterGenerator = localStorage.getItem("Matter-generator");
        const SavedMatterBoost = localStorage.getItem("Matter-boost");
        const SavedMatterExtent = localStorage.getItem("Matter-extent");
        const SavedSoulUpgrade1 = localStorage.getItem("Soul-Upgrade1");
        const SavedSoulUpgrade2 = localStorage.getItem("Soul-Upgrade2");
        const SavedSoulUpgrade3 = localStorage.getItem("Soul-Upgrade3");
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
        /*if(SavedDark_Matter_currency) {
            Dark_Matter_currency = JSON.parse(SavedDark_Matter_currency);
        }*/
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
    } 
}