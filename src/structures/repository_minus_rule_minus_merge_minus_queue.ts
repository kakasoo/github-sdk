import { tags } from "typia";

/**
 * Merges must be performed via a merge queue.
 *
 * @title merge_queue
 */
export type repository_minus_rule_minus_merge_minus_queue = {
  type: "merge_queue";
  parameters?: {
    /**
     * Maximum time for a required status check to report a conclusion. After this much time has elapsed, checks that have not reported a conclusion will be assumed to have failed
     */
    check_response_timeout_minutes: number &
      tags.Type<"int32"> &
      tags.Minimum<1> &
      tags.Maximum<360>;
    /**
     * When set to ALLGREEN, the merge commit created by merge queue for each PR in the group must pass all required checks to merge. When set to HEADGREEN, only the commit at the head of the merge group, i.e. the commit containing changes from all of the PRs in the group, must pass its required checks to merge.
     */
    grouping_strategy: "ALLGREEN" | "HEADGREEN";
    /**
     * Limit the number of queued pull requests requesting checks and workflow runs at the same time.
     */
    max_entries_to_build: number &
      tags.Type<"int32"> &
      tags.Minimum<0> &
      tags.Maximum<100>;
    /**
     * The maximum number of PRs that will be merged together in a group.
     */
    max_entries_to_merge: number &
      tags.Type<"int32"> &
      tags.Minimum<0> &
      tags.Maximum<100>;
    /**
     * Method to use when merging changes from queued pull requests.
     */
    merge_method: "MERGE" | "SQUASH" | "REBASE";
    /**
     * The minimum number of PRs that will be merged together in a group.
     */
    min_entries_to_merge: number &
      tags.Type<"int32"> &
      tags.Minimum<0> &
      tags.Maximum<100>;
    /**
     * The time merge queue should wait after the first PR is added to the queue for the minimum group size to be met. After this time has elapsed, the minimum group size will be ignored and a smaller group will be merged.
     */
    min_entries_to_merge_wait_minutes: number &
      tags.Type<"int32"> &
      tags.Minimum<0> &
      tags.Maximum<360>;
  };
};
