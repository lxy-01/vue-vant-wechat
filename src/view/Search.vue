<template>
  <div class="space-y-1.5 bg-gray-200">
    <Navbar :title="title"></Navbar>
    <van-cell-group v-for="s in searchList" :key="s.id">
      <van-cell :title="item.title" is-link :icon="item.icon" v-for="item in s"/>
    </van-cell-group>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Search",
  components: {Navbar},
  data() {
    return {
      title: '发现',
      searchList: [
        [{id: "001", title: '朋友圈', icon: require('../assets/朋友圈.png')}],
        [{id: "002", title: '视频号', icon: require('../assets/video.png')},
          {id: "003", title: '直播', icon: require('../assets/直播.png')}],
        [{id: "004", title: '扫一扫', icon: require('../assets/扫一扫.png')},
          {id: "005", title: '摇一摇', icon: require('../assets/摇一摇.png')}],
        [{id: "006", title: '看一看', icon: require('../assets/看一看.png')},
          {id: "007", title: '搜一搜', icon: require('../assets/搜一搜.png')}],
        [{id: "008", title: '附近', icon: require('../assets/附近.png')}],
        [{id: "009", title: '购物', icon: require('../assets/购物.png')},
          {id: "010", title: '游戏', icon: require('../assets/游戏机.png')}],
        [{id: "011", title: '小程序', icon: require('../assets/小程序.png')}]
      ]
    }
  }
}
</script>

<style scoped>
.cell-group {
  @apply divide-y divide-gray-200
}

>>> .van-icon__image {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
</style>