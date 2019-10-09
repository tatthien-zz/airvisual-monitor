import axios from 'axios';

const HOUR_IN_MILISECONDS = 3600000;

export default {
  data() {
    return {
      score: 0,
    };
  },
  created() {
    this.getPollutionScore();
  },
  computed: {
    color() {
      if (this.score === 0) {
        return '#ffffff';
      }
      if (this.score <= 50) {
        return '#A8E05F';
      }
      if (this.score <= 100) {
        return '#FDD74B';
      }
      if (this.score <= 150) {
        return '#FE9B57';
      }
      if (this.score <= 200) {
        return '#FE6A69';
      }
      return '#FE6A69';
    },
  },
  methods: {
    getPollutionScore() {
      // fetch data from AirVisual
      axios.get('https://api.airvisual.com/v2/city', {
        params: {
          city: 'Ho Chi Minh city',
          state: 'Ho Chi Minh city',
          country: 'Vietnam',
          key: '602f69da-b2ed-494d-a7fa-be391675c8da',
        },
      }).then((resp) => {
        const { data } = resp.data;
        this.score = data.current.pollution.aqius;

        // Send a request every 30 mininutes.
        setTimeout(this.getPollutionScore, HOUR_IN_MILISECONDS / 2);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  render() {
    const slot = this.$scopedSlots.default({
      city: 'Ho Chi Minh city',
      state: 'Ho Chi Minh city',
      country: 'Vietnam',
      score: this.score,
      color: this.color,
    });

    return Array.isArray(slot) ? slot[0] : slot;
  },
};
