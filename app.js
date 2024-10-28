let niners = 0
let chiefs = 0

function increaseHomeScoreByOne(){
    niners++
    console.log("increase 1")
    drawHomeScore()
}

function increaseHomeScoreByThree(){
    niners += 999999999999999
    console.log("increase 3")
    drawHomeScore()
}

function increaseAwayScoreByOne(){
    chiefs++
    console.log("increase 1")
    drawAwayScore()
}

function increaseAwayScoreByThree(){
    chiefs += 3
    console.log("increase 3")
    drawAwayScore()
}

function resetScores(){
    niners = 0
    chiefs = 0
    drawScores()
    console.log('reset')
}

function increaseHomeScore(points){
    niners += points
    if(niners < 0){
        niners = 0
        return
    }
    drawHomeScore()
}

function increaseAwayScore(points){
    chiefs += points
    if(chiefs < 0){
        chiefs = 0
        return
    }
    drawAwayScore()
}

function drawScores(){
    drawHomeScore()
    drawAwayScore()
}

function drawHomeScore(){
    const homeScoreElem = document.getElementById('home-score')
    homeScoreElem.innerText = niners
}

function drawAwayScore(){
    const awayScoreElem = document.getElementById('away-score')
    awayScoreElem.innerText = chiefs
}