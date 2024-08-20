/**
 * Parameters for a targeting a repository property
 *
 * @title Repository ruleset property targeting definition
 */
export type repository_minus_ruleset_minus_conditions_minus_repository_minus_property_minus_spec =
  {
    /**
     * The name of the repository property to target
     */
    name: string;
    /**
     * The values to match for the repository property
     */
    property_values: string[];
    /**
     * The source of the repository property. Defaults to 'custom' if not specified.
     */
    source?: "custom" | "system";
  };
