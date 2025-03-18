import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DisputesRoute extends Route {
  @service store;

  async model() {
    const response = await fetch('/data/disputes.json');
    const data = await response.json();
    return data;
  }
}