import { tags } from "typia";

/**
 * Repository Identifier
 *
 * @title Repository Identifier
 */
export type code_minus_scanning_minus_variant_minus_analysis_minus_repository =
  {
    /**
     * A unique identifier of the repository.
     */
    id: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 1296269;
      }>;
    /**
     * The name of the repository.
     */
    name: string &
      tags.JsonSchemaPlugin<{
        example: "Hello-World";
      }>;
    /**
     * The full, globally unique, name of the repository.
     */
    full_name: string &
      tags.JsonSchemaPlugin<{
        example: "octocat/Hello-World";
      }>;
    /**
     * Whether the repository is private.
     */
    private: boolean;
    stargazers_count: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 80;
      }>;
    updated_at:
      | (string &
          tags.Format<"date-time"> &
          tags.JsonSchemaPlugin<{
            example: "2011-01-26T19:14:43Z";
          }>)
      | null;
  };
