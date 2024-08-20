import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { repository_minus_ruleset } from "./repository_minus_ruleset";
import { repository_minus_ruleset_minus_conditions } from "./repository_minus_ruleset_minus_conditions";
import { repository_minus_rule } from "./repository_minus_rule";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title repository ruleset edited event
 */
export type webhook_minus_repository_minus_ruleset_minus_edited = {
  action: "edited";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  repository_ruleset: repository_minus_ruleset;
  changes?: {
    name?: {
      from?: string;
    };
    enforcement?: {
      from?: string;
    };
    conditions?: {
      added?: repository_minus_ruleset_minus_conditions[];
      deleted?: repository_minus_ruleset_minus_conditions[];
      updated?: {
        condition?: repository_minus_ruleset_minus_conditions;
        changes?: {
          condition_type?: {
            from?: string;
          };
          target?: {
            from?: string;
          };
          include?: {
            from?: string[];
          };
          exclude?: {
            from?: string[];
          };
        };
      }[];
    };
    rules?: {
      added?: repository_minus_rule[];
      deleted?: repository_minus_rule[];
      updated?: {
        rule?: repository_minus_rule;
        changes?: {
          configuration?: {
            from?: string;
          };
          rule_type?: {
            from?: string;
          };
          pattern?: {
            from?: string;
          };
        };
      }[];
    };
  };
  sender: simple_minus_user_minus_webhooks;
};
