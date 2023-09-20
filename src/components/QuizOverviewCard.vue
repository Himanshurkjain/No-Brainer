<template>
    <div class="bg-gray-300 w-5/6 h-28 pl-4 pt-2 pr-1">
        <div ><span class="text-xl">{{ quizData.quizName }}</span> | <span class="text-sm text-gray-500">{{ quizData.createdOn }}</span></div>
        <div class="text-sm mb-2">{{ quizData.quizDescription }}</div>
        <div class="text-sm">{{ quizData.numberOfQuestions }}</div>
    </div>
</template>
      
<script>
export default {
    name: "QuizzesList",
    data: () => {
    },
    methods: {
    },
    props: {
        quizData: {
            type: Object,
            default: undefined,
        },
    }
};
</script>
<style scoped></style>
      