window.onload = function () {
    game = {
        setting: {
            playable: false,
            itemsFound: 0,
            timeToHelp: 5,
            helpCounter: 0
        },
        start: function () {
            game.init();
            if (game.setting.playable) {
                document.getElementById("mirror").onclick = function () {
                    document.getElementById("mirror").src = ('css/images/sparks.gif');
                    setTimeout(function () {
                        document.getElementById("mirror").className = 'hidden';
                    }, 1000);
                    document.getElementById("mirrorText").style.textDecoration = 'line-through';
                    game.setting.itemsFound++;
                    game.checkItems();
                };
                document.getElementById('balerina').onclick = function () {
                    document.getElementById("balerina").src = ('css/images/sparks.gif');
                    setTimeout(function () {
                        document.getElementById("balerina").className = 'hidden';
                    }, 1000);
                    document.getElementById("balletDancerText").style.textDecoration = 'line-through';
                    game.setting.itemsFound++;
                    game.checkItems();
                };
                document.getElementById('parfume').onclick = function () {
                    document.getElementById("parfume").src = ('css/images/sparks.gif');
                    setTimeout(function () {
                        document.getElementById("parfume").className = 'hidden';
                    }, 1000);
                    document.getElementById("perfumeText").style.textDecoration = 'line-through';
                    game.setting.itemsFound++;
                    game.checkItems();
                };
                document.getElementById('comb').onclick = function () {
                    document.getElementById("comb").src = ('css/images/sparks.gif');
                    setTimeout(function () {
                        document.getElementById("comb").className = 'hidden';
                    }, 1000);
                    document.getElementById("combText").style.textDecoration = 'line-through';
                    game.setting.itemsFound++;
                    game.checkItems();
                };
            }
        },

        checkItems: function () {
            if (game.setting.itemsFound === 4) {
                setTimeout('game.gameOver()', 1000);
                // alert('You win!')
            }
        },
        gameOver: function () {
            game.setting.playable = false;
            let parentDOM = document.getElementById('wrapper');

            parentDOM.style.background = 'url("css/images/bg_blur.png") no-repeat';
            parentDOM.style.backgroundSize = '100% 100%;';

            let head = parentDOM.getElementsByClassName('headLogo')[0];
            head.style.display = 'none';
            let footer = parentDOM.getElementsByClassName('footerLogo')[0];
            footer.style.display = 'none';
            let images = parentDOM.getElementsByClassName('imagesContainer')[0];
            images.style.display = 'none';

            document.getElementById('gameOverBanner').style.display = 'block';
            document.getElementById('gameOverButton').style.display = 'block';
            document.getElementById('gameOverButtonLink').style.display = 'inline-block';
        },
        init: function () {
            game.setting.playable = true;

            document.onclick = function () {
                game.setting.helpCounter = 0;
            };

            document.onmousemove = function () {
                game.setting.helpCounter = 0;
            };

            document.onkeypress = function () {
                game.setting.helpCounter = 0;
            };

            window.setInterval(CheckIdleTime, 1000);

            function CheckIdleTime() {
                game.setting.helpCounter++;
                if (game.setting.helpCounter == game.setting.timeToHelp) {
                    var el = document.querySelector("div.imagesContainer img:not(.hidden)");
                    console.log(el);
                    el.classList.add = 'blink';
                }
            }
        }
    };

    game.start();
};