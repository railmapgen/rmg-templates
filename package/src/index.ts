import companyConfigJson from './templates/company-config.json';
import templateConfigsJson from './templates/template-configs.json';

export interface CompanyEntry {
    id: string;
    name: Translation;
}

enum RmgStyle {
    MTR = 'mtr',
    GZMTR = 'gzmtr',
    SHMetro = 'shmetro',
}

export interface TemplateEntry {
    filename: string;
    name: Translation;
    uploadBy?: string;
    style?: RmgStyle;
}

enum LanguageCode {
    Azerbaijani = 'az',
    Arabic = 'ar',
    Catalan = 'ca',
    Chinese = 'zh',
    ChineseCN = 'zh-CN',
    ChineseSimp = 'zh-Hans',
    ChineseTrad = 'zh-Hant',
    ChineseHK = 'zh-HK',
    ChineseTW = 'zh-TW',
    English = 'en',
    French = 'fr',
    Gaelic = 'ga',
    German = 'de',
    Hindi = 'hi',
    Japanese = 'ja',
    Korean = 'ko',
    Malay = 'ms',
    Norwegian = 'no',
    Spanish = 'es',
    Persian = 'fa',
    Portuguese = 'pt',
    Russian = 'ru',
    Swedish = 'sv',
    Turkish = 'tr',
}

type Translation = { [l in LanguageCode]?: string };

export const companyConfig = companyConfigJson as CompanyEntry[];
export const templateList = templateConfigsJson as Record<string, TemplateEntry[]>;
