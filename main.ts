enum ActionKind {
    Walking,
    Idle,
    Jumping,
    bob
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivelfinal`)
})
info.onScore(400, function () {
    game.splash("ya puedes pasar de nivel,mira abajo en el mapa")
    info.changeLifeBy(1)
    tiles.setWallAt(tiles.getTileLocation(19, 29), false)
    tiles.setTileAt(tiles.getTileLocation(16, 29), assets.tile`miMosaico1`)
})
info.onScore(600, function () {
    game.splash("ya puedes pasar de nivel,mira el centro del mapa")
    info.changeLifeBy(1)
    tiles.setWallAt(tiles.getTileLocation(15, 16), false)
    tiles.setTileAt(tiles.getTileLocation(15, 16), assets.tile`miMosaico2`)
})
info.onScore(800, function () {
    info.changeLifeBy(1)
    game.splash("ya puedes pasar de nivel,mira el centro del mapa")
    tiles.setWallAt(tiles.getTileLocation(15, 16), false)
    tiles.setTileAt(tiles.getTileLocation(15, 16), assets.tile`miMosaico3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel3`)
    game.splash("recoje 700 orbes para pasar de nivel")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`comida`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`tile12`)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
info.onScore(1050, function () {
    game.splash("ya puedes pasar de nivel,mira el centro del mapa")
    tiles.setWallAt(tiles.getTileLocation(16, 12), false)
    tiles.setTileAt(tiles.getTileLocation(16, 12), assets.tile`miMosaico4`)
})
info.onScore(1700, function () {
    game.splash("felicidades has ganado")
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(Pacman, ActionKind.Walking)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(Pacman, ActionKind.Idle)
})
info.onScore(900, function () {
    game.splash("Ganas una vida para derrotar al jefe")
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico3`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel5`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(Pacman, ActionKind.bob)
})
info.onScore(180, function () {
    game.splash("ya puedes pasar de nivel,mira abajo en el mapa")
    info.changeLifeBy(1)
    tiles.setWallAt(tiles.getTileLocation(19, 29), false)
    tiles.setTileAt(tiles.getTileLocation(16, 29), assets.tile`miMosaico0`)
})
function animacion () {
    anim = animation.createAnimation(ActionKind.Walking, 200)
    anim.addAnimationFrame(assets.image`pac-man`)
    anim.addAnimationFrame(img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 f f . . . 
        f 5 5 5 5 5 5 5 f f f . . . . . 
        f 5 5 5 5 5 f f . . . . . . . . 
        f 5 5 5 5 5 5 5 f f f . . . . . 
        . f 5 5 5 5 5 5 5 5 5 f f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(Pacman, anim)
    anim2 = animation.createAnimation(ActionKind.Idle, 200)
    anim2.addAnimationFrame(img`
        . . . . . . . f f f . . . . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 5 f . 
        . . . . . f f f 5 5 5 5 5 5 5 . 
        . . . . . . . . f f 5 5 5 5 5 . 
        . . . . . f f f 5 5 5 5 5 5 5 . 
        . . . f f 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim2.addAnimationFrame(img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim2.addAnimationFrame(img`
        . . . . . . . f f f . . . . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 5 f . 
        . . . . . f f f 5 5 5 5 5 5 5 . 
        . . . . . . . . f f 5 5 5 5 5 . 
        . . . . . f f f 5 5 5 5 5 5 5 . 
        . . . f f 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim2.addAnimationFrame(img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(Pacman, anim2)
    anim3 = animation.createAnimation(ActionKind.Jumping, 200)
    anim3.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . f 5 f . . . f 5 f . . . . 
        . . f 5 5 f . . . f 5 5 f . . . 
        . f 5 5 5 5 f . f 5 5 5 5 f . . 
        . f 5 5 5 5 f . f 5 5 5 5 f . . 
        f 5 5 5 5 5 f . f 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 f 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 f 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim3.addAnimationFrame(img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(Pacman, anim3)
    anim4 = animation.createAnimation(ActionKind.bob, 200)
    anim4.addAnimationFrame(img`
        . . . . . . . f f f . . . . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 f 5 5 5 5 5 5 . 
        . f 5 5 5 5 5 5 f 5 5 5 5 5 5 . 
        . f 5 5 5 5 5 f . f 5 5 5 5 5 . 
        . . f 5 5 5 5 f . f 5 5 5 5 f . 
        . . f 5 5 5 5 f . f 5 5 5 5 f . 
        . . . f 5 5 f . . . f 5 5 f . . 
        . . . . f 5 f . . . f 5 f . . . 
        . . . . . f . . . . . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim4.addAnimationFrame(img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(Pacman, anim4)
}
info.onScore(840, function () {
    game.splash("cuidado el jefe final ira por ti")
    Fmorado = sprites.create(assets.image`miImagen`, SpriteKind.Enemy)
    Fmorado.follow(Pacman, 90)
    Fmorado.setPosition(118, 105)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(Pacman, ActionKind.Jumping)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel2`)
    game.splash("recoje 400 orbes para pasar de nivel")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico2`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel4`)
})
function inicia_juego () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        5555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        5555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555f5555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555ff5555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fff555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555ffffff55555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555ffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333ffffffffffffffffffffffff
        55555fffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666fffff2222222fff333333333fffffffffffffffffffffff
        55555ffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666fff222222222ff1113111333ffffffffffffffffffffff
        55555ffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111611166fff111211122ff1f131f13333fffffffffffffffffffff
        55555fffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f161f166fff1f121f122ff11131113333fffffffffffffffffffff
        55555ffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1116111666ff111211122ff33333333333fffffffffffffffffffff
        55555ffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666f2222222222f333333333333ffffffffffffffffffff
        55555ffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666f2222222222f333333333333ffffffffffffffffffff
        55555fffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666f2222222222ff33333333333ffffffffffffffffffff
        55555fffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666ff222222222ff33333333333ffffffffffffffffffff
        55555ffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666ff222222222f3333333333333fffffffffffffffffff
        55555ffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666f2222222222f3333333333333fffffffffffffffffff
        55555ffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666f2222222222f3333333333333fffffffffffffffffff
        55555ffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666f2222222222f3333333333333fffffffffffffffffff
        55555ffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666ff222222222f3333333333333fffffffffffffffffff
        55555ffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666f222222ff2f3333333333ff3fffffffffffffffffff
        55555ffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66f66ff66ffff22ff22ffff333f33ff33ffffffffffffffffffffff
        55555ffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555ffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555ffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffffff5555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        5555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffffffffffffffffffffff555555555555fffffffffffffffffffffff55555555555ffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555ffffffffffffffffffffff5555555555555ffffffffffffffffffff55555555555555555fffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555ffffffffffffffffffffff55555555555555ffffffffffffffffff5555555555555555555ffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555ffffffffffffffffffffff555555555555555fffffffffffffff5555555fff5555555555555ffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffffffffffffffffffff5555555f555555555fffffffffffff55555555fff55555555555555fffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffffffffffffffffffff5555555ff55555555ffffffffffff555555555fff555555555555555ffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffffffffffffffffffff555555ffff5555555555ffffffff55555555555555555555555555555fffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555ffffffffffffffffffff5555555fffff555555555ffffffff55555555555555555555555555555fffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555ffffffffffffffffffff555555fffffff55555555fffffff5555555555555555555555555555555ffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffffffffffffffffff5555555fffffff55555555ffffff555555555555555555555555555555555fffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffffffffffffffffff5555555ffffffff5555555ffffff555555555555555555555555555555555fffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        55555fffffffffffffffffff555555fffffffff5555555ffffff55555555555555555ffffff5555555555fffff555555555ffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffff
        55555fffffffffffffffffff555555ffffffffff555555fffff555555555555555555fffffffff55555555ffff5555555555fffffffffffffffffffffffffffffffffffffffff555555fffffffffffff
        55555ffffffffffffffffff555555fffffffffff555555fffff555555555555555555ffffffffff5555555ffff55555555555fffff555555fffffffffffffffffffffffffffff555555ffffff55555ff
        55555ffffffffffffffffff555555fffffffffff555555fffff555555555555555555fffffffffffffffffffff55555555555ff555555555fffffffffff5555555555ffffffff555555fffff555555ff
        55555ffffffffffffffffff555555ffffffffff5555555fffff55555555555555555ffffffffffffffffffffff55555555555f55555555555ffffffff5555555555555fffffff555555ffff5555555ff
        55555ffffffffffffffffff555555ffffffffff5555555fffff55555555555555555ffffffffffffffffffffff555555555555555555555555ffffff555555555555555fffffff55555fff55555555ff
        55555ffffffffffffffffff55555fffffffffff55555555ffff5555555555555555fffffffffffffffffffffff555555555555555555555555fffff5555555555555555555ffff55555f5555555555ff
        55555fffffffffffffffff555555ffffffffff555555555ffff555555555555555ffffffffffffffffffffffff555555555555555555555555fffff5555555555555555555ffff5555555555555555ff
        55555fffffffffffffffff555555ffffffffff555555555ffff555555555555555ffffffffffffffffffffffff55555555555555555f555555ffff555555555ff555555555ffff5555555555555555ff
        55555fffffffffffffffff555555fffffffff5555555555ffff555555555555555ffffffffffffffffffffffff555555f5555555555f5555555fff5555555ffff555555555ffff5555555555555555ff
        55555fffffffffffffffff555555fffffffff55555555555fff555555555555555fffffffffffffffffffffff5555555f555555555fff555555fff555555fffffff55555555fff5555555555555555ff
        55555fffffffffffffffff55555fffffffff555555555555fff555555555555555fffffffffffffffffffffff5555555f55555555ffff555555fff555555fffffff55555555fff5555555555f55555ff
        55555fffffffffffffffff55555ffffffff55555555555555fff555555555555555ffffffffffffffffffffff555555ff55555555ffff5555555ff55555ffffffff55555555fff555555555ff55555ff
        55555fffffffffffffffff55555fffffff555555555555555fff555555555555555fffffffffff5555555ffff555555fff5555555fffff555555ff55555ffffffff55555555fff55555ffffff55555ff
        55555fffffffffffffffff55555ffffff555555555f5555555ff55555555555555555fffffff555555555ffff555555fff555555ffffff555555ff55555ffffffff55555555fff55555ffffff55555ff
        55555fffffffffffffffff55555ffffff55555555ff555555555f5555555555555555555555555555555fffff555555fff555555ffffff555555ff55555fffffff555555555fff55555ffffff55555ff
        55555fffffffffffffffff55555ffff5555555555fff55555555ff55555555555555555555555555555ffffff555555fff555555fffffff55555ff555555ffffff555555555fff55555ffffff55555ff
        55555fffffffffffffffff55555ffff555555555ffff55555555ff55555555555555555555555555555ffffff555555fff555555fffffff55555ff5555555ffff5555555555fff55555ffffff55555ff
        55555fffffffffffffffff555555fff55555555ffffff5555555fff555555555555555555555555555fffffff555555fff555555fffffff55555ff555555555ff55555555555ff55555ffffff55555ff
        55555fffffffffffffffff5555555ff5555555fffffff5555555ffff5555555555555555555555555ffffffff555555ffff55555fffffff55555ff5555555555555555555555ff555555fffff55555ff
        55555fffffffffffffffff5555555ff555555ffffffffffffffffffff55555555555555555555555fffffffff555555ffff55555fffffff55555fff555555555555555555555ff555555fffff55555ff
        55555fffffffffffffffff55555555555555fffffffffffffffffffffff5555555555555555555fffffffffff55555fffff55555fffffff55555ffff555555555555555555555f555555fffff55555ff
        55555fffffffffffffffff555555555555ffffffffffffffffffffffffff55555555555555555ffffffffffff55555fffff55555fffffff55555fffff5555555555555f555555f555555fffff55555ff
        55555ffffffffffffffffff55555555555fffffffffffffffffffffffffffff55555555555fffffffffffffff55555fffffffffffffffffffffffffffff5555555555ff555555ff55555fffff55555ff
        `)
    game.showLongText("Bienvenido a pacman", DialogLayout.Top)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
})
let Fmorado: Sprite = null
let anim4: animation.Animation = null
let anim3: animation.Animation = null
let anim2: animation.Animation = null
let anim: animation.Animation = null
let Pacman: Sprite = null
inicia_juego()
game.showLongText("recoje 180 orbes para pasar de nivel", DialogLayout.Center)
info.setLife(1)
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level1`)
Pacman = sprites.create(img`
    . . . . . . f f f . . . . . . . 
    . . . . f f 5 5 5 f f . . . . . 
    . . . f 5 5 5 5 5 5 5 f . . . . 
    . . f 5 5 5 5 5 5 5 5 5 f . . . 
    . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 f f . . . 
    f 5 5 5 5 5 5 5 f f f . . . . . 
    f 5 5 5 5 5 f f . . . . . . . . 
    f 5 5 5 5 5 5 5 f f f . . . . . 
    . f 5 5 5 5 5 5 5 5 5 f f . . . 
    . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
    . . f 5 5 5 5 5 5 5 5 5 f . . . 
    . . . f 5 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 f f . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animacion()
scene.cameraFollowSprite(Pacman)
Pacman.setPosition(77, 42)
let Frosa = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 1 1 3 3 3 3 1 1 3 3 3 . . 
    . . 1 1 1 1 3 3 1 1 1 1 3 3 . . 
    . . 8 8 1 1 3 3 8 8 1 1 3 3 . . 
    . 3 8 8 1 1 3 3 8 8 1 1 3 3 3 . 
    . 3 3 1 1 3 3 3 3 1 1 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 . 3 3 3 . . 3 3 3 . 3 3 . 
    . 3 . . . 3 3 . . 3 3 . . . 3 . 
    `, SpriteKind.Enemy)
Frosa.setPosition(119, 105)
let Frojo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 1 1 2 2 2 2 1 1 2 2 2 . . 
    . . 1 1 1 1 2 2 1 1 1 1 2 2 . . 
    . . 8 8 1 1 2 2 8 8 1 1 2 2 . . 
    . 2 8 8 1 1 2 2 8 8 1 1 2 2 2 . 
    . 2 2 1 1 2 2 2 2 1 1 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 . 2 2 2 . . 2 2 2 . 2 2 . 
    . 2 . . . 2 2 . . 2 2 . . . 2 . 
    `, SpriteKind.Enemy)
Frojo.setPosition(121, 105)
let Fnaranja = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 1 1 4 4 4 4 1 1 4 4 4 . . 
    . . 1 1 1 1 4 4 1 1 1 1 4 4 . . 
    . . 8 8 1 1 4 4 8 8 1 1 4 4 . . 
    . 4 8 8 1 1 4 4 8 8 1 1 4 4 4 . 
    . 4 4 1 1 4 4 4 4 1 1 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 . 4 4 4 . . 4 4 4 . 4 4 . 
    . 4 . . . 4 4 . . 4 4 . . . 4 . 
    `, SpriteKind.Enemy)
Fnaranja.setPosition(125, 105)
let Fcian = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . 9 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 1 1 9 9 9 9 1 1 9 9 9 . . 
    . . 1 1 1 1 9 9 1 1 1 1 9 9 . . 
    . . 8 8 1 1 9 9 8 8 1 1 9 9 . . 
    . 9 8 8 1 1 9 9 8 8 1 1 9 9 9 . 
    . 9 9 1 1 9 9 9 9 1 1 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 . 9 9 9 . . 9 9 9 . 9 9 . 
    . 9 . . . 9 9 . . 9 9 . . . 9 . 
    `, SpriteKind.Enemy)
Fcian.setPosition(121, 105)
forever(function () {
    scene.cameraFollowSprite(Pacman)
    controller.moveSprite(Pacman, 100, 100)
    Frosa.follow(Pacman, 85)
    Frojo.follow(Pacman, 80)
    Fnaranja.follow(Pacman, 65)
    Fcian.follow(Pacman, 60)
})
