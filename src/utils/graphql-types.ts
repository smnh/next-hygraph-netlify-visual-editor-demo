export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    Date: { input: any; output: any };
    DateTime: { input: any; output: any };
    Hex: { input: any; output: any };
    Json: { input: any; output: any };
    Long: { input: any; output: any };
    RGBAHue: { input: any; output: any };
    RGBATransparency: { input: any; output: any };
    RichTextAST: { input: any; output: any };
};

export type Action = Entity & {
    __typename?: 'Action';
    /** The icon must match one of the icon names from flaticon.com, e.g., "fi-brands-instagram". */
    icon?: Maybe<Scalars['String']['output']>;
    /** The position of the icon relative to the label. */
    iconPosition?: Maybe<IconPosition>;
    /** The unique identifier */
    id: Scalars['ID']['output'];
    label: Scalars['String']['output'];
    primary?: Maybe<Scalars['Boolean']['output']>;
    /** System stage field */
    stage: Stage;
    url: Scalars['String']['output'];
};

export type ActionConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ActionWhereUniqueInput;
};

/** A connection to a list of items. */
export type ActionConnection = {
    __typename?: 'ActionConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ActionEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ActionCreateInput = {
    icon?: InputMaybe<Scalars['String']['input']>;
    iconPosition?: InputMaybe<IconPosition>;
    label: Scalars['String']['input'];
    primary?: InputMaybe<Scalars['Boolean']['input']>;
    url: Scalars['String']['input'];
};

export type ActionCreateManyInlineInput = {
    /** Create and connect multiple existing Action documents */
    create?: InputMaybe<Array<ActionCreateInput>>;
};

export type ActionCreateOneInlineInput = {
    /** Create and connect one Action document */
    create?: InputMaybe<ActionCreateInput>;
};

export type ActionCreateWithPositionInput = {
    /** Document to create */
    data: ActionCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ActionEdge = {
    __typename?: 'ActionEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: Action;
};

/** Identifies documents */
export type ActionManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ActionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ActionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ActionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    iconPosition?: InputMaybe<IconPosition>;
    /** All values that are contained in given list. */
    iconPosition_in?: InputMaybe<Array<InputMaybe<IconPosition>>>;
    /** Any other value that exists and is not equal to the given value. */
    iconPosition_not?: InputMaybe<IconPosition>;
    /** All values that are not contained in given list. */
    iconPosition_not_in?: InputMaybe<Array<InputMaybe<IconPosition>>>;
    /** All values containing the given string. */
    icon_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    icon_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    icon_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    icon_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    icon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    icon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    icon_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    label_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    label_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    label_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    label_starts_with?: InputMaybe<Scalars['String']['input']>;
    primary?: InputMaybe<Scalars['Boolean']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    primary_not?: InputMaybe<Scalars['Boolean']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    url_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    url_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    url_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ActionOrderByInput {
    IconPositionAsc = 'iconPosition_ASC',
    IconPositionDesc = 'iconPosition_DESC',
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC',
    PrimaryAsc = 'primary_ASC',
    PrimaryDesc = 'primary_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC'
}

export type ActionParent = CtaSection | HeroSection | NavigationBar | PricingPlan;

export type ActionParentConnectInput = {
    CtaSection?: InputMaybe<CtaSectionConnectInput>;
    HeroSection?: InputMaybe<HeroSectionConnectInput>;
    NavigationBar?: InputMaybe<NavigationBarConnectInput>;
    PricingPlan?: InputMaybe<PricingPlanConnectInput>;
};

export type ActionParentCreateInput = {
    CtaSection?: InputMaybe<CtaSectionCreateInput>;
    HeroSection?: InputMaybe<HeroSectionCreateInput>;
    NavigationBar?: InputMaybe<NavigationBarCreateInput>;
    PricingPlan?: InputMaybe<PricingPlanCreateInput>;
};

export type ActionParentCreateManyInlineInput = {
    /** Create and connect multiple existing ActionParent documents */
    create?: InputMaybe<Array<ActionParentCreateInput>>;
};

export type ActionParentCreateOneInlineInput = {
    /** Create and connect one ActionParent document */
    create?: InputMaybe<ActionParentCreateInput>;
};

export type ActionParentCreateWithPositionInput = {
    CtaSection?: InputMaybe<CtaSectionCreateWithPositionInput>;
    HeroSection?: InputMaybe<HeroSectionCreateWithPositionInput>;
    NavigationBar?: InputMaybe<NavigationBarCreateWithPositionInput>;
    PricingPlan?: InputMaybe<PricingPlanCreateWithPositionInput>;
};

export type ActionParentUpdateInput = {
    CtaSection?: InputMaybe<CtaSectionUpdateInput>;
    HeroSection?: InputMaybe<HeroSectionUpdateInput>;
    NavigationBar?: InputMaybe<NavigationBarUpdateInput>;
    PricingPlan?: InputMaybe<PricingPlanUpdateInput>;
};

export type ActionParentUpdateManyInlineInput = {
    /** Create and connect multiple ActionParent component instances */
    create?: InputMaybe<Array<ActionParentCreateWithPositionInput>>;
    /** Delete multiple ActionParent documents */
    delete?: InputMaybe<Array<ActionParentWhereUniqueInput>>;
    /** Update multiple ActionParent component instances */
    update?: InputMaybe<Array<ActionParentUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple ActionParent component instances */
    upsert?: InputMaybe<Array<ActionParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ActionParentUpdateManyWithNestedWhereInput = {
    CtaSection?: InputMaybe<CtaSectionUpdateManyWithNestedWhereInput>;
    HeroSection?: InputMaybe<HeroSectionUpdateManyWithNestedWhereInput>;
    NavigationBar?: InputMaybe<NavigationBarUpdateManyWithNestedWhereInput>;
    PricingPlan?: InputMaybe<PricingPlanUpdateManyWithNestedWhereInput>;
};

export type ActionParentUpdateOneInlineInput = {
    /** Create and connect one ActionParent document */
    create?: InputMaybe<ActionParentCreateInput>;
    /** Delete currently connected ActionParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single ActionParent document */
    update?: InputMaybe<ActionParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ActionParent document */
    upsert?: InputMaybe<ActionParentUpsertWithNestedWhereUniqueInput>;
};

export type ActionParentUpdateWithNestedWhereUniqueAndPositionInput = {
    CtaSection?: InputMaybe<CtaSectionUpdateWithNestedWhereUniqueAndPositionInput>;
    HeroSection?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueAndPositionInput>;
    NavigationBar?: InputMaybe<NavigationBarUpdateWithNestedWhereUniqueAndPositionInput>;
    PricingPlan?: InputMaybe<PricingPlanUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ActionParentUpdateWithNestedWhereUniqueInput = {
    CtaSection?: InputMaybe<CtaSectionUpdateWithNestedWhereUniqueInput>;
    HeroSection?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueInput>;
    NavigationBar?: InputMaybe<NavigationBarUpdateWithNestedWhereUniqueInput>;
    PricingPlan?: InputMaybe<PricingPlanUpdateWithNestedWhereUniqueInput>;
};

export type ActionParentUpsertWithNestedWhereUniqueAndPositionInput = {
    CtaSection?: InputMaybe<CtaSectionUpsertWithNestedWhereUniqueAndPositionInput>;
    HeroSection?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueAndPositionInput>;
    NavigationBar?: InputMaybe<NavigationBarUpsertWithNestedWhereUniqueAndPositionInput>;
    PricingPlan?: InputMaybe<PricingPlanUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ActionParentUpsertWithNestedWhereUniqueInput = {
    CtaSection?: InputMaybe<CtaSectionUpsertWithNestedWhereUniqueInput>;
    HeroSection?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueInput>;
    NavigationBar?: InputMaybe<NavigationBarUpsertWithNestedWhereUniqueInput>;
    PricingPlan?: InputMaybe<PricingPlanUpsertWithNestedWhereUniqueInput>;
};

export type ActionParentWhereInput = {
    CtaSection?: InputMaybe<CtaSectionWhereInput>;
    HeroSection?: InputMaybe<HeroSectionWhereInput>;
    NavigationBar?: InputMaybe<NavigationBarWhereInput>;
    PricingPlan?: InputMaybe<PricingPlanWhereInput>;
};

export type ActionParentWhereUniqueInput = {
    CtaSection?: InputMaybe<CtaSectionWhereUniqueInput>;
    HeroSection?: InputMaybe<HeroSectionWhereUniqueInput>;
    NavigationBar?: InputMaybe<NavigationBarWhereUniqueInput>;
    PricingPlan?: InputMaybe<PricingPlanWhereUniqueInput>;
};

export type ActionUpdateInput = {
    icon?: InputMaybe<Scalars['String']['input']>;
    iconPosition?: InputMaybe<IconPosition>;
    label?: InputMaybe<Scalars['String']['input']>;
    primary?: InputMaybe<Scalars['Boolean']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type ActionUpdateManyInlineInput = {
    /** Create and connect multiple Action component instances */
    create?: InputMaybe<Array<ActionCreateWithPositionInput>>;
    /** Delete multiple Action documents */
    delete?: InputMaybe<Array<ActionWhereUniqueInput>>;
    /** Update multiple Action component instances */
    update?: InputMaybe<Array<ActionUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple Action component instances */
    upsert?: InputMaybe<Array<ActionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ActionUpdateManyInput = {
    icon?: InputMaybe<Scalars['String']['input']>;
    iconPosition?: InputMaybe<IconPosition>;
    label?: InputMaybe<Scalars['String']['input']>;
    primary?: InputMaybe<Scalars['Boolean']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type ActionUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ActionUpdateManyInput;
    /** Document search */
    where: ActionWhereInput;
};

export type ActionUpdateOneInlineInput = {
    /** Create and connect one Action document */
    create?: InputMaybe<ActionCreateInput>;
    /** Delete currently connected Action document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single Action document */
    update?: InputMaybe<ActionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Action document */
    upsert?: InputMaybe<ActionUpsertWithNestedWhereUniqueInput>;
};

export type ActionUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<ActionUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: ActionWhereUniqueInput;
};

export type ActionUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ActionUpdateInput;
    /** Unique document search */
    where: ActionWhereUniqueInput;
};

export type ActionUpsertInput = {
    /** Create document if it didn't exist */
    create: ActionCreateInput;
    /** Update document if it exists */
    update: ActionUpdateInput;
};

export type ActionUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<ActionUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: ActionWhereUniqueInput;
};

export type ActionUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ActionUpsertInput;
    /** Unique document search */
    where: ActionWhereUniqueInput;
};

/** Identifies documents */
export type ActionWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ActionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ActionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ActionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    iconPosition?: InputMaybe<IconPosition>;
    /** All values that are contained in given list. */
    iconPosition_in?: InputMaybe<Array<InputMaybe<IconPosition>>>;
    /** Any other value that exists and is not equal to the given value. */
    iconPosition_not?: InputMaybe<IconPosition>;
    /** All values that are not contained in given list. */
    iconPosition_not_in?: InputMaybe<Array<InputMaybe<IconPosition>>>;
    /** All values containing the given string. */
    icon_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    icon_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    icon_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    icon_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    icon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    icon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    icon_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    label_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    label_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    label_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    label_starts_with?: InputMaybe<Scalars['String']['input']>;
    primary?: InputMaybe<Scalars['Boolean']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    primary_not?: InputMaybe<Scalars['Boolean']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    url_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    url_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    url_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Action record uniquely */
export type ActionWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type Aggregate = {
    __typename?: 'Aggregate';
    count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity &
    Node & {
        __typename?: 'Asset';
        companyLogoSiteConfig: Array<SiteConfig>;
        /** The time the document was created */
        createdAt: Scalars['DateTime']['output'];
        /** User that created this document */
        createdBy?: Maybe<User>;
        /** Get the document in other stages */
        documentInStages: Array<Asset>;
        /** The file name */
        fileName: Scalars['String']['output'];
        /** The file handle */
        handle: Scalars['String']['output'];
        /** The height of the file */
        height?: Maybe<Scalars['Float']['output']>;
        /** List of Asset versions */
        history: Array<Version>;
        /** The unique identifier */
        id: Scalars['ID']['output'];
        /** System Locale field */
        locale: Locale;
        /** Get the other localizations for this document */
        localizations: Array<Asset>;
        /** The mime type of the file */
        mimeType?: Maybe<Scalars['String']['output']>;
        photoPerson: Array<Person>;
        postImagePostPage: Array<PostPage>;
        /** The time the document was published. Null on documents in draft stage. */
        publishedAt?: Maybe<Scalars['DateTime']['output']>;
        /** User that last published this document */
        publishedBy?: Maybe<User>;
        scheduledIn: Array<ScheduledOperation>;
        /** The file size */
        size?: Maybe<Scalars['Float']['output']>;
        /** System stage field */
        stage: Stage;
        /** The time the document was updated */
        updatedAt: Scalars['DateTime']['output'];
        /** User that last updated this document */
        updatedBy?: Maybe<User>;
        /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
        upload?: Maybe<AssetUpload>;
        /** Get the url for the asset with provided transformations applied. */
        url: Scalars['String']['output'];
        /** The file width */
        width?: Maybe<Scalars['Float']['output']>;
    };

/** Asset system model */
export type AssetCompanyLogoSiteConfigArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<SiteConfigOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<SiteConfigWhereInput>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean']['input'];
    inheritLocale?: Scalars['Boolean']['input'];
    stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
    limit?: Scalars['Int']['input'];
    skip?: Scalars['Int']['input'];
    stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
    includeCurrent?: Scalars['Boolean']['input'];
    locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPhotoPersonArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<PersonOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PersonWhereInput>;
};

/** Asset system model */
export type AssetPostImagePostPageArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<PostPageOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PostPageWhereInput>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
    transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
    __typename?: 'AssetConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<AssetEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type AssetCreateInput = {
    companyLogoSiteConfig?: InputMaybe<SiteConfigCreateManyInlineInput>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    fileName?: InputMaybe<Scalars['String']['input']>;
    imageHeroSection?: InputMaybe<HeroSectionCreateManyInlineInput>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: InputMaybe<AssetCreateLocalizationsInput>;
    logoImageLogoItem?: InputMaybe<LogoItemCreateManyInlineInput>;
    photoPerson?: InputMaybe<PersonCreateManyInlineInput>;
    postImagePostPage?: InputMaybe<PostPageCreateManyInlineInput>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
    uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationDataInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    fileName?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
    uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationInput = {
    /** Localization input */
    data: AssetCreateLocalizationDataInput;
    locale: Locale;
};

export type AssetCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
    /** Connect multiple existing Asset documents */
    connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Create and connect multiple existing Asset documents */
    create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
    /** Connect one existing Asset document */
    connect?: InputMaybe<AssetWhereUniqueInput>;
    /** Create and connect one Asset document */
    create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
    __typename?: 'AssetEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AssetWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    companyLogoSiteConfig_every?: InputMaybe<SiteConfigWhereInput>;
    companyLogoSiteConfig_none?: InputMaybe<SiteConfigWhereInput>;
    companyLogoSiteConfig_some?: InputMaybe<SiteConfigWhereInput>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<AssetWhereStageInput>;
    documentInStages_none?: InputMaybe<AssetWhereStageInput>;
    documentInStages_some?: InputMaybe<AssetWhereStageInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    photoPerson_every?: InputMaybe<PersonWhereInput>;
    photoPerson_none?: InputMaybe<PersonWhereInput>;
    photoPerson_some?: InputMaybe<PersonWhereInput>;
    postImagePostPage_every?: InputMaybe<PostPageWhereInput>;
    postImagePostPage_none?: InputMaybe<PostPageWhereInput>;
    postImagePostPage_some?: InputMaybe<PostPageWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
    upload?: InputMaybe<AssetUploadWhereInput>;
};

export enum AssetOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    FileNameAsc = 'fileName_ASC',
    FileNameDesc = 'fileName_DESC',
    HandleAsc = 'handle_ASC',
    HandleDesc = 'handle_DESC',
    HeightAsc = 'height_ASC',
    HeightDesc = 'height_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    MimeTypeAsc = 'mimeType_ASC',
    MimeTypeDesc = 'mimeType_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    SizeAsc = 'size_ASC',
    SizeDesc = 'size_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
    WidthAsc = 'width_ASC',
    WidthDesc = 'width_DESC'
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
    upload?: InputMaybe<AssetUploadWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
    document?: InputMaybe<DocumentTransformationInput>;
    image?: InputMaybe<ImageTransformationInput>;
    /** Pass true if you want to validate the passed transformation parameters */
    validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
    companyLogoSiteConfig?: InputMaybe<SiteConfigUpdateManyInlineInput>;
    fileName?: InputMaybe<Scalars['String']['input']>;
    imageHeroSection?: InputMaybe<HeroSectionUpdateManyInlineInput>;
    /** Manage document localizations */
    localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
    logoImageLogoItem?: InputMaybe<LogoItemUpdateManyInlineInput>;
    photoPerson?: InputMaybe<PersonUpdateManyInlineInput>;
    postImagePostPage?: InputMaybe<PostPageUpdateManyInlineInput>;
    /** Use this to define if its a reupload for the asset */
    reUpload?: InputMaybe<Scalars['Boolean']['input']>;
    /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
    uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
    fileName?: InputMaybe<Scalars['String']['input']>;
    /** Use this to define if its a reupload for the asset */
    reUpload?: InputMaybe<Scalars['Boolean']['input']>;
    /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
    uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationInput = {
    data: AssetUpdateLocalizationDataInput;
    locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: InputMaybe<Array<Locale>>;
    /** Localizations to update */
    update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
    upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
    /** Connect multiple existing Asset documents */
    connect?: InputMaybe<Array<AssetConnectInput>>;
    /** Create and connect multiple Asset documents */
    create?: InputMaybe<Array<AssetCreateInput>>;
    /** Delete multiple Asset documents */
    delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Disconnect multiple Asset documents */
    disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Asset documents */
    set?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Update multiple Asset documents */
    update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Asset documents */
    upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
    /** No fields in updateMany data input */
    _?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: AssetUpdateManyInput;
    /** Document search */
    where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
    /** Connect existing Asset document */
    connect?: InputMaybe<AssetWhereUniqueInput>;
    /** Create and connect one Asset document */
    create?: InputMaybe<AssetCreateInput>;
    /** Delete currently connected Asset document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected Asset document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single Asset document */
    update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Asset document */
    upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: AssetUpdateInput;
    /** Unique document search */
    where: AssetWhereUniqueInput;
};

/** Asset Upload */
export type AssetUpload = {
    __typename?: 'AssetUpload';
    /** Asset Upload Error */
    error?: Maybe<AssetUploadError>;
    /** Expiry Timestamp */
    expiresAt?: Maybe<Scalars['DateTime']['output']>;
    /** Asset Request Data for upload */
    requestPostData?: Maybe<AssetUploadRequestPostData>;
    /** Asset Request Data for upload */
    status?: Maybe<AssetUploadStatus>;
};

/** Represents asset upload error */
export type AssetUploadError = {
    __typename?: 'AssetUploadError';
    code: Scalars['String']['output'];
    message: Scalars['String']['output'];
};

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
    __typename?: 'AssetUploadRequestPostData';
    /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
    algorithm: Scalars['String']['output'];
    /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
    credential: Scalars['String']['output'];
    /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
    date: Scalars['String']['output'];
    /** The key to use in the form field. This value should be passed in the `Key` form field. */
    key: Scalars['String']['output'];
    /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
    policy: Scalars['String']['output'];
    /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
    securityToken?: Maybe<Scalars['String']['output']>;
    /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
    signature: Scalars['String']['output'];
    /** The URL to which the file should be uploaded with a POST request. */
    url: Scalars['String']['output'];
};

