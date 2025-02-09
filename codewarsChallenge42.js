window.onload = function(){
    var names = new Set()
        names.add("Victoire").add("Cristal").add("Joyce").add("Joyce");
        names.delete("Joyce");
        console.log(names.delete("Joyce"))
        console.log(names.size)
        console.log(names);
        console.log(names.has("Cristal"))
        
    
}