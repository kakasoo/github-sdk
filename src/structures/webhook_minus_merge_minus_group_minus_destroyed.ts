import { simple_minus_installation } from "./simple_minus_installation";
import { merge_minus_group } from "./merge_minus_group";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

export type webhook_minus_merge_minus_group_minus_destroyed = {
  action: "destroyed";
  /**
   * Explains why the merge group is being destroyed. The group could have been merged, removed from the queue (dequeued), or invalidated by an earlier queue entry being dequeued (invalidated).
   */
  reason?: "merged" | "invalidated" | "dequeued";
  installation?: simple_minus_installation;
  merge_group: merge_minus_group;
  organization?: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
