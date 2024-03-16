Projekt je razvijen u sklopu kolegija Napredni Razvoj Programske Potpore za Web na Fakultetu elektrotehnike i računarstva.

The project was developed as part of the Advanced Web Software Development course at the Faculty of Electrical Engineering and Computing.

----------------------------------------------------------------------------------------------------------------------------------------

Izrađena je arkadna 2D računalna igra kao HTML5 web stranica. Igra je znatno pojednostavljena verzija poznate arkadne igre Asteroids.

Igra se prikazuje u Canvas objektu koji pokriva cijeli prozor web preglednika. 
Pozadina Canvasa je crne boje. Canvas ima vidljivi rub. 
Također postoji animirana pozadina s bijelim točkama koje simuliraju zvijezde i kreću se horizontalno konstantnom brzinom.

Igra započinje nakon učitavanja web stranice. 
Na početku igre generira se određen broj objekata (asteroida) na slučajnim položajima i sa slučajnim vektorima brzina.
Svi generirani asteroidi inicijalno se nalaze izvan ekrana (ne vide se) i postepeno ulaze u područje Canvasa koje se prikazuje.

Novi objekti asteroida, njihov položaj, smjer i brzina gibanja se slučajno generiraju. Ovi parametri su konstantni. 
Parametri igre - broj objekata asteroida i učestalost njihovog generiranja su predefinirani (konstantne u programskom kodu). 

Objekt koji predstavlja asteroid je prikladnu slika asteroida.

Objekt koji predstavlja igrača je pravokutnik crvene boje s 3D sjenom oko ruba. Igrač se na početku igre nalazi točno u sredini Canvasa.

Igrač upravlja svojim položajem koristeći tipkovnicu (tipke strelice - gore, dolje, lijevo, desno).

Ako objekt koji predstavlja igrača izađe izvan rubova ekrana, vraća se sa suprotne strane.

U svakom koraku animacije detektira se kolizija (sudar) svih objekata s objektom igrača, te postoji zvuk prilikom sudara.

Igra mjeri vrijeme od pokretanja (od 00:00.000; minute:sekunde.milisekunde) do kolizije barem jednog objekta asteroida s objektom igrača. 
Cilj igre (tj. cilj igrača) je postići što duže vrijeme bez kolizije. Odnosno, "preživjeti" što duže bez udara objekta asteroida u objekt igrača.

Igra pamti najbolje (najduže) vrijeme od kad je prvi put pokrenuta. Podatak o najboljem vremenu pohranjuje se u local storage pomoću HTML5 Web Storage API.
   
Kako pokrenuti i isprobati igru:
Igra odmah kreće nakon učitavanja stranice, krećemo se strelicama (gore, dolje, lijevo, desno) po ekranu. Tijekom igre generiraju se asteroidi, a 
cilj igrača je ne sudariti se sa asteroidom. U slučaju sudara igra se restartira te se generira zvuk sudara. 

----------------------------------------------------------------------------------------------------------------------------------------


An arcade 2D computer game has been created as an HTML5 webpage. The game is a significantly simplified version of the well-known arcade game Asteroids.

The game is displayed within a Canvas object covering the entire web browser window. The Canvas background is black, and it has a visible border. Additionally, there is an animated background with white dots simulating stars moving horizontally at a constant speed.

The game starts after the webpage loads. At the beginning of the game, a certain number of objects (asteroids) are generated at random positions and with random velocity vectors. All generated asteroids are initially outside the screen area and gradually enter the visible Canvas area.

New asteroid objects, their positions, direction, and speed of movement are randomly generated. These parameters are constant. Game parameters - the number of asteroid objects and the frequency of their generation - are predefined (constants in the program code).

The object representing an asteroid is an appropriate image of an asteroid.

The object representing the player is a red-colored rectangle with a 3D shadow around the edge. The player starts the game exactly in the middle of the Canvas.

The player controls their position using the keyboard (arrow keys - up, down, left, right).

If the object representing the player goes beyond the screen borders, it returns from the opposite side.

At each animation step, collision detection (crash) between all objects and the player object is performed, and there is a collision sound.

The game measures the time from the start (from 00:00.000; minutes:seconds.milliseconds) until at least one asteroid object collides with the player object. The goal of the game (i.e., the player's goal) is to achieve the longest collision-free time. In other words, to "survive" as long as possible without an asteroid object hitting the player object.

The game remembers the best (longest) time since it was first launched. The data on the best time is stored in local storage using the HTML5 Web Storage API.

How to run and test the game: The game starts immediately after the page loads; we move using the arrow keys (up, down, left, right) on the screen. During the game, asteroids are generated, and the player's goal is to avoid colliding with them. In case of a collision, the game restarts, and a collision sound is generated.
