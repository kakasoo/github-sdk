import { tags } from "typia";

import { code_minus_scanning_minus_analysis_minus_sarif_minus_id } from "./code_minus_scanning_minus_analysis_minus_sarif_minus_id";

export type code_minus_scanning_minus_sarifs_minus_receipt = {
  id?: code_minus_scanning_minus_analysis_minus_sarif_minus_id;
  /**
   * The REST API URL for checking the status of the upload.
   */
  url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
};
