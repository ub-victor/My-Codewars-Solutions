window.onload = function() {
    var ninja = {
        name: 'Victoire',
        chop(x){
            window.setInterval(() => {
                if (x > 0) {
                    console.log(this.name + ' chopped the enemy');
                    x--;
                }
            } , 1000);
        }
    };
    ninja.chop(5);
}