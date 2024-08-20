import { tags } from "typia";

/**
 * Api Overview
 *
 * @title Api Overview
 */
export type api_minus_overview = {
  verifiable_password_authentication: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  ssh_key_fingerprints?: {
    SHA256_RSA?: string;
    SHA256_DSA?: string;
    SHA256_ECDSA?: string;
    SHA256_ED25519?: string;
  };
  ssh_keys?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["ssh-ed25519 ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    }>;
  hooks?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  github_enterprise_importer?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  web?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  api?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  git?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  packages?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  pages?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  importer?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  actions?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  actions_macos?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  dependabot?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  copilot?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["192.0.2.1"];
    }>;
  domains?: {
    website?: (string &
      tags.JsonSchemaPlugin<{
        example: ["example.com"];
      }>)[];
    codespaces?: (string &
      tags.JsonSchemaPlugin<{
        example: ["example.com"];
      }>)[];
    copilot?: (string &
      tags.JsonSchemaPlugin<{
        example: ["example.com"];
      }>)[];
    packages?: (string &
      tags.JsonSchemaPlugin<{
        example: ["example.com"];
      }>)[];
    actions?: (string &
      tags.JsonSchemaPlugin<{
        example: ["example.com"];
      }>)[];
  };
};
