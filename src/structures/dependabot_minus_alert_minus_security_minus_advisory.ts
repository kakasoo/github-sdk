import { tags } from "typia";

import { dependabot_minus_alert_minus_security_minus_vulnerability } from "./dependabot_minus_alert_minus_security_minus_vulnerability";

/**
 * Details for the GitHub Security Advisory.
 */
export type dependabot_minus_alert_minus_security_minus_advisory = {
  /**
   * The unique GitHub Security Advisory ID assigned to the advisory.
   */
  ghsa_id: string &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The unique CVE ID assigned to the advisory.
   */
  cve_id:
    | (string &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * A short, plain text summary of the advisory.
   */
  summary: string &
    tags.MaxLength<1024> &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * A long-form Markdown-supported description of the advisory.
   */
  description: string &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * Vulnerable version range information for the advisory.
   */
  vulnerabilities: dependabot_minus_alert_minus_security_minus_vulnerability[] &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The severity of the advisory.
   */
  severity: "low" | "medium" | "high" | "critical";
  /**
   * Details for the advisory pertaining to the Common Vulnerability Scoring System.
   */
  cvss: {
    /**
     * The overall CVSS score of the advisory.
     */
    score: number &
      tags.Minimum<0> &
      tags.Maximum<10> &
      tags.JsonSchemaPlugin<{
        readOnly: true;
      }>;
    /**
     * The full CVSS vector string for the advisory.
     */
    vector_string:
      | (string &
          tags.JsonSchemaPlugin<{
            readOnly: true;
          }>)
      | null;
  };
  /**
   * Details for the advisory pertaining to Common Weakness Enumeration.
   */
  cwes: {
    /**
     * The unique CWE ID.
     */
    cwe_id: string &
      tags.JsonSchemaPlugin<{
        readOnly: true;
      }>;
    /**
     * The short, plain text name of the CWE.
     */
    name: string &
      tags.JsonSchemaPlugin<{
        readOnly: true;
      }>;
  }[] &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * Values that identify this advisory among security information sources.
   */
  identifiers: {
    /**
     * The type of advisory identifier.
     */
    type: "CVE" | "GHSA";
    /**
     * The value of the advisory identifer.
     */
    value: string &
      tags.JsonSchemaPlugin<{
        readOnly: true;
      }>;
  }[] &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * Links to additional advisory information.
   */
  references: {
    /**
     * The URL of the reference.
     */
    url: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        readOnly: true;
      }>;
  }[] &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The time that the advisory was published in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  published_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The time that the advisory was last modified in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The time that the advisory was withdrawn in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  withdrawn_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
};
