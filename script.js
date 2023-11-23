function keizoku() {
    let nowTime = new Date();
    let jikan = nowTime.getHours();
    let fun = nowTime.getMinutes();
    let byou = nowTime.getSeconds();



    if(jikan <= 9) {
        jikan = '0' + jikan;
    }
    if(fun <= 9) {
        fun = '0' + fun;
    }
    if(byou <= 9) {
        byou = '0' + byou;
    }

    document.getElementById('tokei').textContent = jikan + '時' + fun + '分' + byou + '秒';
}

setInterval('keizoku()',500);
