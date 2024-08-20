import { tags } from "typia";

/**
 * Represents a 'wiki_commit' secret scanning location type. This location type shows that a secret was detected inside a commit to a repository wiki.
 */
export type secret_minus_scanning_minus_location_minus_wiki_minus_commit = {
  /**
   * The file path of the wiki page
   */
  path: string &
    tags.JsonSchemaPlugin<{
      example: "/example/Home.md";
    }>;
  /**
   * Line number at which the secret starts in the file
   */
  start_line: number;
  /**
   * Line number at which the secret ends in the file
   */
  end_line: number;
  /**
   * The column at which the secret starts within the start line when the file is interpreted as 8-bit ASCII.
   */
  start_column: number;
  /**
   * The column at which the secret ends within the end line when the file is interpreted as 8-bit ASCII.
   */
  end_column: number;
  /**
   * SHA-1 hash ID of the associated blob
   */
  blob_sha: string &
    tags.JsonSchemaPlugin<{
      example: "af5626b4a114abcb82d63db7c8082c3c4756e51b";
    }>;
  /**
   * The GitHub URL to get the associated wiki page
   */
  page_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/wiki/Home/302c0b7e200761c9dd9b57e57db540ee0b4293a5";
    }>;
  /**
   * SHA-1 hash ID of the associated commit
   */
  commit_sha: string &
    tags.JsonSchemaPlugin<{
      example: "302c0b7e200761c9dd9b57e57db540ee0b4293a5";
    }>;
  /**
   * The GitHub URL to get the associated wiki commit
   */
  commit_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/wiki/_compare/302c0b7e200761c9dd9b57e57db540ee0b4293a5";
    }>;
};
