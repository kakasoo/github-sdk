import { tags } from "typia";

export namespace IApiOrgsHooksDeliveries {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery.
     */
    hook_id: number & tags.Type<"int32">;
    delivery_id: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    redelivery?: boolean;
  };
}
