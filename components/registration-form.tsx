"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calender"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  mobileNumber: z.string().min(10, { message: "Valid mobile number is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  dob: z.date({ required_error: "Date of birth is required" }),
  playerRole: z.string().min(1, { message: "Player role is required" }),
  state: z.string().min(1, { message: "State is required" }),
  city: z.string().min(1, { message: "City is required" }),
  referralCode: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, { message: "You must accept the terms and conditions" }),
})

export default function RegistrationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      termsAccepted: false,
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
    alert("Registration submitted successfully!")
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-none shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-6 text-white text-center">
          <CardTitle className="text-3xl font-bold">Registration</CardTitle>
        </div>
        <CardContent className="bg-gradient-to-br from-blue-500 to-blue-800 text-white p-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  className="bg-white text-black placeholder:text-gray-500"
                  placeholder="Enter your full name"
                  {...form.register("fullName")}
                />
                {form.formState.errors.fullName && (
                  <p className="text-red-200 text-sm">{form.formState.errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobileNumber" className="text-white">
                  Mobile Number *
                </Label>
                <Input
                  id="mobileNumber"
                  className="bg-white text-black placeholder:text-gray-500"
                  placeholder="Enter your mobile number"
                  {...form.register("mobileNumber")}
                />
                {form.formState.errors.mobileNumber && (
                  <p className="text-red-200 text-sm">{form.formState.errors.mobileNumber.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="bg-white text-black placeholder:text-gray-500"
                placeholder="Enter your email"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-red-200 text-sm">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dob" className="text-white">
                  DOB *
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full bg-white text-black hover:bg-gray-100 justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {form.getValues("dob") ? format(form.getValues("dob"), "dd-MM-yyyy") : <span>dd-mm-yyyy</span>}
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
                  Player Roll *
                </Label>
                <Select onValueChange={(value) => form.setValue("playerRole", value)}>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue placeholder="Batter" />
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="state" className="text-white">
                  State *
                </Label>
                <Select onValueChange={(value) => form.setValue("state", value)}>
                  <SelectTrigger className="bg-white text-black">
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
                  className="bg-white text-black placeholder:text-gray-500"
                  placeholder="Enter city"
                  {...form.register("city")}
                />
                {form.formState.errors.city && (
                  <p className="text-red-200 text-sm">{form.formState.errors.city.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="referralCode" className="text-white">
                Referral Code:
              </Label>
              <div className="flex gap-2">
                <Input
                  id="referralCode"
                  className="bg-white text-black placeholder:text-gray-500"
                  placeholder="Enter referral code"
                  {...form.register("referralCode")}
                />
                <Button type="button" className="bg-black hover:bg-gray-800 text-white">
                  Apply
                </Button>
              </div>
              <p className="text-sm text-blue-100">If you don&apos;t have a code, skip this box.</p>
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