/** System Asset Upload Status */
export enum AssetUploadStatus {
    AssetCreatePending = 'ASSET_CREATE_PENDING',
    AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
    AssetUpdatePending = 'ASSET_UPDATE_PENDING',
    AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export type AssetUploadWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AssetUploadWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AssetUploadWhereInput>>;
    expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    status?: InputMaybe<AssetUploadStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
    /** Any other value that exists and is not equal to the given value. */
    status_not?: InputMaybe<AssetUploadStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

/** Identifies documents */
export type AssetUploadWhereStageInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AssetUploadWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AssetUploadWhereInput>>;
    expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    status?: InputMaybe<AssetUploadStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
    /** Any other value that exists and is not equal to the given value. */
    status_not?: InputMaybe<AssetUploadStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

export type AssetUpsertInput = {
    /** Create document if it didn't exist */
    create: AssetCreateInput;
    /** Update document if it exists */
    update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
    create: AssetCreateLocalizationDataInput;
    locale: Locale;
    update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: AssetUpsertInput;
    /** Unique document search */
    where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
    /** This field can be used to request to check if the entry is outdated by internal comparison */
    outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AssetWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    companyLogoSiteConfig_every?: InputMaybe<SiteConfigWhereInput>;
    companyLogoSiteConfig_none?: InputMaybe<SiteConfigWhereInput>;
    companyLogoSiteConfig_some?: InputMaybe<SiteConfigWhereInput>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<AssetWhereStageInput>;
    documentInStages_none?: InputMaybe<AssetWhereStageInput>;
    documentInStages_some?: InputMaybe<AssetWhereStageInput>;
    fileName?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    fileName_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    fileName_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
    handle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    handle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    handle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    handle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    handle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    handle_starts_with?: InputMaybe<Scalars['String']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    /** All values greater than the given value. */
    height_gt?: InputMaybe<Scalars['Float']['input']>;
    /** All values greater than or equal the given value. */
    height_gte?: InputMaybe<Scalars['Float']['input']>;
    /** All values that are contained in given list. */
    height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    /** All values less than the given value. */
    height_lt?: InputMaybe<Scalars['Float']['input']>;
    /** All values less than or equal the given value. */
    height_lte?: InputMaybe<Scalars['Float']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    height_not?: InputMaybe<Scalars['Float']['input']>;
    /** All values that are not contained in given list. */
    height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    mimeType_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    mimeType_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
    photoPerson_every?: InputMaybe<PersonWhereInput>;
    photoPerson_none?: InputMaybe<PersonWhereInput>;
    photoPerson_some?: InputMaybe<PersonWhereInput>;
    postImagePostPage_every?: InputMaybe<PostPageWhereInput>;
    postImagePostPage_none?: InputMaybe<PostPageWhereInput>;
    postImagePostPage_some?: InputMaybe<PostPageWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    size?: InputMaybe<Scalars['Float']['input']>;
    /** All values greater than the given value. */
    size_gt?: InputMaybe<Scalars['Float']['input']>;
    /** All values greater than or equal the given value. */
    size_gte?: InputMaybe<Scalars['Float']['input']>;
    /** All values that are contained in given list. */
    size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    /** All values less than the given value. */
    size_lt?: InputMaybe<Scalars['Float']['input']>;
    /** All values less than or equal the given value. */
    size_lte?: InputMaybe<Scalars['Float']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    size_not?: InputMaybe<Scalars['Float']['input']>;
    /** All values that are not contained in given list. */
    size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
    upload?: InputMaybe<AssetUploadWhereInput>;
    width?: InputMaybe<Scalars['Float']['input']>;
    /** All values greater than the given value. */
    width_gt?: InputMaybe<Scalars['Float']['input']>;
    /** All values greater than or equal the given value. */
    width_gte?: InputMaybe<Scalars['Float']['input']>;
    /** All values that are contained in given list. */
    width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    /** All values less than the given value. */
    width_lt?: InputMaybe<Scalars['Float']['input']>;
    /** All values less than or equal the given value. */
    width_lte?: InputMaybe<Scalars['Float']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    width_not?: InputMaybe<Scalars['Float']['input']>;
    /** All values that are not contained in given list. */
    width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AssetWhereStageInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AssetWhereStageInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AssetWhereStageInput>>;
    /** This field contains fields which can be set as true or false to specify an internal comparison */
    compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
    /** Specify the stage to compare with */
    stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
    __typename?: 'BatchPayload';
    /** The number of nodes that have been affected by the Batch operation. */
    count: Scalars['Long']['output'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
    __typename?: 'Color';
    css: Scalars['String']['output'];
    hex: Scalars['Hex']['output'];
    rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
    hex?: InputMaybe<Scalars['Hex']['input']>;
    rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
    /** Connect document after specified document */
    after?: InputMaybe<Scalars['ID']['input']>;
    /** Connect document before specified document */
    before?: InputMaybe<Scalars['ID']['input']>;
    /** Connect document at last position */
    end?: InputMaybe<Scalars['Boolean']['input']>;
    /** Connect document at first position */
    start?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactUsSection = Entity & {
    __typename?: 'ContactUsSection';
    /** The unique identifier */
    id: Scalars['ID']['output'];
    /** System stage field */
    stage: Stage;
    /** The subtitle is shown under the section's title. */
    subtitle?: Maybe<Scalars['String']['output']>;
    /** The section's title. */
    title?: Maybe<Scalars['String']['output']>;
};

export type ContactUsSectionConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ContactUsSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactUsSectionConnection = {
    __typename?: 'ContactUsSectionConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ContactUsSectionEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ContactUsSectionCreateInput = {
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUsSectionCreateManyInlineInput = {
    /** Create and connect multiple existing ContactUsSection documents */
    create?: InputMaybe<Array<ContactUsSectionCreateInput>>;
};

export type ContactUsSectionCreateOneInlineInput = {
    /** Create and connect one ContactUsSection document */
    create?: InputMaybe<ContactUsSectionCreateInput>;
};

export type ContactUsSectionCreateWithPositionInput = {
    /** Document to create */
    data: ContactUsSectionCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContactUsSectionEdge = {
    __typename?: 'ContactUsSectionEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: ContactUsSection;
};

/** Identifies documents */
export type ContactUsSectionManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ContactUsSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ContactUsSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ContactUsSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ContactUsSectionOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    SubtitleAsc = 'subtitle_ASC',
    SubtitleDesc = 'subtitle_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC'
}

export type ContactUsSectionParent = LandingPage;

export type ContactUsSectionParentConnectInput = {
    LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type ContactUsSectionParentCreateInput = {
    LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type ContactUsSectionParentCreateManyInlineInput = {
    /** Connect multiple existing ContactUsSectionParent documents */
    connect?: InputMaybe<Array<ContactUsSectionParentWhereUniqueInput>>;
    /** Create and connect multiple existing ContactUsSectionParent documents */
    create?: InputMaybe<Array<ContactUsSectionParentCreateInput>>;
};

export type ContactUsSectionParentCreateOneInlineInput = {
    /** Connect one existing ContactUsSectionParent document */
    connect?: InputMaybe<ContactUsSectionParentWhereUniqueInput>;
    /** Create and connect one ContactUsSectionParent document */
    create?: InputMaybe<ContactUsSectionParentCreateInput>;
};

export type ContactUsSectionParentUpdateInput = {
    LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type ContactUsSectionParentUpdateManyInlineInput = {
    /** Connect multiple existing ContactUsSectionParent documents */
    connect?: InputMaybe<Array<ContactUsSectionParentConnectInput>>;
    /** Create and connect multiple ContactUsSectionParent documents */
    create?: InputMaybe<Array<ContactUsSectionParentCreateInput>>;
    /** Delete multiple ContactUsSectionParent documents */
    delete?: InputMaybe<Array<ContactUsSectionParentWhereUniqueInput>>;
    /** Disconnect multiple ContactUsSectionParent documents */
    disconnect?: InputMaybe<Array<ContactUsSectionParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ContactUsSectionParent documents */
    set?: InputMaybe<Array<ContactUsSectionParentWhereUniqueInput>>;
    /** Update multiple ContactUsSectionParent documents */
    update?: InputMaybe<Array<ContactUsSectionParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple ContactUsSectionParent documents */
    upsert?: InputMaybe<Array<ContactUsSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type ContactUsSectionParentUpdateManyWithNestedWhereInput = {
    LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type ContactUsSectionParentUpdateOneInlineInput = {
    /** Connect existing ContactUsSectionParent document */
    connect?: InputMaybe<ContactUsSectionParentWhereUniqueInput>;
    /** Create and connect one ContactUsSectionParent document */
    create?: InputMaybe<ContactUsSectionParentCreateInput>;
    /** Delete currently connected ContactUsSectionParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected ContactUsSectionParent document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single ContactUsSectionParent document */
    update?: InputMaybe<ContactUsSectionParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ContactUsSectionParent document */
    upsert?: InputMaybe<ContactUsSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type ContactUsSectionParentUpdateWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type ContactUsSectionParentUpsertWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type ContactUsSectionParentWhereInput = {
    LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type ContactUsSectionParentWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type ContactUsSectionUpdateInput = {
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUsSectionUpdateManyInlineInput = {
    /** Create and connect multiple ContactUsSection component instances */
    create?: InputMaybe<Array<ContactUsSectionCreateWithPositionInput>>;
    /** Delete multiple ContactUsSection documents */
    delete?: InputMaybe<Array<ContactUsSectionWhereUniqueInput>>;
    /** Update multiple ContactUsSection component instances */
    update?: InputMaybe<Array<ContactUsSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple ContactUsSection component instances */
    upsert?: InputMaybe<Array<ContactUsSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactUsSectionUpdateManyInput = {
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUsSectionUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ContactUsSectionUpdateManyInput;
    /** Document search */
    where: ContactUsSectionWhereInput;
};

export type ContactUsSectionUpdateOneInlineInput = {
    /** Create and connect one ContactUsSection document */
    create?: InputMaybe<ContactUsSectionCreateInput>;
    /** Delete currently connected ContactUsSection document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single ContactUsSection document */
    update?: InputMaybe<ContactUsSectionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ContactUsSection document */
    upsert?: InputMaybe<ContactUsSectionUpsertWithNestedWhereUniqueInput>;
};

export type ContactUsSectionUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<ContactUsSectionUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: ContactUsSectionWhereUniqueInput;
};

export type ContactUsSectionUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ContactUsSectionUpdateInput;
    /** Unique document search */
    where: ContactUsSectionWhereUniqueInput;
};

export type ContactUsSectionUpsertInput = {
    /** Create document if it didn't exist */
    create: ContactUsSectionCreateInput;
    /** Update document if it exists */
    update: ContactUsSectionUpdateInput;
};

export type ContactUsSectionUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<ContactUsSectionUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: ContactUsSectionWhereUniqueInput;
};

export type ContactUsSectionUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ContactUsSectionUpsertInput;
    /** Unique document search */
    where: ContactUsSectionWhereUniqueInput;
};

/** Identifies documents */
export type ContactUsSectionWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ContactUsSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ContactUsSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ContactUsSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References ContactUsSection record uniquely */
export type ContactUsSectionWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type CtaSection = Entity & {
    __typename?: 'CtaSection';
    actions: Array<Action>;
    /** The unique identifier */
    id: Scalars['ID']['output'];
    /** System stage field */
    stage: Stage;
    /** The subtitle is shown under the section's title. */
    subtitle?: Maybe<Scalars['String']['output']>;
    /** The section's title. */
    title?: Maybe<Scalars['String']['output']>;
};

export type CtaSectionActionsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<ActionOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ActionWhereInput>;
};

export type CtaSectionConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: CtaSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CtaSectionConnection = {
    __typename?: 'CtaSectionConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<CtaSectionEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type CtaSectionCreateInput = {
    actions?: InputMaybe<ActionCreateManyInlineInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type CtaSectionCreateManyInlineInput = {
    /** Create and connect multiple existing CtaSection documents */
    create?: InputMaybe<Array<CtaSectionCreateInput>>;
};

export type CtaSectionCreateOneInlineInput = {
    /** Create and connect one CtaSection document */
    create?: InputMaybe<CtaSectionCreateInput>;
};

export type CtaSectionCreateWithPositionInput = {
    /** Document to create */
    data: CtaSectionCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CtaSectionEdge = {
    __typename?: 'CtaSectionEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: CtaSection;
};

/** Identifies documents */
export type CtaSectionManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CtaSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CtaSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CtaSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    actions_every?: InputMaybe<ActionWhereInput>;
    actions_none?: InputMaybe<ActionWhereInput>;
    actions_some?: InputMaybe<ActionWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum CtaSectionOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    SubtitleAsc = 'subtitle_ASC',
    SubtitleDesc = 'subtitle_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC'
}

export type CtaSectionParent = LandingPage;

export type CtaSectionParentConnectInput = {
    LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type CtaSectionParentCreateInput = {
    LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type CtaSectionParentCreateManyInlineInput = {
    /** Connect multiple existing CtaSectionParent documents */
    connect?: InputMaybe<Array<CtaSectionParentWhereUniqueInput>>;
    /** Create and connect multiple existing CtaSectionParent documents */
    create?: InputMaybe<Array<CtaSectionParentCreateInput>>;
};

export type CtaSectionParentCreateOneInlineInput = {
    /** Connect one existing CtaSectionParent document */
    connect?: InputMaybe<CtaSectionParentWhereUniqueInput>;
    /** Create and connect one CtaSectionParent document */
    create?: InputMaybe<CtaSectionParentCreateInput>;
};

export type CtaSectionParentUpdateInput = {
    LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type CtaSectionParentUpdateManyInlineInput = {
    /** Connect multiple existing CtaSectionParent documents */
    connect?: InputMaybe<Array<CtaSectionParentConnectInput>>;
    /** Create and connect multiple CtaSectionParent documents */
    create?: InputMaybe<Array<CtaSectionParentCreateInput>>;
    /** Delete multiple CtaSectionParent documents */
    delete?: InputMaybe<Array<CtaSectionParentWhereUniqueInput>>;
    /** Disconnect multiple CtaSectionParent documents */
    disconnect?: InputMaybe<Array<CtaSectionParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing CtaSectionParent documents */
    set?: InputMaybe<Array<CtaSectionParentWhereUniqueInput>>;
    /** Update multiple CtaSectionParent documents */
    update?: InputMaybe<Array<CtaSectionParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple CtaSectionParent documents */
    upsert?: InputMaybe<Array<CtaSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type CtaSectionParentUpdateManyWithNestedWhereInput = {
    LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type CtaSectionParentUpdateOneInlineInput = {
    /** Connect existing CtaSectionParent document */
    connect?: InputMaybe<CtaSectionParentWhereUniqueInput>;
    /** Create and connect one CtaSectionParent document */
    create?: InputMaybe<CtaSectionParentCreateInput>;
    /** Delete currently connected CtaSectionParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected CtaSectionParent document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single CtaSectionParent document */
    update?: InputMaybe<CtaSectionParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single CtaSectionParent document */
    upsert?: InputMaybe<CtaSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type CtaSectionParentUpdateWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type CtaSectionParentUpsertWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type CtaSectionParentWhereInput = {
    LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type CtaSectionParentWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type CtaSectionUpdateInput = {
    actions?: InputMaybe<ActionUpdateManyInlineInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type CtaSectionUpdateManyInlineInput = {
    /** Create and connect multiple CtaSection component instances */
    create?: InputMaybe<Array<CtaSectionCreateWithPositionInput>>;
    /** Delete multiple CtaSection documents */
    delete?: InputMaybe<Array<CtaSectionWhereUniqueInput>>;
    /** Update multiple CtaSection component instances */
    update?: InputMaybe<Array<CtaSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple CtaSection component instances */
    upsert?: InputMaybe<Array<CtaSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CtaSectionUpdateManyInput = {
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type CtaSectionUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: CtaSectionUpdateManyInput;
    /** Document search */
    where: CtaSectionWhereInput;
};

export type CtaSectionUpdateOneInlineInput = {
    /** Create and connect one CtaSection document */
    create?: InputMaybe<CtaSectionCreateInput>;
    /** Delete currently connected CtaSection document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single CtaSection document */
    update?: InputMaybe<CtaSectionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single CtaSection document */
    upsert?: InputMaybe<CtaSectionUpsertWithNestedWhereUniqueInput>;
};

export type CtaSectionUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<CtaSectionUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: CtaSectionWhereUniqueInput;
};

export type CtaSectionUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: CtaSectionUpdateInput;
    /** Unique document search */
    where: CtaSectionWhereUniqueInput;
};

export type CtaSectionUpsertInput = {
    /** Create document if it didn't exist */
    create: CtaSectionCreateInput;
    /** Update document if it exists */
    update: CtaSectionUpdateInput;
};

export type CtaSectionUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<CtaSectionUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: CtaSectionWhereUniqueInput;
};

export type CtaSectionUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: CtaSectionUpsertInput;
    /** Unique document search */
    where: CtaSectionWhereUniqueInput;
};

/** Identifies documents */
export type CtaSectionWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CtaSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CtaSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CtaSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    actions_every?: InputMaybe<ActionWhereInput>;
    actions_none?: InputMaybe<ActionWhereInput>;
    actions_some?: InputMaybe<ActionWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References CtaSection record uniquely */
export type CtaSectionWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export enum DocumentFileTypes {
    /** Automatically selects the best format for the image based on the browser's capabilities. */
    AutoImage = 'autoImage',
    Avif = 'avif',
    Bmp = 'bmp',
    Gif = 'gif',
    Heic = 'heic',
    Jpg = 'jpg',
    Png = 'png',
    Svg = 'svg',
    Tiff = 'tiff',
    Webp = 'webp'
}

export type DocumentOutputInput = {
    /**
     * Transforms a document into a desired file type.
     * See this matrix for format support:
     *
     * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
     * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
     * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
     * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
     * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
     * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
     * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
     * PDF: 	autoImage, gif, jpg, png, webp, tiff
     *
     */
    format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
    /** Changes the output for the file. */
    output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
    __typename?: 'DocumentVersion';
    createdAt: Scalars['DateTime']['output'];
    data?: Maybe<Scalars['Json']['output']>;
    id: Scalars['ID']['output'];
    revision: Scalars['Int']['output'];
    stage: Stage;
};

/** An object with an ID */
export type Entity = {
    /** The id of the object. */
    id: Scalars['ID']['output'];
    /** The Stage of an object */
    stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
    Action = 'Action',
    /** Asset system model */
    Asset = 'Asset',
    ContactUsSection = 'ContactUsSection',
    CtaSection = 'CtaSection',
    FeatureItem = 'FeatureItem',
    FeaturesSection = 'FeaturesSection',
    Footer = 'Footer',
    FooterLinksColumn = 'FooterLinksColumn',
    HeroSection = 'HeroSection',
    /** A page with list of different sections */
    LandingPage = 'LandingPage',
    Link = 'Link',
    LogoItem = 'LogoItem',
    LogosSection = 'LogosSection',
    NavigationBar = 'NavigationBar',
    Person = 'Person',
    PostPage = 'PostPage',
    PricingPlan = 'PricingPlan',
    PricingSection = 'PricingSection',
    /** Scheduled Operation system model */
    ScheduledOperation = 'ScheduledOperation',
    /** Scheduled Release system model */
    ScheduledRelease = 'ScheduledRelease',
    SiteConfig = 'SiteConfig',
    /** Social icon link component used in team section. */
    SocialIconLink = 'SocialIconLink',
    TeamSection = 'TeamSection',
    /** User system model */
    User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
    /** The ID of an object */
    id: Scalars['ID']['input'];
    locale?: InputMaybe<Locale>;
    stage: Stage;
    /** The Type name of an object */
    typename: EntityTypeName;
};

export type FeatureItem = Entity & {
    __typename?: 'FeatureItem';
    content?: Maybe<Scalars['String']['output']>;
    /** The icon must match one of the icon names from flaticon.com, e.g., "fi-brands-instagram". */
    icon?: Maybe<Scalars['String']['output']>;
    /** The unique identifier */
    id: Scalars['ID']['output'];
    /** System stage field */
    stage: Stage;
    title?: Maybe<Scalars['String']['output']>;
};

export type FeatureItemConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: FeatureItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type FeatureItemConnection = {
    __typename?: 'FeatureItemConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<FeatureItemEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type FeatureItemCreateInput = {
    content?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureItemCreateManyInlineInput = {
    /** Create and connect multiple existing FeatureItem documents */
    create?: InputMaybe<Array<FeatureItemCreateInput>>;
};

export type FeatureItemCreateOneInlineInput = {
    /** Create and connect one FeatureItem document */
    create?: InputMaybe<FeatureItemCreateInput>;
};

export type FeatureItemCreateWithPositionInput = {
    /** Document to create */
    data: FeatureItemCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FeatureItemEdge = {
    __typename?: 'FeatureItemEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: FeatureItem;
};

/** Identifies documents */
export type FeatureItemManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<FeatureItemWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<FeatureItemWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<FeatureItemWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    content?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    content_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    content_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    content_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    content_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    content_starts_with?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    icon_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    icon_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    icon_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    icon_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    icon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    icon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    icon_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum FeatureItemOrderByInput {
    ContentAsc = 'content_ASC',
    ContentDesc = 'content_DESC',
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC'
}

export type FeatureItemParent = FeaturesSection;

export type FeatureItemParentConnectInput = {
    FeaturesSection?: InputMaybe<FeaturesSectionConnectInput>;
};

export type FeatureItemParentCreateInput = {
    FeaturesSection?: InputMaybe<FeaturesSectionCreateInput>;
};

export type FeatureItemParentCreateManyInlineInput = {
    /** Create and connect multiple existing FeatureItemParent documents */
    create?: InputMaybe<Array<FeatureItemParentCreateInput>>;
};

export type FeatureItemParentCreateOneInlineInput = {
    /** Create and connect one FeatureItemParent document */
    create?: InputMaybe<FeatureItemParentCreateInput>;
};

export type FeatureItemParentCreateWithPositionInput = {
    FeaturesSection?: InputMaybe<FeaturesSectionCreateWithPositionInput>;
};

export type FeatureItemParentUpdateInput = {
    FeaturesSection?: InputMaybe<FeaturesSectionUpdateInput>;
};

export type FeatureItemParentUpdateManyInlineInput = {
    /** Create and connect multiple FeatureItemParent component instances */
    create?: InputMaybe<Array<FeatureItemParentCreateWithPositionInput>>;
    /** Delete multiple FeatureItemParent documents */
    delete?: InputMaybe<Array<FeatureItemParentWhereUniqueInput>>;
    /** Update multiple FeatureItemParent component instances */
    update?: InputMaybe<Array<FeatureItemParentUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple FeatureItemParent component instances */
    upsert?: InputMaybe<Array<FeatureItemParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FeatureItemParentUpdateManyWithNestedWhereInput = {
    FeaturesSection?: InputMaybe<FeaturesSectionUpdateManyWithNestedWhereInput>;
};

export type FeatureItemParentUpdateOneInlineInput = {
    /** Create and connect one FeatureItemParent document */
    create?: InputMaybe<FeatureItemParentCreateInput>;
    /** Delete currently connected FeatureItemParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single FeatureItemParent document */
    update?: InputMaybe<FeatureItemParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single FeatureItemParent document */
    upsert?: InputMaybe<FeatureItemParentUpsertWithNestedWhereUniqueInput>;
};

export type FeatureItemParentUpdateWithNestedWhereUniqueAndPositionInput = {
    FeaturesSection?: InputMaybe<FeaturesSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type FeatureItemParentUpdateWithNestedWhereUniqueInput = {
    FeaturesSection?: InputMaybe<FeaturesSectionUpdateWithNestedWhereUniqueInput>;
};

export type FeatureItemParentUpsertWithNestedWhereUniqueAndPositionInput = {
    FeaturesSection?: InputMaybe<FeaturesSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type FeatureItemParentUpsertWithNestedWhereUniqueInput = {
    FeaturesSection?: InputMaybe<FeaturesSectionUpsertWithNestedWhereUniqueInput>;
};

export type FeatureItemParentWhereInput = {
    FeaturesSection?: InputMaybe<FeaturesSectionWhereInput>;
};

export type FeatureItemParentWhereUniqueInput = {
    FeaturesSection?: InputMaybe<FeaturesSectionWhereUniqueInput>;
};

export type FeatureItemUpdateInput = {
    content?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureItemUpdateManyInlineInput = {
    /** Create and connect multiple FeatureItem component instances */
    create?: InputMaybe<Array<FeatureItemCreateWithPositionInput>>;
    /** Delete multiple FeatureItem documents */
    delete?: InputMaybe<Array<FeatureItemWhereUniqueInput>>;
    /** Update multiple FeatureItem component instances */
    update?: InputMaybe<Array<FeatureItemUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple FeatureItem component instances */
    upsert?: InputMaybe<Array<FeatureItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FeatureItemUpdateManyInput = {
    content?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureItemUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: FeatureItemUpdateManyInput;
    /** Document search */
    where: FeatureItemWhereInput;
};

export type FeatureItemUpdateOneInlineInput = {
    /** Create and connect one FeatureItem document */
    create?: InputMaybe<FeatureItemCreateInput>;
    /** Delete currently connected FeatureItem document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single FeatureItem document */
    update?: InputMaybe<FeatureItemUpdateWithNestedWhereUniqueInput>;
    /** Upsert single FeatureItem document */
    upsert?: InputMaybe<FeatureItemUpsertWithNestedWhereUniqueInput>;
};

export type FeatureItemUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<FeatureItemUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: FeatureItemWhereUniqueInput;
};

export type FeatureItemUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: FeatureItemUpdateInput;
    /** Unique document search */
    where: FeatureItemWhereUniqueInput;
};

export type FeatureItemUpsertInput = {
    /** Create document if it didn't exist */
    create: FeatureItemCreateInput;
    /** Update document if it exists */
    update: FeatureItemUpdateInput;
};

export type FeatureItemUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<FeatureItemUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: FeatureItemWhereUniqueInput;
};

export type FeatureItemUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: FeatureItemUpsertInput;
    /** Unique document search */
    where: FeatureItemWhereUniqueInput;
};

/** Identifies documents */
export type FeatureItemWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<FeatureItemWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<FeatureItemWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<FeatureItemWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    content?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    content_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    content_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    content_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    content_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    content_starts_with?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    icon_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    icon_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    icon_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    icon_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    icon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    icon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    icon_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References FeatureItem record uniquely */
export type FeatureItemWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type FeaturesSection = Entity & {
    __typename?: 'FeaturesSection';
    features: Array<FeatureItem>;
    /** The unique identifier */
    id: Scalars['ID']['output'];
    /** System stage field */
    stage: Stage;
    /** The subtitle is shown under the section's title. */
    subtitle?: Maybe<Scalars['String']['output']>;
    /** The section's title. */
    title?: Maybe<Scalars['String']['output']>;
};

export type FeaturesSectionFeaturesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<FeatureItemOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<FeatureItemWhereInput>;
};

export type FeaturesSectionConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: FeaturesSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type FeaturesSectionConnection = {
    __typename?: 'FeaturesSectionConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<FeaturesSectionEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type FeaturesSectionCreateInput = {
    features?: InputMaybe<FeatureItemCreateManyInlineInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturesSectionCreateManyInlineInput = {
    /** Create and connect multiple existing FeaturesSection documents */
    create?: InputMaybe<Array<FeaturesSectionCreateInput>>;
};

export type FeaturesSectionCreateOneInlineInput = {
    /** Create and connect one FeaturesSection document */
    create?: InputMaybe<FeaturesSectionCreateInput>;
};

export type FeaturesSectionCreateWithPositionInput = {
    /** Document to create */
    data: FeaturesSectionCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FeaturesSectionEdge = {
    __typename?: 'FeaturesSectionEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: FeaturesSection;
};

/** Identifies documents */
export type FeaturesSectionManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<FeaturesSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<FeaturesSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<FeaturesSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    features_every?: InputMaybe<FeatureItemWhereInput>;
    features_none?: InputMaybe<FeatureItemWhereInput>;
    features_some?: InputMaybe<FeatureItemWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum FeaturesSectionOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    SubtitleAsc = 'subtitle_ASC',
    SubtitleDesc = 'subtitle_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC'
}

export type FeaturesSectionParent = LandingPage;

export type FeaturesSectionParentConnectInput = {
    LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type FeaturesSectionParentCreateInput = {
    LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type FeaturesSectionParentCreateManyInlineInput = {
    /** Connect multiple existing FeaturesSectionParent documents */
    connect?: InputMaybe<Array<FeaturesSectionParentWhereUniqueInput>>;
    /** Create and connect multiple existing FeaturesSectionParent documents */
    create?: InputMaybe<Array<FeaturesSectionParentCreateInput>>;
};

export type FeaturesSectionParentCreateOneInlineInput = {
    /** Connect one existing FeaturesSectionParent document */
    connect?: InputMaybe<FeaturesSectionParentWhereUniqueInput>;
    /** Create and connect one FeaturesSectionParent document */
    create?: InputMaybe<FeaturesSectionParentCreateInput>;
};

export type FeaturesSectionParentUpdateInput = {
    LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type FeaturesSectionParentUpdateManyInlineInput = {
    /** Connect multiple existing FeaturesSectionParent documents */
    connect?: InputMaybe<Array<FeaturesSectionParentConnectInput>>;
    /** Create and connect multiple FeaturesSectionParent documents */
    create?: InputMaybe<Array<FeaturesSectionParentCreateInput>>;
    /** Delete multiple FeaturesSectionParent documents */
    delete?: InputMaybe<Array<FeaturesSectionParentWhereUniqueInput>>;
    /** Disconnect multiple FeaturesSectionParent documents */
    disconnect?: InputMaybe<Array<FeaturesSectionParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing FeaturesSectionParent documents */
    set?: InputMaybe<Array<FeaturesSectionParentWhereUniqueInput>>;
    /** Update multiple FeaturesSectionParent documents */
    update?: InputMaybe<Array<FeaturesSectionParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple FeaturesSectionParent documents */
    upsert?: InputMaybe<Array<FeaturesSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type FeaturesSectionParentUpdateManyWithNestedWhereInput = {
    LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type FeaturesSectionParentUpdateOneInlineInput = {
    /** Connect existing FeaturesSectionParent document */
    connect?: InputMaybe<FeaturesSectionParentWhereUniqueInput>;
    /** Create and connect one FeaturesSectionParent document */
    create?: InputMaybe<FeaturesSectionParentCreateInput>;
    /** Delete currently connected FeaturesSectionParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected FeaturesSectionParent document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single FeaturesSectionParent document */
    update?: InputMaybe<FeaturesSectionParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single FeaturesSectionParent document */
    upsert?: InputMaybe<FeaturesSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type FeaturesSectionParentUpdateWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type FeaturesSectionParentUpsertWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type FeaturesSectionParentWhereInput = {
    LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type FeaturesSectionParentWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type FeaturesSectionUpdateInput = {
    features?: InputMaybe<FeatureItemUpdateManyInlineInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturesSectionUpdateManyInlineInput = {
    /** Create and connect multiple FeaturesSection component instances */
    create?: InputMaybe<Array<FeaturesSectionCreateWithPositionInput>>;
    /** Delete multiple FeaturesSection documents */
    delete?: InputMaybe<Array<FeaturesSectionWhereUniqueInput>>;
    /** Update multiple FeaturesSection component instances */
    update?: InputMaybe<Array<FeaturesSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple FeaturesSection component instances */
    upsert?: InputMaybe<Array<FeaturesSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FeaturesSectionUpdateManyInput = {
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturesSectionUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: FeaturesSectionUpdateManyInput;
    /** Document search */
    where: FeaturesSectionWhereInput;
};

export type FeaturesSectionUpdateOneInlineInput = {
    /** Create and connect one FeaturesSection document */
    create?: InputMaybe<FeaturesSectionCreateInput>;
    /** Delete currently connected FeaturesSection document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single FeaturesSection document */
    update?: InputMaybe<FeaturesSectionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single FeaturesSection document */
    upsert?: InputMaybe<FeaturesSectionUpsertWithNestedWhereUniqueInput>;
};

export type FeaturesSectionUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<FeaturesSectionUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: FeaturesSectionWhereUniqueInput;
};

export type FeaturesSectionUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: FeaturesSectionUpdateInput;
    /** Unique document search */
    where: FeaturesSectionWhereUniqueInput;
};

export type FeaturesSectionUpsertInput = {
    /** Create document if it didn't exist */
    create: FeaturesSectionCreateInput;
    /** Update document if it exists */
    update: FeaturesSectionUpdateInput;
};

export type FeaturesSectionUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<FeaturesSectionUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: FeaturesSectionWhereUniqueInput;
};

export type FeaturesSectionUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: FeaturesSectionUpsertInput;
    /** Unique document search */
    where: FeaturesSectionWhereUniqueInput;
};

/** Identifies documents */
export type FeaturesSectionWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<FeaturesSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<FeaturesSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<FeaturesSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    features_every?: InputMaybe<FeatureItemWhereInput>;
    features_none?: InputMaybe<FeatureItemWhereInput>;
    features_some?: InputMaybe<FeatureItemWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References FeaturesSection record uniquely */
export type FeaturesSectionWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type Footer = Entity & {
    __typename?: 'Footer';
    copyright?: Maybe<Scalars['String']['output']>;
    /** The unique identifier */
    id: Scalars['ID']['output'];
    linkColumns: Array<FooterLinksColumn>;
    socialIconLinks: Array<SocialIconLink>;
    /** System stage field */
    stage: Stage;
};

export type FooterLinkColumnsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<FooterLinksColumnOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<FooterLinksColumnWhereInput>;
};

export type FooterSocialIconLinksArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<SocialIconLinkOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<SocialIconLinkWhereInput>;
};

export type FooterConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: FooterWhereUniqueInput;
};

/** A connection to a list of items. */
export type FooterConnection = {
    __typename?: 'FooterConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<FooterEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type FooterCreateInput = {
    copyright?: InputMaybe<Scalars['String']['input']>;
    linkColumns?: InputMaybe<FooterLinksColumnCreateManyInlineInput>;
    socialIconLinks?: InputMaybe<SocialIconLinkCreateManyInlineInput>;
};

export type FooterCreateManyInlineInput = {
    /** Create and connect multiple existing Footer documents */
    create?: InputMaybe<Array<FooterCreateInput>>;
};

export type FooterCreateOneInlineInput = {
    /** Create and connect one Footer document */
    create?: InputMaybe<FooterCreateInput>;
};

export type FooterCreateWithPositionInput = {
    /** Document to create */
    data: FooterCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FooterEdge = {
    __typename?: 'FooterEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: Footer;
};

export type FooterLinksColumn = Entity & {
    __typename?: 'FooterLinksColumn';
    /** The unique identifier */
    id: Scalars['ID']['output'];
    label: Scalars['String']['output'];
    links: Array<Link>;
    /** System stage field */
    stage: Stage;
};

export type FooterLinksColumnLinksArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<LinkOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LinkWhereInput>;
};

export type FooterLinksColumnConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: FooterLinksColumnWhereUniqueInput;
};

/** A connection to a list of items. */
export type FooterLinksColumnConnection = {
    __typename?: 'FooterLinksColumnConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<FooterLinksColumnEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type FooterLinksColumnCreateInput = {
    label: Scalars['String']['input'];
    links?: InputMaybe<LinkCreateManyInlineInput>;
};

export type FooterLinksColumnCreateManyInlineInput = {
    /** Create and connect multiple existing FooterLinksColumn documents */
    create?: InputMaybe<Array<FooterLinksColumnCreateInput>>;
};

export type FooterLinksColumnCreateOneInlineInput = {
    /** Create and connect one FooterLinksColumn document */
    create?: InputMaybe<FooterLinksColumnCreateInput>;
};

export type FooterLinksColumnCreateWithPositionInput = {
    /** Document to create */
    data: FooterLinksColumnCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FooterLinksColumnEdge = {
    __typename?: 'FooterLinksColumnEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: FooterLinksColumn;
};

/** Identifies documents */
export type FooterLinksColumnManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<FooterLinksColumnWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<FooterLinksColumnWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<FooterLinksColumnWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    label_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    label_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    label_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    label_starts_with?: InputMaybe<Scalars['String']['input']>;
    links_every?: InputMaybe<LinkWhereInput>;
    links_none?: InputMaybe<LinkWhereInput>;
    links_some?: InputMaybe<LinkWhereInput>;
};

export enum FooterLinksColumnOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC'
}

export type FooterLinksColumnParent = Footer;

export type FooterLinksColumnParentConnectInput = {
    Footer?: InputMaybe<FooterConnectInput>;
};

export type FooterLinksColumnParentCreateInput = {
    Footer?: InputMaybe<FooterCreateInput>;
};

export type FooterLinksColumnParentCreateManyInlineInput = {
    /** Create and connect multiple existing FooterLinksColumnParent documents */
    create?: InputMaybe<Array<FooterLinksColumnParentCreateInput>>;
};

export type FooterLinksColumnParentCreateOneInlineInput = {
    /** Create and connect one FooterLinksColumnParent document */
    create?: InputMaybe<FooterLinksColumnParentCreateInput>;
};

export type FooterLinksColumnParentCreateWithPositionInput = {
    Footer?: InputMaybe<FooterCreateWithPositionInput>;
};

export type FooterLinksColumnParentUpdateInput = {
    Footer?: InputMaybe<FooterUpdateInput>;
};

export type FooterLinksColumnParentUpdateManyInlineInput = {
    /** Create and connect multiple FooterLinksColumnParent component instances */
    create?: InputMaybe<Array<FooterLinksColumnParentCreateWithPositionInput>>;
    /** Delete multiple FooterLinksColumnParent documents */
    delete?: InputMaybe<Array<FooterLinksColumnParentWhereUniqueInput>>;
    /** Update multiple FooterLinksColumnParent component instances */
    update?: InputMaybe<Array<FooterLinksColumnParentUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple FooterLinksColumnParent component instances */
    upsert?: InputMaybe<Array<FooterLinksColumnParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FooterLinksColumnParentUpdateManyWithNestedWhereInput = {
    Footer?: InputMaybe<FooterUpdateManyWithNestedWhereInput>;
};

export type FooterLinksColumnParentUpdateOneInlineInput = {
    /** Create and connect one FooterLinksColumnParent document */
    create?: InputMaybe<FooterLinksColumnParentCreateInput>;
    /** Delete currently connected FooterLinksColumnParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single FooterLinksColumnParent document */
    update?: InputMaybe<FooterLinksColumnParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single FooterLinksColumnParent document */
    upsert?: InputMaybe<FooterLinksColumnParentUpsertWithNestedWhereUniqueInput>;
};

export type FooterLinksColumnParentUpdateWithNestedWhereUniqueAndPositionInput = {
    Footer?: InputMaybe<FooterUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type FooterLinksColumnParentUpdateWithNestedWhereUniqueInput = {
    Footer?: InputMaybe<FooterUpdateWithNestedWhereUniqueInput>;
};

export type FooterLinksColumnParentUpsertWithNestedWhereUniqueAndPositionInput = {
    Footer?: InputMaybe<FooterUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type FooterLinksColumnParentUpsertWithNestedWhereUniqueInput = {
    Footer?: InputMaybe<FooterUpsertWithNestedWhereUniqueInput>;
};

export type FooterLinksColumnParentWhereInput = {
    Footer?: InputMaybe<FooterWhereInput>;
};

export type FooterLinksColumnParentWhereUniqueInput = {
    Footer?: InputMaybe<FooterWhereUniqueInput>;
};

export type FooterLinksColumnUpdateInput = {
    label?: InputMaybe<Scalars['String']['input']>;
    links?: InputMaybe<LinkUpdateManyInlineInput>;
};

export type FooterLinksColumnUpdateManyInlineInput = {
    /** Create and connect multiple FooterLinksColumn component instances */
    create?: InputMaybe<Array<FooterLinksColumnCreateWithPositionInput>>;
    /** Delete multiple FooterLinksColumn documents */
    delete?: InputMaybe<Array<FooterLinksColumnWhereUniqueInput>>;
    /** Update multiple FooterLinksColumn component instances */
    update?: InputMaybe<Array<FooterLinksColumnUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple FooterLinksColumn component instances */
    upsert?: InputMaybe<Array<FooterLinksColumnUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FooterLinksColumnUpdateManyInput = {
    label?: InputMaybe<Scalars['String']['input']>;
};

export type FooterLinksColumnUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: FooterLinksColumnUpdateManyInput;
    /** Document search */
    where: FooterLinksColumnWhereInput;
};

export type FooterLinksColumnUpdateOneInlineInput = {
    /** Create and connect one FooterLinksColumn document */
    create?: InputMaybe<FooterLinksColumnCreateInput>;
    /** Delete currently connected FooterLinksColumn document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single FooterLinksColumn document */
    update?: InputMaybe<FooterLinksColumnUpdateWithNestedWhereUniqueInput>;
    /** Upsert single FooterLinksColumn document */
    upsert?: InputMaybe<FooterLinksColumnUpsertWithNestedWhereUniqueInput>;
};

export type FooterLinksColumnUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<FooterLinksColumnUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: FooterLinksColumnWhereUniqueInput;
};

export type FooterLinksColumnUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: FooterLinksColumnUpdateInput;
    /** Unique document search */
    where: FooterLinksColumnWhereUniqueInput;
};

export type FooterLinksColumnUpsertInput = {
    /** Create document if it didn't exist */
    create: FooterLinksColumnCreateInput;
    /** Update document if it exists */
    update: FooterLinksColumnUpdateInput;
};

export type FooterLinksColumnUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<FooterLinksColumnUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: FooterLinksColumnWhereUniqueInput;
};

export type FooterLinksColumnUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: FooterLinksColumnUpsertInput;
    /** Unique document search */
    where: FooterLinksColumnWhereUniqueInput;
};

/** Identifies documents */
export type FooterLinksColumnWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<FooterLinksColumnWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<FooterLinksColumnWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<FooterLinksColumnWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    label_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    label_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    label_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    label_starts_with?: InputMaybe<Scalars['String']['input']>;
    links_every?: InputMaybe<LinkWhereInput>;
    links_none?: InputMaybe<LinkWhereInput>;
    links_some?: InputMaybe<LinkWhereInput>;
};

/** References FooterLinksColumn record uniquely */
export type FooterLinksColumnWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type FooterManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<FooterWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<FooterWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<FooterWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    copyright?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    copyright_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    copyright_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    copyright_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    copyright_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    copyright_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    copyright_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    copyright_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    linkColumns_every?: InputMaybe<FooterLinksColumnWhereInput>;
    linkColumns_none?: InputMaybe<FooterLinksColumnWhereInput>;
    linkColumns_some?: InputMaybe<FooterLinksColumnWhereInput>;
    socialIconLinks_every?: InputMaybe<SocialIconLinkWhereInput>;
    socialIconLinks_none?: InputMaybe<SocialIconLinkWhereInput>;
    socialIconLinks_some?: InputMaybe<SocialIconLinkWhereInput>;
};

export enum FooterOrderByInput {
    CopyrightAsc = 'copyright_ASC',
    CopyrightDesc = 'copyright_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC'
}

export type FooterParent = SiteConfig;

export type FooterParentConnectInput = {
    SiteConfig?: InputMaybe<SiteConfigConnectInput>;
};

export type FooterParentCreateInput = {
    SiteConfig?: InputMaybe<SiteConfigCreateInput>;
};

export type FooterParentCreateManyInlineInput = {
    /** Connect multiple existing FooterParent documents */
    connect?: InputMaybe<Array<FooterParentWhereUniqueInput>>;
    /** Create and connect multiple existing FooterParent documents */
    create?: InputMaybe<Array<FooterParentCreateInput>>;
};

export type FooterParentCreateOneInlineInput = {
    /** Connect one existing FooterParent document */
    connect?: InputMaybe<FooterParentWhereUniqueInput>;
    /** Create and connect one FooterParent document */
    create?: InputMaybe<FooterParentCreateInput>;
};

export type FooterParentUpdateInput = {
    SiteConfig?: InputMaybe<SiteConfigUpdateInput>;
};

export type FooterParentUpdateManyInlineInput = {
    /** Connect multiple existing FooterParent documents */
    connect?: InputMaybe<Array<FooterParentConnectInput>>;
    /** Create and connect multiple FooterParent documents */
    create?: InputMaybe<Array<FooterParentCreateInput>>;
    /** Delete multiple FooterParent documents */
    delete?: InputMaybe<Array<FooterParentWhereUniqueInput>>;
    /** Disconnect multiple FooterParent documents */
    disconnect?: InputMaybe<Array<FooterParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing FooterParent documents */
    set?: InputMaybe<Array<FooterParentWhereUniqueInput>>;
    /** Update multiple FooterParent documents */
    update?: InputMaybe<Array<FooterParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple FooterParent documents */
    upsert?: InputMaybe<Array<FooterParentUpsertWithNestedWhereUniqueInput>>;
};

export type FooterParentUpdateManyWithNestedWhereInput = {
    SiteConfig?: InputMaybe<SiteConfigUpdateManyWithNestedWhereInput>;
};

export type FooterParentUpdateOneInlineInput = {
    /** Connect existing FooterParent document */
    connect?: InputMaybe<FooterParentWhereUniqueInput>;
    /** Create and connect one FooterParent document */
    create?: InputMaybe<FooterParentCreateInput>;
    /** Delete currently connected FooterParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected FooterParent document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single FooterParent document */
    update?: InputMaybe<FooterParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single FooterParent document */
    upsert?: InputMaybe<FooterParentUpsertWithNestedWhereUniqueInput>;
};

export type FooterParentUpdateWithNestedWhereUniqueInput = {
    SiteConfig?: InputMaybe<SiteConfigUpdateWithNestedWhereUniqueInput>;
};

export type FooterParentUpsertWithNestedWhereUniqueInput = {
    SiteConfig?: InputMaybe<SiteConfigUpsertWithNestedWhereUniqueInput>;
};

export type FooterParentWhereInput = {
    SiteConfig?: InputMaybe<SiteConfigWhereInput>;
};

export type FooterParentWhereUniqueInput = {
    SiteConfig?: InputMaybe<SiteConfigWhereUniqueInput>;
};

export type FooterUpdateInput = {
    copyright?: InputMaybe<Scalars['String']['input']>;
    linkColumns?: InputMaybe<FooterLinksColumnUpdateManyInlineInput>;
    socialIconLinks?: InputMaybe<SocialIconLinkUpdateManyInlineInput>;
};

export type FooterUpdateManyInlineInput = {
    /** Create and connect multiple Footer component instances */
    create?: InputMaybe<Array<FooterCreateWithPositionInput>>;
    /** Delete multiple Footer documents */
    delete?: InputMaybe<Array<FooterWhereUniqueInput>>;
    /** Update multiple Footer component instances */
    update?: InputMaybe<Array<FooterUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple Footer component instances */
    upsert?: InputMaybe<Array<FooterUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FooterUpdateManyInput = {
    copyright?: InputMaybe<Scalars['String']['input']>;
};

export type FooterUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: FooterUpdateManyInput;
    /** Document search */
    where: FooterWhereInput;
};

export type FooterUpdateOneInlineInput = {
    /** Create and connect one Footer document */
    create?: InputMaybe<FooterCreateInput>;
    /** Delete currently connected Footer document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single Footer document */
    update?: InputMaybe<FooterUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Footer document */
    upsert?: InputMaybe<FooterUpsertWithNestedWhereUniqueInput>;
};

export type FooterUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<FooterUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: FooterWhereUniqueInput;
};

export type FooterUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: FooterUpdateInput;
    /** Unique document search */
    where: FooterWhereUniqueInput;
};

export type FooterUpsertInput = {
    /** Create document if it didn't exist */
    create: FooterCreateInput;
    /** Update document if it exists */
    update: FooterUpdateInput;
};

export type FooterUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<FooterUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: FooterWhereUniqueInput;
};

export type FooterUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: FooterUpsertInput;
    /** Unique document search */
    where: FooterWhereUniqueInput;
};

/** Identifies documents */
export type FooterWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<FooterWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<FooterWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<FooterWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    copyright?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    copyright_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    copyright_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    copyright_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    copyright_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    copyright_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    copyright_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    copyright_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    linkColumns_every?: InputMaybe<FooterLinksColumnWhereInput>;
    linkColumns_none?: InputMaybe<FooterLinksColumnWhereInput>;
    linkColumns_some?: InputMaybe<FooterLinksColumnWhereInput>;
    socialIconLinks_every?: InputMaybe<SocialIconLinkWhereInput>;
    socialIconLinks_none?: InputMaybe<SocialIconLinkWhereInput>;
    socialIconLinks_some?: InputMaybe<SocialIconLinkWhereInput>;
};

/** References Footer record uniquely */
export type FooterWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type HeroSection = Entity & {
    __typename?: 'HeroSection';
    actions: Array<Action>;
    /** The unique identifier */
    id: Scalars['ID']['output'];
    image?: Maybe<Asset>;
    /** System stage field */
    stage: Stage;
    subtitle?: Maybe<Scalars['String']['output']>;
    /** The section's title. */
    title?: Maybe<Scalars['String']['output']>;
};

export type HeroSectionActionsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<ActionOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ActionWhereInput>;
};

export type HeroSectionImageArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type HeroSectionConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: HeroSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroSectionConnection = {
    __typename?: 'HeroSectionConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<HeroSectionEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type HeroSectionCreateInput = {
    actions?: InputMaybe<ActionCreateManyInlineInput>;
    image?: InputMaybe<AssetCreateOneInlineInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroSectionCreateManyInlineInput = {
    /** Create and connect multiple existing HeroSection documents */
    create?: InputMaybe<Array<HeroSectionCreateInput>>;
};

export type HeroSectionCreateOneInlineInput = {
    /** Create and connect one HeroSection document */
    create?: InputMaybe<HeroSectionCreateInput>;
};

export type HeroSectionCreateWithPositionInput = {
    /** Document to create */
    data: HeroSectionCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroSectionEdge = {
    __typename?: 'HeroSectionEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: HeroSection;
};

/** Identifies documents */
export type HeroSectionManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<HeroSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<HeroSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<HeroSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    actions_every?: InputMaybe<ActionWhereInput>;
    actions_none?: InputMaybe<ActionWhereInput>;
    actions_some?: InputMaybe<ActionWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<AssetWhereInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum HeroSectionOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    SubtitleAsc = 'subtitle_ASC',
    SubtitleDesc = 'subtitle_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC'
}

export type HeroSectionParent = LandingPage;

export type HeroSectionParentConnectInput = {
    LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type HeroSectionParentCreateInput = {
    LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type HeroSectionParentCreateManyInlineInput = {
    /** Connect multiple existing HeroSectionParent documents */
    connect?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
    /** Create and connect multiple existing HeroSectionParent documents */
    create?: InputMaybe<Array<HeroSectionParentCreateInput>>;
};

export type HeroSectionParentCreateOneInlineInput = {
    /** Connect one existing HeroSectionParent document */
    connect?: InputMaybe<HeroSectionParentWhereUniqueInput>;
    /** Create and connect one HeroSectionParent document */
    create?: InputMaybe<HeroSectionParentCreateInput>;
};

export type HeroSectionParentUpdateInput = {
    LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type HeroSectionParentUpdateManyInlineInput = {
    /** Connect multiple existing HeroSectionParent documents */
    connect?: InputMaybe<Array<HeroSectionParentConnectInput>>;
    /** Create and connect multiple HeroSectionParent documents */
    create?: InputMaybe<Array<HeroSectionParentCreateInput>>;
    /** Delete multiple HeroSectionParent documents */
    delete?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
    /** Disconnect multiple HeroSectionParent documents */
    disconnect?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing HeroSectionParent documents */
    set?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
    /** Update multiple HeroSectionParent documents */
    update?: InputMaybe<Array<HeroSectionParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple HeroSectionParent documents */
    upsert?: InputMaybe<Array<HeroSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeroSectionParentUpdateManyWithNestedWhereInput = {
    LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type HeroSectionParentUpdateOneInlineInput = {
    /** Connect existing HeroSectionParent document */
    connect?: InputMaybe<HeroSectionParentWhereUniqueInput>;
    /** Create and connect one HeroSectionParent document */
    create?: InputMaybe<HeroSectionParentCreateInput>;
    /** Delete currently connected HeroSectionParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected HeroSectionParent document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single HeroSectionParent document */
    update?: InputMaybe<HeroSectionParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single HeroSectionParent document */
    upsert?: InputMaybe<HeroSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroSectionParentUpdateWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type HeroSectionParentUpsertWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type HeroSectionParentWhereInput = {
    LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type HeroSectionParentWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type HeroSectionUpdateInput = {
    actions?: InputMaybe<ActionUpdateManyInlineInput>;
    image?: InputMaybe<AssetUpdateOneInlineInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroSectionUpdateManyInlineInput = {
    /** Create and connect multiple HeroSection component instances */
    create?: InputMaybe<Array<HeroSectionCreateWithPositionInput>>;
    /** Delete multiple HeroSection documents */
    delete?: InputMaybe<Array<HeroSectionWhereUniqueInput>>;
    /** Update multiple HeroSection component instances */
    update?: InputMaybe<Array<HeroSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple HeroSection component instances */
    upsert?: InputMaybe<Array<HeroSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroSectionUpdateManyInput = {
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroSectionUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: HeroSectionUpdateManyInput;
    /** Document search */
    where: HeroSectionWhereInput;
};

export type HeroSectionUpdateOneInlineInput = {
    /** Create and connect one HeroSection document */
    create?: InputMaybe<HeroSectionCreateInput>;
    /** Delete currently connected HeroSection document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single HeroSection document */
    update?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single HeroSection document */
    upsert?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueInput>;
};

export type HeroSectionUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<HeroSectionUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: HeroSectionWhereUniqueInput;
};

export type HeroSectionUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: HeroSectionUpdateInput;
    /** Unique document search */
    where: HeroSectionWhereUniqueInput;
};

export type HeroSectionUpsertInput = {
    /** Create document if it didn't exist */
    create: HeroSectionCreateInput;
    /** Update document if it exists */
    update: HeroSectionUpdateInput;
};

export type HeroSectionUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<HeroSectionUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: HeroSectionWhereUniqueInput;
};

export type HeroSectionUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: HeroSectionUpsertInput;
    /** Unique document search */
    where: HeroSectionWhereUniqueInput;
};

/** Identifies documents */
export type HeroSectionWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<HeroSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<HeroSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<HeroSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    actions_every?: InputMaybe<ActionWhereInput>;
    actions_none?: InputMaybe<ActionWhereInput>;
    actions_some?: InputMaybe<ActionWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<AssetWhereInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References HeroSection record uniquely */
export type HeroSectionWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

/** The position of the icon relative to the label in the Action component. */
export enum IconPosition {
    Left = 'left',
    Right = 'right'
}

export type ImageBlurInput = {
    /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
    amount: Scalars['Int']['input'];
};

/** Adds a border to the image. */
export type ImageBorderInput = {
    /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
    background: Scalars['String']['input'];
    /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
    color: Scalars['String']['input'];
    /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
    width: Scalars['Int']['input'];
};

export type ImageCompressInput = {
    /** Preserves the metadata of the image. */
    metadata: Scalars['Boolean']['input'];
};

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
    /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    height: Scalars['Int']['input'];
    /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    width: Scalars['Int']['input'];
    /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
    x: Scalars['Int']['input'];
    /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
    y: Scalars['Int']['input'];
};

export enum ImageFit {
    /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
    Clip = 'clip',
    /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
    Crop = 'crop',
    /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
    Max = 'max',
    /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
    Scale = 'scale'
}

export type ImageQualityInput = {
    /** The quality of the image. The value must be an integer from 1 to 100. */
    value: Scalars['Int']['input'];
};

export type ImageResizeInput = {
    /** The default value for the fit parameter is fit:clip. */
    fit?: InputMaybe<ImageFit>;
    /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    height?: InputMaybe<Scalars['Int']['input']>;
    /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpenInput = {
    /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
    amount: Scalars['Int']['input'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
    /** Blurs the image. */
    blur?: InputMaybe<ImageBlurInput>;
    /** Adds a border to the image. */
    border?: InputMaybe<ImageBorderInput>;
    /** Compresses the image. */
    compress?: InputMaybe<ImageCompressInput>;
    /** Crops the image to the specified dimensions. */
    crop?: InputMaybe<ImageCropInput>;
    /**
     * Changes the quality of the image. The value must be an integer from 1 to 100.
     * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
     */
    quality?: InputMaybe<ImageQualityInput>;
    /** Resizes the image */
    resize?: InputMaybe<ImageResizeInput>;
    /** Sharpens the image. */
    sharpen?: InputMaybe<ImageSharpenInput>;
};

/** A page with list of different sections */
export type LandingPage = Entity &
    Node & {
        __typename?: 'LandingPage';
        /** The time the document was created */
        createdAt: Scalars['DateTime']['output'];
        /** User that created this document */
        createdBy?: Maybe<User>;
        /** Get the document in other stages */
        documentInStages: Array<LandingPage>;
        /** List of LandingPage versions */
        history: Array<Version>;
        /** The unique identifier */
        id: Scalars['ID']['output'];
        /** The time the document was published. Null on documents in draft stage. */
        publishedAt?: Maybe<Scalars['DateTime']['output']>;
        /** User that last published this document */
        publishedBy?: Maybe<User>;
        scheduledIn: Array<ScheduledOperation>;
        sections: Array<LandingPagesectionsUnion>;
        slug: Scalars['String']['output'];
        /** System stage field */
        stage: Stage;
        title: Scalars['String']['output'];
        /** The time the document was updated */
        updatedAt: Scalars['DateTime']['output'];
        /** User that last updated this document */
        updatedBy?: Maybe<User>;
    };

/** A page with list of different sections */
export type LandingPageCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** A page with list of different sections */
export type LandingPageDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean']['input'];
    inheritLocale?: Scalars['Boolean']['input'];
    stages?: Array<Stage>;
};

/** A page with list of different sections */
export type LandingPageHistoryArgs = {
    limit?: Scalars['Int']['input'];
    skip?: Scalars['Int']['input'];
    stageOverride?: InputMaybe<Stage>;
};

/** A page with list of different sections */
export type LandingPagePublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** A page with list of different sections */
export type LandingPageScheduledInArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** A page with list of different sections */
export type LandingPageSectionsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

/** A page with list of different sections */
export type LandingPageUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: LandingPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type LandingPageConnection = {
    __typename?: 'LandingPageConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<LandingPageEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type LandingPageCreateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    sections?: InputMaybe<LandingPagesectionsUnionCreateManyInlineInput>;
    slug: Scalars['String']['input'];
    title: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LandingPageCreateManyInlineInput = {
    /** Connect multiple existing LandingPage documents */
    connect?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
    /** Create and connect multiple existing LandingPage documents */
    create?: InputMaybe<Array<LandingPageCreateInput>>;
};

export type LandingPageCreateOneInlineInput = {
    /** Connect one existing LandingPage document */
    connect?: InputMaybe<LandingPageWhereUniqueInput>;
    /** Create and connect one LandingPage document */
    create?: InputMaybe<LandingPageCreateInput>;
};

/** An edge in a connection. */
export type LandingPageEdge = {
    __typename?: 'LandingPageEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: LandingPage;
};

/** Identifies documents */
export type LandingPageManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<LandingPageWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<LandingPageWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<LandingPageWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<LandingPageWhereStageInput>;
    documentInStages_none?: InputMaybe<LandingPageWhereStageInput>;
    documentInStages_some?: InputMaybe<LandingPageWhereStageInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    /** All values in which the union is empty. */
    sections_empty?: InputMaybe<Scalars['Boolean']['input']>;
    /** Matches if the modular component contains at least one connection to the item provided to the filter */
    sections_some?: InputMaybe<LandingPagesectionsUnionWhereInput>;
    slug?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    slug_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    slug_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    slug_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum LandingPageOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC'
}

export type LandingPageUpdateInput = {
    sections?: InputMaybe<LandingPagesectionsUnionUpdateManyInlineInput>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageUpdateManyInlineInput = {
    /** Connect multiple existing LandingPage documents */
    connect?: InputMaybe<Array<LandingPageConnectInput>>;
    /** Create and connect multiple LandingPage documents */
    create?: InputMaybe<Array<LandingPageCreateInput>>;
    /** Delete multiple LandingPage documents */
    delete?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
    /** Disconnect multiple LandingPage documents */
    disconnect?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing LandingPage documents */
    set?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
    /** Update multiple LandingPage documents */
    update?: InputMaybe<Array<LandingPageUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple LandingPage documents */
    upsert?: InputMaybe<Array<LandingPageUpsertWithNestedWhereUniqueInput>>;
};

export type LandingPageUpdateManyInput = {
    title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: LandingPageUpdateManyInput;
    /** Document search */
    where: LandingPageWhereInput;
};

export type LandingPageUpdateOneInlineInput = {
    /** Connect existing LandingPage document */
    connect?: InputMaybe<LandingPageWhereUniqueInput>;
    /** Create and connect one LandingPage document */
    create?: InputMaybe<LandingPageCreateInput>;
    /** Delete currently connected LandingPage document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected LandingPage document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single LandingPage document */
    update?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
    /** Upsert single LandingPage document */
    upsert?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type LandingPageUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: LandingPageUpdateInput;
    /** Unique document search */
    where: LandingPageWhereUniqueInput;
};

export type LandingPageUpsertInput = {
    /** Create document if it didn't exist */
    create: LandingPageCreateInput;
    /** Update document if it exists */
    update: LandingPageUpdateInput;
};

export type LandingPageUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: LandingPageUpsertInput;
    /** Unique document search */
    where: LandingPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LandingPageWhereComparatorInput = {
    /** This field can be used to request to check if the entry is outdated by internal comparison */
    outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type LandingPageWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<LandingPageWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<LandingPageWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<LandingPageWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<LandingPageWhereStageInput>;
    documentInStages_none?: InputMaybe<LandingPageWhereStageInput>;
    documentInStages_some?: InputMaybe<LandingPageWhereStageInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    /** All values in which the union is empty. */
    sections_empty?: InputMaybe<Scalars['Boolean']['input']>;
    /** Matches if the modular component contains at least one connection to the item provided to the filter */
    sections_some?: InputMaybe<LandingPagesectionsUnionWhereInput>;
    slug?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    slug_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    slug_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    slug_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LandingPageWhereStageInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<LandingPageWhereStageInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<LandingPageWhereStageInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<LandingPageWhereStageInput>>;
    /** This field contains fields which can be set as true or false to specify an internal comparison */
    compareWithParent?: InputMaybe<LandingPageWhereComparatorInput>;
    /** Specify the stage to compare with */
    stage?: InputMaybe<Stage>;
};

/** References LandingPage record uniquely */
export type LandingPageWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPagesectionsUnion =
    | ContactUsSection
    | CtaSection
    | FeaturesSection
    | HeroSection
    | LogosSection
    | PricingSection
    | TeamSection;

export type LandingPagesectionsUnionConnectInput = {
    ContactUsSection?: InputMaybe<ContactUsSectionConnectInput>;
    CtaSection?: InputMaybe<CtaSectionConnectInput>;
    FeaturesSection?: InputMaybe<FeaturesSectionConnectInput>;
    HeroSection?: InputMaybe<HeroSectionConnectInput>;
    LogosSection?: InputMaybe<LogosSectionConnectInput>;
    PricingSection?: InputMaybe<PricingSectionConnectInput>;
    TeamSection?: InputMaybe<TeamSectionConnectInput>;
};

export type LandingPagesectionsUnionCreateInput = {
    ContactUsSection?: InputMaybe<ContactUsSectionCreateInput>;
    CtaSection?: InputMaybe<CtaSectionCreateInput>;
    FeaturesSection?: InputMaybe<FeaturesSectionCreateInput>;
    HeroSection?: InputMaybe<HeroSectionCreateInput>;
    LogosSection?: InputMaybe<LogosSectionCreateInput>;
    PricingSection?: InputMaybe<PricingSectionCreateInput>;
    TeamSection?: InputMaybe<TeamSectionCreateInput>;
};

export type LandingPagesectionsUnionCreateManyInlineInput = {
    /** Create and connect multiple existing LandingPagesectionsUnion documents */
    create?: InputMaybe<Array<LandingPagesectionsUnionCreateInput>>;
};

export type LandingPagesectionsUnionCreateOneInlineInput = {
    /** Create and connect one LandingPagesectionsUnion document */
    create?: InputMaybe<LandingPagesectionsUnionCreateInput>;
};

export type LandingPagesectionsUnionCreateWithPositionInput = {
    ContactUsSection?: InputMaybe<ContactUsSectionCreateWithPositionInput>;
    CtaSection?: InputMaybe<CtaSectionCreateWithPositionInput>;
    FeaturesSection?: InputMaybe<FeaturesSectionCreateWithPositionInput>;
    HeroSection?: InputMaybe<HeroSectionCreateWithPositionInput>;
    LogosSection?: InputMaybe<LogosSectionCreateWithPositionInput>;
    PricingSection?: InputMaybe<PricingSectionCreateWithPositionInput>;
    TeamSection?: InputMaybe<TeamSectionCreateWithPositionInput>;
};

export type LandingPagesectionsUnionUpdateInput = {
    ContactUsSection?: InputMaybe<ContactUsSectionUpdateInput>;
    CtaSection?: InputMaybe<CtaSectionUpdateInput>;
    FeaturesSection?: InputMaybe<FeaturesSectionUpdateInput>;
    HeroSection?: InputMaybe<HeroSectionUpdateInput>;
    LogosSection?: InputMaybe<LogosSectionUpdateInput>;
    PricingSection?: InputMaybe<PricingSectionUpdateInput>;
    TeamSection?: InputMaybe<TeamSectionUpdateInput>;
};

export type LandingPagesectionsUnionUpdateManyInlineInput = {
    /** Create and connect multiple LandingPagesectionsUnion component instances */
    create?: InputMaybe<Array<LandingPagesectionsUnionCreateWithPositionInput>>;
    /** Delete multiple LandingPagesectionsUnion documents */
    delete?: InputMaybe<Array<LandingPagesectionsUnionWhereUniqueInput>>;
    /** Update multiple LandingPagesectionsUnion component instances */
    update?: InputMaybe<Array<LandingPagesectionsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple LandingPagesectionsUnion component instances */
    upsert?: InputMaybe<Array<LandingPagesectionsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LandingPagesectionsUnionUpdateManyWithNestedWhereInput = {
    ContactUsSection?: InputMaybe<ContactUsSectionUpdateManyWithNestedWhereInput>;
    CtaSection?: InputMaybe<CtaSectionUpdateManyWithNestedWhereInput>;
    FeaturesSection?: InputMaybe<FeaturesSectionUpdateManyWithNestedWhereInput>;
    HeroSection?: InputMaybe<HeroSectionUpdateManyWithNestedWhereInput>;
    LogosSection?: InputMaybe<LogosSectionUpdateManyWithNestedWhereInput>;
    PricingSection?: InputMaybe<PricingSectionUpdateManyWithNestedWhereInput>;
    TeamSection?: InputMaybe<TeamSectionUpdateManyWithNestedWhereInput>;
};

export type LandingPagesectionsUnionUpdateOneInlineInput = {
    /** Create and connect one LandingPagesectionsUnion document */
    create?: InputMaybe<LandingPagesectionsUnionCreateInput>;
    /** Delete currently connected LandingPagesectionsUnion document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single LandingPagesectionsUnion document */
    update?: InputMaybe<LandingPagesectionsUnionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single LandingPagesectionsUnion document */
    upsert?: InputMaybe<LandingPagesectionsUnionUpsertWithNestedWhereUniqueInput>;
};

export type LandingPagesectionsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
    ContactUsSection?: InputMaybe<ContactUsSectionUpdateWithNestedWhereUniqueAndPositionInput>;
    CtaSection?: InputMaybe<CtaSectionUpdateWithNestedWhereUniqueAndPositionInput>;
    FeaturesSection?: InputMaybe<FeaturesSectionUpdateWithNestedWhereUniqueAndPositionInput>;
    HeroSection?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueAndPositionInput>;
    LogosSection?: InputMaybe<LogosSectionUpdateWithNestedWhereUniqueAndPositionInput>;
    PricingSection?: InputMaybe<PricingSectionUpdateWithNestedWhereUniqueAndPositionInput>;
    TeamSection?: InputMaybe<TeamSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type LandingPagesectionsUnionUpdateWithNestedWhereUniqueInput = {
    ContactUsSection?: InputMaybe<ContactUsSectionUpdateWithNestedWhereUniqueInput>;
    CtaSection?: InputMaybe<CtaSectionUpdateWithNestedWhereUniqueInput>;
    FeaturesSection?: InputMaybe<FeaturesSectionUpdateWithNestedWhereUniqueInput>;
    HeroSection?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueInput>;
    LogosSection?: InputMaybe<LogosSectionUpdateWithNestedWhereUniqueInput>;
    PricingSection?: InputMaybe<PricingSectionUpdateWithNestedWhereUniqueInput>;
    TeamSection?: InputMaybe<TeamSectionUpdateWithNestedWhereUniqueInput>;
};

export type LandingPagesectionsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
    ContactUsSection?: InputMaybe<ContactUsSectionUpsertWithNestedWhereUniqueAndPositionInput>;
    CtaSection?: InputMaybe<CtaSectionUpsertWithNestedWhereUniqueAndPositionInput>;
    FeaturesSection?: InputMaybe<FeaturesSectionUpsertWithNestedWhereUniqueAndPositionInput>;
    HeroSection?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueAndPositionInput>;
    LogosSection?: InputMaybe<LogosSectionUpsertWithNestedWhereUniqueAndPositionInput>;
    PricingSection?: InputMaybe<PricingSectionUpsertWithNestedWhereUniqueAndPositionInput>;
    TeamSection?: InputMaybe<TeamSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type LandingPagesectionsUnionUpsertWithNestedWhereUniqueInput = {
    ContactUsSection?: InputMaybe<ContactUsSectionUpsertWithNestedWhereUniqueInput>;
    CtaSection?: InputMaybe<CtaSectionUpsertWithNestedWhereUniqueInput>;
    FeaturesSection?: InputMaybe<FeaturesSectionUpsertWithNestedWhereUniqueInput>;
    HeroSection?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueInput>;
    LogosSection?: InputMaybe<LogosSectionUpsertWithNestedWhereUniqueInput>;
    PricingSection?: InputMaybe<PricingSectionUpsertWithNestedWhereUniqueInput>;
    TeamSection?: InputMaybe<TeamSectionUpsertWithNestedWhereUniqueInput>;
};

export type LandingPagesectionsUnionWhereInput = {
    ContactUsSection?: InputMaybe<ContactUsSectionWhereInput>;
    CtaSection?: InputMaybe<CtaSectionWhereInput>;
    FeaturesSection?: InputMaybe<FeaturesSectionWhereInput>;
    HeroSection?: InputMaybe<HeroSectionWhereInput>;
    LogosSection?: InputMaybe<LogosSectionWhereInput>;
    PricingSection?: InputMaybe<PricingSectionWhereInput>;
    TeamSection?: InputMaybe<TeamSectionWhereInput>;
};

export type LandingPagesectionsUnionWhereUniqueInput = {
    ContactUsSection?: InputMaybe<ContactUsSectionWhereUniqueInput>;
    CtaSection?: InputMaybe<CtaSectionWhereUniqueInput>;
    FeaturesSection?: InputMaybe<FeaturesSectionWhereUniqueInput>;
    HeroSection?: InputMaybe<HeroSectionWhereUniqueInput>;
    LogosSection?: InputMaybe<LogosSectionWhereUniqueInput>;
    PricingSection?: InputMaybe<PricingSectionWhereUniqueInput>;
    TeamSection?: InputMaybe<TeamSectionWhereUniqueInput>;
};

export type Link = Entity & {
    __typename?: 'Link';
    /** The unique identifier */
    id: Scalars['ID']['output'];
    label: Scalars['String']['output'];
    /** System stage field */
    stage: Stage;
    url: Scalars['String']['output'];
};

export type LinkConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: LinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type LinkConnection = {
    __typename?: 'LinkConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<LinkEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type LinkCreateInput = {
    label: Scalars['String']['input'];
    url: Scalars['String']['input'];
};

export type LinkCreateManyInlineInput = {
    /** Create and connect multiple existing Link documents */
    create?: InputMaybe<Array<LinkCreateInput>>;
};

export type LinkCreateOneInlineInput = {
    /** Create and connect one Link document */
    create?: InputMaybe<LinkCreateInput>;
};

export type LinkCreateWithPositionInput = {
    /** Document to create */
    data: LinkCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LinkEdge = {
    __typename?: 'LinkEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: Link;
};

/** Identifies documents */
export type LinkManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<LinkWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<LinkWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<LinkWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    label_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    label_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    label_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    label_starts_with?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    url_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    url_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    url_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum LinkOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC'
}

export type LinkParent = FooterLinksColumn | NavigationBar;

export type LinkParentConnectInput = {
    FooterLinksColumn?: InputMaybe<FooterLinksColumnConnectInput>;
    NavigationBar?: InputMaybe<NavigationBarConnectInput>;
};

export type LinkParentCreateInput = {
    FooterLinksColumn?: InputMaybe<FooterLinksColumnCreateInput>;
    NavigationBar?: InputMaybe<NavigationBarCreateInput>;
};

export type LinkParentCreateManyInlineInput = {
    /** Create and connect multiple existing LinkParent documents */
    create?: InputMaybe<Array<LinkParentCreateInput>>;
};

export type LinkParentCreateOneInlineInput = {
    /** Create and connect one LinkParent document */
    create?: InputMaybe<LinkParentCreateInput>;
};

export type LinkParentCreateWithPositionInput = {
    FooterLinksColumn?: InputMaybe<FooterLinksColumnCreateWithPositionInput>;
    NavigationBar?: InputMaybe<NavigationBarCreateWithPositionInput>;
};

export type LinkParentUpdateInput = {
    FooterLinksColumn?: InputMaybe<FooterLinksColumnUpdateInput>;
    NavigationBar?: InputMaybe<NavigationBarUpdateInput>;
};

export type LinkParentUpdateManyInlineInput = {
    /** Create and connect multiple LinkParent component instances */
    create?: InputMaybe<Array<LinkParentCreateWithPositionInput>>;
    /** Delete multiple LinkParent documents */
    delete?: InputMaybe<Array<LinkParentWhereUniqueInput>>;
    /** Update multiple LinkParent component instances */
    update?: InputMaybe<Array<LinkParentUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple LinkParent component instances */
    upsert?: InputMaybe<Array<LinkParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LinkParentUpdateManyWithNestedWhereInput = {
    FooterLinksColumn?: InputMaybe<FooterLinksColumnUpdateManyWithNestedWhereInput>;
    NavigationBar?: InputMaybe<NavigationBarUpdateManyWithNestedWhereInput>;
};

export type LinkParentUpdateOneInlineInput = {
    /** Create and connect one LinkParent document */
    create?: InputMaybe<LinkParentCreateInput>;
    /** Delete currently connected LinkParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single LinkParent document */
    update?: InputMaybe<LinkParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single LinkParent document */
    upsert?: InputMaybe<LinkParentUpsertWithNestedWhereUniqueInput>;
};

export type LinkParentUpdateWithNestedWhereUniqueAndPositionInput = {
    FooterLinksColumn?: InputMaybe<FooterLinksColumnUpdateWithNestedWhereUniqueAndPositionInput>;
    NavigationBar?: InputMaybe<NavigationBarUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type LinkParentUpdateWithNestedWhereUniqueInput = {
    FooterLinksColumn?: InputMaybe<FooterLinksColumnUpdateWithNestedWhereUniqueInput>;
    NavigationBar?: InputMaybe<NavigationBarUpdateWithNestedWhereUniqueInput>;
};

export type LinkParentUpsertWithNestedWhereUniqueAndPositionInput = {
    FooterLinksColumn?: InputMaybe<FooterLinksColumnUpsertWithNestedWhereUniqueAndPositionInput>;
    NavigationBar?: InputMaybe<NavigationBarUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type LinkParentUpsertWithNestedWhereUniqueInput = {
    FooterLinksColumn?: InputMaybe<FooterLinksColumnUpsertWithNestedWhereUniqueInput>;
    NavigationBar?: InputMaybe<NavigationBarUpsertWithNestedWhereUniqueInput>;
};

export type LinkParentWhereInput = {
    FooterLinksColumn?: InputMaybe<FooterLinksColumnWhereInput>;
    NavigationBar?: InputMaybe<NavigationBarWhereInput>;
};

export type LinkParentWhereUniqueInput = {
    FooterLinksColumn?: InputMaybe<FooterLinksColumnWhereUniqueInput>;
    NavigationBar?: InputMaybe<NavigationBarWhereUniqueInput>;
};

export type LinkUpdateInput = {
    label?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type LinkUpdateManyInlineInput = {
    /** Create and connect multiple Link component instances */
    create?: InputMaybe<Array<LinkCreateWithPositionInput>>;
    /** Delete multiple Link documents */
    delete?: InputMaybe<Array<LinkWhereUniqueInput>>;
    /** Update multiple Link component instances */
    update?: InputMaybe<Array<LinkUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple Link component instances */
    upsert?: InputMaybe<Array<LinkUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LinkUpdateManyInput = {
    label?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type LinkUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: LinkUpdateManyInput;
    /** Document search */
    where: LinkWhereInput;
};

export type LinkUpdateOneInlineInput = {
    /** Create and connect one Link document */
    create?: InputMaybe<LinkCreateInput>;
    /** Delete currently connected Link document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single Link document */
    update?: InputMaybe<LinkUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Link document */
    upsert?: InputMaybe<LinkUpsertWithNestedWhereUniqueInput>;
};

export type LinkUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<LinkUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: LinkWhereUniqueInput;
};

export type LinkUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: LinkUpdateInput;
    /** Unique document search */
    where: LinkWhereUniqueInput;
};

export type LinkUpsertInput = {
    /** Create document if it didn't exist */
    create: LinkCreateInput;
    /** Update document if it exists */
    update: LinkUpdateInput;
};

export type LinkUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<LinkUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: LinkWhereUniqueInput;
};

export type LinkUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: LinkUpsertInput;
    /** Unique document search */
    where: LinkWhereUniqueInput;
};

/** Identifies documents */
export type LinkWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<LinkWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<LinkWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<LinkWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    label_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    label_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    label_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    label_starts_with?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    url_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    url_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    url_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Link record uniquely */
export type LinkWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

/** Locale system enumeration */
export enum Locale {
    /** System locale */
    En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
    __typename?: 'Location';
    distance: Scalars['Float']['output'];
    latitude: Scalars['Float']['output'];
    longitude: Scalars['Float']['output'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
    from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
    latitude: Scalars['Float']['input'];
    longitude: Scalars['Float']['input'];
};

export type LogoItem = Entity & {
    __typename?: 'LogoItem';
    /** The unique identifier */
    id: Scalars['ID']['output'];
    image?: Maybe<Asset>;
    /** System stage field */
    stage: Stage;
    title?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};

export type LogoItemImageArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type LogoItemConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: LogoItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type LogoItemConnection = {
    __typename?: 'LogoItemConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<LogoItemEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type LogoItemCreateInput = {
    image?: InputMaybe<AssetCreateOneInlineInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type LogoItemCreateManyInlineInput = {
    /** Create and connect multiple existing LogoItem documents */
    create?: InputMaybe<Array<LogoItemCreateInput>>;
};

export type LogoItemCreateOneInlineInput = {
    /** Create and connect one LogoItem document */
    create?: InputMaybe<LogoItemCreateInput>;
};

export type LogoItemCreateWithPositionInput = {
    /** Document to create */
    data: LogoItemCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LogoItemEdge = {
    __typename?: 'LogoItemEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: LogoItem;
};

/** Identifies documents */
export type LogoItemManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<LogoItemWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<LogoItemWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<LogoItemWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<AssetWhereInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    url_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    url_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    url_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum LogoItemOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC'
}

export type LogoItemParent = LogosSection;

export type LogoItemParentConnectInput = {
    LogosSection?: InputMaybe<LogosSectionConnectInput>;
};

export type LogoItemParentCreateInput = {
    LogosSection?: InputMaybe<LogosSectionCreateInput>;
};

export type LogoItemParentCreateManyInlineInput = {
    /** Create and connect multiple existing LogoItemParent documents */
    create?: InputMaybe<Array<LogoItemParentCreateInput>>;
};

export type LogoItemParentCreateOneInlineInput = {
    /** Create and connect one LogoItemParent document */
    create?: InputMaybe<LogoItemParentCreateInput>;
};

export type LogoItemParentCreateWithPositionInput = {
    LogosSection?: InputMaybe<LogosSectionCreateWithPositionInput>;
};

export type LogoItemParentUpdateInput = {
    LogosSection?: InputMaybe<LogosSectionUpdateInput>;
};

export type LogoItemParentUpdateManyInlineInput = {
    /** Create and connect multiple LogoItemParent component instances */
    create?: InputMaybe<Array<LogoItemParentCreateWithPositionInput>>;
    /** Delete multiple LogoItemParent documents */
    delete?: InputMaybe<Array<LogoItemParentWhereUniqueInput>>;
    /** Update multiple LogoItemParent component instances */
    update?: InputMaybe<Array<LogoItemParentUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple LogoItemParent component instances */
    upsert?: InputMaybe<Array<LogoItemParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LogoItemParentUpdateManyWithNestedWhereInput = {
    LogosSection?: InputMaybe<LogosSectionUpdateManyWithNestedWhereInput>;
};

export type LogoItemParentUpdateOneInlineInput = {
    /** Create and connect one LogoItemParent document */
    create?: InputMaybe<LogoItemParentCreateInput>;
    /** Delete currently connected LogoItemParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single LogoItemParent document */
    update?: InputMaybe<LogoItemParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single LogoItemParent document */
    upsert?: InputMaybe<LogoItemParentUpsertWithNestedWhereUniqueInput>;
};

export type LogoItemParentUpdateWithNestedWhereUniqueAndPositionInput = {
    LogosSection?: InputMaybe<LogosSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type LogoItemParentUpdateWithNestedWhereUniqueInput = {
    LogosSection?: InputMaybe<LogosSectionUpdateWithNestedWhereUniqueInput>;
};

export type LogoItemParentUpsertWithNestedWhereUniqueAndPositionInput = {
    LogosSection?: InputMaybe<LogosSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type LogoItemParentUpsertWithNestedWhereUniqueInput = {
    LogosSection?: InputMaybe<LogosSectionUpsertWithNestedWhereUniqueInput>;
};

export type LogoItemParentWhereInput = {
    LogosSection?: InputMaybe<LogosSectionWhereInput>;
};

export type LogoItemParentWhereUniqueInput = {
    LogosSection?: InputMaybe<LogosSectionWhereUniqueInput>;
};

export type LogoItemUpdateInput = {
    image?: InputMaybe<AssetUpdateOneInlineInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type LogoItemUpdateManyInlineInput = {
    /** Create and connect multiple LogoItem component instances */
    create?: InputMaybe<Array<LogoItemCreateWithPositionInput>>;
    /** Delete multiple LogoItem documents */
    delete?: InputMaybe<Array<LogoItemWhereUniqueInput>>;
    /** Update multiple LogoItem component instances */
    update?: InputMaybe<Array<LogoItemUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple LogoItem component instances */
    upsert?: InputMaybe<Array<LogoItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LogoItemUpdateManyInput = {
    title?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type LogoItemUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: LogoItemUpdateManyInput;
    /** Document search */
    where: LogoItemWhereInput;
};

export type LogoItemUpdateOneInlineInput = {
    /** Create and connect one LogoItem document */
    create?: InputMaybe<LogoItemCreateInput>;
    /** Delete currently connected LogoItem document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single LogoItem document */
    update?: InputMaybe<LogoItemUpdateWithNestedWhereUniqueInput>;
    /** Upsert single LogoItem document */
    upsert?: InputMaybe<LogoItemUpsertWithNestedWhereUniqueInput>;
};

export type LogoItemUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<LogoItemUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: LogoItemWhereUniqueInput;
};

export type LogoItemUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: LogoItemUpdateInput;
    /** Unique document search */
    where: LogoItemWhereUniqueInput;
};

export type LogoItemUpsertInput = {
    /** Create document if it didn't exist */
    create: LogoItemCreateInput;
    /** Update document if it exists */
    update: LogoItemUpdateInput;
};

export type LogoItemUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<LogoItemUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: LogoItemWhereUniqueInput;
};

export type LogoItemUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: LogoItemUpsertInput;
    /** Unique document search */
    where: LogoItemWhereUniqueInput;
};

/** Identifies documents */
export type LogoItemWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<LogoItemWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<LogoItemWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<LogoItemWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<AssetWhereInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    url_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    url_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    url_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References LogoItem record uniquely */
export type LogoItemWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type LogosSection = Entity & {
    __typename?: 'LogosSection';
    /** The unique identifier */
    id: Scalars['ID']['output'];
    logos: Array<LogoItem>;
    /** System stage field */
    stage: Stage;
    /** The subtitle is shown under the section's title. */
    subtitle?: Maybe<Scalars['String']['output']>;
    /** The section's title. */
    title?: Maybe<Scalars['String']['output']>;
};

export type LogosSectionLogosArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<LogoItemOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LogoItemWhereInput>;
};

export type LogosSectionConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: LogosSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type LogosSectionConnection = {
    __typename?: 'LogosSectionConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<LogosSectionEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type LogosSectionCreateInput = {
    logos?: InputMaybe<LogoItemCreateManyInlineInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type LogosSectionCreateManyInlineInput = {
    /** Create and connect multiple existing LogosSection documents */
    create?: InputMaybe<Array<LogosSectionCreateInput>>;
};

export type LogosSectionCreateOneInlineInput = {
    /** Create and connect one LogosSection document */
    create?: InputMaybe<LogosSectionCreateInput>;
};

export type LogosSectionCreateWithPositionInput = {
    /** Document to create */
    data: LogosSectionCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LogosSectionEdge = {
    __typename?: 'LogosSectionEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: LogosSection;
};

/** Identifies documents */
export type LogosSectionManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<LogosSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<LogosSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<LogosSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    logos_every?: InputMaybe<LogoItemWhereInput>;
    logos_none?: InputMaybe<LogoItemWhereInput>;
    logos_some?: InputMaybe<LogoItemWhereInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum LogosSectionOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    SubtitleAsc = 'subtitle_ASC',
    SubtitleDesc = 'subtitle_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC'
}

export type LogosSectionParent = LandingPage;

export type LogosSectionParentConnectInput = {
    LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type LogosSectionParentCreateInput = {
    LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type LogosSectionParentCreateManyInlineInput = {
    /** Connect multiple existing LogosSectionParent documents */
    connect?: InputMaybe<Array<LogosSectionParentWhereUniqueInput>>;
    /** Create and connect multiple existing LogosSectionParent documents */
    create?: InputMaybe<Array<LogosSectionParentCreateInput>>;
};

export type LogosSectionParentCreateOneInlineInput = {
    /** Connect one existing LogosSectionParent document */
    connect?: InputMaybe<LogosSectionParentWhereUniqueInput>;
    /** Create and connect one LogosSectionParent document */
    create?: InputMaybe<LogosSectionParentCreateInput>;
};

export type LogosSectionParentUpdateInput = {
    LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type LogosSectionParentUpdateManyInlineInput = {
    /** Connect multiple existing LogosSectionParent documents */
    connect?: InputMaybe<Array<LogosSectionParentConnectInput>>;
    /** Create and connect multiple LogosSectionParent documents */
    create?: InputMaybe<Array<LogosSectionParentCreateInput>>;
    /** Delete multiple LogosSectionParent documents */
    delete?: InputMaybe<Array<LogosSectionParentWhereUniqueInput>>;
    /** Disconnect multiple LogosSectionParent documents */
    disconnect?: InputMaybe<Array<LogosSectionParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing LogosSectionParent documents */
    set?: InputMaybe<Array<LogosSectionParentWhereUniqueInput>>;
    /** Update multiple LogosSectionParent documents */
    update?: InputMaybe<Array<LogosSectionParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple LogosSectionParent documents */
    upsert?: InputMaybe<Array<LogosSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type LogosSectionParentUpdateManyWithNestedWhereInput = {
    LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type LogosSectionParentUpdateOneInlineInput = {
    /** Connect existing LogosSectionParent document */
    connect?: InputMaybe<LogosSectionParentWhereUniqueInput>;
    /** Create and connect one LogosSectionParent document */
    create?: InputMaybe<LogosSectionParentCreateInput>;
    /** Delete currently connected LogosSectionParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected LogosSectionParent document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single LogosSectionParent document */
    update?: InputMaybe<LogosSectionParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single LogosSectionParent document */
    upsert?: InputMaybe<LogosSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type LogosSectionParentUpdateWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type LogosSectionParentUpsertWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type LogosSectionParentWhereInput = {
    LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type LogosSectionParentWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type LogosSectionUpdateInput = {
    logos?: InputMaybe<LogoItemUpdateManyInlineInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type LogosSectionUpdateManyInlineInput = {
    /** Create and connect multiple LogosSection component instances */
    create?: InputMaybe<Array<LogosSectionCreateWithPositionInput>>;
    /** Delete multiple LogosSection documents */
    delete?: InputMaybe<Array<LogosSectionWhereUniqueInput>>;
    /** Update multiple LogosSection component instances */
    update?: InputMaybe<Array<LogosSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple LogosSection component instances */
    upsert?: InputMaybe<Array<LogosSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LogosSectionUpdateManyInput = {
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type LogosSectionUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: LogosSectionUpdateManyInput;
    /** Document search */
    where: LogosSectionWhereInput;
};

export type LogosSectionUpdateOneInlineInput = {
    /** Create and connect one LogosSection document */
    create?: InputMaybe<LogosSectionCreateInput>;
    /** Delete currently connected LogosSection document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single LogosSection document */
    update?: InputMaybe<LogosSectionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single LogosSection document */
    upsert?: InputMaybe<LogosSectionUpsertWithNestedWhereUniqueInput>;
};

export type LogosSectionUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<LogosSectionUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: LogosSectionWhereUniqueInput;
};

export type LogosSectionUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: LogosSectionUpdateInput;
    /** Unique document search */
    where: LogosSectionWhereUniqueInput;
};

export type LogosSectionUpsertInput = {
    /** Create document if it didn't exist */
    create: LogosSectionCreateInput;
    /** Update document if it exists */
    update: LogosSectionUpdateInput;
};

export type LogosSectionUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<LogosSectionUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: LogosSectionWhereUniqueInput;
};

export type LogosSectionUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: LogosSectionUpsertInput;
    /** Unique document search */
    where: LogosSectionWhereUniqueInput;
};

/** Identifies documents */
export type LogosSectionWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<LogosSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<LogosSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<LogosSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    logos_every?: InputMaybe<LogoItemWhereInput>;
    logos_none?: InputMaybe<LogoItemWhereInput>;
    logos_some?: InputMaybe<LogoItemWhereInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References LogosSection record uniquely */
export type LogosSectionWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
    createAsset?: Maybe<Asset>;
    /** Create one landingPage */
    createLandingPage?: Maybe<LandingPage>;
    /** Create one person */
    createPerson?: Maybe<Person>;
    /** Create one postPage */
    createPostPage?: Maybe<PostPage>;
    /** Create one scheduledRelease */
    createScheduledRelease?: Maybe<ScheduledRelease>;
    /** Create one siteConfig */
    createSiteConfig?: Maybe<SiteConfig>;
    /** Delete one asset from _all_ existing stages. Returns deleted document. */
    deleteAsset?: Maybe<Asset>;
    /** Delete one landingPage from _all_ existing stages. Returns deleted document. */
    deleteLandingPage?: Maybe<LandingPage>;
    /**
     * Delete many Asset documents
     * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
     */
    deleteManyAssets: BatchPayload;
    /** Delete many Asset documents, return deleted documents */
    deleteManyAssetsConnection: AssetConnection;
    /**
     * Delete many LandingPage documents
     * @deprecated Please use the new paginated many mutation (deleteManyLandingPagesConnection)
     */
    deleteManyLandingPages: BatchPayload;
    /** Delete many LandingPage documents, return deleted documents */
    deleteManyLandingPagesConnection: LandingPageConnection;
    /**
     * Delete many Person documents
     * @deprecated Please use the new paginated many mutation (deleteManyPeopleConnection)
     */
    deleteManyPeople: BatchPayload;
    /** Delete many Person documents, return deleted documents */
    deleteManyPeopleConnection: PersonConnection;
    /**
     * Delete many PostPage documents
     * @deprecated Please use the new paginated many mutation (deleteManyPostPagesConnection)
     */
    deleteManyPostPages: BatchPayload;
    /** Delete many PostPage documents, return deleted documents */
    deleteManyPostPagesConnection: PostPageConnection;
    /**
     * Delete many SiteConfig documents
     * @deprecated Please use the new paginated many mutation (deleteManySiteConfigsConnection)
     */
    deleteManySiteConfigs: BatchPayload;
    /** Delete many SiteConfig documents, return deleted documents */
    deleteManySiteConfigsConnection: SiteConfigConnection;
    /** Delete one person from _all_ existing stages. Returns deleted document. */
    deletePerson?: Maybe<Person>;
    /** Delete one postPage from _all_ existing stages. Returns deleted document. */
    deletePostPage?: Maybe<PostPage>;
    /** Delete and return scheduled operation */
    deleteScheduledOperation?: Maybe<ScheduledOperation>;
    /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
    deleteScheduledRelease?: Maybe<ScheduledRelease>;
    /** Delete one siteConfig from _all_ existing stages. Returns deleted document. */
    deleteSiteConfig?: Maybe<SiteConfig>;
    /** Publish one asset */
    publishAsset?: Maybe<Asset>;
    /** Publish one landingPage */
    publishLandingPage?: Maybe<LandingPage>;
    /**
     * Publish many Asset documents
     * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
     */
    publishManyAssets: BatchPayload;
    /** Publish many Asset documents */
    publishManyAssetsConnection: AssetConnection;
    /**
     * Publish many LandingPage documents
     * @deprecated Please use the new paginated many mutation (publishManyLandingPagesConnection)
     */
    publishManyLandingPages: BatchPayload;
    /** Publish many LandingPage documents */
    publishManyLandingPagesConnection: LandingPageConnection;
    /**
     * Publish many Person documents
     * @deprecated Please use the new paginated many mutation (publishManyPeopleConnection)
     */
    publishManyPeople: BatchPayload;
    /** Publish many Person documents */
    publishManyPeopleConnection: PersonConnection;
    /**
     * Publish many PostPage documents
     * @deprecated Please use the new paginated many mutation (publishManyPostPagesConnection)
     */
    publishManyPostPages: BatchPayload;
    /** Publish many PostPage documents */
    publishManyPostPagesConnection: PostPageConnection;
    /**
     * Publish many SiteConfig documents
     * @deprecated Please use the new paginated many mutation (publishManySiteConfigsConnection)
     */
    publishManySiteConfigs: BatchPayload;
    /** Publish many SiteConfig documents */
    publishManySiteConfigsConnection: SiteConfigConnection;
    /** Publish one person */
    publishPerson?: Maybe<Person>;
    /** Publish one postPage */
    publishPostPage?: Maybe<PostPage>;
    /** Publish one siteConfig */
    publishSiteConfig?: Maybe<SiteConfig>;
    /** Schedule to publish one asset */
    schedulePublishAsset?: Maybe<Asset>;
    /** Schedule to publish one landingPage */
    schedulePublishLandingPage?: Maybe<LandingPage>;
    /** Schedule to publish one person */
    schedulePublishPerson?: Maybe<Person>;
    /** Schedule to publish one postPage */
    schedulePublishPostPage?: Maybe<PostPage>;
    /** Schedule to publish one siteConfig */
    schedulePublishSiteConfig?: Maybe<SiteConfig>;
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishAsset?: Maybe<Asset>;
    /** Unpublish one landingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishLandingPage?: Maybe<LandingPage>;
    /** Unpublish one person from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishPerson?: Maybe<Person>;
    /** Unpublish one postPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishPostPage?: Maybe<PostPage>;
    /** Unpublish one siteConfig from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishSiteConfig?: Maybe<SiteConfig>;
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishAsset?: Maybe<Asset>;
    /** Unpublish one landingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishLandingPage?: Maybe<LandingPage>;
    /**
     * Unpublish many Asset documents
     * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
     */
    unpublishManyAssets: BatchPayload;
    /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyAssetsConnection: AssetConnection;
    /**
     * Unpublish many LandingPage documents
     * @deprecated Please use the new paginated many mutation (unpublishManyLandingPagesConnection)
     */
    unpublishManyLandingPages: BatchPayload;
    /** Find many LandingPage documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyLandingPagesConnection: LandingPageConnection;
    /**
     * Unpublish many Person documents
     * @deprecated Please use the new paginated many mutation (unpublishManyPeopleConnection)
     */
    unpublishManyPeople: BatchPayload;
    /** Find many Person documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyPeopleConnection: PersonConnection;
    /**
     * Unpublish many PostPage documents
     * @deprecated Please use the new paginated many mutation (unpublishManyPostPagesConnection)
     */
    unpublishManyPostPages: BatchPayload;
    /** Find many PostPage documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyPostPagesConnection: PostPageConnection;
    /**
     * Unpublish many SiteConfig documents
     * @deprecated Please use the new paginated many mutation (unpublishManySiteConfigsConnection)
     */
    unpublishManySiteConfigs: BatchPayload;
    /** Find many SiteConfig documents that match criteria in specified stage and unpublish from target stages */
    unpublishManySiteConfigsConnection: SiteConfigConnection;
    /** Unpublish one person from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishPerson?: Maybe<Person>;
    /** Unpublish one postPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishPostPage?: Maybe<PostPage>;
    /** Unpublish one siteConfig from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishSiteConfig?: Maybe<SiteConfig>;
    /** Update one asset */
    updateAsset?: Maybe<Asset>;
    /** Update one landingPage */
    updateLandingPage?: Maybe<LandingPage>;
    /**
     * Update many assets
     * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
     */
    updateManyAssets: BatchPayload;
    /** Update many Asset documents */
    updateManyAssetsConnection: AssetConnection;
    /**
     * Update many landingPages
     * @deprecated Please use the new paginated many mutation (updateManyLandingPagesConnection)
     */
    updateManyLandingPages: BatchPayload;
    /** Update many LandingPage documents */
    updateManyLandingPagesConnection: LandingPageConnection;
    /**
     * Update many people
     * @deprecated Please use the new paginated many mutation (updateManyPeopleConnection)
     */
    updateManyPeople: BatchPayload;
    /** Update many Person documents */
    updateManyPeopleConnection: PersonConnection;
    /**
     * Update many postPages
     * @deprecated Please use the new paginated many mutation (updateManyPostPagesConnection)
     */
    updateManyPostPages: BatchPayload;
    /** Update many PostPage documents */
    updateManyPostPagesConnection: PostPageConnection;
    /**
     * Update many siteConfigs
     * @deprecated Please use the new paginated many mutation (updateManySiteConfigsConnection)
     */
    updateManySiteConfigs: BatchPayload;
    /** Update many SiteConfig documents */
    updateManySiteConfigsConnection: SiteConfigConnection;
    /** Update one person */
    updatePerson?: Maybe<Person>;
    /** Update one postPage */
    updatePostPage?: Maybe<PostPage>;
    /** Update one scheduledRelease */
    updateScheduledRelease?: Maybe<ScheduledRelease>;
    /** Update one siteConfig */
    updateSiteConfig?: Maybe<SiteConfig>;
    /** Upsert one asset */
    upsertAsset?: Maybe<Asset>;
    /** Upsert one landingPage */
    upsertLandingPage?: Maybe<LandingPage>;
    /** Upsert one person */
    upsertPerson?: Maybe<Person>;
    /** Upsert one postPage */
    upsertPostPage?: Maybe<PostPage>;
    /** Upsert one siteConfig */
    upsertSiteConfig?: Maybe<SiteConfig>;
};

export type MutationCreateAssetArgs = {
    data: AssetCreateInput;
};

export type MutationCreateLandingPageArgs = {
    data: LandingPageCreateInput;
};

export type MutationCreatePersonArgs = {
    data: PersonCreateInput;
};

export type MutationCreatePostPageArgs = {
    data: PostPageCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
    data: ScheduledReleaseCreateInput;
};

export type MutationCreateSiteConfigArgs = {
    data: SiteConfigCreateInput;
};

export type MutationDeleteAssetArgs = {
    where: AssetWhereUniqueInput;
};

export type MutationDeleteLandingPageArgs = {
    where: LandingPageWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyLandingPagesArgs = {
    where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationDeleteManyLandingPagesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationDeleteManyPeopleArgs = {
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationDeleteManyPeopleConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationDeleteManyPostPagesArgs = {
    where?: InputMaybe<PostPageManyWhereInput>;
};

export type MutationDeleteManyPostPagesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PostPageManyWhereInput>;
};

export type MutationDeleteManySiteConfigsArgs = {
    where?: InputMaybe<SiteConfigManyWhereInput>;
};

export type MutationDeleteManySiteConfigsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<SiteConfigManyWhereInput>;
};

export type MutationDeletePersonArgs = {
    where: PersonWhereUniqueInput;
};

export type MutationDeletePostPageArgs = {
    where: PostPageWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
    where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
    where: ScheduledReleaseWhereUniqueInput;
};

export type MutationDeleteSiteConfigArgs = {
    where: SiteConfigWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars['Boolean']['input']>;
    to?: Array<Stage>;
    where: AssetWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishLandingPageArgs = {
    to?: Array<Stage>;
    where: LandingPageWhereUniqueInput;
};

export type MutationPublishManyAssetsArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars['Boolean']['input']>;
    to?: Array<Stage>;
    where?: InputMaybe<AssetManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    to?: Array<Stage>;
    where?: InputMaybe<AssetManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishManyLandingPagesArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationPublishManyLandingPagesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    to?: Array<Stage>;
    where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationPublishManyPeopleArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationPublishManyPeopleConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    to?: Array<Stage>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationPublishManyPostPagesArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<PostPageManyWhereInput>;
};

export type MutationPublishManyPostPagesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    to?: Array<Stage>;
    where?: InputMaybe<PostPageManyWhereInput>;
};

export type MutationPublishManySiteConfigsArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<SiteConfigManyWhereInput>;
};

export type MutationPublishManySiteConfigsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    to?: Array<Stage>;
    where?: InputMaybe<SiteConfigManyWhereInput>;
};

export type MutationPublishPersonArgs = {
    to?: Array<Stage>;
    where: PersonWhereUniqueInput;
};

export type MutationPublishPostPageArgs = {
    to?: Array<Stage>;
    where: PostPageWhereUniqueInput;
};

export type MutationPublishSiteConfigArgs = {
    to?: Array<Stage>;
    where: SiteConfigWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars['Boolean']['input']>;
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    releaseId?: InputMaybe<Scalars['String']['input']>;
    to?: Array<Stage>;
    where: AssetWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationSchedulePublishLandingPageArgs = {
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    releaseId?: InputMaybe<Scalars['String']['input']>;
    to?: Array<Stage>;
    where: LandingPageWhereUniqueInput;
};

export type MutationSchedulePublishPersonArgs = {
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    releaseId?: InputMaybe<Scalars['String']['input']>;
    to?: Array<Stage>;
    where: PersonWhereUniqueInput;
};

export type MutationSchedulePublishPostPageArgs = {
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    releaseId?: InputMaybe<Scalars['String']['input']>;
    to?: Array<Stage>;
    where: PostPageWhereUniqueInput;
};

export type MutationSchedulePublishSiteConfigArgs = {
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    releaseId?: InputMaybe<Scalars['String']['input']>;
    to?: Array<Stage>;
    where: SiteConfigWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    releaseId?: InputMaybe<Scalars['String']['input']>;
    unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
    where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishLandingPageArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    releaseId?: InputMaybe<Scalars['String']['input']>;
    where: LandingPageWhereUniqueInput;
};

export type MutationScheduleUnpublishPersonArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    releaseId?: InputMaybe<Scalars['String']['input']>;
    where: PersonWhereUniqueInput;
};

export type MutationScheduleUnpublishPostPageArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    releaseId?: InputMaybe<Scalars['String']['input']>;
    where: PostPageWhereUniqueInput;
};

export type MutationScheduleUnpublishSiteConfigArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    releaseId?: InputMaybe<Scalars['String']['input']>;
    where: SiteConfigWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
    where: AssetWhereUniqueInput;
};

export type MutationUnpublishLandingPageArgs = {
    from?: Array<Stage>;
    where: LandingPageWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: InputMaybe<Stage>;
    unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyLandingPagesArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationUnpublishManyLandingPagesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationUnpublishManyPeopleArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUnpublishManyPeopleConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUnpublishManyPostPagesArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<PostPageManyWhereInput>;
};

export type MutationUnpublishManyPostPagesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<PostPageManyWhereInput>;
};

export type MutationUnpublishManySiteConfigsArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<SiteConfigManyWhereInput>;
};

export type MutationUnpublishManySiteConfigsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<SiteConfigManyWhereInput>;
};

export type MutationUnpublishPersonArgs = {
    from?: Array<Stage>;
    where: PersonWhereUniqueInput;
};

export type MutationUnpublishPostPageArgs = {
    from?: Array<Stage>;
    where: PostPageWhereUniqueInput;
};

export type MutationUnpublishSiteConfigArgs = {
    from?: Array<Stage>;
    where: SiteConfigWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
    data: AssetUpdateInput;
    where: AssetWhereUniqueInput;
};

export type MutationUpdateLandingPageArgs = {
    data: LandingPageUpdateInput;
    where: LandingPageWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
    data: AssetUpdateManyInput;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    data: AssetUpdateManyInput;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyLandingPagesArgs = {
    data: LandingPageUpdateManyInput;
    where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationUpdateManyLandingPagesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    data: LandingPageUpdateManyInput;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LandingPageManyWhereInput>;
};

export type MutationUpdateManyPeopleArgs = {
    data: PersonUpdateManyInput;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUpdateManyPeopleConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    data: PersonUpdateManyInput;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUpdateManyPostPagesArgs = {
    data: PostPageUpdateManyInput;
    where?: InputMaybe<PostPageManyWhereInput>;
};

export type MutationUpdateManyPostPagesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    data: PostPageUpdateManyInput;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PostPageManyWhereInput>;
};

export type MutationUpdateManySiteConfigsArgs = {
    data: SiteConfigUpdateManyInput;
    where?: InputMaybe<SiteConfigManyWhereInput>;
};

export type MutationUpdateManySiteConfigsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']['input']>;
    before?: InputMaybe<Scalars['ID']['input']>;
    data: SiteConfigUpdateManyInput;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<SiteConfigManyWhereInput>;
};

export type MutationUpdatePersonArgs = {
    data: PersonUpdateInput;
    where: PersonWhereUniqueInput;
};

export type MutationUpdatePostPageArgs = {
    data: PostPageUpdateInput;
    where: PostPageWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
    data: ScheduledReleaseUpdateInput;
    where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpdateSiteConfigArgs = {
    data: SiteConfigUpdateInput;
    where: SiteConfigWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
    upsert: AssetUpsertInput;
    where: AssetWhereUniqueInput;
};

export type MutationUpsertLandingPageArgs = {
    upsert: LandingPageUpsertInput;
    where: LandingPageWhereUniqueInput;
};

export type MutationUpsertPersonArgs = {
    upsert: PersonUpsertInput;
    where: PersonWhereUniqueInput;
};

export type MutationUpsertPostPageArgs = {
    upsert: PostPageUpsertInput;
    where: PostPageWhereUniqueInput;
};

export type MutationUpsertSiteConfigArgs = {
    upsert: SiteConfigUpsertInput;
    where: SiteConfigWhereUniqueInput;
};

export type NavigationBar = Entity & {
    __typename?: 'NavigationBar';
    actions: Array<Action>;
    /** The unique identifier */
    id: Scalars['ID']['output'];
    links: Array<Link>;
    /** System stage field */
    stage: Stage;
};

export type NavigationBarActionsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<ActionOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ActionWhereInput>;
};

export type NavigationBarLinksArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<LinkOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<LinkWhereInput>;
};

export type NavigationBarConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: NavigationBarWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationBarConnection = {
    __typename?: 'NavigationBarConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<NavigationBarEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type NavigationBarCreateInput = {
    actions?: InputMaybe<ActionCreateManyInlineInput>;
    links?: InputMaybe<LinkCreateManyInlineInput>;
};

export type NavigationBarCreateManyInlineInput = {
    /** Create and connect multiple existing NavigationBar documents */
    create?: InputMaybe<Array<NavigationBarCreateInput>>;
};

export type NavigationBarCreateOneInlineInput = {
    /** Create and connect one NavigationBar document */
    create?: InputMaybe<NavigationBarCreateInput>;
};

export type NavigationBarCreateWithPositionInput = {
    /** Document to create */
    data: NavigationBarCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type NavigationBarEdge = {
    __typename?: 'NavigationBarEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: NavigationBar;
};

/** Identifies documents */
export type NavigationBarManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<NavigationBarWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<NavigationBarWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<NavigationBarWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    actions_every?: InputMaybe<ActionWhereInput>;
    actions_none?: InputMaybe<ActionWhereInput>;
    actions_some?: InputMaybe<ActionWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    links_every?: InputMaybe<LinkWhereInput>;
    links_none?: InputMaybe<LinkWhereInput>;
    links_some?: InputMaybe<LinkWhereInput>;
};

export enum NavigationBarOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC'
}

export type NavigationBarParent = SiteConfig;

export type NavigationBarParentConnectInput = {
    SiteConfig?: InputMaybe<SiteConfigConnectInput>;
};

export type NavigationBarParentCreateInput = {
    SiteConfig?: InputMaybe<SiteConfigCreateInput>;
};

export type NavigationBarParentCreateManyInlineInput = {
    /** Connect multiple existing NavigationBarParent documents */
    connect?: InputMaybe<Array<NavigationBarParentWhereUniqueInput>>;
    /** Create and connect multiple existing NavigationBarParent documents */
    create?: InputMaybe<Array<NavigationBarParentCreateInput>>;
};

export type NavigationBarParentCreateOneInlineInput = {
    /** Connect one existing NavigationBarParent document */
    connect?: InputMaybe<NavigationBarParentWhereUniqueInput>;
    /** Create and connect one NavigationBarParent document */
    create?: InputMaybe<NavigationBarParentCreateInput>;
};

export type NavigationBarParentUpdateInput = {
    SiteConfig?: InputMaybe<SiteConfigUpdateInput>;
};

export type NavigationBarParentUpdateManyInlineInput = {
    /** Connect multiple existing NavigationBarParent documents */
    connect?: InputMaybe<Array<NavigationBarParentConnectInput>>;
    /** Create and connect multiple NavigationBarParent documents */
    create?: InputMaybe<Array<NavigationBarParentCreateInput>>;
    /** Delete multiple NavigationBarParent documents */
    delete?: InputMaybe<Array<NavigationBarParentWhereUniqueInput>>;
    /** Disconnect multiple NavigationBarParent documents */
    disconnect?: InputMaybe<Array<NavigationBarParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing NavigationBarParent documents */
    set?: InputMaybe<Array<NavigationBarParentWhereUniqueInput>>;
    /** Update multiple NavigationBarParent documents */
    update?: InputMaybe<Array<NavigationBarParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple NavigationBarParent documents */
    upsert?: InputMaybe<Array<NavigationBarParentUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationBarParentUpdateManyWithNestedWhereInput = {
    SiteConfig?: InputMaybe<SiteConfigUpdateManyWithNestedWhereInput>;
};

export type NavigationBarParentUpdateOneInlineInput = {
    /** Connect existing NavigationBarParent document */
    connect?: InputMaybe<NavigationBarParentWhereUniqueInput>;
    /** Create and connect one NavigationBarParent document */
    create?: InputMaybe<NavigationBarParentCreateInput>;
    /** Delete currently connected NavigationBarParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected NavigationBarParent document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single NavigationBarParent document */
    update?: InputMaybe<NavigationBarParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single NavigationBarParent document */
    upsert?: InputMaybe<NavigationBarParentUpsertWithNestedWhereUniqueInput>;
};

export type NavigationBarParentUpdateWithNestedWhereUniqueInput = {
    SiteConfig?: InputMaybe<SiteConfigUpdateWithNestedWhereUniqueInput>;
};

export type NavigationBarParentUpsertWithNestedWhereUniqueInput = {
    SiteConfig?: InputMaybe<SiteConfigUpsertWithNestedWhereUniqueInput>;
};

export type NavigationBarParentWhereInput = {
    SiteConfig?: InputMaybe<SiteConfigWhereInput>;
};

export type NavigationBarParentWhereUniqueInput = {
    SiteConfig?: InputMaybe<SiteConfigWhereUniqueInput>;
};

export type NavigationBarUpdateInput = {
    actions?: InputMaybe<ActionUpdateManyInlineInput>;
    links?: InputMaybe<LinkUpdateManyInlineInput>;
};

export type NavigationBarUpdateManyInlineInput = {
    /** Create and connect multiple NavigationBar component instances */
    create?: InputMaybe<Array<NavigationBarCreateWithPositionInput>>;
    /** Delete multiple NavigationBar documents */
    delete?: InputMaybe<Array<NavigationBarWhereUniqueInput>>;
    /** Update multiple NavigationBar component instances */
    update?: InputMaybe<Array<NavigationBarUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple NavigationBar component instances */
    upsert?: InputMaybe<Array<NavigationBarUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type NavigationBarUpdateManyInput = {
    /** No fields in updateMany data input */
    _?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationBarUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: NavigationBarUpdateManyInput;
    /** Document search */
    where: NavigationBarWhereInput;
};

export type NavigationBarUpdateOneInlineInput = {
    /** Create and connect one NavigationBar document */
    create?: InputMaybe<NavigationBarCreateInput>;
    /** Delete currently connected NavigationBar document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single NavigationBar document */
    update?: InputMaybe<NavigationBarUpdateWithNestedWhereUniqueInput>;
    /** Upsert single NavigationBar document */
    upsert?: InputMaybe<NavigationBarUpsertWithNestedWhereUniqueInput>;
};

export type NavigationBarUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<NavigationBarUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: NavigationBarWhereUniqueInput;
};

export type NavigationBarUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: NavigationBarUpdateInput;
    /** Unique document search */
    where: NavigationBarWhereUniqueInput;
};

export type NavigationBarUpsertInput = {
    /** Create document if it didn't exist */
    create: NavigationBarCreateInput;
    /** Update document if it exists */
    update: NavigationBarUpdateInput;
};

export type NavigationBarUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<NavigationBarUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: NavigationBarWhereUniqueInput;
};

export type NavigationBarUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: NavigationBarUpsertInput;
    /** Unique document search */
    where: NavigationBarWhereUniqueInput;
};

/** Identifies documents */
export type NavigationBarWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<NavigationBarWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<NavigationBarWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<NavigationBarWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    actions_every?: InputMaybe<ActionWhereInput>;
    actions_none?: InputMaybe<ActionWhereInput>;
    actions_some?: InputMaybe<ActionWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    links_every?: InputMaybe<LinkWhereInput>;
    links_none?: InputMaybe<LinkWhereInput>;
    links_some?: InputMaybe<LinkWhereInput>;
};

/** References NavigationBar record uniquely */
export type NavigationBarWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

/** An object with an ID */
export type Node = {
    /** The id of the object. */
    id: Scalars['ID']['output'];
    /** The Stage of an object */
    stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
    __typename?: 'PageInfo';
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output'];
    /** Number of items in the current page. */
    pageSize?: Maybe<Scalars['Int']['output']>;
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>;
};

export type Person = Entity &
    Node & {
        __typename?: 'Person';
        /** The time the document was created */
        createdAt: Scalars['DateTime']['output'];
        /** User that created this document */
        createdBy?: Maybe<User>;
        /** Get the document in other stages */
        documentInStages: Array<Person>;
        /** List of Person versions */
        history: Array<Version>;
        /** The unique identifier */
        id: Scalars['ID']['output'];
        jobDescription?: Maybe<Scalars['String']['output']>;
        name: Scalars['String']['output'];
        photo?: Maybe<Asset>;
        /** The time the document was published. Null on documents in draft stage. */
        publishedAt?: Maybe<Scalars['DateTime']['output']>;
        /** User that last published this document */
        publishedBy?: Maybe<User>;
        scheduledIn: Array<ScheduledOperation>;
        socialIconLinks: Array<SocialIconLink>;
        /** System stage field */
        stage: Stage;
        title?: Maybe<Scalars['String']['output']>;
        /** The time the document was updated */
        updatedAt: Scalars['DateTime']['output'];
        /** User that last updated this document */
        updatedBy?: Maybe<User>;
    };

export type PersonCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type PersonDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean']['input'];
    inheritLocale?: Scalars['Boolean']['input'];
    stages?: Array<Stage>;
};

export type PersonHistoryArgs = {
    limit?: Scalars['Int']['input'];
    skip?: Scalars['Int']['input'];
    stageOverride?: InputMaybe<Stage>;
};

export type PersonPhotoArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type PersonPublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type PersonScheduledInArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type PersonSocialIconLinksArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<SocialIconLinkOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<SocialIconLinkWhereInput>;
};

export type PersonUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type PersonConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: PersonWhereUniqueInput;
};

/** A connection to a list of items. */
export type PersonConnection = {
    __typename?: 'PersonConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<PersonEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type PersonCreateInput = {
    cm6xr4uf6105607mt50oybsex?: InputMaybe<TeamSectionCreateManyInlineInput>;
    cm6xrpe3t10lc07mtdow0gr4o?: InputMaybe<PostPageCreateManyInlineInput>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    jobDescription?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    photo?: InputMaybe<AssetCreateOneInlineInput>;
    socialIconLinks?: InputMaybe<SocialIconLinkCreateManyInlineInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PersonCreateManyInlineInput = {
    /** Connect multiple existing Person documents */
    connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
    /** Create and connect multiple existing Person documents */
    create?: InputMaybe<Array<PersonCreateInput>>;
};

export type PersonCreateOneInlineInput = {
    /** Connect one existing Person document */
    connect?: InputMaybe<PersonWhereUniqueInput>;
    /** Create and connect one Person document */
    create?: InputMaybe<PersonCreateInput>;
};

/** An edge in a connection. */
export type PersonEdge = {
    __typename?: 'PersonEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: Person;
};

/** Identifies documents */
export type PersonManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PersonWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PersonWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PersonWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<PersonWhereStageInput>;
    documentInStages_none?: InputMaybe<PersonWhereStageInput>;
    documentInStages_some?: InputMaybe<PersonWhereStageInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    jobDescription?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    jobDescription_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    jobDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    jobDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    jobDescription_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    jobDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    jobDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    jobDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    jobDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    jobDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    name_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    photo?: InputMaybe<AssetWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    socialIconLinks_every?: InputMaybe<SocialIconLinkWhereInput>;
    socialIconLinks_none?: InputMaybe<SocialIconLinkWhereInput>;
    socialIconLinks_some?: InputMaybe<SocialIconLinkWhereInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PersonOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    JobDescriptionAsc = 'jobDescription_ASC',
    JobDescriptionDesc = 'jobDescription_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC'
}

export type PersonUpdateInput = {
    cm6xr4uf6105607mt50oybsex?: InputMaybe<TeamSectionUpdateManyInlineInput>;
    cm6xrpe3t10lc07mtdow0gr4o?: InputMaybe<PostPageUpdateManyInlineInput>;
    jobDescription?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    photo?: InputMaybe<AssetUpdateOneInlineInput>;
    socialIconLinks?: InputMaybe<SocialIconLinkUpdateManyInlineInput>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type PersonUpdateManyInlineInput = {
    /** Connect multiple existing Person documents */
    connect?: InputMaybe<Array<PersonConnectInput>>;
    /** Create and connect multiple Person documents */
    create?: InputMaybe<Array<PersonCreateInput>>;
    /** Delete multiple Person documents */
    delete?: InputMaybe<Array<PersonWhereUniqueInput>>;
    /** Disconnect multiple Person documents */
    disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Person documents */
    set?: InputMaybe<Array<PersonWhereUniqueInput>>;
    /** Update multiple Person documents */
    update?: InputMaybe<Array<PersonUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Person documents */
    upsert?: InputMaybe<Array<PersonUpsertWithNestedWhereUniqueInput>>;
};

export type PersonUpdateManyInput = {
    jobDescription?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type PersonUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: PersonUpdateManyInput;
    /** Document search */
    where: PersonWhereInput;
};

export type PersonUpdateOneInlineInput = {
    /** Connect existing Person document */
    connect?: InputMaybe<PersonWhereUniqueInput>;
    /** Create and connect one Person document */
    create?: InputMaybe<PersonCreateInput>;
    /** Delete currently connected Person document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected Person document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single Person document */
    update?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Person document */
    upsert?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type PersonUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: PersonUpdateInput;
    /** Unique document search */
    where: PersonWhereUniqueInput;
};

export type PersonUpsertInput = {
    /** Create document if it didn't exist */
    create: PersonCreateInput;
    /** Update document if it exists */
    update: PersonUpdateInput;
};

export type PersonUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: PersonUpsertInput;
    /** Unique document search */
    where: PersonWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PersonWhereComparatorInput = {
    /** This field can be used to request to check if the entry is outdated by internal comparison */
    outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PersonWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PersonWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PersonWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PersonWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<PersonWhereStageInput>;
    documentInStages_none?: InputMaybe<PersonWhereStageInput>;
    documentInStages_some?: InputMaybe<PersonWhereStageInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    jobDescription?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    jobDescription_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    jobDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    jobDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    jobDescription_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    jobDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    jobDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    jobDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    jobDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    jobDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    name_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    photo?: InputMaybe<AssetWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    socialIconLinks_every?: InputMaybe<SocialIconLinkWhereInput>;
    socialIconLinks_none?: InputMaybe<SocialIconLinkWhereInput>;
    socialIconLinks_some?: InputMaybe<SocialIconLinkWhereInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PersonWhereStageInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PersonWhereStageInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PersonWhereStageInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PersonWhereStageInput>>;
    /** This field contains fields which can be set as true or false to specify an internal comparison */
    compareWithParent?: InputMaybe<PersonWhereComparatorInput>;
    /** Specify the stage to compare with */
    stage?: InputMaybe<Stage>;
};

/** References Person record uniquely */
export type PersonWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type PostPage = Entity &
    Node & {
        __typename?: 'PostPage';
        author?: Maybe<Person>;
        category?: Maybe<Scalars['String']['output']>;
        /**
         * The icon must match one of the icon names from flaticon.com, e.g., "fi-brands-instagram".
         *
         */
        categoryIcon?: Maybe<Scalars['String']['output']>;
        content?: Maybe<Scalars['String']['output']>;
        /** The time the document was created */
        createdAt: Scalars['DateTime']['output'];
        /** User that created this document */
        createdBy?: Maybe<User>;
        date?: Maybe<Scalars['Date']['output']>;
        /** Get the document in other stages */
        documentInStages: Array<PostPage>;
        excerpt?: Maybe<Scalars['String']['output']>;
        /** List of PostPage versions */
        history: Array<Version>;
        /** The unique identifier */
        id: Scalars['ID']['output'];
        image?: Maybe<Asset>;
        /** The time the document was published. Null on documents in draft stage. */
        publishedAt?: Maybe<Scalars['DateTime']['output']>;
        /** User that last published this document */
        publishedBy?: Maybe<User>;
        relatedPosts: Array<PostPage>;
        scheduledIn: Array<ScheduledOperation>;
        slug: Scalars['String']['output'];
        /** System stage field */
        stage: Stage;
        title: Scalars['String']['output'];
        /** The time the document was updated */
        updatedAt: Scalars['DateTime']['output'];
        /** User that last updated this document */
        updatedBy?: Maybe<User>;
    };

export type PostPageAuthorArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type PostPageCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type PostPageDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean']['input'];
    inheritLocale?: Scalars['Boolean']['input'];
    stages?: Array<Stage>;
};

export type PostPageHistoryArgs = {
    limit?: Scalars['Int']['input'];
    skip?: Scalars['Int']['input'];
    stageOverride?: InputMaybe<Stage>;
};

export type PostPageImageArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type PostPagePublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type PostPageRelatedPostsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<PostPageOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PostPageWhereInput>;
};

export type PostPageScheduledInArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type PostPageUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type PostPageConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: PostPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PostPageConnection = {
    __typename?: 'PostPageConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<PostPageEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type PostPageCreateInput = {
    author?: InputMaybe<PersonCreateOneInlineInput>;
    category?: InputMaybe<Scalars['String']['input']>;
    categoryIcon?: InputMaybe<Scalars['String']['input']>;
    cm6xrtx9r10yq07mtd25igfiz?: InputMaybe<PostPageCreateManyInlineInput>;
    content?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    date?: InputMaybe<Scalars['Date']['input']>;
    excerpt?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<AssetCreateOneInlineInput>;
    relatedPosts?: InputMaybe<PostPageCreateManyInlineInput>;
    slug: Scalars['String']['input'];
    title: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostPageCreateManyInlineInput = {
    /** Connect multiple existing PostPage documents */
    connect?: InputMaybe<Array<PostPageWhereUniqueInput>>;
    /** Create and connect multiple existing PostPage documents */
    create?: InputMaybe<Array<PostPageCreateInput>>;
};

export type PostPageCreateOneInlineInput = {
    /** Connect one existing PostPage document */
    connect?: InputMaybe<PostPageWhereUniqueInput>;
    /** Create and connect one PostPage document */
    create?: InputMaybe<PostPageCreateInput>;
};

/** An edge in a connection. */
export type PostPageEdge = {
    __typename?: 'PostPageEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: PostPage;
};

/** Identifies documents */
export type PostPageManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PostPageWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PostPageWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PostPageWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    author?: InputMaybe<PersonWhereInput>;
    category?: InputMaybe<Scalars['String']['input']>;
    categoryIcon?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    categoryIcon_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    categoryIcon_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    categoryIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    categoryIcon_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    categoryIcon_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    categoryIcon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    categoryIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    categoryIcon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    categoryIcon_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    category_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    category_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    category_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    category_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    category_starts_with?: InputMaybe<Scalars['String']['input']>;
    content?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    content_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    content_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    content_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    content_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    content_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    date?: InputMaybe<Scalars['Date']['input']>;
    /** All values greater than the given value. */
    date_gt?: InputMaybe<Scalars['Date']['input']>;
    /** All values greater than or equal the given value. */
    date_gte?: InputMaybe<Scalars['Date']['input']>;
    /** All values that are contained in given list. */
    date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
    /** All values less than the given value. */
    date_lt?: InputMaybe<Scalars['Date']['input']>;
    /** All values less than or equal the given value. */
    date_lte?: InputMaybe<Scalars['Date']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    date_not?: InputMaybe<Scalars['Date']['input']>;
    /** All values that are not contained in given list. */
    date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
    documentInStages_every?: InputMaybe<PostPageWhereStageInput>;
    documentInStages_none?: InputMaybe<PostPageWhereStageInput>;
    documentInStages_some?: InputMaybe<PostPageWhereStageInput>;
    excerpt?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    excerpt_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    excerpt_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    excerpt_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    excerpt_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    excerpt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    excerpt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    excerpt_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<AssetWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    relatedPosts_every?: InputMaybe<PostPageWhereInput>;
    relatedPosts_none?: InputMaybe<PostPageWhereInput>;
    relatedPosts_some?: InputMaybe<PostPageWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    slug?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    slug_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    slug_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    slug_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PostPageOrderByInput {
    CategoryIconAsc = 'categoryIcon_ASC',
    CategoryIconDesc = 'categoryIcon_DESC',
    CategoryAsc = 'category_ASC',
    CategoryDesc = 'category_DESC',
    ContentAsc = 'content_ASC',
    ContentDesc = 'content_DESC',
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    DateAsc = 'date_ASC',
    DateDesc = 'date_DESC',
    ExcerptAsc = 'excerpt_ASC',
    ExcerptDesc = 'excerpt_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC'
}

export type PostPageUpdateInput = {
    author?: InputMaybe<PersonUpdateOneInlineInput>;
    category?: InputMaybe<Scalars['String']['input']>;
    categoryIcon?: InputMaybe<Scalars['String']['input']>;
    cm6xrtx9r10yq07mtd25igfiz?: InputMaybe<PostPageUpdateManyInlineInput>;
    content?: InputMaybe<Scalars['String']['input']>;
    date?: InputMaybe<Scalars['Date']['input']>;
    excerpt?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<AssetUpdateOneInlineInput>;
    relatedPosts?: InputMaybe<PostPageUpdateManyInlineInput>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type PostPageUpdateManyInlineInput = {
    /** Connect multiple existing PostPage documents */
    connect?: InputMaybe<Array<PostPageConnectInput>>;
    /** Create and connect multiple PostPage documents */
    create?: InputMaybe<Array<PostPageCreateInput>>;
    /** Delete multiple PostPage documents */
    delete?: InputMaybe<Array<PostPageWhereUniqueInput>>;
    /** Disconnect multiple PostPage documents */
    disconnect?: InputMaybe<Array<PostPageWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing PostPage documents */
    set?: InputMaybe<Array<PostPageWhereUniqueInput>>;
    /** Update multiple PostPage documents */
    update?: InputMaybe<Array<PostPageUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple PostPage documents */
    upsert?: InputMaybe<Array<PostPageUpsertWithNestedWhereUniqueInput>>;
};

export type PostPageUpdateManyInput = {
    category?: InputMaybe<Scalars['String']['input']>;
    categoryIcon?: InputMaybe<Scalars['String']['input']>;
    content?: InputMaybe<Scalars['String']['input']>;
    date?: InputMaybe<Scalars['Date']['input']>;
    excerpt?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type PostPageUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: PostPageUpdateManyInput;
    /** Document search */
    where: PostPageWhereInput;
};

export type PostPageUpdateOneInlineInput = {
    /** Connect existing PostPage document */
    connect?: InputMaybe<PostPageWhereUniqueInput>;
    /** Create and connect one PostPage document */
    create?: InputMaybe<PostPageCreateInput>;
    /** Delete currently connected PostPage document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected PostPage document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single PostPage document */
    update?: InputMaybe<PostPageUpdateWithNestedWhereUniqueInput>;
    /** Upsert single PostPage document */
    upsert?: InputMaybe<PostPageUpsertWithNestedWhereUniqueInput>;
};

export type PostPageUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: PostPageUpdateInput;
    /** Unique document search */
    where: PostPageWhereUniqueInput;
};

export type PostPageUpsertInput = {
    /** Create document if it didn't exist */
    create: PostPageCreateInput;
    /** Update document if it exists */
    update: PostPageUpdateInput;
};

export type PostPageUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: PostPageUpsertInput;
    /** Unique document search */
    where: PostPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PostPageWhereComparatorInput = {
    /** This field can be used to request to check if the entry is outdated by internal comparison */
    outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PostPageWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PostPageWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PostPageWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PostPageWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    author?: InputMaybe<PersonWhereInput>;
    category?: InputMaybe<Scalars['String']['input']>;
    categoryIcon?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    categoryIcon_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    categoryIcon_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    categoryIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    categoryIcon_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    categoryIcon_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    categoryIcon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    categoryIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    categoryIcon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    categoryIcon_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    category_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    category_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    category_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    category_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    category_starts_with?: InputMaybe<Scalars['String']['input']>;
    content?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    content_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    content_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    content_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    content_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    content_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    date?: InputMaybe<Scalars['Date']['input']>;
    /** All values greater than the given value. */
    date_gt?: InputMaybe<Scalars['Date']['input']>;
    /** All values greater than or equal the given value. */
    date_gte?: InputMaybe<Scalars['Date']['input']>;
    /** All values that are contained in given list. */
    date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
    /** All values less than the given value. */
    date_lt?: InputMaybe<Scalars['Date']['input']>;
    /** All values less than or equal the given value. */
    date_lte?: InputMaybe<Scalars['Date']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    date_not?: InputMaybe<Scalars['Date']['input']>;
    /** All values that are not contained in given list. */
    date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
    documentInStages_every?: InputMaybe<PostPageWhereStageInput>;
    documentInStages_none?: InputMaybe<PostPageWhereStageInput>;
    documentInStages_some?: InputMaybe<PostPageWhereStageInput>;
    excerpt?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    excerpt_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    excerpt_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    excerpt_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    excerpt_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    excerpt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    excerpt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    excerpt_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<AssetWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    relatedPosts_every?: InputMaybe<PostPageWhereInput>;
    relatedPosts_none?: InputMaybe<PostPageWhereInput>;
    relatedPosts_some?: InputMaybe<PostPageWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    slug?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    slug_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    slug_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    slug_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PostPageWhereStageInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PostPageWhereStageInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PostPageWhereStageInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PostPageWhereStageInput>>;
    /** This field contains fields which can be set as true or false to specify an internal comparison */
    compareWithParent?: InputMaybe<PostPageWhereComparatorInput>;
    /** Specify the stage to compare with */
    stage?: InputMaybe<Stage>;
};

/** References PostPage record uniquely */
export type PostPageWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
};

export type PricingPlan = Entity & {
    __typename?: 'PricingPlan';
    action?: Maybe<Action>;
    /** The unique identifier */
    id: Scalars['ID']['output'];
    /** Surround text with double asterisk "**" to make it bold, e.g., "Team size: **10 developers**" */
    planFeatures: Array<Scalars['String']['output']>;
    price?: Maybe<Scalars['String']['output']>;
    /** System stage field */
    stage: Stage;
    subtitle?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type PricingPlanActionArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type PricingPlanConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: PricingPlanWhereUniqueInput;
};

/** A connection to a list of items. */
export type PricingPlanConnection = {
    __typename?: 'PricingPlanConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<PricingPlanEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type PricingPlanCreateInput = {
    action?: InputMaybe<ActionCreateOneInlineInput>;
    planFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
    price?: InputMaybe<Scalars['String']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type PricingPlanCreateManyInlineInput = {
    /** Create and connect multiple existing PricingPlan documents */
    create?: InputMaybe<Array<PricingPlanCreateInput>>;
};

export type PricingPlanCreateOneInlineInput = {
    /** Create and connect one PricingPlan document */
    create?: InputMaybe<PricingPlanCreateInput>;
};

export type PricingPlanCreateWithPositionInput = {
    /** Document to create */
    data: PricingPlanCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PricingPlanEdge = {
    __typename?: 'PricingPlanEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: PricingPlan;
};

/** Identifies documents */
export type PricingPlanManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PricingPlanWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PricingPlanWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PricingPlanWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    action?: InputMaybe<ActionWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** Matches if the field array contains *all* items provided to the filter and order does match */
    planFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
    /** Matches if the field array contains *all* items provided to the filter */
    planFeatures_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
    /** Matches if the field array does not contain any of the items provided to the filter */
    planFeatures_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
    /** Matches if the field array contains at least one item provided to the filter */
    planFeatures_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
    /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
    planFeatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
    price?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    price_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    price_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    price_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    price_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    price_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    price_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    price_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    price_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    price_starts_with?: InputMaybe<Scalars['String']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum PricingPlanOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    PlanFeaturesAsc = 'planFeatures_ASC',
    PlanFeaturesDesc = 'planFeatures_DESC',
    PriceAsc = 'price_ASC',
    PriceDesc = 'price_DESC',
    SubtitleAsc = 'subtitle_ASC',
    SubtitleDesc = 'subtitle_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC'
}

export type PricingPlanParent = PricingSection;

export type PricingPlanParentConnectInput = {
    PricingSection?: InputMaybe<PricingSectionConnectInput>;
};

export type PricingPlanParentCreateInput = {
    PricingSection?: InputMaybe<PricingSectionCreateInput>;
};

export type PricingPlanParentCreateManyInlineInput = {
    /** Create and connect multiple existing PricingPlanParent documents */
    create?: InputMaybe<Array<PricingPlanParentCreateInput>>;
};

export type PricingPlanParentCreateOneInlineInput = {
    /** Create and connect one PricingPlanParent document */
    create?: InputMaybe<PricingPlanParentCreateInput>;
};

export type PricingPlanParentCreateWithPositionInput = {
    PricingSection?: InputMaybe<PricingSectionCreateWithPositionInput>;
};

export type PricingPlanParentUpdateInput = {
    PricingSection?: InputMaybe<PricingSectionUpdateInput>;
};

export type PricingPlanParentUpdateManyInlineInput = {
    /** Create and connect multiple PricingPlanParent component instances */
    create?: InputMaybe<Array<PricingPlanParentCreateWithPositionInput>>;
    /** Delete multiple PricingPlanParent documents */
    delete?: InputMaybe<Array<PricingPlanParentWhereUniqueInput>>;
    /** Update multiple PricingPlanParent component instances */
    update?: InputMaybe<Array<PricingPlanParentUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple PricingPlanParent component instances */
    upsert?: InputMaybe<Array<PricingPlanParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PricingPlanParentUpdateManyWithNestedWhereInput = {
    PricingSection?: InputMaybe<PricingSectionUpdateManyWithNestedWhereInput>;
};

export type PricingPlanParentUpdateOneInlineInput = {
    /** Create and connect one PricingPlanParent document */
    create?: InputMaybe<PricingPlanParentCreateInput>;
    /** Delete currently connected PricingPlanParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single PricingPlanParent document */
    update?: InputMaybe<PricingPlanParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single PricingPlanParent document */
    upsert?: InputMaybe<PricingPlanParentUpsertWithNestedWhereUniqueInput>;
};

export type PricingPlanParentUpdateWithNestedWhereUniqueAndPositionInput = {
    PricingSection?: InputMaybe<PricingSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PricingPlanParentUpdateWithNestedWhereUniqueInput = {
    PricingSection?: InputMaybe<PricingSectionUpdateWithNestedWhereUniqueInput>;
};

export type PricingPlanParentUpsertWithNestedWhereUniqueAndPositionInput = {
    PricingSection?: InputMaybe<PricingSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PricingPlanParentUpsertWithNestedWhereUniqueInput = {
    PricingSection?: InputMaybe<PricingSectionUpsertWithNestedWhereUniqueInput>;
};

export type PricingPlanParentWhereInput = {
    PricingSection?: InputMaybe<PricingSectionWhereInput>;
};

export type PricingPlanParentWhereUniqueInput = {
    PricingSection?: InputMaybe<PricingSectionWhereUniqueInput>;
};

export type PricingPlanUpdateInput = {
    action?: InputMaybe<ActionUpdateOneInlineInput>;
    planFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
    price?: InputMaybe<Scalars['String']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type PricingPlanUpdateManyInlineInput = {
    /** Create and connect multiple PricingPlan component instances */
    create?: InputMaybe<Array<PricingPlanCreateWithPositionInput>>;
    /** Delete multiple PricingPlan documents */
    delete?: InputMaybe<Array<PricingPlanWhereUniqueInput>>;
    /** Update multiple PricingPlan component instances */
    update?: InputMaybe<Array<PricingPlanUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple PricingPlan component instances */
    upsert?: InputMaybe<Array<PricingPlanUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PricingPlanUpdateManyInput = {
    planFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
    price?: InputMaybe<Scalars['String']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type PricingPlanUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: PricingPlanUpdateManyInput;
    /** Document search */
    where: PricingPlanWhereInput;
};

export type PricingPlanUpdateOneInlineInput = {
    /** Create and connect one PricingPlan document */
    create?: InputMaybe<PricingPlanCreateInput>;
    /** Delete currently connected PricingPlan document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single PricingPlan document */
    update?: InputMaybe<PricingPlanUpdateWithNestedWhereUniqueInput>;
    /** Upsert single PricingPlan document */
    upsert?: InputMaybe<PricingPlanUpsertWithNestedWhereUniqueInput>;
};

export type PricingPlanUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<PricingPlanUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: PricingPlanWhereUniqueInput;
};

export type PricingPlanUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: PricingPlanUpdateInput;
    /** Unique document search */
    where: PricingPlanWhereUniqueInput;
};

export type PricingPlanUpsertInput = {
    /** Create document if it didn't exist */
    create: PricingPlanCreateInput;
    /** Update document if it exists */
    update: PricingPlanUpdateInput;
};

export type PricingPlanUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<PricingPlanUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: PricingPlanWhereUniqueInput;
};

export type PricingPlanUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: PricingPlanUpsertInput;
    /** Unique document search */
    where: PricingPlanWhereUniqueInput;
};

/** Identifies documents */
export type PricingPlanWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PricingPlanWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PricingPlanWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PricingPlanWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    action?: InputMaybe<ActionWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** Matches if the field array contains *all* items provided to the filter and order does match */
    planFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
    /** Matches if the field array contains *all* items provided to the filter */
    planFeatures_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
    /** Matches if the field array does not contain any of the items provided to the filter */
    planFeatures_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
    /** Matches if the field array contains at least one item provided to the filter */
    planFeatures_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
    /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
    planFeatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
    price?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    price_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    price_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    price_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    price_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    price_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    price_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    price_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    price_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    price_starts_with?: InputMaybe<Scalars['String']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References PricingPlan record uniquely */
export type PricingPlanWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type PricingSection = Entity & {
    __typename?: 'PricingSection';
    /** The unique identifier */
    id: Scalars['ID']['output'];
    pricingPlans: Array<PricingPlan>;
    /** System stage field */
    stage: Stage;
    /** The subtitle is shown under the section's title. */
    subtitle?: Maybe<Scalars['String']['output']>;
    /** The section's title. */
    title?: Maybe<Scalars['String']['output']>;
};

export type PricingSectionPricingPlansArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<PricingPlanOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PricingPlanWhereInput>;
};

export type PricingSectionConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: PricingSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type PricingSectionConnection = {
    __typename?: 'PricingSectionConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<PricingSectionEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type PricingSectionCreateInput = {
    pricingPlans?: InputMaybe<PricingPlanCreateManyInlineInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type PricingSectionCreateManyInlineInput = {
    /** Create and connect multiple existing PricingSection documents */
    create?: InputMaybe<Array<PricingSectionCreateInput>>;
};

export type PricingSectionCreateOneInlineInput = {
    /** Create and connect one PricingSection document */
    create?: InputMaybe<PricingSectionCreateInput>;
};

export type PricingSectionCreateWithPositionInput = {
    /** Document to create */
    data: PricingSectionCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PricingSectionEdge = {
    __typename?: 'PricingSectionEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: PricingSection;
};

/** Identifies documents */
export type PricingSectionManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PricingSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PricingSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PricingSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    pricingPlans_every?: InputMaybe<PricingPlanWhereInput>;
    pricingPlans_none?: InputMaybe<PricingPlanWhereInput>;
    pricingPlans_some?: InputMaybe<PricingPlanWhereInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum PricingSectionOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    SubtitleAsc = 'subtitle_ASC',
    SubtitleDesc = 'subtitle_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC'
}

export type PricingSectionParent = LandingPage;

export type PricingSectionParentConnectInput = {
    LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type PricingSectionParentCreateInput = {
    LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type PricingSectionParentCreateManyInlineInput = {
    /** Connect multiple existing PricingSectionParent documents */
    connect?: InputMaybe<Array<PricingSectionParentWhereUniqueInput>>;
    /** Create and connect multiple existing PricingSectionParent documents */
    create?: InputMaybe<Array<PricingSectionParentCreateInput>>;
};

export type PricingSectionParentCreateOneInlineInput = {
    /** Connect one existing PricingSectionParent document */
    connect?: InputMaybe<PricingSectionParentWhereUniqueInput>;
    /** Create and connect one PricingSectionParent document */
    create?: InputMaybe<PricingSectionParentCreateInput>;
};

export type PricingSectionParentUpdateInput = {
    LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type PricingSectionParentUpdateManyInlineInput = {
    /** Connect multiple existing PricingSectionParent documents */
    connect?: InputMaybe<Array<PricingSectionParentConnectInput>>;
    /** Create and connect multiple PricingSectionParent documents */
    create?: InputMaybe<Array<PricingSectionParentCreateInput>>;
    /** Delete multiple PricingSectionParent documents */
    delete?: InputMaybe<Array<PricingSectionParentWhereUniqueInput>>;
    /** Disconnect multiple PricingSectionParent documents */
    disconnect?: InputMaybe<Array<PricingSectionParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing PricingSectionParent documents */
    set?: InputMaybe<Array<PricingSectionParentWhereUniqueInput>>;
    /** Update multiple PricingSectionParent documents */
    update?: InputMaybe<Array<PricingSectionParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple PricingSectionParent documents */
    upsert?: InputMaybe<Array<PricingSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type PricingSectionParentUpdateManyWithNestedWhereInput = {
    LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type PricingSectionParentUpdateOneInlineInput = {
    /** Connect existing PricingSectionParent document */
    connect?: InputMaybe<PricingSectionParentWhereUniqueInput>;
    /** Create and connect one PricingSectionParent document */
    create?: InputMaybe<PricingSectionParentCreateInput>;
    /** Delete currently connected PricingSectionParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected PricingSectionParent document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single PricingSectionParent document */
    update?: InputMaybe<PricingSectionParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single PricingSectionParent document */
    upsert?: InputMaybe<PricingSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type PricingSectionParentUpdateWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type PricingSectionParentUpsertWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type PricingSectionParentWhereInput = {
    LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type PricingSectionParentWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type PricingSectionUpdateInput = {
    pricingPlans?: InputMaybe<PricingPlanUpdateManyInlineInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type PricingSectionUpdateManyInlineInput = {
    /** Create and connect multiple PricingSection component instances */
    create?: InputMaybe<Array<PricingSectionCreateWithPositionInput>>;
    /** Delete multiple PricingSection documents */
    delete?: InputMaybe<Array<PricingSectionWhereUniqueInput>>;
    /** Update multiple PricingSection component instances */
    update?: InputMaybe<Array<PricingSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple PricingSection component instances */
    upsert?: InputMaybe<Array<PricingSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PricingSectionUpdateManyInput = {
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type PricingSectionUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: PricingSectionUpdateManyInput;
    /** Document search */
    where: PricingSectionWhereInput;
};

export type PricingSectionUpdateOneInlineInput = {
    /** Create and connect one PricingSection document */
    create?: InputMaybe<PricingSectionCreateInput>;
    /** Delete currently connected PricingSection document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single PricingSection document */
    update?: InputMaybe<PricingSectionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single PricingSection document */
    upsert?: InputMaybe<PricingSectionUpsertWithNestedWhereUniqueInput>;
};

export type PricingSectionUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<PricingSectionUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: PricingSectionWhereUniqueInput;
};

export type PricingSectionUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: PricingSectionUpdateInput;
    /** Unique document search */
    where: PricingSectionWhereUniqueInput;
};

export type PricingSectionUpsertInput = {
    /** Create document if it didn't exist */
    create: PricingSectionCreateInput;
    /** Update document if it exists */
    update: PricingSectionUpdateInput;
};

export type PricingSectionUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<PricingSectionUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: PricingSectionWhereUniqueInput;
};

export type PricingSectionUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: PricingSectionUpsertInput;
    /** Unique document search */
    where: PricingSectionWhereUniqueInput;
};

/** Identifies documents */
export type PricingSectionWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PricingSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PricingSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PricingSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    pricingPlans_every?: InputMaybe<PricingPlanWhereInput>;
    pricingPlans_none?: InputMaybe<PricingPlanWhereInput>;
    pricingPlans_some?: InputMaybe<PricingPlanWhereInput>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References PricingSection record uniquely */
export type PricingSectionWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
    /** Locales to publish */
    locale: Locale;
    /** Stages to publish selected locales to */
    stages: Array<Stage>;
};

export type Query = {
    __typename?: 'Query';
    /** Retrieve a single asset */
    asset?: Maybe<Asset>;
    /** Retrieve document version */
    assetVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple assets */
    assets: Array<Asset>;
    /** Retrieve multiple assets using the Relay connection interface */
    assetsConnection: AssetConnection;
    /** Fetches an object given its ID */
    entities?: Maybe<Array<Entity>>;
    /** Retrieve a single landingPage */
    landingPage?: Maybe<LandingPage>;
    /** Retrieve document version */
    landingPageVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple landingPages */
    landingPages: Array<LandingPage>;
    /** Retrieve multiple landingPages using the Relay connection interface */
    landingPagesConnection: LandingPageConnection;
    /** Fetches an object given its ID */
    node?: Maybe<Node>;
    /** Retrieve multiple people */
    people: Array<Person>;
    /** Retrieve multiple people using the Relay connection interface */
    peopleConnection: PersonConnection;
    /** Retrieve a single person */
    person?: Maybe<Person>;
    /** Retrieve document version */
    personVersion?: Maybe<DocumentVersion>;
    /** Retrieve a single postPage */
    postPage?: Maybe<PostPage>;
    /** Retrieve document version */
    postPageVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple postPages */
    postPages: Array<PostPage>;
    /** Retrieve multiple postPages using the Relay connection interface */
    postPagesConnection: PostPageConnection;
    /** Retrieve a single scheduledOperation */
    scheduledOperation?: Maybe<ScheduledOperation>;
    /** Retrieve multiple scheduledOperations */
    scheduledOperations: Array<ScheduledOperation>;
    /** Retrieve multiple scheduledOperations using the Relay connection interface */
    scheduledOperationsConnection: ScheduledOperationConnection;
    /** Retrieve a single scheduledRelease */
    scheduledRelease?: Maybe<ScheduledRelease>;
    /** Retrieve multiple scheduledReleases */
    scheduledReleases: Array<ScheduledRelease>;
    /** Retrieve multiple scheduledReleases using the Relay connection interface */
    scheduledReleasesConnection: ScheduledReleaseConnection;
    /** Retrieve a single siteConfig */
    siteConfig?: Maybe<SiteConfig>;
    /** Retrieve document version */
    siteConfigVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple siteConfigs */
    siteConfigs: Array<SiteConfig>;
    /** Retrieve multiple siteConfigs using the Relay connection interface */
    siteConfigsConnection: SiteConfigConnection;
    /** Retrieve a single user */
    user?: Maybe<User>;
    /** Retrieve multiple users */
    users: Array<User>;
    /** Retrieve multiple users using the Relay connection interface */
    usersConnection: UserConnection;
};

export type QueryAssetArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
    where: VersionWhereInput;
};

export type QueryAssetsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<AssetOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<AssetOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<AssetWhereInput>;
};

export type QueryEntitiesArgs = {
    locales?: InputMaybe<Array<Locale>>;
    where: Array<EntityWhereInput>;
};

export type QueryLandingPageArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: LandingPageWhereUniqueInput;
};

export type QueryLandingPageVersionArgs = {
    where: VersionWhereInput;
};

export type QueryLandingPagesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<LandingPageOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<LandingPageWhereInput>;
};

export type QueryLandingPagesConnectionArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<LandingPageOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<LandingPageWhereInput>;
};

export type QueryNodeArgs = {
    id: Scalars['ID']['input'];
    locales?: Array<Locale>;
    stage?: Stage;
};

export type QueryPeopleArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<PersonOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<PersonWhereInput>;
};

export type QueryPeopleConnectionArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<PersonOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<PersonWhereInput>;
};

export type QueryPersonArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: PersonWhereUniqueInput;
};

export type QueryPersonVersionArgs = {
    where: VersionWhereInput;
};

export type QueryPostPageArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: PostPageWhereUniqueInput;
};

export type QueryPostPageVersionArgs = {
    where: VersionWhereInput;
};

export type QueryPostPagesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<PostPageOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<PostPageWhereInput>;
};

export type QueryPostPagesConnectionArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<PostPageOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<PostPageWhereInput>;
};

export type QueryScheduledOperationArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QuerySiteConfigArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: SiteConfigWhereUniqueInput;
};

export type QuerySiteConfigVersionArgs = {
    where: VersionWhereInput;
};

export type QuerySiteConfigsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<SiteConfigOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<SiteConfigWhereInput>;
};

export type QuerySiteConfigsConnectionArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<SiteConfigOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<SiteConfigWhereInput>;
};

