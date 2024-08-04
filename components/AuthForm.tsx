"use client";

//  ^ Form Code
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";

import Image from "next/image";

import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import SignUp from "@/app/(AUTH)/sign-up/page";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  // ^ Form Code
  // Define Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Define a submit handler
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Sign up with Appwrite & create plaid token
      if (type === "sign-up") {
        // Sign up with Appwrite
        // Create Plaid Token
        // Sign in with Appwrite
        const newUser = await signUp(data);
        setUser(newUser);
      }
      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) {
          router.push("/");
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        {" "}
        <Link
          href={"/"}
          className="mb-12 flex cursor-pointer items-center gap-1 px-4 "
        >
          <Image
            src="/icons/logo.svg"
            alt="Horizon Logo"
            width={34}
            height={34}
            //   className="size-[24px] max-xl:size-14"
          />
          <h1 className="text-26 font-ibm-plex-serif font-black text-black-1 ">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36  font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to Horizon to get started"
              : type === "sign-in"
              ? "Sign in to your account to continue"
              : "Create an account to get started"}
          </p>
        </div>
      </header>

      {user ? (
        <div>{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 border border-border p-6 rounded-lg"
            >
              {/* Custom for Sign Up Page */}
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    {" "}
                    <CustomInput
                      form={form}
                      name="firstName"
                      label="First Name"
                      placeholder="John"
                    />
                    <CustomInput
                      form={form}
                      name="lastName"
                      label="Last Name"
                      placeholder="Doe"
                    />
                  </div>
                  <CustomInput
                    form={form}
                    name="address1"
                    label="Address"
                    placeholder="ex: 123 Street Name"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      form={form}
                      name="state"
                      label="State"
                      placeholder="ex: New York"
                    />
                    <CustomInput
                      form={form}
                      name="city"
                      label="City"
                      placeholder="ex: Brooklyn"
                    />
                    <CustomInput
                      form={form}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="ex: 12345"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      form={form}
                      name="dateOfBirth"
                      label="Date of Birth"
                      placeholder="yyyy-mm-dd"
                    />
                    <CustomInput
                      form={form}
                      name="ssn"
                      label="SSN"
                      placeholder="ex: 123-45-6789"
                    />
                  </div>

                  <CustomInput
                    form={form}
                    name="mobileNumber"
                    label="Mobile Number"
                    placeholder="ex: 123-45-6789"
                  />
                </>
              )}
              {/* End for Sign Up Page */}

              <CustomInput
                form={form}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <CustomInput
                form={form}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="form-btn"
                  disabled={isLoading}
                  onSubmit={() => {
                    onSubmit(form.getValues());
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" /> &nbsp; Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}

      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === "sign-in" ? "New to Horizon?" : "Already have an account?"}
        </p>
        <Link
          className="form-link"
          href={type === "sign-in" ? "/sign-up" : "sign-in"}
        >
          {type === "sign-in" ? "Sign Up" : "Sign In"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
