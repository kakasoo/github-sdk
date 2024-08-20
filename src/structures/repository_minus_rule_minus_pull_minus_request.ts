import { tags } from "typia";

/**
 * Require all commits be made to a non-target branch and submitted via a pull request before they can be merged.
 *
 * @title pull_request
 */
export type repository_minus_rule_minus_pull_minus_request = {
  type: "pull_request";
  parameters?: {
    /**
     * New, reviewable commits pushed will dismiss previous pull request review approvals.
     */
    dismiss_stale_reviews_on_push: boolean;
    /**
     * Require an approving review in pull requests that modify files that have a designated code owner.
     */
    require_code_owner_review: boolean;
    /**
     * Whether the most recent reviewable push must be approved by someone other than the person who pushed it.
     */
    require_last_push_approval: boolean;
    /**
     * The number of approving reviews that are required before a pull request can be merged.
     */
    required_approving_review_count: number &
      tags.Type<"int32"> &
      tags.Minimum<0> &
      tags.Maximum<10>;
    /**
     * All conversations on code must be resolved before a pull request can be merged.
     */
    required_review_thread_resolution: boolean;
  };
};
