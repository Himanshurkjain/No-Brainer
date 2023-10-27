<template>
  <div class="flex flex-col items-center top-1/2">
    <div class="text-4xl my-2">Get Quizzy</div>
    <div class="my-1">
      <router-link to="uploadJson">
      <button
        @click="uploadJson"
        class="rounded-none bg-gray-500/25 rounded py-2 px-5"
      >
        Upload JSON
      </button>
    </router-link>
    </div>
    <div class="my-1">
      <router-link to="buildQuiz">
        <button
          @click="createQuiz"
          class="rounded-none bg-gray-500/25 rounded py-2 px-5"
        >
          Build a quiz
        </button>
    </router-link>
    </div>
    <div class="my-1">
      <router-link to="list">
        <button
          @click="getAllQuizzes"
          class="rounded-none bg-gray-500/25 rounded py-2 px-5"
        >
          See all quizzes
        </button>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizzyLanding",
  methods: {
    uploadJson() {
      console.log("---Json is getting uploaded---");
      this.$router.push('/uploadjson')
    },
    createQuiz() {
      console.log("---quiz created---");
    },
    getAllQuizzes() {
      console.log("---get all quizzes---");
    },
  },
};
</script>
<style scoped></style>
