function checkCollision(aPlayer, aFplayer) {
    // Check for collision w/ ceiling & floor
    if (aFplayer.y > 581) {
        aFplayer.y = 580;
    }
    if (aFplayer.y < 0) {
        aFplayer.y = 1;
    }
    if (aFplayer.x > 781) {
        aFplayer.x = 780;
    }
    if (aFplayer.x < 0) {
        aFplayer.x = 1;
    }

    if (aPlayer.y > 581) {
        aPlayer.y = 580;
    }
    if (aPlayer.y < 0) {
        aPlayer.y = 1;
    }
    if (aPlayer.x > 781) {
        aPlayer.x = 780;
    }
    if (aPlayer.x < 0) {
        aPlayer.x = 1;
    }
    // Check collision with players
    
    if (aFplayer.x > aPlayer.x && aFplayer.x < aPlayer.x + aPlayer.w &&
        aFplayer.y + 20 > aPlayer.y && aFplayer.y - 20 < aPlayer.y + aPlayer.h) {
          aPlayer.freeze = true
      }

      

    // if (heli.x + 34 > wall2.x && heli.x < wall2.x + wall2.w &&
    //   heli.y + 20.5 > wall2.y && heli.y - 20.5 < wall2.y + wall2.h) {
    //   shield = shield - 1;
    //   wall2.y = wall2.y + 1000;
    // }

}