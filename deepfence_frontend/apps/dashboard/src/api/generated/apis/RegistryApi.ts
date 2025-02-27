/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  ModelContainerImage,
  ModelImageStub,
  ModelMessageResponse,
  ModelRegistryAddReq,
  ModelRegistryCountResp,
  ModelRegistryImageStubsReq,
  ModelRegistryImagesReq,
  ModelRegistryListResp,
  ModelRegistryUpdateReq,
  ModelSummary,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelContainerImageFromJSON,
    ModelContainerImageToJSON,
    ModelImageStubFromJSON,
    ModelImageStubToJSON,
    ModelMessageResponseFromJSON,
    ModelMessageResponseToJSON,
    ModelRegistryAddReqFromJSON,
    ModelRegistryAddReqToJSON,
    ModelRegistryCountRespFromJSON,
    ModelRegistryCountRespToJSON,
    ModelRegistryImageStubsReqFromJSON,
    ModelRegistryImageStubsReqToJSON,
    ModelRegistryImagesReqFromJSON,
    ModelRegistryImagesReqToJSON,
    ModelRegistryListRespFromJSON,
    ModelRegistryListRespToJSON,
    ModelRegistryUpdateReqFromJSON,
    ModelRegistryUpdateReqToJSON,
    ModelSummaryFromJSON,
    ModelSummaryToJSON,
} from '../models';

export interface AddRegistryRequest {
    modelRegistryAddReq?: ModelRegistryAddReq;
}

export interface AddRegistryGCRRequest {
    name: string;
    registryUrl: string;
    serviceAccountJson: Blob | null;
}

export interface CountImageStubsRequest {
    modelRegistryImageStubsReq?: ModelRegistryImageStubsReq;
}

export interface CountImagesRequest {
    modelRegistryImagesReq?: ModelRegistryImagesReq;
}

export interface DeleteRegistryRequest {
    registryId: string;
}

export interface GetRegistrySummaryRequest {
    registryId: string;
}

export interface GetSummaryByTypeRequest {
    registryType: string;
}

export interface ListImageStubsRequest {
    modelRegistryImageStubsReq?: ModelRegistryImageStubsReq;
}

export interface ListImagesRequest {
    modelRegistryImagesReq?: ModelRegistryImagesReq;
}

export interface SyncRegistryRequest {
    registryId: string;
}

export interface UpdateRegistryRequest {
    registryId: string;
    modelRegistryUpdateReq?: ModelRegistryUpdateReq;
}

/**
 * RegistryApi - interface
 * 
 * @export
 * @interface RegistryApiInterface
 */
