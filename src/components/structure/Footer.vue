<template>
  <div class="footer bg-dark fixed-bottom">
    <div class="links">
      <a href="#" data-bs-toggle="modal" data-bs-target="#creditsModal">{{ t('footer.credits') }}</a>
    </div>
    <div class="version">v1.0</div>
  </div>

  <div class="modal" id="creditsModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Credits</h5>
          <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <dd>Game design</dd>
          <dl>Paolo Mori</dl>
          <dd>Solo mode design</dd>
          <dl>Dávid Turczi</dl>
          <dd>Development and testing</dd>
          <dl>Nick Shaw</dl>
          <dd>Graphic design</dd>
          <dl>Nick Avallone</dl>
          <dd>Solo Helper Application Development</dd>
          <dl>Stefan Seifert</dl>
          <dd>Version</dd>
          <dl>1.0 (2022)</dl>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
.modal dd {
  font-weight: bold;
}
</style>
