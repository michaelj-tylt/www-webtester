'use client';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { usePostHog } from 'posthog-js/react';
import { Section } from '@/shared/section';

interface ContactSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactSalesModal({ isOpen, onClose }: ContactSalesModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    revenue: '',
    employees: '',
    automation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const posthog = usePostHog();

  const revenueOptions = [
    'Under $100K',
    '$100K - $250K',
    '$250K - $500K',
    '$500K - $1M',
    '$1M - $5M',
    '$5M - $10M',
    'Over $10M'
  ];

  const employeeOptions = [
    '1-5 employees',
    '6-10 employees',
    '11-25 employees',
    '26-50 employees',
    '51-100 employees',
    '101-250 employees',
    '250+ employees'
  ];

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.revenue) {
      newErrors.revenue = 'Revenue range is required';
    }

    if (!formData.employees) {
      newErrors.employees = 'Employee count is required';
    }

    if (!formData.automation.trim()) {
      newErrors.automation = 'Please describe what you&apos;d like to automate';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    posthog?.capture('contact_sales_form_submitted', {
      revenue: formData.revenue,
      employees: formData.employees,
      automation: formData.automation
    });

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          revenue: formData.revenue,
          employees: formData.employees,
          automation: formData.automation,
          theme: 'enterprise'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ea580c', '#fb923c', '#fed7aa']
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          revenue: '',
          employees: '',
          automation: ''
        });
      } else {
        setErrors({ general: 'Failed to submit form. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ general: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', revenue: '', employees: '', automation: '' });
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      <div className="relative bg-zinc-900 rounded-2xl border border-zinc-700 shadow-2xl max-w-5xl w-full h-[600px] overflow-hidden">
        {!isSuccess ? (
          <div className="grid grid-cols-2 h-full">
            {/* Left Column - Form */}
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <Section.Subheading>Contact Sales</Section.Subheading>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {errors.general && (
                  <div className="bg-red-900/50 border border-red-500 rounded-lg p-3 text-red-200 text-sm">
                    {errors.general}
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-zinc-600 focus:ring-orange-500'
                    }`}
                    placeholder="Your Name *"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-zinc-600 focus:ring-orange-500'
                    }`}
                    placeholder="Email Address *"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <select
                    required
                    value={formData.revenue}
                    onChange={(e) => {
                      setFormData({ ...formData, revenue: e.target.value });
                      if (errors.revenue) setErrors({ ...errors, revenue: '' });
                    }}
                    className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-colors ${
                      errors.revenue ? 'border-red-500 focus:ring-red-500' : 'border-zinc-600 focus:ring-orange-500'
                    }`}
                  >
                    <option value="">Annual Revenue *</option>
                    {revenueOptions.map((option) => (
                      <option key={option} value={option} className="bg-zinc-800">
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.revenue && <p className="text-red-400 text-sm mt-1">{errors.revenue}</p>}
                </div>

                <div>
                  <select
                    required
                    value={formData.employees}
                    onChange={(e) => {
                      setFormData({ ...formData, employees: e.target.value });
                      if (errors.employees) setErrors({ ...errors, employees: '' });
                    }}
                    className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-colors ${
                      errors.employees ? 'border-red-500 focus:ring-red-500' : 'border-zinc-600 focus:ring-orange-500'
                    }`}
                  >
                    <option value="">Employee Count *</option>
                    {employeeOptions.map((option) => (
                      <option key={option} value={option} className="bg-zinc-800">
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.employees && <p className="text-red-400 text-sm mt-1">{errors.employees}</p>}
                </div>

                <div>
                  <textarea
                    required
                    value={formData.automation}
                    onChange={(e) => {
                      setFormData({ ...formData, automation: e.target.value });
                      if (errors.automation) setErrors({ ...errors, automation: '' });
                    }}
                    className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 resize-none transition-colors ${
                      errors.automation ? 'border-red-500 focus:ring-red-500' : 'border-zinc-600 focus:ring-orange-500'
                    }`}
                    placeholder="What would you automate away if you could? *"
                    rows={4}
                  />
                  {errors.automation && <p className="text-red-400 text-sm mt-1">{errors.automation}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Contact Sales'
                  )}
                </button>
              </form>
            </div>

            {/* Right Column - Content */}
            <div className="bg-gradient-to-br from-orange-900/20 to-zinc-800/50 p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <Section.Subheading>Enterprise Sales</Section.Subheading>
                <p className="text-gray-300 text-lg">We demo the app for you and onboard you personally - helping you create your initial test suite</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Live demo with your actual workflows</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Personal onboarding and training sessions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Help creating your initial test suite</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Custom ROI analysis for your organization</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Enterprise security and compliance review</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Custom pricing and volume discounts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <Section.Subheading>Thank you!</Section.Subheading>
              <p className="text-gray-300 mb-6">We&apos;ll be in touch within 24 hours to schedule your personal onboarding and demo.</p>
              <button
                onClick={handleClose}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}