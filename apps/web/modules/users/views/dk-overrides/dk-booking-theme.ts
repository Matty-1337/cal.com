// DK-CUSTOM: Delta Kinetics booking page theme — Calendly-style clean layout
// Controls all visual overrides injected via Booker's customClassNames prop.
// Brand color: #2563EB (Tailwind blue-600)
import type { CustomClassNames } from "@calcom/features/bookings/Booker/types";

export const dkBookingClassNames: CustomClassNames = {
  // Outer page wrapper — off-white bg, dk-booking scope, centered content
  bookerWrapper: "dk-booking !bg-[#f5f5f5] flex min-h-full w-full flex-col items-center justify-center",

  // Main card — max-width 960px, rounded-xl, shadow per spec, white bg, internal padding
  bookerContainer:
    "!max-w-[960px] !w-full !rounded-xl !shadow-[0_4px_24px_rgba(0,0,0,0.08)] !border !border-gray-100 !overflow-hidden !bg-white !p-8 md:!p-10",

  eventMetaCustomClassNames: {
    eventMetaContainer: "!bg-gray-50 !border-r !border-gray-100 !w-[220px] !min-w-[220px] !p-8",
    eventMetaTitle: "!text-[20px] !font-semibold !text-gray-900 !leading-tight",
    eventMetaTimezoneSelect: "!text-sm !text-gray-500 !mt-4",
    eventMetaChildren: "!text-sm !text-gray-500",
  },

  datePickerCustomClassNames: {
    datePickerContainer: "!px-0",
    datePickerTitle: "!text-sm !font-medium !text-gray-700 !uppercase !tracking-wide !mb-3",
    datePickerDays: "!text-sm !text-gray-400 !font-medium",
    datePickerDate: "!rounded-full !text-sm",
    datePickerDatesActive: "!bg-[#2563EB] !text-white hover:!bg-[#1d4ed8]",
    datePickerToggle: "!text-gray-500 hover:!text-gray-900",
  },

  availableTimeSlotsCustomClassNames: {
    availableTimeSlotsContainer: "!pt-2 !w-[240px] !min-w-[240px]",
    availableTimeSlotsHeaderContainer: "!mb-3",
    availableTimeSlotsTitle: "!text-sm !font-medium !text-gray-700 !uppercase !tracking-wide",
    availableTimeSlotsTimeFormatToggle: "!text-xs !text-gray-400",
    availableTimes:
      "dk-timeslot !w-full !border !border-[#e5e7eb] !rounded-lg !text-sm !font-medium hover:!bg-[#2563EB] hover:!border-[#2563EB] hover:!text-white",
  },

  confirmStep: {
    confirmButton: "!bg-[#2563EB] hover:!bg-[#1d4ed8] !rounded-lg !font-medium",
    backButton: "!text-gray-500 hover:!text-gray-700",
  },
};
