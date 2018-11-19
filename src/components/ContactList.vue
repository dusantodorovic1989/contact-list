<template>

<div>
    <h3>Add contact</h3>
     <form @submit.prevent='addContact'>
         <label>First Name</label>
         <input v-model="newContact.firstName" placeholder="First Name"/><br>
         <label>Last Name</label>
         <input v-model="newContact.lastName" placeholder="Last Name"/><br>
         <label>Email</label>
         <input v-model="newContact.email" placeholder="Email"/><br>

         <button type='sibmit'>ADD CONTACT</button>
        
    </form>
    <h3>Contact list</h3>
   
    <table border =1>
        <thead>
            <th>KEY</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </thead>
        <tbody>
            <tr v-for="(contact,key) in contacts" :key="key">
                <td>{{key + 1}}</td>
                <td>{{contact.firstName}}</td>
                <td>{{contact.lastName}}</td>
                <td>{{contact.email}}</td>
                <td>
                    <button @click="removeContact(contact)">Remove</button>
                </td>

            </tr>
        </tbody>
    </table>

    
</div>

</template>

<script>
    export default {
        methods:{
            addContact(){
                this.contacts.push(this.newContact);// upisujemo u tabelu ovako
                this.newContact = {};// da bi bilo prazno posle ubacivanja
                
            },
            removeContact(contact){
                let index = this.contacts.indexOf(contact);
                this.contacts.splice(index,1);
                console.log(index);
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

