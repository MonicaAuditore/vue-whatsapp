# vue-boolzapp

Esercizio: Vue Boolzapp
Nome repo: vue-boolzapp
Consegna:
Utilizzate il brief per riprodurre la web application Vue Boolzapp

<!-- --------- -->

L'applicazione in questione è un semplice client di messaggistica che permette di visualizzare una lista di contatti, selezionare uno di essi e inviare e ricevere messaggi.

Il codice è diviso in sezioni che corrispondono alle diverse funzionalità dell'applicazione. Ad esempio, nella sezione HTML troviamo la definizione della struttura dell'interfaccia utente, mentre nella sezione JavaScript troviamo la logica di gestione dei dati e delle interazioni con l'utente.

Per visualizzare i contatti, l'applicazione fa uso della direttiva "v-for" di Vue.js, che permette di iterare su un array e generare dinamicamente del codice HTML per ciascun elemento. In questo caso, l'array degli elementi da iterare è "contacts", che contiene un oggetto per ciascun contatto. La direttiva "v-for" viene utilizzata per generare una lista di "li" (list item), uno per ciascun contatto, e il contenuto di ciascun elemento viene popolato dinamicamente con le informazioni del contatto corrispondente.

Quando l'utente seleziona un contatto, l'indice di quel contatto viene salvato nella variabile "currentContact" attraverso l'evento "@click". Ciò permette all'applicazione di sapere quale contatto è stato selezionato e di mostrare la corrispondente chat.

Quando l'utente invia un messaggio, il metodo "inserisciTesto" viene chiamato, e il testo viene aggiunto all'array "messages" del contatto corrente. Il metodo "risposta" viene chiamato dopo un secondo per inviare una risposta automatica al messaggio inviato.

La funzionalità di ricerca viene gestita dal metodo "comparazione", che confronta il testo inserito dall'utente con il nome dei contatti e imposta la proprietà "visible" degli oggetti contatto a "true" o "false" a seconda che il nome del contatto contenga o meno le lettere inserite dall'utente.

In sintesi, l'applicazione utilizza Vue.js per generare una lista di contatti e gestire la selezione e l'invio di messaggi, con alcune funzionalità aggiuntive come la ricerca dei contatti.
