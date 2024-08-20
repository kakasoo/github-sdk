import { tags } from "typia";

import { enterprise } from "./enterprise";
import { simple_minus_user } from "./simple_minus_user";

/**
 * Request to install an integration on a target
 *
 * @title Integration Installation Request
 */
export type integration_minus_installation_minus_request = {
  /**
   * Unique identifier of the request installation.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  node_id?: string &
    tags.JsonSchemaPlugin<{
      example: "MDExOkludGVncmF0aW9uMQ==";
    }>;
  account: simple_minus_user | enterprise;
  requester: simple_minus_user;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2022-07-08T16:18:44-04:00";
    }>;
};
