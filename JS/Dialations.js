let Dialations = {
    MatterDialation: {
         inDialation: false,
    },
}

let Dialations_ups = {
    Dialation_up1: {
        cost: new Decimal(1000000),
        level: new Decimal(0)
    }
}

let DialationPoints = new Decimal(0);
let DialationPerSec = new Decimal(0);

function MatterDialation() {
    Dialations.MatterDialation.inDialation = true
    player.Matter = new Decimal(0)
}

function MatterDialationClosed() {
    Dialations.MatterDialation.inDialation = false
}

function BuyDialationUp1() {
    if(DialationPoints >= Dialations_ups.Dialation_up1.cost) {
        Dialations_ups.Dialation_up1.level = Dialations_ups.Dialation_up1.level.add(1);
        player.MatterPerSec = player.MatterPerSec.pow(0.3)
    }
}