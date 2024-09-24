sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f . . . . . . . . . . . 
        f 6 6 6 f . . . . . . . . . . . 
        f 6 6 6 f . . . . . . . . . . . 
        f 6 6 6 f f f f . . . . . . . . 
        f 6 6 6 6 6 6 f f f f f f f f . 
        f 6 6 6 f f f f f f 6 6 6 6 f . 
        f 6 6 f f 2 3 3 2 f f 6 6 6 f . 
        f 6 6 f 2 2 3 3 2 2 f 6 6 6 f . 
        f f f f f f f f f f f 6 f f f . 
        . . f f f 6 6 6 6 6 f f f . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . 6 . . . 6 . . . . . . 
        . . . . . 6 . . . 6 . . . . . . 
        . . . . . 6 . . . 6 . . . . . . 
        `,img`
        . . . . . . . . . 1 1 1 1 . . . 
        . . . . . . . . 1 1 . . . 1 1 . 
        f f f f f . . . . 1 1 1 1 1 1 1 
        f 6 6 6 f . . . . 1 1 1 1 1 . . 
        f 6 6 6 f . . . . . . . . . . . 
        f 6 6 6 f f f f . . . . . . . . 
        f 6 6 6 6 6 6 f f f f f f f f . 
        f 6 6 6 f f f f f f 6 6 6 6 f . 
        f 6 6 f f 2 3 3 2 f f 6 6 6 f . 
        f 6 6 f 2 2 3 3 2 2 f 6 6 6 f . 
        f f f f f f f f f f f 6 f f f . 
        . . f f f 6 6 6 6 6 f f f . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . 6 . . . 6 . . . . . . 
        . . . . . 6 . . . 6 . . . . . . 
        . . . . . 6 . . . 6 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 6 6 f f 2 2 2 f f 6 6 f . 
        . . f 6 6 f 2 2 2 2 2 f 6 6 f . 
        . . f 6 6 6 6 6 6 6 6 6 6 6 f . 
        . . f f f 6 6 6 6 6 6 6 f f f . 
        . . . . f f f 6 6 6 f f f . . . 
        . . . . . 6 f f f f f 6 . . . . 
        . . . . . 6 . . . . . 6 . . . . 
        `],
    500,
    false
    )
    sprites.destroy(mySprite2)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . . 1 4 4 4 4 1 . . . . . . 
    . . . . 1 4 4 d 9 1 . . . . . . 
    . . . . 4 d d d d 4 . . . 5 . . 
    . . . . 4 d d d d 4 . . . . . . 
    . . . 4 4 4 d d 4 4 4 . . . . . 
    . . . 6 6 d d d d 6 6 . . . . . 
    . . . 6 6 6 6 6 6 6 6 . . . . . 
    . . . . d 6 6 6 6 d . . . . . . 
    . . . . d 6 6 6 6 d . . . . . . 
    . . . . d 5 5 5 5 d . . . . . . 
    . . . . 6 6 6 6 6 6 . . . . . . 
    . . . 6 6 6 6 6 6 6 6 . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . f f 6 6 6 6 9 9 9 9 f f . . 
    . . f 6 6 6 6 6 9 9 9 9 9 f . . 
    . f f 6 6 6 f 6 6 f 9 9 9 f f . 
    . f 6 6 6 6 f 6 6 f 9 9 9 9 f . 
    . f 6 6 6 6 f 6 6 f 6 9 9 9 f . 
    . f 6 6 6 6 6 6 6 6 6 9 9 9 f . 
    . f 6 6 6 f 6 6 6 6 f 6 9 9 f . 
    . f f f 6 f f f f f f 6 f f f . 
    . . . f f 6 6 6 6 6 6 f f . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . . f d d f . . . . . . 
    `, SpriteKind.Food)
