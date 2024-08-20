import { tags } from "typia";

/**
 * A list of directory items
 *
 * @title Content Directory
 */
export type content_minus_directory = {
  type: "dir" | "file" | "submodule" | "symlink";
  size: number & tags.Type<"int32">;
  name: string;
  path: string;
  content?: string;
  sha: string;
  url: string & tags.Format<"uri">;
  git_url: (string & tags.Format<"uri">) | null;
  html_url: (string & tags.Format<"uri">) | null;
  download_url: (string & tags.Format<"uri">) | null;
  _links: {
    git: (string & tags.Format<"uri">) | null;
    html: (string & tags.Format<"uri">) | null;
    self: string & tags.Format<"uri">;
  };
}[];
