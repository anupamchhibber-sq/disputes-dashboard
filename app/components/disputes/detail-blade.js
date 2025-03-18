import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DisputeDetailBlade extends Component {
  get isUrgent() {
    if (!this.args.dispute?.respondBy) return false;
    const dueDate = new Date(this.args.dispute.respondBy);
    const today = new Date();
    const daysUntilDue = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
    return daysUntilDue <= 3;
  }
}