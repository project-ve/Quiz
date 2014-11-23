(function(){
    var configs = VE.namespace('VE.apps.quiz.configs');

    configs.html = {  
        title:'HTML Quiz',
        quiz:{  
            questions:[  
                {  
                    question:'JSON stands for',
                    options:[  
                        'JSON object',
                        'Java Script object',
                        'something else',
                        'none'
                    ]
                },
                {  
                    question:'Inside which HTML element do we put the JavaScript?',
                    options:[  
                        '<js>',
                        'script',
                        'javascript',
                        'scripting'
                    ]
                },
                {  
                    question:'JSON stands for',
                    options:[  
                        'JSON object',
                        'Java Script object',
                        'something else',
                        'none'
                    ]
                },
                {  
                    question:'What is the correct JavaScript syntax to change the content of the HTML element below? \n <p id="demo">This is a demonstration.</p>',
                    options:[  
                        'document.getElementByName("p").innerHTML = "Hello World!";',
                        'document.getElement("p").innerHTML = "Hello World!";',
                        'document.getElementById("demo").innerHTML = "Hello World!";',
                        '#demo.innerHTML = "Hello World!";'
                    ]
                }
            ],
            answers:[  
                1,
                1,
                1,
                2
            ]
        }
    };
})();