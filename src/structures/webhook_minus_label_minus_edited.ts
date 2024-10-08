import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_label } from "./webhooks_label";

/**
 * @title label edited event
 */
export type webhook_minus_label_minus_edited = {
  action: "edited";
  /**
   * The changes to the label if the action was `edited`.
   */
  changes?: {
    color?: {
      /**
       * The previous version of the color if the action was `edited`.
       */
      from: string;
    };
    description?: {
      /**
       * The previous version of the description if the action was `edited`.
       */
      from: string;
    };
    name?: {
      /**
       * The previous version of the name if the action was `edited`.
       */
      from: string;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  label: webhooks_label;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
