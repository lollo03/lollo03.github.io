<!--
Breve storia di come ho ideato e creato il sito
-->

# Come ho creato questo sito?

## L'idea

Ho preso inspirazione dal sito del podcast [pressappoco](https://pressappoco.it) di **Riccardo Palombo**, tuttavia il sito è stato sviluppato con tecnologie diverse, e sopratutto con un utilizzo intelligente ed innovativo di **github**

## Lo stile

Il sito **su desktop** è strutturato come una pergamena, dove in successione **dall'ultimo al primo** troverai tutti i miei articoli. Sulla sinistra è presente una sezione fissa con le mie info ed una breve presentazione.

Su **mobile** invece il design è orientato verso una esperienza più user-friendly possibile per non sacrificare l'usabilità.

## La tecnica

Il cuore pulsante del sito è rappresentato dal suo repository di **github**, non solo perchè il sito è hostato da gh-pages, ma anche perchè github assume una funzione di gestione degli articoli, ti spiego meglio...

Il [repository](https://github.com/lollo03/lollo03.github.io) è diviso in tre rami:

- master
- gh-pages
- articles

Sul **master** è presente il sorgente scritto in **vue** che viene automaticamente compilato da una **github actions** dopo ogni push sul branch. Questa github action compila il progetto vue in una serie di file **statici** che vengono sposati sulla branch **gh-pages**.

Ogni volta che il sito viene visitato viene fatta una richiesta alle **api** di github per recuperare tutti gli articoli (divisi in singoli file _.md_) dalla brench **articles**. Quindi per modificare/aggiungere un articolo pasta effettuare un _commit_ su questa brench.

## Quali saranno i prossimi passi?

Il sito è da considerare ancora in **beta**, ci sono una serie di aspetti da completare, come:

- [x] Cambiare i colori della day-mode
- [x] Rivedere i font
- [x] Inserire ulteriori animazioni
- [x] Inserire una ricerca

Se sei curioso da un'occhiata al codice del progetto su [github](https://github.com/lollo03/lollo03.github.io) e se ritieni il progetto interessante non dimenticare di lasciare una ⭐️!

**Update Lun 18 ottobre 2021**:
Finalmente ho inserito una ricerca tramite un libreria chiamata [fuse.js](https://fusejs.io), che consiglio caldamente. Il prossimo step sarà ottimizzare l'operazione di recuperero degli articoli, in modo da rendere il tutto più veloce.
