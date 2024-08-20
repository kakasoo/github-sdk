import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { full_minus_repository } from "./full_minus_repository";
import { nullable_minus_codespace_minus_machine } from "./nullable_minus_codespace_minus_machine";

/**
 * A codespace.
 *
 * @title Codespace
 */
export type codespace_minus_with_minus_full_minus_repository = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 1;
    }>;
  /**
   * Automatically generated name of this codespace.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "monalisa-octocat-hello-world-g4wpq6h95q";
    }>;
  /**
   * Display name for this codespace.
   */
  display_name?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "bookish space pancake";
        }>)
    | null;
  /**
   * UUID identifying this codespace's environment.
   */
  environment_id:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "26a7c758-7299-4a73-b978-5a92a7ae98a0";
        }>)
    | null;
  owner: simple_minus_user;
  billable_owner: simple_minus_user;
  repository: full_minus_repository;
  machine: nullable_minus_codespace_minus_machine;
  /**
   * Path to devcontainer.json from repo root used to create Codespace.
   */
  devcontainer_path?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: ".devcontainer/example/devcontainer.json";
        }>)
    | null;
  /**
   * Whether the codespace was created from a prebuild.
   */
  prebuild:
    | (boolean &
        tags.JsonSchemaPlugin<{
          example: false;
        }>)
    | null;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:01:12Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:01:12Z";
    }>;
  /**
   * Last known time this codespace was started.
   */
  last_used_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:01:12Z";
    }>;
  /**
   * State of this codespace.
   */
  state:
    | "Unknown"
    | "Created"
    | "Queued"
    | "Provisioning"
    | "Available"
    | "Awaiting"
    | "Unavailable"
    | "Deleted"
    | "Moved"
    | "Shutdown"
    | "Archived"
    | "Starting"
    | "ShuttingDown"
    | "Failed"
    | "Exporting"
    | "Updating"
    | "Rebuilding";
  /**
   * API URL for this codespace.
   */
  url: string & tags.Format<"uri">;
  /**
   * Details about the codespace's git repository.
   */
  git_status: {
    /**
     * The number of commits the local repository is ahead of the remote.
     */
    ahead?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 0;
      }>;
    /**
     * The number of commits the local repository is behind the remote.
     */
    behind?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 0;
      }>;
    /**
     * Whether the local repository has unpushed changes.
     */
    has_unpushed_changes?: boolean;
    /**
     * Whether the local repository has uncommitted changes.
     */
    has_uncommitted_changes?: boolean;
    /**
     * The current branch (or SHA if in detached HEAD state) of the local repository.
     */
    ref?: string &
      tags.JsonSchemaPlugin<{
        example: "main";
      }>;
  };
  /**
   * The initally assigned location of a new codespace.
   */
  location: "EastUs" | "SouthEastAsia" | "WestEurope" | "WestUs2";
  /**
   * The number of minutes of inactivity after which this codespace will be automatically stopped.
   */
  idle_timeout_minutes:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 60;
        }>)
    | null;
  /**
   * URL to access this codespace on the web.
   */
  web_url: string & tags.Format<"uri">;
  /**
   * API URL to access available alternate machine types for this codespace.
   */
  machines_url: string & tags.Format<"uri">;
  /**
   * API URL to start this codespace.
   */
  start_url: string & tags.Format<"uri">;
  /**
   * API URL to stop this codespace.
   */
  stop_url: string & tags.Format<"uri">;
  /**
   * API URL to publish this codespace to a new repository.
   */
  publish_url?: (string & tags.Format<"uri">) | null;
  /**
   * API URL for the Pull Request associated with this codespace, if any.
   */
  pulls_url: (string & tags.Format<"uri">) | null;
  recent_folders: string[];
  runtime_constraints?: {
    /**
     * The privacy settings a user can select from when forwarding a port.
     */
    allowed_port_privacy_settings?: string[] | null;
  };
  /**
   * Whether or not a codespace has a pending async operation. This would mean that the codespace is temporarily unavailable. The only thing that you can do with a codespace in this state is delete it.
   */
  pending_operation?: boolean | null;
  /**
   * Text to show user when codespace is disabled by a pending operation
   */
  pending_operation_disabled_reason?: string | null;
  /**
   * Text to show user when codespace idle timeout minutes has been overriden by an organization policy
   */
  idle_timeout_notice?: string | null;
  /**
   * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
   */
  retention_period_minutes?:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 60;
        }>)
    | null;
  /**
   * When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at"
   */
  retention_expires_at?:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T20:01:12Z";
        }>)
    | null;
};
