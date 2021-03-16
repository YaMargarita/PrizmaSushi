import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        slider:[
            {
                id: 'sushi',
                title: 'Суши',
                img: 'https://i.ibb.co/XCGdB7G/01-sushi.jpg'
            },
            {
                id: 'sashimi',
                title: 'Сашими',
                img: 'https://i.ibb.co/Np4LJX4/02-sashimi.png'
            },
            {
                id: 'roll',
                title: 'Роллы',
                img: 'https://i.ibb.co/pftmS2t/03-roll.jpg'
            },
            {
                id: 'set',
                title: 'Сеты',
                img: 'https://i.ibb.co/KL3GtBq/04-set.jpg'
            },
            {
                id: 'salad',
                title: 'Салаты',
                img: 'https://i.ibb.co/vYJ7qFk/05-salad.png'
            },
            {
                id: 'soup',
                title: 'Супы',
                img: 'https://i.ibb.co/k1FByzk/06-soup.jpg'
            },
            {
                id: 'meal',
                title: 'Горячие блюда',
                img: 'https://i.ibb.co/VCmxGYN/07-hot.jpg'
            },
            {
                id: 'dessert',
                title: 'Десерты',
                img: 'https://i.ibb.co/MNGssh5/08-dessert.jpg'
            },
            {
                id: 'kids',
                title: 'Детское',
                img: 'https://i.ibb.co/R44DybX/09-kids.jpg'
            },
            {
                id: 'vegetarian',
                title: 'Вегетарианское',
                img: 'https://i.ibb.co/56xMJjf/10-vegetarian.jpg'
            },
            {
                id: 'drinks',
                title: 'Напитки',
                img: 'https://i.ibb.co/qNmjrLb/11-drinks.png'
            },
            {
                id: 'sauces',
                title: 'Соусы',
                img: 'https://i.ibb.co/Tt3Kd1K/12-sous.jpg'
            },

        ],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products
        },
        SET_TO_CART: (state, product) => {
            // НУЖНО ОТСЛЕЖИВАТЬ ПО ID ТОВАРА, КОТОРЫЙ ПОПАДАЕТ В КОРЗИНУ.
            // ЕСЛИ ТАКОЙ ID ЕСТЬ, ТО ИЗМЕНИТЬ КОЛ-ВО, ИНАЧЕ ДОБАВИТЬ
            let id = product.id;
            let addOrNot = true;
            state.cart.forEach(function (item, index){
                if(item.id === id) {
                    //такой товар есть, значит меняю его кол-во
                    state.cart[index] = product;
                    addOrNot = false;
                    return '';
                }
            })
            if(addOrNot) {
                // нужно добавить
                state.cart.push(product)
            }
        },
        MINUS_IN_CART: (state, product) => {
            //проверяю корзину:
            let index = state.cart.indexOf(product);
            if(index >= 0){
                // такой товар есть в корзине
                if(state.cart[index].count === 0){
                    state.cart.splice(index, 1);
                }
            }
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data)
                    return products;
                }).catch((error) => {
                console.log(error);
                    return error;
            })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_TO_CART', product)
        },
        MINUS_ITEM({commit}, product) {
            commit('MINUS_IN_CART', product)
        },
        CHANGE_PRODUCT({commit}, products) {
            commit('SET_PRODUCTS_TO_STATE', products)
        }
    },
    getters: {
        PRODUCTS(state){
            return state.products;
        },
        CART(state){
            return state.cart;
        },
        SLIDER(state){
            return state.slider;
        }
    }
})

export default store;
