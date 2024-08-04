import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Field, FieldPath, UseFormReturn } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";
import { z } from "zod";

const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
  form: UseFormReturn<any>;
  label: string;
  placeholder: string;
  name: FieldPath<z.infer<typeof formSchema>>;
  type?: "email" | "password" | "text";
}

const CustomInput = ({ form, name, label, placeholder }: CustomInputProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => {
          return (
            <div className="form-item">
              <FormLabel className="form-label">{label}</FormLabel>
              <div className="flex w-full flex-col">
                <FormControl>
                  <Input
                    type={name === "password" ? "password" : "text"}
                    placeholder={placeholder}
                    className="input-class"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="form-message mt-2" />
              </div>
            </div>
          );
        }}
      />
    </>
  );
};

export default CustomInput;
