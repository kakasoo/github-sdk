import { code_minus_scanning_minus_alert_minus_classification } from "./code_minus_scanning_minus_alert_minus_classification";
import { code_minus_scanning_minus_alert_minus_environment } from "./code_minus_scanning_minus_alert_minus_environment";
import { code_minus_scanning_minus_alert_minus_location } from "./code_minus_scanning_minus_alert_minus_location";
import { code_minus_scanning_minus_alert_minus_state } from "./code_minus_scanning_minus_alert_minus_state";
import { code_minus_scanning_minus_analysis_minus_analysis_minus_key } from "./code_minus_scanning_minus_analysis_minus_analysis_minus_key";
import { code_minus_scanning_minus_analysis_minus_category } from "./code_minus_scanning_minus_analysis_minus_category";
import { code_minus_scanning_minus_ref } from "./code_minus_scanning_minus_ref";

export type code_minus_scanning_minus_alert_minus_instance = {
  ref?: code_minus_scanning_minus_ref;
  analysis_key?: code_minus_scanning_minus_analysis_minus_analysis_minus_key;
  environment?: code_minus_scanning_minus_alert_minus_environment;
  category?: code_minus_scanning_minus_analysis_minus_category;
  state?: code_minus_scanning_minus_alert_minus_state;
  commit_sha?: string;
  message?: {
    text?: string;
  };
  location?: code_minus_scanning_minus_alert_minus_location;
  html_url?: string;
  /**
   * Classifications that have been applied to the file that triggered the alert.
   * For example identifying it as documentation, or a generated file.
   */
  classifications?: code_minus_scanning_minus_alert_minus_classification[];
};
