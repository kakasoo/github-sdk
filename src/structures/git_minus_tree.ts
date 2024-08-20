import { tags } from "typia";

/**
 * The hierarchy between files in a Git repository.
 *
 * @title Git Tree
 */
export type git_minus_tree = {
  sha: string;
  url: string & tags.Format<"uri">;
  truncated: boolean;
  /**
   * Objects specifying a tree structure
   */
  tree: {
    path?: string &
      tags.JsonSchemaPlugin<{
        example: "test/file.rb";
      }>;
    mode?: string &
      tags.JsonSchemaPlugin<{
        example: "040000";
      }>;
    type?: string &
      tags.JsonSchemaPlugin<{
        example: "tree";
      }>;
    sha?: string &
      tags.JsonSchemaPlugin<{
        example: "23f6827669e43831def8a7ad935069c8bd418261";
      }>;
    size?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 12;
      }>;
    url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/owner-482f3203ecf01f67e9deb18e/BBB_Private_Repo/git/blobs/23f6827669e43831def8a7ad935069c8bd418261";
      }>;
  }[] &
    tags.JsonSchemaPlugin<{
      example: [
        {
          path: "file.rb";
          mode: "100644";
          type: "blob";
          size: 30;
          sha: "44b4fc6d56897b048c772eb4087f854f46256132";
          url: "https://api.github.com/repos/octocat/Hello-World/git/blobs/44b4fc6d56897b048c772eb4087f854f46256132";
          properties: {
            path: {
              type: "string";
            };
            mode: {
              type: "string";
            };
            type: {
              type: "string";
            };
            size: {
              type: "integer";
            };
            sha: {
              type: "string";
            };
            url: {
              type: "string";
            };
          };
          required: ["path", "mode", "type", "sha", "url", "size"];
        },
      ];
    }>;
};
