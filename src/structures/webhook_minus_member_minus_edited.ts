import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_user } from "./webhooks_user";

/**
 * @title member edited event
 */
export type webhook_minus_member_minus_edited = {
  action: "edited";
  /**
   * The changes to the collaborator permissions
   */
  changes: {
    old_permission?: {
      /**
       * The previous permissions of the collaborator if the action was edited.
       */
      from: string;
    };
    permission?: {
      from?: string | null;
      to?: string | null;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  member: webhooks_user;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
