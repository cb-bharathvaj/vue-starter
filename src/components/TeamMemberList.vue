<template>
  <div>
    <b-card>
      <ul class="list-unstyled" v-for="member in members" :key="member.id">
        <b-media tag="li">
          <template #aside>
            <b-img
              width="64"
              alt="placeholder"
            ></b-img>
          </template>
          <h5 class="mt-0 mb-1">{{member.name }}</h5>
          <p class="mb-0">
            {{ member.email }}
          </p>
          <p class="mb-0">
            {{ member.role }}
          </p>
        </b-media>
      </ul>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "TeamMemberList",
  props: {
    members: {
      type: Array,
      default: () => []
    }
  }
})
export default class TeamMemberList extends Vue {}
</script>

<style scoped lang="scss">
</style>
