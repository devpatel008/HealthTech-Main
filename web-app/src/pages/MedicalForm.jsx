import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function InputForm() {
  const token = localStorage.getItem('token');
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contactNumber: '',
    allergies: '',
    otherMedications: '',
    conditions: {
      asthma: false,
      cardiacDisease: false,
      hypertension: false,
      epilepsy: false,
      cancer: false,
      diabetes: false,
      psychiatricDisorder: false,
      other: false,
    },
    symptoms: {
        chestPain: false,
        respiratory: false,
        cardiovascular: false,
        hematological: false,
        lymphatic: false,
        genitourinary: false,
        neurological: false,
        psychiatric: false,
        gastrointestinal: false,
        musculoskeletal: false,
        weightGain: false,
        weightLoss: false,
        otherSymptoms: false, 
      // Add more symptoms as needed
    },
    alcoholConsumption : '',
    otherMedications : ''
    
    ,
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // if (type === 'checkbox') {
    //   setFormData(prevState => ({
    //     ...prevState,
    //     [name]: {
    //       ...prevState[name],
    //       [value]: checked // Use value instead of name
    //     }
    //   }));
    // } else {
      setFormData({ ...formData, [name]: value });
    // }
  };
  



  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
            .post('http://localhost:4000/api/v1/patient/medicalHistory', {formData}, { headers: { Authorization: `Bearer ${token}` } })
            .then(() => {
                // setLoading(false);
                navigate('/patient/dashboard');
            })
            .catch((error) => {
                // setLoading(false);
                alert('An error occurred. Please try again later.');
                console.log(error);
            });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Input Form</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {step === 1 && (
          <div>
            <h1 className="text-xl font-semibold mb-4">MEDICAL RECORD FORM</h1>
            <h1 className="text-xl font-semibold mb-4">Step 1</h1>
            <h2 className="text-xl font-semibold mb-4"> Personal Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                Age
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="age"
                type="number"
                placeholder="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contactNumber"
                type="tel"
                placeholder="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Check if patient has any of the following conditions:</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="conditions"
                    checked={formData.conditions.asthma}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Asthma</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="conditions"
                    checked={formData.conditions.cardiacDisease}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Cardiac Disease</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="conditions"
                    checked={formData.conditions.hypertension}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Hypertension</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="conditions"
                    checked={formData.conditions.epilepsy}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Epilepsy</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="conditions"
                    checked={formData.conditions.cancer}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Cancer</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="conditions"
                    checked={formData.conditions.diabetes}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Diabetes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="conditions"
                    checked={formData.conditions.psychiatricDisorder}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Psychiatric Disorder</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="conditions"
                    checked={formData.conditions.other}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div>
<div>
              <label className="block text-gray-700 text-sm font-bold mb-2 my-5">How often do you consume alcohol?</label>
<div className="mb-4">
  <label className="inline-flex items-center">
    <input
      type="radio"
      className="form-radio text-blue-600"
      name="alcoholConsumption"
      value="daily"
      checked={formData.alcoholConsumption === 'daily'}
      onChange={handleChange}
    />
    <span className="ml-2">Daily</span>
  </label>
  <label className="inline-flex items-center ml-4">
    <input
      type="radio"
      className="form-radio text-blue-600"
      name="alcoholConsumption"
      value="weekly"
      checked={formData.alcoholConsumption === 'weekly'}
      onChange={handleChange}
    />
    <span className="ml-2">Weekly</span>
  </label>
  <label className="inline-flex items-center ml-4">
    <input
      type="radio"
      className="form-radio text-blue-600"
      name="alcoholConsumption"
      value="monthly"
      checked={formData.alcoholConsumption === 'monthly'}
      onChange={handleChange}
    />
    <span className="ml-2">Monthly</span>
  </label>
  <label className="inline-flex items-center ml-4">
    <input
      type="radio"
      className="form-radio text-blue-600"
      name="alcoholConsumption"
      value="yearly"
      checked={formData.alcoholConsumption === 'yearly'}
      onChange={handleChange}
    />
    <span className="ml-2">Yearly</span>
  </label>
  <label className="inline-flex items-center ml-4">
    <input
      type="radio"
      className="form-radio text-blue-600"
      name="alcoholConsumption"
      value="never"
      checked={formData.alcoholConsumption === 'never'}
      onChange={handleChange}
    />
    <span className="ml-2">Never</span>
  </label>
</div></div>


<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">Medication Allergies</label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder="Enter any medication allergies"
    name="allergies"
    value={formData.allergies}
    onChange={handleChange}
  />
</div>



<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">Are you under any kind of medications</label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder="Enter any curretn Medications"
    name="otherMedications"
    value={formData.otherMedications}
    onChange={handleChange}
  />
</div>

<h2 className="text-xl font-semibold mb-4"> Symptoms</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Check the symptoms that you're currently experiencing:</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.chestPain}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Chest pain</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.respiratory}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Respiratory</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.cardiovascular}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Cardiovascular</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.hematological}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Hematological</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.lymphatic}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Lymphatic</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.genitourinary}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Genitourinary</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.neurological}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Neurological</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.psychiatric}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Psychiatric</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.gastrointestinal}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Gastrointestinal</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.musculoskeletal}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Musculoskeletal</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.weightGain}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Weight Gain</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.weightLoss}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Weight Loss</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    name="symptoms"
                    checked={formData.symptoms.otherSymptoms}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div>
            </div>





            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={nextStep}
            >
              Next
            </button>
          </div>



        )}
        {/* Add more steps as needed */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 2</h2>
            <h2 className="text-xl font-semibold mb-4">Additional Medical Information</h2>

            <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2"></label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder="Enter any additional informations you would like to provide about yourself concerning your overall health"
    name="medicationAllergies"
    value={formData.medicationAllergies}
    onChange={handleChange}
  />
</div>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={prevStep}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputForm;