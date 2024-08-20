import { tags } from "typia";

/**
 * Details for the vulnerable package.
 */
export type dependabot_minus_alert_minus_package = {
  /**
   * The package's language or package management ecosystem.
   */
  ecosystem: string &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The unique package name within its ecosystem.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
};
