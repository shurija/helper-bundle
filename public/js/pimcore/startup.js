pimcore.registerNS("pimcore.plugin.ShurijaHelperBundle");

pimcore.plugin.ShurijaHelperBundle = Class.create({

    initialize: function () {
        document.addEventListener(pimcore.events.pimcoreReady, this.pimcoreReady.bind(this));
    },

    pimcoreReady: function (e) {
        // alert("ShurijaHelperBundle ready!");
    }
});

var ShurijaHelperBundlePlugin = new pimcore.plugin.ShurijaHelperBundle();
