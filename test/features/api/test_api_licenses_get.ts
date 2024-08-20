import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { license_minus_simple } from "@ORGANIZATION/PROJECT-api/lib/structures/license_minus_simple";
import { IApiLicenses } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiLicenses";

export async function test_api_licenses_get(connection: api.IConnection) {
  const output: license_minus_simple[] = await api.functional.licenses.get(
    connection,
    typia.random<IApiLicenses.GetQuery>(),
  );
  typia.assert(output);
}
