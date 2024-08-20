import api from "@kakasoo/github-sdk";
import { IApiAppInstallations } from "@kakasoo/github-sdk/lib/structures/IApiAppInstallations";
import { installation } from "@kakasoo/github-sdk/lib/structures/installation";
import typia from "typia";

export async function test_api_app_installations_get(
  connection: api.IConnection,
) {
  const output: installation[] = await api.functional.app.installations.get(
    connection,
    typia.random<IApiAppInstallations.GetQuery>(),
  );
  typia.assert(output);
}
