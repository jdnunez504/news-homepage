document.getElementById('openBtn').addEventListener('click', function(){
    document.getElementById("overlay").style.display = "block";
    window.setTimeout(function() {
        document.getElementById("mobile-menu").style.width = "16rem";
        document.getElementById("overlay").style.opacity = "1";
        document.getElementById("overlay").style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    }, 1);

})

document.getElementById('closeBtn').addEventListener('click', function(){
    document.getElementById("mobile-menu").style.width = "0rem";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
    window.setTimeout(function() {
        document.getElementById("overlay").style.display = "none";
    }, 500);
})