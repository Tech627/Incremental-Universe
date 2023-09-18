let Elements = {
    el_1: {
        cost: 1e10,
        boost: 0,
        bought: false,
    },
    el_2: {
        cost: 1e200,
        boost: 0,
        bought: false,
    },
    el_3: {
        cost: 1e17,
        bought: false,
    },
    el_4: {
        cost: 1e20,
        bought: false,
    },
}

function BuyEl1() {
    if (player.Quarks >= Elements.el_3.cost) {
        Elements.el_3.bought = true
        boost = Math.sqrt(Math.log10(player.Quarks))
    }
}

function BuyEl2() {
    if (player.Black_Hole >= Elements.el_3.cost) {
        Elements.el_3.bought = true
        boost = Math.log10(Math.sqrt(Black_HoleMachine))
    }
}

function BuyEl3() {
    if (player.Quarks >= Elements.el_3.cost) {
        Elements.el_3.bought = true
    }
}

function BuyEl4() {
    if (player.Matter >= Elements.el_3.cost) {
        Elements.el_3.bought = true
    }
}
