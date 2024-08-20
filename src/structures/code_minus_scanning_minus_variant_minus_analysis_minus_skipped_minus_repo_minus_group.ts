import { tags } from "typia";

import { code_minus_scanning_minus_variant_minus_analysis_minus_repository } from "./code_minus_scanning_minus_variant_minus_analysis_minus_repository";

export type code_minus_scanning_minus_variant_minus_analysis_minus_skipped_minus_repo_minus_group =
  {
    /**
     * The total number of repositories that were skipped for this reason.
     */
    repository_count: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 2;
      }>;
    /**
     * A list of repositories that were skipped. This list may not include all repositories that were skipped. This is only available when the repository was found and the user has access to it.
     */
    repositories: code_minus_scanning_minus_variant_minus_analysis_minus_repository[];
  };
