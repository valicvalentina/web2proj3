document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const asteroids = []; //polje za asteroide
    const asteroidFrequency = 500; //Frekvencija generiranja asteroida (ms)
    let lastAsteroidTime = 0;
    let startTime; //Vrijeme pokretanja igre
    let collisionTime; //Vrijeme kada se dogodio sudar
    let gameOver = false;
     const stars = [];
     const speed = 1; //Brzina kojom se zvijezde krecu
     const collisionSound = new Audio('crash.wav'); 


     
    const player = {
        x: canvas.width/2 - 20, //Početna x koordinata igrača
        y: canvas.height/2 - 20, //Početna y koordinata igrača
        width: 40,
        height: 40,
        speed: 15
    };

    
//Generiraju se asteroidi te im se postavlja položaj i smjer kretanja
    function generirajAsteroid() {
        const side = Math.floor(Math.random() *4);
        let x, y, direction;

        switch (side) {
            case 0:
                x = Math.random() * canvas.width;
                y = -40;
                direction = Math.random() * 3.14;
                break;
            case 1:
                x = canvas.width + 40;
                y = Math.random() * canvas.height;
                direction = Math.random() * 3.14 + 3.14/2;
                break;
            case 2:
                x = Math.random() * canvas.width;
                y = canvas.height + 40;
                direction = Math.random() * 3.14 + 3.14;
                break;
            case 3:
                x = -40;
                y = Math.random() * canvas.height;
                direction = Math.random() * 3.14 - 3.14/2;
                break;
        }

        const asteroid = {
            x,
            y,
            speed: Math.random()*10 + 4,
            direction
        };

        asteroids.push(asteroid);
    }


    //Funkcija za crtanje i pomicanje zvijezda
    function crtajZvijezde() {
        ctx.fillStyle = '#ffffff';

        // Dodavanje nove zvijezde
        stars.push({ x: Math.random()*canvas.width, 
            y: Math.random()*canvas.height, 
            speed });
      //Za svaku zvijezdu crta se kvadrat na trenutnoj poziciji zvijezde
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            ctx.fillRect(star.x, star.y, 2, 2);

            // Zvijezda pomiče svoju poziciju za x koordinatu prema desnoj strani ekrana
            star.x += star.speed;
        }
    }


    //Funkcija za crtanje asterioda
    function crtajAsteroide() {

        for(let i = 3; i > 0; i-- ) {

          for (let i = 0; i < asteroids.length; i++) {
            const asteroid = asteroids[i];

            const asteroidImage = new Image();
            asteroidImage.src = 'asteroid.png';
            ctx.drawImage(asteroidImage, asteroid.x, asteroid.y, 40, 40);
           }

    }
    }
  
    //Funkcija za crtanje igrača
    function crtajIgraca() {
       ctx.beginPath();
       ctx.shadowBlur = 20;
       ctx.shadowColor = "white";
       ctx.fillStyle = "red";
       ctx.fillRect(player.x, player.y, player.width, player.height);
       ctx.shadowBlur = 0;
       ctx.shadowColor = "transparent";
    }

    //Funkcija pomoću koje se pomiču asteroidi
    function pomakniAsteroide() {
        for (let i = 0; i < asteroids.length; i++) {
            const asteroid = asteroids[i];
            asteroid.x += Math.cos(asteroid.direction) * asteroid.speed;
            asteroid.y += Math.sin(asteroid.direction) * asteroid.speed;

         // Ako je asteroid izvan ekrana uklanja se iz niza te se smanjuje brojač
         if (asteroid.x < -40||asteroid.y < -40 ||
            asteroid.x > canvas.width + 40 || asteroid.y > canvas.height + 40) {
            asteroids.splice(i, 1);
            i--;
        }
    }
}

    //Provjera je li došlo do sudara
    function provjeriSudar() {
        if (!gameOver) {
            for (let i = 0; i < asteroids.length; i++) {
                const asteroid = asteroids[i];

         if (player.x < asteroid.x+40 && player.x + player.width > asteroid.x &&
             player.y < asteroid.y+40 &&  player.y + player.height > asteroid.y) {
                    //Dogodio se sudar
                    collisionTime = performance.now() - startTime;
                    gameOver = true;
                    collisionSound.play();
                }
            }
        }
    }
    function formatVremena(vrijeme) {
        const minutes = Math.floor( Math.floor(vrijeme / 1000) / 60);
        const seconds = Math.floor(vrijeme / 1000) % 60;
        const ms = (vrijeme % 1000).toFixed(0);
    
        // Dodajemo nule ispred brojeva ako su manji od 10
        const fMinutes = minutes < 10 ? '0' + minutes : minutes;
        const fSeconds = seconds < 10 ? '0' + seconds : seconds;
        const fMs = ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms;
    
        return `${fMinutes}:${fSeconds}.${fMs}`;
    }


    //Prikaživanje vremena
    function prikaziVrijeme() {
        ctx.font = '16px Arial';
        ctx.fillStyle = 'white';
    
        const currentTime = performance.now() - startTime;
        const elapsedTime = gameOver ? collisionTime : currentTime;
    
        const bestTime = localStorage.getItem('bestTime');

        //Ako postoji najbolje vrijeme u local Storage postavi ga, inače je jednako vremenu koje je proteklo
        if (bestTime) {
            ctx.fillText('Time: ' + formatVremena(elapsedTime), canvas.width - 190, 20);
            ctx.fillText('Best Time: ' + formatVremena(bestTime), canvas.width - 190, 50); 
        } else {
            ctx.fillText('Time: ' + formatVremena(elapsedTime), canvas.width - 190, 20);
            ctx.fillText('Best Time: ' + formatVremena(elapsedTime), canvas.width - 190, 50);
        }
    }
       
        
    function restartiraj() {
       //Poništavanje parametara kako bi se započela nova igra
        console.log('Collision Time:', collisionTime);
        if (collisionTime !== undefined) {
          const bestTime = localStorage.getItem('bestTime');
          if (!bestTime || collisionTime > parseFloat(bestTime)) {
              localStorage.setItem('bestTime', collisionTime.toFixed(2));
          }
      }
        startTime = undefined;
        collisionTime = undefined;
        asteroids.length = 0;
        lastAsteroidTime = 0;
        stars.length = 0;
        player.x = canvas.width/2 - 20;
        player.y = canvas.height/2 - 20;
        gameOver = false;


    }

    //Provjera je li igrač izašao iz ekrana kako bi se vratio na drugu stranu
    function provjeriGranice() {
        if (player.x + player.width < 0) {
            player.x = canvas.width;
        } else if (player.x > canvas.width) {
            player.x = -player.width;
        }

        if (player.y + player.height < 0) {
            player.y = canvas.height;
        } else if (player.y > canvas.height) {
            player.y = -player.height;
        }
    }

    //Funkcija kojom se pokreće animacija
    function animacija(currentTime) {

        if (!startTime) {
            startTime = currentTime;
        } 

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        crtajZvijezde();
        crtajAsteroide();
        crtajIgraca();
        pomakniAsteroide();
        provjeriSudar();
        provjeriGranice();
        prikaziVrijeme();

        if (!gameOver && currentTime - lastAsteroidTime > asteroidFrequency) {
            generirajAsteroid();
            lastAsteroidTime = currentTime;
        }

        if (gameOver) {
        //Ako je igra završena, restartira se nakon tri sekunde
            setTimeout(() => {
                restartiraj();
                requestAnimationFrame((time) => animacija(time));
            }, 3000);
        } else {
            requestAnimationFrame((time) => animacija(time));
        }
    }


    animacija();

    //Dodavanje event listenera koji prati promjenu veličine prozora. 
    //kada korisnik promijeni veličinu prozora, Width i Height preglednika se postave na trenutnu veličinu.
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    //Reagira na događaje kada se pritisne određena tipka na tipkovnici. 
    //Ako pritisnemo "ArrowUp" ili "ArrowDown", pozicija igrača po y-osi se mijenja gore/dolje za player.speed
    //Ako pritisnemo "ArrowLeft" ili "ArrowRight", pozicija igrača po x-osi se mijenja lijevo/desno za player.speed
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            player.y -= player.speed;
        } else if (e.key === 'ArrowDown') {
            player.y += player.speed;
        } else if (e.key === 'ArrowLeft') {
            player.x -= player.speed;
        } else if (e.key === 'ArrowRight') {
            player.x += player.speed;
        }
    });    

});