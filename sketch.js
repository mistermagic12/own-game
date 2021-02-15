var happyEmoji,happyEmojiImage
var sadEmoji,sadEmojiImage
var studyEmoji,studyEmojiImage
var relaxedEmoji,relaxedEmojiImage
var bgImg
var playMusic,playMusicImg
var diary,diaryImg
var logo,logoImg
var gameState=0
var entry
var date
var dateArr=[]
var entryArr=[]

var happyMusic1="https://open.spotify.com/playlist/4BHorBjnG0RhUBkI8v1hrC?si=F68wCdurQjujfGZ79WqQEw"
var happyMusic2="https://open.spotify.com/playlist/6VIzKLkwoFZFaKA5Xx0gvt?si=UNT5ARqjSdSTE5rkHsbikg"
var happyMusic3="https://open.spotify.com/playlist/2aCOuwTYchqhdXi7uSahEL?si=DcL6xN6eReezL1wTgSJN8w"

var sadMusic1="https://open.spotify.com/playlist/7d0tyHSkNQINHbYeOskTg8?si=qJ9jlquRSSOu8Nz3_aDi3g"
var sadMusic2="https://youtu.be/WDxMas784iY"
var sadMusic3="https://open.spotify.com/album/6355hYB0qS5vBBKtX8SfAO?si=Jq2rUPY4T22IrEuX9yL9KQ"

var studyMusic1="https://open.spotify.com/playlist/471N195f5jAVs086lzYglw?si=f8GpvLH9ReuKhV_m_6rVKQ"
var studyMusic2="https://open.spotify.com/album/1nMHkGDJwTvoW3LTTdUVwA?si=WXbzCjePSIaaj09JQwj1dQ"
var studyMusic3="https://open.spotify.com/album/5DZKDABJ2PS93HzBlPq2Lb?si=6rxmC_6VS2WkFmg2X_iSfQ"

var relaxedMusic1="https://open.spotify.com/playlist/6EIVswdPfoE9Wac7tB6FNg"
var relaxedMusic2="https://open.spotify.com/playlist/6gCC8kozvUlLGTzl2YO2MR"
var relaxedMusic3="https://youtu.be/swli5KD6T90"

var happyMusicArr=[happyMusic1,happyMusic2,happyMusic3]
var sadMusicArr=[sadMusic1,sadMusic2,sadMusic3]
var studyMusicArr=[studyMusic1,studyMusic2,studyMusic3]
var relaxedMusicArr=[relaxedMusic1,relaxedMusic2,relaxedMusic3]

var rand


function preload(){
happyEmojiImage=loadImage("happy emoji1.png")
sadEmojiImage=loadImage("sad emoji.png")
studyEmojiImage=loadImage("study emoji.png")
relaxedEmojiImage=loadImage("relaxed emoji.png")
bgImg=loadImage("ocean.jpg")
playMusicImg=loadImage("play music button.png")
diaryImg=loadImage("diary entry button.png")
logoImg=loadImage("logo.jpg")


}

function setup(){
createCanvas(800,800)

playMusic=createSprite(200,325)
playMusic.addImage(playMusicImg)

diary=createSprite(200,550)
diary.addImage(diaryImg)

logo=createSprite(400,135)
logo.addImage(logoImg)
logo.scale=(0.2)

entry=new Diary()

}


function draw(){
background("pink")

if(gameState===0){
start()
}

if(mousePressedOver(playMusic)){
playMusic.visible=false
diary.visible=false
logo.visible=false
gameState=1
}


if(gameState===1){


playSongs()
}

if(mousePressedOver(diary)){
playMusic.visible=false
diary.visible=false
logo.visible=false
gameState=2
}

if(gameState===2){
background("cyan")
clear()
entry.display()
}

drawSprites()
}

function playSongs(){

clear()
background(bgImg)

happyEmoji=createSprite(100,400)
happyEmoji.addImage(happyEmojiImage)
happyEmoji.scale=(1.2)

textSize(25)
fill("yellow")
text("happy",50,525)

sadEmoji=createSprite(400,600)
sadEmoji.addImage(sadEmojiImage)
sadEmoji.scale=(0.9)

textSize(25)
fill("yellow")
text("sad",380,750)


studyEmoji=createSprite(400,200)
studyEmoji.addImage(studyEmojiImage)
studyEmoji.scale=(1.2)

textSize(25)
fill("yellow")
text("studying",350,350)

relaxedEmoji=createSprite(650,400)
relaxedEmoji.addImage(relaxedEmojiImage)

textSize(25)
fill("yellow")
text("relaxed",600,525)

if(mousePressedOver(happyEmoji)){
rand=Math.round(random(0,2))
window.location.assign(happyMusicArr[rand])
}

if(mousePressedOver(sadEmoji)){
rand=Math.round(random(0,2))
window.location.assign(sadMusicArr[rand])
}

if(mousePressedOver(studyEmoji)){
rand=Math.round(random(0,2))
window.location.assign(studyMusicArr[rand])
}

if(mousePressedOver(relaxedEmoji)){
rand=Math.round(random(0,2))
window.location.assign(relaxedMusicArr[rand])
}
}
function start(){


textSize(17)
fill("blue")
text("click the music icon to listen to songs of your mood",300,325)


textSize(17)
fill("white")
text("click the diary emoji to write your diary",300,490)

}
