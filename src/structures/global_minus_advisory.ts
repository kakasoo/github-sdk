import { tags } from "typia";

import { vulnerability } from "./vulnerability";
import { simple_minus_user } from "./simple_minus_user";
import { security_minus_advisory_minus_credit_minus_types } from "./security_minus_advisory_minus_credit_minus_types";

/**
 * A GitHub Security Advisory.
 */
export type global_minus_advisory = {
  /**
   * The GitHub Security Advisory ID.
   */
  ghsa_id: string &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The Common Vulnerabilities and Exposures (CVE) ID.
   */
  cve_id:
    | (string &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * The API URL for the advisory.
   */
  url: string &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The URL for the advisory.
   */
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The API URL for the repository advisory.
   */
  repository_advisory_url:
    | (string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * A short summary of the advisory.
   */
  summary: string & tags.MaxLength<1024>;
  /**
   * A detailed description of what the advisory entails.
   */
  description: (string & tags.MaxLength<65535>) | null;
  /**
   * The type of advisory.
   */
  type: "reviewed" | "unreviewed" | "malware";
  /**
   * The severity of the advisory.
   */
  severity: "critical" | "high" | "medium" | "low" | "unknown";
  /**
   * The URL of the advisory's source code.
   */
  source_code_location: (string & tags.Format<"uri">) | null;
  identifiers:
    | ({
        /**
         * The type of identifier.
         */
        type: "CVE" | "GHSA";
        /**
         * The identifier value.
         */
        value: string;
      }[] &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  references: string[] | null;
  /**
   * The date and time of when the advisory was published, in ISO 8601 format.
   */
  published_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The date and time of when the advisory was last updated, in ISO 8601 format.
   */
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format.
   */
  github_reviewed_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format.
   * This field is only populated when the advisory is imported from the National Vulnerability Database.
   */
  nvd_published_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * The date and time of when the advisory was withdrawn, in ISO 8601 format.
   */
  withdrawn_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * The products and respective version ranges affected by the advisory.
   */
  vulnerabilities: vulnerability[] | null;
  cvss: {
    /**
     * The CVSS vector.
     */
    vector_string: string | null;
    /**
     * The CVSS score.
     */
    score:
      | (number &
          tags.Minimum<0> &
          tags.Maximum<10> &
          tags.JsonSchemaPlugin<{
            readOnly: true;
          }>)
      | null;
  } | null;
  cwes:
    | {
        /**
         * The Common Weakness Enumeration (CWE) identifier.
         */
        cwe_id: string;
        /**
         * The name of the CWE.
         */
        name: string &
          tags.JsonSchemaPlugin<{
            readOnly: true;
          }>;
      }[]
    | null;
  /**
   * The users who contributed to the advisory.
   */
  credits:
    | ({
        user: simple_minus_user;
        type: security_minus_advisory_minus_credit_minus_types;
      }[] &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
};
