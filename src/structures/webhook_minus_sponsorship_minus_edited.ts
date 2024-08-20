import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_sponsorship } from "./webhooks_sponsorship";

/**
 * @title sponsorship edited event
 */
export type webhook_minus_sponsorship_minus_edited = {
  action: "edited";
  changes: {
    privacy_level?: {
      /**
       * The `edited` event types include the details about the change when someone edits a sponsorship to change the privacy.
       */
      from: string;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  sponsorship: webhooks_sponsorship;
};
