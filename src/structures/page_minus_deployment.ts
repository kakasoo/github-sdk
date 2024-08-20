import { tags } from "typia";

/**
 * The GitHub Pages deployment status.
 *
 * @title GitHub Pages
 */
export type page_minus_deployment = {
  /**
   * The ID of the GitHub Pages deployment. This is the Git SHA of the deployed commit.
   */
  id: (number & tags.Type<"int32">) | string;
  /**
   * The URI to monitor GitHub Pages deployment status.
   */
  status_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/pages/deployments/4fd754f7e594640989b406850d0bc8f06a121251";
    }>;
  /**
   * The URI to the deployed GitHub Pages.
   */
  page_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "hello-world.github.io";
    }>;
  /**
   * The URI to the deployed GitHub Pages preview.
   */
  preview_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "monalisa-1231a2312sa32-23sda74.drafts.github.io";
    }>;
};
