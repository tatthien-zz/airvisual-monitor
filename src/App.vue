<template>
  <div id="app">
    <AirVisual>
      <template v-slot="{ city, state, country, score, color }">
        <div class="monitor" :style="{ backgroundColor: color }">
          <div class="city"><span v-text="city"></span></div>
          <div class="score"><span v-text="score"></span></div>
        </div>
      </template>
    </AirVisual>
  </div>
</template>

<script>
import AirVisual from './components/AirVisual';

export default {
  name: 'app',
  components: {
    AirVisual,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.monitor {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.city {
  span {
    font-size: 2rem;
    background-color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
}

.score {
  font-size: 10rem;
  font-weight: 700;
  color: rgba(#000, 0.6);
}
</style>
