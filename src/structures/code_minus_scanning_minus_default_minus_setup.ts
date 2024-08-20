import { tags } from "typia";

/**
 * Configuration for code scanning default setup.
 */
export type code_minus_scanning_minus_default_minus_setup = {
  /**
   * Code scanning default setup has been configured or not.
   */
  state?: "configured" | "not-configured";
  /**
   * Languages to be analyzed.
   */
  languages?: (
    | "c-cpp"
    | "csharp"
    | "go"
    | "java-kotlin"
    | "javascript-typescript"
    | "javascript"
    | "python"
    | "ruby"
    | "typescript"
    | "swift"
  )[];
  /**
   * CodeQL query suite to be used.
   */
  query_suite?: "default" | "extended";
  /**
   * Timestamp of latest configuration update.
   */
  updated_at?:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2023-12-06T14:20:20.000Z";
        }>)
    | null;
  /**
   * The frequency of the periodic analysis.
   */
  schedule?: "weekly" | null;
};
