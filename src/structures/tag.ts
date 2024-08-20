import { tags } from "typia";

/**
 * Tag
 *
 * @title Tag
 */
export type tag = {
  name: string &
    tags.JsonSchemaPlugin<{
      example: "v0.1";
    }>;
  commit: {
    sha: string;
    url: string & tags.Format<"uri">;
  };
  zipball_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/zipball/v0.1";
    }>;
  tarball_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/tarball/v0.1";
    }>;
  node_id: string;
};
