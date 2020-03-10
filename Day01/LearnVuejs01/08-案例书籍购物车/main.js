const app=new Vue({
    el:'#app',
    data:{
        books:[{
            id:1,
            name:'《算法导论》',
            date: '3006-9',
            price: 85.00,
            count: 1
        },{
            id:2,
            name:'《Unix法导论》',
            date: '2056-9',
            price: 185.00,
            count: 1
        },{
            id:2,
            name:'《Linx导论》',
            date: '2016-9',
            price: 285.00,
            count: 1
        },{
            id:3,
            name:'《Dos导论》',
            date: '2006-9',
            price: 485.00,
            count: 1
        }]
    },
    filters:{
        showPrice:function(price){
            return '$'+price.toFixed(2);
        }
    },
    methods:{
        decrement:function(index){
            console.log('-')
            this.books[index].count--;
        },
        increment:function(index){
            console.log('+')
            this.books[index].count++;

        },
        remove:function(index){
            this.books.splice(index,1);
        }
    },
    computed:{
        totalPrice(){
            let totalPrice=0;
            for(let v of this.books){
                totalPrice+=v.price*v.count;
            }
            return totalPrice;
        }
    }
})