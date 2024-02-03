/*
6. You are developing a music playlist management system. Implement functions that leverage closures
and higher-order functions to perform common playlist operations.

Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This
closure should allow adding and listing songs for the given playlist.

Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the
specified playlist. Use the closure created in TASK 1.

Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the
Task 1

// Task: Playlist management

const myPlaylist = createPlaylist('My Favorite Songs');

addSong(myPlaylist,"Song1", "Artist1");
addSong(myPlaylist,"Song2", "Artist2");
addSong(myPlaylist,"Song3", "Artist3");

listSongs(myPlaylist);

// Output: My Favorite Playlist: Song1 by Artist1, Song2 by Artist2, Song3 by Artist3
*/
const createPlaylist = (playlistName) => {
    const songs = [];
    return {
        addSong: (songName, artistName) => {
            songs.push({ songName, artistName });
        },
        listSongs: () => {
            console.log(`${playlistName}: ${songs.map(song => song.songName + ' by ' + song.artistName).join(', ')}`);
        }
    }
}

function addSong(playlist, song, artist){
    playlist.addSong(song, artist);
}

function listSongs(playlist){
    playlist.listSongs();
}

const myPlaylist = createPlaylist('My Favorite Songs');

addSong(myPlaylist,"Song1", "Artist1");
addSong(myPlaylist,"Song2", "Artist2");

listSongs(myPlaylist);
