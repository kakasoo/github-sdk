import { tags } from "typia";

/**
 * @title Label
 */
export type webhooks_label = {
  /**
   * 6-character hex code, without the leading #, identifying the color
   */
  color: string;
  default: boolean;
  description: string | null;
  id: number & tags.Type<"int32">;
  /**
   * The name of the label.
   */
  name: string;
  node_id: string;
  /**
   * URL for the label
   */
  url: string & tags.Format<"uri">;
};
