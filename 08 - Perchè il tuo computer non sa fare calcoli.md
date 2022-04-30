<!--
{
"titolo":"Perchè il tuo computer non sa fare i calcoli",
"desc":"alias: 0.1+0.2 != 0.3",
"data":"28/04/2022"
}
-->

# Perchè il tuo computer non sa fare i calcoli

## 0.1 + 0.2 != 0.3

Il titolo di questo articolo potrebbe sembrarti strano, 0.1 + 0.2 è un calcolo semplice, che anche un bambino saprebbe fare, **figuriamoci un computer**! Tuttavia ti invito a fare questa prova: premi il tasto `F12`, apri la console e digita `0.1 + 0.2` il risultato di questa operazione sarà `0.30000000000000004`. Sicuramente un aneddoto divertente, ma **perchè** si verifica questo fenomeno?

Iniziamo col dire che i computer per loro natura sanno solo immagazzinare numeri [interi](<https://it.wikipedia.org/wiki/Numero_intero_(informatica)>) come **1, 69 o 420** quindi per rappresentare i numeri decimali si usa la tecnica del _[floating point](https://it.wikipedia.org/wiki/Numero_in_virgola_mobile)_ che **non è sempre perfettamente accurata.**

Nel sistema _decimale_ possiamo rappresentare numeri decimali non illimitati con frazioni come `1/2, 1/4, 1/5` perchè 1, 4 e 5 sono numeri i cui fattori primi sono i fattori primi di 10. D'altra parte possiamo rappresentare numeri decimali illimitati con frazioni come `1/3, 1/6, 1/7 ed 1/9` perchè i denominatori contengono numeri i cui fattori primi sono 3 o 7.

Il sistema _binario_ invece ha solo un fattore primo: **2**, quindi può rappresentare con accuratezza frazioni il cui denominatore ha come fattore primo 2: `1/2, 1/4 ed 1/8` sono tutti numeri rappresentabili con accuratezza. Quindi 0.1 (1/10) ed 0.2 (1/5) devono essere **approssimati** perchè nel sistema binario risulteranno come numeri periodici illimitati. Tuttavia l'errore avviene nel momento in cui il computer cerca di tradurre questi numeri binari in un sistema decimale per renderli facilmente comprensibili.

**Questo è il motivo per cui quando lavorate con numeri decimali ed avete bisogno di estrema precisione è consigliabile utilizzare librerie o linguaggi che prevengono questo errore.**

Quindi la prossima volta che la tua app JavaScript dovrà fare operazioni con questo tipo di numeri utilizza _[decimal.js](http://mikemcl.github.io/decimal.js/)_.

A [questo link](https://0.30000000000000004.com) potrai trovare una pagina dettagliata che mostra un fix per questo problema per ogni linguaggio di programmazione. Oppure, visita [questa](https://en.wikipedia.org/wiki/Floating-point_arithmetic) pagina di wikipedia per una spiegazione più approfondita.

**Alla prossima!**
