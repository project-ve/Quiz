(function(){
    // Include Quiz Application
    var Q = VE.apps.quiz;

    // Js Quiz
    var jsQzTrigger = document.querySelector('#jsQzContainer input');
    jsQzTrigger.addEventListener('click', function(){
        var jsQzConfig = { queryStr: '#jsQzContainer', qzJson: 'someValidJson' };
        var jsQz = new Q(jsQzConfig);
        jsQz.launch();
    });

    // HTML Quiz
    var htmlQzTrigger = document.querySelector('#htmlQzContainer input');
    htmlQzTrigger.addEventListener('click', function(){
        var htmlQzConfig = { queryStr: '#htmlQzContainer', qzJson: 'someValidJson' };
        var htmlQz = new Q(htmlQzConfig);
        htmlQz.launch();
    });

    // CSS Quiz
    var cssQzTrigger = document.querySelector('#cssQzContainer input');
    cssQzTrigger.addEventListener('click', function(){
        var cssQzConfig = { queryStr: '#cssQzContainer', qzJson: 'someValidJson' };
        var cssQz = new Q(cssQzConfig);
        cssQz.launch();
    });
})();