let Radiation = {
    DNA_points: new Decimal(10),
    DNAPerSec: new Decimal(0),
    RNA: new Decimal(0),
    InRadiation: false,
}

let Lab_Research = {
    Researches: new Decimal(0),
    cost: new Decimal(2500),
    Researches_ups: {
        Research_up1: {
            cost: new Decimal(1e5),
            bought: false,
        },
        Research_up2: {
            cost: new Decimal(1e7),
            bought: false,
        },
        Research_up3: {
            cost: new Decimal(1e11),
            bought: false,
        }
    }
}

function Radiate() {
    Radiation.InRadiation = true
}

function CloseRadiate() {
    Radiation.InRadiation = false
}

function LabResearch() {
    if(Radiation.DNA_points.gte(Lab_Research.cost)) {
        Radiation.DNA_points = Radiation.DNA_points.sub(Lab_Research.cost)
        Lab_Research.Researches = Lab_Research.Researches.add(1);
        Lab_Research.cost = Lab_Research.Researches.pow(5);
    }
}

function RNATransfer() {
    Radiation.RNA = Radiation.RNA.add(Radiation.DNA_points.div(5))
    Radiation.DNA_points = Radiation.DNA_points.sub(Radiation.DNA_points)
}

function BuyResearchUp1() {
    if(Radiation.DNA_points.gte(Lab_Research.Researches_ups.Research_up1.cost)) {
        if(Lab_Research.Researches_ups.Research_up1.bought === false) {
            Radiation.DNA_points = Radiation.DNA_points.sub(Lab_Research.Researches_ups.Research_up1.cost)
            Lab_Research.Researches_ups.Research_up1.bought === true
        }
        if(Lab_Research.Researches_ups.Research_up1.bought === true) {
            Radiation.DNA_points = Radiation.DNA_points.sub(0)
        }
    }
}

function BuyResearchUp2() {
    if(Radiation.DNA_points.gte(Lab_Research.Researches_ups.Research_up2.cost)) {
        if(Lab_Research.Researches_ups.Research_up2.bought === false) {
            Radiation.DNA_points = Radiation.DNA_points.sub(Lab_Research.Researches_ups.Research_up2.cost)
            Lab_Research.Researches_ups.Research_up2.bought === true
        }
        if(Lab_Research.Researches_ups.Research_up2.bought === true) {
            Radiation.DNA_points = Radiation.DNA_points.sub(0)
        }
    }
}

function BuyResearchUp3() {
    if(Radiation.DNA_points.gte(Lab_Research.Researches_ups.Research_up3.cost)) {
        if(Lab_Research.Researches_ups.Research_up3.bought === false) {
            Radiation.DNA_points = Radiation.DNA_points.sub(Lab_Research.Researches_ups.Research_up3.cost)
            Lab_Research.Researches_ups.Research_up3.bought === true
        }
        if(Lab_Research.Researches_ups.Research_up3.bought === true) {
            Radiation.DNA_points = Radiation.DNA_points.sub(0)
        }
    }
}