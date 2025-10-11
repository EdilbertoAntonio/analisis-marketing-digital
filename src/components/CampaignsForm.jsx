import React from "react";
import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';
import InputNumber from '../components/InputNumber';
import Select from "./Select";
import Tooltip from "./Tooltip";
import '../assets/styles/campaignForm.css';
import { PLATFORMS_LIST } from '../constants/platforms';

const platforms = PLATFORMS_LIST;

export function CampaignsForm({ values, handleChange, errors, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="metrics-container" noValidate>

      <h3 className="header-icon"> 
        <i className="material-symbols-outlined">bar_chart</i>
        Campaign Metrics Form  
      </h3>
      <p className="subtitle">Enter your social media campaign metrics to track performance</p>

      <h4>Campaign Details</h4>
      <div className="form-range-container">
        <div className="form-input">
          <Label htmlFor="date"> 
            Start Date:
            <Tooltip title="The date when the campaign was launched."/>
          </Label>
          <Input
            type="date"
            id="startDate"
            value={values.startDate}
            onChange={handleChange}
            placeholder="DD/MM/YYYY"
            error={errors.startDate}
          />
          {errors.startDate && <p className="message-error">{errors.startDate}</p>}
        </div>

        <div className="form-input">
          <Label htmlFor="date"> 
            End Date:
            <Tooltip title="The date when the campaign concluded."/>
          </Label>
          <Input
            type="date"
            id="endDate"
            value={values.endDate}
            onChange={handleChange}
            placeholder="DD/MM/YYYY"
            error={errors.endDate}
          />
          {errors.endDate && <p className="message-error">{errors.endDate}</p>}
        </div>
      </div>

      <div className="form-range-container">
        <div className="form-input">
          <Label htmlFor="campaignName">
            Campaign name:
            <Tooltip title="The official name of your marketing campaign."/>
          </Label>
          <Input
              type="text"
              id="campaignName"
              value={values.campaignName}
              onChange={handleChange}
              placeholder="Campaign name"
              error={errors.campaignName}
          />
          {errors.campaignName && <p className="message-error">{errors.campaignName}</p>}
        </div>

        <div className="form-input">
          <Label htmlFor="platform">
            Platform:
            <Tooltip title="The social network where the campaign was published."/>
          </Label>
          <Select
            id="platform"
            value={values.platform}
            onChange={handleChange}
            placeholder="Select a social media platform"
            error={errors.platform}
          >
            {platforms.map(platform => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </Select>
          {errors.platform && <p className="message-error">{errors.platform}</p>}
        </div>
      </div>

      <hr className="custom-divider" />

      <h4>Reach Metrics</h4>
      <div className="form-range-container">
        <div className="form-input">
          <Label htmlFor="reach">
            Reach:
            <Tooltip title="Total unique viewers."/>
          </Label>
          <InputNumber
            id="reach"
            value={values.reach}
            onChange={handleChange}
            placeholder="0"    
            error={errors.reach}    
          />
          {errors.reach && (<p className="message-error">{errors.reach}</p>)}
        </div>

        <div className="form-input">
          <Label htmlFor="impressions">
            Impressions:
            <Tooltip title="Total number of times your content was displayed"/>
          </Label>
          <InputNumber
            id="impressions"
            value={values.impressions}
            onChange={handleChange}
            placeholder="0"    
            error={errors.impressions}     
          />
          {errors.impressions && <p className="message-error">{errors.impressions}</p>}
        </div>
      </div>

      <hr className="custom-divider" />

      <h4>Engagement Metrics</h4>
      <div className="form-range-container">   
        <div className="form-input">
          <Label htmlFor="clicks">
            Clicks:
            <Tooltip title="Total number of clicks recorded"/>
          </Label>
          <InputNumber
            id="clicks"
            value={values.clicks}
            onChange={handleChange}
            placeholder="0"
            error={errors.clicks}
          />
          {errors.clicks && <p className="message-error">{errors.clicks}</p>}
        </div>

        <div className="form-input">
          <Label htmlFor="amountSpent">
            Amount Spent:
            <Tooltip title="Total budget spent on this campaign."/>
          </Label>
          <InputNumber
            id="amountSpent"
            value={values.amountSpent}
            onChange={handleChange}
            isDecimal = {true}
            placeholder="$0.00"
            error={errors.amountSpent}
          />
          {errors.amountSpent && <p className="message-error">{errors.amountSpent}</p>}
        </div>
      </div> 

      <hr className="custom-divider" />

      <h4>Conversion Metrics</h4>    
      <div className="form-range-container">
        <div className="form-input">
          <Label htmlFor="conversions">
            Conversions:
            <Tooltip title="Number of users who completed the desired action"/>
          </Label>
          <p className="legend">*</p>
          <InputNumber
            id="conversions"
            value={values.conversions}
            onChange={handleChange}
            placeholder="0"
            error={errors.conversions}
          />
          {errors.conversions && (<p className="message-error">{errors.conversions}</p>)}
        </div>

        <div className="form-input">
          <Label htmlFor="revenue">
            Revenue:
            <Tooltip title="Total income generated directly from this campaign."/>
          </Label>
          <p className="legend">Optional: Used to calculate ROI and ROAS</p>
          <InputNumber
            id="revenue"
            value={values.revenue}
            onChange={handleChange}
            isDecimal = {true}
            placeholder="$0.00"
            error={errors.revenue}
          />
          {errors.revenue && <p className="message-error">{errors.revenue}</p>}
        </div>
      </div>

      <hr className="custom-divider" />

      <h4>Calculated Metrics</h4>    
      <div className="form-range-container">
        <div className="form-input">
          <Label htmlFor="frequency">
            Frequency:
            <Tooltip title="Impresions/Reach"/>
          </Label>
          <Input
            type="number"
            id="frequency"
            value={values.reach ? ((values.impressions)/(values.reach)).toFixed(2) : "0.00"}
            readOnly={true}
            placeholder="0.00"
          />
        </div>

        <div className="form-input">
          <Label htmlFor="ctr">
            CTR:
            <Tooltip title="Click Through Rate - '(Clicks/Impressions)*100'"/>
          </Label>
          <Input
            type="number"
            id="ctr"
            value={values.impressions ? ((values.clicks/values.impressions)*100).toFixed(2) : "0.00"}
            readOnly={true}
            placeholder="0.00%"
          />
        </div>

        <div className="form-input">
          <Label htmlFor="cpc">
            CPC:
            <Tooltip title="Cost per Click - 'Amount Spent/Clicks'"/>
          </Label>
          <Input
            type="number"
            id="cpc"
            value={values.clicks ? (values.amountSpent/values.clicks).toFixed(2) : "0.00"}
            readOnly={true}
            placeholder="$0.00"
          />
        </div>

        <div className="form-input">
          <Label htmlFor="cpm">
            CPM:
            <Tooltip title="Cost per Mile - '(Amount Spent/Impresions)*1000'"/>
          </Label>
          <Input
            type="number"
            id="cpm"
            value={values.impressions ? ((values.amountSpent/values.impressions)*1000).toFixed(2) : "0.00"}
            readOnly={true}
            placeholder="$0.00"
          />
        </div>
      </div>

      <div className="form-range-container">
        <div className="form-input">
          <Label htmlFor="costPerConversion">
            Cost per conversion:
            <Tooltip title="'Amount Spent/Conversions'"/>
          </Label>
          <Input
            type="number"
            id="costPerConversion"
            value={values.conversions ? (values.amountSpent/values.conversions).toFixed(2) : "0.00"}
            readOnly={true}
            placeholder="$0.00"
          />
        </div>

        <div className="form-input">
          <Label htmlFor="conversionRate">
            Conversion Rate:
            <Tooltip title="'(Conversions/Clicks)*100'"/>
          </Label>
          <Input
            type="number"
            id="conversionRate"
            value={values.clicks ? ((values.conversions/values.clicks)*100).toFixed(2) : "0.00"}
            readOnly={true}
            placeholder="0.00%"
          />
        </div>

        <div className="form-input">
          <Label htmlFor="ROI">
            ROI:
            <Tooltip title="Return on Investment - '(Revenue - Amount Spent)/Amount Spent'"/>
          </Label>
          <Input
            type="number"
            id="roi"
            value={values.amountSpent ? ((values.revenue - values.amountSpent)/values.amountSpent).toFixed(2) : "0.00"}
            readOnly={true}
            placeholder="0.00%"
          />
        </div>

        <div className="form-input">
          <Label htmlFor="ROAS">
            ROAS:
            <Tooltip title="Return of Amount Spent - 'Revenue/Amount Spent'"/>
          </Label>
          <Input
            type="number"
            id="roas"
            value={values.amountSpent ? (values.revenue/values.amountSpent).toFixed(2) : "0.00"}
            readOnly={true}
            placeholder="0.00"
          />
        </div>
      </div>

      <Button type="submit"> 
        <span className="material-icons">save</span>
        Save campaing metrics
      </Button>

    </form>
  );
} 