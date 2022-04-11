<template>
  <div class="flex aboslute top-5 cursor-pointer">
    <div class="flex" @click="mostraLista">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <p class="text-2xl" v-if="!singolo">Indice</p>
    </div>

    <div v-if="singolo" class="flex flex-grow" @click="singolo = false">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <Ricerca :data="articoli" :nArticoli="nArticoli" :index="indexRicerca" @singolo="mostraSingolo($event)" />
  </div>
  <div v-if="!singolo">
    <div class="my-5 mx-8 text-justify">
      <div v-for="(articolo, i) in articoli" v-bind:key="i" class="my-4 mx-1 markdown">
        <Markdown :source="articolo.testo" :plugins="plugins" class="mb-6" :html="true" />
        <hr />
      </div>
    </div>
    <button
      @click="carica"
      v-if="caricato != t.length - 1 && carico == false"
      class="border-2 border-opacity-100 border-black dark:border-white rounded-xl p-2 transition
              duration-500
              ease-in-out
              hover:text-purple-400
              transform
              hover:-translate-y-1
              hover:scale-110
              hover:border-purple-600"
    >
      Carica un altro articolo
    </button>
    <p v-else-if="caricato == t.length - 1 && carico == false">
      WOW! Hai letto tutti gli articoli!
    </p>
    <p v-else>Carico...</p>
  </div>
  <div v-else class="my-5 mx-8 text-justify">
    <Markdown :source="singArticolo.testo" :plugins="plugins" class="mb-6" :html="true" />
    <button
      @click="singolo = false"
      class="border-2 border-opacity-100 border-black dark:border-white rounded-xl p-2 transition
              duration-500
              ease-in-out
              hover:text-purple-400
              transform
              hover:-translate-y-1
              hover:scale-110
              hover:border-purple-600"
    >
      Torna indietro
    </button>
  </div>

  <br /><br /><br /><br /><br />
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
    const carico = ref(false);
    const articoli = ref([]);
    const singArticolo = ref("");
    let temp;
    let t = await ottieniArticoli();
    let nArticoli = 0;

    const singolo = ref(false);
    const quale = ref("");

    const caricato = ref(-1);
    const isLista = ref(false);
    t.reverse(); //NON TOCCARE O SI ROMPE TUTTO
    for (let i = 0; i < 3; i++) {
      temp = await ottieniArticolo(t[i]);
      articoli.value.push(temp);
      nArticoli++;
      caricato.value++;
    }

    return {
      isLista,
      articoli,
      singolo,
      quale,
      nArticoli,
      caricato,
      t,
      indexRicerca: t,
      carico,
      singArticolo,
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
    async mostraSingolo(id) {
      this.singolo = true;
      let temp = this.articoli
        .map(function(e) {
          return e.id;
        })
        .indexOf(id);

      if (temp == -1) {
        temp = await ottieniArticolo(id);
      } else {
        temp = this.articoli[temp];
      }
      this.singArticolo = temp;
      this.isLista = false;
    },
    async carica() {
      this.carico = true;
      this.caricato++;
      let temp = await ottieniArticolo(this.t[this.caricato]);
      this.carico = false;
      this.articoli.push(temp);
      this.nArticoli++;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.markdown code {
  background-color: rgb(0, 0, 0, 0.1);
}
</style>
