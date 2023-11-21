function gramophone(bandName, albumName, songName) {

    let songDurationInSec = (albumName.length * bandName.length) * songName.length / 2;
    let plateTimeToRotate = 2.5

    console.log(`The plate was rotated ${Math.ceil(songDurationInSec / plateTimeToRotate)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')