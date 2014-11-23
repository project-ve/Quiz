(function(){
    // Include Quiz Application
    var Q = VE.modules.quiz;
    var configs = VE.apps.quiz.configs;

    // Js Quiz
    var jsQzTrigger = document.querySelector('#jsQzContainer input');
    jsQzTrigger.addEventListener('click', function(){
        var jsQzConfig = configs.js;
        jsQzConfig['queryStr'] = '#jsQzContainer';
        var jsQz = new Q.create(jsQzConfig);
        jsQz.launch();
    });

    // HTML Quiz
    var htmlQzTrigger = document.querySelector('#htmlQzContainer input');
    htmlQzTrigger.addEventListener('click', function(){
        var htmlQzConfig = configs.html;
        htmlQzConfig['queryStr'] = '#htmlQzContainer';
        var htmlQz = new Q.create(htmlQzConfig);
        htmlQz.launch();
    });

    // CSS Quiz
    var cssQzTrigger = document.querySelector('#cssQzContainer input');
    cssQzTrigger.addEventListener('click', function(){
        var cssQzConfig = configs.css;
        cssQzConfig['queryStr'] = '#cssQzContainer';
        var cssQz = new Q.create(cssQzConfig);
        cssQz.launch();
    });
})();