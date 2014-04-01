require.config({
  paths: {
    "jquery"           : "../lib/jquery/dist/jquery",
    "angular"          : "../lib/angular/angular",
    "angular-route"    : "../lib/angular-route/angular-route",
    "twitterbootstrap" : "../lib/bootstrap-3.1.1-dist/js/bootstrap",
    "jstree"           : "../lib/vakata-jstree-e22db21/dist/jstree",
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
    "twitterbootstrap" : {
      deps: ["jquery"]
    },
    "jstree" : {
      deps: ["jquery"]
    }
  },

  deps: ["./bootstrap"]
});