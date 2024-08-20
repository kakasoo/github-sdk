import { tags } from "typia";

/**
 * Response
 *
 * @title Rule Suites
 */
export type rule_minus_suites = {
  /**
   * The unique identifier of the rule insight.
   */
  id?: number & tags.Type<"int32">;
  /**
   * The number that identifies the user.
   */
  actor_id?: number & tags.Type<"int32">;
  /**
   * The handle for the GitHub user account.
   */
  actor_name?: string;
  /**
   * The first commit sha before the push evaluation.
   */
  before_sha?: string;
  /**
   * The last commit sha in the push evaluation.
   */
  after_sha?: string;
  /**
   * The ref name that the evaluation ran on.
   */
  ref?: string;
  /**
   * The ID of the repository associated with the rule evaluation.
   */
  repository_id?: number & tags.Type<"int32">;
  /**
   * The name of the repository without the `.git` extension.
   */
  repository_name?: string;
  pushed_at?: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:06:43Z";
    }>;
  /**
   * The result of the rule evaluations for rules with the `active` enforcement status.
   */
  result?: "pass" | "fail" | "bypass";
  /**
   * The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`.
   */
  evaluation_result?: "pass" | "fail";
}[];
