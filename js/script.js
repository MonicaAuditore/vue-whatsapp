const { createApp } = Vue;

createApp({
  data() {
    return {
      dt: luxon.DateTime,

      ricevuto: "received",
      inviato: "sent",
      currentContact: 0,

      inputLetters: "",

      newInputMessage: "",

      searchValue: "",
      mostraDelete: false,
      messaggioVisible: false,

      messaggioCliccato: [],
      isActive: false,

      visible: "visible",
      hidden: "hidden",

      contacts: [
        {
          name: "Ivan",
          avatar: "_1",
          visible: true,

          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,

          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Oggi ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "_6",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "_7",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "_8",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo da Falafeel!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!",
              status: "received",
            },
          ],
        },
      ],
    };
  },

  /*Opzione 1 - Milestone 4 - ricerca utenti: 
  per far funzionare la ricerca creata in computed, devo aggiungere questo nell'input dell search:
  <input v-model="searchValue" ecc....
  
  e mettere userList al posto di contacts quando genero tutti i div degli utenti:
  v-for="(singleUser, index) in usersList"*/

  // computed: {
  //   usersList() {
  //     if (this.searchValue.trim().length > 0) {
  //       return this.contacts.filter((contact) =>
  //         contact.name
  //           .toLowerCase()
  //           .includes(this.searchValue.trim().toLowerCase())
  //       );
  //     }
  //     return this.contacts;
  //   },
  // },

  //LUXON NON FUNZIONANTE: date: dt.now().tolocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
  methods: {
    inserisciTesto(currentContact) {
      this.contacts[currentContact].messages.push({
        date: "10/01/2020 15:50:00",
        message: this.newInputMessage,
        status: "sent",
      });
      this.newInputMessage = "";
    },

    risposta: function (currentContact) {
      setTimeout(() => {
        console.log(currentContact);
        console.log(this.contacts);
        console.log(this.contacts[currentContact]);
        this.contacts[currentContact].messages.push({
          date: "10/01/2020 15:50:02",
          message: "ok",
          status: "received",
        });
      }, 1000);
    },

    /* Opzione 2 - Milestone 4 - ricerca utenti:
  Se l'user ha visible:true, rendilo visibile, altrimenti non mostrarlo;
  Imposta visible:false agli user che, nel nome, non hanno incluse le lettere che scrivo all'interno dell'input;
  */
    comparazione() {
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].name.toLowerCase().includes(this.inputLetters)) {
          console.log("ok");
        } else {
          console.log("no");
          this.contacts[i].visible = false;
        }
        if (this.inputLetters == "") {
          this.contacts[i].visible = true;
        }
      }
    },

    menuDelete(index) {
      for (
        let i = 0;
        i < this.contacts[this.currentContact].messages.length;
        i++
      ) {
        this.contacts[this.currentContact].messages[i].menu = "false";
      }

      i = index;
      this.contacts[this.currentContact].messages[i].menu = "true";
      console.log(this.contacts[this.currentContact].messages);
    },

    cancella(index) {
      for (
        let i = 0;
        i < this.contacts[this.currentContact].messages.length;
        i++
      ) {
        this.contacts[this.currentContact].messages[i].cancella = "false";
      }
      console.log(this.contacts[this.currentContact].messages);

      i = index;

      this.contacts[this.currentContact].messages[i].cancella = "true";
      console.log(this.contacts[this.currentContact].messages);
    },

    //Funzione per trovare la data
    splitedDate(index) {
      for (let i = 0; i < this.contacts[index].messages.length; i++) {
        let ora = this.contacts[index].messages[i].date.split(" ")[1];
        this.contacts[index].messages[i].ora = ora;
        console.log(this.contacts[index].messages);
      }
    },

    // splitedDate() {
    //   for (let i = 0; i < this.contacts.length; i++) {
    //     let ora = this.contacts[i].messages[0].date.split(" ")[1];
    //     this.contacts[i].messages[0].ora = ora;
    //     console.log(this.contacts[i].messages);
    //   }
    // },
  },
}).mount("#root");

/*
Problemi:

1. problema alla classe della tab cancella messaggio, non mi fa inserire un secondo v-bind;
2. problema nell'importazione ultimo messaggio nell'elenco contatti, per chi ha solo 2 messaggi non importa l'ultimo;
3. problema con l'inserimento di date in tutti gli oggetti di "messages" dei contattai, importa solo l'ora dei messaggi dei primi 3 contatti

4. Non funziona Luxon;
*/
