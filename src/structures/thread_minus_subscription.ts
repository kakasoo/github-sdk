import { tags } from "typia";

/**
 * Thread Subscription
 *
 * @title Thread Subscription
 */
export type thread_minus_subscription = {
  subscribed: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  ignored: boolean;
  reason: string | null;
  created_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2012-10-06T21:34:12Z";
        }>)
    | null;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/notifications/threads/1/subscription";
    }>;
  thread_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/notifications/threads/1";
    }>;
  repository_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/1";
    }>;
};
