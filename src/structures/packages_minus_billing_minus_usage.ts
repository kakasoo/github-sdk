import { tags } from "typia";

export type packages_minus_billing_minus_usage = {
  /**
   * Sum of the free and paid storage space (GB) for GitHuub Packages.
   */
  total_gigabytes_bandwidth_used: number & tags.Type<"int32">;
  /**
   * Total paid storage space (GB) for GitHuub Packages.
   */
  total_paid_gigabytes_bandwidth_used: number & tags.Type<"int32">;
  /**
   * Free storage space (GB) for GitHub Packages.
   */
  included_gigabytes_bandwidth: number & tags.Type<"int32">;
};
