require.config({
  paths: {
    "jquery"           : "../lib/jquery/dist/jquery",
    "angular"          : "../lib/angular/angular_br",
    "angular-route"    : "../lib/angular-route/angular-route",
    "angular-tree"     : "../lib/angular-tree-control/angular-tree-control",
    "twitterbootstrap" : "../lib/bootstrap-3.1.1-dist/js/bootstrap",
    "jstree"           : "../lib/vakata-jstree-e22db21/dist/jstree",
    "nouislider"       : "../lib/nouislider/jquery.nouislider.min",
    "domReady"         : "../lib/requirejs-domready/domReady"
  },

  shim: {
    "angular": {
      deps: ["jquery"],
      exports: "angular"
    },
    "angular-route" : {
      deps: ["angular"]
    },
    "angular-tree" : {
      deps: ["angular"]
    },
    "twitterbootstrap" : {
      deps: ["jquery"]
    },
    "jstree" : {
      deps: ["jquery"]
    },
    "nouislider" : {
      deps: ["jquery"]
    }
  },

  deps: ["./bootstrap"]
});