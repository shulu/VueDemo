<template>
    <div>
      <PetTable :species="species" :pets="cats"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable'

export default {
  components: {
    PetTable
  },
  data () {
    return {
      species: 'cats'
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
