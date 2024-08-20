import { tags } from "typia";

/**
 * An array of repository objects, which were added to the installation.
 */
export type webhooks_repositories_added = {
  full_name: string;
  /**
   * Unique identifier of the repository
   */
  id: number & tags.Type<"int32">;
  /**
   * The name of the repository.
   */
  name: string;
  node_id: string;
  /**
   * Whether the repository is private or public.
   */
  private: boolean;
}[];
