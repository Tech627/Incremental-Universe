let Dialations = {
    MatterDialation: {
         inDialation: false,
    },
    SoulsDialation: {
        inDialation: false,
    }
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
    },
    Dialation_up5: {
        cost: new Decimal(1e70),
        level: new Decimal(0),
    },
    Dialation_up6: {
        cost: new Decimal(1e110),
        level: new Decimal(0),
    },
    Dialation_up7: {
        cost: new Decimal(1e180),
        level: new Decimal(0),
    },
    Dialation_up8: {
        cost: new Decimal(1e250),
        level: new Decimal(0),
    }
}

let DialationPoints = new Decimal(0);
let DialationPerSec = new Decimal(0);
let Dialation_container = document.getElementById("Dialation-container")

function MatterDialation() {
    Dialations.MatterDialation.inDialation = true
    player.Matter = new Decimal(10)
    player.Souls = new Decimal(0)
}

function SoulsDialation() {
    Dialations.SoulsDialation.inDialation = true
    player.Matter = new Decimal(10)
    player.Souls = new Decimal(0)
}

function MatterDialationClosed() {
    Dialations.MatterDialation.inDialation = false
    player.Matter = new Decimal(10)
    player.Souls = new Decimal(0)
}

function SoulsDialationClosed() {
    Dialations.SoulsDialation.inDialation = false
    player.Matter = new Decimal(10)
    player.Souls = new Decimal(0)
}

function BuyDialationUp1() {
    if(DialationPoints.gte(Dialations_ups.Dialation_up1.cost)) {
        DialationPoints = DialationPoints.sub(Dialations_ups.Dialation_up1.cost)
        Dialations_ups.Dialation_up1.level = Dialations_ups.Dialation_up1.level.add(1);
        Dialations_ups.Dialation_up1.cost = Dialations_ups.Dialation_up1.cost.add(1e3)
    }
}

function BuyDialationUp2() {
    if(DialationPoints.gte(Dialations_ups.Dialation_up2.cost)) {
        DialationPoints = DialationPoints.sub(Dialations_ups.Dialation_up2.cost)
        Dialations_ups.Dialation_up2.level = Dialations_ups.Dialation_up2.level.add(1);
        Dialations_ups.Dialation_up2.cost = Dialations_ups.Dialation_up2.cost.add(1e8)
    }
}

function BuyDialationUp3() {
    if(DialationPoints.gte(Dialations_ups.Dialation_up3.cost)) {
        DialationPoints = DialationPoints.sub(Dialations_ups.Dialation_up3.cost)
        Dialations_ups.Dialation_up3.level = Dialations_ups.Dialation_up3.level.add(1);
        Dialations_ups.Dialation_up3.cost = Dialations_ups.Dialation_up3.cost.add(1e14)
    }
}

function BuyDialationUp4() {
    if(DialationPoints.gte(Dialations_ups.Dialation_up4.cost)) {
        DialationPoints = DialationPoints.sub(Dialations_ups.Dialation_up4.cost)
        Dialations_ups.Dialation_up4.level = Dialations_ups.Dialation_up4.level.add(1);
        Dialations_ups.Dialation_up4.cost = Dialations_ups.Dialation_up4.cost.add(1e19)
    }
}

function BuyDialationUp5() {
    if(DialationPoints.gte(Dialations_ups.Dialation_up5.cost)) {
        DialationPoints = DialationPoints.sub(Dialations_ups.Dialation_up5.cost)
        Dialations_ups.Dialation_up5.level = Dialations_ups.Dialation_up5.level.add(1);
        Dialations_ups.Dialation_up5.cost = Dialations_ups.Dialation_up5.cost.add(1e2)
    }
}

function BuyDialationUp7() {
    if(DialationPoints.gte(Dialations_ups.Dialation_up7.cost)) {
        DialationPoints = DialationPoints.sub(Dialations_ups.Dialation_up7.cost)
        Dialations_ups.Dialation_up7.level = Dialations_ups.Dialation_up7.level.add(1);
        Dialations_ups.Dialation_up7.cost = Dialations_ups.Dialation_up7.cost.add(1e6)
    }
}

function BuyDialationUp8() {
    if(DialationPoints.gte(Dialations_ups.Dialation_up8.cost)) {
        DialationPoints = DialationPoints.sub(Dialations_ups.Dialation_up8.cost)
        Dialations_ups.Dialation_up8.level = Dialations_ups.Dialation_up8.level.add(1);
        Dialations_ups.Dialation_up8.cost = Dialations_ups.Dialation_up8.cost.add(1e15)
    }
}