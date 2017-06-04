var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period";
var dinosaur = "triceratops"
var dinosaurUpperCased = dinosaur.toUpperCase();
var textReplace = text.replace ("Velociraptor", dinosaurUpperCased);
console.log(textReplace);
//Patryk, console.log(textReplace.length/2); nie pokazuje polowy tekstu, tylko dzieli ilosc znakow na pol :(
