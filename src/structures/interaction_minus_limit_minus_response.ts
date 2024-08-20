import { tags } from "typia";

import { interaction_minus_group } from "./interaction_minus_group";

/**
 * Interaction limit settings.
 *
 * @title Interaction Limits
 */
export type interaction_minus_limit_minus_response = {
  limit: interaction_minus_group;
  origin: string &
    tags.JsonSchemaPlugin<{
      example: "repository";
    }>;
  expires_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2018-08-17T04:18:39Z";
    }>;
};
