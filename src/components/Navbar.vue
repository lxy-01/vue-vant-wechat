<template>
  <van-sticky>
    <van-nav-bar :z-index="2" :title="title" class="border-b bg-gray-200">
      <template #right>
        <div class="space-x-2">
          <van-icon size="20px" color="black" name="search"></van-icon>
          <van-icon size="20px" color="black" name="add-o"></van-icon>
        </div>
      </template>
    </van-nav-bar>
  </van-sticky>
</template>

<script>
export default {
  name: "Navbar",
  props:['title'],
  data(){
    return{
      pathName: ''
    }
  },
  mounted() {
    this.pathName = this.$route.name
  }
}
</script>

<style scoped>

</style>