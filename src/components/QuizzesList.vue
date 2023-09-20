<template>
<div class="flex flex-col items-center top-1/2">
    <div class="text-4xl my-2">List All Quizzes</div>
    <QuizOverviewCard></QuizOverviewCard>
</div>
</template>
  
<script>
import QuizOverviewCard from './QuizOverviewCard.vue';
export default {
name: "QuizzesList",
components: {
    QuizOverviewCard
},
methods: {
},
};
</script>
<style scoped></style>
  