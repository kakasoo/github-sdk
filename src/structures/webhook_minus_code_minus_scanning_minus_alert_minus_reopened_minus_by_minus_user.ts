import { tags } from "typia";

import { webhooks_code_scanning_commit_oid } from "./webhooks_code_scanning_commit_oid";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { webhooks_code_scanning_ref } from "./webhooks_code_scanning_ref";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title code_scanning_alert reopened_by_user event
 */
export type webhook_minus_code_minus_scanning_minus_alert_minus_reopened_minus_by_minus_user =
  {
    action: "reopened_by_user";
    /**
     * The code scanning alert involved in the event.
     */
    alert: {
      /**
       * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ.`
       */
      created_at: string & tags.Format<"date-time">;
      /**
       * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      dismissed_at: any | null;
      dismissed_by: any | null;
      /**
       * The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`.
       */
      dismissed_reason: any | null;
      /**
       * The GitHub URL of the alert resource.
       */
      html_url: string & tags.Format<"uri">;
      /**
       * @title Alert Instance
       */
      most_recent_instance?: {
        /**
         * Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name.
         */
        analysis_key: string;
        /**
         * Identifies the configuration under which the analysis was executed.
         */
        category?: string;
        classifications?: string[];
        commit_sha?: string;
        /**
         * Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed.
         */
        environment: string;
        location?: {
          end_column?: number & tags.Type<"int32">;
          end_line?: number & tags.Type<"int32">;
          path?: string;
          start_column?: number & tags.Type<"int32">;
          start_line?: number & tags.Type<"int32">;
        };
        message?: {
          text?: string;
        };
        /**
         * The full Git reference, formatted as `refs/heads/<branch name>`.
         */
        ref: string;
        /**
         * State of a code scanning alert.
         */
        state: "open" | "dismissed" | "fixed";
      } | null;
      /**
       * The code scanning alert number.
       */
      number: number & tags.Type<"int32">;
      rule: {
        /**
         * A short description of the rule used to detect the alert.
         */
        description: string;
        /**
         * A unique identifier for the rule used to detect the alert.
         */
        id: string;
        /**
         * The severity of the alert.
         */
        severity: "none" | "note" | "warning" | "error" | null;
      };
      /**
       * State of a code scanning alert.
       */
      state: "open" | "fixed";
      tool: {
        /**
         * The name of the tool used to generate the code scanning analysis alert.
         */
        name: string;
        /**
         * The version of the tool used to detect the alert.
         */
        version: string | null;
      };
      url: string & tags.Format<"uri">;
    };
    commit_oid: webhooks_code_scanning_commit_oid;
    enterprise?: enterprise_minus_webhooks;
    installation?: simple_minus_installation;
    organization?: organization_minus_simple_minus_webhooks;
    ref: webhooks_code_scanning_ref;
    repository: repository_minus_webhooks;
    sender: simple_minus_user_minus_webhooks;
  };
