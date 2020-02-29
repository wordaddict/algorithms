const reverse  = (x) => {
    let rev = 0;
    while(x !== 0){
        let pop = x % 10;
        x = x / 10;
        if((rev > Number.MAX_VALUE / 10) || (rev === Number.MAX_VALUE && pop > 7)){
            return 0;
        };

        if((rev < Number.MIN_VALUE / 10) || (rev === Number.MIN_VALUE && pop < -8)){
            return 0;
        };

        rev = rev * 10 + pop;
    }
}