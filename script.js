// async function getSongs_list(){
//     let a = await fetch("http://127.0.0.1:5500/songs/");
//     let response = await a.text();
//     console.log(response);
// }

// getSongs();

async function getSongs(){
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")){
            songs.push(element.href.split("/").pop());
        }
    }
    return songs;
}

async function main(){
    let songs = await getSongs(); // Await the result of getSongs()
    console.log(songs);

    let songUL  = document.querySelector("song_list").getElementsByTagName(".song_list ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>${song}</li>`; 
    }
}
   
main(); 