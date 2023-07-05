var Matter = 0;
var MatterPerSec = 0;
var Souls = 0;
var SoulsToGet = 0;
var Soulsboost = 0;
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

//Sacrifice Prestige

function SacrificePrestige() {
    if( Matter >= 10000 ) {
        Souls += Math.sqrt(Matter / 10000);
        SoulsToGet += Math.sqrt(Matter / 10000)
        Soulsboost += Math.sqrt(Souls / 5);
        Matter -= Matter;
        ClickUpgrade_1.cost = 50;
        ClickUpgrade_1.power = 1;
        ClickUpgrade_1.level = 0;
        ProductionUnit_1.cost = 250;
        ProductionUnit_1.power = 0;
        ProductionUnit_1.level = 0;
        MatterPerSec = 0;
        document.getElementById("Souls").textContent = "Souls: " + format(Souls);
        document.getElementById("Souls-boost").textContent = format(Soulsboost) + "x boost";    
        document.getElementById("SacrificePrestige").textContent = "Sacrifice for " + format(SoulsToGet) + " Souls";    
        if( Soulsboost >= 0.1 ) {
            ClickUpgrade_1.power *= Math.sqrt(Soulsboost / 1.5);
            ProductionUnit_1.power *= Math.sqrt(Soulsboost / 1.5);
        }
        if (SacrificePrestige >= 1) {
            SoulsToGet = 0;
            ClickUpgrade_1.cost = 50;
            ClickUpgrade_1.power = 1;
            ClickUpgrade_1.level = 0;
            ProductionUnit_1.cost = 250;
            ProductionUnit_1.power = 0;
            ProductionUnit_1.level = 0;
        }
    }
}

//End of Prestige

setInterval();