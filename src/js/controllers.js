(function(){
    var C = VE.namespace('VE.modules.quiz.controllers');
    var QU = VE.modules.quiz.utils;

    // Aside Bar Question link click handler
    C.asideBarLinkClickHandler = function(e){
        this.currQues = e.currentTarget.id;
        QU.refresh.bind(this)();
    };

    // Quiz previous button handler
    C.prevButtonHandler = function(){
        if(this.currQues > 0){
            QU.recordUserSelection.bind(this)();
            this.currQues--;
            QU.refresh.bind(this)();
        }
    }

    // Quiz next button handler
    C.nextButtonHandler = function(){
        QU.recordUserSelection.bind(this)();
        if(this.currQues < this.numQuestions-1){
            this.currQues++;
            QU.refresh.bind(this)();

            // add new link if not already created
            var asideBarUl = this.resNode.querySelector(".side-bar");
            if(asideBarUl.querySelectorAll("li").length <= this.currQues){
                var li = document.createElement('li');
                li.id = this.currQues;
                li.appendChild(document.createTextNode("Question: " + (this.currQues+1)));
                li.addEventListener('click', C.asideBarLinkClickHandler.bind(this));
                asideBarUl.appendChild(li);
            }
        } else {
            // show score
            QU.showScore.bind(this)();
        }
    }
})();