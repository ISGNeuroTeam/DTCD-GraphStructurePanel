import pluginMeta from './Plugin.Meta';
import PluginComponent from './PluginComponent.vue';

import { PanelPlugin, LogSystemAdapter } from './../../DTCD-SDK';

export class VisualizationText extends PanelPlugin {

  #logSystem;

  static getRegistrationMeta() {
    return pluginMeta;
  }

  constructor(guid, selector) {
    super();

    this.#logSystem = new LogSystemAdapter('0.5.0', guid, pluginMeta.name);

    const { default: VueJS } = this.getDependence('Vue');

    const view = new VueJS({
      data: () => ({}),
      render: h => h(PluginComponent),
    }).$mount(selector);
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
