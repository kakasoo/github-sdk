import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { release_minus_asset } from "./release_minus_asset";
import { reaction_minus_rollup } from "./reaction_minus_rollup";

/**
 * A release.
 *
 * @title Release
 */
export type release = {
  url: string & tags.Format<"uri">;
  html_url: string & tags.Format<"uri">;
  assets_url: string & tags.Format<"uri">;
  upload_url: string;
  tarball_url: (string & tags.Format<"uri">) | null;
  zipball_url: (string & tags.Format<"uri">) | null;
  id: number & tags.Type<"int32">;
  node_id: string;
  /**
   * The name of the tag.
   */
  tag_name: string &
    tags.JsonSchemaPlugin<{
      example: "v1.0.0";
    }>;
  /**
   * Specifies the commitish value that determines where the Git tag is created from.
   */
  target_commitish: string &
    tags.JsonSchemaPlugin<{
      example: "master";
    }>;
  name: string | null;
  body?: string | null;
  /**
   * true to create a draft (unpublished) release, false to create a published one.
   */
  draft: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * Whether to identify the release as a prerelease or a full release.
   */
  prerelease: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  created_at: string & tags.Format<"date-time">;
  published_at: (string & tags.Format<"date-time">) | null;
  author: simple_minus_user;
  assets: release_minus_asset[];
  body_html?: string;
  body_text?: string;
  mentions_count?: number & tags.Type<"int32">;
  /**
   * The URL of the release discussion.
   */
  discussion_url?: string & tags.Format<"uri">;
  reactions?: reaction_minus_rollup;
};
