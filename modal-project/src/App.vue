<template>
    <h1>{{ title }}</h1>
    <p>Welcome...</p>

    <teleport to="#modals" v-if="showModalEn">
      <Modal theme="" @close="toggleModalEn">
        <template v-slot:links>
          <a href="#">Register</a>
          <a href="#">More info</a>
        </template>
        <h1>GIVEAWAY</h1>
        <p>Subscribe for half price</p>
      </Modal>
    </teleport>

    <teleport to="#modals" v-if="showModalSp">
      <Modal @close="toggleModalSp">
        <template v-slot:links>
          <a href="#">Registro</a>
          <a href="#">Más información</a>
        </template>
        <h1>GIVEAWAY</h1>
        <p>Suscripción a mitad de precio</p>
      </Modal>
    </teleport>

    <teleport to="#modals" v-if="showModalPt">
      <Modal @close="toggleModalPt">
        <template v-slot:links>
          <a href="#">Registro</a>
          <a href="#">Mais informações</a>
        </template>
        <h1>DOAR</h1>
        <p>assinatura metade do preço</p>
      </Modal>
    </teleport>

    <button @click="toggleModalEn">English</button>
    <button @click="toggleModalSp">Spanish</button>
    <button @click="toggleModalPt">Portuguese</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first Vue App :)',
      showModalEn: false,
      showModalSp: false,
      showModalPt: false
    }
  },
  methods: {
    toggleModalEn() {
      this.showModalEn = !this.showModalEn
    },
        toggleModalSp() {
      this.showModalSp = !this.showModalSp
    },
        toggleModalPt() {
      this.showModalPt = !this.showModalPt
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
