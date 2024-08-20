import { tags } from "typia";

import { branch_minus_protection } from "./branch_minus_protection";

/**
 * Short Branch
 *
 * @title Short Branch
 */
export type short_minus_branch = {
  name: string;
  commit: {
    sha: string;
    url: string & tags.Format<"uri">;
  };
  protected: boolean;
  protection?: branch_minus_protection;
  protection_url?: string & tags.Format<"uri">;
};
