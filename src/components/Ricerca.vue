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
      class="flex-shrink-0 border-transparent border-4 text-purple-400 text-bold text-sm py-1 px-2 rounded"
      type="button"
      @click="cercaAvanzato"
    >
      Cerca
    </button>
  </div>
  <div class="p-3 border-b" v-if="query == ''">
    <div v-for="(articolo, i) in data" v-bind:key="i">
      <b>{{ articolo.nome }}</b>
      <p>{{ articolo.desc }}</p>
      <hr v-if="i != nArticoli - 1" />
    </div>
  </div>
  <div class="p-3 border-b" v-else>
    <div v-for="(articolo, i) in result" v-bind:key="i">
      <b>{{ articolo.item.nome }}</b>
      <p>{{ articolo.item.desc }}</p>
      <hr v-if="i != nRisultati - 1" />
    </div>
  </div>

  <!-- <div v-for="(articolo, i) in result" v-bind:key="i">
    <b>{{ articolo.item.nome }}</b>
    <p>{{ articolo.item.desc }}</p>
  </div>
  -->
</template>

<script>
import Fuse from "fuse.js";
import { ref } from "vue";

export default {
  props: ["data", "nArticoli"],
  data() {
    const options = {
      keys: [
        { name: "nome", weight: 1 },
        { name: "descrizione", weight: 0.7 },
      ],
    };
    const fuse = new Fuse(this.data, options);
    const optionsAvanzato = {
      keys: [
        { name: "nome", weight: 1 },
        { name: "descrizione", weight: 0.7 },
      ],
      findAllMatches: true,
    };
    const fuseAvanzato = new Fuse(this.data, optionsAvanzato);

    const result = ref([]);
    const query = ref("");

    return {
      fuse,
      fuseAvanzato,
      query,
      result,
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
      console.log(this.result);
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
