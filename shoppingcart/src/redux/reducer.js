import * as actiontypes from './Constants';
const initialState = {
    product:{
        books:[{
            name:"Angels and Deamons",
            catagory:"Books",
            Price:20,
            imageurl:"./books/1.PNG",
            Denaminamtion:"American",
            id:1
        },
        {
            name:"Because Life Is a gift",
            catagory:"Books",
            Price:20,
            imageurl:"./books/2.PNG",
            Denaminamtion:"American",
            id:2
        },
        {
            name:"Cosmos",
            catagory:"Books",
            Price:20,
            id:3,
            imageurl:"./books/3.PNG",
            Denaminamtion:"American"
        },
        {
            name:"Game Of Thrones",
            catagory:"Books",
            imageurl:"./books/4.PNG",
            Price:20,
            Denaminamtion:"American",
            id:4
        },
        {
            name:"Inferno",
            catagory:"Books",
            imageurl:"./books/5.PNG",
            Price:20,
            Denaminamtion:"American",
            id:5
        },
        {
            name:"Man's Searching For Meaning",
            catagory:"Books",
            imageurl:"./books/6.PNG",
            Price:20,
            Denaminamtion:"American",
            id:6
        },
        {
            name:"Meion Kempf",
            catagory:"Books",
            imageurl:"./books/7.PNG",
            Price:20,
            Denaminamtion:"American",
            id:7
        }],
    mobiles:[1,2,3,4,5],
    vegitables:[2,3,4,5,6]
    }
}
const reducer = (state=initialState,action) =>{

    switch (action.type) {
        case actiontypes.productList:
            return {
                ...state,
                initialState
            }
            default:
               return {...state}
    }
}
export default reducer;