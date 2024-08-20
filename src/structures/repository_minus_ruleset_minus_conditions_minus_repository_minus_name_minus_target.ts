/**
 * Parameters for a repository name condition
 *
 * @title Repository ruleset conditions for repository names
 */
export type repository_minus_ruleset_minus_conditions_minus_repository_minus_name_minus_target =
  {
    repository_name: {
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
  };
