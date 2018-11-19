<template>

<div>
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
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>
    export default {
        data(){
            return{
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

