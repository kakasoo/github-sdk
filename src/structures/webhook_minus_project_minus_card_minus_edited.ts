import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { webhooks_project_card } from "./webhooks_project_card";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title project_card edited event
 */
export type webhook_minus_project_minus_card_minus_edited = {
  action: "edited";
  changes: {
    note: {
      from: string | null;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  project_card: webhooks_project_card;
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