export type QueryUserArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<UserOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<UserOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    stage?: Stage;
    where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
    __typename?: 'RGBA';
    a: Scalars['RGBATransparency']['output'];
    b: Scalars['RGBAHue']['output'];
    g: Scalars['RGBAHue']['output'];
    r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
    a: Scalars['RGBATransparency']['input'];
    b: Scalars['RGBAHue']['input'];
    g: Scalars['RGBAHue']['input'];
    r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
    __typename?: 'RichText';
    /** Returns HTMl representation */
    html: Scalars['String']['output'];
    /** Returns Markdown representation */
    markdown: Scalars['String']['output'];
    /** Returns AST representation */
    raw: Scalars['RichTextAST']['output'];
    /** Returns plain-text contents of RichText */
    text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity &
    Node & {
        __typename?: 'ScheduledOperation';
        affectedDocuments: Array<ScheduledOperationAffectedDocument>;
        /** The time the document was created */
        createdAt: Scalars['DateTime']['output'];
        /** User that created this document */
        createdBy?: Maybe<User>;
        /** Operation description */
        description?: Maybe<Scalars['String']['output']>;
        /** Get the document in other stages */
        documentInStages: Array<ScheduledOperation>;
        /** Operation error message */
        errorMessage?: Maybe<Scalars['String']['output']>;
        /** The unique identifier */
        id: Scalars['ID']['output'];
        /** The time the document was published. Null on documents in draft stage. */
        publishedAt?: Maybe<Scalars['DateTime']['output']>;
        /** User that last published this document */
        publishedBy?: Maybe<User>;
        /** Raw operation payload including all details, this field is subject to change */
        rawPayload: Scalars['Json']['output'];
        /** The release this operation is scheduled for */
        release?: Maybe<ScheduledRelease>;
        /** System stage field */
        stage: Stage;
        /** operation Status */
        status: ScheduledOperationStatus;
        /** The time the document was updated */
        updatedAt: Scalars['DateTime']['output'];
        /** User that last updated this document */
        updatedBy?: Maybe<User>;
    };

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean']['input'];
    inheritLocale?: Scalars['Boolean']['input'];
    stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | LandingPage | Person | PostPage | SiteConfig;

