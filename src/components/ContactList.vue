<template>


<div>
    <ContactDetails :contact='routeContact' />
    <ContactsTable :contactsList='contacts'/>
    <h3>Add contact</h3>
     <form @submit.prevent='addContact'>
         <label>First Name</label>
         <input v-model="newContact.firstName" placeholder="First Name"/><br>
         <label>Last Name</label>
         <input v-model="newContact.lastName" placeholder="Last Name"/><br>
         <label>Email</label>
         <input v-model="newContact.email" placeholder="Email"/><br>

         <button type='submit'>ADD CONTACT</button>
        
    </form>

    
  

    
</div>

</template>

<script>
import ContactsTable from './ContactsTable'
import ContactDetails from './ContactDetails'
    export default {

        components:{
                 ContactsTable,
                 ContactDetails
            },
        
        methods:{
            
            addContact(){
                this.contacts.push(this.newContact);// upisujemo u tabelu ovako
                this.newContact = {};// da bi bilo prazno posle ubacivanja
                
            },
            removeContact(contact){
                let index = this.contacts.indexOf(contact);
                this.contacts.splice(index,1);
                
            },
  
        },
                  computed:{
                routeContact(){
                    let findedcontact =this.contacts.find(contact => contact.id == this.$route.params.id);
                    console.log(findedcontact)
                    return findedcontact;
                }
                
            },
        data(){
            return{
                newContact:{
                    firstName:'',
                    lastName:'',
                    email:''
                },
            contacts: [
                {id: 1,firstName: 'John', lastName:'Doe', email: 'example@example.com'},
                {id: 2,firstName: 'Jone', lastName:'Doe', email: 'example@example.com'},
                {id: 3,firstName: 'Jock', lastName:'Doe', email: 'example@example.com'},
                {id: 4,firstName: 'Susan', lastName:'Doe', email: 'example@example.com'},
                {id: 5,firstName: 'Jasmin', lastName:'Doe', email: 'example@example.com'},
                

            ]
            };  
        }
    }
</script>

