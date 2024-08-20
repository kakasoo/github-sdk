import { tags } from "typia";

/**
 * A list of errors found in a repo's CODEOWNERS file
 *
 * @title CODEOWNERS errors
 */
export type codeowners_minus_errors = {
  errors: {
    /**
     * The line number where this errors occurs.
     */
    line: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 7;
      }>;
    /**
     * The column number where this errors occurs.
     */
    column: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 3;
      }>;
    /**
     * The contents of the line where the error occurs.
     */
    source?: string &
      tags.JsonSchemaPlugin<{
        example: "* user";
      }>;
    /**
     * The type of error.
     */
    kind: string &
      tags.JsonSchemaPlugin<{
        example: "Invalid owner";
      }>;
    /**
     * Suggested action to fix the error. This will usually be `null`, but is provided for some common errors.
     */
    suggestion?:
      | (string &
          tags.JsonSchemaPlugin<{
            example: "The pattern `/` will never match anything, did you mean `*` instead?";
          }>)
      | null;
    /**
     * A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting).
     */
    message: string &
      tags.JsonSchemaPlugin<{
        example: "Invalid owner on line 7:\n\n  * user\n    ^";
      }>;
    /**
     * The path of the file where the error occured.
     */
    path: string &
      tags.JsonSchemaPlugin<{
        example: ".github/CODEOWNERS";
      }>;
  }[];
};
