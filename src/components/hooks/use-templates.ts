import { useRootDispatch, useRootSelector } from '../../redux';
import { TemplateEntry } from '../../package';
import { useEffect, useState } from 'react';
import { setTemplateListByCompany } from '../../redux/app/app-slice';

export interface IUseTemplates {
    templates: TemplateEntry[];
    isLoading: boolean;
}

export default function useTemplates(company: string): IUseTemplates {
    const dispatch = useRootDispatch();
    const { templateList } = useRootSelector(state => state.app);

    const [result, setResult] = useState<TemplateEntry[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!company || company === 'new') {
            setResult([]);
        } else if (company in templateList) {
            setResult(templateList[company]);
        } else {
            setIsLoading(true);
            fetch('/rmg-templates/resources/templates/' + company + '/00config.json')
                .then(res => res.json() as Promise<TemplateEntry[]>)
                .then(templates => {
                    setResult(templates);

                    // cache template list
                    dispatch(setTemplateListByCompany({ company, templates }));
                })
                .finally(() => setIsLoading(false));
        }
    }, [company]);

    return { templates: result, isLoading };
}
