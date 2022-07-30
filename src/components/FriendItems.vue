<template>
  <van-row type="flex" align="center" gutter="8" class="px-4 py-1">
    <van-col>
      <van-image
          width="40"
          height="40"
          radius="6"
          :src="src"
      />
    </van-col>
    <van-col class=" line-clamp-1 pr-2 flex-grow h-full text-base py-1.5 mx-1"
             :class="{'border-b':hasDivide}">
      {{label}}
    </van-col>
  </van-row>

</template>

<script>
export default {
  name: "FriendItems",
  props:["src","label","hasDivide"]
}
</script>

<style scoped>

</style>