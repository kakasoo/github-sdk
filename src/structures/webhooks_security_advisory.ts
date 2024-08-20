import { tags } from "typia";

/**
 * The details of the security advisory, including summary, description, and severity.
 */
export type webhooks_security_advisory = {
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
  withdrawn_at: string | null;
};
