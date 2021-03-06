//* Milestone 1
//Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

//* Milestone 2
//Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione

//Click sul contatto mostra la conversazione del contatto cliccato

//* Milestone 3
//Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde

//Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

//* Milestone 4
//Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

const root = new Vue ({
    el: '#root',
    data: {
        user: {
            name: 'Daniele Menculini',
            avatar: '_io',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        activeChat: 0,
        newMessage:'',
        randomReplay: ['Ok','Va bene','Non credo sia legale','Certamente sarà fatto','La mi mamma non vuole, scusa',' Avada Kedavra','Che la forza sia con te','Ti farò una proposta che non potrai rifiutare','Boolean telefono caasaaa','Prima regola di Boolean: Non parlare mai di Boolean Fight Club','Ti spiezzo in due','Ma dici a me?','Metti il ciclo for, togli il ciclo for','Nessuno pùò mettere Boolean in un angolo','Paolo, abbiamo un problema...','Questo non è il Vietnam, è il Boolean: ci sono delle regole','Io ne ho viste cose che voi umani non potreste immaginarvi(Paolo spiegare Js Vanilla in 2ore)','Verso l’infinito e oltre!','Possono toglierci la vita, ma non ci toglieranno mai lo Slackbot','Elementare, mio caro (studente qualsiasi di Boolean)','Mi piace l’odore di Tailwind al mattino','(1Ore 10:59) Vedo la gente morta','Il mio tesssoro! (Bootstrap)'
        ],
        searchBar: '',
    },
    methods: {
        //Click on contact in aside bar to shot chat
        choseChat(chatIndex) {
            this.activeChat = chatIndex;
        },
        //Send message in active chat
        sendMessage() {
            if( this.newMessage !== '' ) {
                this.contacts[this.activeChat].messages.push({
                    date:dayjs().format('DD/MM/YYYY  HH:mm:ss'),
                    text: this.newMessage,
                    status: 'sent',
                });

                //Clean text area
                this.newMessage = '';
                //Set focus
                this.$refs.textArea.focus();

                //Auto reply
                this.autoReply();
            }
        },
        //Choose a randome reply from array
        autoReply() {
            setTimeout( ()=> {
                this.contacts[this.activeChat].messages.push({
                    text: this.randomReplay[Math.floor( Math.random() * (this.randomReplay.length) ) + 1],
                    status: 'received',
                    date:dayjs().format('DD/MM/YYYY  HH:mm:ss')
                });
            }, 1000)
        },
        searchContact() {
            this.contacts.forEach(element => {
                if (element.name.toLowerCase().includes(this.searchBar.toLowerCase())) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        },
    },
});