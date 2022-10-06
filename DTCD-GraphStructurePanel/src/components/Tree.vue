<template>
  <base-expander
    v-show="node.show"
    :open="open"
    class="PanelExpander"
    :class="{ type_nested: isNested }"
    theme="theme_iconLeft,rotation_type2"
    @click="expand"
  >
    <span slot="icon-arrow" :class="arrowIcon"/>

    <div slot="summary">
      <span
        v-if="icon"
        slot="icon"
        class="FontIcon size_lg MainIcon"
        :class="`name_${icon}`"
      />
      {{ node.id }}
      <!-- <span
        slot="icon-arrow"
        class="FontIcon name_hide size_lg ShowIcon"
      /> -->
    </div>

    <template v-if="node.items && node.items.length > 0">
      <Tree
        v-for="item in node.items"
        :key="item.id"
        :node="item"
        :is-nested="true"
        :is-expanded="isExpanded"
      />
    </template>
  </base-expander>
</template>

<script>
export default {
  name: 'Tree',
  props: {
    node: { type: Object },
    isNested: { type: Boolean },
    isExpanded: { type: Boolean },
    icon: { type: String, default: '' },
  },
  data: () => ({
  }),
  computed: {
    open() {
      return this.node.items.length <= 0 ? false : this.isExpanded;
    },

    arrowIcon() {
      if (this.node.items && this.node.items.length > 0) {
        return 'FontIcon name_caretDown rotate_270 size_lg'
      } else {
        return 'FontIcon name_dot size_md'
      }
    },
  },
  methods: {
    expand(event) {
      this.node.items.length <= 0 && event.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
.PanelExpander {
  color: var(--text_main);
  font-weight: 600;
  display: block;
  padding: 0 10px;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &.type_nested {
    padding-left: 21px;
  }

  & > * {
    display: flex;
    align-items: center;
    column-gap: 4px;
  }

  &:hover {
    background-color: var(--button_primary_12);
    .ShowIcon {
      visibility: visible;
    }
  }

  .MainIcon {
    margin-left: -8px;
  }

  .ShowIcon {
    visibility: hidden;
  }

  .FontIcon {
    color: var(--text_secondary);

    &.name_caretDown, 
    &.name_dot {
      color: var(--text_main);
    }

    &.name_dot {
      margin-top: -3px;
    }

    &.name_hide {
      color: var(--accent);
    }
  }
}
</style>