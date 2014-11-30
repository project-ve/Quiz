(function(){
    var C = VE.namespace('VE.modules.quiz.controllers');
    var QU = VE.modules.quiz.utils;

    var addFocusToSideBar = function(){
        // add focus to curr question of side bar
        var asideBarList = this.resNode.querySelectorAll(".side-bar li");
        asideBarList[this.prevCurrQues].classList.remove('active-question');
        asideBarList[this.currQues].classList.add('active-question');
    };

    var addFocusToOptions = function(){
        // add focus to selected option
        var optDivGroup = this.resNode.querySelectorAll('.quiz-options');
        [].forEach.call(optDivGroup, function(optDiv){
            optDiv.classList.remove('checked');
        });
        var currAns = optDivGroup[this.userAnswers[this.currQues]];
        if (currAns)
            currAns.classList.add('checked');
    };

    // Aside Bar Question link click handler
    C.asideBarLinkClickHandler = function(e){
        QU.recordUserSelection.bind(this)();
        QU.refresh.bind(this)(Number(e.currentTarget.id));
        // add focus to curr question of side bar
        addFocusToSideBar.bind(this)();
        // add focus to curr selected option
        addFocusToOptions.bind(this)();
    };

    // Quiz previous button handler
    C.prevButtonHandler = function(){
        if(this.currQues > 0){
            QU.recordUserSelection.bind(this)();
            QU.refresh.bind(this)(Number(this.currQues)-1);

            // add focus to curr question of side bar
            addFocusToSideBar.bind(this)();
             // add focus to curr selected option
            addFocusToOptions.bind(this)();
        }
    }

    // Quiz next button handler
    C.nextButtonHandler = function(){
        QU.recordUserSelection.bind(this)();
        if(this.currQues < this.numQuestions-1){
            QU.refresh.bind(this)(Number(this.currQues)+1);

            // add new link if not already created
            var asideBarUl = this.resNode.querySelector(".side-bar");
            if(asideBarUl.querySelectorAll("li").length <= this.currQues){
                var li = document.createElement('li');
                li.id = this.currQues;
                li.appendChild(document.createTextNode("Question: " + (this.currQues+1)));
                li.addEventListener('click', C.asideBarLinkClickHandler.bind(this));
                asideBarUl.appendChild(li);
            }
            
            // add focus to curr question of side bar
            addFocusToSideBar.bind(this)();
             // add focus to curr selected option
            addFocusToOptions.bind(this)();
        } else {
            // show score
            QU.showScore.bind(this)();
        }
    }
})();