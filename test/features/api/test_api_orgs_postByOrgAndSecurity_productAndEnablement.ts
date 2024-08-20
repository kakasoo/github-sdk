import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_postByOrgAndSecurity_productAndEnablement(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.postByOrgAndSecurity_productAndEnablement(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<any>(),
    );
  typia.assert(output);
}
