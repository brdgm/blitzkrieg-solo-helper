<template>
  <div class="footer bg-dark fixed-bottom">
    <div class="links">
      <a href="#" data-bs-toggle="modal" data-bs-target="#creditsModal">{{t('footer.credits')}}</a>
    </div>
    <div class="version">{{buildNumber}}</div>
  </div>

  <div class="modal" id="creditsModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{t('footer.credits')}}</h5>
          <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h4><a href="https://boardgamegeek.com/boardgame/258210/blitzkrieg-world-war-two-20-minutes" target="_blank">{{t('gameTitle')}}</a></h4>
          <dl>
            <dt>Game design</dt>
            <dd>Paolo Mori</dd>
            <dt>Solo mode design</dt>
            <dd>Dávid Turczi</dd>
            <dt>Development and testing</dt>
            <dd>Nick Shaw</dd>
            <dt>Graphic design</dt>
            <dd>Nick Avallone</dd>
            <dt>Publisher</dt>
            <dd><a href="https://www.pscgames.co.uk/" target="_blank">PSC Games</a></dd>
          </dl>
          <h4 class="border-top pt-3">{{appTitle}}</h4>
          <dl>
            <dt>Application Development</dt>
            <dd>Stefan Seifert</dd>
            <dt>Version</dt>
            <dd>{{buildNumber}}</dd>
            <dt>Source Code (Apache-2.0 License)</dt>
            <dd><a href="https://github.com/brdgm/blitzkrieg-solo-helper" target="_blank">https://github.com/brdgm/blitzkrieg-solo-helper</a></dd>
          </dl>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">{{t('action.close')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Footer',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      buildNumber: process.env.VUE_APP_BUILD_NUMBER || '',
      appTitle: process.env.VUE_APP_TITLE
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  height: 2rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #fff;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  .links {
    display: inline;
    flex-grow: 1;
    a:link, a:hover, a:visited {
      text-decoration: none;
      color: #fff;
    }
  }
  .version {
    display: inline;
    flex-grow: 1;
    text-align: right;
  }
}
.modal dt {
  font-weight: bold;
}
</style>
