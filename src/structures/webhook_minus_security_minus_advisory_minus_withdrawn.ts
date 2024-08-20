import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title security_advisory withdrawn event
 */
export type webhook_minus_security_minus_advisory_minus_withdrawn = {
  action: "withdrawn";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  /**
   * The details of the security advisory, including summary, description, and severity.
   */
  security_advisory: {
    cvss: {
      score: number;
      vector_string: string | null;
    };
    cwes: {
      cwe_id: string;
      name: string;
    }[];
    description: string;
    ghsa_id: string;
    identifiers: {
      type: string;
      value: string;
    }[];
    published_at: string;
    references: {
      url: string & tags.Format<"uri">;
    }[];
    severity: string;
    summary: string;
    updated_at: string;
    vulnerabilities: {
      first_patched_version: {
        identifier: string;
      } | null;
      package: {
        ecosystem: string;
        name: string;
      };
      severity: string;
      vulnerable_version_range: string;
    }[];
    withdrawn_at: string;
  };
  sender?: simple_minus_user_minus_webhooks;
};
