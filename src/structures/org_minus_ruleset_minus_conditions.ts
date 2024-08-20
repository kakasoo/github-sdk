import { tags } from "typia";

import { repository_minus_ruleset_minus_conditions_minus_repository_minus_property_minus_spec } from "./repository_minus_ruleset_minus_conditions_minus_repository_minus_property_minus_spec";

/**
 * Conditions for an organization ruleset. The conditions object should contain both `repository_name` and `ref_name` properties or both `repository_id` and `ref_name` properties.
 *
 *
 * @title Organization ruleset conditions
 */
export type org_minus_ruleset_minus_conditions =
  | {
      ref_name?: {
        /**
         * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
         */
        include?: string[];
        /**
         * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
         */
        exclude?: string[];
      };
      repository_name?: {
        /**
         * Array of repository names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~ALL` to include all repositories.
         */
        include?: string[];
        /**
         * Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match.
         */
        exclude?: string[];
        /**
         * Whether renaming of target repositories is prevented.
         */
        protected?: boolean;
      };
    }
  | {
      ref_name?: {
        /**
         * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
         */
        include?: string[];
        /**
         * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
         */
        exclude?: string[];
      };
      repository_id?: {
        /**
         * The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass.
         */
        repository_ids?: (number & tags.Type<"int32">)[];
      };
    }
  | {
      ref_name?: {
        /**
         * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
         */
        include?: string[];
        /**
         * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
         */
        exclude?: string[];
      };
      repository_property?: {
        /**
         * The repository properties and values to include. All of these properties must match for the condition to pass.
         */
        include?: repository_minus_ruleset_minus_conditions_minus_repository_minus_property_minus_spec[];
        /**
         * The repository properties and values to exclude. The condition will not pass if any of these properties match.
         */
        exclude?: repository_minus_ruleset_minus_conditions_minus_repository_minus_property_minus_spec[];
      };
    };
