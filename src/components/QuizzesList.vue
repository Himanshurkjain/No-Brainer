<template>
<div class="flex flex-col items-center top-1/2 my-10">
    <div v-for="quiz in quizzes" :key="quiz.quizId" class="mb-6 mt-4">
        <QuizOverviewCard :quiz-data ="quiz"></QuizOverviewCard>
    </div>
    
</div>
</template>
  
<script>
import QuizOverviewCard from './QuizOverviewCard.vue';
export default {
name: "QuizzesList",
components: {
    QuizOverviewCard
},
data: () => {
    return {
        quizzes: [
            {
                quizName: "SalesForce Javascript Developer 1",
                quizId: 1,
                createdOn: "3 days ago",
                quizDescription: "It includes javascript basics and lightening components.It includes javascript basics and lightening components.It includes javascript basics and lightening components.",
                numberOfQuestions: "50 questions"
            },
            {
                quizName: "SalesForce Javascript Developer 2",
                quizId: 2,
                createdOn: "3 days ago",
                quizDescription: "It includes javascript basics and lightening components.It includes javascript basics and lightening components.It includes javascript basics and lightening components.",
                numberOfQuestions: "50 questions"
            },
            {
                quizName: "SalesForce Javascript Developer 3",
                quizId: 3,
                createdOn: "3 days ago",
                quizDescription: "It includes javascript basics and lightening components.It includes javascript basics and lightening components.It includes javascript basics and lightening components.",
                numberOfQuestions: "50 questions"
            },
            {
                quizName: "SalesForce Javascript Developer 4",
                quizId: 4,
                createdOn: "3 days ago",
                quizDescription: "It includes javascript basics and lightening components.It includes javascript basics and lightening components.It includes javascript basics and lightening components.",
                numberOfQuestions: "50 questions"
            },
            {
                quizName: "SalesForce Javascript Developer 5",
                quizId: 5,
                createdOn: "3 days ago",
                quizDescription: "It includes javascript basics and lightening components.It includes javascript basics and lightening components.It includes javascript basics and lightening components.",
                numberOfQuestions: "50 questions"
            }
        ]
    }
},
methods: {
},
};
</script>
<style scoped></style>
  