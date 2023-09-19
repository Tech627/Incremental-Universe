let Elements = {
    el_1: {
        cost: 1e10,
        boost: 1,
        bought: false,
    },
    el_2: {
        cost: 1e200,
        boost: 1,
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
    el_5: {
        cost: 1e30,
        boost: 1,
        bought: false,
    },
    el_6: {
        cost: 1e70,
        boost: 1,
        bought: false,
    },
    el_7: {
        cost: 1e90,
        boost: 1,
        bought: false,
    },
    el_8: {
        cost: 1e60,
        boost: 1,
        bought: false,
    },
    el_9: {
        cost: 1e110,
        bought: false,
    },
    el_10: {
        cost: 1e80,
        bought: false,
    },
}

function BuyEl1() {
    if (player.Quarks >= Elements.el_1.cost) {
        Elements.el_1.bought = true
        boost = Math.sqrt(Math.log10(player.Quarks))
        player.Quark -= Elements.el_1.cost
    }
}

function BuyEl2() {
    if (player.Black_Hole >= Elements.el_2.cost) {
        Elements.el_2.bought = true
        boost = Math.log10(Math.sqrt(Black_HoleMachine.power))
        player.Black_Hole -= Elements.el_2.cost 
    }
}

function BuyEl3() {
    if (player.Quarks >= Elements.el_3.cost) {
        Elements.el_3.bought = true
        player.Quarks -= Elements.el_3.cost
    }
}

function BuyEl4() {
    if (player.Matter >= Elements.el_4.cost) {
        Elements.el_4.bought = true
        player.Matter -= Elements.el_4.cost
    }
}

function BuyEl5() {
    if (player.Quarks >= Elements.el_5.cost) {
        Elements.el_5.bought = true
        Elements.el_5.boost = Math.sqrt(Math.sqrt(player.Quarks))
        player.Quarks -= Elements.el_5.cost
    }
}

function BuyEl6() {
    if (player.Souls >= Elements.el_6.cost) {
        Elements.el_6.bought = true 
        Elements.el_6.boost = Math.log10(Math.log10(Math.sqrt(player.Souls)))
        player.Souls -= Elements.el_6.cost
    }
}

function BuyEl7() {
    if (player.Dark_Matter_currency >= Elements.el_7.cost) {
        Elements.el_7.bought = true 
        Elements.el_7.boost = Math.log10(Math.log10(Math.sqrt(player.Dark_Matter_currency)))
        player.Dark_Matter_currency -= Elements.el_7.cost
    }
}

function BuyEl8() {
    if (player.Quarks >= Elements.el_8.cost) {
        Elements.el_8.bought = true
        Elements.el_1.boost += Math.sqrt(Math.log10(Tickspeed1.power))
        player.Quarks -= Elements.el_8.cost
    }
}

function BuyEl9() {
    if(player.Souls >= Elements.el_9.cost) {
        Elements.el_9.bought = true 
        player.Souls -= Elements.el_9.cost
    }
}

function BuyEl10() {
    if(player.Quarks >= Elements.el_10.cost) {
        Elements.el_10.bought = true 
        player.Quarks -= Elements.el_10.cost
    }
}