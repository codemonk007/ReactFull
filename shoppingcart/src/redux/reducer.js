import * as actiontypes from './Constants';
const initialState = {
    product: {
        books: [{
            name: "Angels and Deamons",
            catagory: "Books",
            addToWishList:true,
            Price: 20,
            imageurl: "./books/1.PNG",
            Denaminamtion: "American",
            id: 1
        },
        {
            name: "Because Life Is a gift",
            catagory: "Books",
            Price: 20,
            addToWishList:false,
            imageurl: "./books/2.PNG",
            Denaminamtion: "American",
            id: 2
        },
        {
            name: "Cosmos",
            catagory: "Books",
            Price: 20,
            addToWishList:false,
            id: 3,
            imageurl: "./books/3.PNG",
            Denaminamtion: "American"
        },
        {
            name: "Game Of Thrones",
            catagory: "Books",
            imageurl: "./books/4.PNG",
            addToWishList:false,
            Price: 20,
            Denaminamtion: "American",
            id: 4
        },
        {
            name: "Inferno",
            catagory: "Books",
            imageurl: "./books/5.PNG",
            addToWishList:false,
            Price: 20,
            Denaminamtion: "American",
            id: 5
        },
        {
            name: "Man's Searching For Meaning",
            catagory: "Books",
            addToWishList:false,
            imageurl: "./books/6.PNG",
            Price: 20,
            Denaminamtion: "American",
            id: 6
        },
        {
            name: "Meion Kempf",
            catagory: "Books",
            addToWishList:false,
            imageurl: "./books/7.PNG",
            Price: 20,
            Denaminamtion: "American",
            id: 7
        }],
        mobiles: [
            {
                name: "Angels and Deamons",
                catagory: "Books",
                Price: 20,
                addToWishList:false,
                imageurl: "./mobile/1.jpg",
                Denaminamtion: "American",
                id: 1
            },
            {
                name: "Because Life Is a gift",
                catagory: "Books",
                Price: 20,
                addToWishList:false,
                imageurl: "./mobile/2.jpg",
                Denaminamtion: "American",
                id: 2
            },
            {
                name: "Cosmos",
                catagory: "Books",
                Price: 20,
                addToWishList:false,
                id: 3,
                imageurl: "./mobile/3.jpg",
                Denaminamtion: "American"
            },
            {
                name: "Game Of Thrones",
                catagory: "Books",
                imageurl: "./mobile/4.jpg",
                Price: 20,
                addToWishList:false,
                Denaminamtion: "American",
                id: 4
            },
            {
                name: "Inferno",
                catagory: "Books",
                imageurl: "./mobile/5.jpg",
                Price: 20,
                addToWishList:false,
                Denaminamtion: "American",
                id: 5
            }
        ],
        vegitables: [
            {
                name: "Angels and Deamons",
                catagory: "Books",
                Price: 20,
                addToWishList:false,
                imageurl: "./vegitables/2.jpg",
                Denaminamtion: "American",
                id: 1
            },
            {
                name: "Because Life Is a gift",
                catagory: "Books",
                Price: 20,
                addToWishList:false,
                imageurl: "./vegitables/3.jpg",
                Denaminamtion: "American",
                id: 2
            },
            {
                name: "Cosmos",
                catagory: "Books",
                Price: 20,
                id: 3,
                addToWishList:false,
                imageurl: "./vegitables/4.jpg",
                Denaminamtion: "American"
            },
            {
                name: "Game Of Thrones",
                catagory: "Books",
                imageurl: "./vegitables/5.jpg",
                Price: 20,
                addToWishList:false,
                Denaminamtion: "American",
                id: 4
            },
            {
                name: "Inferno",
                catagory: "Books",
                imageurl: "./vegitables/6.jpg",
                Price: 20,
                addToWishList:false,
                Denaminamtion: "American",
                id: 5
            }
        ]
    },
    cartDetails:[]
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actiontypes.productList:
            return {
                ...state,
                initialState
            }
        case actiontypes.productDetails:
            return {
                ...state,
                productDetails:action.productDetails                
            }
        case actiontypes.updateProduct:
            let productArray = state.product[`${action.payload.catagory}`];          
            for (let i = 0; i < productArray.length; i++) {
               if(productArray[i].id== action.payload.product.id){
                productArray[i] = {...action.payload.product}
                console.log("[from updateProduct i ]",state.product);  
               }   
            }
            console.log(state.product);                
        return {...state}
        case actiontypes.addToCart:
            return {
                ...state,
                cartDetails:[...state.cartDetails,action.payload]                
            }
        default:
            return { ...state }
    }
}
export default reducer;