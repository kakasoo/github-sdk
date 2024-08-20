import { tags } from "typia";

/**
 * The branch protection rule. Includes a `name` and all the [branch protection settings](https://docs.github.com/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-settings) applied to branches that match the name. Binary settings are boolean. Multi-level configurations are one of `off`, `non_admins`, or `everyone`. Actor and build lists are arrays of strings.
 *
 * @title branch protection rule
 */
export type webhooks_rule = {
  admin_enforced: boolean;
  allow_deletions_enforcement_level: "off" | "non_admins" | "everyone";
  allow_force_pushes_enforcement_level: "off" | "non_admins" | "everyone";
  authorized_actor_names: string[];
  authorized_actors_only: boolean;
  authorized_dismissal_actors_only: boolean;
  create_protected?: boolean;
  created_at: string & tags.Format<"date-time">;
  dismiss_stale_reviews_on_push: boolean;
  id: number & tags.Type<"int32">;
  ignore_approvals_from_contributors: boolean;
  linear_history_requirement_enforcement_level:
    | "off"
    | "non_admins"
    | "everyone";
  /**
   * The enforcement level of the branch lock setting. `off` means the branch is not locked, `non_admins` means the branch is read-only for non_admins, and `everyone` means the branch is read-only for everyone.
   */
  lock_branch_enforcement_level: "off" | "non_admins" | "everyone";
  /**
   * Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow users to pull changes from upstream when the branch is locked. This setting is only applicable for forks.
   */
  lock_allows_fork_sync?: boolean;
  merge_queue_enforcement_level: "off" | "non_admins" | "everyone";
  name: string;
  pull_request_reviews_enforcement_level: "off" | "non_admins" | "everyone";
  repository_id: number & tags.Type<"int32">;
  require_code_owner_review: boolean;
  /**
   * Whether the most recent push must be approved by someone other than the person who pushed it
   */
  require_last_push_approval?: boolean;
  required_approving_review_count: number & tags.Type<"int32">;
  required_conversation_resolution_level: "off" | "non_admins" | "everyone";
  required_deployments_enforcement_level: "off" | "non_admins" | "everyone";
  required_status_checks: string[];
  required_status_checks_enforcement_level: "off" | "non_admins" | "everyone";
  signature_requirement_enforcement_level: "off" | "non_admins" | "everyone";
  strict_required_status_checks_policy: boolean;
  updated_at: string & tags.Format<"date-time">;
};
