import { tags } from "typia";

export namespace IApiProjectsColumnsCardsMoves {
  export type PostHeader = {
    /**
     * The unique identifier of the card.
     */
    card_id: number & tags.Type<"int32">;
  };
}
