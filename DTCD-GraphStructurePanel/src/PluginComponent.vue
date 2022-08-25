<template>
  <div class="GraphStructurePanel">
    <div class="PanelHeader">
      <div class="ButtonsGroup">
        <div class="ButtonsLeft">
          <button class="ButtonIcon" @click="isAllExpanded = !isAllExpanded">
            <span
              class="FontIcon name_longDown"
              :class="{ rotate_180: isAllExpanded }"
            ></span>
          </button>
          <!-- <button class="ButtonIcon">
            <span class="FontIcon name_hide"></span>
          </button> -->
        </div>
        <!-- <button class="ButtonIcon">
          <span class="FontIcon name_chevronBigDown rotate_90"></span>
        </button> -->
      </div>
      <base-input
        placeholder="Поиск"
        theme="withLeftIcon"
        type="search"
        @input="search = $event.target.value"
      >
        <span
          slot="icon-left"
          class="FontIcon name_searchSmall size_lg"
        >
        </span>
      </base-input>
    </div>
    <div class="ExpanderGroup">
      <div v-if="!isEmptyList" class="EmptySearch">Нет элементов</div>
      <Tree
        v-for="node in nodes"
        :key="node.id"
        :node="node"
        :is-expanded="isAllExpanded"
      />
    </div>
  </div>
</template>

<script>
import Tree from './components/Tree.vue';

export default {
  name: 'PluginComponent',
  components: { Tree },
  data: () => ({
    struct: [],
    search: '',
    isAllExpanded: false,
  }),
  computed: {
    nodes() {
      const nodeMap = {};

      const rootNodes = this.struct.filter(str => {
        const { id, node, successors } = str;
        nodeMap[id] = { node, successors };
        return str.predecessors.length <= 0;
      });

      const generateItems = nodeID => {
        const { successors } = nodeMap[nodeID];
        return successors.map(suc => {
          const id = suc.tag.primitiveID;
          const items = generateItems(id);
          let show = true;

          if (this.search.length > 0) {
            show = this.toSearchSubstr(id);
          }

          if (items.length > 0 && items.some(i => i.show === true)) {
            show = true;
          }

          return { id, show, items };
        });
      };

      const result = rootNodes.map(({ id }) => {
        const items = generateItems(id);
        let show = true;

        if (this.search.length > 0) {
          show = this.toSearchSubstr(id);
        }

        if (items.length > 0 && items.some(i => i.show === true)) {
          show = true;
        }

        return { id, show, items };
      });

      return result;
    },

    isEmptyList() {
      return this.nodes.some(n => n.show === true);
    },
  },
  methods: {
    setStruct(struct) {
      this.struct = struct;
    },

    toSearchSubstr(str) {
      const substr = str.toLowerCase();
      const searchLower = this.search.toLowerCase();
      return substr.includes(searchLower);
    },
  },
};
</script>

<style lang="scss" scoped>
.GraphStructurePanel {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  width: 100%;
  background-color: var(--background_main);

  &,
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .PanelHeader {
    padding: 10px;
  }

  .ButtonsGroup {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
  }

  .ButtonsLeft {
    display: flex;
    column-gap: 8px;
  }

  .ButtonIcon {
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 20px;
    height: 20px;
    padding: 0;

    .FontIcon {
      font-size: 20px;
    }
  }

  .FontIcon {
    color: var(--text_secondary);
  }

  .ExpanderGroup {
    padding: 0px;
    padding-top: 0;
    overflow: auto;

    .EmptySearch {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: var(--text_secondary);
    }
  }
}
</style>
