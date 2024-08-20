import api from "@kakasoo/github-sdk";
import { custom_minus_property_minus_value } from "@kakasoo/github-sdk/lib/structures/custom_minus_property_minus_value";
import typia from "typia";

export async function test_api_repos_properties_values_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: custom_minus_property_minus_value[] =
    await api.functional.repos.properties.values.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
