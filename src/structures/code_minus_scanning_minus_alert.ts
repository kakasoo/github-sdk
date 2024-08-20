import { alert_minus_created_minus_at } from "./alert_minus_created_minus_at";
import { alert_minus_dismissed_minus_at } from "./alert_minus_dismissed_minus_at";
import { alert_minus_fixed_minus_at } from "./alert_minus_fixed_minus_at";
import { alert_minus_html_minus_url } from "./alert_minus_html_minus_url";
import { alert_minus_instances_minus_url } from "./alert_minus_instances_minus_url";
import { alert_minus_number } from "./alert_minus_number";
import { alert_minus_updated_minus_at } from "./alert_minus_updated_minus_at";
import { alert_minus_url } from "./alert_minus_url";
import { code_minus_scanning_minus_alert_minus_dismissed_minus_comment } from "./code_minus_scanning_minus_alert_minus_dismissed_minus_comment";
import { code_minus_scanning_minus_alert_minus_dismissed_minus_reason } from "./code_minus_scanning_minus_alert_minus_dismissed_minus_reason";
import { code_minus_scanning_minus_alert_minus_instance } from "./code_minus_scanning_minus_alert_minus_instance";
import { code_minus_scanning_minus_alert_minus_rule } from "./code_minus_scanning_minus_alert_minus_rule";
import { code_minus_scanning_minus_alert_minus_state } from "./code_minus_scanning_minus_alert_minus_state";
import { code_minus_scanning_minus_analysis_minus_tool } from "./code_minus_scanning_minus_analysis_minus_tool";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

export type code_minus_scanning_minus_alert = {
  number: alert_minus_number;
  created_at: alert_minus_created_minus_at;
  updated_at?: alert_minus_updated_minus_at;
  url: alert_minus_url;
  html_url: alert_minus_html_minus_url;
  instances_url: alert_minus_instances_minus_url;
  state: code_minus_scanning_minus_alert_minus_state;
  fixed_at?: alert_minus_fixed_minus_at;
  dismissed_by: nullable_minus_simple_minus_user;
  dismissed_at: alert_minus_dismissed_minus_at;
  dismissed_reason: code_minus_scanning_minus_alert_minus_dismissed_minus_reason;
  dismissed_comment?: code_minus_scanning_minus_alert_minus_dismissed_minus_comment;
  rule: code_minus_scanning_minus_alert_minus_rule;
  tool: code_minus_scanning_minus_analysis_minus_tool;
  most_recent_instance: code_minus_scanning_minus_alert_minus_instance;
};
