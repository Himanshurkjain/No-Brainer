<template>
    <div class="flex flex-col items-center top-1/2 my-10">
        <div> MCQ Quiz 1</div>
        <QuizQuestion :question="question" v-for="question in questions" :key="question.id"></QuizQuestion>
        <BuildQuestion @create-question="createQuestion"></BuildQuestion>
    </div>
    
</template>
      
<script>
import BuildQuestion from './BuildQuestion.vue';
import QuizQuestion from './QuizQuestion.vue';
export default {
name: "BuildQuiz",
components: {
    QuizQuestion,
    BuildQuestion
},
data: () => {
    return {
        questions: []
    }
},
methods: {
    createQuestion(question) {
        question.id = this.questions.length ? this.questions[this.questions.length -1].id + 1 : 1;
        this.questions.push(JSON.parse(JSON.stringify(question)));
    }
},
};
</script>
<style scoped></style>
      