<template>
  <div>
    <Head :title="typestr" />
    <ul>
      <li v-for="item in list" :key="item.song_id">
        <router-link :to='{name:"Play",params:{id:item.song_id}}'>
          <div>
            <img :src="item.pic_big" alt />
          </div>
          <div>
            <p>{{item.title}}</p>
            <p>{{item.author}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getList } from "../../api/index";
import Head from "../../components/CommonHead";
export default {
  props: ["type"],
  data() {
    return {
      list: [],
    };
  },
  computed: {
    typestr() {
      let obj = {
        1: "新歌榜列表",
        2: "热歌榜列表",
        11: "摇滚榜列表",
      };
      return obj[this.type];
    },
  },
  mounted() {
    getList({ type: this.type, size: 20, offset: 0 }).then((data) => {
      this.list = data.song_list;
    });
  },
  components: {
    Head,
  },
};
</script>

<style scoped>
</style>