<template>
<div>
    <h3>{{title}}</h3>
    <button @click="functionInChild">Call parant function</button><br>
    {{message}}
    <br>
    {{getResevedMessageMethod()}}
    <br>
    {{reverseMessageComputed}}
    </div>
</template>

<script>
export default {
    data(){
        return{
        message:'Ovo je neka poruka'
        }
    },
    props:['title'],

    methods:{
        functionInChild(){
            console.log('Child function');
            this.$emit('callParentFunction', 'Jack',29);
        },
        getResevedMessageMethod(){
            return this.message.split(' ').reverse().join(' ');
        }
    },
    computed:{
        reverseMessageComputed(){
            return this.message.split(' ').reverse().join(' ');
        }
    }
};
</script>

