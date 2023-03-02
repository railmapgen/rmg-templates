import companyConfigJson from './templates/company-config.json';
import templateConfigsJson from './templates/template-configs.json';
import { Translation } from '@railmapgen/rmg-translate';

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

export const coreCompanyConfig = companyConfigJson as CompanyEntry[];
export const coreTemplateList = templateConfigsJson as Record<string, TemplateEntry[]>;
