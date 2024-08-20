import { tags } from "typia";

/**
 * Parameters for a repository ID condition
 *
 * @title Repository ruleset conditions for repository IDs
 */
export type repository_minus_ruleset_minus_conditions_minus_repository_minus_id_minus_target =
  {
    repository_id: {
      /**
       * The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass.
       */
      repository_ids?: (number & tags.Type<"int32">)[];
    };
  };