mySprite.setPosition(0, 21)
scene.setBackgroundImage(img`
    ffffffffffffffffffffff99999.99999999999..999999999.9999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffff77777777777777777777777777777777ffffffffffffffffffff
    ffffffffffffffffffffff9999999999999999999999999999.9999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffff77777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffff99999999999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffff77777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffff9999999999999.999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff777777777777777777777777777777777ffffffffffffffffffff
    ffffffffffffffffffffffff9999999999999.99999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffff999999999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffff9999999999999.9999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff777777777777777777777777777777777ffffffffffffffffffff
    ffffffffffffffffffffffffff9999999999999.999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffffff999999999999.999999999999999999999ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffffff9999999999999999999999999999999999ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff777777777777777777777777777777777ffffffffffffffffffff
    ffffffffffffffffffffffffffff999999999999999999999999999999999ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffffffff99999999999999999999999999999999ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffffffff99999999999999699999999999999999ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff777777777777777777777777777777777ffffffffffffffffffff
    ffffffffffffffffffffffffffffff9999999999999699999999999999999ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffffffffff999999999999999999999999999999ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffffffffff999999999999999999999999999999faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffffffffff999999999999999999999999999999faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    ffffffffffffffffffffffffffffffff99999999999999999999999999999faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffffffffffff9999999999999999999999999999faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffffffffffff9999999999999999999999999999faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffffffffffff9999999999999999999999999999faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff999999999999999999999999999faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff999999999999999999999999999faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    22ffffffffffffffffffffffffffffffff999999999999999999999999999faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    22fffffffffffffffffffffffffffff999999999999999999999999999999faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    2222222222222fffffffffffffffff9999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    22222222222222222222222fffffff9999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    22222222222222222222222ffffff99999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    22222222222222222222222ffffff99999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777777777777777777777777777777ffffffffffffffffffff
    222222222222222222222222fffff99999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff77777777777777777777ffffffff777777ffffffffffffffffffff
    2222222222222222222222222ffff99999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff777777777777777fffffffffffffffff7fffffffffffffff11111f
    2222222222222222222222222ffff99999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff7777777fffff7fffffffffffffffffffffffffffffffffff111111
    2222222222222222222222222fff999999999999999999999999999999999fffaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaffff7777777ffffffffffffffffffffffffffffffffffffff111111111
    2222222222222222222222222fff999999999999999999999999999999999fffaaaaaaaaaaaffffffffffffffffaaaaaaaaffffffff777777ffffffffffffffffffffffffffffffffffffff111111111
    2222222222222222222222222fff999999999999999999999999999999999fffaaaaaaaaaaaffffffffffffffffffffffffffffffff777777ffffffffffffffffffffffffffffffffffffff111111111
    2222222222222222222222222fff99999999999fffffffff9999999999999fffaaaaaaaaaafffffffffffffffffffffffffffffffff777777ffffffffffffffffffffffffffffffffffffff111111111
    2222222222222222222222222fff99999999999fffffffffffffffff99999fffaaaaaaaaafffff33333333333ffffffffffffffffff777777ffffffffffffffffffffffffffffffffffffff111111111
    2222222222222222222222222ff99999999999ffffffffffffffffff99999fffaaaaaaaaafffff333333333333333333333ffffffff777777ffffffffffffffffffffffffffffffffffffff111111111
    2222222222222222222222222ff99999999999f666666666666666ff99999fffaaaaaaaaafffff333333333333333333333ffffffff777777fffff1111111111111111111ffffffffffffff111111111
    2222222222222222222222222ff99999999999f666666666666666ff99999fffaaaaaaaaafffff333333333333333333333ffffffff777777fffff11111111111111111111fffffffffffff111111fff
    22222222222ffffffffffffffff999999999996666666666666666ff99999fffaaaaaaaaafffff333333333333333333333ffffffff777777fffff1111111111111111111ffffffffffffff111111fff
    222222222ffffffffffffffffff9999999999f6666666666666666ff99999fffaaaaaaaaafffff333333333333333333333ffffffff777777fffff1111111111111111111fffffffffffff1111111fff
    222222222fffffff11111ffffff9999999999f6666666666666fffff99999fffaaaaaaaaafffff333333333333333333333ffffffff777777fffff1111111111111111111fffffffffffff1111111fff
    222222222ffffff1111111111ff9999999999f6666666666666fffff99999fffaaaaaaaaafffff333333333333333333333ffffffff777777fffff1111111111111111111fffffffffffff1111111fff
    222222222ffffff1111111111ff9999999999f6666666666666fffff99999fffaaaaaaaaafffff33333333333333333fff3ffffffff777777fffff1111111111111111111fffffffffffff1111111fff
    222222222ffffff1111111111ff999999999ff6666666666666fffff99999fffaaaaaaaaafffff33333333333333333fff3ffffffff777777fffff1111111111111111111fffffffffffff1111111fff
    222222222fffff21111111111ff999999999ff6666666666666fffff99999fffaaaaaaaaafffff33333333333333333fff3ffffffff777777fffff1111111111111111111ffffffffffff11111111fff
    222222222fffff11111111111ff999999999ff6666666666666fffff99999fffaaaaaaaaafffff33333333333333333fff3ffffffff777777fffff1111111111111111111ffffffffffff1111111.fff
    222222222fffff11111111111ff999999999ff6666666666666fffff99999fffaaaaaaaaafffff33333333333333333fff3ffffffff777777fffff111111111111fffff11ffffffffffff1111111.fff
    222222222fffff11111111111ff999999999f66666666666666fffff99999ffaaaaaaaaaffffff33333333333333333fff3ffffffff777777fffff111111111111fffff11ffffffffffff1111111ffff
    222222222fffff11111111111ff999999999f66666666666666fffff99999ffaaaaaaaaaffffff33333333333333333fff3ffffffff777777fffff111111111111fffff11ffffffffffff1111111ffff
    222222222fffff11111111111ff999999999f666666666666666ffff99999ffaaaaaaaaaffffff33333333333333333fff3ffffffff777777fffff111111111111fffff11ffffffffffff1111111ffff
    222222222fffff111111fff11ff999999999f66666666666666666ff99999ffaaaaaaaaaffffff33333333333333333fff3ffffffff777777fffff111111111111ffffff1ffffffffffff1111111ffff
    222222222fffff111111fff11ff999999999f66666666666666666ff99999ffaaaaaaaaaffffff333333333333333333333ffffffff777777fffff111111111111ffffff1ffffffffffff1111111ffff
    222222222fffff111111fff11ff999999999f66666666666666666ff99999ffaaaaaaaaaffffff333333333333333333333fffffff7777777fffff111111111111ffffff1ffffffffffff11111111111
    222222222fffff11111111111ff999999999f66666666666666666ff99999ffaaaaaaaaaffffff333333333333333333333fffffff7777777fffff111111111111ffffff1ffffffffffff11111111111
    222222222fffff11111111111ff999999999fff666666666666666ff99999ffffffffffffffff3333333333333333333333fffffff7777777fffff111111111111ffffff1ffffffffffff11111111111
    222222222fffff11111111111ff999999999ffffffffffffffffffff99999fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111ffffffffffff11111111111
    fffffffffffffffffffffffffff99999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffff1111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111
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
    f5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555ffffffffffffffffffff
    f5555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555ff
    f5555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555ff
    f5555555555555555555555555555ffffffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555ff
    f5555555555555555555555555555ffffffffffffffffffffffffff555555555555555555555555555fffffffffffffffffffffffffffffff55555555555555555555555555555555555fff5555555ff
    ffff5555555555555555555555555ffffffffffffffffffffffffff555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffff555555555555fff5555555ff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
    `)
controller.moveSprite(mySprite)
