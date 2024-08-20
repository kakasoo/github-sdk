import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_deploy_pusher_type } from "./webhooks_deploy_pusher_type";
import { webhooks_ref_0 } from "./webhooks_ref_0";

/**
 * @title create event
 */
export type webhook_minus_create = {
  /**
   * The repository's current description.
   */
  description: string | null;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  /**
   * The name of the repository's default branch (usually `main`).
   */
  master_branch: string;
  organization?: organization_minus_simple_minus_webhooks;
  pusher_type: webhooks_deploy_pusher_type;
  ref: webhooks_ref_0;
  /**
   * The type of Git ref object created in the repository.
   */
  ref_type: "tag" | "branch";
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
