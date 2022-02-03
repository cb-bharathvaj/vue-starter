<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <b-container>
      <SampleTeamMemberList :members="members" />
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import SampleTeamMemberList from '@/components/TeamMemberList.vue';

@Component({
  components: {
    HelloWorld,
    SampleTeamMemberList,
  },
})
export default class Home extends Vue {

  get members() {
    return this.$store.getters.listMembers;
  }
}
</script>
