import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { webhooks_project_column } from "./webhooks_project_column";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title project_column edited event
 */
export type webhook_minus_project_minus_column_minus_edited = {
  action: "edited";
  changes: {
    name?: {
      from: string;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  project_column: webhooks_project_column;
  repository?: repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
