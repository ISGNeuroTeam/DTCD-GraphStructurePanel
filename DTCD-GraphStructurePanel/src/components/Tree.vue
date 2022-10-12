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

    <div slot="summary" class="ExpanderSummary">
      <span
        v-if="icon"
        slot="icon"
        class="FontIcon size_lg MainIcon"
        :class="`name_${icon}`"
      />
      <span
        class="Title"
        v-text="node.id"
      />
      <span
        slot="icon-arrow"
        title="Перейти к графу"
        class="FontIcon name_chevronDuoDown rotate_270 ShowIcon"
        @click.prevent="selectItem(node.id)"
      />
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
  data: ({ $root }) => ({
    eventSystem: $root.eventSystem,
  }),
  computed: {
    open() {
      return this.node.items.length <= 0 ? false : this.isExpanded;
    },

    arrowIcon() {
      if (this.node.items && this.node.items.length > 0) {
        return 'FontIcon name_caretDown rotate_270';
      } else {
        return 'FontIcon name_dot';
      }
    },
  },
  methods: {
    expand(event) {
      this.node.items.length <= 0 && event.preventDefault();
    },

    selectItem(id) {
      this.eventSystem.publishEvent('StructNodeClicked', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.PanelExpander {
  color: var(--text_main);
  font-weight: 600;
  display: block;
  padding: 4px 10px;

  &.type_nested {
    padding-left: 18px;
    padding-right: 0;
  }

  &:hover {
    background-color: var(--button_primary_12);

    > .ExpanderSummary {
      .Title {
        padding-right: 6px;
      }

      .ShowIcon {
        display: block;
      }
    }
  }

  .ExpanderSummary {
    display: flex;
    align-items: center;
    font-size: 15px;
    overflow: hidden;

    .Title {
      flex-grow: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .MainIcon {
    margin-left: -8px;
  }

  .ShowIcon {
    display: none;
    font-size: 18px;

    &:hover {
      color: var(--button_primary);
      background-color: var(--button_primary_24);
    }
  }

  .FontIcon {
    color: var(--text_secondary);

    &.name_caretDown,
    &.name_dot {
      color: var(--text_main);
    }

    &.name_dot {
      margin-top: -2px;
    }
  }
}
</style>
