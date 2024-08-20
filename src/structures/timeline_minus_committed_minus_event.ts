import { tags } from "typia";

/**
 * Timeline Committed Event
 *
 * @title Timeline Committed Event
 */
export type timeline_minus_committed_minus_event = {
  event?: string;
  /**
   * SHA for the commit
   */
  sha: string &
    tags.JsonSchemaPlugin<{
      example: "7638417db6d59f3c431d3e1f261cc637155684cd";
    }>;
  node_id: string;
  url: string & tags.Format<"uri">;
  /**
   * Identifying information for the git-user
   */
  author: {
    /**
     * Timestamp of the commit
     */
    date: string &
      tags.Format<"date-time"> &
      tags.JsonSchemaPlugin<{
        example: "2014-08-09T08:02:04+12:00";
      }>;
    /**
     * Git email address of the user
     */
    email: string &
      tags.JsonSchemaPlugin<{
        example: "monalisa.octocat@example.com";
      }>;
    /**
     * Name of the git user
     */
    name: string &
      tags.JsonSchemaPlugin<{
        example: "Monalisa Octocat";
      }>;
  };
  /**
   * Identifying information for the git-user
   */
  committer: {
    /**
     * Timestamp of the commit
     */
    date: string &
      tags.Format<"date-time"> &
      tags.JsonSchemaPlugin<{
        example: "2014-08-09T08:02:04+12:00";
      }>;
    /**
     * Git email address of the user
     */
    email: string &
      tags.JsonSchemaPlugin<{
        example: "monalisa.octocat@example.com";
      }>;
    /**
     * Name of the git user
     */
    name: string &
      tags.JsonSchemaPlugin<{
        example: "Monalisa Octocat";
      }>;
  };
  /**
   * Message describing the purpose of the commit
   */
  message: string &
    tags.JsonSchemaPlugin<{
      example: "Fix #42";
    }>;
  tree: {
    /**
     * SHA for the commit
     */
    sha: string &
      tags.JsonSchemaPlugin<{
        example: "7638417db6d59f3c431d3e1f261cc637155684cd";
      }>;
    url: string & tags.Format<"uri">;
  };
  parents: {
    /**
     * SHA for the commit
     */
    sha: string &
      tags.JsonSchemaPlugin<{
        example: "7638417db6d59f3c431d3e1f261cc637155684cd";
      }>;
    url: string & tags.Format<"uri">;
    html_url: string & tags.Format<"uri">;
  }[];
  verification: {
    verified: boolean;
    reason: string;
    signature: string | null;
    payload: string | null;
  };
  html_url: string & tags.Format<"uri">;
};
