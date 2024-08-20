import { tags } from "typia";

import { simple_minus_repository } from "./simple_minus_repository";
import { simple_minus_user } from "./simple_minus_user";
import { code_minus_scanning_minus_variant_minus_analysis_minus_language } from "./code_minus_scanning_minus_variant_minus_analysis_minus_language";
import { code_minus_scanning_minus_variant_minus_analysis_minus_repository } from "./code_minus_scanning_minus_variant_minus_analysis_minus_repository";
import { code_minus_scanning_minus_variant_minus_analysis_minus_status } from "./code_minus_scanning_minus_variant_minus_analysis_minus_status";
import { code_minus_scanning_minus_variant_minus_analysis_minus_skipped_minus_repo_minus_group } from "./code_minus_scanning_minus_variant_minus_analysis_minus_skipped_minus_repo_minus_group";

/**
 * A run of a CodeQL query against one or more repositories.
 *
 * @title Variant Analysis
 */
export type code_minus_scanning_minus_variant_minus_analysis = {
  /**
   * The ID of the variant analysis.
   */
  id: number & tags.Type<"int32">;
  controller_repo: simple_minus_repository;
  actor: simple_minus_user;
  query_language: code_minus_scanning_minus_variant_minus_analysis_minus_language;
  /**
   * The download url for the query pack.
   */
  query_pack_url: string;
  /**
   * The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
   */
  created_at?: string & tags.Format<"date-time">;
  /**
   * The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
   */
  updated_at?: string & tags.Format<"date-time">;
  /**
   * The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. Will be null if the variant analysis has not yet completed or this information is not available.
   */
  completed_at?: (string & tags.Format<"date-time">) | null;
  status: "in_progress" | "succeeded" | "failed" | "cancelled";
  /**
   * The GitHub Actions workflow run used to execute this variant analysis. This is only available if the workflow run has started.
   */
  actions_workflow_run_id?: number & tags.Type<"int32">;
  /**
   * The reason for a failure of the variant analysis. This is only available if the variant analysis has failed.
   */
  failure_reason?:
    | "no_repos_queried"
    | "actions_workflow_run_failed"
    | "internal_error";
  scanned_repositories?: {
    repository: code_minus_scanning_minus_variant_minus_analysis_minus_repository;
    analysis_status: code_minus_scanning_minus_variant_minus_analysis_minus_status;
    /**
     * The number of results in the case of a successful analysis. This is only available for successful analyses.
     */
    result_count?: number & tags.Type<"int32">;
    /**
     * The size of the artifact. This is only available for successful analyses.
     */
    artifact_size_in_bytes?: number & tags.Type<"int32">;
    /**
     * The reason of the failure of this repo task. This is only available if the repository task has failed.
     */
    failure_message?: string;
  }[];
  /**
   * Information about repositories that were skipped from processing. This information is only available to the user that initiated the variant analysis.
   */
  skipped_repositories?: {
    access_mismatch_repos: code_minus_scanning_minus_variant_minus_analysis_minus_skipped_minus_repo_minus_group;
    not_found_repos: {
      /**
       * The total number of repositories that were skipped for this reason.
       */
      repository_count: number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 2;
        }>;
      /**
       * A list of full repository names that were skipped. This list may not include all repositories that were skipped.
       */
      repository_full_names: string[];
    };
    no_codeql_db_repos: code_minus_scanning_minus_variant_minus_analysis_minus_skipped_minus_repo_minus_group;
    over_limit_repos: code_minus_scanning_minus_variant_minus_analysis_minus_skipped_minus_repo_minus_group;
  };
};
