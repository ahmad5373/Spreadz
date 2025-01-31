import React, { useEffect, useState } from 'react';
import { getPolicy } from '../apiUtils/PrivacyPolicyApi';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import Container from '../customComponents/Container.';

const TermsAndConditions = () => {
    const [termsCondition, setTermsCondition] = useState('');
    const [loading, setLoading] = useState(false);

    const getTermsConditions = async () => {
        setLoading(true);
        try {
            const response = await getPolicy('terms');
            setTermsCondition(response?.data?.data || '');
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something Went Wrong. Try Again');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getTermsConditions();
    }, []);

    return (
        <div className="flex flex-col pt-12 w-full bg-gray-100">
            <div className="h-16 bg-gray-100"></div>
            <Container className="px-4 lg:px-20 xl1:px-44">
                <div className="lg:h-36 flex justify-between mt-4 lg:mt-0">
                    <h1 className="base-font-heading lg:text-5xl md:text-3xl text-xl lg:w-[823.771px] lg:mr-4 mr-12">
                        Allgemeine Geschäftsbedingungen
                    </h1>
                </div>
                <div className="pb-20 flex flex-col space-y-8 mt-2">
                    {loading ? (
                        <ClipLoader loading={loading} height={12} width={5} radius={5} margin={2} aria-label="Loading Spinner" color="black" />
                    ) : (
                        <div className="text-black base-font lg:text-lg text-md" dangerouslySetInnerHTML={{ __html: termsCondition }} />
                    )}
                </div>
            </Container>
        </div>
    );
};

export default TermsAndConditions;
