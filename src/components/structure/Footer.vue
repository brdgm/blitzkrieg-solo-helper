<template>
  <div class="footer bg-dark fixed-bottom">
    <div class="links">
      <a href="#" data-bs-toggle="modal" data-bs-target="#creditsModal">{{t('footer.credits')}}</a>
      <span class="version">v{{buildNumber}}</span>
    </div>
    <div>
      <a class="zoom-icon" @click.prevent="zoomIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
          <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
      </a>
      <a class="zoom-icon" @click.prevent="zoomReset">
        {{zoomPercent}}
      </a>
      <a class="zoom-icon" @click.prevent="zoomOut">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-out" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
          <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </a>
    </div>
    <div class="buttons"></div>
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
  emits: {
    zoomFontSize(payload: { baseFontSize: number }) {
      return payload.baseFontSize > 0;
    }
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      buildNumber: process.env.VUE_APP_BUILD_NUMBER || '',
      appTitle: process.env.VUE_APP_TITLE,
      baseFontSize: 1
    }
  },
  computed: {
    zoomPercent() : string {
      return Math.floor(this.baseFontSize * 100) + '%'
    }
  },
  methods: {
    zoomIn() {
      if (this.baseFontSize < 3) {
        this.baseFontSize += 0.1
      }
      this.$emit('zoomFontSize', { baseFontSize: this.baseFontSize })
    },
    zoomOut() {
      if (this.baseFontSize > 0.51) {
        this.baseFontSize -= 0.1
      }
      this.$emit('zoomFontSize', { baseFontSize: this.baseFontSize })
    },
    zoomReset() {
      this.baseFontSize = 1
      this.$emit('zoomFontSize', { baseFontSize: this.baseFontSize })
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

  .links {
    display: inline;
    flex-grow: 1;
    a:link, a:hover, a:visited {
      text-decoration: none;
      color: #fff;
    }
    .version {
      margin-left: 0.5rem;
      font-size: smaller;
      color: #ccc;
    }
  }
  .buttons {
    display: inline;
    flex-grow: 1;
    width: 10rem;
  }
}
.modal dt {
  font-weight: bold;
}
.zoom-icon {
  display: inline;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  vertical-align: top;
  cursor: pointer;
}
a.zoom-icon, a.zoom-icon:hover, a.zoom-icon:visited {
  color: #fff;
  text-decoration: none;
}
</style>
