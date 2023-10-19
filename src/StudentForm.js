
import React, { useState } from "react";
import styles from "./Input.module.css";
import "./App.css"

function Input() {
  
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      age: '',
      address: '',
      homeroom: '',
      studentId: '',
      lunchOption: 'Pizza', // Default lunch option
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    return (
      <div className={styles.Input}>
        <h1>School Administrator Form</h1>
        <p>School administrators, please use this form to track students' favorite lunch options. 
        This information will be valuable for menu planning and ensuring that we provide meals that students enjoy.</p>
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
  
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
  
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              min="5"
              max="19"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
  
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
  
          <div>
            <label htmlFor="homeroom">Homeroom Class Number</label>
            <input
              type="text"
              name="homeroom"
              value={formData.homeroom}
              onChange={handleInputChange}
            />
          </div>
  
          <div>
            <label htmlFor="studentId">Student ID</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
            />
          </div>
  
          <div>
            <label>Favorite Lunch Option:</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="lunchOption"
                  value="Pizza"
                  checked={formData.lunchOption === 'Pizza'}
                  onChange={handleInputChange}
                />
                Pizza
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="lunchOption"
                  value="Burger"
                  checked={formData.lunchOption === 'Burger'}
                  onChange={handleInputChange}
                />
                Burger
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="lunchOption"
                  value="Salad"
                  checked={formData.lunchOption === 'Salad'}
                  onChange={handleInputChange}
                />
                Salad
              </label>
            </div>
          </div>
        </form>
  
        <div>
          <h2>Entered Data:</h2>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Age: {formData.age}</p>
          <p>Address: {formData.address}</p>
          <p>Homeroom Class Number: {formData.homeroom}</p>
          <p>Student ID: {formData.studentId}</p>
          <p>Favorite Lunch Option: {formData.lunchOption}</p>
        </div>
      </div>
  );
}

export default Input;
