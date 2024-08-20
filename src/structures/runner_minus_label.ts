import { tags } from "typia";

/**
 * A label for a self hosted runner
 *
 * @title Self hosted runner label
 */
export type runner_minus_label = {
  /**
   * Unique identifier of the label.
   */
  id?: number & tags.Type<"int32">;
  /**
   * Name of the label.
   */
  name: string;
  /**
   * The type of label. Read-only labels are applied automatically when the runner is configured.
   */
  type?: "read-only" | "custom";
};
