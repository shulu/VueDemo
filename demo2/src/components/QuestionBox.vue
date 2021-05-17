<template>
  <div class="question-box-container">
    <b-jumbotron header="" lead="">
      <template #lead>
        {{ currentQuestion.question }}
      </template>
      <hr class="my-4">
      <b-list-group>
        <b-list-group-item v-for="(answer, index) in answers" :key="index" @click="selectAnswer(index)" :class="[selectedIndex === index ? 'selected' :'']">
          {{answer}}
        </b-list-group-item>
      </b-list-group>
      <b-button variant="primary" href="#">Submit </b-button>
      <b-button @click="next" variant="success" href="#">Next</b-button>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  props: {
    currentQuestion: Object,
    next: Function
  },
  data () {
    return {
      selectedIndex: null
    }
  },
  computed: {
    answers () {
      let answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
      return answers
    }
  },
  watched: {
    currentQuestion () {
      this.selectedIndex = null
      this.shuffleAnswers()
    },
  },
  methods: {
    selectAnswer (index) {
      this.selectedIndex = index
    },
    shuffleAnswers () {
      let answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
      return answers
    }
  },
  mounted () {
    console.log(this.currentQuestion)
  }
}
</script>
<style scoped>
.list-group {
  margin-bottom: 15px;
}
.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}
.btn {
  margin: 0 5px;
}
.selected {
  background-color: lightblue;
}
.correct {
  background-color: lightgreen;
}
.incorrect {
  background-color: lightcoral;
}
</style>