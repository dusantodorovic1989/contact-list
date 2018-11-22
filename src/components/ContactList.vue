<template>


<div>
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
import ContactsTable from './ContactsTable';

    export default {

        components:{
                 ContactsTable
            },
        
        methods:{
            
            addContact(){
                this.contacts.push(this.newContact);// upisujemo u tabelu ovako
                this.newContact = {};// da bi bilo prazno posle ubacivanja
                
            },
            removeContact(contact){
                let index = this.contacts.indexOf(contact);
                this.contacts.splice(index,1);
                
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
                {firstName: 'John', lastName:'Doe', email: 'example@example.com'},
                {firstName: 'Jone', lastName:'Doe', email: 'example@example.com'},
                {firstName: 'Jock', lastName:'Doe', email: 'example@example.com'},
                {firstName: 'Susan', lastName:'Doe', email: 'example@example.com'},
                {firstName: 'Jasmin', lastName:'Doe', email: 'example@example.com'},
                

            ]
            };  
        }
    }
</script>

