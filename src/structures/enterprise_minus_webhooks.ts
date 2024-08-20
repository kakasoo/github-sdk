import { tags } from "typia";

/**
 * An enterprise on GitHub. Webhook payloads contain the `enterprise` property when the webhook is configured
 * on an enterprise account or an organization that's part of an enterprise account. For more information,
 * see "[About enterprise accounts](https://docs.github.com/admin/overview/about-enterprise-accounts)."
 *
 * @title Enterprise
 */
export type enterprise_minus_webhooks = {
  /**
   * A short description of the enterprise.
   */
  description?: string | null;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/enterprises/octo-business";
    }>;
  /**
   * The enterprise's website URL.
   */
  website_url?: (string & tags.Format<"uri">) | null;
  /**
   * Unique identifier of the enterprise
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOlJlcG9zaXRvcnkxMjk2MjY5";
    }>;
  /**
   * The name of the enterprise.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Octo Business";
    }>;
  /**
   * The slug url identifier for the enterprise.
   */
  slug: string &
    tags.JsonSchemaPlugin<{
      example: "octo-business";
    }>;
  created_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2019-01-26T19:01:12Z";
        }>)
    | null;
  updated_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2019-01-26T19:14:43Z";
        }>)
    | null;
  avatar_url: string & tags.Format<"uri">;
};
