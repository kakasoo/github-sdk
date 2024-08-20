import api from "@kakasoo/github-sdk";
import { IApiAdvisories } from "@kakasoo/github-sdk/lib/structures/IApiAdvisories";
import { global_minus_advisory } from "@kakasoo/github-sdk/lib/structures/global_minus_advisory";
import typia from "typia";

export async function test_api_advisories_get(connection: api.IConnection) {
  const output: global_minus_advisory[] = await api.functional.advisories.get(
    connection,
    typia.random<IApiAdvisories.GetQuery>(),
  );
  typia.assert(output);
}
