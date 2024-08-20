import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { custom_minus_property } from "@kakasoo/github-sdk/lib/structures/custom_minus_property";
import typia from "typia";

export async function test_api_orgs_properties_schema_patchByOrg(
  connection: api.IConnection,
) {
  const output: custom_minus_property[] =
    await api.functional.orgs.properties.schema.patchByOrg(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
