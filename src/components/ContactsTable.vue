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
            <tr v-for="(contact,key) in contactsList" :key="key">
                <td>{{key + 1}}</td>
                <td>
                <router-link :to="{name: 'contact-details',params: {id: contact.id}}">
                    {{contact.firstName}}
                </router-link>
                </td>
                <td>{{contact.lastName}}</td>
                <td>{{contact.email}}</td>
                <td>
                    <button class="btn btn-danger" @click="removeContact(contact)">Remove</button>
                </td>

            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
    props:['contactsList']
};
</script>

