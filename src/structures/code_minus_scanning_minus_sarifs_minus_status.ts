import { tags } from "typia";

export type code_minus_scanning_minus_sarifs_minus_status = {
  /**
   * `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed.
   */
  processing_status?: "pending" | "complete" | "failed";
  /**
   * The REST API URL for getting the analyses associated with the upload.
   */
  analyses_url?:
    | (string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * Any errors that ocurred during processing of the delivery.
   */
  errors?:
    | (string[] &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
};
