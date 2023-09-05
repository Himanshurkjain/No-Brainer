<template>
    <div class="container">
        <form @submit.prevent="submit">
            <label for="">Upload JSON</label>
            <textarea name="textarea" id="" cols="30" rows="10"></textarea>
            <div class="btn_container">
                <button type="submit">submit</button>
            </div>
        </form>
    </div>
</template>
<script setup>
const submit = () => {
console.log(`upload`);
}
</script>
<style>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0 12rem;
}
form {
    display: flex;
    flex-direction: column;
}
textarea {
    border: 1px solid black ;
    margin: 0.4rem 0;
    width: 24rem;
}
.btn_container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
}
button {
    background-color: rgb(206, 208, 209) !important;
    border-radius: 0.2rem;
    font-size: 0.6rem;
    padding: 0.4rem 2.4rem;

}
</style>