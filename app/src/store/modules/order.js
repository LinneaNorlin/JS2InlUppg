import axios from '@/axios'

export default {
    state: {
        orders: [],
        order: null
    },
    getters: {
        orders: state => state.orders,
        order: state => state.order
    },
    mutations: {
        SET_ORDERS: (state, orders) => {
            state.orders = orders
        }
    },
    actions: {
        getOrders: async ({commit}, token) => {
            const res = await axios.get('orders', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            commit('SET_ORDERS', res.data)
        },
        sendOrder: async ({commit}, {order}) => {
            const res = await axios.post('orders/createorder', {cart: order.cart} ,{
                headers: {
                    'Authorization': 'Bearer ' + order.user
                }
            })
            // console.log(res)
            commit('SET_ORDERS', res.data) 
        }
    }
}