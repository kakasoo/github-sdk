import { tags } from "typia";

;
/**
 * A repository import from an external source.
 *
 * @title Import
*/
export type import = {
    vcs: string | null;
    use_lfs?: boolean;
    /**
     * The URL of the originating repository.
    */
    vcs_url: string;
    svc_root?: string;
    tfvc_project?: string;
    status: "auth" | "error" | "none" | "detecting" | "choose" | "auth_failed" | "importing" | "mapping" | "waiting_to_push" | "pushing" | "complete" | "setup" | "unknown" | "detection_found_multiple" | "detection_found_nothing" | "detection_needs_auth";
    status_text?: string | null;
    failed_step?: string | null;
    error_message?: string | null;
    import_percent?: (number & tags.Type<"int32">) | null;
    commit_count?: (number & tags.Type<"int32">) | null;
    push_percent?: (number & tags.Type<"int32">) | null;
    has_large_files?: boolean;
    large_files_size?: number & tags.Type<"int32">;
    large_files_count?: number & tags.Type<"int32">;
    project_choices?: {
        vcs?: string;
        tfvc_project?: string;
        human_name?: string;
    }[];
    message?: string;
    authors_count?: (number & tags.Type<"int32">) | null;
    url: string & tags.Format<"uri">;
    html_url: string & tags.Format<"uri">;
    authors_url: string & tags.Format<"uri">;
    repository_url: string & tags.Format<"uri">;
    svn_root?: string;
};
