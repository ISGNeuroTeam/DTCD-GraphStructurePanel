import pluginMeta from './Plugin.Meta';
import PluginComponent from './PluginComponent.vue';

import { PanelPlugin, LogSystemAdapter, EventSystemAdapter } from './../../DTCD-SDK';

export class VisualizationText extends PanelPlugin {

  #logSystem;
  #eventSystem;
  #component;

  static getRegistrationMeta() {
    return pluginMeta;
  }

  constructor(guid, selector) {
    super();

    const logSystem = new LogSystemAdapter('0.5.0', guid, pluginMeta.name);
    const eventSystem = new EventSystemAdapter('0.4.0', guid);

    this.#logSystem = logSystem;
    this.#eventSystem = eventSystem;

    this.#eventSystem.registerPluginInstance(this);

    const { default: VueJS } = this.getDependence('Vue');
    const data = { logSystem, eventSystem };

    const view = new VueJS({
      data: () => data,
      render: h => h(PluginComponent),
    }).$mount(selector);

    this.#component = view.$children[0];
  }

  setGraphStructure(struct) {
    this.#component.setStruct(struct);
  }

  setPluginConfig(config = {}) {

  }

  getPluginConfig() {
    return {};
  }

  setFormSettings(config) {
    return this.setPluginConfig(config);
  }

  getFormSettings() {
    return {};
  }

}
