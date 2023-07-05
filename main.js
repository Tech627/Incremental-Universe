var Matter = 0;
var MatterPerSec = 0;
var Souls = 0;
var SoulsToGet = 0;
var Soulsboost = 0;

    var ClickUpgrade_1 = {
        cost: 50,
        power: 1,
        level: 0, 
    }

    var ProductionUnit_1 = {
        cost: 250,
        power: 0,
        level: 0,
    }


function format(amount) {
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    if (power < 3) return amount.toFixed(2)
    return mantissa.toFixed(2) + "e" + power    
}

function btnClick() {
    Matter += ClickUpgrade_1.power;
    setInterval(function() {
        document.getElementById("Matter").textContent = "Matter: " + format(Matter);    
    }, 250);
}

function ClickUpgrade1() {
    if (Matter >= 50) {
        Matter -= ClickUpgrade_1.cost;
        ClickUpgrade_1.cost *= 1.07;
        ClickUpgrade_1.power++;
        ClickUpgrade_1.level++;
        document.getElementById("ClickUpgrade1").innerHTML = "Click Upgrade 1<br>" + "<br>Cost: " + format(ClickUpgrade_1.cost) + "<br><br>Power: +" + format(ClickUpgrade_1.power) + " Matter<br><br>Level: " + ClickUpgrade_1.level;
        document.getElementById("MatterButton").textContent = "Get " + format(ClickUpgrade_1.power) + " Matter";
    }
}

function ProductionUnit1() {
    if (Matter >= 250) {
        Matter -= ProductionUnit_1.cost;
        ProductionUnit_1.cost *= 1.07;
        ProductionUnit_1.power++;
        ProductionUnit_1.level++;
        MatterPerSec = ProductionUnit_1.power;
        document.getElementById("ProductionUnit1").innerHTML = "Production Unit 1<br>" + "<br>Cost: " + format(ProductionUnit_1.cost) + "<br><br>Power: +" + format(ProductionUnit_1.power) + " Matter/sec<br><br>Level " + ProductionUnit_1.level;
        document.getElementById("MatterPerSec").textContent = format(MatterPerSec) + " Matter/sec";  
        setInterval(function() {
           Matter += 1;
           document.getElementById("Matter").innerText = "Matter: " + format(Matter);
        }, 1000);
    }
}

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

setInterval();