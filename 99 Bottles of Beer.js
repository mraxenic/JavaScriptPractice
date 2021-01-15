/*This coding exercise generates the lyric of a the popular 99 Bottles of Beer folk song.
This is a reverse counting song and has repetivite lines with changing numbers
*/

function generateLyric(){
  var beerNum, lyric;
  beerNum = 99;
while (beerNum>=0){
    if (beerNum==1){
        lyric = `${beerNum} bottle of beer on the wall, ${beerNum} bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.`;
    } else if (beerNum===0){
        lyric = `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`;
    } else {
        lyric = `${beerNum} bottles of beer on the wall, ${beerNum} bottles of beer. Take one down, pass it around, ${beerNum-1} bottles of beer on the wall.`;
    }
   beerNum--;
   console.log(lyric);
}
}

generateLyric();

//© Paul Ikonne 2020 -2021
