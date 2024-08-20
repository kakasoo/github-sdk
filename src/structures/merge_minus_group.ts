import { simple_minus_commit } from "./simple_minus_commit";

/**
 * A group of pull requests that the merge queue has grouped together to be merged.
 *
 *
 * @title Merge Group
 */
export type merge_minus_group = {
  /**
   * The SHA of the merge group.
   */
  head_sha: string;
  /**
   * The full ref of the merge group.
   */
  head_ref: string;
  /**
   * The SHA of the merge group's parent commit.
   */
  base_sha: string;
  /**
   * The full ref of the branch the merge group will be merged into.
   */
  base_ref: string;
  head_commit: simple_minus_commit;
};
