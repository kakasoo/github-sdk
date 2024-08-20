import { tags } from "typia";

/**
 * Required status check
 *
 * @title StatusCheckConfiguration
 */
export type repository_minus_rule_minus_params_minus_status_minus_check_minus_configuration =
  {
    /**
     * The status check context name that must be present on the commit.
     */
    context: string;
    /**
     * The optional integration ID that this status check must originate from.
     */
    integration_id?: number & tags.Type<"int32">;
  };
