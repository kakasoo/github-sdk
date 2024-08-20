import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { team } from "./team";
import { integration } from "./integration";

/**
 * Protected Branch Pull Request Review
 *
 * @title Protected Branch Pull Request Review
 */
export type protected_minus_branch_minus_pull_minus_request_minus_review = {
  url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions";
    }>;
  dismissal_restrictions?: {
    /**
     * The list of users with review dismissal access.
     */
    users?: simple_minus_user[];
    /**
     * The list of teams with review dismissal access.
     */
    teams?: team[];
    /**
     * The list of apps with review dismissal access.
     */
    apps?: integration[];
    url?: string &
      tags.JsonSchemaPlugin<{
        example: '"https://api.github.com/repos/the-org/an-org-repo/branches/master/protection/dismissal_restrictions"';
      }>;
    users_url?: string &
      tags.JsonSchemaPlugin<{
        example: '"https://api.github.com/repos/the-org/an-org-repo/branches/master/protection/dismissal_restrictions/users"';
      }>;
    teams_url?: string &
      tags.JsonSchemaPlugin<{
        example: '"https://api.github.com/repos/the-org/an-org-repo/branches/master/protection/dismissal_restrictions/teams"';
      }>;
  };
  /**
   * Allow specific users, teams, or apps to bypass pull request requirements.
   */
  bypass_pull_request_allowances?: {
    /**
     * The list of users allowed to bypass pull request requirements.
     */
    users?: simple_minus_user[];
    /**
     * The list of teams allowed to bypass pull request requirements.
     */
    teams?: team[];
    /**
     * The list of apps allowed to bypass pull request requirements.
     */
    apps?: integration[];
  };
  dismiss_stale_reviews: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  require_code_owner_reviews: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  required_approving_review_count?: number &
    tags.Type<"int32"> &
    tags.Minimum<0> &
    tags.Maximum<6> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
  /**
   * Whether the most recent push must be approved by someone other than the person who pushed it.
   */
  require_last_push_approval?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
};
