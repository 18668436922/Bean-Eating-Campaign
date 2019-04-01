// 1 = <div class='wall'></div>
// 2 = <div class='coin'></div>
// 3 = <div class='pacman'></div>
// 4 = <div class='ground'></div>

//获取容器
var wrapper = document.getElementById('wrapper');
var map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1],
    [1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1],
    [1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
//初始化packman坐标
var pacman = {
    x: 4,
    y: 5,
    dir: 'right'
}

function init() {
    var html;
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] === 1) {
                html += "<div class='wall'></div>"
            } else if (map[i][j] === 2) {
                html += "<div class='coin'></div>"
            } else if (map[i][j] === 3) {
                html += "<div class='pacman " + pacman.dir + "'></div>"
            } else if (map[i][j] === 4) {
                html += "<div class='ground'></div>"
            }
        }
        html += '<br>'
        wrapper.innerHTML = html;
    }
}
//绑定键盘事件
document.onkeydown = function (e) {
    var pacmanImg = wrapper.getElementsByClassName('pacman')[0];
    e = event || window.event;
    switch (e.keyCode) {
        case 38:
            pacman.dir = 'up';
            pacmanImg.className = 'pacman up';
            break;
        case 40:
            pacman.dir = 'down';
            pacmanImg.className = 'pacman down';
            break;
        case 37:
            pacman.dir = 'left';
            pacmanImg.className = 'pacman left';
            break;
        case 39:
            pacman.dir = 'right';
            pacmanImg.className = 'pacman right';
            break;
    }
}
var timer = setInterval(function () {
    if (pacman.dir === 'right') {
        if (map[pacman.x][pacman.y + 1] === 1) {
            return;
        } else {
            map[pacman.x][pacman.y] = 4;
            pacman.y += 1;
            map[pacman.x][pacman.y] = 3;
        }
    } else if (pacman.dir === 'left') {
        if (map[pacman.x][pacman.y - 1] === 1) {
            return;
        } else {
            map[pacman.x][pacman.y] = 4;
            pacman.y -= 1;
            map[pacman.x][pacman.y] = 3;
        }
    } else if (pacman.dir === 'down') {
        if (map[pacman.x + 1][pacman.y] === 1) {
            return;
        } else {
            map[pacman.x][pacman.y] = 4;
            pacman.x += 1;
            map[pacman.x][pacman.y] = 3;
        }
    } else if (pacman.dir === 'up') {
        if (map[pacman.x - 1][pacman.y] === 1) {
            return;
        } else {
            map[pacman.x][pacman.y] = 4;
            pacman.x -= 1;
            map[pacman.x][pacman.y] = 3;
        }
    }
    html = '';
    init();
}, 300);
init();