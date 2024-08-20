import { tags } from "typia";

/**
 * A schema for the SPDX JSON format returned by the Dependency Graph.
 *
 * @title Dependency Graph SPDX SBOM
 */
export type dependency_minus_graph_minus_spdx_minus_sbom = {
  sbom: {
    /**
     * The SPDX identifier for the SPDX document.
     */
    SPDXID: string &
      tags.JsonSchemaPlugin<{
        example: "SPDXRef-DOCUMENT";
      }>;
    /**
     * The version of the SPDX specification that this document conforms to.
     */
    spdxVersion: string &
      tags.JsonSchemaPlugin<{
        example: "SPDX-2.3";
      }>;
    creationInfo: {
      /**
       * The date and time the SPDX document was created.
       */
      created: string &
        tags.JsonSchemaPlugin<{
          example: "2021-11-03T00:00:00Z";
        }>;
      /**
       * The tools that were used to generate the SPDX document.
       */
      creators: (string &
        tags.JsonSchemaPlugin<{
          example: "GitHub";
        }>)[];
    };
    /**
     * The name of the SPDX document.
     */
    name: string &
      tags.JsonSchemaPlugin<{
        example: "github/github";
      }>;
    /**
     * The license under which the SPDX document is licensed.
     */
    dataLicense: string &
      tags.JsonSchemaPlugin<{
        example: "CC0-1.0";
      }>;
    /**
     * The name of the repository that the SPDX document describes.
     */
    documentDescribes: (string &
      tags.JsonSchemaPlugin<{
        example: "github/github";
      }>)[];
    /**
     * The namespace for the SPDX document.
     */
    documentNamespace: string &
      tags.JsonSchemaPlugin<{
        example: "https://github.com/example/dependency_graph/sbom-123";
      }>;
    packages: {
      /**
       * A unique SPDX identifier for the package.
       */
      SPDXID?: string &
        tags.JsonSchemaPlugin<{
          example: "SPDXRef-Package";
        }>;
      /**
       * The name of the package.
       */
      name?: string &
        tags.JsonSchemaPlugin<{
          example: "rubygems:github/github";
        }>;
      /**
       * The version of the package. If the package does not have an exact version specified,
       * a version range is given.
       */
      versionInfo?: string &
        tags.JsonSchemaPlugin<{
          example: "1.0.0";
        }>;
      /**
       * The location where the package can be downloaded,
       * or NOASSERTION if this has not been determined.
       */
      downloadLocation?: string &
        tags.JsonSchemaPlugin<{
          example: "NOASSERTION";
        }>;
      /**
       * Whether the package's file content has been subjected to
       * analysis during the creation of the SPDX document.
       */
      filesAnalyzed?: boolean &
        tags.JsonSchemaPlugin<{
          example: false;
        }>;
      /**
       * The license of the package as determined while creating the SPDX document.
       */
      licenseConcluded?: string &
        tags.JsonSchemaPlugin<{
          example: "MIT";
        }>;
      /**
       * The license of the package as declared by its author, or NOASSERTION if this information
       * was not available when the SPDX document was created.
       */
      licenseDeclared?: string &
        tags.JsonSchemaPlugin<{
          example: "NOASSERTION";
        }>;
      /**
       * The distribution source of this package, or NOASSERTION if this was not determined.
       */
      supplier?: string &
        tags.JsonSchemaPlugin<{
          example: "NOASSERTION";
        }>;
      /**
       * The copyright holders of the package, and any dates present with those notices, if available.
       */
      copyrightText?: string &
        tags.JsonSchemaPlugin<{
          example: "Copyright (c) 1985 GitHub.com";
        }>;
      externalRefs?: {
        /**
         * The category of reference to an external resource this reference refers to.
         */
        referenceCategory: string &
          tags.JsonSchemaPlugin<{
            example: "PACKAGE-MANAGER";
          }>;
        /**
         * A locator for the particular external resource this reference refers to.
         */
        referenceLocator: string &
          tags.JsonSchemaPlugin<{
            example: "pkg:gem/rails@6.0.1";
          }>;
        /**
         * The category of reference to an external resource this reference refers to.
         */
        referenceType: string &
          tags.JsonSchemaPlugin<{
            example: "purl";
          }>;
      }[];
    }[] &
      tags.JsonSchemaPlugin<{
        required: [
          "SPDXID",
          "name",
          "versionInfo",
          "downloadLocation",
          "filesAnalyzed",
          "supplier",
        ];
      }>;
  };
};
