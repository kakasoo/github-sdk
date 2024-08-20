import { tags } from "typia";

import { alert_minus_created_minus_at } from "./alert_minus_created_minus_at";
import { alert_minus_html_minus_url } from "./alert_minus_html_minus_url";
import { alert_minus_number } from "./alert_minus_number";
import { alert_minus_url } from "./alert_minus_url";
import { nullable_minus_alert_minus_updated_minus_at } from "./nullable_minus_alert_minus_updated_minus_at";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { secret_minus_scanning_minus_alert_minus_resolution } from "./secret_minus_scanning_minus_alert_minus_resolution";
import { secret_minus_scanning_minus_alert_minus_state } from "./secret_minus_scanning_minus_alert_minus_state";

export type secret_minus_scanning_minus_alert = {
  number?: alert_minus_number;
  created_at?: alert_minus_created_minus_at;
  updated_at?: nullable_minus_alert_minus_updated_minus_at;
  url?: alert_minus_url;
  html_url?: alert_minus_html_minus_url;
  /**
   * The REST API URL of the code locations for this alert.
   */
  locations_url?: string & tags.Format<"uri">;
  state?: secret_minus_scanning_minus_alert_minus_state;
  resolution?: secret_minus_scanning_minus_alert_minus_resolution;
  /**
   * The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  resolved_at?: (string & tags.Format<"date-time">) | null;
  resolved_by?: nullable_minus_simple_minus_user;
  /**
   * An optional comment to resolve an alert.
   */
  resolution_comment?: string | null;
  /**
   * The type of secret that secret scanning detected.
   */
  secret_type?: string;
  /**
   * User-friendly name for the detected secret, matching the `secret_type`.
   * For a list of built-in patterns, see "[Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."
   */
  secret_type_display_name?: string;
  /**
   * The secret that was detected.
   */
  secret?: string;
  /**
   * Whether push protection was bypassed for the detected secret.
   */
  push_protection_bypassed?: boolean | null;
  push_protection_bypassed_by?: nullable_minus_simple_minus_user;
  /**
   * The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  push_protection_bypassed_at?: (string & tags.Format<"date-time">) | null;
  /**
   * The token status as of the latest validity check.
   */
  validity?: "active" | "inactive" | "unknown";
};
