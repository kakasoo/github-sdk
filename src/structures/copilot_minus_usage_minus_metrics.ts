import { tags } from "typia";

/**
 * Summary of Copilot usage.
 *
 * @title Copilot Usage Metrics
 */
export type copilot_minus_usage_minus_metrics = {
  /**
   * The date for which the usage metrics are reported, in `YYYY-MM-DD` format.
   */
  day: string & tags.Format<"date">;
  /**
   * The total number of Copilot code completion suggestions shown to users.
   */
  total_suggestions_count?: number & tags.Type<"int32">;
  /**
   * The total number of Copilot code completion suggestions accepted by users.
   */
  total_acceptances_count?: number & tags.Type<"int32">;
  /**
   * The total number of lines of code completions suggested by Copilot.
   */
  total_lines_suggested?: number & tags.Type<"int32">;
  /**
   * The total number of lines of code completions accepted by users.
   */
  total_lines_accepted?: number & tags.Type<"int32">;
  /**
   * The total number of users who were shown Copilot code completion suggestions during the day specified.
   */
  total_active_users?: number & tags.Type<"int32">;
  /**
   * The total instances of users who accepted code suggested by Copilot Chat in the IDE (panel and inline).
   */
  total_chat_acceptances?: number & tags.Type<"int32">;
  /**
   * The total number of chat turns (prompt and response pairs) sent between users and Copilot Chat in the IDE.
   */
  total_chat_turns?: number & tags.Type<"int32">;
  /**
   * The total number of users who interacted with Copilot Chat in the IDE during the day specified.
   */
  total_active_chat_users?: number & tags.Type<"int32">;
  /**
   * Breakdown of Copilot code completions usage by language and editor
   */
  breakdown:
    | {
        /**
         * The language in which Copilot suggestions were shown to users in the specified editor.
         */
        language?: string;
        /**
         * The editor in which Copilot suggestions were shown to users for the specified language.
         */
        editor?: string;
        /**
         * The number of Copilot suggestions shown to users in the editor specified during the day specified.
         */
        suggestions_count?: number & tags.Type<"int32">;
        /**
         * The number of Copilot suggestions accepted by users in the editor specified during the day specified.
         */
        acceptances_count?: number & tags.Type<"int32">;
        /**
         * The number of lines of code suggested by Copilot in the editor specified during the day specified.
         */
        lines_suggested?: number & tags.Type<"int32">;
        /**
         * The number of lines of code accepted by users in the editor specified during the day specified.
         */
        lines_accepted?: number & tags.Type<"int32">;
        /**
         * The number of users who were shown Copilot completion suggestions in the editor specified during the day specified.
         */
        active_users?: number & tags.Type<"int32">;
      }[]
    | null;
};
