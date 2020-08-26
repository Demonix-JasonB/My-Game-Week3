namespace SpriteKind {
    export const ball = SpriteKind.create()
    export const laser = SpriteKind.create()
}
function Createball4 () {
    ball4 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f 2 2 2 f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.ball)
    ball4.setVelocity(randint(-50, 50), randint(-50, 50))
    ball4.setFlag(SpriteFlag.BounceOnWall, true)
}
function Createball () {
    ball = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f 2 2 2 f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.ball)
    ball.setVelocity(randint(-50, 50), randint(-50, 50))
    ball.setFlag(SpriteFlag.BounceOnWall, true)
}
function Createball9 () {
    enemy1 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . d b d . . . d 4 d . . . . . . 
        . . . . d d b d f d 5 d 4 d d . . . . . 
        . . . . d d b d f d 5 d 4 d d . . . . . 
        . . . . . d b d . . . d 4 d . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
}
function Createball7 () {
    ball7 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f 2 2 2 f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.ball)
    ball7.setVelocity(randint(-50, 50), randint(-50, 50))
    ball7.setFlag(SpriteFlag.BounceOnWall, true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mySprite2.setPosition(mySprite.x, mySprite.y)
    mySprite2.setVelocity(0, 30)
    mysprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mysprite3.setPosition(mySprite.x, mySprite.y)
    mysprite3.setVelocity(0, -30)
    mysprite_4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mysprite_4.setPosition(mySprite.x, mySprite.y)
    mysprite_4.setVelocity(30, 0)
    mysprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mysprite5.setPosition(mySprite.x, mySprite.y)
    mysprite5.setVelocity(-30, 0)
})
function Createball5 () {
    ball5 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f 2 2 2 f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.ball)
    ball5.setVelocity(randint(-50, 50), randint(-50, 50))
    ball5.setFlag(SpriteFlag.BounceOnWall, true)
}
function Createball8 () {
    ball8 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f 2 2 2 f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.ball)
    ball8.setVelocity(randint(-50, 50), randint(-50, 50))
    ball8.setFlag(SpriteFlag.BounceOnWall, true)
}
function createplayer () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 4 . 7 7 . 4 2 . . . . 
        . . . . 4 5 f f f f 5 4 . . . . 
        . . . . . f f 7 7 f f . . . . . 
        . . . . 7 f 7 1 1 7 f 7 . . . . 
        . . . . 7 f 7 1 1 7 f 7 . . . . 
        . . . . . f f 7 7 f f . . . . . 
        . . . . 4 5 f f f f 5 4 . . . . 
        . . . . 2 4 . 7 7 . 4 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
    mySprite.setPosition(160, 0)
    controller.moveSprite(mySprite)
}
function doSomething () {
    if (info.player2.score() >= 1000) {
        game.over(true)
    }
}
function Createball6 () {
    ball6 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f 2 2 2 f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.ball)
    ball6.setVelocity(randint(-50, 50), randint(-50, 50))
    ball6.setFlag(SpriteFlag.BounceOnWall, true)
}
function Createball3 () {
    ball3 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f 2 2 2 f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.ball)
    ball3.setVelocity(randint(-50, 50), randint(-50, 50))
    ball3.setFlag(SpriteFlag.BounceOnWall, true)
}
function Createball2 () {
    ball2 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f 2 2 2 f 5 . . . . 
        . . . . . f 2 2 2 f . . . . . 
        . . . . 5 f f f f f 5 . . . . 
        . . . . . 5 . 5 . 5 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.ball)
    ball2.setVelocity(randint(-50, 50), randint(-50, 50))
    ball2.setFlag(SpriteFlag.BounceOnWall, true)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    enemy1.destroy(effects.halo, 500)
    enemy1 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . d b d . . . d 4 d . . . . . . 
        . . . . d d b d f d 5 d 4 d d . . . . . 
        . . . . d d b d f d 5 d 4 d d . . . . . 
        . . . . . d b d . . . d 4 d . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemy1.setPosition(randint(0, 160), randint(0, 160))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function (sprite, otherSprite) {
    game.over(false)
})
let ball2: Sprite = null
let ball3: Sprite = null
let ball6: Sprite = null
let ball8: Sprite = null
let ball5: Sprite = null
let mysprite5: Sprite = null
let mysprite_4: Sprite = null
let mysprite3: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
let ball7: Sprite = null
let enemy1: Sprite = null
let ball: Sprite = null
let ball4: Sprite = null
info.setLife(1)
info.setScore(0)
Createball()
Createball2()
Createball3()
Createball4()
Createball5()
Createball6()
Createball7()
Createball8()
Createball9()
createplayer()
forever(function () {
    doSomething()
})
