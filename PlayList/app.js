const playList = new PlayList(),
s1 = new Song('TEST', 'Tom', '03:12'),
s2 = new Song('TEST 1', 'Bill', '05:22'),
m1 = new Movie('Man of steel', 2012, '02:33:15');

playList.add(s1);
playList.add(s2);
playList.add(m1);

const list = document.getElementById('list');
playList.render(list);


const play = document.getElementById('btn-play'),
stop = document.getElementById('btn-stop'),
next = document.getElementById('btn-next');

play.onclick = function(){
    playList.play();
    playList.render(list)
}

stop.onclick = function(){
    playList.stop();
    playList.render(list)
}

next.onclick = function(){
    playList.next();
    playList.render(list)
}

