import {RepositoryLogin} from "@/repositories/repository-login.ts";
import {RepositoryIdea} from "@/repositories/repository-idea";

export interface RepositoriesInterface {

    login: typeof RepositoryLogin
    idea: typeof RepositoryIdea;
}

const repositories: RepositoriesInterface = {
    login: RepositoryLogin,
    idea: RepositoryIdea,
};

export const RepositoryFactory = {
    create: (key: keyof RepositoriesInterface) => repositories[key],
};

export type RepositoriesType = <K extends keyof RepositoriesInterface>(key: K) => ReturnType<RepositoriesInterface[K]>;
