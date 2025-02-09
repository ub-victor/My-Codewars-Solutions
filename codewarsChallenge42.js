window.onload = function(){
    var names = new Set()
        names.add("victoire").add("Cristal").add("Joyce").add("Joyce");
        names.delete("Joyce");
        console.log(names.delete("Joyce"))
        console.log(names.size)
        console.log(names);
        
    
}