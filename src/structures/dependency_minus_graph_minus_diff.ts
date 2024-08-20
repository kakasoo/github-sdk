import { tags } from "typia";

/**
 * A diff of the dependencies between two commits.
 *
 * @title Dependency Graph Diff
 */
export type dependency_minus_graph_minus_diff = {
  change_type: "added" | "removed";
  manifest: string &
    tags.JsonSchemaPlugin<{
      example: "path/to/package-lock.json";
    }>;
  ecosystem: string &
    tags.JsonSchemaPlugin<{
      example: "npm";
    }>;
  name: string &
    tags.JsonSchemaPlugin<{
      example: "@actions/core";
    }>;
  version: string &
    tags.JsonSchemaPlugin<{
      example: "1.0.0";
    }>;
  package_url:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "pkg:/npm/%40actions/core@1.1.0";
        }>)
    | null;
  license:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "MIT";
        }>)
    | null;
  source_repository_url:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "https://github.com/github/actions";
        }>)
    | null;
  vulnerabilities: {
    severity: string &
      tags.JsonSchemaPlugin<{
        example: "critical";
      }>;
    advisory_ghsa_id: string &
      tags.JsonSchemaPlugin<{
        example: "GHSA-rf4j-j272-fj86";
      }>;
    advisory_summary: string &
      tags.JsonSchemaPlugin<{
        example: "A summary of the advisory.";
      }>;
    advisory_url: string &
      tags.JsonSchemaPlugin<{
        example: "https://github.com/advisories/GHSA-rf4j-j272-fj86";
      }>;
  }[];
  /**
   * Where the dependency is utilized. `development` means that the dependency is only utilized in the development environment. `runtime` means that the dependency is utilized at runtime and in the development environment.
   */
  scope: "unknown" | "runtime" | "development";
}[];
