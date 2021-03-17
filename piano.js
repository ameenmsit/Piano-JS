document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll(".mainkey").forEach( music =>
        music.onclick = ()=> {
            var aud = music.dataset.music;
            var audio = new Audio(aud);
            audio.play();
        });
    
        document.querySelectorAll(".blackkey").forEach( music =>
            music.onclick = ()=> {
                var aud = music.dataset.music;
                var audio = new Audio(aud);
                audio.play();
            });
});