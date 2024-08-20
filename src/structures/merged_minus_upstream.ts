/**
 * Results of a successful merge upstream request
 *
 * @title Merged upstream
 */
export type merged_minus_upstream = {
  message?: string;
  merge_type?: "merge" | "fast-forward" | "none";
  base_branch?: string;
};
