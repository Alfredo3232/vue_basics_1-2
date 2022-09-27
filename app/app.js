const app = Vue.createApp({
    data() {
        return {
            courseGoal: '<h1>Finish the course and learn Vue!</h1>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.floor(Math.random() * 20);
            return randomNumber
        }
    }
});

app.mount('#user-goal');
