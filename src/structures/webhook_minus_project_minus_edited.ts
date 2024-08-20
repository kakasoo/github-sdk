import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { webhooks_project } from "./webhooks_project";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title project edited event
 */
export type webhook_minus_project_minus_edited = {
  action: "edited";
  /**
   * The changes to the project if the action was `edited`.
   */
  changes?: {
    body?: {
      /**
       * The previous version of the body if the action was `edited`.
       */
      from: string;
    };
    name?: {
      /**
       * The changes to the project if the action was `edited`.
       */
      from: string;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  project: webhooks_project;
  repository?: repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
