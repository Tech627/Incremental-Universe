let Elements = {
    el_1: {
        cost: new Decimal(1e10),
        boost: new Decimal(1),
        bought: false,
    },
    el_2: {
        cost: new Decimal(1e200),
        boost: new Decimal(1),
        bought: false,
    },
    el_3: {
        cost: new Decimal(1e17),
        bought: false,
    },
    el_4: {
        cost: new Decimal(1e20),
        bought: false,
    },
    el_5: {
        cost: new Decimal(1e30),
        boost: new Decimal(1),
        bought: false,
    },
    el_6: {
        cost: new Decimal(1e70),
        boost: new Decimal(1),
        bought: false,
    },
    el_7: {
        cost: new Decimal(1e90),
        boost: new Decimal(1),
        bought: false,
    },
    el_8: {
        cost: new Decimal(1e60),
        boost: new Decimal(1),
        bought: false,
    },
    el_9: {
        cost: new Decimal(1e110),
        bought: false,
    },
    el_10: {
        cost: new Decimal(1e80),
        bought: false,
    },
    el_11: {
        cost: new Decimal(1e95),
        bought: false,
    },
    el_12: {
        cost: new Decimal(1e120),
        bought: false,
    },
    el_13: {
        cost: new Decimal(1e150),
        bought: false,
    },
    el_14: {
        cost: new Decimal(1e190),
        bought: false,
    },
    el_15: {
        cost: new Decimal(1e215),
        bought: false,
    },
    el_16: {
        cost: new Decimal(1e275),
        bought: false,
    },
    el_17: {
        cost: new Decimal(1e308),
        bought: false,
    },
    el_18: {
        cost: new Decimal(1e400),
        bought: false,
    },
}

function BuyEl1() {
    if (player.Quarks.gte(Elements.el_1.cost)) {
        Elements.el_1.bought = true
        Elements.el_1.boost = Math.sqrt(Math.log10(player.Quarks))
        player.Quark = player.Quark.sub(Elements.el_1.cost)
    }
}

function BuyEl2() {
    if (player.Black_Hole.gte(Elements.el_2.cost)) {
        Elements.el_2.bought = true
        Elements.el_2.boost = Math.log10(Math.sqrt(Black_HoleMachine.power))
        player.Black_Hole = player.Black_Hole.sub(Elements.el_2.cost) 
    }
}

function BuyEl3() {
    if (player.Quarks.gte(Elements.el_3.cost)) {
        Elements.el_3.bought = true
        player.Quarks = player.Quarks.sub(Elements.el_3.cost)
    }
}

function BuyEl4() {
    if (player.Matter.gte(Elements.el_4.cost)) {
        Elements.el_4.bought = true
        player.Matter = player.Matter.sub(Elements.el_4.cost)
    }
}

function BuyEl5() {
    if (player.Quarks.gte(Elements.el_5.cost)) {
        Elements.el_5.bought = true
        Elements.el_5.boost = Math.sqrt(Math.sqrt(player.Quarks))
        player.Quarks = player.Quarks.sub(Elements.el_5.cost)
    }
}

function BuyEl6() {
    if (player.Souls.gte(Elements.el_6.cost)) {
        Elements.el_6.bought = true 
        Elements.el_6.boost = Math.log10(Math.log10(Math.sqrt(player.Souls)))
        player.Souls = player.Souls.sub(Elements.el_6.cost)
    }
}

function BuyEl7() {
    if (player.Dark_Matter_currency.gte(Elements.el_7.cost)) {
        Elements.el_7.bought = true 
        Elements.el_7.boost = Math.log10(Math.log10(Math.sqrt(player.Dark_Matter_currency)))
        player.Dark_Matter_currency = player.Dark_Matter_currency.sub(Elements.el_7.cost)
    }
}

function BuyEl8() {
    if (player.Quarks.gte(Elements.el_8.cost)) {
        Elements.el_8.bought = true
        Elements.el_8.boost = Elements.el_8.boost.add(Math.sqrt(Math.log10(Tickspeed1.power)))
        player.Quarks = player.Quarks.sub(Elements.el_8.cost)
    }
}

function BuyEl9() {
    if(player.Souls.gte(Elements.el_9.cost)) {
        Elements.el_9.bought = true 
        player.Souls = player.Souls.sub(Elements.el_9.cost)
    }
}

function BuyEl10() {
    if(player.Quarks.gte(Elements.el_10.cost)) {
        Elements.el_10.bought = true 
        player.Quarks = player.Quarks.sub(Elements.el_10.cost)
    }
}