import { tags } from "typia";

/**
 * Generated name and body describing a release
 *
 * @title Generated Release Notes Content
 */
export type release_minus_notes_minus_content = {
  /**
   * The generated name of the release
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Release v1.0.0 is now available!";
    }>;
  /**
   * The generated body describing the contents of the release supporting markdown formatting
   */
  body: string;
};
