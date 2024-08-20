import { tags } from "typia";

import { security_minus_advisory_minus_credit_minus_types } from "./security_minus_advisory_minus_credit_minus_types";
import { security_minus_advisory_minus_ecosystems } from "./security_minus_advisory_minus_ecosystems";

export type repository_minus_advisory_minus_create = {
  /**
   * A short summary of the advisory.
   */
  summary: string & tags.MaxLength<1024>;
  /**
   * A detailed description of what the advisory impacts.
   */
  description: string & tags.MaxLength<65535>;
  /**
   * The Common Vulnerabilities and Exposures (CVE) ID.
   */
  cve_id?: string | null;
  /**
   * A product affected by the vulnerability detailed in a repository security advisory.
   */
  vulnerabilities: {
    /**
     * The name of the package affected by the vulnerability.
     */
    package: {
      ecosystem: security_minus_advisory_minus_ecosystems;
      /**
       * The unique package name within its ecosystem.
       */
      name?: string | null;
    };
    /**
     * The range of the package versions affected by the vulnerability.
     */
    vulnerable_version_range?: string | null;
    /**
     * The package version(s) that resolve the vulnerability.
     */
    patched_versions?: string | null;
    /**
     * The functions in the package that are affected.
     */
    vulnerable_functions?: string[] | null;
  }[];
  /**
   * A list of Common Weakness Enumeration (CWE) IDs.
   */
  cwe_ids?: string[] | null;
  /**
   * A list of users receiving credit for their participation in the security advisory.
   */
  credits?:
    | {
        /**
         * The username of the user credited.
         */
        login: string;
        type: security_minus_advisory_minus_credit_minus_types;
      }[]
    | null;
  /**
   * The severity of the advisory. You must choose between setting this field or `cvss_vector_string`.
   */
  severity?: "critical" | "high" | "medium" | "low" | null;
  /**
   * The CVSS vector that calculates the severity of the advisory. You must choose between setting this field or `severity`.
   */
  cvss_vector_string?: string | null;
  /**
   * Whether to create a temporary private fork of the repository to collaborate on a fix.
   */
  start_private_fork?: boolean;
};
