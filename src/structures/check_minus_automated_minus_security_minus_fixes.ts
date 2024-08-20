import { tags } from "typia";

/**
 * Check Automated Security Fixes
 *
 * @title Check Automated Security Fixes
 */
export type check_minus_automated_minus_security_minus_fixes = {
  /**
   * Whether automated security fixes are enabled for the repository.
   */
  enabled: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Whether automated security fixes are paused for the repository.
   */
  paused: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
};
