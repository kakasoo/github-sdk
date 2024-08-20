import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title repository_dispatch event
 */
export type webhook_minus_repository_minus_dispatch_minus_sample = {
  /**
   * The `event_type` that was specified in the `POST /repos/{owner}/{repo}/dispatches` request body.
   */
  action: string;
  branch: string;
  /**
   * The `client_payload` that was specified in the `POST /repos/{owner}/{repo}/dispatches` request body.
   */
  client_payload: {} | null;
  enterprise?: enterprise_minus_webhooks;
  installation: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
