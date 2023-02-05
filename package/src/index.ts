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
    Danish = 'da',
    English = 'en',
    French = 'fr',
    Gaelic = 'ga',
    German = 'de',
    Greek = 'el',
    Hindi = 'hi',
    Hungarian = 'hu',
    Indonesian = 'id',
    Italian = 'it',
    Japanese = 'ja',
    Korean = 'ko',
    Malay = 'ms',
    Norwegian = 'no',
    Persian = 'fa',
    Polish = 'pl',
    Portuguese = 'pt',
    Romanian = 'ro',
    Russian = 'ru',
    Spanish = 'es',
    Swedish = 'sv',
    Thai = 'th',
    Turkish = 'tr',
    Urdu = 'ur',
    Uzbek = 'uz',
    Vietnamese = 'vn',
}

type Translation = { [l in LanguageCode]?: string };

export const coreCompanyConfig = companyConfigJson as CompanyEntry[];
export const coreTemplateList = templateConfigsJson as Record<string, TemplateEntry[]>;
