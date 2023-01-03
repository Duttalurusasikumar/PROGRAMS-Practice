//JavaScript: Check whether a given string represents a correct sentence or not

function is_correct_Sentence(input_str) {
    var first_char = input_str[0];
    var last_char = input_str[input_str.length - 1];
    return /[A-Z]/.test(first_char) && last_char == "."
}
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));            
console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts."));
