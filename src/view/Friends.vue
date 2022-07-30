<template>
  <div class="h-full" >
    <Navbar :title="title"></Navbar>
    <van-index-bar class="coverCss h-full bg-white" style="margin-bottom: 50px;">
      <FriendItems
          v-for="(item,index) in systemItem"
          :label="item.name"
          :has-divide="index != systemItem.length-1"
          :src="item.src">
      </FriendItems>

      <van-index-anchor index="A" class="bg-gray-200"/>
      <div>
        <FriendItems
            v-for="(item,index) in contact1"
            :label="item.name"
            :has-divide="index != systemItem.length-1"
            :src="item.src"></FriendItems>
      </div>

      <van-index-anchor index="B" class="bg-gray-200"/>
      <div>
        <FriendItems
            v-for="(item,index) in contact2"
            :label="item.name"
            :has-divide="index != systemItem.length-1"
            :src="item.src"></FriendItems>
      </div>

      <van-index-anchor index="C" class="bg-gray-200"/>
      <div>
        <FriendItems
            v-for="(item,index) in contact3"
            :label="item.name"
            :has-divide="index != systemItem.length-1"
            :src="item.src"></FriendItems>
      </div>

      <van-index-anchor index="D" class="bg-gray-200"/>
      <div>
        <FriendItems
            v-for="(item,index) in contact4"
            :label="item.name"
            :has-divide="index != systemItem.length-1"
            :src="item.src"></FriendItems>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import FriendItems from "@/components/FriendItems";
import Navbar from "@/components/Navbar";
export default {
  name: "friends",
  components: {Navbar, FriendItems},
  data(){
    return{
      title:"通讯录",
      systemItem:[
        {
          name:'新的朋友',
          src:require('../assets/新朋友.gif')
        },
        {
          name:'仅聊天',
          src:require('../assets/仅聊天.gif')
        },
        {
          name:'群聊',
          src:require('../assets/群聊.gif')
        },
        {
          name:'标签',
          src:require('../assets/标签.gif')
        },
        {
          name:'公众号',
          src:require('../assets/公众号.gif')
        }
      ],
      contact1:[
        {
          name:'安全',
          src:require('../assets/img1.jpg')
        },
        {
          name:'安静',
          src:require('../assets/img2.jpg')
        },
        {
          name:'艾青',
          src:require('../assets/img3.jpg')
        },
      ],
      contact2:[
        {
          name:'宝马',
          src:require('../assets/img4.jpg')
        },
        {
          name:'奔驰',
          src:require('../assets/img5.jpg')
        },
        {
          name:'别克',
          src:require('../assets/img6.jpg')
        },
      ],
      contact3:[
        {
          name:'陈述',
          src:require('../assets/img7.jpg')
        },
        {
          name:'成功',
          src:require('../assets/img8.jpg')
        },
        {
          name:'陈翔',
          src:require('../assets/img9.jpg')
        },
      ],
      contact4:[
        {
          name:'李四',
          src:require('../assets/img1.jpg')
        },
        {
          name:'刘心怡',
          src:require('../assets/img8.jpg')
        },
        {
          name:'流口水',
          src:require('../assets/img6.jpg')
        },
      ]
    }
  }
}
</script>

<style scoped>
>>>.coverCss{
  height: 100%!important;
}
</style>