import { tags } from "typia";

/**
 * The GitHub App installation. Webhook payloads contain the `installation` property when the event is configured
 * for and sent to a GitHub App. For more information,
 * see "[Using webhooks with GitHub Apps](https://docs.github.com/apps/creating-github-apps/registering-a-github-app/using-webhooks-with-github-apps)."
 *
 * @title Simple Installation
 */
export type simple_minus_installation = {
  /**
   * The ID of the installation.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  /**
   * The global node ID of the installation.
   */
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDQ6VXNlcjU4MzIzMQ==";
    }>;
};
