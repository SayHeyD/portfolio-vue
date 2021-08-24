<template>
  <Layout>
    <div class="bg-green-400 py-32">
      <div class="flex justify-around">

        <div class="w-1/2 animate-move-in">
          <div class="monitor">
            <div class="display">
              <div class="drawn-header"></div>
              <div class="drawn-text-1"></div>
              <div class="drawn-text-2"></div>
              <div class="drawn-text-3"></div>
              <div class="drawn-text-4"></div>
              <div class="drawn-text-5"></div>
              <div class="picture"></div>
            </div>
          </div>
          <div class="monitor-stand"></div>
          <div class="monitor-foot"></div>
        </div>

        <div class="w-1/2 animate-move-in">
          <h2 class="w-full h-full flex justify-center items-center text-7xl font-semibold text-gray-100">
            <span class="inline-flex flex-col justify-center items-center">
              <span>David Docampo</span>
              <span>-</span>
              <vue-typer
                class="text-5xl"
                :text='[
                  "IT-Enthusiast",
                  "Web-Dev",
                  "Gamer"
                ]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='70'
                :type-delay='70'
                :pre-erase-delay='2000'
                :erase-delay='250'
                erase-style='select-all'
                :erase-on-complete='true'
                caret-animation='phase'
              ></vue-typer>
            </span>
          </h2>
        </div>

      </div>
      <div class="flex justify-center">

      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'

export default {
  components: {
    Layout
  }
}
</script>

<style>
.vue-typer .custom.char.typed {
  color: #f3f4f6;
}
.vue-typer .custom.char.selected {
  color: #f3f4f6;
}
</style>

<style scoped>
.monitor {
  position: relative;
  left: 8rem;
  padding-top: 1rem;
  background-color: #616161;
  height: 18rem;
  width: 32rem;
  border-radius: 15px;
}

.display {
  position: relative;
  left: 1rem;
  background-color: white;
  height: 16rem;
  width: 30rem;
  border-radius: 15px;
}

.monitor-stand {
  position: relative;
  left: 22rem;
  box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.4);
  background-color: #616161;
  height: 4rem;
  width: 4rem;
}

.monitor-foot {
  position: relative;
  left: 20rem;
  background-color: #616161;
  height: 0.5rem;
  width: 8rem;
  border-radius: 5px;
}

.drawn-header {
  position: relative;
  top: 2.5rem;
  left: 2.5rem;
  background-color: #333333;
  height: 1rem;
  width: 18rem;
  border-radius: 50px;
}

.drawn-text-1 {
  position: relative;
  top: 5rem;
  left: 2.5rem;
  background-color: #d3d3d3;
  height: 0.75rem;
  width: 10rem;
  border-radius: 50px;
}

.drawn-text-2 {
  position: relative;
  top: 6rem;
  left: 2.5rem;
  background-color: #d3d3d3;
  height: 0.75rem;
  width: 8rem;
  border-radius: 50px;
}

.drawn-text-3 {
  position: relative;
  top: 7rem;
  left: 2.5rem;
  background-color: #d3d3d3;
  height: 0.75rem;
  width: 12rem;
  border-radius: 50px;
}

.drawn-text-4 {
  position: relative;
  top: 8rem;
  left: 2.5rem;
  background-color: #d3d3d3;
  height: 0.75rem;
  width: 6rem;
  border-radius: 50px;
}

.drawn-text-5 {
  position: relative;
  top: 9rem;
  left: 2.5rem;
  background-color: #d3d3d3;
  height: 0.75rem;
  width: 8rem;
  border-radius: 50px;
}

.picture {
  position: relative;
  background-color: #34d399;
  top: 2rem;
  left: 20rem;
  height: 6rem;
  width: 6rem;
  border-radius: 5px;
}
</style>