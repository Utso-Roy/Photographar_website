"use client";
import React from "react";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen px-5 py-18">
      <div className="card w-full max-w-5xl background p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Login Form */}
          <div className="flex-1 flex flex-col items-center justify-center gap-5">
            
            {/* Headline */}
            <h2 className="text-3xl font-bold text-center mb-2">Sing Up</h2>

            {/* Input Fields */}
            <div className="flex flex-col gap-5 w-full md:w-72">
              <span className="p-float-label">
                <InputText id="userName" type="text" className="w-full " />
                <label className="p-inputColor" htmlFor="userName">
                  UserName
                </label>
              </span>
              <span className="p-float-label">
                <InputText id="email" type="email" className="w-full " />
                <label className="p-inputColor" htmlFor="email">
                  Email
                </label>
              </span>
              <span className="p-float-label">
                <InputText id="password" type="password" className="w-full" />
                <label className="p-inputColor" htmlFor="password">
                  Password
                </label>
              </span>
            </div>

            {/* Login Button */}
            <div className="w-full md:w-72">
              <Button
                label="Login"
                icon="pi pi-user"
                className="w-full my-btn"
                style={{ border: "none", boxShadow: "none" }}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <Divider layout="vertical" className="hidden md:flex">
              <b>OR</b>
            </Divider>
            <Divider
              layout="horizontal"
              className="flex md:hidden"
              align="center"
            >
              <b>OR</b>
            </Divider>
          </div>

          {/* Sign Up Button */}
         <div className="flex-1 flex flex-col items-center justify-center gap-4">
  {/* Headline */}
  <h2 className="text-md md:text-md font-semibold text-center">
    Already have an account?
  </h2>

  {/* Sign In Button */}
  <Link href="/pages/login">
    <Button
      label="Sign In"
      icon="pi pi-user"
      severity="success"
      className="w-40 md:w-60 p-button-success"
    />
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}
