

const app = new Vue({
  // qui si inserisce TUTTO il codice Vue
  // el è un parametro obbligatorio e punta a un ID
  el: '#app',

  // tutte le nostre variabili le dichiariamo in data
  // da a sua volta è un oggetto
  data : {
    messaggio: 'ciao mondo',
    mioColore: '',
    mioStile: 'grassetto',
    isGrassetto : false,
    isRosso: false,
    visualizzaTesto: true,
    numero1: 15,
    numero2: 15,
    nomi: ['Ugo','Giuseppe','Martina'],
    user: {
      firstname: 'Giuseppe',
      lastname: 'Verdi',
      age: 30
    },
    classiBooolean:[
      {
        nome: '#61',
        studenti: 35,
        teachers: ['Stefano','Simone', 'Giovanni']
      },
      {
        nome: '#62',
        studenti: 30,
        teachers: ['Pino','Rino', 'Gino']
      },
      {
        nome: '#59',
        studenti: 34,
        teachers: ['Ugo','Marta', 'Berta']
      },
    ]
  },

  // le funzioni vanno messe demtro la proprietà methods
  methods: {
    funzioneEstesa: function(){
      console.log('sono la funzione estesa', this);
      console.log('messaggio', this.messaggio);
    },
    funzioneCompatta(){
      console.log('sono la funzione compatta', this);
      console.log('messaggio', this.messaggio);
    },
    // le arrow function non si usano come methods perché non accedo ai data
    arrowFunction : () => {
      console.log('sono la arrow function', this);
      console.log('messaggio', this.messaggio);
    },
    toggleGrassetto(){
      this.isGrassetto = ! this.isGrassetto;
    },
    cambiaMessaggio(nuovoMessaggio){
      this.messaggio = nuovoMessaggio;
    }
  }
});

