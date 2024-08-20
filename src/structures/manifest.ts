import { tags } from "typia";

import { dependency } from "./dependency";
import { metadata } from "./metadata";

export type manifest = {
  /**
   * The name of the manifest.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "package-lock.json";
    }>;
  file?: {
    /**
     * The path of the manifest file relative to the root of the Git repository.
     */
    source_location?: string &
      tags.JsonSchemaPlugin<{
        example: "/src/build/package-lock.json";
      }>;
  };
  metadata?: metadata;
  /**
   * A collection of resolved package dependencies.
   */
  resolved?: {
    [key: string]: dependency;
  };
};
