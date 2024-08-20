import { tags } from "typia";

import { metadata } from "./metadata";
import { manifest } from "./manifest";

/**
 * Create a new snapshot of a repository's dependencies.
 *
 * @title snapshot
 */
export type snapshot = {
  /**
   * The version of the repository snapshot submission.
   */
  version: number & tags.Type<"int32">;
  job: {
    /**
     * The external ID of the job.
     */
    id: string &
      tags.JsonSchemaPlugin<{
        example: "5622a2b0-63f6-4732-8c34-a1ab27e102a11";
      }>;
    /**
     * Correlator provides a key that is used to group snapshots submitted over time. Only the "latest" submitted snapshot for a given combination of `job.correlator` and `detector.name` will be considered when calculating a repository's current dependencies. Correlator should be as unique as it takes to distinguish all detection runs for a given "wave" of CI workflow you run. If you're using GitHub Actions, a good default value for this could be the environment variables GITHUB_WORKFLOW and GITHUB_JOB concatenated together. If you're using a build matrix, then you'll also need to add additional key(s) to distinguish between each submission inside a matrix variation.
     */
    correlator: string &
      tags.JsonSchemaPlugin<{
        example: "yourworkflowname_yourjobname";
      }>;
    /**
     * The url for the job.
     */
    html_url?: string &
      tags.JsonSchemaPlugin<{
        example: "http://example.com/build";
      }>;
  };
  /**
   * The commit SHA associated with this dependency snapshot. Maximum length: 40 characters.
   */
  sha: string &
    tags.MinLength<40> &
    tags.MaxLength<40> &
    tags.JsonSchemaPlugin<{
      example: "ddc951f4b1293222421f2c8df679786153acf689";
    }>;
  /**
   * The repository branch that triggered this snapshot.
   */
  ref: string &
    tags.Pattern<"^refs/"> &
    tags.JsonSchemaPlugin<{
      example: "refs/heads/main";
    }>;
  /**
   * A description of the detector used.
   */
  detector: {
    /**
     * The name of the detector used.
     */
    name: string &
      tags.JsonSchemaPlugin<{
        example: "docker buildtime detector";
      }>;
    /**
     * The version of the detector used.
     */
    version: string &
      tags.JsonSchemaPlugin<{
        example: "1.0.0";
      }>;
    /**
     * The url of the detector used.
     */
    url: string &
      tags.JsonSchemaPlugin<{
        example: "http://example.com/docker-buildtimer-detector";
      }>;
  };
  metadata?: metadata;
  /**
   * A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies.
   */
  manifests?: {
    [key: string]: manifest;
  };
  /**
   * The time at which the snapshot was scanned.
   */
  scanned: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2020-06-13T14:52:50-05:00";
    }>;
};
