class CommonService{

    getDenomination(denom){
        console.log("hello");
        
        switch (denom) {
            case "American":
                return "$"
            case "Indian":
                return "₹"
            case "Japan":
                return "¥"
            case "Canadian":
                return "c$"
            default:
                break;
        }
    }
}

export default CommonService;