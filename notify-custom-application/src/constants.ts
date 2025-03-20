// Make sure to import the helper functions from the `ssr` entry point.
import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';
export const entryPointUriPath =
    typeof window === 'undefined'
        ? process.env.ENTRY_POINT_URI_PATH
        : (window as any).app.entryPointUriPath ?? 'notifications';
export const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);
