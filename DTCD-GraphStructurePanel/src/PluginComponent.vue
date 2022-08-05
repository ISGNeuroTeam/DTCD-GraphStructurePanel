<template>
  <div class="GraphStructurePanel">
    <div class="ButtonsGroup">
      <div class="ButtonsLeft">
        <button class="ButtonIcon">
          <span class="FontIcon name_longDown rotate_180"></span>
        </button>

        <button class="ButtonIcon">
          <span class="FontIcon name_hide"></span>
        </button>
      </div>
        
      <button class="ButtonIcon">
        <span class="FontIcon name_chevronBigDown rotate_90"></span>
      </button>

    </div>
      <base-input 
        placeholder="Поиск"
        theme="withLeftIcon"
        class="SearchField" 
      >
        <span 
          slot="icon-left" 
          class="FontIcon name_searchSmall size_lg"
        >
        </span>
      </base-input>

      <div class="ExpanderGroup">
        <base-expander 
          class="PanelExpander" 
          theme="theme_iconLeft,rotation_type2" 
        >
          <span 
            slot="icon-arrow" 
            class="FontIcon name_caretDown rotate_270 size_lg"
          ></span>
           
          <div slot="summary">
            <span 
              slot="icon" 
              class="FontIcon name_gridBigRound"
            >
          </span>ТЭЦ 1</div>
          
          <base-expander 
            class="PanelExpander type_nested" 
            theme="theme_iconLeft,rotation_type2"
          >
            <span 
              slot="icon-arrow" 
              class="FontIcon name_caretDown rotate_270 size_lg"
            >
            </span>
            <div slot="summary">Блок 1
              <span 
                slot="icon-arrow" 
                class="FontIcon name_hide size_lg"
              ></span></div>

            <base-expander 
              class="PanelExpander type_nested font_normal" 
              theme="theme_iconLeft,rotation_type2"
            >
              <span 
                slot="icon-arrow" 
                class="FontIcon name_caretDown rotate_270 size_lg"
              >
              </span>
              <div slot="summary">Генератоная установка</div>
            </base-expander>
            
            <base-expander  
              class="PanelExpander type_nested font_normal" 
              theme="theme_iconLeft,rotation_type2"
            >
              <span 
                slot="icon-arrow" 
                class="FontIcon name_caretDown rotate_270 size_lg"
              >
              </span>
              <div slot="summary">Трансформаторная установка</div>
            </base-expander>

            <base-expander 
              class="PanelExpander type_nested font_normal" 
              theme="theme_iconLeft,rotation_type2"
            >
              <span 
                slot="icon-arrow" 
                class="FontIcon name_caretDown rotate_270 size_lg"
              >
              </span>
              <div slot="summary">KE Котёл энергетический
                <span 
                slot="icon" 
                class="FontIcon name_show size_lg"
              ></span></div>
            </base-expander>
          </base-expander>

          <base-expander 
            class="PanelExpander type_nested" 
            theme="theme_iconLeft,rotation_type2"
          >
            <span 
              slot="icon-arrow" 
              class="FontIcon name_caretDown rotate_270 size_lg"
            >
            </span>
            <div slot="summary">Блок 2</div>
          </base-expander>

          <base-expander 
            class="PanelExpander type_nested" 
            theme="theme_iconLeft,rotation_type2"
          >
            <span 
              slot="icon-arrow" 
              class="FontIcon name_caretDown rotate_270 size_lg"
            >
            </span>
            <div slot="summary">Блок 3</div>
          </base-expander>
        </base-expander>

        <base-expander 
          class="PanelExpander" 
          theme="theme_iconLeft,rotation_type2" 
        >
          <span 
            slot="icon-arrow" 
            class="FontIcon name_caretDown rotate_270 size_lg"
          ></span>
           
          <div slot="summary">
            <span 
              slot="icon" 
              class="FontIcon name_gridBigRound"
            >
          </span>ТЭЦ 2</div>
          
          <base-expander 
            class="PanelExpander type_nested" 
            theme="theme_iconLeft,rotation_type2"
          >
            <span 
              slot="icon-arrow" 
              class="FontIcon name_caretDown rotate_270 size_lg"
            >
            </span>
            <div slot="summary">Блок 1</div>
          </base-expander>

          <base-expander 
            class="PanelExpander type_nested" 
            theme="theme_iconLeft,rotation_type2"
          >
            <span 
              slot="icon-arrow" 
              class="FontIcon name_caretDown rotate_270 size_lg"
            >
            </span>
            <div slot="summary">Блок 2
              <span 
                slot="icon-arrow" 
                class="FontIcon name_hide size_lg"
              ></span></div>
          </base-expander>

          <base-expander 
            class="PanelExpander type_nested" 
            theme="theme_iconLeft,rotation_type2"
          >
            <span 
              slot="icon-arrow" 
              class="FontIcon name_caretDown rotate_270 size_lg"
            >
            </span>
            <div slot="summary">Блок 3</div>
          </base-expander>
        </base-expander>

        <base-expander 
          class="PanelExpander" 
          theme="theme_iconLeft,rotation_type2" 
        >
          <span 
            slot="icon-arrow" 
            class="FontIcon name_caretDown rotate_270 size_lg"
          ></span>
           
          <div slot="summary">
            <span 
              slot="icon" 
              class="FontIcon name_gridBigRound"
            >
          </span>ТЭЦ 3</div>
        </base-expander>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PluginComponent',
  data: () => ({

  }),
  methods: {

  },
};
</script>

<style lang="scss" scoped>

.GraphStructurePanel {
  height: 100%;
  width: 100%;
  padding: 10px;
  background-color: var(--background_main);

  &,
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
    
  .ButtonsGroup {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

      &.name_hide {
        color: var(--text_secondary);
      }
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

  .SearchField {
    padding-top: 10px;
  }

  .ExpanderGroup {
    padding-top: 10px;
  }

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
}
</style>