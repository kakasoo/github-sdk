import api from "@kakasoo/github-sdk";
import { minimal_minus_repository } from "@kakasoo/github-sdk/lib/structures/minimal_minus_repository";
import typia from "typia";

export async function test_api_orgs_migrations_repositories_getByOrgAndMigration_id(
  connection: api.IConnection,
) {
  const output: minimal_minus_repository[] =
    await api.functional.orgs.migrations.repositories.getByOrgAndMigration_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
