<template>
  <div v-bind:class="{ dark: isDark }">
    <div class="bg-yellow-50 dark:bg-gray-900 dark:text-white md:h-screen md:overflow-hidden">
      <Top @darkToggle="darkToggle" :isDark="isDark" />
      <div class="md:flex h-full">
        <div class="md:w-1/3 hide-scrollbar" style="overflow: scroll; margin-bottom: 3em">
          <suspense> <Scheda /> </suspense>
        </div>
        <div class="md:h-100" style="border-left: 2px solid"></div>
        <hr class="md:hidden" />
        <div class="md:w-2/3 md:overflow-y-scroll h-full">
          <div class="w-100 h-10 border-b-2 border-t-2 flex">
            <div class="flex-auto border-r-2 flex justify-items-center items-center cursor-pointer">
              <p class="flex-auto">Portfolio</p>
            </div>
            <div class="flex-auto flex justify-items-center items-center cursor-pointer">
              <a class="flex-auto" href="https://www.lolloandr.com/blog">Blog</a>
            </div>
          </div>
          <suspense>
            <template #default>
              <Portfolio style="margin-bottom: 8em" />
            </template>
            <template #fallback>
              <div class="flex">
                <div style="border-top-color: transparent" class="w-16 h-16 border-4 border-purple-400 border-dotted rounded-full animate-spin m-auto mt-12"></div>
              </div>
            </template>
          </suspense>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "./components/Top.vue";
import Scheda from "./components/Scheda.vue";
import Portfolio from "./components/Portfolio.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    Top,
    Scheda,
    Portfolio,
  },
  setup() {
    const isDark = ref(false);
    return {
      isDark,
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
      const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
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
}

.sel {
  @apply text-purple-400;
  @apply font-bold;
}

.hide-scrollbar {
  /*FireFox*/
  scrollbar-width: none;
  /*IE10+*/
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.hide-scrollbar::-webkit-scrollbar {
  /*Chrome, Safari, Edge*/
  display: none;
}
</style>
