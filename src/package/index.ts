import coreCompanyConfigJson from '../../public/resources/core-company-config.json';
import otherCompanyConfigJson from '../../public/resources/other-company-config.json';
import basicConfig from '../../public/resources/templates/basic/00config.json';
import gzmtrConfig from '../../public/resources/templates/gzmtr/00config.json';
import mtrConfig from '../../public/resources/templates/mtr/00config.json';
import shmetroConfig from '../../public/resources/templates/shmetro/00config.json';
import { Translation } from '@railmapgen/rmg-translate';

export const coreTemplateList = {
    basic: basicConfig,
    gzmtr: gzmtrConfig,
    mtr: mtrConfig,
    shmetro: shmetroConfig,
};

export interface CompanyEntry {
    id: string;
    name: Translation;
}

export interface TemplateEntry {
    filename: string;
    name: Translation;
    authors: string[];
}

export const coreCompanyConfig = coreCompanyConfigJson as CompanyEntry[];
export const otherCompanyConfig = otherCompanyConfigJson as CompanyEntry[];
