import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgs } from "../../structures/IApiOrgs";
import { body } from "../../structures/body";
import { organization_minus_full } from "../../structures/organization_minus_full";

export * as actions from "./actions";
export * as attestations from "./attestations";
export * as blocks from "./blocks";
export * as code_scanning from "./code_scanning";
export * as code_security from "./code_security";
export * as codespaces from "./codespaces";
export * as copilot from "./copilot";
export * as dependabot from "./dependabot";
export * as docker from "./docker";
export * as events from "./events";
export * as failed_invitations from "./failed_invitations";
export * as hooks from "./hooks";
export * as installation from "./installation";
export * as installations from "./installations";
export * as interaction_limits from "./interaction_limits";
export * as invitations from "./invitations";
export * as issues from "./issues";
export * as members from "./members";
export * as memberships from "./memberships";
export * as migrations from "./migrations";
export * as organization_roles from "./organization_roles";
export * as outside_collaborators from "./outside_collaborators";
export * as packages from "./packages";
export * as personal_access_token_requests from "./personal_access_token_requests";
export * as personal_access_tokens from "./personal_access_tokens";
export * as projects from "./projects";
export * as properties from "./properties";
export * as public_members from "./public_members";
export * as repos from "./repos";
export * as rulesets from "./rulesets";
export * as secret_scanning from "./secret_scanning";
export * as security_advisories from "./security_advisories";
export * as security_managers from "./security_managers";
export * as settings from "./settings";
export * as team from "./team";
export * as teams from "./teams";
/**
 * Get an organization.
 * Gets information about an organization.
 *
 * When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
 *
 * To see the full details about an organization, the authenticated user must be an organization owner.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to see the full details about an organization.
 *
 * To see information about an organization's GitHub plan, GitHub Apps need the `Organization plan` permission.
 *
 * @tag orgs
 * @path orgs/:org
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrg(
  connection: IConnection<getByOrg.Headers>,
  org: string,
): Promise<getByOrg.Output> {
  return !!connection.simulate
    ? getByOrg.simulate(connection, org)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrg.METADATA,
          path: getByOrg.path(org),
          status: null,
        },
      );
}
export namespace getByOrg {
  export type Headers = IApiOrgs.GetHeader;
  export type Output = organization_minus_full;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): organization_minus_full => typia.random<organization_minus_full>(g);
  export const simulate = (
    connection: IConnection<getByOrg.Headers>,
    org: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrg.path(org),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
/**
 * Update an organization.
 * > [!WARNING]
 * > **Parameter deprecation notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
 *
 * > [!WARNING]
 * > **Parameter deprecation notice:** Code security product enablement for new repositories through the organization API is deprecated. Please use [code security configurations](https://docs.github.com/rest/code-security/configurations#set-a-code-security-configuration-as-a-default-for-an-organization) to set defaults instead. For more information on setting a default security configuration, see the [changelog](https://github.blog/changelog/2024-07-09-sunsetting-security-settings-defaults-parameters-in-the-organizations-rest-api/).
 *
 * Updates the organization's profile and member privileges.
 *
 * The authenticated user must be an organization owner to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` or `repo` scope to use this endpoint.
 *
 * @tag orgs
 * @path orgs/:org
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByOrg(
  connection: IConnection<patchByOrg.Headers>,
  org: string,
  body: patchByOrg.Input,
): Promise<patchByOrg.Output> {
  return !!connection.simulate
    ? patchByOrg.simulate(connection, org, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...patchByOrg.METADATA,
          path: patchByOrg.path(org),
          status: null,
        },
        body,
      );
}
export namespace patchByOrg {
  export type Headers = IApiOrgs.PatchHeader;
  export type Input = body;
  export type Output = organization_minus_full;

  export const METADATA = {
    method: "PATCH",
    path: "/orgs/:org",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): organization_minus_full => typia.random<organization_minus_full>(g);
  export const simulate = (
    connection: IConnection<patchByOrg.Headers>,
    org: string,
    body: patchByOrg.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByOrg.path(org),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.body(() => typia.assert(body));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
/**
 * Delete an organization.
 * Deletes an organization and all its repositories.
 *
 * The organization login will be unavailable for 90 days after deletion.
 *
 * Please review the Terms of Service regarding account deletion before using this endpoint:
 *
 * https://docs.github.com/site-policy/github-terms/github-terms-of-service
 *
 * @tag orgs
 * @path orgs/:org
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrg(
  connection: IConnection<eraseByOrg.Headers>,
  org: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrg.simulate(connection, org)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOrg.METADATA,
          path: eraseByOrg.path(org),
          status: null,
        },
      );
}
export namespace eraseByOrg {
  export type Headers = IApiOrgs.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrg.Headers>,
    org: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrg.path(org),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
/**
 * Enable or disable a security feature for an organization.
 * > [!WARNING]
 * > **Deprecation notice:** The ability to enable or disable a security feature for all eligible repositories in an organization is deprecated. Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. For more information, see the [changelog](https://github.blog/changelog/2024-07-22-deprecation-of-api-endpoint-to-enable-or-disable-a-security-feature-for-an-organization/).
 *
 * Enables or disables the specified security feature for all eligible repositories in an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
 *
 * The authenticated user must be an organization owner or be member of a team with the security manager role to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
 *
 * @tag orgs
 * @deprecated
 * @path orgs/:org/:security_product/:enablement
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOrgAndSecurity_productAndEnablement(
  connection: IConnection<postByOrgAndSecurity_productAndEnablement.Headers>,
  org: string,
  security_product: string,
  enablement: string,
  body: postByOrgAndSecurity_productAndEnablement.Input,
): Promise<void> {
  return !!connection.simulate
    ? postByOrgAndSecurity_productAndEnablement.simulate(
        connection,
        org,
        security_product,
        enablement,
        body,
      )
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOrgAndSecurity_productAndEnablement.METADATA,
          path: postByOrgAndSecurity_productAndEnablement.path(
            org,
            security_product,
            enablement,
          ),
          status: null,
        },
        body,
      );
}
export namespace postByOrgAndSecurity_productAndEnablement {
  export type Headers = IApiOrgs.PostHeader;
  export type Input = any;

  export const METADATA = {
    method: "POST",
    path: "/orgs/:org/:security_product/:enablement",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    org: string,
    security_product: string,
    enablement: string,
  ) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/${encodeURIComponent(security_product ?? "null")}/${encodeURIComponent(enablement ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<postByOrgAndSecurity_productAndEnablement.Headers>,
    org: string,
    security_product: string,
    enablement: string,
    body: postByOrgAndSecurity_productAndEnablement.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOrgAndSecurity_productAndEnablement.path(
        org,
        security_product,
        enablement,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("security_product")(() => typia.assert(security_product));
      assert.param("enablement")(() => typia.assert(enablement));
      assert.body(() => typia.assert(body));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
