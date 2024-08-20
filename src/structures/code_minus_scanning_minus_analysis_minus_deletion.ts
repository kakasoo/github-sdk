import { tags } from "typia";

/**
 * Successful deletion of a code scanning analysis
 *
 * @title Analysis deletion
 */
export type code_minus_scanning_minus_analysis_minus_deletion = {
  /**
   * Next deletable analysis in chain, without last analysis deletion confirmation
   */
  next_analysis_url:
    | (string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * Next deletable analysis in chain, with last analysis deletion confirmation
   */
  confirm_delete_url:
    | (string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
};
