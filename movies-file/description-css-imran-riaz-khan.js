
        let clickCountmovieCard = 0;
        let timerActive = false;

        function resetClicks() {
            clickCountmovieCard = 0;
            timerActive = false;
        }

        function startTimer() {
            timerActive = true;
            setTimeout(() => {
                resetClicks();
            }, 15000);
        }

        function handlemovieCardClick() {
            clickCountmovieCard++;

            if (clickCountmovieCard === 1) {
                window.open('https://www.effectiveratecpm.com/xj710jzb7?key=23d224ee0269506ce9543fe9f967f092', '_blank');
            } else if (clickCountmovieCard === 2) {
                window.open('https://website2l.github.io/allweb/movies-file/detail-page.html?movie=amir-khan/watchV=coZ3ma8jtL', '_blank'); // Dusra URL Yahan Replace Karein
                if (!timerActive) {
                    startTimer();
                }
            } else if (clickCountmovieCard > 2 && timerActive) {
                window.open('https://website2l.github.io/allweb/movies-file/detail-page.html?movie=amir-khan/watchV=coZ3ma8jtL', '_blank'); // Ye bhi Dusra URL Hi Rahega
            }
        }

        document.getElementById('movieCard').addEventListener('click', handlemovieCardClick);
