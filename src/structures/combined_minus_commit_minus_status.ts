import { tags } from "typia";

import { minimal_minus_repository } from "./minimal_minus_repository";
import { simple_minus_commit_minus_status } from "./simple_minus_commit_minus_status";

/**
 * Combined Commit Status
 *
 * @title Combined Commit Status
 */
export type combined_minus_commit_minus_status = {
  state: string;
  statuses: simple_minus_commit_minus_status[];
  sha: string;
  total_count: number & tags.Type<"int32">;
  repository: minimal_minus_repository;
  commit_url: string & tags.Format<"uri">;
  url: string & tags.Format<"uri">;
};
