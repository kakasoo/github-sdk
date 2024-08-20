import { tags } from "typia";

/**
 * Porter Author
 *
 * @title Porter Author
 */
export type porter_minus_author = {
  id: number & tags.Type<"int32">;
  remote_id: string;
  remote_name: string;
  email: string;
  name: string;
  url: string & tags.Format<"uri">;
  import_url: string & tags.Format<"uri">;
};
