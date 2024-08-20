import api from "@kakasoo/github-sdk";
import { global_minus_advisory } from "@kakasoo/github-sdk/lib/structures/global_minus_advisory";
import typia from "typia";

export async function test_api_advisories_getByGhsa_id(
  connection: api.IConnection,
) {
  const output: global_minus_advisory =
    await api.functional.advisories.getByGhsa_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
