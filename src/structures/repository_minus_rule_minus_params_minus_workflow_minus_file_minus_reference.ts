import { tags } from "typia";

/**
 * A workflow that must run for this rule to pass
 *
 * @title WorkflowFileReference
 */
export type repository_minus_rule_minus_params_minus_workflow_minus_file_minus_reference =
  {
    /**
     * The path to the workflow file
     */
    path: string;
    /**
     * The ref (branch or tag) of the workflow file to use
     */
    ref?: string;
    /**
     * The ID of the repository where the workflow is defined
     */
    repository_id: number & tags.Type<"int32">;
    /**
     * The commit SHA of the workflow file to use
     */
    sha?: string;
  };
