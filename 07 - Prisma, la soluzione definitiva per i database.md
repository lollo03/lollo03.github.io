<!--
{
"titolo":"Prisma, la soluzione definitiva per i database",
"desc":"Rivoluziona il tuo modo per creare e gestire i tuoi database",
"data":"01/02/2022"
}
-->

# Prisma

## La soluzione definitiva per creare e gestire database

I **database** si distinguono in due grandi categorie: **relazionali** e **non relazionali**. I primi si distinguono per la loro capacità di mantenere ordinati ed integri i dati, **a discapito della flessibilità**. I secondi ci permettono di interagire col database senza nessun [DBMS](https://it.wikipedia.org/wiki/Database_management_system) che ci _"sgridi"_ quando facciamo qualche cappellata. \
Quindi, se vogliamo dei database affidabili dobbiamo rinunciare alla flessibilità? Con **[prisma](https://www.prisma.io)** no. \
Prisma è un tool per **JavaScript e Go** che ci permette di **creare ed interagire** con i nostri database con facilità, guidandoci dalla creazione dello schema, alla popolazione, al recupero dei dati.

Prisma è composto da tre parti:

1. Un tool per la **generazione dello schema**
2. Un client che ci permetterà di **interagire col nostro database**
3. Una [CLI](https://it.wikipedia.org/wiki/Interfaccia_a_riga_di_comando) che ci guiderà in tutto il processo

Il primo step per implementare prisma è creare un file che `.prisma` che definisce lo schema, come descritto sulla [documentazione](https://www.prisma.io/docs/concepts/components/prisma-schema). Questo file ci permette di usare tutte le features dei database relazionali più comuni, **descrivendo lo schema tramite una sintassi leggibile e sensata**. \
Dopo di che la [CLI](https://www.prisma.io/docs/concepts/components/prisma-cli) di prisma tramite il comando `$ prisma migrate dev` andrà a inserire il nostro schema nel database, andando a creare **tabelle, indici e relazioni** per noi. \
L'ultimo step è creare il [client](https://www.prisma.io/docs/concepts/components/prisma-client) che permetterà alla nostra applicazione di interagire col database tramite il comando `$ prisma generate`. \
Il tutto è condito con una [GUI](https://www.prisma.io/docs/concepts/components/prisma-studio), chiamata **prisma studio**, che ci permette di visionare i dati sul nostro database.

A tutto questo si aggiungono una serie di features molto interessanti come **auto migrazione, sorting, filtri, middleware ed una estensione per VSCode**.

Prisma è compatibile con i più famosi database relazionali: **PostgreSQL, MySQL, MariaDB, SQLite ed SQL Server.** Inoltre è compatibile anche con **MongoDB**.
Può essere usato con **JavaScript, TypeScript e Go**

Per il tuo prossimo progetto (o se ti vuoi approcciare ai database relazionali) ti **consiglio vivamente** di provare [prisma](https://www.prisma.io).

Alla prossima!
