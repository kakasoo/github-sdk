import api from "@kakasoo/github-sdk";
import { base_minus_gist } from "@kakasoo/github-sdk/lib/structures/base_minus_gist";
import typia from "typia";

export async function test_api_gists_starred_get(connection: api.IConnection) {
  const output: base_minus_gist[] =
    await api.functional.gists.starred.get(connection);
  typia.assert(output);
}
