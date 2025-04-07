
const uniqueFlavors = new WeakSet();  


const flavor1 = { flavor: 'chocolate' };  


const flavor2 = { flavor: 'vanilla' }; 

 
uniqueFlavors.add(flavor1);  
uniqueFlavors.add(flavor2);  


uniqueFlavors.add(flavor1);  

