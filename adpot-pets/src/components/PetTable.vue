<template>
    <div>
      <h1>{{species}} For Adoption</h1>
      <b-table striped hover :items="pets">
        <template #cell(name)="data">
          <!-- `data.value` is the value after formatted by the Formatter -->
          <a :href="`/pet/${species}/${data.index}`">{{ data.value }}</a>
        </template>
      </b-table>
  </div>
</template>

<script>

export default {
  props: {
    species: String,
    pets: Array
  },
  data () {
    return {
    }
  }
}
</script>
