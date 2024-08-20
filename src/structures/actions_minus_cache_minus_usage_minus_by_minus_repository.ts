import { tags } from "typia";

/**
 * GitHub Actions Cache Usage by repository.
 *
 * @title Actions Cache Usage by repository
 */
export type actions_minus_cache_minus_usage_minus_by_minus_repository = {
  /**
   * The repository owner and name for the cache usage being shown.
   */
  full_name: string &
    tags.JsonSchemaPlugin<{
      example: "octo-org/Hello-World";
    }>;
  /**
   * The sum of the size in bytes of all the active cache items in the repository.
   */
  active_caches_size_in_bytes: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2322142;
    }>;
  /**
   * The number of active caches in the repository.
   */
  active_caches_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3;
    }>;
};
