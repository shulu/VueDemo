<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend.</h1>
    <div>{{animalsCount}}</div>
    <div>{{getAllCats.length}}</div>
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>
    <b-form @submit.prevent ="handleSubmit" @reset.prevent ="onReset" v-if="showPetForm">
      <b-form-group
        id="input-group-1"
        label="Pets Name:"
        label-for="input-1"
        description="Enter name"
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.name"
          placeholder="Enter Pets Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="species:" label-for="input-3">
        <b-form-select
          id="input-3"
          :options="['cats','dogs']"
          required
          v-model="formData.species"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Age:"
        label-for="input-2"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        species: '',
        name: '',
        age: 0
      }
    }
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      // console.log(this.formData)
      const { species, name, age } = this.formData
      const payload = {
        species: species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)

      // reset form after submit
      this.formData = {
        species: '',
        name: '',
        age: 0
      }
    }
  }
}
</script>
