//JavaScript: Break an address of an url and put it's part into an array

function break_address(url_add) {
    var data = url_add.split("://")
    var protocol = data[0];
    data = data[1].split(".com");
    var domain = data[0];
    data = data[1].split("/");

    if(data[1]){
        return [protocol,domain,data[1]]
    }

    return [protocol,domain]
}

var url_add = "https://www.w3resource.com/javascript-exercises/"
console.log("Original address: "+url_add)
console.log(break_address(url_add))
