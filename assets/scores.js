function renderHighscores(){
    //localstorage.getItem (look up on w3c schools)
    var highscores = JSON.parse(window.localstorage.getItem('highscores')) || [];

}