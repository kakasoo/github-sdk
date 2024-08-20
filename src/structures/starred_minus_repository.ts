import { tags } from "typia";

import { repository } from "./repository";

/**
 * Starred Repository
 *
 * @title Starred Repository
 */
export type starred_minus_repository = {
  starred_at: string & tags.Format<"date-time">;
  repo: repository;
};
