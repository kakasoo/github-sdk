import { tags } from "typia";

import { org_minus_ruleset_minus_conditions } from "./org_minus_ruleset_minus_conditions";
import { repository_minus_rule } from "./repository_minus_rule";
import { repository_minus_rule_minus_enforcement } from "./repository_minus_rule_minus_enforcement";
import { repository_minus_ruleset_minus_bypass_minus_actor } from "./repository_minus_ruleset_minus_bypass_minus_actor";
import { repository_minus_ruleset_minus_conditions } from "./repository_minus_ruleset_minus_conditions";

/**
 * A set of rules to apply when specified conditions are met.
 *
 * @title Repository ruleset
 */
export type repository_minus_ruleset = {
  /**
   * The ID of the ruleset
   */
  id: number & tags.Type<"int32">;
  /**
   * The name of the ruleset
   */
  name: string;
  /**
   * The target of the ruleset
   *
   * > [!NOTE]
   * > The `push` target is in beta and is subject to change.
   */
  target?: "branch" | "tag" | "push";
  /**
   * The type of the source of the ruleset
   */
  source_type?: "Repository" | "Organization";
  /**
   * The name of the source
   */
  source: string;
  enforcement: repository_minus_rule_minus_enforcement;
  /**
   * The actors that can bypass the rules in this ruleset
   */
  bypass_actors?: repository_minus_ruleset_minus_bypass_minus_actor[];
  /**
   * The bypass type of the user making the API request for this ruleset. This field is only returned when
   * querying the repository-level endpoint.
   */
  current_user_can_bypass?: "always" | "pull_requests_only" | "never";
  node_id?: string;
  _links?: {
    self?: {
      /**
       * The URL of the ruleset
       */
      href?: string;
    };
    html?: {
      /**
       * The html URL of the ruleset
       */
      href?: string;
    };
  };
  conditions?:
    | repository_minus_ruleset_minus_conditions
    | org_minus_ruleset_minus_conditions
    | null;
  rules?: repository_minus_rule[];
  created_at?: string & tags.Format<"date-time">;
  updated_at?: string & tags.Format<"date-time">;
};
