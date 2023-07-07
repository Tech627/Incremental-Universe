var Matter = 0;
var MatterPerSec = 0;
var Souls = 0;
var SoulsToGet = 0;
var Soulsboost = 0;
var Dark_Matter_currency = 0;
var Dark_MatterToGet = 0;
let Upgrades_container = document.getElementById("Upgrades-container");
let Main = document.getElementById("Main");
let Achievements = document.getElementById("Achievements");
let Challanges = document.getElementById("Challanges");
let Dark_Matter = document.getElementById("Dark-matter");
let Challange_1 = document.getElementById("Challange1");
let Achievement_1 = document.getElementById("Achievement1");
let Achievement_2 = document.getElementById("Achievement2");
let Finnish_button = document.getElementById("Finnish-button");
let Sacrifice_Prestige = document.getElementById("SacrificePrestige");
// Upgrades

    var ClickUpgrade_1 = {
        cost: 50,
        power: 1,
        level: 0, 
    }

    var ClickUpgrade_2 = {
        cost: 0.5,
        power: 0,
        level: 0,
    }

    var ProductionUnit_1 = {
        cost: 250,
        power: 0,
        level: 0,
    }

    var ProductionUnit_2 = {
        cost: 2,
        power: 0,
        level: 0,
    }
// End of Upgrades

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

function btnClick() {
    Matter += ClickUpgrade_1.power + ClickUpgrade_2.power;
    setInterval(function() {
        document.getElementById("Matter").textContent = "Matter: " + format(Matter);    
    }, 250);
    if(Matter >= 100 ) {
        Achievement_1.classList.add("complete-Achievement");
    };
    if(Matter >= 10000 ) {
        Sacrifice_Prestige.classList.add("show-SacrificePrestige");
    }
}

// Normal Upgrades
function ClickUpgrade1() {
    if (Matter >= ClickUpgrade_1.cost ) {
        Matter -= ClickUpgrade_1.cost;
        ClickUpgrade_1.cost *= 1.07;
        ClickUpgrade_1.power++;
        ClickUpgrade_1.level++;
        document.getElementById("ClickUpgrade1").innerHTML = "Click Upgrade 1<br>" + "<br>Cost: " + format(ClickUpgrade_1.cost) + "<br><br>Power: +" + format(ClickUpgrade_1.power) + " Matter<br><br>Level: " + ClickUpgrade_1.level;
        document.getElementById("MatterButton").textContent = "Get " + format(ClickUpgrade_1.power) + " Matter";
    }
    if(ClickUpgrade_1.level >= 1 ) {
        Achievement_2.classList.add("complete-Achievement");
    }; 
}

function ClickUpgrade2() {
    if (Souls >= ClickUpgrade_2.cost ) {
        Souls -= ClickUpgrade_2.cost;
        ClickUpgrade_2.cost *= 1.03;
        ClickUpgrade_2.power += 10;
        ClickUpgrade_2.level++;
        document.getElementById("ClickUpgrade2").innerHTML = "Click Upgrade 2<br>" + "<br>Cost: " + format(ClickUpgrade_2.cost) + "<br><br>Power: +" + format(ClickUpgrade_2.power) + " Matter<br><br>Level: " + ClickUpgrade_2.level;
        document.getElementById("MatterButton").textContent = "Get " + format(ClickUpgrade_2.power) + " Matter";
    }
}

// Prestige Upgrades
function ProductionUnit1() {
    if (Matter >= ProductionUnit_1.cost ) {
        Matter -= ProductionUnit_1.cost;
        ProductionUnit_1.cost *= 1.07;
        ProductionUnit_1.power++;
        ProductionUnit_1.level++;
        MatterPerSec = ProductionUnit_1.power;
        document.getElementById("ProductionUnit1").innerHTML = "Production Unit 1<br>" + "<br>Cost: " + format(ProductionUnit_1.cost) + "<br><br>Power: +" + format(ProductionUnit_1.power) + " Matter/sec<br><br>Level: " + ProductionUnit_1.level;
        document.getElementById("MatterPerSec").textContent = format(MatterPerSec) + " Matter/sec";  
        setInterval(function() {
           Matter += 1;
           document.getElementById("Matter").innerText = "Matter: " + format(Matter);
        }, 1000);
    }
}

function ProductionUnit2() {
    if (Souls >= ProductionUnit_2.cost ) {
        Souls -= ProductionUnit_2.cost;
        ProductionUnit_2.cost *= 1.02;
        ProductionUnit_2.power += 10;
        ProductionUnit_2.level++;
        MatterPerSec = ProductionUnit_2.power;
        document.getElementById("ProdctionUnit2").innerHTML = "Production Unit 1<br>" + "<br>Cost: " + format(ProductionUnit_2.cost) + "<br><br>Power: +" + format(ProductionUnit_2.power) + " Matter/sec<br><br>Level: " + ProductionUnit_2.level;
        document.getElementById("MatterPerSec").textContent = format(MatterPerSec) + " Matter/sec";
        setInterval(function() {
            Matter += 10;
            Document.getElementById("Matter").innerText = "Matter: " + format(Matter);
        })
    }
}

// Tabs

function OpenUpgrades() {
    Upgrades_container.classList.add("open-Upgrades-container");
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Challanges.classList.remove("open-Challanges");
    Dark_Matter.classList.remove("open-Dark-matter");
}

function OpenMain() {
    Main.classList.add("open-Main");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Achievements.classList.remove("open-Achievements");
    Challanges.classList.remove("open-Challanges");
    Dark_Matter.classList.remove("open-Dark-matter");
}

