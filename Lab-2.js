let contacts = [{ 
    name: "Maxwell Wright", 
    phone: "(0191) 719 6495", 
    email: "Curabitur.egestas.nunc@nonummyac.co.uk" 
}, { 
    name: "Raja Villarreal", 
    phone: "0866 398 2895", 
    email: "posuere.vulputate@sed.com" 
}, { 
    name: "Helen Richards", 
    phone: "0800 1111", 
    email: "libero@convallis.edu" 
}];

contacts[3]={ 
    name: "Maisie Haley", 
    phone: "0913 531 3030", 
    email: "risus.Quisque@urna.ca" 
};

let firstContact = contacts[0];
console.log(`${firstContact.name} / ${firstContact.phone} / ${firstContact.email}`);

let lastContact = contacts[3];
console.log(`${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`);
