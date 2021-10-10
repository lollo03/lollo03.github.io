<template>
  <div>
    <div v-for="(articolo, i) in articoli" v-bind:key="i" style="font-size: 100% !important" >
    <Markdown :source="articolo" />
    <hr class="w-5/6 m-auto">
    </div>
  </div>
</template>

<script>
import Markdown from "vue3-markdown-it";
import { ottieniArticoli, ottieniArticolo } from "../api";
export default {
  name: "Articolo",
  components: { Markdown },
  async setup() {
    let articoli = []
    let temp;
    let t = await ottieniArticoli();
    for (const i of t) {
      temp = await ottieniArticolo(i);
      articoli.unshift(temp)
    }
    
    return {
      articoli
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