export type ScheduledOperationConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
    __typename?: 'ScheduledOperationConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ScheduledOperationEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
    /** Connect multiple existing ScheduledOperation documents */
    connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
    /** Connect one existing ScheduledOperation document */
    connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
    __typename?: 'ScheduledOperationEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    description_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars['String']['input']>;
    errorMessage?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    errorMessage_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    /** All values containing the given json path. */
    rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
    /**
     * Recursively tries to find the provided JSON scalar value inside the field.
     * It does use an exact match when comparing values.
     * If you pass `null` as value the filter will be ignored.
     * Note: This filter fails if you try to look for a non scalar JSON value!
     */
    rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
    release?: InputMaybe<ScheduledReleaseWhereInput>;
    status?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    /** Any other value that exists and is not equal to the given value. */
    status_not?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    DescriptionAsc = 'description_ASC',
    DescriptionDesc = 'description_DESC',
    ErrorMessageAsc = 'errorMessage_ASC',
    ErrorMessageDesc = 'errorMessage_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    StatusAsc = 'status_ASC',
    StatusDesc = 'status_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
    Canceled = 'CANCELED',
    Completed = 'COMPLETED',
    Failed = 'FAILED',
    InProgress = 'IN_PROGRESS',
    Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
    /** Connect multiple existing ScheduledOperation documents */
    connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
    /** Disconnect multiple ScheduledOperation documents */
    disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ScheduledOperation documents */
    set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
    /** Connect existing ScheduledOperation document */
    connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
    /** Disconnect currently connected ScheduledOperation document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    description_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars['String']['input']>;
    errorMessage?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    errorMessage_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    /** All values containing the given json path. */
    rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
    /**
     * Recursively tries to find the provided JSON scalar value inside the field.
     * It does use an exact match when comparing values.
     * If you pass `null` as value the filter will be ignored.
     * Note: This filter fails if you try to look for a non scalar JSON value!
     */
    rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
    release?: InputMaybe<ScheduledReleaseWhereInput>;
    status?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    /** Any other value that exists and is not equal to the given value. */
    status_not?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity &
    Node & {
        __typename?: 'ScheduledRelease';
        /** The time the document was created */
        createdAt: Scalars['DateTime']['output'];
        /** User that created this document */
        createdBy?: Maybe<User>;
        /** Release description */
        description?: Maybe<Scalars['String']['output']>;
        /** Get the document in other stages */
        documentInStages: Array<ScheduledRelease>;
        /** Release error message */
        errorMessage?: Maybe<Scalars['String']['output']>;
        /** The unique identifier */
        id: Scalars['ID']['output'];
        /** Whether scheduled release should be run */
        isActive: Scalars['Boolean']['output'];
        /** Whether scheduled release is implicit */
        isImplicit: Scalars['Boolean']['output'];
        /** Operations to run with this release */
        operations: Array<ScheduledOperation>;
        /** The time the document was published. Null on documents in draft stage. */
        publishedAt?: Maybe<Scalars['DateTime']['output']>;
        /** User that last published this document */
        publishedBy?: Maybe<User>;
        /** Release date and time */
        releaseAt?: Maybe<Scalars['DateTime']['output']>;
        /** System stage field */
        stage: Stage;
        /** Release Status */
        status: ScheduledReleaseStatus;
        /** Release Title */
        title?: Maybe<Scalars['String']['output']>;
        /** The time the document was updated */
        updatedAt: Scalars['DateTime']['output'];
        /** User that last updated this document */
        updatedBy?: Maybe<User>;
    };

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean']['input'];
    inheritLocale?: Scalars['Boolean']['input'];
    stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
    __typename?: 'ScheduledReleaseConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ScheduledReleaseEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    errorMessage?: InputMaybe<Scalars['String']['input']>;
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
    /** Connect multiple existing ScheduledRelease documents */
    connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Create and connect multiple existing ScheduledRelease documents */
    create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
    /** Connect one existing ScheduledRelease document */
    connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
    /** Create and connect one ScheduledRelease document */
    create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
    __typename?: 'ScheduledReleaseEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    description_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars['String']['input']>;
    errorMessage?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    errorMessage_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
    isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
    operations_every?: InputMaybe<ScheduledOperationWhereInput>;
    operations_none?: InputMaybe<ScheduledOperationWhereInput>;
    operations_some?: InputMaybe<ScheduledOperationWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    status?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    /** Any other value that exists and is not equal to the given value. */
    status_not?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    DescriptionAsc = 'description_ASC',
    DescriptionDesc = 'description_DESC',
    ErrorMessageAsc = 'errorMessage_ASC',
    ErrorMessageDesc = 'errorMessage_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    IsActiveAsc = 'isActive_ASC',
    IsActiveDesc = 'isActive_DESC',
    IsImplicitAsc = 'isImplicit_ASC',
    IsImplicitDesc = 'isImplicit_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    ReleaseAtAsc = 'releaseAt_ASC',
    ReleaseAtDesc = 'releaseAt_DESC',
    StatusAsc = 'status_ASC',
    StatusDesc = 'status_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
    Completed = 'COMPLETED',
    Failed = 'FAILED',
    InProgress = 'IN_PROGRESS',
    Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    errorMessage?: InputMaybe<Scalars['String']['input']>;
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
    /** Connect multiple existing ScheduledRelease documents */
    connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
    /** Create and connect multiple ScheduledRelease documents */
    create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
    /** Delete multiple ScheduledRelease documents */
    delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Disconnect multiple ScheduledRelease documents */
    disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ScheduledRelease documents */
    set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Update multiple ScheduledRelease documents */
    update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple ScheduledRelease documents */
    upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    errorMessage?: InputMaybe<Scalars['String']['input']>;
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ScheduledReleaseUpdateManyInput;
    /** Document search */
    where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
    /** Connect existing ScheduledRelease document */
    connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
    /** Create and connect one ScheduledRelease document */
    create?: InputMaybe<ScheduledReleaseCreateInput>;
    /** Delete currently connected ScheduledRelease document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected ScheduledRelease document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single ScheduledRelease document */
    update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ScheduledRelease document */
    upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ScheduledReleaseUpdateInput;
    /** Unique document search */
    where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
    /** Create document if it didn't exist */
    create: ScheduledReleaseCreateInput;
    /** Update document if it exists */
    update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ScheduledReleaseUpsertInput;
    /** Unique document search */
    where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    description_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars['String']['input']>;
    errorMessage?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    errorMessage_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
    isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
    operations_every?: InputMaybe<ScheduledOperationWhereInput>;
    operations_none?: InputMaybe<ScheduledOperationWhereInput>;
    operations_some?: InputMaybe<ScheduledOperationWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    status?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    /** Any other value that exists and is not equal to the given value. */
    status_not?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type SiteConfig = Entity &
    Node & {
        __typename?: 'SiteConfig';
        companyLogo: Asset;
        companyTitle: Scalars['String']['output'];
        /** The time the document was created */
        createdAt: Scalars['DateTime']['output'];
        /** User that created this document */
        createdBy?: Maybe<User>;
        /** Get the document in other stages */
        documentInStages: Array<SiteConfig>;
        footer: Footer;
        /** List of SiteConfig versions */
        history: Array<Version>;
        /** The unique identifier */
        id: Scalars['ID']['output'];
        navbar: NavigationBar;
        /** The time the document was published. Null on documents in draft stage. */
        publishedAt?: Maybe<Scalars['DateTime']['output']>;
        /** User that last published this document */
        publishedBy?: Maybe<User>;
        scheduledIn: Array<ScheduledOperation>;
        /** System stage field */
        stage: Stage;
        /** The time the document was updated */
        updatedAt: Scalars['DateTime']['output'];
        /** User that last updated this document */
        updatedBy?: Maybe<User>;
    };

export type SiteConfigCompanyLogoArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type SiteConfigCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type SiteConfigDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean']['input'];
    inheritLocale?: Scalars['Boolean']['input'];
    stages?: Array<Stage>;
};

export type SiteConfigFooterArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type SiteConfigHistoryArgs = {
    limit?: Scalars['Int']['input'];
    skip?: Scalars['Int']['input'];
    stageOverride?: InputMaybe<Stage>;
};

export type SiteConfigNavbarArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type SiteConfigPublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type SiteConfigScheduledInArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type SiteConfigUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type SiteConfigConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: SiteConfigWhereUniqueInput;
};

/** A connection to a list of items. */
export type SiteConfigConnection = {
    __typename?: 'SiteConfigConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<SiteConfigEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type SiteConfigCreateInput = {
    companyLogo: AssetCreateOneInlineInput;
    companyTitle: Scalars['String']['input'];
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    footer: FooterCreateOneInlineInput;
    navbar: NavigationBarCreateOneInlineInput;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SiteConfigCreateManyInlineInput = {
    /** Connect multiple existing SiteConfig documents */
    connect?: InputMaybe<Array<SiteConfigWhereUniqueInput>>;
    /** Create and connect multiple existing SiteConfig documents */
    create?: InputMaybe<Array<SiteConfigCreateInput>>;
};

export type SiteConfigCreateOneInlineInput = {
    /** Connect one existing SiteConfig document */
    connect?: InputMaybe<SiteConfigWhereUniqueInput>;
    /** Create and connect one SiteConfig document */
    create?: InputMaybe<SiteConfigCreateInput>;
};

/** An edge in a connection. */
export type SiteConfigEdge = {
    __typename?: 'SiteConfigEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: SiteConfig;
};

/** Identifies documents */
export type SiteConfigManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<SiteConfigWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<SiteConfigWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<SiteConfigWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    companyLogo?: InputMaybe<AssetWhereInput>;
    companyTitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    companyTitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    companyTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    companyTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    companyTitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    companyTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    companyTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    companyTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    companyTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    companyTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<SiteConfigWhereStageInput>;
    documentInStages_none?: InputMaybe<SiteConfigWhereStageInput>;
    documentInStages_some?: InputMaybe<SiteConfigWhereStageInput>;
    footer?: InputMaybe<FooterWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    navbar?: InputMaybe<NavigationBarWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SiteConfigOrderByInput {
    CompanyTitleAsc = 'companyTitle_ASC',
    CompanyTitleDesc = 'companyTitle_DESC',
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC'
}

export type SiteConfigUpdateInput = {
    companyLogo?: InputMaybe<AssetUpdateOneInlineInput>;
    companyTitle?: InputMaybe<Scalars['String']['input']>;
    footer?: InputMaybe<FooterUpdateOneInlineInput>;
    navbar?: InputMaybe<NavigationBarUpdateOneInlineInput>;
};

export type SiteConfigUpdateManyInlineInput = {
    /** Connect multiple existing SiteConfig documents */
    connect?: InputMaybe<Array<SiteConfigConnectInput>>;
    /** Create and connect multiple SiteConfig documents */
    create?: InputMaybe<Array<SiteConfigCreateInput>>;
    /** Delete multiple SiteConfig documents */
    delete?: InputMaybe<Array<SiteConfigWhereUniqueInput>>;
    /** Disconnect multiple SiteConfig documents */
    disconnect?: InputMaybe<Array<SiteConfigWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing SiteConfig documents */
    set?: InputMaybe<Array<SiteConfigWhereUniqueInput>>;
    /** Update multiple SiteConfig documents */
    update?: InputMaybe<Array<SiteConfigUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple SiteConfig documents */
    upsert?: InputMaybe<Array<SiteConfigUpsertWithNestedWhereUniqueInput>>;
};

export type SiteConfigUpdateManyInput = {
    companyTitle?: InputMaybe<Scalars['String']['input']>;
};

export type SiteConfigUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: SiteConfigUpdateManyInput;
    /** Document search */
    where: SiteConfigWhereInput;
};

