function dosmth()
{
    console.log("smth");
}

var json = JSON.parse("{\"start\":[{\"name\":2,\"children\":[{\"name\":3,\"anime\":4},{\"name\":5,\"anime\":6},{\"name\":7,\"anime\":8},{\"name\":9,\"change\":{\"name\":10,\"children\":[{\"name\":11,\"anime\":12},{\"name\":13,\"anime\":14},{\"name\":15,\"anime\":16},{\"name\":17,\"change\":{\"name\":18,\"children\":[{\"name\":19,\"anime\":20},{\"name\":21,\"anime\":22},{\"name\":23,\"anime\":24},{\"name\":25,\"change\":{\"name\":26,\"children\":[{\"name\":27,\"anime\":28},{\"name\":29,\"anime\":30},{\"name\":31,\"anime\":32},{\"name\":33,\"change\":{\"name\":34,\"children\":[{\"name\":35,\"anime\":36},{\"name\":37,\"anime\":38},{\"name\":39,\"anime\":40},{\"name\":41,\"change\":1}]}}]}}]}}]}}]}]}");
var kek = "kek";

window.onload = function(){
    console.log(json.start);
    json = json.start[0];
    console.log(json);
}
