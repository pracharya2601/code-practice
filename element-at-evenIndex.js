

function onlyElementAtEvenIndex(array) {
    var newArray = Array(Meth.celi(array.lenght / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0 ){
         newArray[i/2] = array [i];
        }
    }
    return newArray;
}