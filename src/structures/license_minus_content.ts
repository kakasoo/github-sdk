import { tags } from "typia";

import { nullable_minus_license_minus_simple } from "./nullable_minus_license_minus_simple";

/**
 * License Content
 *
 * @title License Content
 */
export type license_minus_content = {
  name: string;
  path: string;
  sha: string;
  size: number & tags.Type<"int32">;
  url: string & tags.Format<"uri">;
  html_url: (string & tags.Format<"uri">) | null;
  git_url: (string & tags.Format<"uri">) | null;
  download_url: (string & tags.Format<"uri">) | null;
  type: string;
  content: string;
  encoding: string;
  _links: {
    git: (string & tags.Format<"uri">) | null;
    html: (string & tags.Format<"uri">) | null;
    self: string & tags.Format<"uri">;
  };
  license: nullable_minus_license_minus_simple;
};
