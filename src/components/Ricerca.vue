<template>
  <div class="flex items-center border-b py-2 w-4/5 md:w-1/2 m-auto border-purple-400">
    <input
      class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none focus:text-purple-400 text-semibold"
      type="text"
      placeholder="Ricerca..."
      v-model="query"
      @keydown.enter="cerca"
    />
  </div>
  <div class="p-3 border-b cursor-pointer" v-if="query == ''">
    <div v-for="(articolo, i) in indice" v-bind:key="i" @click="$emit('singolo', articolo)">
      <b>{{
        articolo
          .split("-")[1]
          .split(".")[0]
          .trim()
      }}</b>
      <hr v-if="i != indice.length - 1" />
    </div>
  </div>
  <div class="p-3 border-b" v-else>
    <div v-for="(articolo, i) in result" v-bind:key="i" @click="$emit('singolo', articolo.item)">
      <b>{{
        articolo.item
          .split("-")[1]
          .split(".")[0]
          .trim()
      }}</b>
      <hr v-if="i != nRisultati - 1" />
    </div>
    <p class="text-red-400" v-if="nRisultati == 0">Mi dispiace, la tua ricerca non ha prodotto risultati</p>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import { ref } from "vue";

export default {
  props: ["data", "nArticoli", "index"],
  emits: ["singolo"],
  data() {
    const indice = ref(this.index);

    const options = {
      includeScore: true,
    };
    const fuse = new Fuse(this.index, options);
    const optionsAvanzato = {
      keys: ["nome", "descrizione", "testo"],
      threshold: 0.3,
      ignoreLocation: true,
      ignoreFieldNorm: true,
    };
    const fuseAvanzato = new Fuse(this.data, optionsAvanzato);
    const result = ref([]);
    const query = ref("");

    return {
      fuse,
      fuseAvanzato,
      query,
      result,
      indice,
      nRisultati: 0,
    };
  },
  methods: {
    cerca() {
      this.result = this.fuse.search(this.query);
      this.nRisultati = this.result.length;
    },
  },
  watch: {
    query() {
      this.cerca();
    },
  },
};
</script>

<style></style>
