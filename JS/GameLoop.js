function GameLoop() {
    var MatterGenPower = new Decimal(0)
    MatterGenPower = MatterGenPower.add(MatterGenerator_1.amount)
    if (SoulsUpgrade_1.bought === true) {
       MatterGenPower = MatterGenPower.mul(1.5) // Souls upgrade 1.5x's power here   
    }
    if (SoulsUpgrade_4.bought === true) {
       MatterGenPower = MatterGenPower.mul(player.Souls.div(new Decimal(100))) // Multiply for souls upgrade 4
    }
    MatterGenPower = MatterGenPower.add(Challenges.Challenge1.RewardBoost)
    if(MatterGenerator_1.amount.lt(50)) {
      document.getElementById("Matter-generator").textContent = "Matter Generator [ " + format(MatterGenerator_1.amount) + " ]";
      document.getElementById("Matter-generator-cost").textContent = "Cost: " + format(MatterGenerator_1.cost);
    }
    if(MatterGenerator_1.amount.gte(50)) {
      document.getElementById("Matter-generator").textContent = "Weaken Matter Generator [ " + format(MatterGenerator_1.amount) + " ]";
      document.getElementById("Matter-generator-cost").textContent = "Cost: " + format(MatterGenerator_1.cost);
    }
    if(MatterGenerator_1.amount.gte(200)) {
      document.getElementById("Matter-generator").textContent = "Drastic Matter Generator [ " + format(MatterGenerator_1.amount) + " ]";
      document.getElementById("Matter-generator-cost").textContent = "Cost: " + format(MatterGenerator_1.cost);
    }
    // Adding the flat amount increase to the generation first to allow for proper multiplication and exponation
    player.MatterPerSec = player.MatterPerSec.add(MatterGenPower)
    
    var MatterBoostPower = new Decimal(0)
    MatterBoostPower = MatterBoostPower.add(MatterBoost_1.amount)
    if (SoulsUpgrade_4.bought === true) {
       MatterBoostPower = MatterBoostPower.mul(player.Souls.div(new Decimal(2000)))
    }
    if (Elements.el_2.bought === true) {
       MatterBoostPower = MatterBoostPower.mul(Elements.el_2.boost)
    }   
    MatterBoostPower = MatterBoostPower.add(Challenges.Challenge1.RewardBoost)
    if(MatterBoost_1.amount.lt(50)) {
      document.getElementById("Matter-boost").textContent = "Matter Boost [ " + format(MatterBoost_1.amount) + " ]";
      document.getElementById("Matter-boost-cost").textContent = "Cost: " + format(MatterBoost_1.cost);
    }
    if(MatterBoost_1.amount.gte(50)) {
      document.getElementById("Matter-boost").textContent = "Weaken Matter Boost [ " + format(MatterBoost_1.amount) + " ]";
      document.getElementById("Matter-boost-cost").textContent = "Cost: " + format(MatterBoost_1.cost);
    }
    if(MatterBoost_1.amount.gte(200)) {
      document.getElementById("Matter-boost").textContent = "Drastic Matter Boost [ " + format(MatterBoost_1.amount) + " ]";
      document.getElementById("Matter-boost-cost").textContent = "Cost: " + format(MatterBoost_1.cost);
    }
    // Multiplying generation alongside adding 1 to the multiplier incase that the play does not have any multiplier
    player.MatterPerSec = player.MatterPerSec.mul(MatterBoostPower.add(new Decimal(1)))
                                
    var MatterExtentPower = new Decimal(0)
    MatterExtentPower = MatterExtentPower.add(MatterExtent_1.amount)
    if (Elements.el_5.bought === true) {
       MatterExtentPower = MatterExtentPower.add(Elements.el_5.boost)
    }   
    if (SoulsUpgrade_6.bought === true) {
       MatterExtentPower = MatterExtentPower.mul(new Decimal(2)) // Multiply power by 2 if +1 Power is interpreted as i believe it sounds like it should be
    }   
    if (SoulsUpgrade_4.bought === true) {
       MatterExtentPower = MatterExtentPower.mul(player.Souls.div(new Decimal(1e7)))
    }   
    if (SoulsUpgrade_5.bought === true) {
       MatterExtentPower = MatterExtentPower.mul(player.Matter.div(new Decimal(1e10)))
    }
    if (Skill_up4.bought === true) {
       Blackholematterboost = MatterExtentPower.div(15)
    }
 
    MatterExtentPower = MatterExtentPower.add(Challenges.Challenge1.RewardBoost)
    if(MatterExtent_1.amount.lt(10)) {
      document.getElementById("Matter-extent").textContent = "Matter Extent [ " + format(MatterExtent_1.amount) + " ]"
      document.getElementById("Matter-extent-cost").textContent = "Cost: " + format(MatterExtent_1.cost);
    }
    if(MatterExtent_1.amount.gte(10)) {
      document.getElementById("Matter-extent").textContent = "Weaken Matter Extent [ " + format(MatterExtent_1.amount) + " ]"
      document.getElementById("Matter-extent-cost").textContent = "Cost: " + format(MatterExtent_1.cost);
    }
    if(MatterExtent_1.amount.gte(30)) {
      document.getElementById("Matter-extent").textContent = "Drastic Matter Extent [ " + format(MatterExtent_1.amount) + " ]"
      document.getElementById("Matter-extent-cost").textContent = "Cost: " + format(MatterExtent_1.cost);
    }
    document.getElementById("Tickspeed").textContent = "Tickspeed [" + format(Tickspeed1.amount) + "]";
    document.getElementById("Tickspeed-cost").textContent = "Cost: " + format(Tickspeed1.cost) + " Souls";
    document.getElementById("Universal-Collapse-cost").textContent = "Cost: " + format(UniversalCollapse1.cost)

    player.MatterPerSec = player.MatterPerSec.pow(MatterExtentPower.div(new Decimal(20)).add(new Decimal(1)))

    var UniversalCollapsePower = new Decimal(0)
    UniversalCollapsePower = UniversalCollapsePower.add(UniversalCollapse1.amount)
    player.MatterPerSec = player.MatterPerSec.pow(UniversalCollapsePower.div(new Decimal(20)).add(new Decimal(1)))

    var TickspeedPower = new Decimal(0)
    TickspeedPower = TickspeedPower.add(Tickspeed1.amount)
    
    player.MatterPerSec = player.MatterPerSec.mul(TickspeedPower.add(1))

    if(SoulsUpgrade_7.bought === true) {
      Tickspeed1.amount = Tickspeed1.amount.mul(player.Souls.div(1e6));
    }
    if(Elements.el_4.bought === true) {
      Tickspeed1.amount = Tickspeed1.amount.mul(2);
    }
 
    player.Matter = player.Matter.add(player.MatterPerSec.div(20))
    let Matter_hardcap = document.getElementById("Matter-hardcap1")

    player.SoulsPowerBoost = player.SoulsPowerBoost.add(player.SoulsPower.div(new Decimal(20)))
    document.getElementById("Souls-power").textContent = "You have " + format(player.SoulsPower) + " Souls power"
    document.getElementById("Souls-power-boost").textContent = "Multiply your Souls gain by " + format(player.SoulsPowerBoost)

    var HardCapRooted = new Decimal(0)
    if(player.Matter.gte(1e6)) {
       HardCapRooted = HardCapRooted.add(player.Matter.cbrt(player.Matter.cbrt(50)))
       Matter_hardcap.classList.add("show-Matter-hardcap1")
       player.MatterPerSec = player.MatterPerSec.sqrt(HardCapRooted)
    }
    document.getElementById("Matter-hardcap1").textContent = "Your Matter/sec is hardcapped rooted by " + format(HardCapRooted)

    document.getElementById("Matter").textContent = "Matter: " + format(player.Matter);
    document.getElementById("MatterPerSec").textContent = format(player.MatterPerSec) + " Matter/sec";
    document.getElementById("Souls").textContent = "Souls: " + format(player.Souls);   
    document.getElementById("Souls-Gain").textContent = "(+" + format(player.SoulsToGet) + " on reset)";
    document.getElementById("Dark-matter-currency").textContent = "Dark Matter: " + format(player.Dark_Matter_currency)
    document.getElementById("Dark-matter-gain").textContent = "(+" + format(player.Dark_MatterToGet) + " on reset)"
    if(player.Matter.lt(10000)) {
      player.SoulsToGet = new Decimal(0)
    }
    if(player.Matter.gte(10000)) {
      player.SoulsToGet = player.Matter.div(10000);  
      player.SoulsToGet = player.SoulsToGet.mul(player.SoulsPowerBoost.add(1))
    } 
    if(Elements.el_6.bought === true) {
      player.Souls = player.Souls.add(Elements.el_6.boost)
    }
    if(Challenges.Challenge2.Completed === true) {
      player.Souls = player.Souls.add(Challenges.Challenge2.RewardBoost)
    }
    if(SoulsUpgrade_2.bought === true) {
      player.SoulsToGet = player.Matter.div(3333)
    }
    if (Elements.el_7.bought === true) {
      player.Dark_Matter_currency = player.Dark_Matter_currency.add(Elements.el_7.boost)
    }
    if (BlackHoleUpgrade_5.bought === true) {
      player.Dark_Matter_currency = player.Dark_Matter_currency.add(player.Matter.log10(player.Matter));
    }
    if(Elements.el_9.bought === true) {
     player.Souls = player.Souls.add(player.SoulsToGet)
    }
 
  player.Black_HolePowerBoost = player.Black_HolePowerBoost.add(player.Black_HolePower.div(50))

  document.getElementById("Black-Hole-gain").textContent = "(" + format(player.Black_HolePerSec) + " Black Holes formed/sec)";
  document.getElementById("BH-extractor").textContent = "Black Hole Extractor [" + player.Black_HoleExtractor + "]";
  document.getElementById("Black-Hole-boost").textContent = "Currently: " + format(player.Black_Holeboost) + " boost to Matter Gain";
  document.getElementById("Dark-Matter-power").textContent = "You have " + format(player.Black_HolePower) + " Dark Matter power"
  document.getElementById("Dark-Matter-power-boost").textContent = "Multiply your Dark Matter gain by " + format(player.Black_HolePowerBoost)
  player.Black_Hole = player.Black_Hole.add(player.Black_HolePerSec);
  if(AtomsBoost.amount.gte(3)) {
    player.Black_Hole = player.Black_Hole.add(player.Electron_boost2);
  }
  document.getElementById("Black-Hole").textContent = "You have formed " + format(player.Black_Hole) + " Black Holes";
    if(BlackHoleUpgrade_2.bought === true) {
       player.Black_HolePerSec = player.Black_HolePerSec.mul(player.Matter.div(100))
    }
   player.MatterPerSec = player.MatterPerSec.mul(player.Black_HolePowerBoost);
   
   player.Dark_MatterToGet = player.Dark_MatterToGet.add(Math.sqrt(player.Souls.div(10000)));

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
 document.getElementById("Up-boost").textContent = "Adds " + format(UQuark_1.effect) + " free BH extractors"
 document.getElementById("Down-boost").textContent = "Boost Tickspeed by " + format(DQuark_1.effect) + "x"
 document.getElementById("Mediator-boost").textContent = "Boost your Quarks by " + format(MQuark_1.effect) + "x"
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
 if(Dialations.SoulsDialation.inDialation === true) {
  player.MatterPerSec = player.MatterPerSec.slog(new Decimal(0.25))
  player.SoulsToGet = player.SoulsToGet.add(player.Matter.div(10000).div(10000).div(100000000).sub(0.01));  
  DialationPoints = DialationPoints.add(DialationPerSec.div(40))
  DialationPerSec = DialationPerSec.add(player.Matter.sqrt(100).slog(1000))
  Dialation_container.classList.add("show-Dialation-container")
} 
if(Dialations.SoulsDialation.inDialation === false) {
  player.MatterPerSec = new Decimal(1)
  DialationPoints = DialationPoints.add(DialationPerSec.div(50))
  Dialation_container.classList.remove("show-Dialation-container")
}
 document.getElementById("Dialations-points").textContent = "You have " + format(DialationPoints) + " Space of dialations worth to be spended on upgrades"
 document.getElementById("Dialations-PerSec").textContent = format(DialationPerSec) + "/sec Space of Dialations"
 document.getElementById("Dialation-up1-Cost").textContent = "Cost: " + format(Dialations_ups.Dialation_up1.cost) + " Space of Dialations"
 document.getElementById("Dialation-up1-Level").textContent = "Level[" + format(Dialations_ups.Dialation_up1.level) + "+" + format(Dialations_ups.Dialation_up4.level) + "]"
 document.getElementById("Dialation-up2-Cost").textContent = "Cost: " + format(Dialations_ups.Dialation_up2.cost) + " Space of Dialations"
 document.getElementById("Dialation-up2-Level").textContent = "Level[" + format(Dialations_ups.Dialation_up2.level) + "+" + format(Dialations_ups.Dialation_up4.level) + "]"
 document.getElementById("Dialation-up3-Cost").textContent = "Cost: " + format(Dialations_ups.Dialation_up3.cost) + " Space of Dialations"
 document.getElementById("Dialation-up3-Level").textContent = "Level[" + format(Dialations_ups.Dialation_up3.level) + "+" +  format(Dialations_ups.Dialation_up4.level) + "]"
 document.getElementById("Dialation-up4-Cost").textContent = "Cost: " + format(Dialations_ups.Dialation_up4.cost) + " Space of Dialations"
 document.getElementById("Dialation-up4-Level").textContent = "Level[" + format(Dialations_ups.Dialation_up4.level) + "]"
 document.getElementById("Dialation-up5-Cost").textContent = "Cost: " + format(Dialations_ups.Dialation_up5.cost) + " Space of Dialations"
 document.getElementById("Dialation-up5-Level").textContent = "Level[" + format(Dialations_ups.Dialation_up5.level) + "]"
 document.getElementById("Dialation-up7-Cost").textContent = "Cost: " + format(Dialations_ups.Dialation_up7.cost) + " Space of Dialations"
 document.getElementById("Dialation-up7-Level").textContent = "Level[" + format(Dialations_ups.Dialation_up7.level) + "]"
 document.getElementById("Dialation-up8-Cost").textContent = "Cost: " + format(Dialations_ups.Dialation_up8.cost) + " Space of Dialations"
 document.getElementById("Dialation-up8-Level").textContent = "Level[" + format(Dialations_ups.Dialation_up8.level) + "]"
 var Dialations_up1_power = new Decimal(0)
 Dialations_up1_power = Dialations_up1_power.add(Dialations_ups.Dialation_up1.level)
 player.MatterPerSec = player.MatterPerSec.mul(Dialations_up1_power.add(new Decimal(1)).add(Dialations_up4_power))
 var Dialations_up2_power = new Decimal(0)
 Dialations_up2_power = Dialations_up2_power.add(Dialations_ups.Dialation_up2.level)
 player.SoulsToGet = player.SoulsToGet.mul(Dialations_up2_power.mul(new Decimal(0.2)).add(new Decimal(1)).add(Dialations_up4_power))
 var Dialations_up3_power = new Decimal(0)
 Dialations_up3_power = Dialations_up3_power.add(Dialations_ups.Dialation_up3.level)
 player.Dark_MatterToGet = player.Dark_MatterToGet.mul(Dialations_up3_power.mul(new Decimal(0.05)).add(new Decimal(1)))
 var Dialations_up4_power = new Decimal(0)
 Dialations_up4_power = Dialations_up4_power.add(Dialations_ups.Dialation_up4.level)
 Radiation.DNA_points = Radiation.DNA_points.add(Radiation.DNAPerSec.div(20))
 var Dialations_up5_power = new Decimal(0)
 Dialations_up5_power = Dialations_up5_power.add(Dialations_ups.Dialation_up5.level)
 player.MatterPerSec = player.MatterPerSec.mul(Dialations_up5_power.mul(100))
 player.SoulsToGet = player.SoulsToGet.mul(Dialations_up5_power.mul(100).add(1))
 var Dialations_up7_power = new Decimal(0)
 Dialations_up7_power = Dialations_up7_power.add(Dialations_ups.Dialation_up7.level)
 player.SoulsPower = player.SoulsPower.mul(Dialations_up7_power.add(10))
 var Dialation_up8_power = new Decimal(0)
 Dialation_up8_power = Dialation_up8_power.add(Dialations_ups.Dialation_up8.level)
 if(Radiation.InRadiation === true) {
   Radiation.DNAPerSec = new Decimal(1)
   if(Lab_Research.Researches_ups.Research_up1.bought === true) {
    Radiation.DNAPerSec = Radiation.DNAPerSec.mul(player.Matter.div(100))
   }
   if(Lab_Research.Researches_ups.Research_up2.bought === true) {
    Radiation.DNAPerSec = Radiation.DNAPerSec.mul(Radiation.RNA.div(1000))
   }
 }
 if(Radiation.InRadiation === false) {
   Radiation.DNAPerSec = new Decimal(0)
   Radiation.DNAPerSec = Radiation.DNAPerSec.add(Lab_Research.Researches)
   if(Lab_Research.Researches_ups.Research_up3.bought === true) {
    Radiation.DNAPerSec = Radiation.DNAPerSec.add(Lab_Research.Researches)
   }
 }
 Radiation.mRNA = Radiation.mRNA.add(Radiation.mRNA_perSec.div(20));
 Radiation.mRNA_perSec = Radiation.mRNA_perSec.mul(Radiation.mRNA_increaser);
 Radiation.mRNA_boost = Radiation.mRNA_boost.add(Radiation.mRNA.div(1e3).div(1e4));
 player.MatterPerSec = player.MatterPerSec.add(Radiation.mRNA_boost.sqrt(5));
 Radiation.tRNA = Radiation.tRNA.add(Radiation.tRNA_perSec.div(20));
 Radiation.tRNA_perSec = Radiation.tRNA_perSec.mul(Radiation.tRNA_increaser);
 Radiation.tRNA_boost = Radiation.tRNA_boost.add(Radiation.tRNA.div(1e5).div(1e4));
 player.QuarkToGet = player.QuarkToGet.add(Radiation.tRNA_boost.sqrt(7))
 document.getElementById("DNA").textContent = "You have " + format(Radiation.DNA_points) + " DNA"
 document.getElementById("DNA-PerSec").textContent = "+" + format(Radiation.DNAPerSec) + " DNA/sec"
 document.getElementById("Research-cost").textContent = "Cost: " + format(Lab_Research.cost) + " DNA"
 document.getElementById("RNA").textContent = "You have " + format(Radiation.RNA) + " RNA"
 document.getElementById("mRNA").textContent = "You have " + format(Radiation.mRNA) + " mRNA +" + format(Radiation.mRNA_perSec) + "/sec (x" + format(Radiation.mRNA_increaser) + "/sec)"
 document.getElementById("mRNA-boost").textContent = "Boosting your Matter by " + format(Radiation.mRNA_boost) + "x"
 document.getElementById("tRNA").innerHTML = "You have " + format(Radiation.tRNA) + " tRNA <br>+" + format(Radiation.tRNA_perSec) + "/sec (x" + format(Radiation.tRNA_increaser) + "/sec)"
 document.getElementById("tRNA-boost").textContent = "Boosting your Quarks by " + format(Radiation.tRNA_boost) + "x"
 document.getElementById("Best-ever-Matter").textContent = "Your best Matter is " + format(player.Matter)
 document.getElementById("audio-game").loop = true
 }   
 setInterval(GameLoop,1000/20)
 setInterval(function() {
  Save()
 }, 30000)
function formatNumber(number) {
   return number < 10 ? '0' + number : number;
}
function updateClock() {
   // Increment the total elapsed seconds-
   totalSeconds = totalSeconds.add(1);

   // Calculate hours, minutes, and seconds
   const hours = formatNumber(Math.round(totalSeconds / 3600));
   const minutes = formatNumber(Math.round((totalSeconds % 3600) / 60));
   const seconds = formatNumber(totalSeconds % 60);

   // Display the formatted time in the clock element
   document.getElementById("time-spent").textContent = `Time spent: ${hours}:${minutes}:${seconds}`;
}

let totalSeconds = new Decimal(0);

// Update the clock every second
setInterval(updateClock, 1000);