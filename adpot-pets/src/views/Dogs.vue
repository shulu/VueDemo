<template>
    <div>
      <PetTable :species="species" :pets="dogs"/>
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
      species: 'dogs'
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
