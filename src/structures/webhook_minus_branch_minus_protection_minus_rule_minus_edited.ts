import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { webhooks_rule } from "./webhooks_rule";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title branch protection rule edited event
 */
export type webhook_minus_branch_minus_protection_minus_rule_minus_edited = {
  action: "edited";
  /**
   * If the action was `edited`, the changes to the rule.
   */
  changes?: {
    admin_enforced?: {
      from: boolean | null;
    };
    authorized_actor_names?: {
      from: string[];
    };
    authorized_actors_only?: {
      from: boolean | null;
    };
    authorized_dismissal_actors_only?: {
      from: boolean | null;
    };
    linear_history_requirement_enforcement_level?: {
      from: "off" | "non_admins" | "everyone";
    };
    lock_branch_enforcement_level?: {
      from: "off" | "non_admins" | "everyone";
    };
    lock_allows_fork_sync?: {
      from: boolean | null;
    };
    pull_request_reviews_enforcement_level?: {
      from: "off" | "non_admins" | "everyone";
    };
    require_last_push_approval?: {
      from: boolean | null;
    };
    required_status_checks?: {
      from: string[];
    };
    required_status_checks_enforcement_level?: {
      from: "off" | "non_admins" | "everyone";
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  rule: webhooks_rule;
  sender: simple_minus_user_minus_webhooks;
};
