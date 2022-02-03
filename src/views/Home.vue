<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <b-container class="member-container">
      <TeamMemberList :members="members"  class="justify-content-md-center"/>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import TeamMemberList from '@/components/TeamMemberList.vue';

@Component({
  components: {
    HelloWorld,
    TeamMemberList,
  },
})
export default class Home extends Vue {
  get members() {
    return this.$store.getters.listMembers;
  }
}
</script>

<style>
.member-container{
  width: 600px;
  margin: 0 auto;
}
</style>
