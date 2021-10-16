<template>
  <div class="my-5 mx-8 text-justify dark:arancio">
    <Markdown
      :source="portfolio"
      :plugins="plugins"
      :html="true"
      class="mb-6"
    />
    <br />
    <br />
  </div>
</template>

<script>
import Markdown from "vue3-markdown-it";
import MarkdownItTaskLists from "markdown-it-task-lists";
import { ottieniPortfolio } from "../api";

export default {
  name: "Portfolio",
  components: { Markdown },
  async setup() {
    let portfolio = await ottieniPortfolio();

    return {
      portfolio,
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
<style>
.arancio {
  color: orange;
}
</style>
