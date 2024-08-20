import { tags } from "typia";

import { secret_minus_scanning_minus_push_minus_protection_minus_bypass_minus_reason } from "./secret_minus_scanning_minus_push_minus_protection_minus_bypass_minus_reason";

export type secret_minus_scanning_minus_push_minus_protection_minus_bypass = {
  reason?: secret_minus_scanning_minus_push_minus_protection_minus_bypass_minus_reason;
  /**
   * The time that the bypass will expire in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  expire_at?: (string & tags.Format<"date-time">) | null;
  /**
   * The token type this bypass is for.
   */
  token_type?: string;
};
