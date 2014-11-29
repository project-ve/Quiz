(function(){
    var C = VE.namespace('VE.modules.quiz.controllers');
    var QU = VE.modules.quiz.utils;

    // Aside Bar Question link click handler
    C.asideBarLinkClickHandler = function(e){
        QU.refresh.bind(this)(Number(e.currentTarget.id));
    };

    // Quiz previous button handler
    C.prevButtonHandler = function(){
        if(this.currQues > 0){
            QU.recordUserSelection.bind(this)();
            QU.refresh.bind(this)(Number(this.currQues)-1);
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
        } else {
            // show score
            QU.showScore.bind(this)();
        }
    }
})();