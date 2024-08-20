import { simple_minus_user } from "./simple_minus_user";

/**
 * The status of auto merging a pull request.
 *
 * @title Auto merge
 */
export type auto_minus_merge = {
  enabled_by: simple_minus_user;
  /**
   * The merge method to use.
   */
  merge_method: "merge" | "squash" | "rebase";
  /**
   * Title for the merge commit message.
   */
  commit_title: string;
  /**
   * Commit message for the merge commit.
   */
  commit_message: string;
} | null;
