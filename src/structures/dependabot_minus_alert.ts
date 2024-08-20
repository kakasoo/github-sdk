import { tags } from "typia";

import { alert_minus_number } from "./alert_minus_number";
import { dependabot_minus_alert_minus_package } from "./dependabot_minus_alert_minus_package";
import { dependabot_minus_alert_minus_security_minus_advisory } from "./dependabot_minus_alert_minus_security_minus_advisory";
import { dependabot_minus_alert_minus_security_minus_vulnerability } from "./dependabot_minus_alert_minus_security_minus_vulnerability";
import { alert_minus_url } from "./alert_minus_url";
import { alert_minus_html_minus_url } from "./alert_minus_html_minus_url";
import { alert_minus_created_minus_at } from "./alert_minus_created_minus_at";
import { alert_minus_updated_minus_at } from "./alert_minus_updated_minus_at";
import { alert_minus_dismissed_minus_at } from "./alert_minus_dismissed_minus_at";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { alert_minus_fixed_minus_at } from "./alert_minus_fixed_minus_at";
import { alert_minus_auto_minus_dismissed_minus_at } from "./alert_minus_auto_minus_dismissed_minus_at";

/**
 * A Dependabot alert.
 */
export type dependabot_minus_alert = {
  number: alert_minus_number;
  /**
   * The state of the Dependabot alert.
   */
  state: "auto_dismissed" | "dismissed" | "fixed" | "open";
  /**
   * Details for the vulnerable dependency.
   */
  dependency: {
    package?: dependabot_minus_alert_minus_package;
    /**
     * The full path to the dependency manifest file, relative to the root of the repository.
     */
    manifest_path?: string &
      tags.JsonSchemaPlugin<{
        readOnly: true;
      }>;
    /**
     * The execution scope of the vulnerable dependency.
     */
    scope?: "development" | "runtime" | null;
  };
  security_advisory: dependabot_minus_alert_minus_security_minus_advisory;
  security_vulnerability: dependabot_minus_alert_minus_security_minus_vulnerability;
  url: alert_minus_url;
  html_url: alert_minus_html_minus_url;
  created_at: alert_minus_created_minus_at;
  updated_at: alert_minus_updated_minus_at;
  dismissed_at: alert_minus_dismissed_minus_at;
  dismissed_by: nullable_minus_simple_minus_user;
  /**
   * The reason that the alert was dismissed.
   */
  dismissed_reason:
    | "fix_started"
    | "inaccurate"
    | "no_bandwidth"
    | "not_used"
    | "tolerable_risk"
    | null;
  /**
   * An optional comment associated with the alert's dismissal.
   */
  dismissed_comment: (string & tags.MaxLength<280>) | null;
  fixed_at: alert_minus_fixed_minus_at;
  auto_dismissed_at?: alert_minus_auto_minus_dismissed_minus_at;
};
