import { tags } from "typia";

/**
 * An artifact
 *
 * @title Artifact
 */
export type artifact = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOkNoZWNrU3VpdGU1";
    }>;
  /**
   * The name of the artifact.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "AdventureWorks.Framework";
    }>;
  /**
   * The size in bytes of the artifact.
   */
  size_in_bytes: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 12345;
    }>;
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/actions/artifacts/5";
    }>;
  archive_download_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/actions/artifacts/5/zip";
    }>;
  /**
   * Whether or not the artifact has expired.
   */
  expired: boolean;
  created_at: (string & tags.Format<"date-time">) | null;
  expires_at: (string & tags.Format<"date-time">) | null;
  updated_at: (string & tags.Format<"date-time">) | null;
  workflow_run?: {
    id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 10;
      }>;
    repository_id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 42;
      }>;
    head_repository_id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 42;
      }>;
    head_branch?: string &
      tags.JsonSchemaPlugin<{
        example: "main";
      }>;
    head_sha?: string &
      tags.JsonSchemaPlugin<{
        example: "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d";
      }>;
  } | null;
};
