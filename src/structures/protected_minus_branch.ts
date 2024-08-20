import { tags } from "typia";

import { branch_minus_restriction_minus_policy } from "./branch_minus_restriction_minus_policy";
import { integration } from "./integration";
import { simple_minus_user } from "./simple_minus_user";
import { status_minus_check_minus_policy } from "./status_minus_check_minus_policy";
import { team } from "./team";

/**
 * Branch protections protect branches
 *
 * @title Protected Branch
 */
export type protected_minus_branch = {
  url: string & tags.Format<"uri">;
  required_status_checks?: status_minus_check_minus_policy;
  required_pull_request_reviews?: {
    url: string & tags.Format<"uri">;
    dismiss_stale_reviews?: boolean;
    require_code_owner_reviews?: boolean;
    required_approving_review_count?: number & tags.Type<"int32">;
    /**
     * Whether the most recent push must be approved by someone other than the person who pushed it.
     */
    require_last_push_approval?: boolean;
    dismissal_restrictions?: {
      url: string & tags.Format<"uri">;
      users_url: string & tags.Format<"uri">;
      teams_url: string & tags.Format<"uri">;
      users: simple_minus_user[];
      teams: team[];
      apps?: integration[];
    };
    bypass_pull_request_allowances?: {
      users: simple_minus_user[];
      teams: team[];
      apps?: integration[];
    };
  };
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
  enforce_admins?: {
    url: string & tags.Format<"uri">;
    enabled: boolean;
  };
  required_linear_history?: {
    enabled: boolean;
  };
  allow_force_pushes?: {
    enabled: boolean;
  };
  allow_deletions?: {
    enabled: boolean;
  };
  restrictions?: branch_minus_restriction_minus_policy;
  required_conversation_resolution?: {
    enabled?: boolean;
  };
  block_creations?: {
    enabled: boolean;
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
