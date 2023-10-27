<template>
    <div class="w-5/6 h-50 pl-4 pt-2 pr-1">
        <div class="mb-2">New Question</div>
        <input v-model="question.questionText" class="w-1/2 mb-2 border border-blue rounded-lg p-1 text-gray-900 text-sm" placeholder="Please enter question"/>
        <div class="mb-1">
            <input type="checkbox" class="mr-1" v-model="question.option1.answer"/>
            <input v-model="question.option1.text"
                class="w-1/4  border border-blue rounded-lg p-1 text-gray-900 text-sm" placeholder="option 1"/>
        </div>
        <div class="pb-1">
            <input type="checkbox" class="mr-1" v-model="question.option2.answer"/>
            <input v-model="question.option2.text"
                class="w-1/4 border border-blue rounded-lg p-1 text-gray-900 text-sm" placeholder="option 2"/>
        </div>
        <div class="pb-1">
            <input type="checkbox" class="mr-1" v-model="question.option3.answer"/>
            <input v-model="question.option3.text"
             class="w-1/4 border border-blue rounded-lg p-1 text-gray-900 text-sm" placeholder="option 3"/>
        </div>
        <div class="pb-1">
            <input type="checkbox" class="mr-1" v-model="question.option4.answer"/>
            <input v-model="question.option4.text" class="w-1/4 border border-blue rounded-lg p-1 text-gray-900 text-sm" placeholder="option 4"/>
        </div>
        <div class="mt-5 ml-5">
            <button  @click="createQuestion" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                <span class="sr-only">Icon description</span>
            </button>
        </div>
    </div>
</template>
      
<script>
export default {
    name: "BuildQuestion",
    data: () => {
        return {
            question: {
                id: 1,
                questionText: "",
                option1: {
                    text: "",
                    answer: false,
                },
                option2: {
                    text: "",
                    answer: false,
                },
                option3: {
                    text: "",
                    answer: false,
                },
                option4: {
                    text: "",
                    answer: false,
                }
            }
        }
    },
    methods: {
        createQuestion() {
            console.log("coming here", this.question);
            this.$emit("create-question", this.question);
            this.question = {
                id: 1,
                questionText: "",
                option1: {
                    text: "",
                    answer: false,
                },
                option2: {
                    text: "",
                    answer: false,
                },
                option3: {
                    text: "",
                    answer: false,
                },
                option4: {
                    text: "",
                    answer: false,
                }
            };
        },
        generateId() {
            return this.questions + 1;
        }
    },
    props: {
        questions : {
            type: Number,
            default: 0
        }
    }
};
</script>
<style scoped></style>
      