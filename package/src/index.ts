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

type LanguageCode =
    | 'ar'
    | 'az'
    | 'ca'
    | 'de'
    | 'en'
    | 'es'
    | 'fa'
    | 'fr'
    | 'ga'
    | 'gd'
    | 'hi'
    | 'ja'
    | 'ko'
    | 'ms'
    | 'no'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'tr'
    | 'ur'
    | 'zh'
    | 'zh-CN'
    | 'zh-Hans'
    | 'zh-Hant'
    | 'zh-HK'
    | 'zh-TW';
type Translation = Partial<Record<LanguageCode, string>>;

export const coreCompanyConfig = companyConfigJson as CompanyEntry[];
export const coreTemplateList = templateConfigsJson as Record<string, TemplateEntry[]>;
