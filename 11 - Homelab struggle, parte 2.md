<!--
{
"titolo":"Homelab struggle 2",
"desc":"Come configurare un home server",
"data":"05/05/2023"
}
-->

# Homelab struggle - parte 2 - L'OS

L'ultima volta abbiamo parlato di come ho acquistato un server perfetto per me a poco, oggi parleremo della configurazione che ho eseguito.

Dopo aver costruito il mio [rack verticale](https://www.reddit.com/r/homelab/comments/133ye33/diy_vertical_rack/) mi sono posto l'interrogativo di quale OS dovessi utilizzare:

## Quale OS?

Un utente meno esperto potrebbe pensare che l' unica scelta possibile sia quella di utilizzare una distribuzione di linux [**headless**](https://en.wikipedia.org/wiki/Headless_software), come **ubuntu server**, non è una scelta sbagliata, ma ce ne sono sicuramente di migliori.

**Perchè non ho scelto un sistema operativo da "NAS" come [unraid](https://unraid.net) o [truenas](https://www.truenas.com)?**

Entrambi questi software permettono di creare un server [capace di immagazzinare e rendere accessibili file con molta facilità](https://www.truenas.com) sopratutto grazie alla loro funzionale GUI web. Tuttavia trattandosi di sistemi operativi "specializzati" i controlli diretti sull'OS potrebbero risultare più macchinosi. Alcuni di questi OS hanno **docker preinstallato** e permettono la creazione e la configurazione di container direttamente dalla GUI, tuttavia non hanno la flessibilità della soluzione che vedremo più avanti.

**Perchè non ho scelto ubuntu server o altre distro linux "da server"?**

Avrei potuto sicuramente installare una distro come ubuntu server, installare docker e gestire il mio server in questo modo. Molta gente utilizza configurazioni del genere e credo che sia **il modo migliore se si vuole avere qualcosa di semplice ma allo stesso tempo funzionale**. Personalmente ho ritenuto che questa strada non fosse la migliore per me per due motivi:

- sicurezza
- facilità di manutenzione

**Perchè ho scelto un supervisor?**
Un supervisor è un software che ci permette di creare e gestire **macchine virtuali**. Le macchine virtuali sono come dei computer all'interno dei computer separate dal server _barebone_ e tra di loro in modo molto netto. Esistono molti supervisor in circolazione ma la mia scelta è ricaduta su [proxmox](https://www.proxmox.com).

## La mia configurazione

Proxmox è una distro basata su debian che tramite la GUI web ci permette di creare e gestire le nostre macchine virtuali. Personalmente ho creato 3 macchine:

- una macchina per tutti quei servizi che **non** hanno necessità di essere raggiunti dall'esterno della mia rete locale
- una macchina per tutti quei servizi che **hanno** necessità di essere raggiunti dall'esterno della mia rete locale
- una macchina che ha accesso ad una grande quantità di spazio che funge da NAS

Questa configurazione mi permette di mantenere un ordine logico e di **utilizzare regole firewall separate per ogni tipologia di servizi**, quindi aumentare di molto la sicurezza. Inoltre se è necessario un riavvio di una delle macchine non tutti i servizi andranno offline durante il riavvio.

Tutti i servizi girano su docker e sono gestiti da un'istanza di [portainer](https://www.portainer.io) collegata alle 3 vm più il mio raspberry pi

Alcuni dei servizi che ho installato sono:

- [home assistant](https://www.home-assistant.io)
- [bitwarden](https://bitwarden.com/blog/new-deployment-option-for-self-hosting-bitwarden/)
- [portainer](https://www.portainer.io)
- [owncloud](https://owncloud.com)
- [photoprism](https://www.photoprism.app)
- [pi-hole](https://pi-hole.net)

Il tutto è esposto al mondo esterno utilizzando i [cloudfare tunnel](https://www.cloudflare.com/it-it/products/tunnel/) una soluzione innovativa di cui sicuramente parlerò in uno dei prossimi post.

Per finire in bellezza volevo annunciarvi il nuovo dominio per questo sito web: [lolloandr.com](https://lolloandr.com)! Nel prossimo post esploreremo ulteriormente questi servizi qui sopra elencati ed alcune delle soluzioni che utilizzo con loro, alla prossima!
