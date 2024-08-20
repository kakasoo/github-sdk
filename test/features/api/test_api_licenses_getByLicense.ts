import api from "@kakasoo/github-sdk";
import { license } from "@kakasoo/github-sdk/lib/structures/license";
import typia from "typia";

export async function test_api_licenses_getByLicense(
  connection: api.IConnection,
) {
  const output: license = await api.functional.licenses.getByLicense(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
