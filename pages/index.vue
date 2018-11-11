<template>
  <div>
    aaa
    {{user}}
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'
  import { Action, Getter } from 'vuex-class'
  import user from '~/types/user'
  const namespace: string = 'user'
  import Logo from '~/components/Logo.vue'

  @Component({
    components: {
      Logo,
    },
  })

  export default class extends Vue {
    @Getter('getUser', { namespace: namespace })
    private user: user

    // created(){
    //   console.log('ddddddddd')
    // }

    // @Action('fetchUser', { namespace: namespace })
    // private fetchUser: any
  }
</script>
