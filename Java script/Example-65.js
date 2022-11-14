//JavaScript: Test whether a string end with "Script"


function end_script(str) {
  if (str.substring(str.length - 6, str.length) == 'Script') 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
console.log(end_script("JavaScript"));
console.log(end_script("Java Script"));
console.log(end_script("Java Scripts"));
