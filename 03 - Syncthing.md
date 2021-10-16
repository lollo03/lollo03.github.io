# Synchthing

## La soluzione definitiva per sincronizzare i tuoi file

[Syncthing](https://syncthing.net/) è un software open source che ti permette di creare delle cartelle **sincronizzate** tra più dispositivi.
E' scritto in go ed è ovviamente **open source**. Presenta una serie di punti di forza, tra cui:

- **Sincronizzazione peer-to-peer:** questo vuol dire che non hai bisogno di nessun server centrale, bastano 2 o più dispositivi dove sincronizzare la tua cartella. Questo vuol dire che i file sono solo **sui tuoi dispositivi**
- **Criptografia:** come descritto sul [loro sito](https://syncthing.net/security/) tutti i file suono criptografati prima di essere mandati su internet per la sincronizzazione.
- **Semplice da usare:** Syncthing ha una GUI web che permette di configurare il tutto semplicemente.

Può essere **installato in vari modi**, esistono sia applicazioni per windows e macOS, sia app per android (quella per ios è in [fase di sviluppo](https://forum.syncthing.net/t/isyncthing-ios-client-for-syncthing-now-in-beta/15815)) sia gli eseguibili per tutti i sistemi operativi.

##### Case use:

Io personalmente lo utilizzo per tenere un backup di determinate cartelle sul mio mac sul mio **NAS**. Sul mac l'ho installato tramite [syncthing-macos](https://github.com/syncthing/syncthing-macos) e sul mio server [OpenMediaVault](https://www.openmediavault.org/) tramite [questo](https://hub.docker.com/r/syncthing/syncthing) container **docker**. Puoi create cartelle di **solo upload, solo download o sincronizzazione a due vie**, puoi configuare dei file o cartelle da **ignorare** e supporta addirittura il [file-versioning](https://docs.syncthing.net/users/versioning.html) per poter eseguire il **rollback** di ogni file.
