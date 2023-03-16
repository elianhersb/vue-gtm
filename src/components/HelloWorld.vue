<template>
  <div class="hello">
    <button
      @click="onSetGTM()"
    >
      send event
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    console.log('gtm - GA - 04');

    this.$gtm.trackView("Home", "Dashboard");
  },
  methods:{
    onSetGTM(){
      this.$gtag.event('testGA', { method: 'Google' });
      this.$gtag.event('testGA2', {
        event_category: 'GA2',
        event_label: 'testGA2',
        value: 123
      })
      this.$gtm.trackEvent({
        event: 'EventoPRUEBA', // Event type [default = 'interaction'] (Optional)
        category: "onSetGTM",
        action: "click",
        label: "SetGTM",
        value: 'vuegtm02',
        noninteraction: false, // Optional
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
