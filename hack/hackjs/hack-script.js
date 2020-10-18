if (hack == true) {
    var r_number = revert(number);
    var r_access = revert(access);
    if (r_number != r_access) {
        number_false = 0;
        number_true = 0;
        if (number_false == number_true) {
            if(access > number) {
                while(access != number) {
                    alert("You HACHED! HAHAHAHAHAHHA");
                    access = access + 1;
                }
            }
            if(access < number) {
                while(access != number) {
                    alert("You HACHED! HAHAHAHAHAHHA");
                    access = access - 1;
                }
            }
        }
    }
    if(r_number == r_access) {
        console.log("Good day!");
    }
}