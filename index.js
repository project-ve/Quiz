(function(){
    // Include Quiz Application
    var Q = VE.apps.quiz;

    // Js Quiz
    var jsQzTrigger = document.querySelector('#jsQzContainer input');
    jsQzTrigger.addEventListener('click', function(){
        var jsQzConfig = { queryStr: '#jsQzContainer', title: 'JS Quiz', 
            quiz: { questions: [ { question: 'JSON stands for', options: ['JSON object', 'Java Script object', 'something else', 'none'] },
                                 { question: 'Inside which HTML element do we put the JavaScript?', options: ['<js>', 'script', 'javascript', 'scripting'] },
                                 { question: 'JSON stands for', options: ['JSON object', 'Java Script object', 'something else', 'none'] },
                                 { question: 'What is the correct JavaScript syntax to change the content of the HTML element below? \n <p id="demo">This is a demonstration.</p>', 
                                   options: ['document.getElementByName("p").innerHTML = "Hello World!";', 
                                             'document.getElement("p").innerHTML = "Hello World!";',
                                             'document.getElementById("demo").innerHTML = "Hello World!";',
                                             '#demo.innerHTML = "Hello World!";'] }
                                ],
                     answers: [1, 1, 1, 2]
                    } 
        };
        var jsQz = new Q.create(jsQzConfig);
        jsQz.launch();
    });

    // HTML Quiz
    var htmlQzTrigger = document.querySelector('#htmlQzContainer input');
    htmlQzTrigger.addEventListener('click', function(){
        var htmlQzConfig = { queryStr: '#htmlQzContainer', title: 'HTML Quiz', 
            quiz: { questions: [ { question: 'JSON stands for', options: ['JSON object', 'Java Script object', 'something else', 'none'] },
                                 { question: 'Inside which HTML element do we put the JavaScript?', options: ['<js>', 'script', 'javascript', 'scripting'] },
                                 { question: 'JSON stands for', options: ['JSON object', 'Java Script object', 'something else', 'none'] },
                                 { question: 'What is the correct JavaScript syntax to change the content of the HTML element below? \n <p id="demo">This is a demonstration.</p>', 
                                   options: ['document.getElementByName("p").innerHTML = "Hello World!";', 
                                             'document.getElement("p").innerHTML = "Hello World!";',
                                             'document.getElementById("demo").innerHTML = "Hello World!";',
                                             '#demo.innerHTML = "Hello World!";'] }
                                ] 
                    } 
        };
        var htmlQz = new Q.create(htmlQzConfig);
        htmlQz.launch();
    });

    // CSS Quiz
    var cssQzTrigger = document.querySelector('#cssQzContainer input');
    cssQzTrigger.addEventListener('click', function(){
        var cssQzConfig = { queryStr: '#cssQzContainer', qzJson: 'someValidJson' };
        var cssQz = new Q.create(cssQzConfig);
        cssQz.launch();
    });
})();