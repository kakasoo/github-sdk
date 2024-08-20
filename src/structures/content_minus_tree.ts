import { tags } from "typia";

/**
 * Content Tree
 *
 * @title Content Tree
 */
export type content_minus_tree = {
  type: string;
  size: number & tags.Type<"int32">;
  name: string;
  path: string;
  sha: string;
  url: string & tags.Format<"uri">;
  git_url: (string & tags.Format<"uri">) | null;
  html_url: (string & tags.Format<"uri">) | null;
  download_url: (string & tags.Format<"uri">) | null;
  entries?: {
    type: string;
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
  _links: {
    git: (string & tags.Format<"uri">) | null;
    html: (string & tags.Format<"uri">) | null;
    self: string & tags.Format<"uri">;
  };
};