export type SiteConfigUpdateOneInlineInput = {
    /** Connect existing SiteConfig document */
    connect?: InputMaybe<SiteConfigWhereUniqueInput>;
    /** Create and connect one SiteConfig document */
    create?: InputMaybe<SiteConfigCreateInput>;
    /** Delete currently connected SiteConfig document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected SiteConfig document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single SiteConfig document */
    update?: InputMaybe<SiteConfigUpdateWithNestedWhereUniqueInput>;
    /** Upsert single SiteConfig document */
    upsert?: InputMaybe<SiteConfigUpsertWithNestedWhereUniqueInput>;
};

export type SiteConfigUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: SiteConfigUpdateInput;
    /** Unique document search */
    where: SiteConfigWhereUniqueInput;
};

export type SiteConfigUpsertInput = {
    /** Create document if it didn't exist */
    create: SiteConfigCreateInput;
    /** Update document if it exists */
    update: SiteConfigUpdateInput;
};

export type SiteConfigUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: SiteConfigUpsertInput;
    /** Unique document search */
    where: SiteConfigWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SiteConfigWhereComparatorInput = {
    /** This field can be used to request to check if the entry is outdated by internal comparison */
    outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type SiteConfigWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<SiteConfigWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<SiteConfigWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<SiteConfigWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    companyLogo?: InputMaybe<AssetWhereInput>;
    companyTitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    companyTitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    companyTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    companyTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    companyTitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    companyTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    companyTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    companyTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    companyTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    companyTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<SiteConfigWhereStageInput>;
    documentInStages_none?: InputMaybe<SiteConfigWhereStageInput>;
    documentInStages_some?: InputMaybe<SiteConfigWhereStageInput>;
    footer?: InputMaybe<FooterWhereInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    navbar?: InputMaybe<NavigationBarWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SiteConfigWhereStageInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<SiteConfigWhereStageInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<SiteConfigWhereStageInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<SiteConfigWhereStageInput>>;
    /** This field contains fields which can be set as true or false to specify an internal comparison */
    compareWithParent?: InputMaybe<SiteConfigWhereComparatorInput>;
    /** Specify the stage to compare with */
    stage?: InputMaybe<Stage>;
};

