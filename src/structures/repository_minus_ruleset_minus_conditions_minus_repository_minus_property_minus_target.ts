import { repository_minus_ruleset_minus_conditions_minus_repository_minus_property_minus_spec } from "./repository_minus_ruleset_minus_conditions_minus_repository_minus_property_minus_spec";

/**
 * Parameters for a repository property condition
 *
 * @title Repository ruleset conditions for repository properties
 */
export type repository_minus_ruleset_minus_conditions_minus_repository_minus_property_minus_target =
  {
    repository_property: {
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
