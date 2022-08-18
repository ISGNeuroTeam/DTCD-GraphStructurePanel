<template>
  <base-expander
    class="PanelExpander"
    :class="{ type_nested: isNested }"
    theme="theme_iconLeft,rotation_type2"
  >
    <span slot="icon-arrow" :class="arrowIcon"/>

    <div slot="summary">
      <!-- <span slot="icon" class="FontIcon name_gridBigRound"/> -->
      {{ node.id }}
      <!-- <span slot="icon-arrow" class="FontIcon name_hide size_lg"/> -->
    </div>

    <template v-if="node.items && node.items.length > 0">
      <Tree
        v-for="(item, index) in node.items"
        :key="`item-${index}`"
        :node="item"
        :is-nested="true"
      />
    </template>
  </base-expander>
</template>

<script>
export default {
  name: 'Tree',
  props: {
    node: { type: Object },
    isNested: false,
  },
  data: () => ({
    arrowIcon: 'FontIcon name_caretDown rotate_270 size_lg'
  }),
  computed: {

  },
};
</script>

<style lang="scss" scoped>
.PanelExpander {
  color: var(--text_main);
  background-color: var(--background_main);
  font-weight: 600;
  display: block;
  margin-bottom: 4px;

  &.type_nested {
    padding-left: 21px;
  }

  &.font_normal {
    font-weight: 400;
  }

  &:last-child {
    margin-bottom: 0;
  }

  & > * {
    display: flex;
    align-items: center;
    column-gap: 4px;
  }
}

.FontIcon {
  color: var(--text_secondary);

  &.name_caretDown {
    color: var(--text_main);
  }

  &.name_gridBigRound {
    color: var(--purple);
    margin-left: -6px;
    font-size: 20px;
  }

  &.name_hide {
    color: var(--accent);
  }
}
</style>
