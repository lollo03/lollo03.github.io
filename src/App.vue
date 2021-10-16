<template>
  <suspense>
    <div v-bind:class="{ dark: isDark }">
      <div
        class="bg-yellow-50 dark:bg-gray-900 dark:text-white md:h-screen md:overflow-hidden"
      >
        <Top @darkToggle="darkToggle" :isDark="isDark" />
        <div class="md:flex h-full">
          <div class="md:w-1/3">
            <Scheda />
          </div>
          <div class="md:h-100" style="border-left: 2px solid"></div>
          <hr class="md:hidden" />
          <div class="md:w-2/3 md:overflow-y-scroll h-full">
            <div class="w-100 h-10 border-b-2 flex">
              <div
                class="flex-auto border-r-2 flex justify-items-center items-center"
                v-bind:class="{ sel: isPortfolio }"
                @click="portfolio"
              >
                <p class="flex-auto">Portfolio</p>
              </div>
              <div
                class="flex-auto flex justify-items-center	items-center"
                v-bind:class="{ sel: !isPortfolio }"
                @click="posts"
              >
                <p class="flex-auto">Posts</p>
              </div>
            </div>
            <Articolo v-if="!isPortfolio" />
            <Portfolio v-else />
          </div>
        </div>
      </div>
    </div>
  </suspense>
</template>

<script>
import Articolo from "./components/Articolo.vue";
import Top from "./components/Top.vue";
import Scheda from "./components/Scheda.vue";
import Portfolio from "./components/Portfolio.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    Articolo,
    Top,
    Scheda,
    Portfolio,
  },
  setup() {
    const isDark = ref(false);
    const isPortfolio = ref(true);
    return {
      isDark,
      isPortfolio,
    };
  },
  mounted() {
    this.isDark = this.getMediaPreference();
  },
  methods: {
    darkToggle() {
      this.isDark = !this.isDark;
      localStorage.isDark = this.isDark;
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return true;
      } else {
        return false;
      }
    },
    portfolio() {
      this.isPortfolio = true;
    },
    posts() {
      this.isPortfolio = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.sel {
  @apply text-purple-400;
  @apply font-bold;
}
</style>
