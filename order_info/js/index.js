var vm=new Vue({
    el:"#app",
    data: {
        newOrder: {
            goods_name: '11',
            goods_id: '22',
            goods_price: '22',
            status: '33',
            user_name: '44',
            user_address: '44'
        },
        orders: [{
            goods_name: 'apple',
            goods_id: '001',
            goods_price: '5.55',
            status: '未支付',
            user_name: 'jkl',
            user_address: '北京海淀'
        },{
            goods_name: 'apple',
            goods_id: '001',
            goods_price: '5.55',
            status: '未支付',
            user_name: 'jkl',
            user_address: '北京海淀'
        }],

    },
    methods:{
        addOrder(){
            if(this.newOrder.goods_name!==''&&this.newOrder.goods_id!==''&&
            this.newOrder.goods_price!==''&&this.newOrder.status!==''&&
            this.newOrder.user_name!==''&&this.newOrder.user_address!==''){
                console.log(this.newOrder.goods_name);
                this.orders.push(this.newOrder);
                this.newOrder={
                    new_goods_name:'',
                    new_goods_id:'',
                    new_goods_price:'',
                    new_status:'',
                    new_user_name:'',
                    new_user_address:''};
            }
            else{ alert('请完善订单信息再提交！谢谢！！！')

            }
        },
        deleteOrder(orderId){
            this.orders.splice(orderId,1)
        }
    },
    // watch:{
    //     orders: {
    //         handler(orders){
    //             //Store.save(orders)
    //         },deep: true
    //     }
    // }
})