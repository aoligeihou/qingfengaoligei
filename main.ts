info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.over(false, effects.melt)
    music.knock.play()
})
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let 毒药 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 4 1 . . . . . . 
    . . . . . . . 1 7 1 . . . . . . 
    . . . . . . . 1 7 1 . . . . . . 
    . . . . 1 1 1 1 7 1 1 1 1 . . . 
    . . . . 1 7 7 7 7 7 7 7 1 . . . 
    . . . . 1 7 7 7 7 7 7 7 1 . . . 
    . . . . 1 7 7 7 7 7 7 7 1 . . . 
    . . . . 1 7 7 7 7 7 7 7 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite.setVelocity(100, 100)
毒药.setPosition(41, 43)
毒药.follow(mySprite, 70)
info.startCountdown(60)
scene.cameraFollowSprite(mySprite)
