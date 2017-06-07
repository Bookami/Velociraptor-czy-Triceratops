var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period";
console.log(text.length);
var dinosaur = "triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
var textReplace = text.replace("Velociraptor", dinosaurUpperCased);
var textSubstr = textReplace.substr(0,textReplace.length/2);
console.log(textSubstr);
