import { tags } from "typia";

/**
 * An actor that can bypass rules in a ruleset
 *
 * @title Repository Ruleset Bypass Actor
 */
export type repository_minus_ruleset_minus_bypass_minus_actor = {
  /**
   * The ID of the actor that can bypass a ruleset. If `actor_type` is `OrganizationAdmin`, this should be `1`. If `actor_type` is `DeployKey`, this should be null. `OrganizationAdmin` is not applicable for personal repositories.
   *
   */
  actor_id?: (number & tags.Type<"int32">) | null;
  /**
   * The type of actor that can bypass a ruleset.
   *
   */
  actor_type:
    | "Integration"
    | "OrganizationAdmin"
    | "RepositoryRole"
    | "Team"
    | "DeployKey"
    | "EnterpriseTeam";
  /**
   * When the specified actor can bypass the ruleset. `pull_request` means that an actor can only bypass rules on pull requests. `pull_request` is not applicable for the `DeployKey` actor type.
   *
   */
  bypass_mode: "always" | "pull_request";
};
