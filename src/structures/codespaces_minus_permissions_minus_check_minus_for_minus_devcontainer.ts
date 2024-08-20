import { tags } from "typia";

/**
 * Permission check result for a given devcontainer config.
 *
 * @title Codespaces Permissions Check
 */
export type codespaces_minus_permissions_minus_check_minus_for_minus_devcontainer =
  {
    /**
     * Whether the user has accepted the permissions defined by the devcontainer config
     */
    accepted: boolean &
      tags.JsonSchemaPlugin<{
        example: true;
      }>;
  };
