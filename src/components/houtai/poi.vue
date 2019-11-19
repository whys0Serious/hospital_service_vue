<template>
  <div>
    <ul v-for="d in date12">
      <li>{{d.naame}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data() {
      return {
          date12:[{'naame':'23'},{'naame':'23'},{'naame':'23'}]
      }
    }
  }
</script>
