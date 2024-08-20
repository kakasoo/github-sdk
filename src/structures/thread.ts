import { tags } from "typia";

import { minimal_minus_repository } from "./minimal_minus_repository";

/**
 * Thread
 *
 * @title Thread
 */
export type thread = {
  id: string;
  repository: minimal_minus_repository;
  subject: {
    title: string;
    url: string;
    latest_comment_url: string;
    type: string;
  };
  reason: string;
  unread: boolean;
  updated_at: string;
  last_read_at: string | null;
  url: string;
  subscription_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/notifications/threads/2/subscription";
    }>;
};
