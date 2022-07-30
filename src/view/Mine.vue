<template>
  <div class="pt-10 bg-white">
    <van-cell-group class="cell-group">
      <van-cell is-link center>
        <van-row class="flex items-center flex-nowrap p-2 space-x-4" @click="toPersonal">
          <van-col>
            <van-image
                fit="cover"
                width="80px"
                height="80px"
                :src="user.avatar"
            />
          </van-col>
          <van-col class="w-full">
            <div class="flex flex-col">
              <span class="text-xl pb-3">{{ user.name }}</span>
              <div class=" flex items-start justify-between w-full">
                <span class="line-clamp-1 text-gray-400">{{ user.description }}</span>
                <van-image :src="require('../assets/二维码.png')" width="25" height="25"></van-image>
              </div>
              <span>
                <button class="rounded-full border border-gray-400 px-3 my-2">+&emsp;状态</button>
              </span>
            </div>
          </van-col>
        </van-row>
      </van-cell>
    </van-cell-group>

    <div class="space-y-1.5 bg-gray-200">
      <van-cell-group class="cell-group">
        <van-cell title="服务" is-link :icon="require('../assets/服务.png')"/>
      </van-cell-group>
      <van-cell-group class="cell-group">
        <van-cell title="收藏" is-link :icon="require('../assets/收藏.png')"/>
        <van-cell title="朋友圈" is-link :icon="require('../assets/图片.png')"/>
        <van-cell title="卡包" is-link :icon="require('../assets/卡包.png')"/>
        <van-cell title="表情" is-link :icon="require('../assets/表情.png')"/>
      </van-cell-group>
      <van-cell-group class="cell-group">
        <van-cell title="设置" is-link :icon="require('../assets/设置.png')"/>
      </van-cell-group>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Mine",
  data() {
    return {

    };
  },
  mounted() {
    console.log("----", this.getStoreUser)
    // localStorage 本地存储实现
    // let user = JSON.parse(localStorage.getItem("user"))
    // this.user = user
  },
  computed: {

    // todo 2. 再获取state里面的数据
    ...mapGetters({
      // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
      user: 'getStoreUser'
    })
  },
  methods: {
    toPersonal() {
      this.$router.push({name: "Personal"})
    },
  }

}
</script>

<style scoped>
.cell-group {
  @apply divide-y divide-gray-200
}

</style>