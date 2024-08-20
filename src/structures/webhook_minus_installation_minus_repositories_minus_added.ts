import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { installation } from "./installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_repositories_added } from "./webhooks_repositories_added";
import { webhooks_repository_selection } from "./webhooks_repository_selection";
import { webhooks_user } from "./webhooks_user";

/**
 * @title installation_repositories added event
 */
export type webhook_minus_installation_minus_repositories_minus_added = {
  action: "added";
  enterprise?: enterprise_minus_webhooks;
  installation: installation;
  organization?: organization_minus_simple_minus_webhooks;
  repositories_added: webhooks_repositories_added;
  /**
   * An array of repository objects, which were removed from the installation.
   */
  repositories_removed: {
    full_name?: string;
    /**
     * Unique identifier of the repository
     */
    id?: number & tags.Type<"int32">;
    /**
     * The name of the repository.
     */
    name?: string;
    node_id?: string;
    /**
     * Whether the repository is private or public.
     */
    private?: boolean;
  }[];
  repository?: repository_minus_webhooks;
  repository_selection: webhooks_repository_selection;
  requester: webhooks_user;
  sender: simple_minus_user_minus_webhooks;
};
