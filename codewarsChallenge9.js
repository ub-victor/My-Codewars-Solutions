const contact = {  
    email: {  
        work: "work@example.com",  
        private: "victoireushindi371@gmail.com"  
    }  
};

delete contact.email.work;  
console.log(contact.email.work);  
console.log(contact.email.private);  
