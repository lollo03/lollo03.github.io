<template>
  <suspense>
    <div v-bind:class="{ dark: isDark }" class="transition-all duration-500 ease-in-out">
      <div class="dark:bg-gray-900 h-screen dark:text-white">
        <Top @darkToggle="darkToggle" :isDark="isDark"/>
        <div class="md:flex">
          <div class="md:w-1/2">
            <Scheda />
          </div>
          <div class="md:h-100" style="border-left: 2px solid"></div>
          <hr class="md:hidden" />
          <div class="md:w-1/2">
            <Articolo />
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
import { ref } from "vue";

export default {
  name: "App",
  components: {
    Articolo,
    Top,
    Scheda,
  },
  setup() {
    const isDark = ref(false);
    return {
      isDark,
    };
  },
  mounted() {
    this.isDark = this.getMediaPreference()
  },
  methods: {
    darkToggle() {
      this.isDark = !this.isDark;
      localStorage.isDark = this.isDark
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
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
