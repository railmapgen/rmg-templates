import { Translation } from '@railmapgen/rmg-translate';

export enum Events {
    APP_LOAD = 'APP_LOAD',

    UPLOAD_TEMPLATES = 'UPLOAD_TEMPLATES',
    RESET_TICKETS = 'RESET_TICKETS',

    APP_CLIP_VIEW_OPENED = 'APP_CLIP_VIEW_OPENED',
    APP_CLIP_VIEW_CLOSED = 'APP_CLIP_VIEW_CLOSED',
    APP_CLIP_VIEW_IMPORT = 'APP_CLIP_VIEW_IMPORT',
}

export type InvalidReasonType =
    | 'COMPANY_CODE_UNDEFINED'
    | 'COMPANY_NAME_INCOMPLETE'
    | 'TEMPLATE_SECTION_EMPTY'
    | 'TEMPLATE_CODE_UNDEFINED'
    | 'TEMPLATE_CODE_DUPLICATED'
    | 'TEMPLATE_NAME_INCOMPLETE'
    | 'TEMPLATE_PARAM_UNDEFINED';

export const INVALID_REASON: Record<InvalidReasonType, Translation> = {
    COMPANY_CODE_UNDEFINED: {
        en: 'Company code is missing',
        'zh-Hans': '缺少铁路公司代码',
        'zh-Hant': '缺少鐵路公司代碼',
    },
    COMPANY_NAME_INCOMPLETE: {
        en: 'Company name is not completed',
        'zh-Hans': '公司名称不完整',
        'zh-Hant': '公司名稱不完整',
    },
    TEMPLATE_SECTION_EMPTY: {
        en: 'Template section is empty',
        'zh-Hans': '模板部份为空白',
        'zh-Hant': '範本部份為空白',
    },
    TEMPLATE_CODE_UNDEFINED: {
        en: 'Template code is missing',
        'zh-Hans': '至少1个模板的代码缺失',
        'zh-Hant': '至少1個範本的代碼缺失',
    },
    TEMPLATE_CODE_DUPLICATED: {
        en: 'Duplicated template code found',
        'zh-Hans': '包含重复的模板代码',
        'zh-Hant': '包含重複的範本代碼',
    },
    TEMPLATE_NAME_INCOMPLETE: {
        en: 'Template name is not completed',
        'zh-Hans': '模板名称不完整',
        'zh-Hant': '範本名稱不完整',
    },
    TEMPLATE_PARAM_UNDEFINED: {
        en: 'Configuration file is not uploaded',
        'zh-Hans': '未上传模板配置文件',
        'zh-Hant': '未上載範本設定檔',
    },
};

export const GITHUB_ISSUE_PREAMBLE = '**Do not edit lines below, they are meant for bots only!!!**';

export const SELECTED_COMPANY_KEY = 'selectedCompany';
