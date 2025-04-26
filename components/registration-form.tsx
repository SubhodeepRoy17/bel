"use client"

import type React from "react"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calender"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

const formSchema = z.object({
  teamName: z.string().min(2, { message: "Team name is required" }),
  captainName: z.string().min(2, { message: "Captain name is required" }),
  viceCaptainName: z.string().min(2, { message: "Vice-Captain name is required" }),
  captainPhone: z.string().min(10, { message: "Valid phone number is required" }),
  viceCaptainPhone: z.string().min(10, { message: "Valid phone number is required" }),
  headCoach: z.string().optional(),
  captainEmail: z.string().email({ message: "Valid email is required" }),
  playerDetails: z.string().min(5, { message: "Player details are required" }),
  paymentMode: z.enum(["online", "offline"]),
  state: z.string().min(1, { message: "State is required" }),
  city: z.string().min(1, { message: "City is required" }),
  dob: z.date({ required_error: "Date of birth is required" }),
  playerRole: z.string().min(1, { message: "Player role is required" }),
  referralCode: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, { message: "You must accept the terms and conditions" }),
})

export default function RegistrationForm() {
  const [teamLogoFile, setTeamLogoFile] = useState<File | null>(null)
  const [paymentFile, setPaymentFile] = useState<File | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMode: "online",
      termsAccepted: false,
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // In a real application, you would handle the form submission here
    // including uploading the files to a server
    console.log(data, { teamLogoFile, paymentFile })
    alert("Registration submitted successfully!")
  }

  const handleTeamLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTeamLogoFile(e.target.files[0])
    }
  }

  const handlePaymentFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentFile(e.target.files[0])
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-none shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-6 text-white text-center">
          <CardTitle className="text-3xl font-bold mb-2">Registration</CardTitle>
          <CardDescription className="text-blue-100">Bengal Elite League Tournament | May 14-18, 2025</CardDescription>
        </div>
        <CardContent className="bg-gradient-to-br from-blue-500 to-blue-800 text-white p-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="teamName" className="text-white">
                  Team Name *
                </Label>
                <Input
                  id="teamName"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
                  placeholder="Enter team name"
                  {...form.register("teamName")}
                />
                {form.formState.errors.teamName && (
                  <p className="text-red-200 text-sm">{form.formState.errors.teamName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="captainName" className="text-white">
                  Captain Name *
                </Label>
                <Input
                  id="captainName"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
                  placeholder="Enter captain name"
                  {...form.register("captainName")}
                />
                {form.formState.errors.captainName && (
                  <p className="text-red-200 text-sm">{form.formState.errors.captainName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="viceCaptainName" className="text-white">
                  Vice-Captain *
                </Label>
                <Input
                  id="viceCaptainName"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
                  placeholder="Enter vice-captain name"
                  {...form.register("viceCaptainName")}
                />
                {form.formState.errors.viceCaptainName && (
                  <p className="text-red-200 text-sm">{form.formState.errors.viceCaptainName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="captainPhone" className="text-white">
                  Ph. No. (Captain) *
                </Label>
                <Input
                  id="captainPhone"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
                  placeholder="Enter captain's phone number"
                  {...form.register("captainPhone")}
                />
                {form.formState.errors.captainPhone && (
                  <p className="text-red-200 text-sm">{form.formState.errors.captainPhone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="viceCaptainPhone" className="text-white">
                  Ph. No. (Vice Captain) *
                </Label>
                <Input
                  id="viceCaptainPhone"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
                  placeholder="Enter vice-captain's phone number"
                  {...form.register("viceCaptainPhone")}
                />
                {form.formState.errors.viceCaptainPhone && (
                  <p className="text-red-200 text-sm">{form.formState.errors.viceCaptainPhone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="captainEmail" className="text-white">
                  Email (Captain only) *
                </Label>
                <Input
                  id="captainEmail"
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
                  placeholder="Enter captain's email"
                  {...form.register("captainEmail")}
                />
                {form.formState.errors.captainEmail && (
                  <p className="text-red-200 text-sm">{form.formState.errors.captainEmail.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="headCoach" className="text-white">
                  Head Coach
                </Label>
                <Input
                  id="headCoach"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
                  placeholder="Enter head coach name"
                  {...form.register("headCoach")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob" className="text-white">
                  DOB *
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {form.getValues("dob") ? format(form.getValues("dob"), "PPP") : <span>dd-mm-yyyy</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={form.getValues("dob")}
                      onSelect={(date) => form.setValue("dob", date as Date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {form.formState.errors.dob && (
                  <p className="text-red-200 text-sm">{form.formState.errors.dob.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="playerRole" className="text-white">
                  Player Role *
                </Label>
                <Select onValueChange={(value) => form.setValue("playerRole", value)}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-white">
                    <SelectValue placeholder="Select player role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="batter">Batter</SelectItem>
                    <SelectItem value="bowler">Bowler</SelectItem>
                    <SelectItem value="all-rounder">All-Rounder</SelectItem>
                    <SelectItem value="wicket-keeper">Wicket Keeper</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.playerRole && (
                  <p className="text-red-200 text-sm">{form.formState.errors.playerRole.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="state" className="text-white">
                  State *
                </Label>
                <Select onValueChange={(value) => form.setValue("state", value)}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-white">
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="west-bengal">West Bengal</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.state && (
                  <p className="text-red-200 text-sm">{form.formState.errors.state.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-white">
                  City *
                </Label>
                <Input
                  id="city"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
                  placeholder="Enter city"
                  {...form.register("city")}
                />
                {form.formState.errors.city && (
                  <p className="text-red-200 text-sm">{form.formState.errors.city.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="referralCode" className="text-white">
                  Referral Code:
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="referralCode"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
                    placeholder="Enter referral code"
                    {...form.register("referralCode")}
                  />
                  <Button type="button" className="bg-black hover:bg-gray-800 text-white">
                    Apply
                  </Button>
                </div>
                <p className="text-sm text-blue-100">If you don't have a code, skip this box.</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="playerDetails" className="text-white">
                Player Details (In the form: Player Name_Role separated by comma) *
              </Label>
              <Textarea
                id="playerDetails"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white min-h-[100px]"
                placeholder="Example: John Doe_Batsman, Jane Smith_Bowler, ..."
                {...form.register("playerDetails")}
              />
              {form.formState.errors.playerDetails && (
                <p className="text-red-200 text-sm">{form.formState.errors.playerDetails.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-white">Team Logo *</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="teamLogo"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-white/10 border-white/20 hover:bg-white/20"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-2 text-white" />
                    <p className="mb-2 text-sm text-white">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-blue-100">Upload 1 supported file: image. Max 10 MB.</p>
                  </div>
                  <input
                    id="teamLogo"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleTeamLogoChange}
                  />
                </label>
              </div>
              {teamLogoFile && <p className="text-sm text-blue-100">Selected file: {teamLogoFile.name}</p>}
            </div>

            <div className="space-y-2">
              <Label className="text-white">Payment Mode *</Label>
              <RadioGroup
                defaultValue="online"
                onValueChange={(value) => form.setValue("paymentMode", value as "online" | "offline")}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="online" id="online" className="border-white text-white" />
                  <Label htmlFor="online" className="text-white">
                    Online
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="offline" id="offline" className="border-white text-white" />
                  <Label htmlFor="offline" className="text-white">
                    Offline
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label className="text-white">Upload Relevant File/(s) *</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="paymentFile"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-white/10 border-white/20 hover:bg-white/20"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-2 text-white" />
                    <p className="mb-2 text-sm text-white">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-blue-100">
                      Upload 1 supported file: PDF, document, image or presentation. Max 10 MB.
                    </p>
                  </div>
                  <input
                    id="paymentFile"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
                    onChange={handlePaymentFileChange}
                  />
                </label>
              </div>
              {paymentFile && <p className="text-sm text-blue-100">Selected file: {paymentFile.name}</p>}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                className="border-white data-[state=checked]:bg-white data-[state=checked]:text-blue-800"
                onCheckedChange={(checked) => form.setValue("termsAccepted", checked === true)}
              />
              <Label htmlFor="terms" className="text-sm text-white">
                I accept{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>
              </Label>
            </div>
            {form.formState.errors.termsAccepted && (
              <p className="text-red-200 text-sm">{form.formState.errors.termsAccepted.message}</p>
            )}

            <div className="text-center">
              <p className="text-white mb-4">Amount to be paid: Rs 999 (GST included)</p>
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full font-medium"
              >
                Pay and Register
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
