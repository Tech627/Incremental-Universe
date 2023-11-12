let Radiation = {
    DNA_points: new Decimal(10),
    DNAPerSec: new Decimal(1),
    RNA: new Decimal(0),
    InRadiation: false,
}

let Lab_Research = {
    Researches: new Decimal(0),
    cost: new Decimal(2500)
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