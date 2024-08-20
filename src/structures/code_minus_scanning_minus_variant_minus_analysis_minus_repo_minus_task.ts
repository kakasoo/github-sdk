import { tags } from "typia";

import { simple_minus_repository } from "./simple_minus_repository";
import { code_minus_scanning_minus_variant_minus_analysis_minus_status } from "./code_minus_scanning_minus_variant_minus_analysis_minus_status";

export type code_minus_scanning_minus_variant_minus_analysis_minus_repo_minus_task =
  {
    repository: simple_minus_repository;
    analysis_status: code_minus_scanning_minus_variant_minus_analysis_minus_status;
    /**
     * The size of the artifact. This is only available for successful analyses.
     */
    artifact_size_in_bytes?: number & tags.Type<"int32">;
    /**
     * The number of results in the case of a successful analysis. This is only available for successful analyses.
     */
    result_count?: number & tags.Type<"int32">;
    /**
     * The reason of the failure of this repo task. This is only available if the repository task has failed.
     */
    failure_message?: string;
    /**
     * The SHA of the commit the CodeQL database was built against. This is only available for successful analyses.
     */
    database_commit_sha?: string;
    /**
     * The source location prefix to use. This is only available for successful analyses.
     */
    source_location_prefix?: string;
    /**
     * The URL of the artifact. This is only available for successful analyses.
     */
    artifact_url?: string;
  };
