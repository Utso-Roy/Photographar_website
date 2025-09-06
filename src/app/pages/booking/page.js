"use client";
import React from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

export default function Booking() {
  return (
    <div className="px-5 py-18 min-h-screen flex justify-center items-start ">
      <div className="w-full max-w-3xl background p-8 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-3 text-white">
          Book Your Session
        </h1>

        <p className="text-white text-center mb-4">
          Fill in your details below and schedule your photography session.
        </p>

        <form className="flex flex-col mt-5 gap-5">
          {/* Name */}
          <span className="p-float-label">
            <InputText id="name" className="w-full" />
            <label htmlFor="name">Full Name</label>
          </span>

          {/* Email */}
          <span className="p-float-label">
            <InputText id="email" type="email" className="w-full" />
            <label htmlFor="email">Email Address</label>
          </span>

          {/* Date Picker */}
          <span className="p-float-label w-full">
            <Calendar id="date" className="w-full" placeholder="Select Date" />
          </span>

          {/* Submit Button */}
          <Button
            label="Book Now"
            icon="pi pi-check"
            className="p-button-rounded my-btn w-full "
            style={{ border: "none", boxShadow: "none" }}
          />
        </form>
      </div>
    </div>
  );
}
