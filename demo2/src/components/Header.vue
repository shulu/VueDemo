<template>
  <div>
    <b-nav>
      <b-nav-item disabled><b>Fancy QuestionBox App</b></b-nav-item>
      <b-nav-item disabled>Count: {{numCorrect}}/{{numTotal}}</b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  props: [
    'numCorrect',
    'numTotal'
  ],
}
</script>