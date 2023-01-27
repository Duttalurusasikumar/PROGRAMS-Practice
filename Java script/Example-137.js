//JavaScript: Test whether a given integer is greater than 15 return the given number, otherwise return 15

function test_fifteen(num) 
{
    while(num<15){
        num++;
    }
    return num;
}
console.log(test_fifteen("123"));
console.log(test_fifteen("10"));
console.log(test_fifteen("5"));
