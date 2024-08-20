import { tags } from "typia";

/**
 * An export of a codespace. Also, latest export details for a codespace can be fetched with id = latest
 *
 * @title Fetches information about an export of a codespace.
 */
export type codespace_minus_export_minus_details = {
  /**
   * State of the latest export
   */
  state?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "succeeded | failed | in_progress";
        }>)
    | null;
  /**
   * Completion time of the last export operation
   */
  completed_at?:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2021-01-01T19:01:12Z";
        }>)
    | null;
  /**
   * Name of the exported branch
   */
  branch?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "codespace-monalisa-octocat-hello-world-g4wpq6h95q";
        }>)
    | null;
  /**
   * Git commit SHA of the exported branch
   */
  sha?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "fd95a81ca01e48ede9f39c799ecbcef817b8a3b2";
        }>)
    | null;
  /**
   * Id for the export details
   */
  id?: string &
    tags.JsonSchemaPlugin<{
      example: "latest";
    }>;
  /**
   * Url for fetching export details
   */
  export_url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/user/codespaces/:name/exports/latest";
    }>;
  /**
   * Web url for the exported branch
   */
  html_url?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "https://github.com/octocat/hello-world/tree/:branch";
        }>)
    | null;
};
