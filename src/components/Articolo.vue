<template>
  <div class="my-5 mx-8 text-justify">
    <div
      v-for="(articolo, i) in articoli"
      v-bind:key="i"
      class="my-4 mx-1 markdown"
    >
      <Markdown
        :source="articolo"
        :plugins="plugins"
        class="mb-6"
        :html="true"
      />
      <hr class="w-5/6 mb-8 m-auto" />
    </div>
    <br />
  </div>
</template>

<script>
import Markdown from "vue3-markdown-it";
import MarkdownItTaskLists from "markdown-it-task-lists";
import { ottieniArticoli, ottieniArticolo } from "../api";

export default {
  name: "Articolo",
  components: { Markdown },
  async setup() {
    let articoli = [];
    let temp;
    let t = await ottieniArticoli();
    for (const i of t) {
      temp = await ottieniArticolo(i);
      articoli.unshift(temp);
    }

    return {
      articoli,
      plugins: [
        {
          plugin: MarkdownItTaskLists,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
