import { tags } from "typia";

import { verification } from "./verification";

/**
 * Metadata for a Git tag
 *
 * @title Git Tag
 */
export type git_minus_tag = {
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDM6VGFnOTQwYmQzMzYyNDhlZmFlMGY5ZWU1YmM3YjJkNWM5ODU4ODdiMTZhYw==";
    }>;
  /**
   * Name of the tag
   */
  tag: string &
    tags.JsonSchemaPlugin<{
      example: "v0.0.1";
    }>;
  sha: string &
    tags.JsonSchemaPlugin<{
      example: "940bd336248efae0f9ee5bc7b2d5c985887b16ac";
    }>;
  /**
   * URL for the tag
   */
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repositories/42/git/tags/940bd336248efae0f9ee5bc7b2d5c985887b16ac";
    }>;
  /**
   * Message describing the purpose of the tag
   */
  message: string &
    tags.JsonSchemaPlugin<{
      example: "Initial public release";
    }>;
  tagger: {
    date: string;
    email: string;
    name: string;
  };
  object: {
    sha: string;
    type: string;
    url: string & tags.Format<"uri">;
  };
  verification?: verification;
};
