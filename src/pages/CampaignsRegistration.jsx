import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/TopBar";
import { CampaignsForm } from "../components/CampaignsForm";
import { useCampaignsForm } from "../hooks/useCampaignsForm";
import '../assets/styles/campaignForm.css';

const CampaignsRegistration = () => {

    const { values, handleChange, validateMetricsForm, errors, setValues } = useCampaignsForm({
        startDate: "",
        endDate: "",
        campaignName: "",
        platform: "",
        reach:"",
        impressions: "",
        clicks: "",
        amountSpent: "",
        conversions: "",
        revenue:""
    });

    const handleSubmit = (event) => {
        event.preventDefault();


        const formValues = {
            ...values,
            revenue: values.revenue === "" ? "0.00" : values.revenue
        };

        setValues(formValues)

        const isValid = validateMetricsForm();

        if (isValid) {
            console.log("Metrics sent:", formValues);
            alert("Metrics saved correctly");
        } else {
        alert("Check the errors in the form.");
        }
    };

    return (
        <div className="page-layout">
            <Sidebar/>
            <div className="page-content">
                <Topbar/>
                <div className="metric-wrapper">
                    <CampaignsForm
                        values={values}
                        handleChange={handleChange}
                        errors={errors}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )

}

export default CampaignsRegistration;