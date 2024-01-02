let player = {
    Matter: new Decimal(10),
    MatterPerSec: new Decimal(1),
    Souls: new Decimal(0),
    SoulsPower: new Decimal(0),
    SoulsPowerBoost: new Decimal(0),
    SoulsToGet: new Decimal(0),
    SoulsGain: new Decimal(0),
    Dark_Matter_currency: new Decimal(0),
    Dark_MatterToGet: new Decimal(0),
    Black_Hole: new Decimal(0),
    Black_HolePower: new Decimal(0),
    Black_HolePowerBoost: new Decimal(0),
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
let Scalings = {
    weaken: new Decimal(1.25),
    drastic: new Decimal(3.5),
}    
    let BlackholematterBoost = new Decimal(0)
    let Challange_1 = document.getElementById("Challange1");
    let Achievement_1 = document.getElementById("Achievement1");
    let Achievement_2 = document.getElementById("Achievement2");
    let Sacrifice_Prestige = document.getElementById("SacrificePrestige");
    let Dark_Matter_button = document.getElementById("Dark-matter-button");
    let BH_tab = document.getElementById("BH-tab");
    
    // Matter tab
    
       let MatterGenerator_1 = {
        cost: new Decimal(10),
        amount: new Decimal(0),
       }
    
       let MatterBoost_1 = {
        cost: new Decimal(100),
        amount: new Decimal(0),
       }
    
       let MatterExtent_1 = {
        cost: new Decimal(1e3),
        amount: new Decimal(0),
       }
    
       let Tickspeed1 = {
        cost: new Decimal(1),
        amount: new Decimal(0),
       }

       let UniversalCollapse1 = {
        cost: new Decimal(150),
        amount: new Decimal(0),
       }
    
    // BH-tab
    
       let Black_HoleMachine = {
        cost: new Decimal(1),
        amount: new Decimal(1),
       }
    
    // Souls Upgrades
    
       var SoulsUpgrade_1 = {
        cost: new Decimal(5),
        bought: false,
       }
    
       var SoulsUpgrade_2 = {
        cost: new Decimal(100),
        bought: false,
       }
    
       var SoulsUpgrade_3 = {
        cost: new Decimal(250),
        bought: false,
       }
    
       var SoulsUpgrade_4 = {
        cost: new Decimal(5e3),
        bought: false,
       }
    
       var SoulsUpgrade_5 = {
        cost: new Decimal(1e5),
        bought: false,
       }
    
       var SoulsUpgrade_6 = {
        cost: new Decimal(1e6),
        bought: false,
       }
    
       var SoulsUpgrade_7 = {
        cost: new Decimal(1e8),
        bought: false,
       }
    
       var SoulsUpgrade_8 = {
        cost: new Decimal(1e90),
        bought: false,
       }
    
       var SoulsUpgrade_9 = {
        cost: new Decimal(1e120),
        bought: false,
       }
    
       var SoulsUpgrade_10 = {
        cost: new Decimal(1e250),
        bought: false,
       }
    
    // Black Hole Upgrades
    
       var BlackHoleUpgrade_1 = {
        cost: new Decimal(10),
        bought: false,
       }
    
       var BlackHoleUpgrade_2 = {
        cost: new Decimal(100),
        bought: false,
       }
    
       var BlackHoleUpgrade_3 = {
        cost: new Decimal(1e5),
        bought: false,
       }
    
       var BlackHoleUpgrade_4 = {
        cost: new Decimal(1e5),
        bought: false,
       }
    
       var BlackHoleUpgrade_5 = {
        cost: new Decimal(1e120),
        bought: false,
       }
    
       var BlackHoleUpgrade_6 = {
        cost: new Decimal(1e180),
        bought: false,
       }
    
       var BlackHoleUpgrade_7 = {
        cost: new Decimal(1e300),
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
        if(SoulsUpgrade_9.bought === true) {
            Tickspeed1.power = Tickspeed1.power.add(MatterGenerator_1.power)
        }
        if(SoulsUpgrade_8.bought === true) {
            Black_HoleMachine.power = Black_HoleMachine.power.add(Tickspeed1.power) 
        }
    }, 1)
    
    setInterval(function() {
        player.ProtonPerSec_1 = player.ProtonPerSec_1.add(player.Matter.log10(player.Matter.sqrt(player.Matter.div(1e6)).div(1e7)))
        player.Proton_1.add(player.ProtonPerSec_1);
        if(BlackHoleUpgrade_3.bought === true) {
            player.ProtonPerSec_1.add(player.Quarks.div(1e6));
        }
        document.getElementById("ProtonPerSec").textContent = "(+" + format(player.ProtonPerSec_1) + " Protons Per sec)";
        document.getElementById("Proton").textContent = format(player.Proton_1) + " Protons";    
        player.NeutronPerSec_1.add(player.Souls.sqrt(player.Souls.sqrt(player.Souls.div(1e6)).div(1e7)));
        player.Neutron_1.add(player.NeutronPerSec_1);
        if(BlackHoleUpgrade_3.bought === true) {
            player.NeutronPerSec_1.add(player.Quarks.div(1e6));
        }
        document.getElementById("NeutronPerSec").textContent = "(+" + format(player.NeutronPerSec_1) + " Neutrons Per sec)";
        document.getElementById("Neutron").textContent = format(player.Neutron_1) + " Neutrons"
        player.ElectronPerSec_1.add(player.Souls.sqrt(player.Souls.sqrt(player.Souls.div(1e6)).div(1e7)));
        player.Electron_1.add(player.ElectronPerSec_1)
        if(BlackHoleUpgrade_4.bought === true) {
            player.ElectronPerSec_1.add(player.Atoms.div(1e7));
        }
        document.getElementById("ElectronPerSec").textContent = "(+" + format(player.ElectronPerSec_1) + " Electrons Per sec)"
        document.getElementById("Electron").textContent = format(player.Electron_1) + " Electrons"
        document.getElementById("el_CurrentBoost1").textContent = "Currently: " + format(Elements.el_1.boost) + "x to Atoms"
        document.getElementById("el_CurrentBoost2").textContent = "Currently: +" + format(Elements.el_2.boost) + " to Matter Boosts"
        document.getElementById("el_CurrentBoost3").textContent = "Currently: " + format(Elements.el_3.boost) + "x to Matter Extent"
        document.getElementById("el_CurrentBoost4").textContent = "Currently: x" + format(Elements.el_4.boost) + " to Souls"
        document.getElementById("el_CurrentBoost5").textContent = "Currently: x" + format(Elements.el_5.boost) + " to Dark Matter"
        document.getElementById("el_CurrentBoost6").textContent = "Currently: x" + format(Elements.el_6.boost) + " to Helium"
    }, 20);
    
    setInterval(function() {
        player.Proton_boost2.add(player.Proton_1.log10(player.Proton_1));
        player.Neutron_boost2.add(player.Neutron_1);
        player.Electron_boost2.add(player.Electron_1);
        document.getElementById("Proton-boost").textContent = format(player.Proton_boost2) + "x boost to Matter Generator";
        document.getElementById("Neutron-boost").textContent = format(player.Neutron_boost2) + "x boost to Souls gain";
        document.getElementById("Electron-boost").textContent = format(player.Electron_boost2) + "x boost to Formed Black Holes";
    }, 20);
    
    function MatterGenerator() {
        if(player.Matter.gte(MatterGenerator_1.cost)) {
            if(BlackHoleUpgrade_1.bought === false) {
                player.Matter = player.Matter.sub(MatterGenerator_1.cost);
            }
            if(BlackHoleUpgrade_1.bought === true ) {
                player.Matter = player.Matter.sub(0);
            }
            if(MatterGenerator_1.amount.lt(50)) {
                MatterGenerator_1.cost = MatterGenerator_1.cost.mul(1.5);
                MatterGenerator_1.amount = MatterGenerator_1.amount.add(1);
            }
            if(MatterGenerator_1.amount.gte(50)) {
                MatterGenerator_1.cost = MatterGenerator_1.cost.mul(new Decimal(1.5).mul(new Decimal(Scalings.weaken)));
                MatterGenerator_1.amount = MatterGenerator_1.amount.add(new Decimal(1));
            }
            if(MatterGenerator_1.amount.gte(200)) {
                MatterGenerator_1.cost = MatterGenerator_1.cost.mul(new Decimal(1.5).mul(new Decimal(Scalings.drastic)));
                MatterGenerator_1.amount = MatterGenerator_1.amount.add(new Decimal(1));
            }
        }
    }
    
    function MatterBoost() {
        if(player.Matter.gte(MatterBoost_1.cost)) {
            if(BlackHoleUpgrade_1.bought === false ) {
                player.Matter = player.Matter.sub(MatterBoost_1.cost);
            }
            if(BlackHoleUpgrade_1.bought === true ) {
                player.Matter = player.Matter.sub(0);
            }
            if(MatterBoost_1.amount.lt(50)) {
                MatterBoost_1.cost = MatterBoost_1.cost.mul(new Decimal(4));
                MatterBoost_1.amount = MatterBoost_1.amount.add(new Decimal(1));
            }
            if(MatterBoost_1.amount.gte(50)) {
                MatterBoost_1.cost = MatterBoost_1.cost.mul(new Decimal(4).mul(Scalings.weaken));
                MatterBoost_1.amount = MatterBoost_1.amount.add(new Decimal(1));
            }
            if(MatterBoost_1.amount.gte(200)) {
                MatterBoost_1.cost = MatterBoost_1.cost.mul(new Decimal(4).mul(Scalings.drastic));
                MatterBoost_1.amount = MatterBoost_1.amount.add(new Decimal(1));
            }
        }
    }
    
    function MatterExtent() {
        if(player.Matter.gte(MatterExtent_1.cost)) {
            if(BlackHoleUpgrade_1.bought === false ) {
                player.Matter = player.Matter.sub(MatterExtent_1.cost);
            }
            if(BlackHoleUpgrade_1.bought === true ) {
                player.Matter = player.Matter.sub(0);
            }
            if(MatterExtent_1.amount.lt(10)) {
                MatterExtent_1.cost = MatterExtent_1.cost.mul(new Decimal(9));
                MatterExtent_1.amount = MatterExtent_1.amount.add(new Decimal(1));
            }
            if(MatterExtent_1.amount.gte(10)) {
                MatterExtent_1.cost = MatterExtent_1.cost.mul(new Decimal(9).mul(Scalings.weaken));
                MatterExtent_1.amount = MatterExtent_1.amount.add(new Decimal(1));
            }
            if(MatterExtent_1.amount.gte(30)) {
                MatterExtent_1.cost = MatterExtent_1.cost.mul(new Decimal(9).mul(Scalings.weaken));
                MatterExtent_1.amount = MatterExtent_1.amount.add(new Decimal(1));
            }
        }
    }
    
    function Tickspeed() {
        if(player.Souls.gte(Tickspeed1.cost)) {
            player.Souls = player.Souls.sub(Tickspeed1.cost);
            Tickspeed1.cost = Tickspeed1.cost.mul(2);
            Tickspeed1.amount = Tickspeed1.amount.add(1);
        }
    }
    
    function UniversalCollapse() {
        if(player.Matter.gte(UniversalCollapse1.cost)) {
            player.Matter = player.Matter.sub(UniversalCollapse1.cost);
            UniversalCollapse1.amount = UniversalCollapse1.amount.add(1)
            UniversalCollapse1.cost = UniversalCollapse1.cost.pow(1.5);
        }
    }

    // BH-tab 
    
    function BlackHoleExtractor() {
        if (player.Dark_Matter_currency.gte(Black_HoleMachine.cost)) {
            player.Dark_Matter_currency = player.Dark_Matter_currency.sub(Black_HoleMachine.cost);
            Black_HoleMachine.cost = Black_HoleMachine.cost.mul(2);
            Black_HoleMachine.amount = Black_HoleMachine.amount.add(1);
            player.Black_HoleExtractor = player.Black_HoleExtractor.add(1);
            player.Black_HolePerSec = player.Black_HolePerSec.add(Black_HoleMachine.sqrt(Black_HoleMachine.power));
            player.Black_Holeboost = player.Black_Holeboost.add(Black_Hole.log10(Black_Hole.sqrt(Black_Hole * Black_HoleMachine.power)));
        }
    }
    
    // Souls-Upgrade
    
    function SoulsUpgrade1() {
        if(player.Souls.gte(SoulsUpgrade_1.cost)) {
            if(SoulsUpgrade_1.bought === false) {
                player.Souls = player.Souls.sub(SoulsUpgrade_1.cost);
                SoulsUpgrade_1.bought = true;     
                player.SoulsPower = player.SoulsPower.add(1)
            }
            if(SoulsUpgrade_1.bought === true) {
                player.Souls = player.Souls.sub(0)
            }
        }
    }
    
    function SoulsUpgrade2() {
        if(player.Souls.gte(SoulsUpgrade_2.cost)) {
            if(SoulsUpgrade_2.bought === false) {
                player.Souls = player.Souls.sub(SoulsUpgrade_2.cost);
                SoulsUpgrade_2.bought = true;     
                player.SoulsPower = player.SoulsPower.add(3)
            }
            if(SoulsUpgrade_2.bought === true) {
                player.Souls = player.Souls.sub(0)
            }
        }
    }
    
    function SoulsUpgrade3() {
        if(player.Souls.gte(SoulsUpgrade_3.cost)) {
            if(SoulsUpgrade_3.bought === false) {
                player.Souls = player.Souls.sub(SoulsUpgrade_3.cost);
                SoulsUpgrade_3.bought = true;    
                player.SoulsPower = player.SoulsPower.add(5) 
            }
            if(SoulsUpgrade_3.bought === true) {
                player.Souls = player.Souls.sub(0)
            }
        }
    }
    
    function SoulsUpgrade4() {
        if(player.Souls.gte(SoulsUpgrade_4.cost)) {
            if(SoulsUpgrade_4.bought === false) {
                player.Souls = player.Souls.sub(SoulsUpgrade_4.cost);
                SoulsUpgrade_4.bought = true;     
                player.SoulsPower = player.SoulsPower.add(7)
            }
            if(SoulsUpgrade_4.bought === true) {
                player.Souls = player.Souls.sub(0)
            }
        }
    }
    
    function SoulsUpgrade5() {
        if(player.Souls.gte(SoulsUpgrade_5.cost)) {
            if(SoulsUpgrade_5.bought === false) {
                player.Souls = player.Souls.sub(SoulsUpgrade_5.cost);
                SoulsUpgrade_5.bought = true;     
                player.SoulsPower = player.SoulsPower.add(9)
            }
            if(SoulsUpgrade_5.bought === true) {
                player.Souls = player.Souls.sub(0)
            }
        }
    }
    
    function SoulsUpgrade6() {
        if(player.Souls.gte(SoulsUpgrade_6.cost)) {
            if(SoulsUpgrade_6.bought === false) {
                player.Souls = player.Souls.sub(SoulsUpgrade_6.cost);
                SoulsUpgrade_6.bought = true; 
                player.SoulsPower = player.SoulsPower.add(11)    
            }
            if(SoulsUpgrade_6.bought === true) {
                player.Souls = player.Souls.sub(0)
            }
        }
    }
    
    function SoulsUpgrade7() {
        if(player.Souls.gte(SoulsUpgrade_7.cost)) {
            if(SoulsUpgrade_7.bought === false) {
                player.Souls = player.Souls.sub(SoulsUpgrade_7.cost);
                SoulsUpgrade_7.bought = true;  
                player.SoulsPower = player.SoulsPower.add(13)   
            }
            if(SoulsUpgrade_7.bought === true) {
                player.Souls = player.Souls.sub(0)
            }
        }
    }
    
    
    function SoulsUpgrade8() {
        if(player.Souls.gte(SoulsUpgrade_8.cost)) {
            if(SoulsUpgrade_8.bought === false) {
                player.Souls = player.Souls.sub(SoulsUpgrade_8.cost);
                SoulsUpgrade_8.bought = true;     
                player.SoulsPower = player.SoulsPower.add(15)
            }
            if(SoulsUpgrade_8.bought === true) {
                player.Souls = player.Souls.sub(0)
            }
        }
    }
    
    
    function SoulsUpgrade9() {
        if(player.Souls.gte(SoulsUpgrade_9.cost)) {
            if(SoulsUpgrade_9.bought === false) {
                player.Souls = player.Souls.sub(SoulsUpgrade_9.cost);
                SoulsUpgrade_9.bought = true; 
                player.SoulsPower = player.SoulsPower.add(17)    
            }
            if(SoulsUpgrade_9.bought === true) {
                player.Souls = player.Souls.sub(0)
            }
        }
    }
    
    
    function SoulsUpgrade10() {
        if(player.Souls.gte(SoulsUpgrade_10.cost)) {
            if(SoulsUpgrade_10.bought === false) {
                player.Souls = player.Souls.sub(SoulsUpgrade_10.cost);
                SoulsUpgrade_10.bought = true;     
                player.SoulsPower = player.SoulsPower.add(19)
            }
            if(SoulsUpgrade_10.bought === true) {
                player.Souls = player.Souls.sub(0)
            }
        }
    }
    
    // Black Hole Upgrades 
    
    function BlackHoleUpgrade1() {
        if(player.Black_Hole.gte(BlackHoleUpgrade_1.cost)) {
            if(BlackHoleUpgrade_1.bought === false) {
                player.Black_Hole = player.Black_Hole.sub(BlackHoleUpgrade_1.cost);
                BlackHoleUpgrade_1.bought = true;
                player.Black_HolePower = player.Black_HolePower.add(1)
            }
            if(BlackHoleUpgrade_1.bought === true) {
                player.Black_Hole = player.Black_Hole.sub(0)
            }
        }
    }
    
    function BlackHoleUpgrade2() {
        if(player.Black_Hole.gte(BlackHoleUpgrade_2.cost)) {
            if(BlackHoleUpgrade_2.bought === false) {
                player.Black_Hole = player.Black_Hole.sub(BlackHoleUpgrade_2.cost);
                BlackHoleUpgrade_2.bought = true;
                player.Black_HolePower = player.Black_HolePower.add(3)
            }
            if(BlackHoleUpgrade_2.bought === true) {
                player.Black_Hole = player.Black_Hole.sub(0)
            }
        }
    }
    
    function BlackHoleUpgrade3() {
        if(player.Quarks.gte(BlackHoleUpgrade_3.cost)) {
            if(BlackHoleUpgrade_3.bought === false) {
                player.Quarks = player.Quarks.sub(BlackHoleUpgrade_3.cost);
                BlackHoleUpgrade_3.bought = true;
                player.Black_HolePower = player.Black_HolePower.add(5)
            }
            if(BlackHoleUpgrade_3.bought === true) {
                player.Quarks = player.Quarks.sub(0)
            }
        }
    }
    
    function BlackHoleUpgrade4() {
        if(player.Atoms.gte(BlackHoleUpgrade_4.cost)) {
            if(BlackHoleUpgrade_4.bought === false) {
                player.Atoms = player.Atoms.sub(BlackHoleUpgrade_4.cost);
                BlackHoleUpgrade_4.bought = true;
                player.Black_HolePower = player.Black_HolePower.add(7)
            }
            if(BlackHoleUpgrade_4.bought === true) {
                player.Atoms = player.Atoms.sub(0)
            }
        }
    }
    
    function BlackHoleUpgrade5() {
        if(player.Dark_Matter_currency.gte(BlackHoleUpgrade_5.cost)) {
            if(BlackHoleUpgrade_5.bought === false) {
                player.Dark_Matter_currency = player.Dark_Matter_currency.sub(BlackHoleUpgrade_5.cost);
                BlackHoleUpgrade_5.bought = true;
                player.Black_HolePower = player.Black_HolePower.add(9)
            }
            if(BlackHoleUpgrade_5.bought === true) {
                player.Dark_Matter_currency = player.Dark_Matter_currency.sub(0)
            }
        }
    }
    
    function BlackHoleUpgrade6() {
        if(player.Dark_Matter_currency.gte(BlackHoleUpgrade_6.cost)) {
             if(BlackHoleUpgrade_6.bought === false) {
                player.Dark_Matter_currency = player.Dark_Matter_currency.sub(BlackHoleUpgrade_6.cost);
                BlackHoleUpgrade_6.bought = true;
                player.Black_HolePower = player.Black_HolePower.add(11)
             }
             if(BlackHoleUpgrade_6.bought === true) {
                player.Dark_Matter_currency = player.Dark_Matter_currency.sub(0)
             }
        }
    }
    
    //Sacrifice Prestige
    
    function SacrificePrestige() {
        if(player.Matter.gte(10000)) {
            player.Souls = player.Souls.add(player.SoulsToGet);
            player.Matter = player.Matter.sub(player.Matter);
            player.SoulsToGet = new Decimal(0);
            player.MatterPerSec = new Decimal(1);
            MatterGenerator_1.cost = new Decimal(10);
            MatterGenerator_1.amount = new Decimal(0);
            MatterBoost_1.cost = new Decimal(100);
            MatterBoost_1.amount = new Decimal(0);
            MatterExtent_1.cost = new Decimal(1e3);
            MatterExtent_1.amount = new Decimal(0);
        }
    }
    
    // Dark matter Prestige
    
    function DarkMatterPrestige() {
        if(player.Souls.gte(10000)) {
            player.Dark_Matter_currency = player.Dark_Matter_currency.add(player.Dark_MatterToGet);
            player.MatterPerSec = new Decimal(1);
            player.Matter = player.Matter.sub(player.Matter);
            MatterGenerator_1.cost = new Decimal(10);
            MatterGenerator_1.amount = new Decimal(0);
            MatterBoost_1.cost = new Decimal(100);
            MatterBoost_1.amount = new Decimal(0);
            MatterExtent_1.cost = new Decimal(1e3);
            MatterExtent_1.amount = new Decimal(0);
            player.Souls = player.Souls.sub(player.Souls);
        }
    }
    
    // Skill-upgrades
    
    var Skill_up1 = {
        cost: new Decimal(1),
        bought: false,
    }
    
    var Skill_up2 = {
        cost: new Decimal(5),
        bought: false,
    }
    
    var Skill_up3 = {
        cost: new Decimal(1e5),
        bought: false,
    }
    
    var Skill_up4 = {
        cost: new Decimal(1e12),
        bought: false,
    }
    
    var Skill_up5 = {
        cost: new Decimal(1e3),
        bought: false,
    }

    var Skill_up6 = {
        cost: new Decimal(1e3),
        bought: false,
    }

    var Skill_up7 = {
        cost: new Decimal(3),
        bought: false
    }
    
    function Skill1() {
        if (player.Dark_Matter_currency.gte(Skill_up1.cost)) {
            player.Dark_Matter_currency = player.Dark_Matter_currency.sub(Skill_up1.cost);
            Skill_up1.bought = true;
        }
    }
    
    function Skill2() {
        if (player.Dark_Matter_currency.gte(Skill_up2.cost)) {
            player.Dark_Matter_currency = player.Dark_Matter_currency.sub(Skill_up2.cost);
            Skill_up2.bought = true;
            BH_tab.classList.add("show-BH-tab");
        }
    }
    
    function Skill3() {
        if (player.Black_Hole.gte(Skill_up3.cost)) {
            player.Black_Hole = player.Black_Hole.sub(Skill_up3.cost);
            Skill_up3.bought = true;
        }
    }
    
    function Skill4() {
        if (player.Black_Hole.gte(Skill_up4.cost)) {
            player.Black_Hole = player.Black_Hole.sub(Skill_up4.cost);
            Skill_up4.bought = true;
        }
    }
    
    function Skill5() {
        if (player.Dark_Matter_currency.gte(Skill_up5.cost)) {
            player.Dark_Matter_currency = player.Dark_Matter_currency.sub(Skill_up5.cost);
            Skill_up5.bought = true;
        }
    }

    function Skill6() {
        if (Radiation.DNA_points.gte(Skill_up6.cost)) {
            Radiation.DNA_points = Radiation.DNA_points.sub(Skill_up6.cost);
            Skill_up6.bought = true
        }
    }
    function Skill7() {
        if (Lab_Research.Researches.gte(Skill_up7.cost)) {
            Skill_up7.bought = true
        }
    }
    
    // Quarks-tab
    
    function QuarksGain() {
        if(player.Black_Hole.gte(5e6)) {
           player.Quarks = player.Quarks.add(player.Black_Hole.sqrt(player.Black_Hole.div(5e6)));
           player.Black_Hole = player.Black_Hole.sub(player.Black_Hole.sqrt(player.Black_Hole.div(5e6)));
           document.getElementById("Quarks-currency").textContent = "You have developed " + format(player.Quarks) + " Quarks";
        }
    }
    
    var UQuark_1 = {
        cost: new Decimal(1e21),
        effect: new Decimal(1),
    }

    var DQuark_1 = {
        cost: new Decimal(1e90),
        effect: new Decimal(1),
    }

    var MQuark_1 = {
        cost: new Decimal(1e275),
        effect: new Decimal(1),
    }
    
    function UQuark() {
        if(player.Quarks.gte(UQuark_1.cost)) {
            player.Quarks = player.Quarks.sub(player.Quarks);
            UQuark_1.effect = UQuark_1.effect.add(player.Quarks.div(1e21));
            Black_HoleMachine.power = Black_HoleMachine.power.add(UQuark_1.effect)
        }
    }
    
    function DQuark() {
        if(player.Quarks.gte(DQuark_1.cost)) {
            player.Quarks = player.Quarks.sub(player.Quarks);
            DQuark_1.effect = DQuark_1.effect.add(player.Quarks.div(1e90));
            Tickspeed1.amount = Tickspeed1.amount.mul(DQuark_1.effect);
        }
    }

    function MQuark() {
        if(player.Quarks.gte(MQuark_1.cost)) {
            player.Quarks = player.Quarks.sub(player.Quarks);
            MQuark_1.effect = MQuark_1.effect.add(player.Quarks.div(1e275));
            player.Quarks = player.Quarks.mul(MQuark_1.effect);
        }
    }
    
    // Atoms-tab
    
    var AtomsBoost = {
        amount: new Decimal(0),
        cost: new Decimal(10),
    }
    
    function AtomsGain() {
        if(player.Quarks.gte(100)) {
            player.Atoms = player.Atoms.add(player.Quarks.sqrt(player.Quarks.div(100)));
            player.AtomsBoost.amount = player.AtomsBoost.amount.add(1);
            document.getElementById("Atoms-currency").textContent = "You have developed " + format(player.Atoms) + " Atoms";
         }
         if(Elements.el_1.bought === true) {
            player.Atoms = player.Atoms.mul(Elements.el_1.boost)
         }
    }
    
    //Challanges
    
    let Challenges = {
        Challenge1: {
            goal: new Decimal(1000),
            RewardBoost: new Decimal(1),
            Completed: false,
            InChallenge: false
        },
        Challenge2: {
            goal: new Decimal(2500),
            RewardBoost: new Decimal(1),
            Completed: false,
            InChallenge: false
        }
    }
    
    function Challenge1() {
        player.Matter = new Decimal(10)
        player.MatterPerSec = new Decimal(1)
        MatterGenerator_1.amount = new Decimal(0)
        MatterGenerator_1.cost = new Decimal(10)
        MatterBoost_1.amount = new Decimal(0)
        MatterBoost_1.cost = new Decimal(100)
        MatterExtent_1.amount = new Decimal(0)
        MatterExtent_1.cost = new Decimal(1e3)
        Challenges.Challenge1.InChallenge = true
        document.getElementById("Matter-generator-cost").ariaDisabled = true
        document.getElementById("Matter-boost-cost").ariaDisabled = true
        document.getElementById("Matter-extent-cost").ariaDisabled = true
    }
    
    function Challenge2() {
        player.Matter = new Decimal(10)
        player.MatterPerSec = new Decimal(1)
        MatterGenerator_1.amount = new Decimal(0)
        MatterGenerator_1.cost = new Decimal(10)
        MatterBoost_1.amount = new Decimal(0)
        MatterBoost_1.cost = new Decimal(100)
        MatterExtent_1.amount = new Decimal(0)
        MatterExtent_1.cost = new Decimal(1e3)
        Challenges.Challenge2.InChallenge = true
        player.Souls = player.Souls.slog(player.Matter.sqrt(10000)) 
    }

    function BackBtn() {
        player.Matter = new Decimal(10)
        player.MatterPerSec = new Decimal(1)
        MatterGenerator_1.amount = new Decimal(0)
        MatterGenerator_1.cost = new Decimal(10)
        MatterBoost_1.amount = new Decimal(0)
        MatterBoost_1.cost = new Decimal(100)
        MatterExtent_1.amount = new Decimal(0)
        MatterExtent_1.cost = new Decimal(1e3)
        Challenges.Challenge1.InChallenge = false
        document.getElementById("Matter-generator-cost").ariaDisabled = false
        document.getElementById("Matter-boost-cost").ariaDisabled = false
        document.getElementById("Matter-extent-cost").ariaDisabled = false
    }

    function BackBtn1() {
        player.Matter = new Decimal(10)
        player.MatterPerSec = new Decimal(1)
        MatterGenerator_1.amount = new Decimal(0)
        MatterGenerator_1.cost = new Decimal(10)
        MatterBoost_1.amount = new Decimal(0)
        MatterBoost_1.cost = new Decimal(100)
        MatterExtent_1.amount = new Decimal(0)
        MatterExtent_1.cost = new Decimal(1e3)
        Challenges.Challenge1.InChallenge = false
        player.Souls = player.Souls.sqrt(player.Matter.div(10000))
    }
    
    function FinnishBtn() {
        player.Matter = new Decimal(10)
        player.MatterPerSec = new Decimal(1)
        MatterGenerator_1.amount = new Decimal(0)
        MatterGenerator_1.cost = new Decimal(10)
        MatterBoost_1.amount = new Decimal(0)
        MatterBoost_1.cost = new Decimal(100)
        MatterExtent_1.amount = new Decimal(0)
        MatterExtent_1.cost = new Decimal(1e3)
        Challenges.Challenge1.InChallenge = false
        document.getElementById("Matter-generator-cost").ariaDisabled = false
        document.getElementById("Matter-boost-cost").ariaDisabled = false
        document.getElementById("Matter-extent-cost").ariaDisabled = false
        if(player.Matter.gte(Challenges.Challenge1.goal)) {
            Challenges.Challenge1.Completed = true
        }
    }

    function FinnishBtn1() {
        player.Matter = new Decimal(10)
        player.MatterPerSec = new Decimal(1)
        MatterGenerator_1.amount = new Decimal(0)
        MatterGenerator_1.cost = new Decimal(10)
        MatterBoost_1.amount = new Decimal(0)
        MatterBoost_1.cost = new Decimal(100)
        MatterExtent_1.amount = new Decimal(0)
        MatterExtent_1.cost = new Decimal(1e3)
        Challenges.Challenge2.InChallenge = false
        player.Souls = player.Souls.sqrt(player.Matter.div(10000))
        if(player.Souls.gte(Challenges.Challenge2.goal)) {
            Challenges.Challenge2.Completed = true
        }
    }