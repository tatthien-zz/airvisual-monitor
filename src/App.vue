<template>
  <div id="app">
    <AirVisual city="Ho Chi Minh City" state="Ho Chi Minh City">
      <template v-slot="{ city, state, country, score, color }">
        <div class="monitor" :style="{ backgroundColor: color }">
          <div class="city"><span v-text="city"></span></div>
          <div class="score"><span v-text="score"></span></div>
        </div>
      </template>
    </AirVisual>

    <AirVisual city="Hanoi" state="Hanoi">
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
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#app {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media all and (min-width: 768px) {
    flex-direction: row;
  }
}

.monitor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-right: 1px solid rgba(#000, 0.5);
  &:last-child {
    border: none;
  }
}

.city {
  span {
    font-size: 1.5rem;
    background-color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    box-shadow: 0 3px 10px rgba(#000, .1);
  }
}

.score {
  font-size: 10rem;
  font-weight: 900;
  color: rgba(#000, 0.6);
}
</style>
