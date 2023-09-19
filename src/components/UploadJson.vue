<template>
    <div class="container">
        <form >
            <label for="">Upload JSON</label>
            <textarea name="textarea" id="" cols="30" rows="10" v-model="text"></textarea>
            <div class="btn_container">
                <div v-if="text.length">
                    <p v-if="isValidJSON()" class="text-green-500">Valid JSON</p>
                    <p v-else class="text-red-500">Invalid JSON</p>
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "UploadJson",
    data: () => {
        return {
            text: ""
        }
    },
    methods: {
        isValidJSON() {
            try {
                JSON.parse(this.text);
                return true;
            } catch (error) {
                return false;
            }
        }
    },
};
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12rem;
}

form {
    display: flex;
    flex-direction: column;
}

textarea {
    border: 1px solid black;
    margin: 0.4rem 0;
    width: 24rem;
}

.btn_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

button {
    background-color: rgb(206, 208, 209) !important;
    border-radius: 0.2rem;
    font-size: 0.6rem;
    padding: 0.4rem 2.4rem;
    margin-left: auto;
}
</style>
  