let Elements = {
    el_1: {
        cost: 1e10,
        boost: 0,
        bought: false,
    },
    el_3: {
        cost: 0,
        bought: false,
    },
}

function BuyEl3() {
    if (player.Quarks >= Elements.el_3.cost) {
        Elements.el_3.bought = true
    }
}
