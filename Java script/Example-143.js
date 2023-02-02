//JavaScript: Sort the strings of a given array of strings in the order of increasing lengths

function sort_by_string_length(arra) {
	for (var i = 0; i < arra.length; i++) {
		for (var j = i + 1; j < arra.length; j++) {
			if (arra[i].length > arra[j].length) {
				var m = arra[i];
				arra[i] = arra[j];
				arra[j] = m;
			}
		}
	}
	return arra;
}
var arra = ["xyz","acd","aa","bb","zzz","", "a","b"];
console.log("Original array: "+ arra+"\n");
console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));
