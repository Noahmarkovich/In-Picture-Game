'use strict' 


var gCurrQuestIdx = 0

var gQuests

gQuests = createQuests() 

function initGame() { 
    var elRestart= document.querySelector('.restart')
    var elOption = document.querySelectorAll('.contianer button')
    elOption[0].style.display = 'block'
    elOption[1].style.display = 'block'
    elRestart.style.display = 'none'
    gCurrQuestIdx = 0
    renderQuest(gCurrQuestIdx)
}

console.log(gQuests)

function createQuests(){
    const quests = [
        {id: 1, opts:['Uma Thurman', 'Gwyneth Paltrow'], correctOptIndex: 0 },
        {id: 2, opts:['Leonardo DiCaprio','Brad Pitt'], correctOptIndex: 1 },
        {id: 3, opts:['Jennifer Garner','Jennifer Lawrence'], correctOptIndex: 1 },
        {id: 4 , opts:['Chris Evans','Bradly Cooper'], correctOptIndex: 1 },
        {id: 5, opts:['Samuel L Jackson','Michael B Jordan'], correctOptIndex: 0 }
        ]
    return quests
}


function renderQuest(currIdx){
    var elOption = document.querySelectorAll('.contianer button')
    var elImg = document.querySelector('.contianer img')
    // elOption[0].classList.remove('wrong')
    var elRestart= document.querySelector('.restart')
    if(currIdx === gQuests.length){
        elOption[0].style.display = 'none'
        elOption[1].style.display = 'none'
        elRestart.style.display = 'block'
        elImg.src = `img/win.png`

    }
    else{
        var option1 = gQuests[currIdx].opts[0]
        var option2 = gQuests[currIdx].opts[1]
        elOption[0].innerText = option1
        elOption[1].innerText = option2
        // elOption[0].style.display = 'block'
        elImg.src = `img/${currIdx+1}.jpg`
    }
        
}
    // }

//}

function checkAnswer(optIdx) {
    console.log(optIdx)
    if (+optIdx.dataset.idx === gQuests[gCurrQuestIdx].correctOptIndex){
        gCurrQuestIdx ++   
        renderQuest(gCurrQuestIdx)
    } else {
        //optIdx.innerText = "Wrong answer"
        //optIdx.classList.add('wrong')
        alert('wrong answer')
    }
    
}

