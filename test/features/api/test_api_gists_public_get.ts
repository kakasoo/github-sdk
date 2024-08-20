import api from "@kakasoo/github-sdk";
import { base_minus_gist } from "@kakasoo/github-sdk/lib/structures/base_minus_gist";
import typia from "typia";

export async function test_api_gists_public_get(connection: api.IConnection) {
  const output: base_minus_gist[] =
    await api.functional.gists.public.get(connection);
  typia.assert(output);
}
