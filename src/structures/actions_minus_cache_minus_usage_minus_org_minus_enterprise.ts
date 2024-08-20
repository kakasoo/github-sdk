import { tags } from "typia";

export type actions_minus_cache_minus_usage_minus_org_minus_enterprise = {
  /**
   * The count of active caches across all repositories of an enterprise or an organization.
   */
  total_active_caches_count: number & tags.Type<"int32">;
  /**
   * The total size in bytes of all active cache items across all repositories of an enterprise or an organization.
   */
  total_active_caches_size_in_bytes: number & tags.Type<"int32">;
};
