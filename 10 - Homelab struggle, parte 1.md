<!--
{
"titolo":"Homelab struggle, parte 1, hardware",
"desc":"Portarsi a casa un server con poco",
"data":"27/04/2023"
}
-->

# Homelab struggle - parte 1

## Hardware

Il sogno di qualsiasi nerd che rispetti è quello di scendere in garage ed assere accolti da un trionfo di lucine ed un mormorio di ventole degno di un datacenter dell'NSA. Tuttavia, non tutti hanno un budget che permetta di acquistare una decina di server e buttarli in garage. Quindi con una serie di articoli ho deciso di raccontarvi il percorso di un neofita in questo mondo, step by step.

Iniziano dalle basi: **a cosa può essere utile un homelab?** Dal mio punto di vista i vantaggi sono principalmente due:

- **è un'ottima esperienza educativa:** lavorare con hardware e software diversi può essere più utile e formativo di qualsiasi corso, in fondo siamo _makers_ e questo è il nostro metodo di apprendimento preferito.
- **può avere senso economicamente:** se scegliamo dell'hardware adatto (sopratutto dal punto di vista del consumo energetico) possiamo ammortizzare l'investimento non avendo più necessita di spendere decine di euro al mese per vari servizi (cloud, vps, ecc..)

Senza perderci in ulteriori chiacchiere vediamo che tipo di hardware possiamo acquistare

### Single board computer

Tutti noi abbiamo sentito parlare di single board computer come **RaspberryPi** o **Zimaboard**. Sono il modo più facile per entrare in questo fantastico mondo! Hanno diversi vantaggi: costano poco, consumano poco e sono molto flessibili. Un single board computer per via del suo **footprint ridotto e consumo energetico** ci permette di creare dei progetti interessanti e divertenti come [homelab mobili](https://www.reddit.com/r/homelab/comments/hl2cfm/portable_minilab_mesh_network/?utm_source=share&utm_medium=ios_app&utm_name=iossmf&utm_term=link) e [cyberdeck](https://hackaday.com/tag/cyberdeck/). Tuttavia si è **fortemente limitati nella potenza di calcolo** e nella possibilità di upgrade.

Personalmente ho utilizzato un raspberryPI per hostare la mia istanza di [home assistant](https://www.home-assistant.io) per anni, e l'esperienza è stata **più che accettabile.**

### Computer di recupero

Hai presente quel vecchio computer che hai buttato nell'armadio a prendere polvere? É il momento di metterlo in gioco! **Con pochi euro puoi fare qualche upgrade** (SSD e RAM, principalmente) ed avere un server pronto che va bene per la maggior parte delle esigenze. Il vantaggio principale è chiaro: **il costo è quasi nullo**. Tuttavia dovrai considerare che hardware vecchio non ha un ottimo **rapporto performance/consumo**. Personalmente ho utilizzato un vecchio PC con degli hard disk di recupero (topic di cui parleremo anche più tardi) come **nas** per qualche mese, installandoci [truenas](https://www.truenas.com). **Sono rimasto soddisfatto dell'esperienza** e credo che se hai la possibilità (e la necessità) sia stupido non provarci!

### Hardware enterprise usato

Se apri ebay e cerchi "server" noterai una **moltitudine di hardware acquistabile con poche centinaia di euro.** Il mercato è saturo ma è difficile da navigare. L'hardware enterprise **ti permette di sperimentare su una piattaforma radicalmente diversa da quella dei computer desktop**. Puoi trovare hardware con molta potenza di calcolo, hardware che strizza un occhio al risparmio energetico, hardware che viene venduto a prezzi assurdi, sta a te capire come navigare questo mercato. Personalmente mi sono affidato alle guide ed ai post del subreddit [r/homelab](https://www.reddit.com/r/homelab/) dove è presente una sezione [wiki](https://www.reddit.com/r/homelab/wiki/index/) piena di utili info.

Quindi, cosa ho scelto?
**Ho acquistato per 100 euro un dell R320** usato (vedi il [post](https://www.reddit.com/r/homelab/comments/12w77jv/my_first_rack_mountable_server_specs_in_comments/) su reddit) con le seguenti caratteristiche:

- CPU E5-2420 v2 (6 core / 12 tread, 2.20/2.70 GHz)
- 32 GB di ram DDR3

E per un altro centinaio di euro ho acquistato un **SSD** e **5 dischi SAS da 3 TB l'uno.**

Quindi per un totale di poco più di 200 euro mi sono portato a casa una macchina di tutto rispetto che è più che sufficiente per i miei bisogni. Il **server consuma circa 60W** che in questa economia non sono pochi, ma sto studiando delle soluzioni per ridurre il consumo.

Nei prossimi articoli andremo ad esplorare la configurazione software e scopriremo se la mia avventura con questa nuova macchina sarà positiva o negativa, **a presto!**
