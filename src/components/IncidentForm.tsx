'use client';

import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/Select';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';
import { Shield, AlertTriangle, Paperclip } from 'lucide-react';
import { motion } from 'framer-motion';
import { IncidentReport, IncidentSeverity } from '@/types';
import { reportIncident } from '@/lib/api';
import { incidentTypes, severityLevels } from '@/lib/data';

export function IncidentForm() {
  const [formData, setFormData] = useState<IncidentReport>({
    type: '',
    date: '',
    time: '',
    description: '',
    impact: '',
    actions: '',
    severity: 'low',
    affectedSystems: [],
    witnesses: '',
    evidenceAttached: false,
    personName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    evidenceFile: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [newSystem, setNewSystem] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSelectChange = (field: keyof IncidentReport, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prevData => ({
      ...prevData,
      evidenceFile: file,
      evidenceAttached: !!file
    }));
  };

  const handleAddAffectedSystem = () => {
    if (newSystem.trim() !== '') {
      setFormData(prevData => ({
        ...prevData,
        affectedSystems: [...prevData.affectedSystems, newSystem.trim()]
      }));
      setNewSystem('');
    }
  };

  const handleRemoveAffectedSystem = (systemToRemove: string) => {
    setFormData(prevData => ({
      ...prevData,
      affectedSystems: prevData.affectedSystems.filter(system => system !== systemToRemove)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await reportIncident(formData);
      setSubmitted(true);
      setError('');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to submit the incident report');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0f1f3b] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Alert className="bg-green-900/30 border border-green-500">
            <Shield className="w-6 h-6 text-green-400" />
            <AlertTitle className="text-green-300 text-xl">Success!</AlertTitle>
            <AlertDescription className="text-green-200">
              Your incident report has been submitted successfully. Our team will review it shortly.
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1f3b] flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto bg-[#1a2b4a] shadow-2xl rounded-xl border border-[#2c3e5a]">
        <CardHeader className="border-b border-[#2c3e5a] py-4">
          <CardTitle className="text-[#4ecdc4] text-2xl font-bold flex items-center">
            <Shield className="mr-3 text-[#4ecdc4]" />
            Report a Security Incident
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Incident Type and Severity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="type" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                  Incident Type
                </label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => handleSelectChange('type', value)}
                >
                  <SelectTrigger className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]">
                    <SelectValue placeholder="Select incident type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2c3e5a] text-white">
                    {incidentTypes.map(type => (
                      <SelectItem 
                        key={type.value} 
                        value={type.value} 
                        className="focus:bg-[#4ecdc4]/20 hover:bg-[#4ecdc4]/10"
                      >
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="severity" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                  Severity
                </label>
                <Select
                  value={formData.severity}
                  onValueChange={(value) => handleSelectChange('severity', value as IncidentSeverity)}
                >
                  <SelectTrigger className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]">
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2c3e5a]">
                    {severityLevels.map(level => (
                      <SelectItem 
                        key={level.value} 
                        value={level.value} 
                        className="focus:bg-[#4ecdc4]/20 hover:bg-[#4ecdc4]/10"
                      >
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="personName" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                  Your Name
                </label>
                <Input
                  id="personName"
                  name="personName"
                  value={formData.personName}
                  onChange={handleInputChange}
                  className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]"
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                  Company Name
                </label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                  Phone Number
                </label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]"
                rows={4}
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                  Date of Incident
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                   value={formData.date}
                  onChange={handleInputChange}
                  className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                  Time of Incident
                </label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]"
                />
              </div>
            </div>

            {/* Impact and Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="impact" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                  Impact
                </label>
                <Textarea
                  id="impact"
                  name="impact"
                  value={formData.impact}
                  onChange={handleInputChange}
                  className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]"
                  rows={4}
                />
              </div>
              <div>
                <label htmlFor="actions" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                  Actions Taken
                </label>
                <Textarea
                  id="actions"
                  name="actions"
                  value={formData.actions}
                  onChange={handleInputChange}
                  className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]"
                  rows={4}
                />
              </div>
            </div>

            {/* Affected Systems */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                Affected Systems
              </label>
              <div className="flex items-center mb-2">
                <Input
                  type="text"
                  value={newSystem}
                  onChange={(e) => setNewSystem(e.target.value)}
                  placeholder="Add affected system"
                  className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4] flex-grow"
                />
                <Button
                  type="button"
                  onClick={handleAddAffectedSystem}
                  className="ml-2 bg-[#4ecdc4] text-white hover:bg-[#40CFEA] transition-colors duration-300"
                >
                  Add
                </Button>
              </div>
              <ul className="list-disc pl-5">
                {formData.affectedSystems.map((system) => (
                  <li key={system} className="flex justify-between items-center">
                    <span className="text-[#4ecdc4]">{system}</span>
                    <Button
                      type="button"
                      onClick={() => handleRemoveAffectedSystem(system)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Evidence Upload */}
            <div>
              <label htmlFor="evidenceFile" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                Evidence File
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]"
              />
            </div>

            {/* Witnesses */}
            <div>
              <label htmlFor="witnesses" className="block text-sm font-medium mb-2 text-[#4ecdc4]">
                Witnesses
              </label>
              <Textarea
                id="witnesses"
                name ="witnesses"
                value={formData.witnesses}
                onChange={handleInputChange}
                className="bg-[#2c3e5a] text-white border-[#4ecdc4]/30 focus:border-[#4ecdc4]"
                rows={4}
              />
            </div>

            

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-[#4ecdc4] text-white hover:bg-[#40CFEA] transition-colors duration-300 py-2 px-4 rounded-md shadow-sm"
            >
              Submit Report
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}