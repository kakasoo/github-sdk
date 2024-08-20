import { tags } from "typia";

/**
 * Workflow Usage
 *
 * @title Workflow Usage
 */
export type workflow_minus_usage = {
  billable: {
    UBUNTU?: {
      total_ms?: number & tags.Type<"int32">;
    };
    MACOS?: {
      total_ms?: number & tags.Type<"int32">;
    };
    WINDOWS?: {
      total_ms?: number & tags.Type<"int32">;
    };
  };
};