export interface RegistryApiInterface {
    /**
     * Add a new supported registry
     * @summary Add Registry
     * @param {ModelRegistryAddReq} [modelRegistryAddReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    addRegistryRaw(requestParameters: AddRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>>;

    /**
     * Add a new supported registry
     * Add Registry
     */
    addRegistry(requestParameters: AddRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse>;

    /**
     * Add a Google Container registry
     * @summary Add Google Container Registry
     * @param {string} name 
     * @param {string} registryUrl 
     * @param {Blob} serviceAccountJson 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    addRegistryGCRRaw(requestParameters: AddRegistryGCRRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>>;

    /**
     * Add a Google Container registry
     * Add Google Container Registry
     */
    addRegistryGCR(requestParameters: AddRegistryGCRRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse>;

    /**
     * count of image tags for a given image and registry
     * @summary Count Image Stubs
     * @param {ModelRegistryImageStubsReq} [modelRegistryImageStubsReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    countImageStubsRaw(requestParameters: CountImageStubsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelRegistryCountResp>>;

    /**
     * count of image tags for a given image and registry
     * Count Image Stubs
     */
    countImageStubs(requestParameters: CountImageStubsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelRegistryCountResp>;

    /**
     * count of images from a given registry
     * @summary Count Registry Images
     * @param {ModelRegistryImagesReq} [modelRegistryImagesReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    countImagesRaw(requestParameters: CountImagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelRegistryCountResp>>;

    /**
     * count of images from a given registry
     * Count Registry Images
     */
    countImages(requestParameters: CountImagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelRegistryCountResp>;

    /**
     * Delete registry
     * @summary Delete Registry
     * @param {string} registryId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    deleteRegistryRaw(requestParameters: DeleteRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete registry
     * Delete Registry
     */
    deleteRegistry(requestParameters: DeleteRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * get summary of registry scans, images and tags
     * @summary Get Registry Summary
     * @param {string} registryId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    getRegistrySummaryRaw(requestParameters: GetRegistrySummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelSummary>>;

    /**
     * get summary of registry scans, images and tags
     * Get Registry Summary
     */
    getRegistrySummary(requestParameters: GetRegistrySummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelSummary>;

    /**
     * get summary of all registries scans, images and tags by registry type
     * @summary Get All Registries Summary By Type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    getSummaryAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: ModelSummary; }>>;

    /**
     * get summary of all registries scans, images and tags by registry type
     * Get All Registries Summary By Type
     */
    getSummaryAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: ModelSummary; }>;

    /**
     * get summary of registries scans, images and tags by registry type
     * @summary Get Registry Summary By Type
     * @param {string} registryType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    getSummaryByTypeRaw(requestParameters: GetSummaryByTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelSummary>>;

    /**
     * get summary of registries scans, images and tags by registry type
     * Get Registry Summary By Type
     */
    getSummaryByType(requestParameters: GetSummaryByTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelSummary>;

    /**
     * list image tags for a given image and registry
     * @summary List Image Stubs
     * @param {ModelRegistryImageStubsReq} [modelRegistryImageStubsReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    listImageStubsRaw(requestParameters: ListImageStubsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelImageStub>>>;

    /**
     * list image tags for a given image and registry
     * List Image Stubs
     */
    listImageStubs(requestParameters: ListImageStubsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelImageStub>>;

    /**
     * list images from a given registry
     * @summary List Registry Images
     * @param {ModelRegistryImagesReq} [modelRegistryImagesReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    listImagesRaw(requestParameters: ListImagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelContainerImage>>>;

    /**
     * list images from a given registry
     * List Registry Images
     */
    listImages(requestParameters: ListImagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelContainerImage>>;

    /**
     * List all the added Registries
     * @summary List Registries
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    listRegistryRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelRegistryListResp>>>;

    /**
     * List all the added Registries
     * List Registries
     */
    listRegistry(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelRegistryListResp>>;

    /**
     * synchronize registry images
     * @summary Sync Registry
     * @param {string} registryId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    syncRegistryRaw(requestParameters: SyncRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>>;

    /**
     * synchronize registry images
     * Sync Registry
     */
    syncRegistry(requestParameters: SyncRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse>;

    /**
     * Update registry
     * @summary Update Registry
     * @param {string} registryId 
     * @param {ModelRegistryUpdateReq} [modelRegistryUpdateReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistryApiInterface
     */
    updateRegistryRaw(requestParameters: UpdateRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>>;

    /**
     * Update registry
     * Update Registry
     */
    updateRegistry(requestParameters: UpdateRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse>;

}

/**
 * 
 */
export class RegistryApi extends runtime.BaseAPI implements RegistryApiInterface {

    /**
     * Add a new supported registry
     * Add Registry
     */
    async addRegistryRaw(requestParameters: AddRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelRegistryAddReqToJSON(requestParameters.modelRegistryAddReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelMessageResponseFromJSON(jsonValue));
    }

    /**
     * Add a new supported registry
     * Add Registry
     */
    async addRegistry(requestParameters: AddRegistryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse> {
        const response = await this.addRegistryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add a Google Container registry
     * Add Google Container Registry
     */
    async addRegistryGCRRaw(requestParameters: AddRegistryGCRRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling addRegistryGCR.');
        }

        if (requestParameters.registryUrl === null || requestParameters.registryUrl === undefined) {
            throw new runtime.RequiredError('registryUrl','Required parameter requestParameters.registryUrl was null or undefined when calling addRegistryGCR.');
        }

        if (requestParameters.serviceAccountJson === null || requestParameters.serviceAccountJson === undefined) {
            throw new runtime.RequiredError('serviceAccountJson','Required parameter requestParameters.serviceAccountJson was null or undefined when calling addRegistryGCR.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.name !== undefined) {
            formParams.append('name', requestParameters.name as any);
        }

        if (requestParameters.registryUrl !== undefined) {
            formParams.append('registry_url', requestParameters.registryUrl as any);
        }

        if (requestParameters.serviceAccountJson !== undefined) {
            formParams.append('service_account_json', requestParameters.serviceAccountJson as any);
        }

        const response = await this.request({
            path: `/deepfence/registryaccount/gcr`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelMessageResponseFromJSON(jsonValue));
    }

    /**
     * Add a Google Container registry
     * Add Google Container Registry
     */
    async addRegistryGCR(requestParameters: AddRegistryGCRRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse> {
        const response = await this.addRegistryGCRRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * count of image tags for a given image and registry
     * Count Image Stubs
     */
    async countImageStubsRaw(requestParameters: CountImageStubsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelRegistryCountResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount/count/stubs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelRegistryImageStubsReqToJSON(requestParameters.modelRegistryImageStubsReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelRegistryCountRespFromJSON(jsonValue));
    }

    /**
     * count of image tags for a given image and registry
     * Count Image Stubs
     */
    async countImageStubs(requestParameters: CountImageStubsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelRegistryCountResp> {
        const response = await this.countImageStubsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * count of images from a given registry
     * Count Registry Images
     */
    async countImagesRaw(requestParameters: CountImagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelRegistryCountResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount/count/images`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelRegistryImagesReqToJSON(requestParameters.modelRegistryImagesReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelRegistryCountRespFromJSON(jsonValue));
    }

    /**
     * count of images from a given registry
     * Count Registry Images
     */
    async countImages(requestParameters: CountImagesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelRegistryCountResp> {
        const response = await this.countImagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete registry
     * Delete Registry
     */
    async deleteRegistryRaw(requestParameters: DeleteRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.registryId === null || requestParameters.registryId === undefined) {
            throw new runtime.RequiredError('registryId','Required parameter requestParameters.registryId was null or undefined when calling deleteRegistry.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount/{registry_id}`.replace(`{${"registry_id"}}`, encodeURIComponent(String(requestParameters.registryId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete registry
     * Delete Registry
     */
    async deleteRegistry(requestParameters: DeleteRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRegistryRaw(requestParameters, initOverrides);
    }

    /**
     * get summary of registry scans, images and tags
     * Get Registry Summary
     */
    async getRegistrySummaryRaw(requestParameters: GetRegistrySummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelSummary>> {
        if (requestParameters.registryId === null || requestParameters.registryId === undefined) {
            throw new runtime.RequiredError('registryId','Required parameter requestParameters.registryId was null or undefined when calling getRegistrySummary.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount/{registry_id}/summary`.replace(`{${"registry_id"}}`, encodeURIComponent(String(requestParameters.registryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelSummaryFromJSON(jsonValue));
    }

    /**
     * get summary of registry scans, images and tags
     * Get Registry Summary
     */
    async getRegistrySummary(requestParameters: GetRegistrySummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelSummary> {
        const response = await this.getRegistrySummaryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get summary of all registries scans, images and tags by registry type
     * Get All Registries Summary By Type
     */
    async getSummaryAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: ModelSummary; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount/summary`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => runtime.mapValues(jsonValue, ModelSummaryFromJSON));
    }

    /**
     * get summary of all registries scans, images and tags by registry type
     * Get All Registries Summary By Type
     */
    async getSummaryAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: ModelSummary; }> {
        const response = await this.getSummaryAllRaw(initOverrides);
        return await response.value();
    }

    /**
     * get summary of registries scans, images and tags by registry type
     * Get Registry Summary By Type
     */
    async getSummaryByTypeRaw(requestParameters: GetSummaryByTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelSummary>> {
        if (requestParameters.registryType === null || requestParameters.registryType === undefined) {
            throw new runtime.RequiredError('registryType','Required parameter requestParameters.registryType was null or undefined when calling getSummaryByType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount/{registry_type}/summary-by-type`.replace(`{${"registry_type"}}`, encodeURIComponent(String(requestParameters.registryType))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelSummaryFromJSON(jsonValue));
    }

    /**
     * get summary of registries scans, images and tags by registry type
     * Get Registry Summary By Type
     */
    async getSummaryByType(requestParameters: GetSummaryByTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelSummary> {
        const response = await this.getSummaryByTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list image tags for a given image and registry
     * List Image Stubs
     */
    async listImageStubsRaw(requestParameters: ListImageStubsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelImageStub>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount/stubs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelRegistryImageStubsReqToJSON(requestParameters.modelRegistryImageStubsReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelImageStubFromJSON));
    }

    /**
     * list image tags for a given image and registry
     * List Image Stubs
     */
    async listImageStubs(requestParameters: ListImageStubsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelImageStub>> {
        const response = await this.listImageStubsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list images from a given registry
     * List Registry Images
     */
    async listImagesRaw(requestParameters: ListImagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelContainerImage>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount/images`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelRegistryImagesReqToJSON(requestParameters.modelRegistryImagesReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelContainerImageFromJSON));
    }

    /**
     * list images from a given registry
     * List Registry Images
     */
    async listImages(requestParameters: ListImagesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelContainerImage>> {
        const response = await this.listImagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all the added Registries
     * List Registries
     */
    async listRegistryRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelRegistryListResp>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelRegistryListRespFromJSON));
    }

    /**
     * List all the added Registries
     * List Registries
     */
    async listRegistry(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelRegistryListResp>> {
        const response = await this.listRegistryRaw(initOverrides);
        return await response.value();
    }

    /**
     * synchronize registry images
     * Sync Registry
     */
    async syncRegistryRaw(requestParameters: SyncRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>> {
        if (requestParameters.registryId === null || requestParameters.registryId === undefined) {
            throw new runtime.RequiredError('registryId','Required parameter requestParameters.registryId was null or undefined when calling syncRegistry.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount/{registry_id}/sync`.replace(`{${"registry_id"}}`, encodeURIComponent(String(requestParameters.registryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelMessageResponseFromJSON(jsonValue));
    }

    /**
     * synchronize registry images
     * Sync Registry
     */
    async syncRegistry(requestParameters: SyncRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse> {
        const response = await this.syncRegistryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update registry
     * Update Registry
     */
    async updateRegistryRaw(requestParameters: UpdateRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>> {
        if (requestParameters.registryId === null || requestParameters.registryId === undefined) {
            throw new runtime.RequiredError('registryId','Required parameter requestParameters.registryId was null or undefined when calling updateRegistry.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/registryaccount/{registry_id}`.replace(`{${"registry_id"}}`, encodeURIComponent(String(requestParameters.registryId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ModelRegistryUpdateReqToJSON(requestParameters.modelRegistryUpdateReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelMessageResponseFromJSON(jsonValue));
    }

    /**
     * Update registry
     * Update Registry
     */
    async updateRegistry(requestParameters: UpdateRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse> {
        const response = await this.updateRegistryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
