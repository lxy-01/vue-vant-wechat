<template>
  <div class=" h-full bg-white">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad">
        <Navbar :title="title"></Navbar>
        <van-swipe-cell v-for="m in messageLists" :before-close="beforeClose">
          <van-row class="flex flex-nowrap p-2 space-x-4">
            <van-col>
              <van-badge :content="5">
                <van-image
                    width="50"
                    height="50"
                    fit="cover"
                    radius="8"
                    :src="m.avatar"
                />
              </van-badge>
            </van-col>
            <van-col>
              <div class="flex flex-col">
                <span class="font-medium">{{m.name}}</span>
                <span class="line-clamp-1 text-gray-400">{{m.text}}</span>
              </div>
            </van-col>
          </van-row>
          <template #right>
            <div class="h-full">
              <van-button square text="删除" type="danger" class="delete-button" />
            </div>
          </template>
        </van-swipe-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import {Dialog} from "vant";
  export default {
    name:'message',
    components: {Navbar},
    data() {
      return {
        title:'微信',
        loading: false, // 加载状态
        finished: false,  // 加载完成
        refreshing: false, // 是否处于加载中状态
        messageLists:[
          {name:'小刘',text:'你今天学习了吗？',avatar:'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F0728%2F63292393j00rfpooo0026d200n000n0g007t007t.jpg&thumbnail=660x2147483647&quality=80&type=jpg'},
          {name:'1214ZR',text:'我去签字了',avatar:'http://inews.gtimg.com/newsapp_bt/0/14776757879/641'},
          {name:'刘心怡',text:'我今天学习了vue',avatar:'https://img2.woyaogexing.com/2021/10/17/9c15ae841c164c76b3d6db5a6ed3dbe2!400x400.jpg'},
          {name:'邹茹',text:'我今天要写好多材料',avatar:'https://img2.woyaogexing.com/2021/10/17/fdd0bd9e244e47398d2890171ac6d84c!400x400.jpg'},
          {name:'lxy',text:'Vue好难',avatar:'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F0728%2F6ae719a7j00rfpoor001yd200u000u0g007t007t.jpg&thumbnail=660x2147483647&quality=80&type=jpg'},
          {name:'小邹',text:'怎么又要开会啊',avatar:'https://ts3.cn.mm.bing.net/th?id=OIP-C.lF45iebtacThlknPbzXGVQAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2'},
          {name:'修勾',text:'你怎么又去街道了',avatar:'https://img2.woyaogexing.com/2021/08/24/b0b610a6ff9244cfaa3ae3211cb705dd!400x400.jpeg'},
        ]
      };
    },
    methods: {
      onLoad() {
        setTimeout(() => {
          if (this.refreshing) {
            this.refreshing = false;
          }
          this.loading = false;
          this.finished = true;
        }, 1000);
      },
      onRefresh() {
        // 清空列表数据
        this.finished = false;
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
      },
      // position 为关闭时点击的位置
      // instance 为对应的 SwipeCell 实例
      beforeClose({ position, instance }) {
        switch (position) {
          case 'cell':
          case 'outside':
            instance.close();
            break;
          case 'right':
            Dialog.confirm({
              message: '确定删除吗？',
            }).then(() => {
              instance.close();
            });
            break;
        }
      },
    },
  }
</script>

<style scoped>

</style>

