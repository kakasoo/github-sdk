import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_eraseByOrg(connection: api.IConnection) {
  const output = await api.functional.orgs.eraseByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