function OpenAchievements() {
    Achievements.classList.add("open-Achievements")
    Upgrades_container.classList.remove("open-Upgrades-container");
    Main.classList.remove("open-Main");
    Challanges.classList.remove("open-Challanges");
    Dark_Matter.classList.remove("open-Dark-matter");
}

function OpenChallanges() {
    Challanges.classList.add("open-Challanges");
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Dark_Matter.classList.remove("open-Dark-matter");
}

function OpenDarkMatter() {
    Dark_Matter.classList.add("open-Dark-matter");
    Main.classList.remove("open-Main");
    Achievements.classList.remove("open-Achievements");
    Upgrades_container.classList.remove("open-Upgrades-container");
    Challanges.classList.remove("open-Challanges");
}

//Sacrifice Prestige

function SacrificePrestige() {
    if( Matter >= 10000 ) {
        Souls += Math.sqrt(Matter / 10000);
        SoulsToGet += Math.sqrt(Matter / 10000)
        Soulsboost += Math.sqrt(Souls / 5) + 1;
        Matter -= Matter;
        ClickUpgrade_1.cost = 50;
        ClickUpgrade_1.power = 1;
        ClickUpgrade_1.level = 0;
        ProductionUnit_1.cost = 250;
        ProductionUnit_1.power = 0;
        ProductionUnit_1.level = 0;
        MatterPerSec = 0;
        setInterval(function () {
            document.getElementById("Souls").textContent = "Souls: " + format(Souls);
            document.getElementById("Souls-boost").textContent = format(Soulsboost) + "x boost";       
        }, 250);    
        document.getElementById("SacrificePrestige").textContent = "Sacrifice for " + format(SoulsToGet) + " Souls";    
        if( Soulsboost >= 0.1 ) {
            ClickUpgrade_1.power *= Math.sqrt(Soulsboost / 1.5);
            ProductionUnit_1.power *= Math.sqrt(Soulsboost / 1.5);
        }
    }
}

// Dark matter Prestige

function DarkMatterPrestige() {
    if( Souls >= 1000 ) {
        Dark_Matter_currency += Math.sqrt(Souls / 1000);
        Dark_MatterToGet += Math.sqrt(Souls / 1000);
        Matter -= Matter;
        Souls -= Souls;
        MatterPerSec -= MatterPerSec;
        ClickUpgrade_1.cost = 50;
        ClickUpgrade_1.power = 1;
        ClickUpgrade_1.level = 0;
        ProductionUnit_1.cost = 250;
        ProductionUnit_1.power = 0;
        ProductionUnit_1.level = 0;
        setInterval(function() {
            document.getElementById("Dark-matter-currency").textContent = "Dark Matter: " + format(Dark_Matter_currency);
        })
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
        localStorage.setItem("ClickUpgrade1", JSON.stringify(ClickUpgrade_1));
        localStorage.setItem("ClickUpgrade2", JSON.stringify(ClickUpgrade_2));
        localStorage.setItem("ProductionUnit1", JSON.stringify(ProductionUnit_1));
        localStorage.setItem("ProductionUnit2", JSON.stringify(ProductionUnit_2));
        localStorage.setItem("Achievement1", JSON.stringify(Achievement_1));
        localStorage.setItem("Achievement2", JSON.stringify(Achievement_2));
        localStorage.setItem("Challange1", JSON.stringify(Challange_1));
        localStorage.setItem("Souls", JSON.stringify(Souls));
        localStorage.setItem("Souls-boost", JSON.stringify(Soulsboost));
        localStorage.setItem("Dark-matter-currency", JSON.stringify(Dark_Matter_currency));
    }
    alert("When Page is reloaded or refreshed It will say you have 0 everything, but you will have to click on something to show It's value!!")
}

function Get() {
    if (localStorage) {
        const SavedMatter = localStorage.getItem("Matter");
        const SavedMatterPerSec = localStorage.getItem("MatterPerSec");
        const SavedClickUpgrade_1 = localStorage.getItem("ClickUpgrade1");
        const SavedClickUpgrade_2 = localStorage.getItem("ClickUpgrade2");
        const SavedProductionUnit_1 = localStorage.getItem("ProductionUnit1");
        const SavedProductionUnit_2 = localStorage.getItem("ProductionUnit2");
        const SavedAchievement_1 = localStorage.getItem("Achievement1");
        const SavedAchievement_2 = localStorage.getItem("Achievement2");
        const SavedChallange_1 = localStorage.getItem("Challange1");
        const SavedSouls = localStorage.getItem("Souls");
        const SavedSoulsboost = localStorage.getItem("Souls-boost");
        const SavedDark_Matter_currency = localStorage.getItem("Dark-matter-currency");
        if(SavedMatter) {
            Matter = JSON.parse(SavedMatter);
        } 
        if(SavedMatterPerSec) {
            MatterPerSec = JSON.parse(SavedMatterPerSec);
        }
        if(SavedClickUpgrade_1) {
            ClickUpgrade_1 = JSON.parse(SavedClickUpgrade_1);
        }
        if(SavedClickUpgrade_2) {
            ClickUpgrade_2 = JSON.parse(SavedClickUpgrade_2);
        }
        if(SavedProductionUnit_1) {
            ProductionUnit_1 = JSON.parse(SavedProductionUnit_1);
        }
        if(SavedProductionUnit_2) {
            ProductionUnit_2 = JSON.parse(SavedProductionUnit_2);
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
        if(SavedSoulsboost) {
            Soulsboost = JSON.parse(SavedSoulsboost);
        }
        if(SavedDark_Matter_currency) {
            Dark_Matter_currency = JSON.parse(SavedDark_Matter_currency);
        }
    } 
}