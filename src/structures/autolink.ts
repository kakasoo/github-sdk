import { tags } from "typia";

/**
 * An autolink reference.
 *
 * @title Autolink reference
 */
export type autolink = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3;
    }>;
  /**
   * The prefix of a key that is linkified.
   */
  key_prefix: string &
    tags.JsonSchemaPlugin<{
      example: "TICKET-";
    }>;
  /**
   * A template for the target URL that is generated if a key was found.
   */
  url_template: string &
    tags.JsonSchemaPlugin<{
      example: "https://example.com/TICKET?query=<num>";
    }>;
  /**
   * Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.
   */
  is_alphanumeric: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
};
