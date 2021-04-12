import * as actiontypes from './Constants';
const initialState = {
    product: {
        books: [{
            name: "Angels and Deamons",
            catagory: "Books",
            addToWishList: true,
            cartAdded: false,
            Price: 20,
            imageurl: "./books/1.PNG",
            Denaminamtion: "American",
            id: 1,
            itemCount: 0,
            itemLeft: 10
        },
        {
            name: "Because Life Is a gift",
            catagory: "Books",
            Price: 20,
            addToWishList: false,
            cartAdded: false,
            imageurl: "./books/2.PNG",
            Denaminamtion: "American",
            id: 2,
            itemCount: 0,
            itemLeft: 10

        },
        {
            name: "Cosmos",
            catagory: "Books",
            Price: 20,
            addToWishList: false,
            cartAdded: false,
            id: 3,
            imageurl: "./books/3.PNG",
            Denaminamtion: "American",
            itemCount: 0,
            itemLeft: 10

        },
        {
            name: "Game Of Thrones",
            catagory: "Books",
            imageurl: "./books/4.PNG",
            addToWishList: false,
            cartAdded: false,
            Price: 20,
            Denaminamtion: "American",
            id: 4,
            itemCount: 0,
            itemLeft: 10

        },
        {
            name: "Inferno",
            catagory: "Books",
            imageurl: "./books/5.PNG",
            addToWishList: false,
            cartAdded: false,
            Price: 20,
            Denaminamtion: "American",
            id: 5,
            itemCount: 0,
            itemLeft: 10

        },
        {
            name: "Man's Searching For Meaning",
            catagory: "Books",
            addToWishList: false,
            cartAdded: false,
            imageurl: "./books/6.PNG",
            Price: 20,
            Denaminamtion: "American",
            id: 6,
            itemCount: 0,
            itemLeft: 10

        },
        {
            name: "Meion Kempf",
            catagory: "Books",
            addToWishList: false,
            cartAdded: false,
            imageurl: "./books/7.PNG",
            Price: 20,
            Denaminamtion: "American",
            id: 7,
            itemCount: 0,
            itemLeft: 10

        }],
        mobiles: [
            {
                name: "Angels and Deamons",
                catagory: "Books",
                Price: 20,
                addToWishList: false,
                cartAdded: false,
                imageurl: "./mobile/1.jpg",
                Denaminamtion: "American",
                id: 1,
                itemCount: 0,
                itemLeft: 10

            },
            {
                name: "Because Life Is a gift",
                catagory: "Books",
                Price: 20,
                addToWishList: false,
                cartAdded: false,
                imageurl: "./mobile/2.jpg",
                Denaminamtion: "American",
                id: 2,
                itemCount: 0,
                itemLeft: 10

            },
            {
                name: "Cosmos",
                catagory: "Books",
                Price: 20,
                addToWishList: false,
                cartAdded: false,
                id: 3,
                imageurl: "./mobile/3.jpg",
                Denaminamtion: "American",
                itemCount: 0,
                itemLeft: 10

            },
            {
                name: "Game Of Thrones",
                catagory: "Books",
                imageurl: "./mobile/4.jpg",
                Price: 20,
                addToWishList: false,
                cartAdded: false,
                Denaminamtion: "American",
                id: 4,
                itemCount: 0,
                itemLeft: 10

            },
            {
                name: "Inferno",
                catagory: "Books",
                imageurl: "./mobile/5.jpg",
                Price: 20,
                addToWishList: false,
                cartAdded: false,
                Denaminamtion: "American",
                id: 5,
                itemCount: 0,
                itemLeft: 10

            }
        ],
        vegitables: [
            {
                name: "Angels and Deamons",
                catagory: "Books",
                Price: 20,
                addToWishList: false,
                cartAdded: false,
                imageurl: "./vegitables/2.jpg",
                Denaminamtion: "American",
                id: 1,
                itemCount: 0,
                itemLeft: 10
            },
            {
                name: "Because Life Is a gift",
                catagory: "Books",
                Price: 20,
                addToWishList: false,
                cartAdded: false,
                imageurl: "./vegitables/3.jpg",
                Denaminamtion: "American",
                id: 2,
                itemCount: 0,
                itemLeft: 10
            },
            {
                name: "Cosmos",
                catagory: "Books",
                Price: 20,
                id: 3,
                addToWishList: false,
                cartAdded: false,
                imageurl: "./vegitables/4.jpg",
                Denaminamtion: "American",
                itemCount: 0,
                itemLeft: 10
            },
            {
                name: "Game Of Thrones",
                catagory: "Books",
                imageurl: "./vegitables/5.jpg",
                Price: 20,
                addToWishList: false,
                cartAdded: false,
                Denaminamtion: "American",
                id: 4,
                itemCount: 0,
                itemLeft: 10
            },
            {
                name: "Inferno",
                catagory: "Books",
                imageurl: "./vegitables/6.jpg",
                Price: 20,
                addToWishList: false,
                cartAdded: false,
                Denaminamtion: "American",
                id: 5,
                itemCount: 0,
                itemLeft: 10
            }
        ]
    },
    cartDetails: [],
    orderDetails:[]
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actiontypes.productList:
            console.log("hhhh");
            
            return {
                ...state,
                initialState
            }
        case actiontypes.productDetails:
            return {
                ...state,
                productDetails: action.productDetails
            }
        case actiontypes.updateProduct:
            let productArray = state.product[`${action.payload.catagory}`];
            for (let i = 0; i < productArray.length; i++) {
                if (productArray[i].id === action.payload.product.id) {
                    productArray[i] = { ...action.payload.product }
                    console.log("[from updateProduct i ]", state.product);
                }
            }
            console.log(state.product);
            return { ...state }
        case actiontypes.RemoveFromCart:
            console.log(state);
            let cartDetails = state.cartDetails.filter(element => element.id !== action.payload.id)
            return { ...state, cartDetails: [...cartDetails] }
        case actiontypes.addToCart:
            return {
                ...state,
                cartDetails: [...state.cartDetails, action.payload]
            }
        case actiontypes.initializeCart:
            console.log("action.payload--->",action.payload);
            
            return {
                ...state,
                cartDetails: [...action.payload]
            }
        case actiontypes.updateCart:
            let cart = state.cartDetails;
            for (let k = 0; k < cart.length; k++) {
                if (cart[k].id === action.payload.id) {
                    cart[k] = Object.assign({}, action.payload);
                }
            }
            return {
                ...state,
                cartDetails: [...cart]
            }
        case actiontypes.orderItems:
            console.log("[inside] orderItems",state);
            let orderItems= [...state.orderDetails,action.payload]
            return {
                ...state,
                cartDetails:[],
                orderDetails: [...orderItems]
            }
        case actiontypes.orderItemsinitialState:
            console.log("[inside] orderItems",state);
            return {
                ...state,
                orderDetails: [...action.payload]
            }
        case actiontypes.getProductInitialState:
            console.log("in reducer",action.payload);
            
            return {
                ...state,
                product:action.payload,
                orderDetails:[]
            }
        default:
            return { ...state }
    }
}
export default reducer;