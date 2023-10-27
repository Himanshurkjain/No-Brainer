<template>
    <div class="w-5/6 h-60 pl-4 pt-2 pr-1">
        <div class="mb-2">Question {{ question.id }}</div>
        <div>{{ question.questionText }}</div>
        <div class="mb-1">
            <input type="checkbox" class="mr-1" :checked="question.option1.answer"/>
            <input :value="question.option1.text"
                class="w-1/4  border border-blue-400 rounded-lg p-1 text-gray-900 text-sm" placeholder="option 1"/>
        </div>
        <div class="pb-1">
            <input type="checkbox" class="mr-1" :checked="question.option2.answer"/>
            <input :value="question.option2.text"
                class="w-1/4 border border-blue-400 rounded-lg p-1 text-gray-900 text-sm" placeholder="option 2"/>
        </div>
        <div class="pb-1">
            <input type="checkbox" class="mr-1" :checked="question.option3.answer"/>
            <input :value="question.option3.text"
             class="w-1/4 border border-blue-400 rounded-lg p-1 text-gray-900 text-sm" placeholder="option 3"/>
        </div>
        <div class="pb-1">
            <input type="checkbox" class="mr-1" :checked="question.option4.answer"/>
            <input :value="question.option4.text" class="w-1/4 border border-blue-400 rounded-lg p-1 text-gray-900 text-sm" placeholder="option 4"/>
        </div>
    </div>
</template>
      
<script>
export default {
    name: "QuizQuestion",
    data: () => {
        return {
        }
    },
    methods: {
       
    },
    props: {
        question: {
            type: Object,
            default: undefined
        }
    }
};
</script>
<style scoped></style>
      