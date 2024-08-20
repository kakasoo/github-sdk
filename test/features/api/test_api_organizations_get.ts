import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_simple } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_simple";

export async function test_api_organizations_get(connection: api.IConnection) {
  const output: organization_minus_simple[] =
    await api.functional.organizations.get(connection);
  typia.assert(output);
}