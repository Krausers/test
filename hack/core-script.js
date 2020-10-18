if (access == number) {
    r_access = revert(access);
    r_number = revert(number);
    if(r_access == r_number) {
        alert("Very Nice! It is hack")
    }
}