<template>
  <div>
    <van-nav-bar
        :z-index="2"
        :title="title"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
        class="border-b bg-gray-200"
    />
    <div class="space-y-1.5 bg-gray-200">
      <van-cell-group class="cell-group">
        <van-cell center title="头像" is-link >
          <van-uploader
              v-model="user.avatarFiles"
              :max-count="1"
              :after-read="afterRead"
              preview-size="80px"
              class="uploader"
              ref="file"
          />
        </van-cell>

        <van-cell title="名字" :value="user.name" is-link />
        <van-cell title="拍一拍" :value="user.tap" is-link />
        <van-cell title="微信号" :value="user.description" is-link />
        <van-cell center title="二维码名片" is-link >
          <van-image :src="user.code" ></van-image>
        </van-cell>
        <van-cell title="更多信息" is-link />
      </van-cell-group>
      <van-cell title="来电铃声" is-link  />
      <van-cell title="微信豆" is-link  />
      <van-cell title="我的地址" is-link  />
    </div>

  </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Personal",
  data(){
    return{
      user: {
        name:'快乐小敢敢',
        description: "微信号:lxy18936023772",
        tap:'的豪宅不小心拍塌了',
        code: require('../assets/二维码.png'),
        avatar: '',
        avatarFiles: [
        ],
      },
      title:"个人信息",
    }
  },
  mounted() {
    // todo 1. 先将uesr对象存入store.js的state里
    // todo 2. 再获取state里面的数据
    // todo 3. 更新数据并存入state里
    this.user = this.getStoreUser ?? this.user

    console.log(this.user);
  },
  computed:{
    ...mapGetters(['getStoreUser'])
  },
  methods:{
    // todo 1. 先将uesr对象存入store.js的state里
    ...mapMutations(['storeUser']),
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file.content)
      console.log(this.user);
      // 将得到的url地址存入user对象种
      this.user.avatar = file.content
      this.storeUser(this.user);// 保存数据
      localStorage.user = JSON.stringify(this.user)// 本地存储
    },
    // 离开这个页面
    onClickLeft() {
      this.$router.back()
    },
  }
}
</script>

<style scoped>

</style>

<!--<script>-->

<!--export default {-->
<!--  name: "Personal",-->
<!--  data(){-->
<!--    return{-->
<!--      user: {-->
<!--        name:'快乐小敢敢',-->
<!--        description: "微信号:lxy18936023772",-->
<!--        tap:'的豪宅不小心拍塌了',-->
<!--        code: require('../assets/二维码.png'),-->
<!--        avatar: '',-->
<!--        avatarFiles: [-->
<!--        ],-->
<!--      },-->
<!--      title:"个人信息",-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.user = JSON.parse(localStorage.getItem('user'))-->
<!--  },-->
<!--  methods:{-->
<!--    afterRead(file) {-->
<!--      // 此时可以自行将文件上传至服务器-->
<!--      console.log(file.content)-->
<!--      this.user.avatar = file.content-->
<!--      localStorage.setItem("user",JSON.stringify(this.user))-->
<!--    },-->
<!--    onClickLeft() {-->
<!--      this.$router.back()-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->