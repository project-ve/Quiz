(function(){
    var Q = VE.namespace('VE.apps.quiz');
    
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

    var createQuizFrame = function(){
        this.resNode.innerHTML = '<h3 class="quiz-title">' + this.title + '</h3>' +
                                '<p class="quiz-question">' + this.question+ '</p>' +
                                '<input type="radio" name="radio" id="opt1"><label for="opt1">' + this.options[0] + '</label><br>' +
                                '<input type="radio" name="radio" id="opt2"><label for="opt2">' + this.options[1] + '</label><br>' +
                                '<input type="radio" name="radio" id="opt3"><label for="opt3">' + this.options[2] + '</label><br>' +
                                '<input type="radio" name="radio" id="opt4"><label for="opt4">' + this.options[3] + '</label><br>' +
                                '<input type="button" value="prev">' +
                                '<input type="button" value="skip">' +
                                '<input type="button" value="next">';
    
    };

    var refreshQuizFrame = function(){
        // if currQues not answered set radio to false
        var currAnswer = this.userAnswers[this.currQues];
        if(currAnswer === undefined){
            var radioGroup = document.querySelectorAll(this.config.queryStr + ' input[type=radio]');
            [].forEach.call(radioGroup, function(node){
                node.checked = false;
            }.bind(this));
        } else {
            var radioGroup = document.querySelectorAll(this.config.queryStr + ' input[type=radio]');
            radioGroup[currAnswer].checked = true;
        }
        this.resNode.querySelector('.quiz-question').innerHTML = '';
        this.resNode.querySelector('.quiz-question').appendChild(document.createTextNode(this.question));

        this.resNode.querySelector('#opt1').nextSibling.innerHTML = '';
        this.resNode.querySelector('#opt1').nextSibling.appendChild(document.createTextNode(this.options[0]));
        
        this.resNode.querySelector('#opt2').nextSibling.innerHTML = '';
        this.resNode.querySelector('#opt2').nextSibling.appendChild(document.createTextNode(this.options[1]));
        
        this.resNode.querySelector('#opt3').nextSibling.innerHTML = '';
        this.resNode.querySelector('#opt3').nextSibling.appendChild(document.createTextNode(this.options[2]));

        this.resNode.querySelector('#opt4').nextSibling.innerHTML = '';
        this.resNode.querySelector('#opt4').nextSibling.appendChild(document.createTextNode(this.options[3]));
    };

    var recordUserSelection = function(){
        var radioGroup = document.querySelectorAll(this.config.queryStr + ' input[type=radio]');
        [].forEach.call(radioGroup, function(node, index){
            if(node.checked === true){
                this.userAnswers[this.currQues] = index;
            }
        }.bind(this));
    };

    Q.create.prototype.launch = function(){
        createQuizFrame.bind(this)();

        this.prev = document.querySelector(this.config.queryStr + ' input[value=prev]');
        this.prev.addEventListener('click', function(){
            if(this.currQues > 0){
                recordUserSelection.bind(this)();
                this.currQues--;
                this.question = this.config.quiz.questions[this.currQues].question;
                this.options = this.config.quiz.questions[this.currQues].options;
                refreshQuizFrame.bind(this)();
            }
        }.bind(this));
        
        this.next = document.querySelector(this.config.queryStr + ' input[value=next]');
        this.next.addEventListener('click', function(){
            if(this.currQues < this.numQuestions-1){
                recordUserSelection.bind(this)();
                this.currQues++;
                this.question = this.config.quiz.questions[this.currQues].question;
                this.options = this.config.quiz.questions[this.currQues].options;
                refreshQuizFrame.bind(this)();
            }
        }.bind(this));
    };

})();