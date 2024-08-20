import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Data related to a release.
 *
 * @title Release Asset
 */
export type release_minus_asset = {
  url: string & tags.Format<"uri">;
  browser_download_url: string & tags.Format<"uri">;
  id: number & tags.Type<"int32">;
  node_id: string;
  /**
   * The file name of the asset.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Team Environment";
    }>;
  label: string | null;
  /**
   * State of the release asset.
   */
  state: "uploaded" | "open";
  content_type: string;
  size: number & tags.Type<"int32">;
  download_count: number & tags.Type<"int32">;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  uploader: nullable_minus_simple_minus_user;
};
