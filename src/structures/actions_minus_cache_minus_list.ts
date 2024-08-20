import { tags } from "typia";

/**
 * Repository actions caches
 *
 * @title Repository actions caches
 */
export type actions_minus_cache_minus_list = {
  /**
   * Total number of caches
   */
  total_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
  /**
   * Array of caches
   */
  actions_caches: {
    id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 2;
      }>;
    ref?: string &
      tags.JsonSchemaPlugin<{
        example: "refs/heads/main";
      }>;
    key?: string &
      tags.JsonSchemaPlugin<{
        example: "Linux-node-958aff96db2d75d67787d1e634ae70b659de937b";
      }>;
    version?: string &
      tags.JsonSchemaPlugin<{
        example: "73885106f58cc52a7df9ec4d4a5622a5614813162cb516c759a30af6bf56e6f0";
      }>;
    last_accessed_at?: string &
      tags.Format<"date-time"> &
      tags.JsonSchemaPlugin<{
        example: "2019-01-24T22:45:36.000Z";
      }>;
    created_at?: string &
      tags.Format<"date-time"> &
      tags.JsonSchemaPlugin<{
        example: "2019-01-24T22:45:36.000Z";
      }>;
    size_in_bytes?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 1024;
      }>;
  }[];
};
