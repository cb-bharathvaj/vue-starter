<template>
  <div>
    <b-card >
      <ul class="list-unstyled" v-for="member in members" :key="member.id">
        <b-media tag="li" class="border-bottom  border-secondary">
          <template #aside>
            <b-avatar
              width="64"
              alt="placeholder"
              src="https://picsum.photos/125/125/?image=58"
            ></b-avatar>

            <div class="member-info">

          <h5 class="mt-0 mb-1">{{member.name }}</h5>
          <p class="mb-0">
            {{ member.email }}
          </p>
          <p class="mb-0">
            {{ member.role }}
          </p>
          </div>

          </template>

        </b-media>
      </ul>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'TeamMemberList',
  props: {
    members: {
      type: Array,
      default: () => [],
    },
  },
})
export default class TeamMemberList extends Vue {}
</script>

<style scoped lang="scss">
.member-info{
margin-left: 12px;
text-align: left;
}
</style>
