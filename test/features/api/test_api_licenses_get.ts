import api from "@kakasoo/github-sdk";
import { IApiLicenses } from "@kakasoo/github-sdk/lib/structures/IApiLicenses";
import { license_minus_simple } from "@kakasoo/github-sdk/lib/structures/license_minus_simple";
import typia from "typia";

export async function test_api_licenses_get(connection: api.IConnection) {
  const output: license_minus_simple[] = await api.functional.licenses.get(
    connection,
    typia.random<IApiLicenses.GetQuery>(),
  );
  typia.assert(output);
}
