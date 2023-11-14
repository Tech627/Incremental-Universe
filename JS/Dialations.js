let Dialations = {
    MatterDialation: {
         inDialation: false,
    },
}

let Dialations_ups = {
    Dialation_up1: {
        cost: new Decimal(1e6),
        level: new Decimal(0),
    },
    Dialation_up2: {
        cost: new Decimal(1e12),
        level: new Decimal(0),
    },
    Dialation_up3: {
        cost: new Decimal(1e20),
        level: new Decimal(0),
    },
    Dialation_up4: {
        cost: new Decimal(1e35),
        level: new Decimal(0),
    }
}

let DialationPoints = new Decimal(0);
let DialationPerSec = new Decimal(0);
let Dialation_container = document.getElementById("Dialation-container")

function MatterDialation() {
    Dialations.MatterDialation.inDialation = true
    player.Matter = new Decimal(10)
}

function MatterDialationClosed() {
    Dialations.MatterDialation.inDialation = false
    player.Matter = new Decimal(10)
}

function BuyDialationUp1() {
    if(DialationPoints.gte(Dialations_ups.Dialation_up1.cost)) {
        DialationPoints = DialationPoints.sub(Dialations_ups.Dialation_up1.cost)
        Dialations_ups.Dialation_up1.level = Dialations_ups.Dialation_up1.level.add(1);
        Dialations_ups.Dialation_up1.cost = Dialations_ups.Dialation_up1.level.add(1)
    }
}

function BuyDialationUp2() {
    if(DialationPoints.gte(Dialations_ups.Dialation_up2.cost)) {
        DialationPoints = DialationPoints.sub(Dialations_ups.Dialation_up2.cost)
        Dialations_ups.Dialation_up2.level = Dialations_ups.Dialation_up2.level.add(1);
        Dialations_ups.Dialation_up2.cost = Dialations_ups.Dialation_up2.level.add(1)
    }
}

function BuyDialationUp3() {
    if(DialationPoints.gte(Dialations_ups.Dialation_up3.cost)) {
        DialationPoints = DialationPoints.sub(Dialations_ups.Dialation_up3.cost)
        Dialations_ups.Dialation_up3.level = Dialations_ups.Dialation_up3.level.add(1);
        Dialations_ups.Dialation_up3.cost = Dialations_ups.Dialation_up3.level.add(1)
    }
}

function BuyDialationUp4() {
    if(DialationPoints.gte(Dialations_ups.Dialation_up4.cost)) {
        DialationPoints = DialationPoints.sub(Dialations_ups.Dialation_up4.cost)
        Dialations_ups.Dialation_up4.level = Dialations_ups.Dialation_up4.level.add(1);
        Dialations_ups.Dialation_up4.cost = Dialations_ups.Dialation_up4.level.add(1)
    }
}