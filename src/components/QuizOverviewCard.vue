<template>
    <div class="bg-gray-300 w-5/6 h-24 pl-4 pt-2">
        <div ><span class="text-xl">{{ card.quizName }}</span> | <span class="text-sm text-gray-500">{{ card.createdOn }}</span></div>
        <div class="text-sm mb-2">{{ card.quizDescription }}</div>
        <div class="text-sm">{{ card.numberOfQuestions }}</div>
    </div>
</template>
      
<script>
export default {
    name: "QuizzesList",
    data: () => {
        return {
            card: {
                quizName: "SalesForce Javascript Developer",
                createdOn: "3 days ago",
                quizDescription: "It includes javascript basics and lightening components.It includes javascript basics and lightening components.It includes javascript basics and lightening components.",
                numberOfQuestions: "50 questions"
            }
        }
    },
    methods: {
    },
};
</script>
<style scoped></style>
      