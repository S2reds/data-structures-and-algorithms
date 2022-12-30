let x = 121

function isPalindrome(x: number): boolean {
    for (let i = 0; i < x.toString().length/2; i++) {
        var j = x.toString();
        if (j.substr(i) !== j.substr(-1-i)) {
            return false;
        }
        else {
            continue;
        }
    }
    return true;
}

isPalindrome(x);