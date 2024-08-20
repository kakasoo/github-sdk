import { tags } from "typia";

export namespace IApiAppHookDeliveriesAttempts {
  export type PostHeader = {
    delivery_id: number & tags.Type<"int32">;
  };
}
