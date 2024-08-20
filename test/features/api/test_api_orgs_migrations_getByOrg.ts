import api from "@kakasoo/github-sdk";
import { IApiOrgsMigrations } from "@kakasoo/github-sdk/lib/structures/IApiOrgsMigrations";
import { migration } from "@kakasoo/github-sdk/lib/structures/migration";
import typia from "typia";

export async function test_api_orgs_migrations_getByOrg(
  connection: api.IConnection,
) {
  const output: migration[] = await api.functional.orgs.migrations.getByOrg(
    connection,
    typia.random<string>(),
    typia.random<IApiOrgsMigrations.GetQuery>(),
  );
  typia.assert(output);
}
