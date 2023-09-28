import coreCompanyConfig from '../../public/resources/core-company-config.json';
import otherCompanyConfig from '../../public/resources/other-company-config.json';
import { LANGUAGE_NAMES } from '@railmapgen/rmg-translate';

const translationAssertion = (nameObj: any) => {
    expect(typeof nameObj).toBe('object');
    Object.entries(nameObj).forEach(([lang, name]) => {
        expect(lang in LANGUAGE_NAMES).toBeTruthy();
        expect(typeof name).toBe('string');
    });
};

const allCompanies = [...coreCompanyConfig, ...otherCompanyConfig];

describe('Sanity', () => {
    it('Check every config in company-config.json follows type CompanyEntry', () => {
        allCompanies.forEach(company => {
            expect(typeof company.id).toBe('string');
            translationAssertion(company.name);
        });
    });

    it.each(allCompanies.map(company => company.id))(
        'Check if config of %s and all declared templates exist',
        async companyId => {
            const { default: config } = await import(`../../public/resources/templates/${companyId}/00config.json`);
            for (const template of config) {
                const filename = template.filename;
                expect(typeof filename).toBe('string');
                translationAssertion(template.name);
                if (template.uploadBy) {
                    expect(typeof template.uploadBy).toBe('string');
                }

                // try import json as obj
                await import(`../../public/resources/templates/${companyId}/${filename}.json`);
            }
        }
    );
});
