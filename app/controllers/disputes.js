import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DisputesController extends Controller {
  @tracked selectedDisputeId = null;

  get selectedDispute() {
    return this.model.disputes.find(d => d.id === this.selectedDisputeId);
  }

  get totalDisputes() {
    return this.model.disputes.length;
  }

  @action
  selectDispute(dispute) {
    this.selectedDisputeId = dispute.id;
  }

  @action
  closeDetailBlade() {
    this.selectedDisputeId = null;
  }
}