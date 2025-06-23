"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { toast } from "sonner";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/app/components/ui/select";
import { Button } from "@/app/components/ui/button";
import MultiSelectCheckbox from "@/app/components/MultiSelectCheckbox";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  bio: z.string().min(10, "Bio should be at least 10 characters"),
  categories: z.array(z.string()).min(1, "Select at least one category"),
  languages: z.array(z.string()).min(1, "Select at least one language"),
  location: z.string().min(2, "Location is required"),
  feeRange: z.string().min(1, "Select a fee range"),
  image: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function OnboardingForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [],
      languages: [],
    },
  });

  const onSubmit = (data: FormData) => {
    toast.success("Artist submitted successfully!");
    reset();
    console.log("Form Data:", data);
  };

  const categories = ["Singer", "Dancer", "DJ", "Speaker"];
  const languages = ["English", "Hindi", "Punjabi", "Tamil"];
  const feeRanges = ["Under ₹10k", "₹10k - ₹25k", "Above ₹25k"];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Bio */}
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" {...register("bio")} />
        {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label>Category</Label>
        <MultiSelectCheckbox
          options={categories}
          selected={watch("categories")}
          onChange={(val) => setValue("categories", val)}
          placeholder="Select Categories"
        />
        {errors.categories && <p className="text-red-500 text-sm">{errors.categories.message}</p>}
      </div>

      {/* Languages */}
      <div className="space-y-2">
        <Label>Languages Spoken</Label>
        <MultiSelectCheckbox
          options={languages}
          selected={watch("languages")}
          onChange={(val) => setValue("languages", val)}
          placeholder="Select Languages"
        />
        {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
      </div>

      {/* Fee Range */}
      <div className="space-y-2">
        <Label>Fee Range</Label>
        <Select onValueChange={(val) => setValue("feeRange", val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select fee range" />
          </SelectTrigger>
          <SelectContent>
            {feeRanges.map((range) => (
              <SelectItem key={range} value={range}>{range}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.feeRange && <p className="text-red-500 text-sm">{errors.feeRange.message}</p>}
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" {...register("location")} />
        {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <Label htmlFor="image">Profile Image (optional)</Label>
        <Input id="image" type="file" {...register("image")} />
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">Submit</Button>
    </form>
  );
}
