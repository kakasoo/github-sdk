import { tags } from "typia";

import { branch_minus_restriction_minus_policy } from "./branch_minus_restriction_minus_policy";
import { protected_minus_branch_minus_admin_minus_enforced } from "./protected_minus_branch_minus_admin_minus_enforced";
import { protected_minus_branch_minus_pull_minus_request_minus_review } from "./protected_minus_branch_minus_pull_minus_request_minus_review";
import { protected_minus_branch_minus_required_minus_status_minus_check } from "./protected_minus_branch_minus_required_minus_status_minus_check";

/**
 * Branch Protection
 *
 * @title Branch Protection
 */
export type branch_minus_protection = {
  url?: string;
  enabled?: boolean;
  required_status_checks?: protected_minus_branch_minus_required_minus_status_minus_check;
  enforce_admins?: protected_minus_branch_minus_admin_minus_enforced;
  required_pull_request_reviews?: protected_minus_branch_minus_pull_minus_request_minus_review;
  restrictions?: branch_minus_restriction_minus_policy;
  required_linear_history?: {
    enabled?: boolean;
  };
  allow_force_pushes?: {
    enabled?: boolean;
  };
  allow_deletions?: {
    enabled?: boolean;
  };
  block_creations?: {
    enabled?: boolean;
  };
  required_conversation_resolution?: {
    enabled?: boolean;
  };
  name?: string &
    tags.JsonSchemaPlugin<{
      example: '"branch/with/protection"';
    }>;
  protection_url?: string &
    tags.JsonSchemaPlugin<{
      example: '"https://api.github.com/repos/owner-79e94e2d36b3fd06a32bb213/AAA_Public_Repo/branches/branch/with/protection/protection"';
    }>;
  required_signatures?: {
    url: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_signatures";
      }>;
    enabled: boolean &
      tags.JsonSchemaPlugin<{
        example: true;
      }>;
  };
  /**
   * Whether to set the branch as read-only. If this is true, users will not be able to push to the branch.
   */
  lock_branch?: {
    enabled?: boolean;
  };
  /**
   * Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing.
   */
  allow_fork_syncing?: {
    enabled?: boolean;
  };
};
