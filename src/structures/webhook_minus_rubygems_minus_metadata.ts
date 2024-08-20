/**
 * @title Ruby Gems metadata
 */
export type webhook_minus_rubygems_minus_metadata = {
  name?: string;
  description?: string;
  readme?: string;
  homepage?: string;
  version_info?: {
    version?: string;
  };
  platform?: string;
  metadata?: {
    [key: string]: string;
  };
  repo?: string;
  dependencies?: {
    [key: string]: string;
  }[];
  commit_oid?: string;
};
