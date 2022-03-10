const app = Vue.createApp({
    data(){
        return{
            name: 'Thina Mzosindiso Nontwabaza',
            image: 'https://cms.cut.ac.za/Files/Froala/9b029187-3539-4090-aecb-79d36e53a1d5.jpg',
            address: '1182 Dorp St,' + '\n'+
                'Cape Town,' + '\n'+
                'Western Cape,' + '\n'+
                '7745,' + '\n'+
                'South Africa'
        };
    },
    methods: {
        currentAge(){
            let today = new Date();
            let birthDate = new Date('1999');
            let age = today.getFullYear() - birthDate.getFullYear();
            if (today.getDate() < birthDate.getDate()) {
                age = age - 1;
            }
            return 'My current age,' + '\n' + age;
        },
        futureAge(){
            let today = new Date();
            let birthDate = new Date('1999');
            let age = today.getFullYear() - birthDate.getFullYear();
            if (birthDate = '1999') {
                age = age + 5;
            }
            return 'In five years time, I will be turning' + '\n' + age;
        },
        randomNum(){
            //const randomNum = Math.floor(Math.random() *( 15 - 1 + 1));
            const randomNum = Math.ceil(Math.random()* 15);
            if (randomNum >= 1){
                return 'Random integer =' + '\n' + randomNum;
            }
        }
    }
});
app.mount('#select');