/** References SiteConfig record uniquely */
export type SiteConfigWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

/** Social icon link component used in team section. */
export type SocialIconLink = Entity & {
    __typename?: 'SocialIconLink';
    /** The icon name must match one of the icon names from flaticon.com, e.g., "fi-brands-instagram" */
    iconName: Scalars['String']['output'];
    /** The unique identifier */
    id: Scalars['ID']['output'];
    label: Scalars['String']['output'];
    /** System stage field */
    stage: Stage;
    url?: Maybe<Scalars['String']['output']>;
};

export type SocialIconLinkConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: SocialIconLinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type SocialIconLinkConnection = {
    __typename?: 'SocialIconLinkConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<SocialIconLinkEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type SocialIconLinkCreateInput = {
    iconName: Scalars['String']['input'];
    label: Scalars['String']['input'];
    url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialIconLinkCreateManyInlineInput = {
    /** Create and connect multiple existing SocialIconLink documents */
    create?: InputMaybe<Array<SocialIconLinkCreateInput>>;
};

export type SocialIconLinkCreateOneInlineInput = {
    /** Create and connect one SocialIconLink document */
    create?: InputMaybe<SocialIconLinkCreateInput>;
};

export type SocialIconLinkCreateWithPositionInput = {
    /** Document to create */
    data: SocialIconLinkCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SocialIconLinkEdge = {
    __typename?: 'SocialIconLinkEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: SocialIconLink;
};

/** Identifies documents */
export type SocialIconLinkManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<SocialIconLinkWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<SocialIconLinkWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<SocialIconLinkWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    iconName?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    iconName_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    iconName_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    iconName_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    iconName_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    iconName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    iconName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    iconName_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    label_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    label_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    label_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    label_starts_with?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    url_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    url_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    url_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum SocialIconLinkOrderByInput {
    IconNameAsc = 'iconName_ASC',
    IconNameDesc = 'iconName_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC'
}

export type SocialIconLinkParent = Footer | Person;

export type SocialIconLinkParentConnectInput = {
    Footer?: InputMaybe<FooterConnectInput>;
    Person?: InputMaybe<PersonConnectInput>;
};

export type SocialIconLinkParentCreateInput = {
    Footer?: InputMaybe<FooterCreateInput>;
    Person?: InputMaybe<PersonCreateInput>;
};

export type SocialIconLinkParentCreateManyInlineInput = {
    /** Connect multiple existing SocialIconLinkParent documents */
    connect?: InputMaybe<Array<SocialIconLinkParentWhereUniqueInput>>;
    /** Create and connect multiple existing SocialIconLinkParent documents */
    create?: InputMaybe<Array<SocialIconLinkParentCreateInput>>;
};

export type SocialIconLinkParentCreateOneInlineInput = {
    /** Connect one existing SocialIconLinkParent document */
    connect?: InputMaybe<SocialIconLinkParentWhereUniqueInput>;
    /** Create and connect one SocialIconLinkParent document */
    create?: InputMaybe<SocialIconLinkParentCreateInput>;
};

export type SocialIconLinkParentUpdateInput = {
    Footer?: InputMaybe<FooterUpdateInput>;
    Person?: InputMaybe<PersonUpdateInput>;
};

export type SocialIconLinkParentUpdateManyInlineInput = {
    /** Connect multiple existing SocialIconLinkParent documents */
    connect?: InputMaybe<Array<SocialIconLinkParentConnectInput>>;
    /** Create and connect multiple SocialIconLinkParent documents */
    create?: InputMaybe<Array<SocialIconLinkParentCreateInput>>;
    /** Delete multiple SocialIconLinkParent documents */
    delete?: InputMaybe<Array<SocialIconLinkParentWhereUniqueInput>>;
    /** Disconnect multiple SocialIconLinkParent documents */
    disconnect?: InputMaybe<Array<SocialIconLinkParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing SocialIconLinkParent documents */
    set?: InputMaybe<Array<SocialIconLinkParentWhereUniqueInput>>;
    /** Update multiple SocialIconLinkParent documents */
    update?: InputMaybe<Array<SocialIconLinkParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple SocialIconLinkParent documents */
    upsert?: InputMaybe<Array<SocialIconLinkParentUpsertWithNestedWhereUniqueInput>>;
};

export type SocialIconLinkParentUpdateManyWithNestedWhereInput = {
    Footer?: InputMaybe<FooterUpdateManyWithNestedWhereInput>;
    Person?: InputMaybe<PersonUpdateManyWithNestedWhereInput>;
};

export type SocialIconLinkParentUpdateOneInlineInput = {
    /** Connect existing SocialIconLinkParent document */
    connect?: InputMaybe<SocialIconLinkParentWhereUniqueInput>;
    /** Create and connect one SocialIconLinkParent document */
    create?: InputMaybe<SocialIconLinkParentCreateInput>;
    /** Delete currently connected SocialIconLinkParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected SocialIconLinkParent document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single SocialIconLinkParent document */
    update?: InputMaybe<SocialIconLinkParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single SocialIconLinkParent document */
    upsert?: InputMaybe<SocialIconLinkParentUpsertWithNestedWhereUniqueInput>;
};

export type SocialIconLinkParentUpdateWithNestedWhereUniqueInput = {
    Footer?: InputMaybe<FooterUpdateWithNestedWhereUniqueInput>;
    Person?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
};

export type SocialIconLinkParentUpsertWithNestedWhereUniqueInput = {
    Footer?: InputMaybe<FooterUpsertWithNestedWhereUniqueInput>;
    Person?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type SocialIconLinkParentWhereInput = {
    Footer?: InputMaybe<FooterWhereInput>;
    Person?: InputMaybe<PersonWhereInput>;
};

export type SocialIconLinkParentWhereUniqueInput = {
    Footer?: InputMaybe<FooterWhereUniqueInput>;
    Person?: InputMaybe<PersonWhereUniqueInput>;
};

export type SocialIconLinkUpdateInput = {
    iconName?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialIconLinkUpdateManyInlineInput = {
    /** Create and connect multiple SocialIconLink component instances */
    create?: InputMaybe<Array<SocialIconLinkCreateWithPositionInput>>;
    /** Delete multiple SocialIconLink documents */
    delete?: InputMaybe<Array<SocialIconLinkWhereUniqueInput>>;
    /** Update multiple SocialIconLink component instances */
    update?: InputMaybe<Array<SocialIconLinkUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple SocialIconLink component instances */
    upsert?: InputMaybe<Array<SocialIconLinkUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SocialIconLinkUpdateManyInput = {
    iconName?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialIconLinkUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: SocialIconLinkUpdateManyInput;
    /** Document search */
    where: SocialIconLinkWhereInput;
};

export type SocialIconLinkUpdateOneInlineInput = {
    /** Create and connect one SocialIconLink document */
    create?: InputMaybe<SocialIconLinkCreateInput>;
    /** Delete currently connected SocialIconLink document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single SocialIconLink document */
    update?: InputMaybe<SocialIconLinkUpdateWithNestedWhereUniqueInput>;
    /** Upsert single SocialIconLink document */
    upsert?: InputMaybe<SocialIconLinkUpsertWithNestedWhereUniqueInput>;
};

export type SocialIconLinkUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<SocialIconLinkUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: SocialIconLinkWhereUniqueInput;
};

export type SocialIconLinkUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: SocialIconLinkUpdateInput;
    /** Unique document search */
    where: SocialIconLinkWhereUniqueInput;
};

export type SocialIconLinkUpsertInput = {
    /** Create document if it didn't exist */
    create: SocialIconLinkCreateInput;
    /** Update document if it exists */
    update: SocialIconLinkUpdateInput;
};

export type SocialIconLinkUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<SocialIconLinkUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: SocialIconLinkWhereUniqueInput;
};

export type SocialIconLinkUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: SocialIconLinkUpsertInput;
    /** Unique document search */
    where: SocialIconLinkWhereUniqueInput;
};

/** Identifies documents */
export type SocialIconLinkWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<SocialIconLinkWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<SocialIconLinkWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<SocialIconLinkWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    iconName?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    iconName_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    iconName_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    iconName_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    iconName_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    iconName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    iconName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    iconName_starts_with?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    label_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    label_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    label_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    label_starts_with?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    url_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    url_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    url_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References SocialIconLink record uniquely */
export type SocialIconLinkWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
    /** The Draft is the default stage for all your content. */
    Draft = 'DRAFT',
    /** The Published stage is where you can publish your content to. */
    Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
    Base = 'BASE',
    Combined = 'COMBINED',
    Localization = 'LOCALIZATION'
}

export type TeamSection = Entity & {
    __typename?: 'TeamSection';
    /** The unique identifier */
    id: Scalars['ID']['output'];
    /** System stage field */
    stage: Stage;
    subtitle?: Maybe<Scalars['String']['output']>;
    team: Array<Person>;
    /** The section's title. */
    title?: Maybe<Scalars['String']['output']>;
    variant?: Maybe<TeamSectionVariant>;
};

export type TeamSectionTeamArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<PersonOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PersonWhereInput>;
};

export type TeamSectionConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: TeamSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type TeamSectionConnection = {
    __typename?: 'TeamSectionConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<TeamSectionEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type TeamSectionCreateInput = {
    subtitle?: InputMaybe<Scalars['String']['input']>;
    team?: InputMaybe<PersonCreateManyInlineInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    variant?: InputMaybe<TeamSectionVariant>;
};

export type TeamSectionCreateManyInlineInput = {
    /** Create and connect multiple existing TeamSection documents */
    create?: InputMaybe<Array<TeamSectionCreateInput>>;
};

export type TeamSectionCreateOneInlineInput = {
    /** Create and connect one TeamSection document */
    create?: InputMaybe<TeamSectionCreateInput>;
};

export type TeamSectionCreateWithPositionInput = {
    /** Document to create */
    data: TeamSectionCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TeamSectionEdge = {
    __typename?: 'TeamSectionEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: TeamSection;
};

/** Identifies documents */
export type TeamSectionManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<TeamSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<TeamSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<TeamSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    team_every?: InputMaybe<PersonWhereInput>;
    team_none?: InputMaybe<PersonWhereInput>;
    team_some?: InputMaybe<PersonWhereInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    variant?: InputMaybe<TeamSectionVariant>;
    /** All values that are contained in given list. */
    variant_in?: InputMaybe<Array<InputMaybe<TeamSectionVariant>>>;
    /** Any other value that exists and is not equal to the given value. */
    variant_not?: InputMaybe<TeamSectionVariant>;
    /** All values that are not contained in given list. */
    variant_not_in?: InputMaybe<Array<InputMaybe<TeamSectionVariant>>>;
};

export enum TeamSectionOrderByInput {
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    SubtitleAsc = 'subtitle_ASC',
    SubtitleDesc = 'subtitle_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC'
}

export type TeamSectionParent = LandingPage;

