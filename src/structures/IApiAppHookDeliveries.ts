import { tags } from "typia";

export namespace IApiAppHookDeliveries {
  export type GetHeader = {
    delivery_id: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    redelivery?: boolean;
  };
}
