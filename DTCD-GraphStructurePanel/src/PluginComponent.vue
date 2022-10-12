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
      const nodes = this.struct.map(item => {
        const { id, successors } = item;
        let show = this.toSearchSubstr(id);

        const items = successors
          .map(successor => {
            const id = successor.tag.primitiveID;
            const show = this.search.length > 0 ? this.toSearchSubstr(id) : true;
            return { id, show, items: [] };
          })
          .filter(s => s.show === true)
          .sort(this.sortById);

        if (items.length > 0 && items.some(i => i.show === true)) {
          show = true;
        }

        return { id, show, items };
      });

      return nodes.sort(this.sortById);
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

    sortById(a, b) {
      const idA = a.id.toUpperCase();
      const idB = b.id.toUpperCase();
      if (idA < idB) return -1;
      return idA > idB ? 1 : 0;
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
