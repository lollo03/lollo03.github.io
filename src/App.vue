<template>
  <suspense>
    <div v-bind:class="{ dark: isDark }">
      <div class="dark:bg-gray-900 dark:text-white md:h-screen md:overflow-hidden">
        <Top @darkToggle="darkToggle" :isDark="isDark"/>
        <div class="md:flex h-full">
          <div class="md:w-1/3">
            <Scheda />
          </div>
          <div class="md:h-100" style="border-left: 2px solid"></div>
          <hr class="md:hidden" />
          <div class="md:w-2/3 md:overflow-y-scroll h-full">
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
