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
    let BlackholematterBoost = new Decimal(0)
    let Challange_1 = document.getElementById("Challange1");
    let Achievement_1 = document.getElementById("Achievement1");
    let Achievement_2 = document.getElementById("Achievement2");
    let Sacrifice_Prestige = document.getElementById("SacrificePrestige");
    let Dark_Matter_button = document.getElementById("Dark-matter-button");
    let Tickspeed2 = document.getElementById("Tickspeed")
    let Tickspeed_cost = document.getElementById("Tickspeed-cost");
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
        power: new Decimal(1),
        amount: new Decimal(0),
       }
    
    // Souls Upgrades
    
       var SoulsUpgrade_1 = {
        cost: new Decimal(1),
        bought: false,
       }
    
       var SoulsUpgrade_2 = {
        cost: new Decimal(10),
        bought: false,
       }
    
       var SoulsUpgrade_3 = {
        cost: new Decimal(20),
        bought: false,
       }
    
       var SoulsUpgrade_4 = {
        cost: new Decimal(250),
        bought: false,
       }
    
       var SoulsUpgrade_5 = {
        cost: new Decimal(1000),
        bought: false,
       }
    
       var SoulsUpgrade_6 = {
        cost: new Decimal(5000),
        bought: false,
       }
    
       var SoulsUpgrade_7 = {
        cost: new Decimal(1e5),
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
            MatterGenerator_1.cost = MatterGenerator_1.cost.mul(1.5);
            MatterGenerator_1.amount = MatterGenerator_1.amount.add(1);
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
            MatterBoost_1.cost = MatterBoost_1.cost.mul(4);
            MatterBoost_1.amount = MatterBoost_1.amount.add(1);
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
            MatterExtent_1.cost = MatterExtent_1.cost.mul(9);
            MatterExtent_1.amount = MatterExtent_1.amount.add(1);
        }
    }
    
    function Tickspeed() {
        if(player.Souls >= Tickspeed1.cost) {
            player.Souls = player.Souls.sub(Tickspeed1.cost);
            player.MatterPerSec = player.MatterPerSec.mul(Tickspeed1.power);
            Tickspeed1.cost = Tickspeed1.cost.mul(2);
            Tickspeed1.power = Tickspeed1.power.add(1);
            Tickspeed1.amount = Tickspeed1.amount.add(1);
        }
        if(SoulsUpgrade_7.bought === true) {
            Tickspeed1.power = Tickspeed1.power.mul(player.Souls.div(1e6));
        }
        if(Elements.el_4.bought === true) {
            Tickspeed1.power = Tickspeed1.power.mul(2);
        }
    }
    
    function UniversalCollapse() {
        if(player.Matter.gte(UniversalCollapse1.cost)) {
            player.Matter = player.Matter.sub(UniversalCollapse1.cost);
            player.MatterPerSec = player.MatterPerSec.mul(1.1);
            UniversalCollapse1.amount = UniversalCollapse1.amount.add(1)
            UniversalCollapse1.cost = UniversalCollapse1.cost.pow(1.5);
        }
    }

    // BH-tab 
    
    function BlackHoleExtractor() {
        if (player.Dark_Matter_currency >= Black_HoleMachine.cost) {
            player.Dark_Matter_currency = player.Dark_Matter_currency.sub(Black_HoleMachine.cost);
            Black_HoleMachine.cost = Black_HoleMachine.cost.mul(2);
            Black_HoleMachine.power = Black_HoleMachine.power.add(1);
            Black_HoleMachine.amount = Black_HoleMachine.amount.add(1);
            player.Black_HoleExtractor = player.Black_HoleExtractor.add(1);
            player.Black_HolePerSec = player.Black_HolePerSec.add(Math.sqrt(Black_HoleMachine.power));
            player.Black_Holeboost = player.Black_Holeboost.add(Math.log10(Math.sqrt(Black_Hole * Black_HoleMachine.power)));
            document.getElementById("Black-Hole-gain").textContent = "(" + format(Black_HolePerSec) + " Black Holes formed/sec)";
            document.getElementById("BH-extractor").textContent = "Black Hole Extractor [" + Black_HoleExtractor + "]";
            document.getElementById("Black-Hole-boost").textContent = "Currently: " + format(Black_Holeboost) + " boost to Matter Gain";
            setInterval(function () {
                player.Black_Hole = player.Black_Hole.add(player.Black_HolePerSec);
                player.Black_Hole = player.Black_Hole.add(player.Electron_boost2);
                document.getElementById("Black-Hole").textContent = "You have formed " + format(Black_Hole) + " Black Holes";
            }, 1000);
            setInterval(function() {
                player.Matter = player.Matter.mul(player.Black_Holeboost);
            }, 1000);
            if(BlackHoleUpgrade_2.bought === true) {
                player.Black_HolePerSec = player.Black_HolePerSec.mul(player.Matter.div(100))
            }
        }
    }
    
    // Souls-Upgrade
    
    function SoulsUpgrade1() {
        if(player.Souls.gte(SoulsUpgrade_1.cost)) {
            player.Souls = player.Souls.sub(SoulsUpgrade_1.cost);
            SoulsUpgrade_1.bought = true;
        }
    }
    
    function SoulsUpgrade2() {
        if(player.Souls.gte(SoulsUpgrade_2.cost)) {
            player.Souls = player.Souls.sub(SoulsUpgrade_2.cost);
            SoulsUpgrade_2.bought = true;
        }
    }
    
    function SoulsUpgrade3() {
        if(player.Souls.gte(SoulsUpgrade_3.cost)) {
            player.Souls = player.Souls.sub(SoulsUpgrade_3.cost);
            SoulsUpgrade_3.bought = true;
            Tickspeed2.classList.add("show-Tickspeed");
            Tickspeed_cost.classList.add("show-Tickspeed-cost");
        }
    }
    
    function SoulsUpgrade4() {
        if(player.Souls.gte(SoulsUpgrade_4.cost)) {
            player.Souls = player.Souls.sub(SoulsUpgrade_4.cost);
            SoulsUpgrade_4.bought = true;
        }
    }
    
    function SoulsUpgrade5() {
        if(player.Souls.gte(SoulsUpgrade_5.cost)) {
            player.Souls = player.Souls.sub(SoulsUpgrade_5.cost);
            SoulsUpgrade_5.bought = true;
        }
    }
    
    function SoulsUpgrade6() {
        if(player.Souls.gte(SoulsUpgrade_6.cost)) {
            player.Souls = player.Souls.sub(SoulsUpgrade_6.cost);
            SoulsUpgrade_6.bought = true;
        }
    }
    
    function SoulsUpgrade7() {
        if(player.Souls.gte(SoulsUpgrade_7.cost)) {
            player.Souls = player.Souls.sub(SoulsUpgrade_7.cost);
            SoulsUpgrade_7.bought = true;
        }
    }
    
    
    function SoulsUpgrade8() {
        if(player.Souls.gte(SoulsUpgrade_8.cost)) {
            player.Souls = player.Souls.sub(SoulsUpgrade_8.cost);
            SoulsUpgrade_8.bought = true;
        }
    }
    
    
    function SoulsUpgrade9() {
        if(player.Souls.gte(SoulsUpgrade_9.cost)) {
            player.Souls = player.Souls.sub(SoulsUpgrade_9.cost);
            SoulsUpgrade_9.bought = true;
        }
    }
    
    
    function SoulsUpgrade10() {
        if(player.Souls.gte(SoulsUpgrade_10.cost)) {
            player.Souls = player.Souls.sub(SoulsUpgrade_10.cost);
            SoulsUpgrade_10.bought = true;
        }
    }
    
    // Black Hole Upgrades 
    
    function BlackHoleUpgrade1() {
        if(player.Black_Hole.gte(BlackHoleUpgrade_1.cost)) {
            player.Black_Hole = player.Black_Hole.sub(BlackHoleUpgrade_1.cost);
            BlackHoleUpgrade_1.bought = true;
        }
    }
    
    function BlackHoleUpgrade2() {
        if(player.Black_Hole.gte(BlackHoleUpgrade_2.cost)) {
            player.Black_Hole = player.Black_Hole.sub(BlackHoleUpgrade_2.cost);
            BlackHoleUpgrade_2.bought = true;
        }
    }
    
    function BlackHoleUpgrade3() {
        if(player.Quarks.gte(BlackHoleUpgrade_3.cost)) {
            player.Quarks = player.Quarks.sub(BlackHoleUpgrade_3.cost);
            BlackHoleUpgrade_3.bought = true;
        }
    }
    
    function BlackHoleUpgrade4() {
        if(player.Atoms.gte(BlackHoleUpgrade_4.cost)) {
            player.Atoms = player.Atoms.sub(BlackHoleUpgrade_4.cost);
            BlackHoleUpgrade_4.bought = true;
        }
    }
    
    function BlackHoleUpgrade5() {
        if(player.Dark_Matter_currency.gte(BlackHoleUpgrade_5.cost)) {
            player.Dark_Matter_currency = player.Dark_Matter_currency.sub(BlackHoleUpgrade_5.cost);
            BlackHoleUpgrade_5.bought = true;
        }
    }
    
    function BlackHoleUpgrade6() {
        if(player.Dark_Matter_currency.gte(BlackHoleUpgrade_6.cost)) {
            player.Dark_Matter_currency = player.Dark_Matter_currency.sub(BlackHoleUpgrade_6.cost);
            BlackHoleUpgrade_6.bought = true;
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
        if(Elements.el_6.bought === true) {
            player.Souls = player.Souls.add(Elements.el_6.boost)
        }
        if(Challenges.Challenge2.Completed === true) {
            player.Souls = player.Souls.add(Challenges.Challenge2.RewardBoost)
        }
    }
    
    // Dark matter Prestige
    
    function DarkMatterPrestige() {
        if(player.Souls.gte(10000)) {
            player.Dark_Matter_currency = player.Dark_Matter_currency.add(Math.sqrt(player.Souls.div(10000)));
            player.Dark_MatterToGet = player.Dark_MatterToGet.add(Math.sqrt(player.Souls.div(10000)));
            player.MatterPerSec = 1;
            player.Matter = player.Matter.sub(player.Matter);
            player.MatterPerSec = new Decimal(1);
            MatterGenerator_1.cost = new Decimal(10);
            MatterGenerator_1.amount = new Decimal(0);
            MatterBoost_1.cost = new Decimal(100);
            MatterBoost_1.amount = new Decimal(0);
            MatterExtent_1.cost = new Decimal(1e3);
            MatterExtent_1.amount = new Decimal(0);
            player.Souls = player.Souls.sub(player.Souls);
            setInterval(function() {
                document.getElementById("Dark-matter-currency").textContent = "Dark Matter: " + format(player.Dark_MatterToGet);
            }, 1000);
        }
        if (Elements.el_7.bought === true) {
            player.Dark_Matter_currency = player.Dark_Matter_currency.add(Elements.el_7.boost)
        }
        if (BlackHoleUpgrade_5.bought === true)
           player.Dark_Matter_currency = player.Dark_Matter_currency.add(player.Matter.log10(player.Matter));
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
    
    // Quarks-tab
    
    function QuarksGain() {
        if(player.Black_Hole.gte(5e6)) {
           player.Quarks = player.Quarks.add(player.Black_Hole.sqrt(player.Black_Hole.div(5e6)));
           player.Black_Hole = player.Black_Hole.sub(player.Black_Hole.sqrt(player.Black_Hole.div(5e6)));
           document.getElementById("Quarks-currency").textContent = "You have developed " + format(player.Quarks) + " Quarks";
        }
    }
    
    var UQuark_1 = {
        cost: 1e21,
        effect: 1,
    }
    
    function UQuark() {
        if(player.Quarks.gte(UQuark_1.cost)) {
            player.Quarks = player.Quarks.sub(player.Quarks);
            UQuark_1.effect = UQuark_1.effect.add(player.Quarks.div(1e21));
            Black_HoleMachine.power = Black_HoleMachine.power.add(UQuark_1.effect)
            document.getElementById("Up-boost").textContent = "Adds " + UQuark_1.effect + " free BH extractors"
        }
    }
    
    // Atoms-tab
    
    var AtomsBoost = {
        amount: 0,
        cost: 10,
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
        if(player.Matter >= Challenges.Challenge1.goal) {
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
        if(player.Souls >= Challenges.Challenge2.goal) {
            Challenges.Challenge2.Completed = true
        }
    }
    
    //Save & Load
    
    function Save() {
        if(localStorage) {
            localStorage.setItem("Matter", JSON.stringify(player.Matter));
            localStorage.setItem("MatterPerSec", JSON.stringify(player.MatterPerSec));
            localStorage.setItem("Achievement1", JSON.stringify(Achievement_1));
            localStorage.setItem("Achievement2", JSON.stringify(Achievement_2));
            localStorage.setItem("Challange1", JSON.stringify(Challange_1));
            localStorage.setItem("Souls", JSON.stringify(player.Souls));
            localStorage.setItem("Souls-Gain", JSON.stringify(player.SoulsGain));
            localStorage.setItem("Matter-generator", JSON.stringify(MatterGenerator_1));
            localStorage.setItem("Matter-boost", JSON.stringify(MatterBoost_1));
            localStorage.setItem("Matter-extent", JSON.stringify(MatterExtent_1));
            localStorage.setItem("Tickspeed", JSON.stringify(Tickspeed1));
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
            const SavedTickspeed = localStorage.getItem("Tickspeed");
            const SavedDark_Matter_currency = localStorage.getItem("Dark-matter-currency");
            const SavedMatterGenerator = localStorage.getItem("Matter-generator");
            const SavedMatterBoost = localStorage.getItem("Matter-boost");
            const SavedMatterExtent = localStorage.getItem("Matter-extent");
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
}