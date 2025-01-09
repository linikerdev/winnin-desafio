declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    anime: import("../interfaces/animes.interface").AnimeState;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        getAnimes: import("@reduxjs/toolkit/query").QueryDefinition<import("../interfaces/animes.interface").AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">;
        updateFormat: import("@reduxjs/toolkit/query").MutationDefinition<{
            id: number;
            format: string;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">;
    }, never, "api">;
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        anime: import("../interfaces/animes.interface").AnimeState;
        api: import("@reduxjs/toolkit/query").CombinedState<{
            getAnimes: import("@reduxjs/toolkit/query").QueryDefinition<import("../interfaces/animes.interface").AnimesProps, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">;
            updateFormat: import("@reduxjs/toolkit/query").MutationDefinition<{
                id: number;
                format: string;
            }, import("@reduxjs/toolkit/query").BaseQueryFn<any, unknown, unknown, {}, {}>, never, any, "api">;
        }, never, "api">;
    } & import("redux-persist/es/persistReducer").PersistPartial, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
declare const persistor: import("redux-persist").Persistor;
export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
