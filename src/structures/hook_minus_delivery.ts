import { tags } from "typia";

/**
 * Delivery made by a webhook.
 *
 * @title Webhook delivery
 */
export type hook_minus_delivery = {
  /**
   * Unique identifier of the delivery.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  /**
   * Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event).
   */
  guid: string &
    tags.JsonSchemaPlugin<{
      example: "58474f00-b361-11eb-836d-0e4f3503ccbe";
    }>;
  /**
   * Time when the delivery was delivered.
   */
  delivered_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2021-05-12T20:33:44Z";
    }>;
  /**
   * Whether the delivery is a redelivery.
   */
  redelivery: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * Time spent delivering.
   */
  duration: number &
    tags.JsonSchemaPlugin<{
      example: 0.03;
    }>;
  /**
   * Description of the status of the attempted delivery
   */
  status: string &
    tags.JsonSchemaPlugin<{
      example: "failed to connect";
    }>;
  /**
   * Status code received when delivery was made.
   */
  status_code: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 502;
    }>;
  /**
   * The event that triggered the delivery.
   */
  event: string &
    tags.JsonSchemaPlugin<{
      example: "issues";
    }>;
  /**
   * The type of activity for the event that triggered the delivery.
   */
  action:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "opened";
        }>)
    | null;
  /**
   * The id of the GitHub App installation associated with this event.
   */
  installation_id:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 123;
        }>)
    | null;
  /**
   * The id of the repository associated with this event.
   */
  repository_id:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 123;
        }>)
    | null;
  /**
   * Time when the webhook delivery was throttled.
   */
  throttled_at?:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2021-05-12T20:33:44Z";
        }>)
    | null;
  /**
   * The URL target of the delivery.
   */
  url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://www.example.com";
    }>;
  request: {
    /**
     * The request headers sent with the webhook delivery.
     */
    headers: {} | null;
    /**
     * The webhook payload.
     */
    payload: {} | null;
  };
  response: {
    /**
     * The response headers received when the delivery was made.
     */
    headers: {} | null;
    /**
     * The response payload received.
     */
    payload:
      | (string &
          tags.JsonSchemaPlugin<{
            additionalProperties: true;
          }>)
      | null;
  };
};
