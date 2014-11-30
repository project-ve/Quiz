(function(){
    var QU = VE.namespace('VE.modules.quiz.utils');

    QU.createQuizFrame = function(){
        // title
        var title = document.createElement('h3');
        title.className = 'quiz-title';
        title.appendChild(document.createTextNode(this.title));
        // question counter
        var qCounter = document.createElement('span');
        qCounter.className = 'counter';
        qCounter.style.setProperty('float', 'right');
        qCounter.appendChild(document.createTextNode(this.currQues + 1 + '/' + this.numQuestions));
        title.appendChild(qCounter);

        // container div for aside and quiz container
        var div = document.createElement('div');
        div.className = 'clearfix';

        // Aside bar for quick links
        var asideBar = document.createElement('aside');
        asideBar.className = 'side-bar-container';
        var asideTitle = document.createElement('p');
        asideTitle.appendChild(document.createTextNode('Quick Links'));
        asideBar.appendChild(asideTitle);

        var asideBarUl = document.createElement('ul');
        asideBarUl.className = 'side-bar';
        var li = document.createElement('li');
        li.id = 0;
        li.className = 'active-question';
        li.appendChild(document.createTextNode("Question: 1"));
        asideBarUl.appendChild(li);

        asideBar.appendChild(asideBarUl);

        // quiz container
        var qContainer = document.createElement('div');
        qContainer.classList.add('quiz-ques-container');
        qContainer.classList.add('clearfix');
        
        // question
        var ques = document.createElement('p');
        ques.className = 'quiz-question';
        ques.appendChild(document.createTextNode(this.question));
        qContainer.appendChild(ques);

        // options
        this.options.forEach(function(opt, index){
            // optDiv
            var optDiv = document.createElement('div');
            optDiv.className = 'quiz-options';
            optDiv.addEventListener('click', function(){
                this.querySelector('input').checked = true;

                var optDivGroup = this.parentElement.querySelectorAll('div');
                [].forEach.call(optDivGroup, function(optDiv){
                    optDiv.classList.remove('checked');
                });
                this.classList.add('checked');
            });

            optDiv.addEventListener('click', function(){
                // add focus to curr question of side bar
                var asideBarList = this.resNode.querySelectorAll(".side-bar li");
                asideBarList[this.currQues].classList.add('answered');
            }.bind(this));
                
            var prettyTitle = this.title.split(' ').join('-');
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'quiz-options';
            radio.id = prettyTitle + '-opt-' + index;
            optDiv.appendChild(radio);

            var optText = document.createElement('span');
            optText.appendChild(document.createTextNode(opt));
            optDiv.appendChild(optText);
            qContainer.appendChild(optDiv);
        }.bind(this));

        // prev button
        var prev = document.createElement('input');
        prev.type = 'button';
        prev.value = 'prev';
        qContainer.appendChild(prev);

        // next button
        var next = document.createElement('input');
        next.type = 'button';
        next.value = 'next';
        qContainer.appendChild(next);

        div.appendChild(asideBar);
        div.appendChild(qContainer);
        
        this.resNode.innerHTML = '';
        this.resNode.appendChild(title);
        this.resNode.appendChild(div);   
    };

    QU.refresh = function(newCurrQues){
        this.prevCurrQues = this.currQues;
        this.currQues = newCurrQues;
        this.question = this.config.quiz.questions[this.currQues].question;
        this.options = this.config.quiz.questions[this.currQues].options;
        QU.refreshQuizFrame.bind(this)();
    };

    QU.refreshQuizFrame = function(){
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

        // update counter
        this.resNode.querySelector('.counter').innerHTML = this.currQues + 1 + '/' + this.numQuestions;

        // update question
        this.resNode.querySelector('.quiz-question').innerHTML = '';
        this.resNode.querySelector('.quiz-question').appendChild(document.createTextNode(this.question));

        // update options
        var prettyTitle = this.title.split(' ').join('-');
        this.options.forEach(function(opt, index){
            var optNode = this.resNode.querySelector('#' + prettyTitle + '-opt-' + index);
            optNode.nextSibling.innerHTML = '';
            
            optNode.nextSibling.appendChild(document.createTextNode(opt));
        }.bind(this));
    };

    QU.recordUserSelection = function(){
        var radioGroup = document.querySelectorAll(this.config.queryStr + ' input[type=radio]');
        [].forEach.call(radioGroup, function(node, index){
            if(node.checked === true){
                this.userAnswers[this.currQues] = index;
            }
        }.bind(this));
    };
    
    QU.showScore = function(){
        var i;
        this.score = 0;

        for(i=0; i<this.numQuestions; i++){
            if(this.userAnswers[i] == this.answers[i])
                this.score++;
        }
        this.resNode.innerHTML = '<p class="quiz-score">Your Score is: ' + this.score + '/' + this.numQuestions + '</h3>';
    };
})();