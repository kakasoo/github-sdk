import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_user } from "./webhooks_user";

/**
 * @title member added event
 */
export type webhook_minus_member_minus_added = {
  action: "added";
  changes?: {
    /**
     * This field is included for legacy purposes; use the `role_name` field instead. The `maintain`
     * role is mapped to `write` and the `triage` role is mapped to `read`. To determine the role
     * assigned to the collaborator, use the `role_name` field instead, which will provide the full
     * role name, including custom roles.
     */
    permission?: {
      to: "write" | "admin" | "read";
    };
    /**
     * The role assigned to the collaborator.
     */
    role_name?: {
      to: string;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  member: webhooks_user;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
