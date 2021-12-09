<template>
    <div>
        <b-list-group>
            <b-list-group-item>{{ animal.name }} {{$route.params.species}}</b-list-group-item>
            <b-list-group-item>{{ animal.age }} Years Old</b-list-group-item>
            <b-list-group-item>Gender: {{ animal.gender }}</b-list-group-item>
            <b-list-group-item>Colors: {{ animal.color }}</b-list-group-item>
            <b-list-group-item>Weight: {{ animal.weight }}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'dogs',
      'cats'
    ])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    console.log(this[this.$route.params.species])
    this.animal = animal
  }
}
</script>
