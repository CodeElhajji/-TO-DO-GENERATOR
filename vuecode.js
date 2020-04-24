new Vue({
    el: '#app',
    data: {
        inputvalue: '',
        showhid: false,
        afichage: 'show',
        text: [],
        colorr: 'greenColor',
        affichageBotton: false,
        datime: Date.now()
    },
    methods: {
        addTache: function () {
            x = {
                tache: this.inputvalue,
                dattach: this.datime

            }
            this.text.push(x);
            this.inputvalue = ''
        },
    }
})