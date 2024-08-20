import { tags } from "typia";

/**
 * License
 *
 * @title License
 */
export type license = {
  key: string &
    tags.JsonSchemaPlugin<{
      example: "mit";
    }>;
  name: string &
    tags.JsonSchemaPlugin<{
      example: "MIT License";
    }>;
  spdx_id:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "MIT";
        }>)
    | null;
  url:
    | (string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          example: "https://api.github.com/licenses/mit";
        }>)
    | null;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDc6TGljZW5zZW1pdA==";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://choosealicense.com/licenses/mit/";
    }>;
  description: string &
    tags.JsonSchemaPlugin<{
      example: "A permissive license that is short and to the point. It lets people do anything with your code with proper attribution and without warranty.";
    }>;
  implementation: string &
    tags.JsonSchemaPlugin<{
      example: "Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Replace [year] with the current year and [fullname] with the name (or names) of the copyright holders.";
    }>;
  permissions: string[] &
    tags.JsonSchemaPlugin<{
      example: [
        "commercial-use",
        "modifications",
        "distribution",
        "sublicense",
        "private-use",
      ];
    }>;
  conditions: string[] &
    tags.JsonSchemaPlugin<{
      example: ["include-copyright"];
    }>;
  limitations: string[] &
    tags.JsonSchemaPlugin<{
      example: ["no-liability"];
    }>;
  body: string &
    tags.JsonSchemaPlugin<{
      example: '\n\nThe MIT License (MIT)\n\nCopyright (c) [year] [fullname]\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n';
    }>;
  featured: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
};