export type TeamSectionParentConnectInput = {
    LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type TeamSectionParentCreateInput = {
    LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type TeamSectionParentCreateManyInlineInput = {
    /** Connect multiple existing TeamSectionParent documents */
    connect?: InputMaybe<Array<TeamSectionParentWhereUniqueInput>>;
    /** Create and connect multiple existing TeamSectionParent documents */
    create?: InputMaybe<Array<TeamSectionParentCreateInput>>;
};

export type TeamSectionParentCreateOneInlineInput = {
    /** Connect one existing TeamSectionParent document */
    connect?: InputMaybe<TeamSectionParentWhereUniqueInput>;
    /** Create and connect one TeamSectionParent document */
    create?: InputMaybe<TeamSectionParentCreateInput>;
};

export type TeamSectionParentUpdateInput = {
    LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type TeamSectionParentUpdateManyInlineInput = {
    /** Connect multiple existing TeamSectionParent documents */
    connect?: InputMaybe<Array<TeamSectionParentConnectInput>>;
    /** Create and connect multiple TeamSectionParent documents */
    create?: InputMaybe<Array<TeamSectionParentCreateInput>>;
    /** Delete multiple TeamSectionParent documents */
    delete?: InputMaybe<Array<TeamSectionParentWhereUniqueInput>>;
    /** Disconnect multiple TeamSectionParent documents */
    disconnect?: InputMaybe<Array<TeamSectionParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing TeamSectionParent documents */
    set?: InputMaybe<Array<TeamSectionParentWhereUniqueInput>>;
    /** Update multiple TeamSectionParent documents */
    update?: InputMaybe<Array<TeamSectionParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple TeamSectionParent documents */
    upsert?: InputMaybe<Array<TeamSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type TeamSectionParentUpdateManyWithNestedWhereInput = {
    LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type TeamSectionParentUpdateOneInlineInput = {
    /** Connect existing TeamSectionParent document */
    connect?: InputMaybe<TeamSectionParentWhereUniqueInput>;
    /** Create and connect one TeamSectionParent document */
    create?: InputMaybe<TeamSectionParentCreateInput>;
    /** Delete currently connected TeamSectionParent document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Disconnect currently connected TeamSectionParent document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single TeamSectionParent document */
    update?: InputMaybe<TeamSectionParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single TeamSectionParent document */
    upsert?: InputMaybe<TeamSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type TeamSectionParentUpdateWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type TeamSectionParentUpsertWithNestedWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type TeamSectionParentWhereInput = {
    LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type TeamSectionParentWhereUniqueInput = {
    LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type TeamSectionUpdateInput = {
    subtitle?: InputMaybe<Scalars['String']['input']>;
    team?: InputMaybe<PersonUpdateManyInlineInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    variant?: InputMaybe<TeamSectionVariant>;
};

export type TeamSectionUpdateManyInlineInput = {
    /** Create and connect multiple TeamSection component instances */
    create?: InputMaybe<Array<TeamSectionCreateWithPositionInput>>;
    /** Delete multiple TeamSection documents */
    delete?: InputMaybe<Array<TeamSectionWhereUniqueInput>>;
    /** Update multiple TeamSection component instances */
    update?: InputMaybe<Array<TeamSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple TeamSection component instances */
    upsert?: InputMaybe<Array<TeamSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TeamSectionUpdateManyInput = {
    subtitle?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    variant?: InputMaybe<TeamSectionVariant>;
};

export type TeamSectionUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: TeamSectionUpdateManyInput;
    /** Document search */
    where: TeamSectionWhereInput;
};

export type TeamSectionUpdateOneInlineInput = {
    /** Create and connect one TeamSection document */
    create?: InputMaybe<TeamSectionCreateInput>;
    /** Delete currently connected TeamSection document */
    delete?: InputMaybe<Scalars['Boolean']['input']>;
    /** Update single TeamSection document */
    update?: InputMaybe<TeamSectionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single TeamSection document */
    upsert?: InputMaybe<TeamSectionUpsertWithNestedWhereUniqueInput>;
};

export type TeamSectionUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<TeamSectionUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: TeamSectionWhereUniqueInput;
};

export type TeamSectionUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: TeamSectionUpdateInput;
    /** Unique document search */
    where: TeamSectionWhereUniqueInput;
};

export type TeamSectionUpsertInput = {
    /** Create document if it didn't exist */
    create: TeamSectionCreateInput;
    /** Update document if it exists */
    update: TeamSectionUpdateInput;
};

export type TeamSectionUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<TeamSectionUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: TeamSectionWhereUniqueInput;
};

export type TeamSectionUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: TeamSectionUpsertInput;
    /** Unique document search */
    where: TeamSectionWhereUniqueInput;
};

/** The visual variant of the section - cards or grid - in the Team Section component. */
export enum TeamSectionVariant {
    Cards = 'cards',
    Grid = 'grid'
}

/** Identifies documents */
export type TeamSectionWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<TeamSectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<TeamSectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<TeamSectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
    team_every?: InputMaybe<PersonWhereInput>;
    team_none?: InputMaybe<PersonWhereInput>;
    team_some?: InputMaybe<PersonWhereInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']['input']>;
    variant?: InputMaybe<TeamSectionVariant>;
    /** All values that are contained in given list. */
    variant_in?: InputMaybe<Array<InputMaybe<TeamSectionVariant>>>;
    /** Any other value that exists and is not equal to the given value. */
    variant_not?: InputMaybe<TeamSectionVariant>;
    /** All values that are not contained in given list. */
    variant_not_in?: InputMaybe<Array<InputMaybe<TeamSectionVariant>>>;
};

/** References TeamSection record uniquely */
export type TeamSectionWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type UnpublishLocaleInput = {
    /** Locales to unpublish */
    locale: Locale;
    /** Stages to unpublish selected locales from */
    stages: Array<Stage>;
};

/** User system model */
export type User = Entity &
    Node & {
        __typename?: 'User';
        /** The time the document was created */
        createdAt: Scalars['DateTime']['output'];
        /** Get the document in other stages */
        documentInStages: Array<User>;
        /** The unique identifier */
        id: Scalars['ID']['output'];
        /** Flag to determine if user is active or not */
        isActive: Scalars['Boolean']['output'];
        /** User Kind. Can be either MEMBER, PAT or PUBLIC */
        kind: UserKind;
        /** The username */
        name: Scalars['String']['output'];
        /** Profile Picture url */
        picture?: Maybe<Scalars['String']['output']>;
        /** The time the document was published. Null on documents in draft stage. */
        publishedAt?: Maybe<Scalars['DateTime']['output']>;
        /** System stage field */
        stage: Stage;
        /** The time the document was updated */
        updatedAt: Scalars['DateTime']['output'];
    };

/** User system model */
export type UserDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean']['input'];
    inheritLocale?: Scalars['Boolean']['input'];
    stages?: Array<Stage>;
};

export type UserConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
    __typename?: 'UserConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<UserEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
    /** Connect multiple existing User documents */
    connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
    /** Connect one existing User document */
    connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
    __typename?: 'UserEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output'];
    /** The item at the end of the edge. */
    node: User;
};

/** System User Kind */
export enum UserKind {
    AppToken = 'APP_TOKEN',
    Member = 'MEMBER',
    Pat = 'PAT',
    Public = 'PUBLIC',
    Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<UserWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<UserWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<UserWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    documentInStages_every?: InputMaybe<UserWhereStageInput>;
    documentInStages_none?: InputMaybe<UserWhereStageInput>;
    documentInStages_some?: InputMaybe<UserWhereStageInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
    kind?: InputMaybe<UserKind>;
    /** All values that are contained in given list. */
    kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    /** Any other value that exists and is not equal to the given value. */
    kind_not?: InputMaybe<UserKind>;
    /** All values that are not contained in given list. */
    kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    name?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    name_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    picture?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    picture_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    picture_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    picture_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    picture_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    picture_starts_with?: InputMaybe<Scalars['String']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    IsActiveAsc = 'isActive_ASC',
    IsActiveDesc = 'isActive_DESC',
    KindAsc = 'kind_ASC',
    KindDesc = 'kind_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    PictureAsc = 'picture_ASC',
    PictureDesc = 'picture_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
    /** Connect multiple existing User documents */
    connect?: InputMaybe<Array<UserConnectInput>>;
    /** Disconnect multiple User documents */
    disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing User documents */
    set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
    /** Connect existing User document */
    connect?: InputMaybe<UserWhereUniqueInput>;
    /** Disconnect currently connected User document */
    disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
    /** This field can be used to request to check if the entry is outdated by internal comparison */
    outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<UserWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<UserWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<UserWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    documentInStages_every?: InputMaybe<UserWhereStageInput>;
    documentInStages_none?: InputMaybe<UserWhereStageInput>;
    documentInStages_some?: InputMaybe<UserWhereStageInput>;
    id?: InputMaybe<Scalars['ID']['input']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']['input']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']['input']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']['input']>;
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
    kind?: InputMaybe<UserKind>;
    /** All values that are contained in given list. */
    kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    /** Any other value that exists and is not equal to the given value. */
    kind_not?: InputMaybe<UserKind>;
    /** All values that are not contained in given list. */
    kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    name?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    name_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    picture?: InputMaybe<Scalars['String']['input']>;
    /** All values containing the given string. */
    picture_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values ending with the given string. */
    picture_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are contained in given list. */
    picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Any other value that exists and is not equal to the given value. */
    picture_not?: InputMaybe<Scalars['String']['input']>;
    /** All values not containing the given string. */
    picture_not_contains?: InputMaybe<Scalars['String']['input']>;
    /** All values not ending with the given string */
    picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    /** All values that are not contained in given list. */
    picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** All values not starting with the given string. */
    picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    /** All values starting with the given string. */
    picture_starts_with?: InputMaybe<Scalars['String']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<UserWhereStageInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<UserWhereStageInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<UserWhereStageInput>>;
    /** This field contains fields which can be set as true or false to specify an internal comparison */
    compareWithParent?: InputMaybe<UserWhereComparatorInput>;
    /** Specify the stage to compare with */
    stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
    __typename?: 'Version';
    createdAt: Scalars['DateTime']['output'];
    id: Scalars['ID']['output'];
    revision: Scalars['Int']['output'];
    stage: Stage;
};

export type VersionWhereInput = {
    id: Scalars['ID']['input'];
    revision: Scalars['Int']['input'];
    stage: Stage;
};

export enum _FilterKind {
    And = 'AND',
    Not = 'NOT',
    Or = 'OR',
    Contains = 'contains',
    ContainsAll = 'contains_all',
    ContainsNone = 'contains_none',
    ContainsSome = 'contains_some',
    EndsWith = 'ends_with',
    Eq = 'eq',
    EqNot = 'eq_not',
    Gt = 'gt',
    Gte = 'gte',
    In = 'in',
    JsonPathExists = 'json_path_exists',
    JsonValueRecursive = 'json_value_recursive',
    Lt = 'lt',
    Lte = 'lte',
    NotContains = 'not_contains',
    NotEndsWith = 'not_ends_with',
    NotIn = 'not_in',
    NotStartsWith = 'not_starts_with',
    RelationalEvery = 'relational_every',
    RelationalNone = 'relational_none',
    RelationalSingle = 'relational_single',
    RelationalSome = 'relational_some',
    Search = 'search',
    StartsWith = 'starts_with',
    UnionEmpty = 'union_empty',
    UnionEvery = 'union_every',
    UnionNone = 'union_none',
    UnionSingle = 'union_single',
    UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
    Enum = 'enum',
    Relation = 'relation',
    RichText = 'richText',
    RichTextWithEmbeds = 'richTextWithEmbeds',
    Scalar = 'scalar',
    Union = 'union',
    Virtual = 'virtual'
}

export enum _MutationKind {
    Create = 'create',
    Delete = 'delete',
    DeleteMany = 'deleteMany',
    Publish = 'publish',
    PublishMany = 'publishMany',
    SchedulePublish = 'schedulePublish',
    ScheduleUnpublish = 'scheduleUnpublish',
    Unpublish = 'unpublish',
    UnpublishMany = 'unpublishMany',
    Update = 'update',
    UpdateMany = 'updateMany',
    Upsert = 'upsert'
}

export enum _OrderDirection {
    Asc = 'asc',
    Desc = 'desc'
}

export enum _RelationInputCardinality {
    Many = 'many',
    One = 'one'
}

export enum _RelationInputKind {
    Create = 'create',
    Update = 'update'
}

export enum _RelationKind {
    Regular = 'regular',
    Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
    Base = 'base',
    Combined = 'combined',
    Localization = 'localization'
}

export type HeroSectionFragmentFragment = {
    __typename?: 'HeroSection';
    id: string;
    title?: string | null;
    subtitle?: string | null;
    image?: {
        __typename?: 'Asset';
        id: string;
        url: string;
        height?: number | null;
        width?: number | null;
        mimeType?: string | null;
        handle: string;
    } | null;
    actions: Array<{
        __typename?: 'Action';
        id: string;
        label: string;
        url: string;
        primary?: boolean | null;
        icon?: string | null;
        iconPosition?: IconPosition | null;
    }>;
};

export type CtaSectionFragmentFragment = {
    __typename?: 'CtaSection';
    id: string;
    title?: string | null;
    subtitle?: string | null;
    actions: Array<{
        __typename?: 'Action';
        id: string;
        label: string;
        url: string;
        primary?: boolean | null;
        icon?: string | null;
        iconPosition?: IconPosition | null;
    }>;
};

export type ContactUsSectionFragmentFragment = {
    __typename?: 'ContactUsSection';
    id: string;
    title?: string | null;
    subtitle?: string | null;
};

export type FeaturesSectionFragmentFragment = {
    __typename?: 'FeaturesSection';
    id: string;
    title?: string | null;
    subtitle?: string | null;
    features: Array<{
        __typename?: 'FeatureItem';
        id: string;
        title?: string | null;
        icon?: string | null;
        content?: string | null;
    }>;
};

export type LogosSectionFragmentFragment = {
    __typename?: 'LogosSection';
    id: string;
    title?: string | null;
    subtitle?: string | null;
    logos: Array<{
        __typename?: 'LogoItem';
        id: string;
        title?: string | null;
        url?: string | null;
        image?: {
            __typename?: 'Asset';
            id: string;
            url: string;
            height?: number | null;
            width?: number | null;
            mimeType?: string | null;
            handle: string;
        } | null;
    }>;
};

export type PricingSectionFragmentFragment = {
    __typename?: 'PricingSection';
    id: string;
    title?: string | null;
    subtitle?: string | null;
    pricingPlans: Array<{
        __typename?: 'PricingPlan';
        id: string;
        title?: string | null;
        subtitle?: string | null;
        price?: string | null;
        planFeatures: Array<string>;
        action?: {
            __typename?: 'Action';
            id: string;
            label: string;
            url: string;
            primary?: boolean | null;
            icon?: string | null;
            iconPosition?: IconPosition | null;
        } | null;
    }>;
};

export type TeamSectionFragmentFragment = {
    __typename?: 'TeamSection';
    id: string;
    title?: string | null;
    subtitle?: string | null;
    variant?: TeamSectionVariant | null;
    team: Array<{
        __typename?: 'Person';
        id: string;
        name: string;
        title?: string | null;
        jobDescription?: string | null;
        photo?: {
            __typename?: 'Asset';
            id: string;
            url: string;
            height?: number | null;
            width?: number | null;
            mimeType?: string | null;
            handle: string;
        } | null;
        socialIconLinks: Array<{
            __typename?: 'SocialIconLink';
            id: string;
            label: string;
            url?: string | null;
            iconName: string;
        }>;
    }>;
};

export type ActionFragmentFragment = {
    __typename?: 'Action';
    id: string;
    label: string;
    url: string;
    primary?: boolean | null;
    icon?: string | null;
    iconPosition?: IconPosition | null;
};

export type LinkFragmentFragment = { __typename?: 'Link'; id: string; label: string; url: string };

export type AssetFragmentFragment = {
    __typename?: 'Asset';
    id: string;
    url: string;
    height?: number | null;
    width?: number | null;
    mimeType?: string | null;
    handle: string;
};

export type PersonFragmentFragment = {
    __typename?: 'Person';
    id: string;
    name: string;
    title?: string | null;
    jobDescription?: string | null;
    photo?: {
        __typename?: 'Asset';
        id: string;
        url: string;
        height?: number | null;
        width?: number | null;
        mimeType?: string | null;
        handle: string;
    } | null;
    socialIconLinks: Array<{
        __typename?: 'SocialIconLink';
        id: string;
        label: string;
        url?: string | null;
        iconName: string;
    }>;
};

export type LandingPageFragmentFragment = {
    __typename: 'LandingPage';
    id: string;
    title: string;
    slug: string;
    sections: Array<
        | { __typename: 'ContactUsSection'; id: string; title?: string | null; subtitle?: string | null }
        | {
              __typename: 'CtaSection';
              id: string;
              title?: string | null;
              subtitle?: string | null;
              actions: Array<{
                  __typename?: 'Action';
                  id: string;
                  label: string;
                  url: string;
                  primary?: boolean | null;
                  icon?: string | null;
                  iconPosition?: IconPosition | null;
              }>;
          }
        | {
              __typename: 'FeaturesSection';
              id: string;
              title?: string | null;
              subtitle?: string | null;
              features: Array<{
                  __typename?: 'FeatureItem';
                  id: string;
                  title?: string | null;
                  icon?: string | null;
                  content?: string | null;
              }>;
          }
        | {
              __typename: 'HeroSection';
              id: string;
              title?: string | null;
              subtitle?: string | null;
              image?: {
                  __typename?: 'Asset';
                  id: string;
                  url: string;
                  height?: number | null;
                  width?: number | null;
                  mimeType?: string | null;
                  handle: string;
              } | null;
              actions: Array<{
                  __typename?: 'Action';
                  id: string;
                  label: string;
                  url: string;
                  primary?: boolean | null;
                  icon?: string | null;
                  iconPosition?: IconPosition | null;
              }>;
          }
        | {
              __typename: 'LogosSection';
              id: string;
              title?: string | null;
              subtitle?: string | null;
              logos: Array<{
                  __typename?: 'LogoItem';
                  id: string;
                  title?: string | null;
                  url?: string | null;
                  image?: {
                      __typename?: 'Asset';
                      id: string;
                      url: string;
                      height?: number | null;
                      width?: number | null;
                      mimeType?: string | null;
                      handle: string;
                  } | null;
              }>;
          }
        | {
              __typename: 'PricingSection';
              id: string;
              title?: string | null;
              subtitle?: string | null;
              pricingPlans: Array<{
                  __typename?: 'PricingPlan';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  price?: string | null;
                  planFeatures: Array<string>;
                  action?: {
                      __typename?: 'Action';
                      id: string;
                      label: string;
                      url: string;
                      primary?: boolean | null;
                      icon?: string | null;
                      iconPosition?: IconPosition | null;
                  } | null;
              }>;
          }
        | {
              __typename: 'TeamSection';
              id: string;
              title?: string | null;
              subtitle?: string | null;
              variant?: TeamSectionVariant | null;
              team: Array<{
                  __typename?: 'Person';
                  id: string;
                  name: string;
                  title?: string | null;
                  jobDescription?: string | null;
                  photo?: {
                      __typename?: 'Asset';
                      id: string;
                      url: string;
                      height?: number | null;
                      width?: number | null;
                      mimeType?: string | null;
                      handle: string;
                  } | null;
                  socialIconLinks: Array<{
                      __typename?: 'SocialIconLink';
                      id: string;
                      label: string;
                      url?: string | null;
                      iconName: string;
                  }>;
              }>;
          }
    >;
};

export type PostPageFragmentFragment = {
    __typename?: 'PostPage';
    id: string;
    title: string;
    slug: string;
    date?: any | null;
    category?: string | null;
    categoryIcon?: string | null;
    excerpt?: string | null;
    content?: string | null;
    author?: {
        __typename?: 'Person';
        id: string;
        name: string;
        title?: string | null;
        jobDescription?: string | null;
        photo?: {
            __typename?: 'Asset';
            id: string;
            url: string;
            height?: number | null;
            width?: number | null;
            mimeType?: string | null;
            handle: string;
        } | null;
        socialIconLinks: Array<{
            __typename?: 'SocialIconLink';
            id: string;
            label: string;
            url?: string | null;
            iconName: string;
        }>;
    } | null;
    image?: {
        __typename?: 'Asset';
        id: string;
        url: string;
        height?: number | null;
        width?: number | null;
        mimeType?: string | null;
        handle: string;
    } | null;
    relatedPosts: Array<{
        __typename?: 'PostPage';
        id: string;
        slug: string;
        title: string;
        excerpt?: string | null;
        image?: {
            __typename?: 'Asset';
            id: string;
            url: string;
            height?: number | null;
            width?: number | null;
            mimeType?: string | null;
            handle: string;
        } | null;
    }>;
};

export type GetSiteConfigQueryVariables = Exact<{
    stage: Stage;
}>;

export type GetSiteConfigQuery = {
    __typename?: 'Query';
    siteConfigs: Array<{
        __typename?: 'SiteConfig';
        id: string;
        companyTitle: string;
        companyLogo: {
            __typename?: 'Asset';
            id: string;
            url: string;
            height?: number | null;
            width?: number | null;
            mimeType?: string | null;
            handle: string;
        };
        navbar: {
            __typename?: 'NavigationBar';
            id: string;
            links: Array<{ __typename?: 'Link'; id: string; label: string; url: string }>;
            actions: Array<{
                __typename?: 'Action';
                id: string;
                label: string;
                url: string;
                primary?: boolean | null;
                icon?: string | null;
                iconPosition?: IconPosition | null;
            }>;
        };
        footer: {
            __typename?: 'Footer';
            id: string;
            copyright?: string | null;
            socialIconLinks: Array<{
                __typename?: 'SocialIconLink';
                id: string;
                label: string;
                url?: string | null;
                iconName: string;
            }>;
            linkColumns: Array<{
                __typename?: 'FooterLinksColumn';
                id: string;
                label: string;
                links: Array<{ __typename?: 'Link'; id: string; label: string; url: string }>;
            }>;
        };
    }>;
};

export type GetLandingPagesQueryVariables = Exact<{
    stage: Stage;
}>;

export type GetLandingPagesQuery = {
    __typename?: 'Query';
    landingPages: Array<{
        __typename: 'LandingPage';
        id: string;
        title: string;
        slug: string;
        sections: Array<
            | { __typename: 'ContactUsSection'; id: string; title?: string | null; subtitle?: string | null }
            | {
                  __typename: 'CtaSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  actions: Array<{
                      __typename?: 'Action';
                      id: string;
                      label: string;
                      url: string;
                      primary?: boolean | null;
                      icon?: string | null;
                      iconPosition?: IconPosition | null;
                  }>;
              }
            | {
                  __typename: 'FeaturesSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  features: Array<{
                      __typename?: 'FeatureItem';
                      id: string;
                      title?: string | null;
                      icon?: string | null;
                      content?: string | null;
                  }>;
              }
            | {
                  __typename: 'HeroSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  image?: {
                      __typename?: 'Asset';
                      id: string;
                      url: string;
                      height?: number | null;
                      width?: number | null;
                      mimeType?: string | null;
                      handle: string;
                  } | null;
                  actions: Array<{
                      __typename?: 'Action';
                      id: string;
                      label: string;
                      url: string;
                      primary?: boolean | null;
                      icon?: string | null;
                      iconPosition?: IconPosition | null;
                  }>;
              }
            | {
                  __typename: 'LogosSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  logos: Array<{
                      __typename?: 'LogoItem';
                      id: string;
                      title?: string | null;
                      url?: string | null;
                      image?: {
                          __typename?: 'Asset';
                          id: string;
                          url: string;
                          height?: number | null;
                          width?: number | null;
                          mimeType?: string | null;
                          handle: string;
                      } | null;
                  }>;
              }
            | {
                  __typename: 'PricingSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  pricingPlans: Array<{
                      __typename?: 'PricingPlan';
                      id: string;
                      title?: string | null;
                      subtitle?: string | null;
                      price?: string | null;
                      planFeatures: Array<string>;
                      action?: {
                          __typename?: 'Action';
                          id: string;
                          label: string;
                          url: string;
                          primary?: boolean | null;
                          icon?: string | null;
                          iconPosition?: IconPosition | null;
                      } | null;
                  }>;
              }
            | {
                  __typename: 'TeamSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  variant?: TeamSectionVariant | null;
                  team: Array<{
                      __typename?: 'Person';
                      id: string;
                      name: string;
                      title?: string | null;
                      jobDescription?: string | null;
                      photo?: {
                          __typename?: 'Asset';
                          id: string;
                          url: string;
                          height?: number | null;
                          width?: number | null;
                          mimeType?: string | null;
                          handle: string;
                      } | null;
                      socialIconLinks: Array<{
                          __typename?: 'SocialIconLink';
                          id: string;
                          label: string;
                          url?: string | null;
                          iconName: string;
                      }>;
                  }>;
              }
        >;
    }>;
};

export type GetLandingPageForSlugQueryVariables = Exact<{
    stage: Stage;
    slug: Scalars['String']['input'];
}>;

export type GetLandingPageForSlugQuery = {
    __typename?: 'Query';
    landingPage?: {
        __typename: 'LandingPage';
        id: string;
        title: string;
        slug: string;
        sections: Array<
            | { __typename: 'ContactUsSection'; id: string; title?: string | null; subtitle?: string | null }
            | {
                  __typename: 'CtaSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  actions: Array<{
                      __typename?: 'Action';
                      id: string;
                      label: string;
                      url: string;
                      primary?: boolean | null;
                      icon?: string | null;
                      iconPosition?: IconPosition | null;
                  }>;
              }
            | {
                  __typename: 'FeaturesSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  features: Array<{
                      __typename?: 'FeatureItem';
                      id: string;
                      title?: string | null;
                      icon?: string | null;
                      content?: string | null;
                  }>;
              }
            | {
                  __typename: 'HeroSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  image?: {
                      __typename?: 'Asset';
                      id: string;
                      url: string;
                      height?: number | null;
                      width?: number | null;
                      mimeType?: string | null;
                      handle: string;
                  } | null;
                  actions: Array<{
                      __typename?: 'Action';
                      id: string;
                      label: string;
                      url: string;
                      primary?: boolean | null;
                      icon?: string | null;
                      iconPosition?: IconPosition | null;
                  }>;
              }
            | {
                  __typename: 'LogosSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  logos: Array<{
                      __typename?: 'LogoItem';
                      id: string;
                      title?: string | null;
                      url?: string | null;
                      image?: {
                          __typename?: 'Asset';
                          id: string;
                          url: string;
                          height?: number | null;
                          width?: number | null;
                          mimeType?: string | null;
                          handle: string;
                      } | null;
                  }>;
              }
            | {
                  __typename: 'PricingSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  pricingPlans: Array<{
                      __typename?: 'PricingPlan';
                      id: string;
                      title?: string | null;
                      subtitle?: string | null;
                      price?: string | null;
                      planFeatures: Array<string>;
                      action?: {
                          __typename?: 'Action';
                          id: string;
                          label: string;
                          url: string;
                          primary?: boolean | null;
                          icon?: string | null;
                          iconPosition?: IconPosition | null;
                      } | null;
                  }>;
              }
            | {
                  __typename: 'TeamSection';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  variant?: TeamSectionVariant | null;
                  team: Array<{
                      __typename?: 'Person';
                      id: string;
                      name: string;
                      title?: string | null;
                      jobDescription?: string | null;
                      photo?: {
                          __typename?: 'Asset';
                          id: string;
                          url: string;
                          height?: number | null;
                          width?: number | null;
                          mimeType?: string | null;
                          handle: string;
                      } | null;
                      socialIconLinks: Array<{
                          __typename?: 'SocialIconLink';
                          id: string;
                          label: string;
                          url?: string | null;
                          iconName: string;
                      }>;
                  }>;
              }
        >;
    } | null;
};

export type GetPostPagesQueryVariables = Exact<{
    stage: Stage;
}>;

export type GetPostPagesQuery = {
    __typename?: 'Query';
    postPages: Array<{
        __typename?: 'PostPage';
        id: string;
        title: string;
        slug: string;
        date?: any | null;
        category?: string | null;
        categoryIcon?: string | null;
        excerpt?: string | null;
        content?: string | null;
        author?: {
            __typename?: 'Person';
            id: string;
            name: string;
            title?: string | null;
            jobDescription?: string | null;
            photo?: {
                __typename?: 'Asset';
                id: string;
                url: string;
                height?: number | null;
                width?: number | null;
                mimeType?: string | null;
                handle: string;
            } | null;
            socialIconLinks: Array<{
                __typename?: 'SocialIconLink';
                id: string;
                label: string;
                url?: string | null;
                iconName: string;
            }>;
        } | null;
        image?: {
            __typename?: 'Asset';
            id: string;
            url: string;
            height?: number | null;
            width?: number | null;
            mimeType?: string | null;
            handle: string;
        } | null;
        relatedPosts: Array<{
            __typename?: 'PostPage';
            id: string;
            slug: string;
            title: string;
            excerpt?: string | null;
            image?: {
                __typename?: 'Asset';
                id: string;
                url: string;
                height?: number | null;
                width?: number | null;
                mimeType?: string | null;
                handle: string;
            } | null;
        }>;
    }>;
};

export type GetPostPageForSlugQueryVariables = Exact<{
    stage: Stage;
    slug: Scalars['String']['input'];
}>;

export type GetPostPageForSlugQuery = {
    __typename?: 'Query';
    postPage?: {
        __typename?: 'PostPage';
        id: string;
        title: string;
        slug: string;
        date?: any | null;
        category?: string | null;
        categoryIcon?: string | null;
        excerpt?: string | null;
        content?: string | null;
        author?: {
            __typename?: 'Person';
            id: string;
            name: string;
            title?: string | null;
            jobDescription?: string | null;
            photo?: {
                __typename?: 'Asset';
                id: string;
                url: string;
                height?: number | null;
                width?: number | null;
                mimeType?: string | null;
                handle: string;
            } | null;
            socialIconLinks: Array<{
                __typename?: 'SocialIconLink';
                id: string;
                label: string;
                url?: string | null;
                iconName: string;
            }>;
        } | null;
        image?: {
            __typename?: 'Asset';
            id: string;
            url: string;
            height?: number | null;
            width?: number | null;
            mimeType?: string | null;
            handle: string;
        } | null;
        relatedPosts: Array<{
            __typename?: 'PostPage';
            id: string;
            slug: string;
            title: string;
            excerpt?: string | null;
            image?: {
                __typename?: 'Asset';
                id: string;
                url: string;
                height?: number | null;
                width?: number | null;
                mimeType?: string | null;
                handle: string;
            } | null;
        }>;
    } | null;
};
