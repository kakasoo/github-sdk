import { tags } from "typia";

/**
 * A commit.
 *
 * @title Simple Commit
 */
export type simple_minus_commit = {
  /**
   * SHA for the commit
   */
  id: string &
    tags.JsonSchemaPlugin<{
      example: "7638417db6d59f3c431d3e1f261cc637155684cd";
    }>;
  /**
   * SHA for the commit's tree
   */
  tree_id: string;
  /**
   * Message describing the purpose of the commit
   */
  message: string &
    tags.JsonSchemaPlugin<{
      example: "Fix #42";
    }>;
  /**
   * Timestamp of the commit
   */
  timestamp: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2014-08-09T08:02:04+12:00";
    }>;
  /**
   * Information about the Git author
   */
  author: {
    /**
     * Name of the commit's author
     */
    name: string &
      tags.JsonSchemaPlugin<{
        example: "Monalisa Octocat";
      }>;
    /**
     * Git email address of the commit's author
     */
    email: string &
      tags.Format<"email"> &
      tags.JsonSchemaPlugin<{
        example: "monalisa.octocat@example.com";
      }>;
  } | null;
  /**
   * Information about the Git committer
   */
  committer: {
    /**
     * Name of the commit's committer
     */
    name: string &
      tags.JsonSchemaPlugin<{
        example: "Monalisa Octocat";
      }>;
    /**
     * Git email address of the commit's committer
     */
    email: string &
      tags.Format<"email"> &
      tags.JsonSchemaPlugin<{
        example: "monalisa.octocat@example.com";
      }>;
  } | null;
};
