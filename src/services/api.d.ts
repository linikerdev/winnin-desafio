import { AnimesProps } from '../interfaces/animes.interface';
export declare const postStatuses: readonly ["draft", "published", "pending_review"];
export declare const api: import("@reduxjs/toolkit/query").Api<import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, {
    getAnimes: import("@reduxjs/toolkit/query").QueryDefinition<AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">;
    updateFormat: import("@reduxjs/toolkit/query").MutationDefinition<{
        id: number;
        format: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">;
}, "api", never, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useGetAnimesQuery: <R extends Record<string, any> = import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    originalArgs?: undefined;
    data?: undefined;
    error?: undefined;
    requestId?: undefined;
    endpointName?: string | undefined;
    startedTimeStamp?: undefined;
    fulfilledTimeStamp?: undefined;
} & {
    currentData?: any;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "isUninitialized"> & {
    isUninitialized: true;
}) | import("@reduxjs/toolkit/query").TSHelpersOverride<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">> & {
    currentData?: any;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, {
    isLoading: true;
    isFetching: boolean;
    data: undefined;
} | ({
    isSuccess: true;
    isFetching: true;
    error: undefined;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">> & {
    currentData?: any;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "fulfilledTimeStamp">>) | ({
    isSuccess: true;
    isFetching: false;
    error: undefined;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">> & {
    currentData?: any;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "fulfilledTimeStamp" | "currentData">>) | ({
    isError: true;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">> & {
    currentData?: any;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "error">>)>> & {
    status: import("@reduxjs/toolkit/query").QueryStatus;
}>(arg: AnimesProps | typeof import("@reduxjs/toolkit/query").skipToken, options?: (import("@reduxjs/toolkit/query").SubscriptionOptions & {
    skip?: boolean;
    refetchOnMountOrArgChange?: boolean | number;
} & {
    skip?: boolean;
    selectFromResult?: ((state: import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        originalArgs?: undefined;
        data?: undefined;
        error?: undefined;
        requestId?: undefined;
        endpointName?: string | undefined;
        startedTimeStamp?: undefined;
        fulfilledTimeStamp?: undefined;
    } & {
        currentData?: any;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "isUninitialized"> & {
        isUninitialized: true;
    }) | import("@reduxjs/toolkit/query").TSHelpersOverride<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">> & {
        currentData?: any;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, {
        isLoading: true;
        isFetching: boolean;
        data: undefined;
    } | ({
        isSuccess: true;
        isFetching: true;
        error: undefined;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">> & {
        currentData?: any;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "fulfilledTimeStamp">>) | ({
        isSuccess: true;
        isFetching: false;
        error: undefined;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">> & {
        currentData?: any;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "fulfilledTimeStamp" | "currentData">>) | ({
        isError: true;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">> & {
        currentData?: any;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "error">>)>> & {
        status: import("@reduxjs/toolkit/query").QueryStatus;
    }) => R) | undefined;
}) | undefined) => [R][R extends any ? 0 : never] & {
    refetch: () => import("@reduxjs/toolkit/query").QueryActionCreatorResult<import("@reduxjs/toolkit/query").QueryDefinition<AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">>;
};
