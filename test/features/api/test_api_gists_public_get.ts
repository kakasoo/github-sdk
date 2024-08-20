import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { base_minus_gist } from "@ORGANIZATION/PROJECT-api/lib/structures/base_minus_gist";

export async function test_api_gists_public_get(connection: api.IConnection) {
  const output: base_minus_gist[] =
    await api.functional.gists.public.get(connection);
  typia.assert(output);
}
