(function(){
    var Q = VE.namespace('VE.modules.quiz');
    var C = VE.modules.quiz.controllers;
    var QU = VE.modules.quiz.utils;
    
    // quiz constructor
    Q.create = function(config){
        this.title = config.title;
        this.config = config;
        this.currQues = 0;
        this.userAnswers = [];
        this.answers = this.config.quiz.answers;
        this.numQuestions = this.config.quiz.questions.length;
        this.question = this.config.quiz.questions[this.currQues].question;
        this.options = this.config.quiz.questions[this.currQues].options;
        this.resNode = document.querySelector(this.config.queryStr);
    };

    Q.create.prototype.launch = function(){
        QU.createQuizFrame.bind(this)();
        
        var qLinks = this.resNode.querySelectorAll(".side-bar li");
        [].forEach.call(qLinks, function(qLink){
            qLink.addEventListener('click', C.asideBarLinkClickHandler.bind(this));
        }.bind(this));
        
        this.prev = document.querySelector(this.config.queryStr + ' input[value=prev]');
        this.prev.addEventListener('click', C.prevButtonHandler.bind(this));
        
        this.next = document.querySelector(this.config.queryStr + ' input[value=next]');
        this.next.addEventListener('click', C.nextButtonHandler.bind(this));
    };

})();