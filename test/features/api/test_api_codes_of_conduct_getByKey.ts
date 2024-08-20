import api from "@kakasoo/github-sdk";
import { code_minus_of_minus_conduct } from "@kakasoo/github-sdk/lib/structures/code_minus_of_minus_conduct";
import typia from "typia";

export async function test_api_codes_of_conduct_getByKey(
  connection: api.IConnection,
) {
  const output: code_minus_of_minus_conduct =
    await api.functional.codes_of_conduct.getByKey(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
