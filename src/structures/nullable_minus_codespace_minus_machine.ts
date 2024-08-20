import { tags } from "typia";

/**
 * A description of the machine powering a codespace.
 *
 * @title Codespace machine
 */
export type nullable_minus_codespace_minus_machine = {
  /**
   * The name of the machine.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "standardLinux";
    }>;
  /**
   * The display name of the machine includes cores, memory, and storage.
   */
  display_name: string &
    tags.JsonSchemaPlugin<{
      example: "4 cores, 16 GB RAM, 64 GB storage";
    }>;
  /**
   * The operating system of the machine.
   */
  operating_system: string &
    tags.JsonSchemaPlugin<{
      example: "linux";
    }>;
  /**
   * How much storage is available to the codespace.
   */
  storage_in_bytes: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 68719476736;
    }>;
  /**
   * How much memory is available to the codespace.
   */
  memory_in_bytes: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 17179869184;
    }>;
  /**
   * How many cores are available to the codespace.
   */
  cpus: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 4;
    }>;
  /**
   * Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
   */
  prebuild_availability: "none" | "ready" | "in_progress" | null;
} | null;
