function GameLoop() {
    var MatterGenPower = new Decimal(0)
    MatterGenPower = MatterGenPower.add(MatterGenerator_1.amount)
    if (SoulsUpgrade_1.bought == true) {
       MatterGenPower = MatterGenPower.mul(1.5) // Souls upgrade 1.5x's power here   
    }
    if (SoulsUpgrade_4.bought == true) {
       MatterGenPower = MatterGenPower.mul(player.Souls.div(new Decimal(100))) // Multiply for souls upgrade 4
    }
    MatterGenPower = MatterGenPower.add(Challenges.Challenge1.RewardBoost)
    document.getElementById("Matter-generator").textContent = "Matter Generator [ " + format(MatterGenerator_1.amount) + " ]";
    document.getElementById("Matter-generator-cost").textContent = "Cost: " + format(MatterGenerator_1.cost);
    // Adding the flat amount increase to the generation first to allow for proper multiplication and exponation
    player.MatterPerSec = player.MatterPerSec.add(MatterGenPower)
    
    var MatterBoostPower = new Decimal(0)
    MatterBoostPower = MatterBoostPower.add(MatterBoost_1.amount)
    if (SoulsUpgrade_4.bought == true) {
       MatterBoostPower = MatterBoostPower.mul(player.Souls.div(new Decimal(2000)))
    }
    if (Elements.el_2.bought == true) {
       MatterBoostPower = MatterBoostPower.mul(Elements.el_2.boost)
    }   
    MatterBoostPower = MatterBoostPower.add(Challenges.Challenge1.RewardBoost) 
    document.getElementById("Matter-boost").textContent = "Matter Boost [ " + format(MatterBoost_1.amount) + " ]";
    document.getElementById("Matter-boost-cost").textContent = "Cost: " + format(MatterBoost_1.cost);
    // Multiplying generation alongside adding 1 to the multiplier incase that the play does not have any multiplier
    player.MatterPerSec = player.MatterPerSec.mul(MatterBoostPower.add(new Decimal(1)))
                                
    var MatterExtentPower = new Decimal(0)
    MatterExtentPower = MatterExtentPower.add(MatterExtent_1.amount)
    if (Elements.el_5.bought == true) {
       MatterExtentPower = MatterExtentPower.add(Elements.el_5.boost)
    }   
    if (SoulsUpgrade_6.bought == true) {
       MatterExtentPower = MatterExtentPower.mul(new Decimal(2)) // Multiply power by 2 if +1 Power is interpreted as i believe it sounds like it should be
    }   
    if (SoulsUpgrade_4.bought == true) {
       MatterExtentPower = MatterExtentPower.mul(player.Souls.div(new Decimal(1e7)))
    }   
    if (SoulsUpgrade_5.bought == true) {
       MatterExtentPower = MatterExtentPower.mul(player.Matter.div(new Decimal(1e10)))
    }
    if (Skill_up4.bought == true) {
       Blackholematterboost = MatterExtentPower.div(15)
    }
 
    MatterExtentPower = MatterExtentPower.add(Challenges.Challenge1.RewardBoost)

    document.getElementById("Matter-extent").textContent = "Matter Extent [ " + format(MatterExtent_1.amount) + " ]"
    document.getElementById("Matter-extent-cost").textContent = "Cost: " + format(MatterExtent_1.cost);
    document.getElementById("Tickspeed").textContent = "Tickspeed [" + format(Tickspeed1.amount) + "]";
    document.getElementById("Tickspeed-cost").textContent = "Cost: " + format(Tickspeed1.cost) + " Souls";
    document.getElementById("Universal-Collapse-cost").textContent = "Cost: " + format(UniversalCollapse1.cost)

    player.MatterPerSec = player.MatterPerSec.pow(MatterExtentPower.div(new Decimal(20)).add(new Decimal(1)))

    var UniversalCollapsePower = new Decimal(0)
    UniversalCollapsePower = UniversalCollapsePower.add(UniversalCollapse1.amount)
    player.MatterPerSec = player.MatterPerSec.pow(UniversalCollapsePower.div(new Decimal(20)).add(new Decimal(1)))
 
    player.Matter = player.Matter.add(player.MatterPerSec.div(20))
 
    document.getElementById("Matter").textContent = "Matter: " + format(player.Matter);
    document.getElementById("MatterPerSec").textContent = format(player.MatterPerSec) + " Matter/sec";
    document.getElementById("Souls").textContent = "Souls: " + format(player.Souls);   
    document.getElementById("Souls-Gain").textContent = "(+" + format(player.SoulsToGet) + ")";
    if(player.Matter.gte(10000)) {
      player.SoulsToGet = player.SoulsToGet.add(player.Matter.sqrt(player.Matter.div(10000)));   
    }
    if(SoulsUpgrade_2.bought === true) {
      player.SoulsToGet = player.SoulsToGet.add(player.Matter.sqrt(player.Matter.div(3333)));
  }

    if(Elements.el_9.bought === true) {
     player.Souls = player.Souls.add(player.SoulsToGet)
     document.getElementById("Souls").textContent = "Souls: " + format(player.Souls)
   }

   if(BlackHoleUpgrade_6.bought === true) {
     if(player.Matter.gte(MatterGenerator_1.cost)) {
             MatterGenerator()      
     }
     if(player.Matter.gte(MatterBoost_1.cost)) {
             MatterBoost()      
     }
     if(player.Matter.gte(MatterExtent_1.cost)) {
             MatterExtent()      
     }
 }
 if(player.Matter.gte(Challenges.Challenge1.goal) && Challenges.Challenge1.InChallenge === true) {
     Finnish_button.classList.add("show-Finnish-button")
 }
 if(Challenges.Challenge1.Completed === true) {
     Challenges.Challenge1.RewardBoost = Challenges.Challenge1.RewardBoost.add(Math.log10(Math.log10(Math.sqrt(player.Matter))))
 }
 if(Challenges.Challenge2.Completed === true) {
   Challenges.Challenge2.RewardBoost = Challenges.Challenge2.RewardBoost.add(Math.log10(Math.slog(Math.sqrt(player.Souls))))
 }
 if(Dialations.MatterDialation.inDialation === true) {
     player.MatterPerSec = player.MatterPerSec.slog(new Decimal(0.25))
     DialationPoints = DialationPoints.add(DialationPerSec.div(50))
     DialationPerSec = DialationPerSec.add(player.Matter.sqrt(100).slog(1000))
     Dialation_container.classList.add("show-Dialation-container")
 } 
 if(Dialations.MatterDialation.inDialation === false) {
     player.MatterPerSec = new Decimal(1)
     DialationPoints = DialationPoints.add(DialationPerSec.div(50))
     Dialation_container.classList.remove("show-Dialation-container")
 }
 document.getElementById("Dialations-points").textContent = "You have " + format(DialationPoints) + " Space of dialations worth to be spended on upgrades"
 document.getElementById("Dialations-PerSec").textContent = format(DialationPerSec) + "/sec Space of Dialations"
 document.getElementById("Dialation-up1-Cost").textContent = "Cost: " + format(Dialations_ups.Dialation_up1.cost) + " Space of Dialations"
 document.getElementById("Dialation-up2-Cost").textContent = "Cost: " + format(Dialations_ups.Dialation_up2.cost) + " Space of Dialations"
 document.getElementById("Dialation-up3-Cost").textContent = "Cost: " + format(Dialations_ups.Dialation_up3.cost) + " Space of Dialations"
 document.getElementById("Dialation-up4-Cost").textContent = "Cost: " + format(Dialations_ups.Dialation_up4.cost) + " Space of Dialations"
 var Dialations_up1_power = new Decimal(0)
 Dialations_up1_power = Dialations_up1_power.add(Dialations_ups.Dialation_up1.level)
 player.MatterPerSec = player.MatterPerSec.pow(Dialations_up1_power.div(new Decimal(33)).add(new Decimal(1)))
 Radiation.DNA_points = Radiation.DNA_points.add(Radiation.DNAPerSec.div(20))
 if(Radiation.InRadiation === true) {
   Radiation.DNAPerSec = new Decimal(-1)
 }
 if(Radiation.InRadiation === false) {
   Radiation.DNAPerSec = new Decimal(1)
   Radiation.DNAPerSec = Radiation.DNAPerSec.add(Lab_Research.Researches)
 }
 document.getElementById("DNA").textContent = "You have " + format(Radiation.DNA_points) + " DNA"
 document.getElementById("DNA-PerSec").textContent = "+" + format(Radiation.DNAPerSec) + " DNA/sec"
 document.getElementById("Research-cost").textContent = "Cost: " + format(Lab_Research.cost) + " DNA"
 document.getElementById("RNA").textContent = "You have " + format(Radiation.RNA) + " RNA"
 }   
 setInterval(GameLoop,1000/20)