<template>
  <div
    class="flex items-center border-b py-2 w-4/5 md:w-1/2 m-auto border-purple-400"
  >
    <input
      class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none focus:text-purple-400 text-semibold"
      type="text"
      placeholder="Ricerca..."
      v-model="query"
      @keydown.enter="cerca"
    />
    <button
      class="flex-shrink-0 border-transparent border-4 text-purple-400 text-bold text-sm py-1 px-2 rounded transition
              duration-500
              ease-in-out
              hover:text-purple-400
              transform
              hover:-translate-y-1
              hover:scale-110"
      type="button"
      @click="cercaAvanzato"
    >
      Ricerca avanzata
    </button>
  </div>
  <div class="p-3 border-b cursor-pointer" v-if="query == ''">
    <div
      v-for="(articolo, i) in indice"
      v-bind:key="i"
      @click="$emit('singolo', articolo)"
    >
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
    <div
      v-for="(articolo, i) in result"
      v-bind:key="i"
      @click="$emit('singolo', articolo.item)"
    >
      <b>{{
        articolo.item
          .split("-")[1]
          .split(".")[0]
          .trim()
      }}</b>
      <hr v-if="i != nRisultati - 1" />
    </div>
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
    cercaAvanzato() {
      this.result = this.fuseAvanzato.search(this.query);

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
