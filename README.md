Projekt je razvijen u sklopu kolegija Napredni Razvoj Programske Potpore za Web na Fakultetu elektrotehnike i računarstva.

The project was developed as part of the Advanced Web Software Development course at the Faculty of Electrical Engineering and Computing.


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
