import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_project_card } from "./webhooks_project_card";

/**
 * @title project_card converted event
 */
export type webhook_minus_project_minus_card_minus_converted = {
  action: "converted";
  changes: {
    note: {
      from: string;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  project_card: webhooks_project_card;
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
