<template>
  <div class="flex aboslute top-5">
    <div class="flex" @click="mostraLista">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <p class="text-2xl" v-if="!singolo">Indice</p>
    </div>

    <div v-if="singolo" class="flex flex-grow" @click="singolo = false">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
        />
      </svg>
      <p class="text-2xl" v-if="singolo">Torna indietro</p>
    </div>
  </div>
  <div v-if="isLista">
    <Ricerca
      :data="articoli"
      :nArticoli="nArticoli"
      @singolo="mostraSingolo($event)"
    />
  </div>
  <div v-if="!singolo">
    <div class="my-5 mx-8 text-justify">
      <div
        v-for="(articolo, i) in articoli"
        v-bind:key="i"
        class="my-4 mx-1 markdown"
      >
        <Markdown
          :source="articolo.testo"
          :plugins="plugins"
          class="mb-6"
          :html="true"
        />
        <hr />
      </div>
    </div>
  </div>
  <div v-else class="my-5 mx-8 text-justify">
    <Markdown
      :source="articoli[quale].testo"
      :plugins="plugins"
      class="mb-6"
      :html="true"
    />
  </div>
  <br />
</template>

<script>
import Markdown from "vue3-markdown-it";
import MarkdownItTaskLists from "markdown-it-task-lists";
import { ottieniArticoli, ottieniArticolo } from "../api";
import { ref } from "vue";
import Ricerca from "../components/Ricerca.vue";

export default {
  name: "Articolo",
  components: { Markdown, Ricerca },
  async setup() {
    const articoli = ref([]);
    let temp;
    let t = await ottieniArticoli();
    let nArticoli = 0;

    const singolo = ref(false);
    const quale = ref("");

    const isLista = ref(false);
    for (const i of t) {
      temp = await ottieniArticolo(i);
      articoli.value.unshift(temp);
      nArticoli++;
    }

    return {
      isLista,
      articoli,
      singolo,
      quale,
      nArticoli,
      plugins: [
        {
          plugin: MarkdownItTaskLists,
        },
      ],
    };
  },
  methods: {
    mostraLista() {
      this.isLista = !this.isLista;
    },
    mostraSingolo(id) {
      this.singolo = true;
      this.quale = this.articoli
        .map(function(e) {
          return e.nome;
        })
        .indexOf(id);
      this.isLista = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
